using System.Collections.Generic;

namespace TestEasy.Data.Models
{
	public class DbTestAction
	{
		public int Id { get; set; }
		public int DbTestId { get; set; }
		public int DbActionId { get; set; }
		public int OrderIndex { get; set; }
		
		public DbTest DbTest {get; set;}
		public IEnumerable<DbAction> DbChildActions { get; set; }
	}



}
