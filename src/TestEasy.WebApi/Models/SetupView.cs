using System.Collections.Generic;

namespace TestEasy.WebApi.Models
{
	public class SetupView
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public IEnumerable<FieldView> Fields { get;set;}
	}
}