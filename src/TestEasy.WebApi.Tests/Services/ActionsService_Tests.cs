using NUnit.Framework;
using System.Linq;
using TestEasy.Actuators.ChromeDriver.Services;
using TestEasy.WebApi.Services;

namespace TestEasy.WebApi.Tests.Services
{

	class ActionsService_Tests
	{
    [Test]
    public void GetActions_GivenNothing_ExpectActions()
    {
      var environment = new ExecutionContext();
      var actionsProvider = new ActionsProvider(environment);
      var sut = new ActionService(actionsProvider);
      var actions = sut.GetAll();
      var actionNames = actions.Select(a => a.Name).ToList();
      CollectionAssert.Contains(actionNames, "LaunchUrl");
    }

    //[Test]
    //public void ExecuteAction_GivenName_ExpectBrowserOpen()
    //{
    //  var environment = new Environment();
    //  var driverDir = $"{Directory.GetCurrentDirectory()}\\ChromeDriver"; ;
    //  environment.WebDriver = new OpenQA.Selenium.Chrome.ChromeDriver(driverDir);

    //  var sut = new ActionsProvider(environment);
    //  sut.ExecuteAction("LaunchUrl", "https://www.google.com");

    //  environment.WebDriver.Quit();
    //}
  }
}
