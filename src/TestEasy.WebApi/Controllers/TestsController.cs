using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TestEasy.WebApi.Interfaces;
using TestEasy.WebApi.Models;

namespace TestEasy.WebApi.Controllers
{
	[ApiController]
	public class TestsController : ControllerBase
	{

		private readonly ITestsService _testService;
		public TestsController(ITestsService testService)
		{
			_testService = testService;
		}
		
		[Route("view/test")]
		[HttpPost]
		public ActionResult CreateTest([FromBody]TestView test)
		{
			_testService.Save(test);
			return Ok();
		}

		[Route("view/test/{testId:int}")]
		[HttpGet]
		public ActionResult<TestView> GetTest(int testId)
		{
			return Ok(_testService.GetById(testId));
		}

		[Route("view/tests")]
		[HttpGet]
		public ActionResult<IEnumerable<TestView>> GetTests()
		{
			return Ok(_testService.GetAll());
		}

		[Route("view/testRun")]
		[HttpPost]
		public ActionResult CreateTestRun(int testId)
		{
			_testService.Run(testId);
			return Ok();
		}

	}
}