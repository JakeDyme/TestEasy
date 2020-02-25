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
		IEnumerable<ActionView> GetAll();
		ActionView GetById(int id);
		void Save(ActionView viewModel);
		void Run(int id);
	}
}