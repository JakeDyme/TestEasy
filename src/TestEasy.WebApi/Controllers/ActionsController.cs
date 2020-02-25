using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using TestEasy.WebApi.Interfaces;
using TestEasy.WebApi.Models;

namespace TestEasy.WebApi.Controllers
{
	[ApiController]
	public class ActionsController: ControllerBase
	{
		private readonly IActionsService _actionsService;

		public ActionsController(IActionsService actionsService) {
			_actionsService = actionsService;
		}

		[Route("view/actions")]
		[HttpGet]
		public ActionResult<IEnumerable<ActionView>> GetActions()
		{
			var actions = _actionsService.GetAll();
			return Ok(actions);
		}

	}
}
