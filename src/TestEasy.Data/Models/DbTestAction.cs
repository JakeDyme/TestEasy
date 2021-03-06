﻿using System.Collections.Generic;

namespace TestEasy.Data.Models
{
	public class DbTestAction
	{
		public int Id { get; set; }
		public int OrderIndex { get; set; }

		public int DbTestId { get; set; }
		public DbTest DbTest { get; set;}

		public int DbActionId { get; set; }
		public DbTestAction DbParentTestAction { get; set; }

		public int? DbParentTestActionId { get; set; }
		public virtual IEnumerable<DbTestAction> DbChildTestActions { get; set; }
	}

}
