﻿using System;

namespace TestEasy.Data.Models
{
	public class DbTest
	{
		public int Id { get; set; }
		public string Name { get; set; }

		public static DbTest BuildNew()
		{
			return new DbTest();
		}
	}
}
