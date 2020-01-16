namespace TestEasy.Actuators.ChromeDriver.Contracts
{
  public interface IActionReturnSchema
  {
    string Description { get; set; }
    ParamDataTypeEnum DataType { get; set; }
  }
}
