﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CopilotHistoryStorageSchema

	/// <exclude/>
	public class CopilotHistoryStorageSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CopilotHistoryStorageSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CopilotHistoryStorageSchema(CopilotHistoryStorageSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("036a0b22-f3db-4464-9621-c1e31e2cbf54");
			Name = "CopilotHistoryStorage";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,173,88,109,111,219,54,16,254,236,2,253,15,92,246,69,6,2,253,128,102,105,208,248,165,51,176,116,65,156,109,31,138,162,96,165,115,44,76,34,93,146,74,103,20,249,239,59,138,148,76,82,148,162,20,5,2,199,36,239,158,123,225,61,71,210,140,86,32,15,52,3,178,16,64,85,193,211,5,63,20,37,87,175,95,125,127,253,106,86,203,130,61,144,237,81,42,168,46,130,49,74,150,37,100,168,195,100,250,30,24,136,34,59,201,220,131,16,84,242,157,66,177,170,226,44,190,34,96,104,62,93,94,15,46,173,152,42,84,1,114,80,96,77,51,197,197,128,196,138,161,163,251,10,152,74,55,76,129,216,97,244,50,93,236,169,66,79,15,37,232,128,80,15,53,63,46,97,71,235,82,93,23,44,71,140,68,29,15,192,119,201,198,166,232,247,66,162,149,227,22,63,232,3,204,231,159,80,165,208,136,140,150,36,43,169,148,36,42,73,222,144,56,4,234,127,111,12,207,126,21,240,128,110,144,117,1,101,46,223,144,91,81,60,82,5,102,241,96,6,4,55,44,231,172,60,146,191,36,136,5,103,204,108,6,249,92,123,227,11,11,9,44,55,168,190,9,20,148,74,212,58,97,218,80,253,165,44,50,107,167,249,30,143,33,9,108,250,38,231,68,23,207,108,22,120,66,46,73,207,181,217,236,105,220,191,91,193,15,32,244,118,15,164,65,42,172,219,140,44,139,6,146,138,227,111,24,15,110,215,57,121,95,23,249,91,242,89,240,18,110,232,225,128,115,23,174,226,160,198,221,73,129,92,250,0,228,234,138,36,222,196,37,249,131,211,220,81,73,230,243,103,82,126,3,106,207,7,183,181,239,150,241,170,103,198,38,249,145,10,44,5,137,117,138,190,48,248,54,24,87,50,111,194,159,109,65,211,150,72,243,207,232,152,185,36,216,176,121,35,63,211,76,175,43,150,156,109,242,179,112,106,193,115,232,38,215,130,87,122,170,41,152,27,144,18,43,69,187,140,132,61,179,198,141,213,116,245,31,100,181,130,59,44,97,16,73,78,21,53,95,117,190,77,48,233,187,60,79,12,238,105,25,251,140,50,150,255,166,101,13,54,190,183,173,27,231,100,88,212,164,160,9,97,110,125,17,160,106,193,172,61,183,22,219,173,208,58,100,99,41,189,165,143,96,67,187,131,175,53,72,149,248,195,13,219,113,4,235,190,183,27,212,180,171,99,187,98,71,151,196,196,22,100,220,244,182,227,54,219,67,69,111,40,195,4,54,145,152,233,235,227,7,236,215,93,134,239,58,196,179,243,144,245,93,136,142,209,116,11,10,91,154,147,21,153,68,229,176,46,43,44,31,71,16,253,213,201,72,63,192,55,253,63,174,182,245,50,158,156,173,132,224,2,93,115,114,146,54,115,147,180,55,114,77,139,18,242,0,160,157,158,132,177,172,133,62,212,88,128,209,78,79,194,104,14,70,200,255,12,65,182,138,10,181,196,165,73,40,247,92,209,242,158,255,11,76,6,56,206,202,36,36,108,136,213,65,69,161,220,165,105,177,117,39,94,20,47,92,142,99,34,47,146,144,81,227,213,20,227,218,35,15,184,182,197,254,129,150,91,146,217,33,201,188,97,192,49,105,102,127,34,199,182,29,226,32,199,138,29,73,126,241,44,167,107,80,217,94,119,195,229,117,226,59,156,110,242,121,235,244,204,87,26,102,103,32,24,165,103,207,140,81,125,178,93,55,48,228,85,65,87,201,24,98,0,19,22,249,56,208,138,229,113,24,187,48,9,68,223,44,54,121,31,195,204,79,130,64,175,21,196,48,154,133,73,16,139,90,8,188,34,234,130,196,207,8,84,32,16,7,61,81,227,185,106,183,167,101,226,31,158,173,81,59,52,7,121,224,9,218,182,245,164,11,209,87,192,110,169,193,59,9,75,80,183,52,44,87,42,163,240,19,153,115,211,33,142,51,199,179,28,99,78,23,139,195,28,95,105,132,57,190,224,24,115,78,102,108,122,8,148,18,90,131,75,188,183,40,184,231,188,92,208,178,148,17,223,220,164,246,220,11,206,2,131,226,150,85,11,116,90,179,128,227,80,152,82,93,127,125,28,187,48,9,68,95,209,26,95,156,235,229,199,0,79,47,125,154,230,146,115,94,6,32,78,15,24,199,232,211,174,75,180,207,183,231,178,227,221,207,34,112,161,196,75,96,59,254,245,154,67,135,19,103,35,214,92,96,192,57,66,221,166,48,84,110,211,90,202,73,123,180,169,248,71,168,225,54,81,86,215,155,124,97,87,216,224,195,146,178,12,130,190,112,127,130,110,31,5,59,124,180,211,108,79,146,118,173,179,79,10,54,196,16,217,53,3,219,180,124,159,209,219,88,16,169,41,79,51,213,123,239,216,166,225,43,142,181,151,190,228,48,211,91,217,83,179,120,78,253,157,120,168,245,15,21,210,213,94,215,172,113,86,15,174,210,78,100,34,100,171,173,183,100,24,85,175,78,4,244,107,43,74,217,193,112,157,178,127,26,170,232,176,241,186,39,96,103,180,45,133,230,249,219,40,12,61,101,189,39,170,87,138,86,224,159,61,136,88,88,115,100,239,234,107,77,203,196,132,159,222,82,129,89,66,186,37,61,111,90,44,251,202,245,175,0,207,255,42,208,255,13,166,9,250,135,31,160,246,86,62,242,144,117,149,188,222,98,204,55,27,241,226,59,121,236,50,31,72,6,244,31,237,83,78,43,104,239,96,118,229,212,9,98,55,170,240,10,213,191,143,247,43,48,216,35,156,197,191,255,1,19,132,236,187,44,21,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("036a0b22-f3db-4464-9621-c1e31e2cbf54"));
		}

		#endregion

	}

	#endregion

}
