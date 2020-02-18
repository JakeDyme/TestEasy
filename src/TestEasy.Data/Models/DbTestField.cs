using System.Collections.Generic;

namespace TestEasy.Data.Models
{
	public class DbTestField
	{
		public int Id { get; set; }
		public int OrderIndex { get; set; }

		public int DbTestId { get; set; }
		public DbTest DbTest { get; set;}

		public int DbFieldId { get; set; }
		public DbField DbField { get; set; }

		public int? DbParentTestFieldId { get; set; }
		public DbTestField DbParentTestField { get; set; }
		public virtual IEnumerable<DbTestAction> DbChildTestActions { get; set; }
	}

}
