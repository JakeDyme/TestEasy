using System.Collections.Generic;
using TestEasy.Actuators.ChromeDriver.Contracts;

namespace TestEasy.Actuators.ChromeDriver.Models
{
  public class ActionType
  {
    public string Name { get; set; }
    public IEnumerable<IActionParamSchema> ParamSchemas { get; set; }
  }
}
