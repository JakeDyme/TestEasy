using System.Collections.Generic;

namespace TestEasy.WebApi.Models
{
	public class ScenarioView
	{
		int Id { get; set; }
		string Name { get; set; }
		IEnumerable<ActionView> Actions { get;set;}
	}
}