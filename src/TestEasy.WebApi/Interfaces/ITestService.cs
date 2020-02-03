using System.Collections.Generic;
using TestEasy.WebApi.Models;

namespace TestEasy.WebApi.Interfaces
{
	public interface ITestService
	{
		IEnumerable<TestView> GetAll();
		TestView GetById(int id);
		void Save(TestView viewModel);
		void Run(int id);
	}
}