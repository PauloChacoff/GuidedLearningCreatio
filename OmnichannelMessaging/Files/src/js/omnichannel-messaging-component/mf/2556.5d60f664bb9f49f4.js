(self.webpackChunkapp_studio_enterprise_omnichannel_messaging=self.webpackChunkapp_studio_enterprise_omnichannel_messaging||[]).push([[2556],{12556:(B,A,r)=>{r.r(A),r.d(A,{CdkDialogContainer:()=>u,DEFAULT_DIALOG_CONFIG:()=>O,DIALOG_DATA:()=>M,DIALOG_SCROLL_STRATEGY:()=>C,DIALOG_SCROLL_STRATEGY_PROVIDER:()=>b,DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY:()=>R,Dialog:()=>d,DialogConfig:()=>p,DialogModule:()=>g,DialogRef:()=>D,throwDialogContentAlreadyAttachedError:()=>v});var h=r(93277),l=r(31555),m=r(18081),c=r(73969),I=r(40297),a=r(59131),T=r(75389),y=r(62278),L=r(13053),P=r(36486);function F(_,e){}class p{constructor(){this.role="dialog",this.panelClass="",this.hasBackdrop=!0,this.backdropClass="",this.disableClose=!1,this.width="",this.height="",this.data=null,this.ariaDescribedBy=null,this.ariaLabelledBy=null,this.ariaLabel=null,this.ariaModal=!0,this.autoFocus="first-tabbable",this.restoreFocus=!0,this.closeOnNavigation=!0,this.closeOnDestroy=!0,this.closeOnOverlayDetachments=!0}}function v(){throw Error("Attempting to attach dialog content after content is already attached")}class u extends c.BasePortalOutlet{constructor(e,t,i,n,s,o,f,k){super(),this._elementRef=e,this._focusTrapFactory=t,this._config=n,this._interactivityChecker=s,this._ngZone=o,this._overlayRef=f,this._focusMonitor=k,this._elementFocusedBeforeDialogWasOpened=null,this._closeInteractionType=null,this._ariaLabelledByQueue=[],this.attachDomPortal=S=>{this._portalOutlet.hasAttached()&&(typeof ngDevMode>"u"||ngDevMode)&&v();const w=this._portalOutlet.attachDomPortal(S);return this._contentAttached(),w},this._document=i,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_contentAttached(){this._initializeFocusTrap(),this._handleBackdropClicks(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached()&&(typeof ngDevMode>"u"||ngDevMode)&&v();const t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached()&&(typeof ngDevMode>"u"||ngDevMode)&&v();const t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{const i=()=>{e.removeEventListener("blur",i),e.removeEventListener("mousedown",i),e.removeAttribute("tabindex")};e.addEventListener("blur",i),e.addEventListener("mousedown",i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_trapFocus(){const e=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||e.focus();break;case!0:case"first-tabbable":this._focusTrap.focusInitialElementWhenReady().then(t=>{t||this._focusDialogContainer()});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this._config.autoFocus);break}}_restoreFocus(){const e=this._config.restoreFocus;let t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){const i=(0,m._getFocusedElementPierceShadowDom)(),n=this._elementRef.nativeElement;(!i||i===this._document.body||i===n||n.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(){this._elementRef.nativeElement.focus&&this._elementRef.nativeElement.focus()}_containsFocus(){const e=this._elementRef.nativeElement,t=(0,m._getFocusedElementPierceShadowDom)();return e===t||e.contains(t)}_initializeFocusTrap(){this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=(0,m._getFocusedElementPierceShadowDom)())}_handleBackdropClicks(){this._overlayRef.backdropClick().subscribe(()=>{this._config.disableClose&&this._recaptureFocus()})}static{this.\u0275fac=function(t){return new(t||u)(a.\u0275\u0275directiveInject(a.ElementRef),a.\u0275\u0275directiveInject(h.FocusTrapFactory),a.\u0275\u0275directiveInject(I.DOCUMENT,8),a.\u0275\u0275directiveInject(p),a.\u0275\u0275directiveInject(h.InteractivityChecker),a.\u0275\u0275directiveInject(a.NgZone),a.\u0275\u0275directiveInject(l.OverlayRef),a.\u0275\u0275directiveInject(h.FocusMonitor))}}static{this.\u0275cmp=a.\u0275\u0275defineComponent({type:u,selectors:[["cdk-dialog-container"]],viewQuery:function(t,i){if(t&1&&a.\u0275\u0275viewQuery(c.CdkPortalOutlet,7),t&2){let n;a.\u0275\u0275queryRefresh(n=a.\u0275\u0275loadQuery())&&(i._portalOutlet=n.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,i){t&2&&a.\u0275\u0275attribute("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},features:[a.\u0275\u0275InheritDefinitionFeature],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,i){t&1&&a.\u0275\u0275template(0,F,0,0,"ng-template",0)},dependencies:[c.CdkPortalOutlet],styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"],encapsulation:2})}}(typeof ngDevMode>"u"||ngDevMode)&&a.\u0275setClassMetadata(u,[{type:a.Component,args:[{selector:"cdk-dialog-container",encapsulation:a.ViewEncapsulation.None,changeDetection:a.ChangeDetectionStrategy.Default,host:{class:"cdk-dialog-container",tabindex:"-1","[attr.id]":"_config.id || null","[attr.role]":"_config.role","[attr.aria-modal]":"_config.ariaModal","[attr.aria-labelledby]":"_config.ariaLabel ? null : _ariaLabelledByQueue[0]","[attr.aria-label]":"_config.ariaLabel","[attr.aria-describedby]":"_config.ariaDescribedBy || null"},template:`<ng-template cdkPortalOutlet></ng-template>
`,styles:[".cdk-dialog-container{display:block;width:100%;height:100%;min-height:inherit;max-height:inherit}"]}]}],function(){return[{type:a.ElementRef},{type:h.FocusTrapFactory},{type:void 0,decorators:[{type:a.Optional},{type:a.Inject,args:[I.DOCUMENT]}]},{type:void 0,decorators:[{type:a.Inject,args:[p]}]},{type:h.InteractivityChecker},{type:a.NgZone},{type:l.OverlayRef},{type:h.FocusMonitor}]},{_portalOutlet:[{type:a.ViewChild,args:[c.CdkPortalOutlet,{static:!0}]}]});class D{constructor(e,t){this.overlayRef=e,this.config=t,this.closed=new y.Subject,this.disableClose=t.disableClose,this.backdropClick=e.backdropClick(),this.keydownEvents=e.keydownEvents(),this.outsidePointerEvents=e.outsidePointerEvents(),this.id=t.id,this.keydownEvents.subscribe(i=>{i.keyCode===T.ESCAPE&&!this.disableClose&&!(0,T.hasModifierKey)(i)&&(i.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{this.disableClose||this.close(void 0,{focusOrigin:"mouse"})}),this._detachSubscription=e.detachments().subscribe(()=>{t.closeOnOverlayDetachments!==!1&&this.close()})}close(e,t){if(this.containerInstance){const i=this.closed;this.containerInstance._closeInteractionType=t?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),i.next(e),i.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(e="",t=""){return this.overlayRef.updateSize({width:e,height:t}),this}addPanelClass(e){return this.overlayRef.addPanelClass(e),this}removePanelClass(e){return this.overlayRef.removePanelClass(e),this}}const C=new a.InjectionToken("DialogScrollStrategy"),M=new a.InjectionToken("DialogData"),O=new a.InjectionToken("DefaultDialogConfig");function R(_){return()=>_.scrollStrategies.block()}const b={provide:C,deps:[l.Overlay],useFactory:R};let j=0;class d{get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}constructor(e,t,i,n,s,o){this._overlay=e,this._injector=t,this._defaultOptions=i,this._parentDialog=n,this._overlayContainer=s,this._openDialogsAtThisLevel=[],this._afterAllClosedAtThisLevel=new y.Subject,this._afterOpenedAtThisLevel=new y.Subject,this._ariaHiddenElements=new Map,this.afterAllClosed=(0,y.defer)(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe((0,P.startWith)(void 0))),this._scrollStrategy=o}open(e,t){if(t={...this._defaultOptions||new p,...t},t.id=t.id||`cdk-dialog-${j++}`,t.id&&this.getDialogById(t.id)&&(typeof ngDevMode>"u"||ngDevMode))throw Error(`Dialog with id "${t.id}" exists already. The dialog id must be unique.`);const n=this._getOverlayConfig(t),s=this._overlay.create(n),o=new D(s,t),f=this._attachContainer(s,o,t);return o.containerInstance=f,this._attachDialogContent(e,o,f,t),this.openDialogs.length||this._hideNonDialogContentFromAssistiveTechnology(),this.openDialogs.push(o),o.closed.subscribe(()=>this._removeOpenDialog(o,!0)),this.afterOpened.next(o),o}closeAll(){E(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){E(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),E(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){const t=new l.OverlayConfig({positionStrategy:e.positionStrategy||this._overlay.position().global().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,i){const n=i.injector||i.viewContainerRef?.injector,s=[{provide:p,useValue:i},{provide:D,useValue:t},{provide:l.OverlayRef,useValue:e}];let o;i.container?typeof i.container=="function"?o=i.container:(o=i.container.type,s.push(...i.container.providers(i))):o=u;const f=new c.ComponentPortal(o,i.viewContainerRef,a.Injector.create({parent:n||this._injector,providers:s}),i.componentFactoryResolver);return e.attach(f).instance}_attachDialogContent(e,t,i,n){if(e instanceof a.TemplateRef){const s=this._createInjector(n,t,i,void 0);let o={$implicit:n.data,dialogRef:t};n.templateContext&&(o={...o,...typeof n.templateContext=="function"?n.templateContext():n.templateContext}),i.attachTemplatePortal(new c.TemplatePortal(e,null,o,s))}else{const s=this._createInjector(n,t,i,this._injector),o=i.attachComponentPortal(new c.ComponentPortal(e,n.viewContainerRef,s,n.componentFactoryResolver));t.componentRef=o,t.componentInstance=o.instance}}_createInjector(e,t,i,n){const s=e.injector||e.viewContainerRef?.injector,o=[{provide:M,useValue:e.data},{provide:D,useValue:t}];return e.providers&&(typeof e.providers=="function"?o.push(...e.providers(t,e,i)):o.push(...e.providers)),e.direction&&(!s||!s.get(L.Directionality,null,{optional:!0}))&&o.push({provide:L.Directionality,useValue:{value:e.direction,change:(0,y.of)()}}),a.Injector.create({parent:s||n,providers:o})}_removeOpenDialog(e,t){const i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((n,s)=>{n?s.setAttribute("aria-hidden",n):s.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(){const e=this._overlayContainer.getContainerElement();if(e.parentElement){const t=e.parentElement.children;for(let i=t.length-1;i>-1;i--){const n=t[i];n!==e&&n.nodeName!=="SCRIPT"&&n.nodeName!=="STYLE"&&!n.hasAttribute("aria-live")&&(this._ariaHiddenElements.set(n,n.getAttribute("aria-hidden")),n.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){const e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static{this.\u0275fac=function(t){return new(t||d)(a.\u0275\u0275inject(l.Overlay),a.\u0275\u0275inject(a.Injector),a.\u0275\u0275inject(O,8),a.\u0275\u0275inject(d,12),a.\u0275\u0275inject(l.OverlayContainer),a.\u0275\u0275inject(C))}}static{this.\u0275prov=a.\u0275\u0275defineInjectable({token:d,factory:d.\u0275fac})}}(typeof ngDevMode>"u"||ngDevMode)&&a.\u0275setClassMetadata(d,[{type:a.Injectable}],function(){return[{type:l.Overlay},{type:a.Injector},{type:p,decorators:[{type:a.Optional},{type:a.Inject,args:[O]}]},{type:d,decorators:[{type:a.Optional},{type:a.SkipSelf}]},{type:l.OverlayContainer},{type:void 0,decorators:[{type:a.Inject,args:[C]}]}]},null);function E(_,e){let t=_.length;for(;t--;)e(_[t])}class g{static{this.\u0275fac=function(t){return new(t||g)}}static{this.\u0275mod=a.\u0275\u0275defineNgModule({type:g})}static{this.\u0275inj=a.\u0275\u0275defineInjector({providers:[d,b],imports:[l.OverlayModule,c.PortalModule,h.A11yModule,c.PortalModule]})}}(typeof ngDevMode>"u"||ngDevMode)&&a.\u0275setClassMetadata(g,[{type:a.NgModule,args:[{imports:[l.OverlayModule,c.PortalModule,h.A11yModule],exports:[c.PortalModule,u],declarations:[u],providers:[d,b]}]}],null,null)}}]);