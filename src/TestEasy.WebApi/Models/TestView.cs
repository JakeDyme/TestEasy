using System.Collections.Generic;

namespace TestEasy.WebApi.Models
{
	public class TestView
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public IEnumerable<SetupView> ImportedSetups { get; set; }
		public IEnumerable<FieldView> Fields { get; set; }
		public IEnumerable<ActionView> Actions { get;set; }
	}
}