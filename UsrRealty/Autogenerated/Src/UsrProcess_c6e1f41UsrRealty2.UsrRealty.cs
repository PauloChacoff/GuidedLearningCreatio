﻿namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: UsrProcess_c6e1f41UsrRealty2MethodsWrapper

	/// <exclude/>
	public class UsrProcess_c6e1f41UsrRealty2MethodsWrapper : ProcessModel
	{

		public UsrProcess_c6e1f41UsrRealty2MethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ScriptTask1Execute", ScriptTask1Execute);
		}

		#region Methods: Private

		private bool ScriptTask1Execute(ProcessExecutingContext context) {
			var esq = new EntitySchemaQuery(UserConnection.EntitySchemaManager, "UsrRealty");
			
			var priceColumn = esq.AddColumn("UsrPrice");  // SELECT UsrPriceUSD as UsrPriceUSD, UsrArea as UsrArea FROM UsrRealty WHERE ...
			
			var areaColumn = esq.AddColumn("UsrArea");
			
			
			Guid typeId = Get<Guid>("RealtyTypeIdParameter"); // empty values...
			
			Guid offerTypeId = Get<Guid>("RealtyOfferTypeIdParameter");
			
			 
			var typeFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "Usrtype", typeId);
			
			esq.Filters.Add(typeFilter);   // create filters 
			
			
			var offerTypeFilter = esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrOfferType", offerTypeId);
			
			esq.Filters.Add(offerTypeFilter); // ... WHERE UsrTypeId = :typeId AND UsrOfferTypeId = :offerTypeId just compare one to one not possible to combine two filters in one sentence...
			
			
			string sqlText = esq.GetSelectQuery(UserConnection).GetSqlText();
			
			Set("SqlTextParameter", sqlText);
			
			
			var entityCollection = esq.GetEntityCollection(UserConnection);
			
			decimal totalUSD = 0;
			
			decimal totalArea = 0;
			
			foreach(var entity in entityCollection) {
			     decimal price = entity.GetTypedColumnValue<decimal>(priceColumn.Name); // reading using column alias
			     decimal area = entity.GetTypedColumnValue<decimal>(areaColumn.Name); // reading using column alias
			     totalUSD = totalUSD + price;
			     totalArea = totalArea + area;
			
			}
			decimal result = 0;
			
			if (totalArea > 0) {
			
			result = totalUSD / totalArea;
			
			}
			
			 
			
			Set("AvgPriceUSDParameter", result);
			
			 
			
			return true;
			
			// IMPORTANT: When implementing
			// long-running operations,
			// it is crucial to enable timely and
			// responsive cancellation. To achieve
			// this, ensure that your code
			// is designed to respond appropriately
			// to cancellation requests using
			// the context.CancellationToken
			// mechanism. For more detailed
			// information and examples,
			// please, refer to our documentation.
		}

		#endregion

	}

	#endregion

}
