using System.Collections.Generic;
namespace TestEasy.Contracts
{
  public interface IFieldParamSchema
  {
    string Name { get; set; }
    string Description { get; set; }
    ParamDataTypeEnum DataType { get; set; }
    string ParamGroup { get; set; }
    bool AllowMultipleValues { get; set;}
    int MaxNumberOfValues { get; set;}
    int MinNumberOfValues { get; set;}
    bool SelectOnly { get; set; }
    IEnumerable<string> SelectItems { get; set; }
    IEnumerable<string> DefaultValues { get; set; }
  }
}
