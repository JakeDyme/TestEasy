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
	public class TestController : ControllerBase
	{

		private readonly ITestService _testService;
		public TestController()
		{
			
		}
		
		[Route("view/scenario")]
		[HttpPost]
		public void CreateScenario([FromBody]TestView scenario)
		{
			throw new NotImplementedException();
		}

		[Route("view/scenario/{scenarioId:int}")]
		[HttpGet]
		public ActionResult<TestView> GetScenario(int scenarioId)
		{
			throw new NotImplementedException();
		}

		[Route("view/scenarios")]
		[HttpGet]
		public ActionResult<TestView> GetScenarios()
		{
			throw new NotImplementedException();
		}

		[Route("view/scenarioRun")]
		[HttpPost]
		public void CreateScenarioRun(int scenarioId)
		{
			throw new NotImplementedException();
		}

	}
}