using System.Collections.Generic;

namespace TestEasy.WebApi.Models
{
	public class RoutineView
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public IEnumerable<FieldView> MatchingFields { get; set; }
		public IEnumerable<ActionView> Actions { get;set; }
	}
}