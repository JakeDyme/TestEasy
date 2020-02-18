using System.Collections.Generic;

namespace TestEasy.Data.Models
{
	public class DbTestFieldParameter
	{
		public int Id { get; set; }
		public int DbTestFieldId { get; set; }
		
		public DbTestField DbTest { get; set; }
		public string Value { get; set; }
	}

}
