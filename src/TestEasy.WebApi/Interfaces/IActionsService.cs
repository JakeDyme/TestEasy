using System.Collections.Generic;
using TestEasy.WebApi.Models;

namespace TestEasy.WebApi.Interfaces
{
	public interface IActionsService
	{
		/// <summary>
		/// Gets the list of actions for a given provider
		/// </summary>
		/// <returns></returns>
		IEnumerable<ActionView> GetActions();

	}
}