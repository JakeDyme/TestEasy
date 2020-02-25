using System.Collections.Generic;
using TestEasy.WebApi.Models;

namespace TestEasy.WebApi.Interfaces
{
	public interface ITestsService
	{
		IEnumerable<TestView> GetAll();
		TestView GetById(int id);
		void Save(TestView viewModel);
		void Run(int id);
	}
}