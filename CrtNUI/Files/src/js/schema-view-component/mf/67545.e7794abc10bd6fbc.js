(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[67545],{67545:(S,u,s)=>{s.r(u),s.d(u,{BaseAudienceHandler:()=>g,BaseAudienceNotificationHandler:()=>o});var r=s(73308),a=s(38495),v=s(79772),m=s(59564),l=s(20822),h=s(28399),y=s(62278);class g extends a.BaseRequestHandler{constructor(e){super(),this.injector=e,this.injectDependencies()}injectDependencies(){this._notifyService=this.injector.get(m.NotifyService),this._translateService=this.injector.get(v.TranslateService),this._messageDialogProvider=this.injector.get(l.MessageDialogProvider)}getItemsCollection(e){return Array.isArray(e)?e.map(t=>typeof t=="string"?t:t.value):e?.value?[e.value]:[]}isValidFilter(e){return(0,h.isObject)(e)&&"items"in e&&!(0,h.isEmpty)(e.items)}isEmptyFilter(e){let t=!0;return Object.entries(e.items).forEach(([i,n])=>{n.isEnabled&&(n.filterType===a.FilterType.FilterGroup&&!this.isEmptyFilter(n)||n.filterType!==a.FilterType.FilterGroup)&&(t=!1)}),t}showNotification(e,t){var i=this;return(0,r.A)(function*(){yield i._notifyService.show({message:e,closeOnClickOutside:!1,duration:t})})()}showConfirmationDialog(e){var t=this;return(0,r.A)(function*(){return(yield(0,y.lastValueFrom)(t._messageDialogProvider.open({data:{message:e,actions:[l.DEFAULT_DIALOG_ACTIONS.NO,l.DEFAULT_DIALOG_ACTIONS.YES]}})))===l.DEFAULT_DIALOG_ACTIONS.YES.key})()}translate(e){return this._translateService.instant(`${this.translationPrefix}.${e}`)}}var p=s(21018),f=s(59131);class o extends a.BaseRequestHandler{constructor(e){super(),this.messageChannelService=e}_tryReloadAudienceDetail(e,t,i){var n=this;return(0,r.A)(function*(){if(e.toLowerCase()!==(yield t).toLowerCase())return;const c={type:"crt.LoadDataRequest",config:{loadType:a.DataSourceLoadType.Reload},$context:i,dataSourceName:n.audienceDataSourceName};yield n.handlerChain.process(c)})()}_subscribeOnChannelMessages(e){var t=this;return(0,r.A)(function*(){const i=yield e.getPrimaryModelName(),n=e.getViewModelAttributePath(i,"Id");t.channelSubscription=t.messageChannelService.messageEvent$.pipe((0,y.filter)(c=>{const d=c?.body?.Notifications;return d?.length>0?!!d[0].EntityId:!1})).subscribe(c=>{const d=e[n],A=c?.body?.Notifications[0]?.EntityId;t._tryReloadAudienceDetail(A,d,e)})})()}handle(e){var t=this;return(0,r.A)(function*(){const i=e.$context;yield t._subscribeOnChannelMessages(i),yield t.next?.handle(e)})()}ngOnDestroy(){this.channelSubscription?.unsubscribe()}static{this.\u0275fac=function(t){return new(t||o)(f.\u0275\u0275inject(p.MessageChannelService))}}static{this.\u0275prov=f.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac})}}}}]);