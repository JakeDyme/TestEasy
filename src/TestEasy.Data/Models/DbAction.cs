using System;
using System.Collections.Generic;
using System.Text;

namespace TestEasy.Data.Models
{
	public class DbAction
	{
		public int Id { get; set; }
		public string Name { get; set; }
		public static DbAction BuildNew()
		{
			return new DbAction();
		}
	}
}
