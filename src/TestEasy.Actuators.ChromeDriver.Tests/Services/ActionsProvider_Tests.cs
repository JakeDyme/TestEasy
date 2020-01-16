using NUnit.Framework;
using System.Linq;
using TestEasy.Actuators.ChromeDriver.Services;
using OpenQA.Selenium.Chrome;
using System.IO;

namespace TestEasy.Actuators.ChromeDriver.Tests.Services
{
  public class ActionsProvider_Tests
  {
    [SetUp]
    public void Setup()
    {
    }

    [Test]
    public void GetActions_GivenNothing_ExpectActions()
    {
      var environment = new Environment();
      var sut = new ActionsProvider(environment);
      var actions = sut.GetActions();
      var actionNames = actions.Select(a => a.Name).ToList();
      CollectionAssert.Contains(actionNames, "LaunchUrl");
    }

    [Test]
    public void ExecuteAction_GivenName_ExpectBrowserOpen()
    {
      var environment = new Environment();
      var driverDir = $"{Directory.GetCurrentDirectory()}\\ChromeDriver";;
      environment.WebDriver = new OpenQA.Selenium.Chrome.ChromeDriver(driverDir);

      var sut = new ActionsProvider(environment);
      sut.ExecuteAction("LaunchUrl", "https://www.google.com");

      environment.WebDriver.Quit();
    }

  }
}