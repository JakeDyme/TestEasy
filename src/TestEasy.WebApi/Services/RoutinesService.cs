using System;
using System.Collections.Generic;
using System.Linq;
using TestEasy.Data;
using TestEasy.Data.Models;
using TestEasy.WebApi.Interfaces;
using TestEasy.WebApi.Models;

namespace TestEasy.WebApi.Services
{
	
	public class RoutinesService : IRoutinesService
	{
		private readonly TestEasyDbContext _dbContext;
		public RoutinesService(TestEasyDbContext dbContext)
		{
			_dbContext = dbContext;
		}

		public IEnumerable<RoutineView> GetAll()
		{
			var allRoutines = _dbContext.DbRoutine
				.Select(ViewModelFromDataModel)
				.ToList();
			return allRoutines;
		}

		public RoutineView GetById(int id)
		{
			var dbRoutine = _dbContext.DbRoutine
				.Single(t => t.Id == id);
			return ViewModelFromDataModel(dbRoutine);
		}

		public void Save(RoutineView viewModel)
		{
			var dbRoutine = DataModelFromViewModel(viewModel);
			if (viewModel.Id == 0) _dbContext.DbRoutine.Add(dbRoutine);
			_dbContext.SaveChanges();
		}

		private DbRoutine DataModelFromViewModel(RoutineView routineView, DbRoutine existingDbModel = null)
		{
			DbRoutine dbRoutine = existingDbModel;
			if (routineView.Id == 0) dbRoutine = DbRoutine.BuildNew();
			dbRoutine.Name = routineView.Name;
			return dbRoutine;
		}

		private RoutineView ViewModelFromDataModel(DbRoutine dbRoutine)
		{
			return new RoutineView
			{
				Id = dbRoutine.Id,
				Name = dbRoutine.Name
			};
		}

	}
}
