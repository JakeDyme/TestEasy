using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TestEasy.WebApi.Models;

namespace TestEasy.WebApi.Controllers
{
	[ApiController]
	public class ScenarioController : ControllerBase
	{
		public ScenarioController()
		{
			
		}
		
		[Route("view/scenario")]
		[HttpPost]
		public void CreateScenario([FromBody]ScenarioView scenario)
		{
			throw new NotImplementedException();
		}

		[Route("view/scenario/{scenarioId:int}")]
		[HttpGet]
		public ActionResult<ScenarioView> GetScenario(int scenarioId)
		{
			throw new NotImplementedException();
		}

		[Route("view/scenarios")]
		[HttpGet]
		public ActionResult<ScenarioView> GetScenarios()
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