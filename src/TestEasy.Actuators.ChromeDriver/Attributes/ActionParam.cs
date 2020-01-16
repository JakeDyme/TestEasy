using System;
using System.Collections.Generic;
using TestEasy.Actuators.ChromeDriver.Contracts;

namespace TestEasy.Actuators.ChromeDriver.Attributes
{
  [AttributeUsage(AttributeTargets.Method, AllowMultiple = true)]
  public class ActionParam : Attribute, IActionParamSchema
  {
    public string Name { get; set; }
    public string Description { get; set; }
    public ParamDataTypeEnum DataType { get; set; }
    //public bool Required { get; set; }
    public string ParamGroup { get; set; }
    public IEnumerable<string> SelectItems { get; set; }
    public IEnumerable<string> DefaultValues { get; set; }
    public bool AllowMultipleValues { get; set; }
    public int MaxNumberOfValues { get; set; }
    public int MinNumberOfValues { get; set; }
    public bool SelectOnly { get; set; }
  }
}
