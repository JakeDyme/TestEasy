using System;
using System.Collections.Generic;
using System.Linq;
using TestEasy.Data;
using TestEasy.Data.Models;
using TestEasy.WebApi.Interfaces;
using TestEasy.WebApi.Models;

namespace TestEasy.WebApi.Services
{
	
	public class SetupsService : ISetupsService
	{
		private readonly TestEasyDbContext _dbContext;
		public SetupsService(TestEasyDbContext dbContext)
		{
			_dbContext = dbContext;
		}

		public IEnumerable<SetupView> GetAll()
		{
			var allSetups = _dbContext.DbSetup
				.Select(ViewModelFromDataModel)
				.ToList();
			return allSetups;
		}

		public SetupView GetById(int id)
		{
			var dbSetup = _dbContext.DbSetup
				.Single(t => t.Id == id);
			return ViewModelFromDataModel(dbSetup);
		}

		public void Save(SetupView viewModel)
		{
			var dbSetup = DataModelFromViewModel(viewModel);
			if (viewModel.Id == 0) _dbContext.DbSetup.Add(dbSetup);
			_dbContext.SaveChanges();
		}

		private DbSetup DataModelFromViewModel(SetupView setupView, DbSetup existingDbModel = null)
		{
			DbSetup dbSetup = existingDbModel;
			if (setupView.Id == 0) dbSetup = DbSetup.BuildNew();
			dbSetup.Name = setupView.Name;
			return dbSetup;
		}

		private SetupView ViewModelFromDataModel(DbSetup dbSetup)
		{
			return new SetupView
			{
				Id = dbSetup.Id,
				Name = dbSetup.Name
			};
		}

	}
}
