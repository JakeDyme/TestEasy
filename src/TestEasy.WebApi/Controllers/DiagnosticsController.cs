using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace TestEasy.WebApi.Controllers
{

	[ApiController]
	public class DiagnosticsController : ControllerBase
	{
		[Route("view/diagnostics")]
		public ActionResult<object> DiagnosticsData()
		{
			return new
			{
				ApiConnected = true,
				Endpoints = new string[] {
					"https://localhost:5001/view/actions",
					"https://localhost:5001/view/scenarios"
				}
			};
		}
	}
}