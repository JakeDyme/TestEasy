using OpenQA.Selenium;
using OpenQA.Selenium.Interactions;
using TestEasy.Actuators.ChromeDriver.Attributes;
using TestEasy.Contracts;

namespace TestEasy.Actuators.ChromeDriver.Services
{

  public class BasicActions
  {

    private readonly ExecutionContext _environment;

    public BasicActions(IExecutionContext environment) {
      _environment = environment as ExecutionContext;
    }

    [ActionDescription("Launches a url in the browser window. Must start with http:// or https://")]
    [ActionParamSchema(Name = "Url", DataType = ParamDataTypeEnum.url)]
    public void LaunchUrl(string url)
    {
      _environment.WebDriver.Url = url;
    }

    [ActionDescription("Launches a url in the browser window. Must start with http:// or https://")]
    [ActionParamSchema(Name = "x", DataType = ParamDataTypeEnum.number)]
    [ActionParamSchema(Name = "y", DataType = ParamDataTypeEnum.number)]
    public void TapOnPoint(int x, int y)
    {
      var element = _environment.WebDriver.FindElement(By.TagName("body"));
      IWebDriver driver = _environment.WebDriver;
      new Actions(driver)
        .MoveToElement(element)
        .MoveByOffset(x, y)
        .Click()
        .Perform();

    }

  }
}
