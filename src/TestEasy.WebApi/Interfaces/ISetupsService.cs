using System.Collections.Generic;
using TestEasy.WebApi.Models;

namespace TestEasy.WebApi.Interfaces
{
	public interface ISetupsService
	{
		IEnumerable<SetupView> GetAll();
		SetupView GetById(int id);
		void Save(SetupView viewModel);
	}
}