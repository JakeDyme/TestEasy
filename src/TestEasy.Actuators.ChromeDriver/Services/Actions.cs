using OpenQA.Selenium;
using TestEasy.Actuators.ChromeDriver.Attributes;
using TestEasy.Contracts;

namespace TestEasy.Actuators.ChromeDriver.Services
{

  public class Actions
  {

    private readonly ExecutionContext _environment;

    public Actions(IExecutionContext environment) {
      _environment = environment as ExecutionContext;
    }

    [ActionDescription("Launches a url in the browser window. Must start with http:// or https://")]
    [ActionParamSchema(Name = "Url", DataType = ParamDataTypeEnum.url)]
    public void LaunchUrl(string url)
    {
      _environment.WebDriver.Url = url;
    }

  }
}
