(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[4172,1791],{91791:(S,h,n)=>{n.r(h),n.d(h,{AVAILABLE_ENTITY_SCHEMAS:()=>m,WORKSPACE_EXPLORER_RELOAD_CHANNEL_NAME:()=>C,WorkspaceCompilationService:()=>r,WorkspaceConfigurationStatusService:()=>d,WorkspaceDbStructureService:()=>c,WorkspaceEntityApiService:()=>a,WorkspaceExplorerCommonApiModule:()=>o,WorkspaceFeatureService:()=>l,WorkspaceRestartService:()=>p});var u=n(40297),i=n(59131);class o{static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275mod=i.\u0275\u0275defineNgModule({type:o})}static{this.\u0275inj=i.\u0275\u0275defineInjector({imports:[u.CommonModule]})}}(function(){(typeof ngJitMode>"u"||ngJitMode)&&i.\u0275\u0275setNgModuleScope(o,{imports:[u.CommonModule]})})();var s=n(63721);class r{constructor(t){this._httpClient=t,this._serviceUrl="ServiceModel/WorkspaceExplorerService.svc/"}buildPackage(t){const e=this._serviceUrl+"BuildPackage",A=JSON.stringify({packageName:t}),E={"content-type":"application/json"};return this._httpClient.post(e,A,{headers:E})}compile(){const t=this._serviceUrl+"Build";return this._httpClient.post(t,null)}compileAll(){const t=this._serviceUrl+"Rebuild";return this._httpClient.post(t,null)}buildConfiguration(){const t=this._serviceUrl+"BuildConfiguration";return this._httpClient.post(t,null)}runODataBuild(){const t=this._serviceUrl+"RunODataBuild";return this._httpClient.post(t,null)}static{this.\u0275fac=function(e){return new(e||r)(i.\u0275\u0275inject(s.HttpClient))}}static{this.\u0275prov=i.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac,providedIn:"root"})}}class a{constructor(t){this._httpClient=t,this._serviceUrl="ServiceModel/SchemaDataDesignerService.svc/"}getAvailableEntitySchemas(t){const e=this._serviceUrl+"GetAvailableEntitySchemas";return this._httpClient.post(e,{packageUId:t})}static{this.\u0275fac=function(e){return new(e||a)(i.\u0275\u0275inject(s.HttpClient))}}static{this.\u0275prov=i.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac})}}class c{constructor(t){this._httpClient=t,this._serviceUrl="ServiceModel/WorkspaceExplorerService.svc/"}updateDBStructure(t){const e=this._serviceUrl+"UpdateDBStructure";return this._httpClient.post(e,t)}static{this.\u0275fac=function(e){return new(e||c)(i.\u0275\u0275inject(s.HttpClient))}}static{this.\u0275prov=i.\u0275\u0275defineInjectable({token:c,factory:c.\u0275fac,providedIn:"root"})}}var f=n(36486);class l{constructor(t){this._httpClient=t}getAllowStandaloneAssembly(){return this._allowStandaloneAssemblyEnabled$||(this._allowStandaloneAssemblyEnabled$=this._httpClient.post("/ServiceModel/PackageService.svc/GetAllowStandaloneAssembly",null).pipe((0,f.shareReplay)(1)),this._allowStandaloneAssemblyEnabled$.subscribe()),this._allowStandaloneAssemblyEnabled$}static{this.\u0275fac=function(e){return new(e||l)(i.\u0275\u0275inject(s.HttpClient))}}static{this.\u0275prov=i.\u0275\u0275defineInjectable({token:l,factory:l.\u0275fac,providedIn:"root"})}}class p{constructor(t){this._httpClient=t,this._appInstallerServiceUrl="ServiceModel/AppInstallerService.svc/",this._restartApplication="RestartApp"}restartApp(){const t=`${this._appInstallerServiceUrl}${this._restartApplication}`;return this._httpClient.post(t,null)}static{this.\u0275fac=function(e){return new(e||p)(i.\u0275\u0275inject(s.HttpClient))}}static{this.\u0275prov=i.\u0275\u0275defineInjectable({token:p,factory:p.\u0275fac,providedIn:"root"})}}class d{constructor(t){this._httpClient=t,this._serviceUrl="api/ConfigurationStatus/"}getConfigurationStatusReport(){const t=this._serviceUrl+"GetConfigurationStatusReport";return this._httpClient.get(t)}getLastCompilationResult(){const t=this._serviceUrl+"GetLastCompilationResult";return this._httpClient.get(t)}static{this.\u0275fac=function(e){return new(e||d)(i.\u0275\u0275inject(s.HttpClient))}}static{this.\u0275prov=i.\u0275\u0275defineInjectable({token:d,factory:d.\u0275fac,providedIn:"root"})}}var v=n(38495);const m=[{name:"AcademyURL",uId:"2db09028-bfa5-4314-929d-0f149f348452"},{name:"Account",uId:"25d7c1ab-1de0-4501-b402-02e0e5a72d6e"},{name:"Contact",uId:"16be3651-8fe2-4159-8dd0-a803d4683dd3"},{name:"SysImage",uId:(0,v.generateGuid)()}],C="workspace-explorer-items-reload"}}]);