using System.Collections.Generic;

namespace TestEasy.WebApi.Models
{
	public class FieldView
	{
		public int Id { get;set; }
		public string Name { get;set; }
		public IEnumerable<FieldParamValueView> Params { get;set; }

	}
}