using System;
using TestEasy.Actuators.ChromeDriver.Contracts;

namespace TestEasy.Actuators.ChromeDriver.Attributes
{
  [AttributeUsage(AttributeTargets.Method)]
  public class ActionReturnSchema : Attribute, IActionReturnSchema
  {
    public string Description { get; set; }
    public ParamDataTypeEnum DataType { get; set; }
  }
}
