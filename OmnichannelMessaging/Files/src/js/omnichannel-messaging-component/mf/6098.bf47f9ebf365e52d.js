(self.webpackChunkapp_studio_enterprise_omnichannel_messaging=self.webpackChunkapp_studio_enterprise_omnichannel_messaging||[]).push([[6098,3717],{56098:(C,l,d)=>{d.r(l),d.d(l,{CDK_ACCORDION:()=>n,CdkAccordion:()=>i,CdkAccordionItem:()=>o,CdkAccordionModule:()=>c});var e=d(59131),p=d(62225),r=d(24897),a=d(62278);let u=0;const n=new e.InjectionToken("CdkAccordion");class i{constructor(){this._stateChanges=new a.Subject,this._openCloseAllActions=new a.Subject,this.id=`cdk-accordion-${u++}`,this._multi=!1}get multi(){return this._multi}set multi(t){this._multi=(0,r.coerceBooleanProperty)(t)}openAll(){this._multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(t){this._stateChanges.next(t)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static{this.\u0275fac=function(s){return new(s||i)}}static{this.\u0275dir=e.\u0275\u0275defineDirective({type:i,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:"multi"},exportAs:["cdkAccordion"],features:[e.\u0275\u0275ProvidersFeature([{provide:n,useExisting:i}]),e.\u0275\u0275NgOnChangesFeature]})}}(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(i,[{type:e.Directive,args:[{selector:"cdk-accordion, [cdkAccordion]",exportAs:"cdkAccordion",providers:[{provide:n,useExisting:i}]}]}],null,{multi:[{type:e.Input}]});let _=0;class o{get expanded(){return this._expanded}set expanded(t){if(t=(0,r.coerceBooleanProperty)(t),this._expanded!==t){if(this._expanded=t,this.expandedChange.emit(t),t){this.opened.emit();const s=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,s)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}get disabled(){return this._disabled}set disabled(t){this._disabled=(0,r.coerceBooleanProperty)(t)}constructor(t,s,h){this.accordion=t,this._changeDetectorRef=s,this._expansionDispatcher=h,this._openCloseAllSubscription=a.Subscription.EMPTY,this.closed=new e.EventEmitter,this.opened=new e.EventEmitter,this.destroyed=new e.EventEmitter,this.expandedChange=new e.EventEmitter,this.id=`cdk-accordion-child-${_++}`,this._expanded=!1,this._disabled=!1,this._removeUniqueSelectionListener=()=>{},this._removeUniqueSelectionListener=h.listen((f,g)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===g&&this.id!==f&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(t=>{this.disabled||(this.expanded=t)})}static{this.\u0275fac=function(s){return new(s||o)(e.\u0275\u0275directiveInject(n,12),e.\u0275\u0275directiveInject(e.ChangeDetectorRef),e.\u0275\u0275directiveInject(p.UniqueSelectionDispatcher))}}static{this.\u0275dir=e.\u0275\u0275defineDirective({type:o,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:"expanded",disabled:"disabled"},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[e.\u0275\u0275ProvidersFeature([{provide:n,useValue:void 0}])]})}}(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(o,[{type:e.Directive,args:[{selector:"cdk-accordion-item, [cdkAccordionItem]",exportAs:"cdkAccordionItem",providers:[{provide:n,useValue:void 0}]}]}],function(){return[{type:i,decorators:[{type:e.Optional},{type:e.Inject,args:[n]},{type:e.SkipSelf}]},{type:e.ChangeDetectorRef},{type:p.UniqueSelectionDispatcher}]},{closed:[{type:e.Output}],opened:[{type:e.Output}],destroyed:[{type:e.Output}],expandedChange:[{type:e.Output}],expanded:[{type:e.Input}],disabled:[{type:e.Input}]});class c{static{this.\u0275fac=function(s){return new(s||c)}}static{this.\u0275mod=e.\u0275\u0275defineNgModule({type:c})}static{this.\u0275inj=e.\u0275\u0275defineInjector({})}}(typeof ngDevMode>"u"||ngDevMode)&&e.\u0275setClassMetadata(c,[{type:e.NgModule,args:[{exports:[i,o],declarations:[i,o]}]}],null,null)}}]);