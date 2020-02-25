using System;
using System.Collections.Generic;
using System.Linq;
using TestEasy.Contracts;
using TestEasy.WebApi.Interfaces;
using TestEasy.WebApi.Models;

namespace TestEasy.WebApi.Services
{
	public class ActionService : IActionsService
	{
		private readonly IActionsProvider _actionsProvider;

		public ActionService(IActionsProvider actionsProvider)
		{
			_actionsProvider = actionsProvider;
		}

		public IEnumerable<ActionView> GetAll()
		{
			var providerActions = _actionsProvider.GetActions();
			return providerActions
				.Select((action, index) => ViewModelFromDomainModel(action, index))
				.ToList();
		}

		public ActionView GetById(int id)
		{
			throw new NotImplementedException();
		}

		public void Run(int id)
		{
			throw new NotImplementedException();
		}

		public void Save(ActionView viewModel)
		{
			throw new NotImplementedException();
		}

		private ActionView ViewModelFromDomainModel(IActionType domainAction, int uniqueId)
		{
			return new ActionView
			{
				Id = uniqueId,
				Name = domainAction.Name,
				Params = domainAction.ParamSchemas
					.Select(ViewModelFromDomainModel)
					.ToList()
			};
		}

		private ActionParamValueView ViewModelFromDomainModel(IActionParamSchema domainParam)
		{
			return new ActionParamValueView()
			{
				Values = new List<string>(),
				ParamSchema = domainParam
			};
		}
	}
}
