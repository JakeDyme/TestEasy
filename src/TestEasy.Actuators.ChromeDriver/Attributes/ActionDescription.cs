using System;
namespace TestEasy.Actuators.ChromeDriver.Attributes
{
  [AttributeUsage(AttributeTargets.Method)]
  public class ActionDescription : Attribute
  {
    public string Description;
    public ActionDescription(string description)
    {
      Description = description;
    }
  }
}
