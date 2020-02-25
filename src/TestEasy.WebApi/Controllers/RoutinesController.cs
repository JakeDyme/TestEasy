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
	public class RoutinesController : ControllerBase
	{

		private readonly IRoutinesService _routineService;
		public RoutinesController(IRoutinesService routineService)
		{
			_routineService = routineService;
		}
		
		[Route("view/routine")]
		[HttpPost]
		public ActionResult CreateRoutine([FromBody]RoutineView routine)
		{
			_routineService.Save(routine);
			return Ok();
		}

		[Route("view/routine/{routineId:int}")]
		[HttpGet]
		public ActionResult<RoutineView> GetRoutine(int routineId)
		{
			return Ok(_routineService.GetById(routineId));
		}

		[Route("view/routines")]
		[HttpGet]
		public ActionResult<IEnumerable<RoutineView>> GetRoutines()
		{
			return Ok(_routineService.GetAll());
		}

	}
}