using System.Collections.Generic;
using TestEasy.Contracts;

namespace TestEasy.Actuators.ChromeDriver.Models
{
  public class ActionType: IActionType
  {
    public string Name { get; set; }
    public IEnumerable<IActionParamSchema> ParamSchemas { get; set; }
  }
}
