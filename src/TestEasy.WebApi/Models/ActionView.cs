using System.Collections.Generic;

namespace TestEasy.WebApi.Models
{
	public class ActionView
	{
		public int Id { get;set; }
		public string Name { get;set; }
		public IEnumerable<ActionParamValueView> ParamValues { get;set; }

	}
}