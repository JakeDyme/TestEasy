using System.Collections.Generic;
using TestEasy.Contracts;

namespace TestEasy.WebApi.Models
{
	public class FieldParamValueView
	{
		public IEnumerable<string> Values { get; set; }
		public IFieldParamSchema ParamSchema { get;set; }
	}
}