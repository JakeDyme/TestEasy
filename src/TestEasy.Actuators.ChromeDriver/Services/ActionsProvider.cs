using System;
using System.Collections.Generic;
using System.Linq;
using TestEasy.Actuators.ChromeDriver.Attributes;
using TestEasy.Actuators.ChromeDriver.Models;
using TestEasy.Contracts;

namespace TestEasy.Actuators.ChromeDriver.Services
{

  public class ActionsProvider : IActionsProvider
  {
    private readonly IExecutionContext _environment;

    public ActionsProvider(IExecutionContext environment) 
    {
      _environment = environment;
    }

    public void ExecuteAction(string actionName, params dynamic[] args )
    {
      Type actionsCollectionClass = typeof(Actions);
      var methods = actionsCollectionClass.GetMethods();
      var action = methods.FirstOrDefault(m => m.Name == actionName);
      if (action == null) throw new NullReferenceException($"The action \"{actionName}\" does not exist");
      var actionsEnvironment = new Actions(_environment);
      var result = action.Invoke(actionsEnvironment, args);
    }

    public IEnumerable<IActionType> GetActions()
    {
      var ignoreTheseIntrinsicMethods = new[] { "GetType" };
      Type actionsCollectionClass = typeof(Actions);
      var methods = actionsCollectionClass.GetMethods();
      var actionsCollection = new List<ActionType>();
      foreach (var method in methods)
      {
        if (ignoreTheseIntrinsicMethods.Contains(method.Name)) continue;
        var newAction = new ActionType();
        newAction.Name = method.Name;
        var atts = method.GetCustomAttributes(true);
        newAction.ParamSchemas = atts
          .Where(a => a.GetType() == typeof(ActionParamSchema))
          .Select(a => a as IActionParamSchema)
          .ToList();
        actionsCollection.Add(newAction);
      }
      return actionsCollection;
    }
  }
}
