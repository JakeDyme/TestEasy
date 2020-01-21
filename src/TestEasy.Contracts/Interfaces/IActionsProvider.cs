using System.Collections.Generic;

namespace TestEasy.Contracts
{
	public interface IActionsProvider
  {
    void ExecuteAction(string actionName, params dynamic[] args);
    IEnumerable<IActionType> GetActions();
  }
}
