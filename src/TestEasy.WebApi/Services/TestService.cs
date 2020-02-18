using System;
using System.Collections.Generic;
using System.Linq;
using TestEasy.Contracts;
using TestEasy.Data;
using TestEasy.Data.Models;
using TestEasy.WebApi.Interfaces;
using TestEasy.WebApi.Models;

namespace TestEasy.WebApi.Services
{
	
	public class TestService : ITestService
	{
		private readonly IActionsProvider _actionsProvider;
		private readonly TestEasyDbContext _dbContext;
		public TestService(IActionsProvider actionsProvider, TestEasyDbContext _dbContext)
		{
			_actionsProvider = actionsProvider;
		}

		public IEnumerable<TestView> GetAll()
		{
			var allTests = _dbContext.DbTest
				.Select(ViewModelFromDataModel)
				.ToList();
			return allTests;
		}

		public TestView GetById(int id)
		{
			var dbTest = _dbContext.DbTest
				.Single(t => t.Id == id);
			return ViewModelFromDataModel(dbTest);
		}

		public void Run(int id)
		{
			throw new NotImplementedException();
		}

		public void Save(TestView viewModel)
		{
			var dbTest = DataModelFromViewModel(viewModel);
			if (viewModel.Id == 0) _dbContext.DbTest.Add(dbTest);
			_dbContext.SaveChanges();
		}

		private DbTest DataModelFromViewModel(TestView testView, DbTest existingDbModel = null)
		{
			DbTest dbTest = existingDbModel;
			if (testView.Id == 0) dbTest = DbTest.BuildNew();
			dbTest.Name = testView.Name;
			return dbTest;
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
