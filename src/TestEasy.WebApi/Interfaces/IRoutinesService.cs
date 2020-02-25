using System.Collections.Generic;
using TestEasy.WebApi.Models;

namespace TestEasy.WebApi.Interfaces
{
	public interface IRoutinesService
	{
		IEnumerable<RoutineView> GetAll();
		RoutineView GetById(int id);
		void Save(RoutineView viewModel);
	}
}