using System.Collections.Generic;
using TestEasy.WebApi.Models;

namespace TestEasy.WebApi.Interfaces
{
	public interface ISetupService
	{
		IEnumerable<SetupView> GetAll();
		SetupView GetById(int id);
		void Save(SetupView viewModel);
	}
}