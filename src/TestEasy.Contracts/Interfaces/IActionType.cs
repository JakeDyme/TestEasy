using System.Collections.Generic;

namespace TestEasy.Contracts
{
	public interface IActionType
  {
    string Name { get; set; }
    IEnumerable<IActionParamSchema> ParamSchemas { get; set; }
  }
}
