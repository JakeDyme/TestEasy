using System;
namespace TestEasy.Actuators.ChromeDriver.Attributes
{
  [AttributeUsage(AttributeTargets.Method)]
  public class ActionName : Attribute
  {
    public string Name; 
    public ActionName(string name)
    {
      Name = name;
    }
  }
}
