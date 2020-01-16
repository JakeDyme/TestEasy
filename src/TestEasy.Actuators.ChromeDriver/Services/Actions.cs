using OpenQA.Selenium;
using TestEasy.Actuators.ChromeDriver.Attributes;
using TestEasy.Actuators.ChromeDriver.Contracts;

namespace TestEasy.Actuators.ChromeDriver.Services
{
  public interface IActionResult
  {

  }
  public interface IActionType
  {

  }

  public interface IActionParamValue
  {

  }

  public interface IActionsProvider
  {
    public void ExecuteAction(string actionName, params dynamic[] args);
  }

  public class Actions
  {

    private readonly Environment _environment;

    public Actions(Environment environment) {
      _environment = environment;
    }

    [ActionDescription("Launches a url in the browser window. Must start with http:// or https://")]
    [ActionParam(Name = "Url", DataType = ParamDataTypeEnum.url)]
    public void LaunchUrl(string url)
    {
      _environment.WebDriver.Url = url;
    }

  }
}
