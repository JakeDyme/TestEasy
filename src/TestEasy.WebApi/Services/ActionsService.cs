using System;
using System.Collections.Generic;
using System.Linq;
using TestEasy.Contracts;
using TestEasy.WebApi.Interfaces;
using TestEasy.WebApi.Models;

namespace TestEasy.WebApi.Services
{
	public class ActionsService : IActionsService
	{
		private readonly IActionsProvider _actionsProvider;

		public ActionsService(IActionsProvider actionsProvider)
		{
			_actionsProvider = actionsProvider;
		}

		public IEnumerable<ActionView> GetActions()
		{
			var providerActions = _actionsProvider.GetActions();
			return providerActions
				.Select(ViewModelFromDomainModel)
				.ToList();
		}

		private ActionView ViewModelFromDomainModel(IActionType domainAction)
		{
			return new ActionView
			{
				Name = domainAction.Name,
				ParamValues = domainAction.ParamSchemas
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
