using System;
using System.Collections.Generic;
using System.Linq;
using TestEasy.Contracts;
using TestEasy.Data.Models;
using TestEasy.WebApi.Interfaces;
using TestEasy.WebApi.Models;

namespace TestEasy.WebApi.Services
{
	public class TestService : ITestService
	{
		//private readonly IActionsProvider _actionsProvider;

		public TestService(IActionsProvider actionsProvider)
		{
			//_actionsProvider = actionsProvider;
		}

		public IEnumerable<TestView> GetAll()
		{
			throw new NotImplementedException();
		}

		public TestView GetById(int id)
		{
			throw new NotImplementedException();
		}

		public void Run(int id)
		{
			throw new NotImplementedException();
		}

		public void Save(TestView viewModel)
		{
			throw new NotImplementedException();
		}

		private TestView ViewModelFromDataModel(DbTest dbScenario)
		{
			return new TestView
			{
				Id = dbScenario.Id,
				Name = dbScenario.Name
			};
		}

	}
}
