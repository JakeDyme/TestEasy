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
	public class SetupsController : ControllerBase
	{

		private readonly ISetupsService _setupService;
		public SetupsController(ISetupsService setupService)
		{
			_setupService = setupService;
		}
		
		[Route("view/setup")]
		[HttpPost]
		public ActionResult CreateSetup([FromBody]SetupView setup)
		{
			_setupService.Save(setup);
			return Ok();
		}

		[Route("view/setup/{setupId:int}")]
		[HttpGet]
		public ActionResult<SetupView> GetSetup(int setupId)
		{
			return Ok(_setupService.GetById(setupId));
		}

		[Route("view/setups")]
		[HttpGet]
		public ActionResult<IEnumerable<SetupView>> GetSetups()
		{
			return Ok(_setupService.GetAll());
		}

	}
}