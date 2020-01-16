using OpenQA.Selenium;
using System;
using System.Collections.Generic;
using System.Linq;
using TestEasy.Actuators.ChromeDriver.Attributes;
using TestEasy.Actuators.ChromeDriver.Contracts;
using TestEasy.Actuators.ChromeDriver.Models;

namespace TestEasy.Actuators.ChromeDriver.Services
{

  public class Environment
  {
    public IWebDriver WebDriver { get; set; }
  }

  public class ActionsProvider : IActionsProvider
  {
    private readonly Environment _environment;

    public ActionsProvider(Environment environment) 
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

    public IEnumerable<ActionType> GetActions()
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
          .Where(a => a.GetType() == typeof(ActionParam))
          .Select(a => a as IActionParamSchema)
          .ToList();
        actionsCollection.Add(newAction);
      }
      return actionsCollection;
    }
  }
}
