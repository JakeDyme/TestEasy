﻿using System.Collections.Generic;

namespace TestEasy.WebApi.Models
{
	public class ActionView
	{
		public int Id { get;set; }
		public string Name { get;set; }
		public IEnumerable<ActionParamValueView> Params { get;set; }
		public string LocalGroup { get;set; }

	}
}