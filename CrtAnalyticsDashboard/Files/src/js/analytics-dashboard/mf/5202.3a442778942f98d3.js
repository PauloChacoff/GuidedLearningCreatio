(self.webpackChunkapp_studio_enterprise_analytics_dashboard=self.webpackChunkapp_studio_enterprise_analytics_dashboard||[]).push([[5202,2821],{45202:(S,g,i)=>{i.r(g),i.d(g,{LEGACY_SCROLL_THROTTLE_MS:()=>o.SCROLL_THROTTLE_MS,LegacyTooltipComponent:()=>r,MAT_LEGACY_TOOLTIP_DEFAULT_OPTIONS:()=>o.MAT_TOOLTIP_DEFAULT_OPTIONS,MAT_LEGACY_TOOLTIP_DEFAULT_OPTIONS_FACTORY:()=>o.MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY,MAT_LEGACY_TOOLTIP_SCROLL_STRATEGY:()=>o.MAT_TOOLTIP_SCROLL_STRATEGY,MAT_LEGACY_TOOLTIP_SCROLL_STRATEGY_FACTORY:()=>o.MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY,MAT_LEGACY_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER:()=>o.MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER,MatLegacyTooltip:()=>p,MatLegacyTooltipModule:()=>_,getMatLegacyTooltipInvalidPositionError:()=>o.getMatTooltipInvalidPositionError,matLegacyTooltipAnimations:()=>A});var m=i(31555),c=i(93277),d=i(40297),t=i(59131),T=i(59445),O=i(84177),M=i(13053),f=i(15457),L=i(18081),h=i(48059),o=i(39371),n=i(95567);const E=["tooltip"];class p extends o._MatTooltipBase{constructor(s,e,a,l,y,u,C,v,I,P,D,R){super(s,e,a,l,y,u,C,v,I,P,D,R),this._tooltipComponent=r}static{this.\u0275fac=function(e){return new(e||p)(t.\u0275\u0275directiveInject(m.Overlay),t.\u0275\u0275directiveInject(t.ElementRef),t.\u0275\u0275directiveInject(O.ScrollDispatcher),t.\u0275\u0275directiveInject(t.ViewContainerRef),t.\u0275\u0275directiveInject(t.NgZone),t.\u0275\u0275directiveInject(L.Platform),t.\u0275\u0275directiveInject(c.AriaDescriber),t.\u0275\u0275directiveInject(c.FocusMonitor),t.\u0275\u0275directiveInject(o.MAT_TOOLTIP_SCROLL_STRATEGY),t.\u0275\u0275directiveInject(M.Directionality,8),t.\u0275\u0275directiveInject(o.MAT_TOOLTIP_DEFAULT_OPTIONS,8),t.\u0275\u0275directiveInject(d.DOCUMENT))}}static{this.\u0275dir=t.\u0275\u0275defineDirective({type:p,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-tooltip-trigger"],hostVars:2,hostBindings:function(e,a){e&2&&t.\u0275\u0275classProp("mat-tooltip-disabled",a.disabled)},exportAs:["matTooltip"],features:[t.\u0275\u0275InheritDefinitionFeature]})}}(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(p,[{type:t.Directive,args:[{selector:"[matTooltip]",exportAs:"matTooltip",host:{class:"mat-tooltip-trigger","[class.mat-tooltip-disabled]":"disabled"}}]}],function(){return[{type:m.Overlay},{type:t.ElementRef},{type:O.ScrollDispatcher},{type:t.ViewContainerRef},{type:t.NgZone},{type:L.Platform},{type:c.AriaDescriber},{type:c.FocusMonitor},{type:void 0,decorators:[{type:t.Inject,args:[o.MAT_TOOLTIP_SCROLL_STRATEGY]}]},{type:M.Directionality,decorators:[{type:t.Optional}]},{type:void 0,decorators:[{type:t.Optional},{type:t.Inject,args:[o.MAT_TOOLTIP_DEFAULT_OPTIONS]}]},{type:void 0,decorators:[{type:t.Inject,args:[d.DOCUMENT]}]}]},null);class r extends o._TooltipComponentBase{constructor(s,e,a){super(s,a),this._showAnimation="mat-tooltip-show",this._hideAnimation="mat-tooltip-hide",this._isHandset=e.observe(f.Breakpoints.Handset)}static{this.\u0275fac=function(e){return new(e||r)(t.\u0275\u0275directiveInject(t.ChangeDetectorRef),t.\u0275\u0275directiveInject(f.BreakpointObserver),t.\u0275\u0275directiveInject(h.ANIMATION_MODULE_TYPE,8))}}static{this.\u0275cmp=t.\u0275\u0275defineComponent({type:r,selectors:[["mat-tooltip-component"]],viewQuery:function(e,a){if(e&1&&t.\u0275\u0275viewQuery(E,7),e&2){let l;t.\u0275\u0275queryRefresh(l=t.\u0275\u0275loadQuery())&&(a._tooltip=l.first)}},hostAttrs:["aria-hidden","true"],hostVars:3,hostBindings:function(e,a){e&1&&t.\u0275\u0275listener("mouseleave",function(y){return a._handleMouseLeave(y)}),e&2&&(t.\u0275\u0275attribute("mat-id-collision",null),t.\u0275\u0275styleProp("zoom",a.isVisible()?1:null))},features:[t.\u0275\u0275InheritDefinitionFeature],decls:4,vars:6,consts:[["tooltip",""],[1,"mat-tooltip",3,"animationend","ngClass"]],template:function(e,a){if(e&1){const l=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",1,0),t.\u0275\u0275pipe(2,"async"),t.\u0275\u0275listener("animationend",function(u){return t.\u0275\u0275restoreView(l),t.\u0275\u0275resetView(a._handleAnimationEnd(u))}),t.\u0275\u0275text(3),t.\u0275\u0275elementEnd()}if(e&2){let l;t.\u0275\u0275classProp("mat-tooltip-handset",(l=t.\u0275\u0275pipeBind1(2,4,a._isHandset))==null?null:l.matches),t.\u0275\u0275property("ngClass",a.tooltipClass),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate(a.message)}},dependencies:[d.NgClass,d.AsyncPipe],styles:[".mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis;transform:scale(0)}.mat-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}.mat-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-tooltip-show{0%{opacity:0;transform:scale(0)}50%{opacity:.5;transform:scale(0.99)}100%{opacity:1;transform:scale(1)}}@keyframes mat-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1)}}.mat-tooltip-show{animation:mat-tooltip-show 200ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-tooltip-hide{animation:mat-tooltip-hide 100ms cubic-bezier(0, 0, 0.2, 1) forwards}"],encapsulation:2,changeDetection:0})}}(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(r,[{type:t.Component,args:[{selector:"mat-tooltip-component",encapsulation:t.ViewEncapsulation.None,changeDetection:t.ChangeDetectionStrategy.OnPush,host:{"[style.zoom]":"isVisible() ? 1 : null","(mouseleave)":"_handleMouseLeave($event)","aria-hidden":"true","[attr.mat-id-collision]":"null"},template:`<div #tooltip
     class="mat-tooltip"
     (animationend)="_handleAnimationEnd($event)"
     [ngClass]="tooltipClass"
     [class.mat-tooltip-handset]="(_isHandset | async)?.matches">{{message}}</div>
`,styles:[".mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis;transform:scale(0)}.mat-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}.mat-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-tooltip-show{0%{opacity:0;transform:scale(0)}50%{opacity:.5;transform:scale(0.99)}100%{opacity:1;transform:scale(1)}}@keyframes mat-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1)}}.mat-tooltip-show{animation:mat-tooltip-show 200ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-tooltip-hide{animation:mat-tooltip-hide 100ms cubic-bezier(0, 0, 0.2, 1) forwards}"]}]}],function(){return[{type:t.ChangeDetectorRef},{type:f.BreakpointObserver},{type:void 0,decorators:[{type:t.Optional},{type:t.Inject,args:[h.ANIMATION_MODULE_TYPE]}]}]},{_tooltip:[{type:t.ViewChild,args:["tooltip",{static:!0}]}]});class _{static{this.\u0275fac=function(e){return new(e||_)}}static{this.\u0275mod=t.\u0275\u0275defineNgModule({type:_})}static{this.\u0275inj=t.\u0275\u0275defineInjector({providers:[o.MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],imports:[c.A11yModule,d.CommonModule,m.OverlayModule,T.MatCommonModule,T.MatCommonModule,O.CdkScrollableModule]})}}(typeof ngDevMode>"u"||ngDevMode)&&t.\u0275setClassMetadata(_,[{type:t.NgModule,args:[{imports:[c.A11yModule,d.CommonModule,m.OverlayModule,T.MatCommonModule],exports:[p,r,T.MatCommonModule,O.CdkScrollableModule],declarations:[p,r],providers:[o.MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]}]}],null,null);const A={tooltipState:(0,n.trigger)("state",[(0,n.state)("initial, void, hidden",(0,n.style)({opacity:0,transform:"scale(0)"})),(0,n.state)("visible",(0,n.style)({transform:"scale(1)"})),(0,n.transition)("* => visible",(0,n.animate)("200ms cubic-bezier(0, 0, 0.2, 1)",(0,n.keyframes)([(0,n.style)({opacity:0,transform:"scale(0)",offset:0}),(0,n.style)({opacity:.5,transform:"scale(0.99)",offset:.5}),(0,n.style)({opacity:1,transform:"scale(1)",offset:1})]))),(0,n.transition)("* => hidden",(0,n.animate)("100ms cubic-bezier(0, 0, 0.2, 1)",(0,n.style)({opacity:0})))])}}}]);