using System.Collections.Generic;

namespace TestEasy.Data.Models
{
	public class DbTestActionParameter
	{
		public int Id { get; set; }
		public string Value { get; set; }

		public int DbTestActionId { get; set; }
		public DbTestAction DbTestAction { get; set; }
		
	}

}
