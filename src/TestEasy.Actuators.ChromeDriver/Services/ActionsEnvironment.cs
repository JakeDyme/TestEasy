using OpenQA.Selenium;
using TestEasy.Contracts;

namespace TestEasy.Actuators.ChromeDriver.Services
{
	public class ExecutionContext: IExecutionContext
  {
    public IWebDriver WebDriver { get; set; }
  }
}
