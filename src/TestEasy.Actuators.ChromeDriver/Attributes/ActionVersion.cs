using System;
namespace TestEasy.Actuators.ChromeDriver.Attributes
{
  [AttributeUsage(AttributeTargets.Method)]
  public class ActionVersion : Attribute
  {
    public string Version;
    public ActionVersion(string version)
    {
      Version = version;
    }
  }
}
