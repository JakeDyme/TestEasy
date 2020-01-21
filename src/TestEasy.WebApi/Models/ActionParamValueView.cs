using System.Collections.Generic;
using TestEasy.Contracts;

namespace TestEasy.WebApi.Models
{
	public class ActionParamValueView
	{
		public IEnumerable<string> Values { get; set; }
		public IActionParamSchema ParamSchema { get;set; }
	}
}