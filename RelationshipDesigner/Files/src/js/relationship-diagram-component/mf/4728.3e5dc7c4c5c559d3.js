(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[4728],{94728:(M,g,s)=>{s.r(g),s.d(g,{MAT_LEGACY_PROGRESS_BAR_DEFAULT_OPTIONS:()=>i.MAT_PROGRESS_BAR_DEFAULT_OPTIONS,MAT_LEGACY_PROGRESS_BAR_LOCATION:()=>i.MAT_PROGRESS_BAR_LOCATION,MAT_LEGACY_PROGRESS_BAR_LOCATION_FACTORY:()=>i.MAT_PROGRESS_BAR_LOCATION_FACTORY,MatLegacyProgressBar:()=>n,MatLegacyProgressBarModule:()=>m});var r=s(59131),b=s(40297),o=s(59445),y=s(24897),i=s(44545),d=s(48059),f=s(62278),h=s(36486);const _=["primaryValueBar"],v=(0,o.mixinColor)(class{constructor(c){this._elementRef=c}},"primary");let k=0;class n extends v{constructor(a,e,t,l,p,E){super(a),this._ngZone=e,this._animationMode=t,this._changeDetectorRef=E,this._isNoopAnimation=!1,this._value=0,this._bufferValue=0,this.animationEnd=new r.EventEmitter,this._animationEndSubscription=f.Subscription.EMPTY,this.mode="determinate",this.progressbarId=`mat-progress-bar-${k++}`;const O=l?l.getPathname().split("#")[0]:"";this._rectangleFillValue=`url('${O}#${this.progressbarId}')`,this._isNoopAnimation=t==="NoopAnimations",p&&(p.color&&(this.color=this.defaultColor=p.color),this.mode=p.mode||this.mode)}get value(){return this._value}set value(a){this._value=u((0,y.coerceNumberProperty)(a)||0),this._changeDetectorRef?.markForCheck()}get bufferValue(){return this._bufferValue}set bufferValue(a){this._bufferValue=u(a||0),this._changeDetectorRef?.markForCheck()}_primaryTransform(){return{transform:`scale3d(${this.value/100}, 1, 1)`}}_bufferTransform(){return this.mode==="buffer"?{transform:`scale3d(${this.bufferValue/100}, 1, 1)`}:null}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{const a=this._primaryValueBar.nativeElement;this._animationEndSubscription=(0,f.fromEvent)(a,"transitionend").pipe((0,h.filter)(e=>e.target===a)).subscribe(()=>{this.animationEnd.observers.length!==0&&(this.mode==="determinate"||this.mode==="buffer")&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))})})}ngOnDestroy(){this._animationEndSubscription.unsubscribe()}static{this.\u0275fac=function(e){return new(e||n)(r.\u0275\u0275directiveInject(r.ElementRef),r.\u0275\u0275directiveInject(r.NgZone),r.\u0275\u0275directiveInject(d.ANIMATION_MODULE_TYPE,8),r.\u0275\u0275directiveInject(i.MAT_PROGRESS_BAR_LOCATION,8),r.\u0275\u0275directiveInject(i.MAT_PROGRESS_BAR_DEFAULT_OPTIONS,8),r.\u0275\u0275directiveInject(r.ChangeDetectorRef))}}static{this.\u0275cmp=r.\u0275\u0275defineComponent({type:n,selectors:[["mat-progress-bar"]],viewQuery:function(e,t){if(e&1&&r.\u0275\u0275viewQuery(_,5),e&2){let l;r.\u0275\u0275queryRefresh(l=r.\u0275\u0275loadQuery())&&(t._primaryValueBar=l.first)}},hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-progress-bar"],hostVars:4,hostBindings:function(e,t){e&2&&(r.\u0275\u0275attribute("aria-valuenow",t.mode==="indeterminate"||t.mode==="query"?null:t.value)("mode",t.mode),r.\u0275\u0275classProp("_mat-animation-noopable",t._isNoopAnimation))},inputs:{color:"color",value:"value",bufferValue:"bufferValue",mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[r.\u0275\u0275InheritDefinitionFeature],decls:10,vars:4,consts:[["primaryValueBar",""],["aria-hidden","true"],["width","100%","height","4","focusable","false",1,"mat-progress-bar-background","mat-progress-bar-element"],["x","4","y","0","width","8","height","4","patternUnits","userSpaceOnUse",3,"id"],["cx","2","cy","2","r","2"],["width","100%","height","100%"],[1,"mat-progress-bar-buffer","mat-progress-bar-element",3,"ngStyle"],[1,"mat-progress-bar-primary","mat-progress-bar-fill","mat-progress-bar-element",3,"ngStyle"],[1,"mat-progress-bar-secondary","mat-progress-bar-fill","mat-progress-bar-element"]],template:function(e,t){e&1&&(r.\u0275\u0275elementStart(0,"div",1),r.\u0275\u0275namespaceSVG(),r.\u0275\u0275elementStart(1,"svg",2)(2,"defs")(3,"pattern",3),r.\u0275\u0275element(4,"circle",4),r.\u0275\u0275elementEnd()(),r.\u0275\u0275element(5,"rect",5),r.\u0275\u0275elementEnd(),r.\u0275\u0275namespaceHTML(),r.\u0275\u0275element(6,"div",6)(7,"div",7,0)(9,"div",8),r.\u0275\u0275elementEnd()),e&2&&(r.\u0275\u0275advance(3),r.\u0275\u0275property("id",t.progressbarId),r.\u0275\u0275advance(2),r.\u0275\u0275attribute("fill",t._rectangleFillValue),r.\u0275\u0275advance(),r.\u0275\u0275property("ngStyle",t._bufferTransform()),r.\u0275\u0275advance(),r.\u0275\u0275property("ngStyle",t._primaryTransform()))},dependencies:[b.NgStyle],styles:['.mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}.mat-progress-bar._mat-animation-noopable{transition:none !important;animation:none !important}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:"";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}'],encapsulation:2,changeDetection:0})}}(typeof ngDevMode>"u"||ngDevMode)&&r.\u0275setClassMetadata(n,[{type:r.Component,args:[{selector:"mat-progress-bar",exportAs:"matProgressBar",host:{role:"progressbar","aria-valuemin":"0","aria-valuemax":"100",tabindex:"-1","[attr.aria-valuenow]":'(mode === "indeterminate" || mode === "query") ? null : value',"[attr.mode]":"mode",class:"mat-progress-bar","[class._mat-animation-noopable]":"_isNoopAnimation"},inputs:["color"],changeDetection:r.ChangeDetectionStrategy.OnPush,encapsulation:r.ViewEncapsulation.None,template:`<!--
  All children need to be hidden for screen readers in order to support ChromeVox.
  More context in the issue: https://github.com/angular/components/issues/22165.
-->
<div aria-hidden="true">
  <svg width="100%" height="4" focusable="false" class="mat-progress-bar-background mat-progress-bar-element">
    <defs>
      <pattern [id]="progressbarId" x="4" y="0" width="8" height="4" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="2"/>
      </pattern>
    </defs>
    <rect [attr.fill]="_rectangleFillValue" width="100%" height="100%"/>
  </svg>
  <!--
    The background div is named as such because it appears below the other divs and is not sized based
    on values.
  -->
  <div class="mat-progress-bar-buffer mat-progress-bar-element" [ngStyle]="_bufferTransform()"></div>
  <div class="mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element" [ngStyle]="_primaryTransform()" #primaryValueBar></div>
  <div class="mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element"></div>
</div>
`,styles:['.mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}.mat-progress-bar._mat-animation-noopable{transition:none !important;animation:none !important}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:"";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}']}]}],function(){return[{type:r.ElementRef},{type:r.NgZone},{type:void 0,decorators:[{type:r.Optional},{type:r.Inject,args:[d.ANIMATION_MODULE_TYPE]}]},{type:void 0,decorators:[{type:r.Optional},{type:r.Inject,args:[i.MAT_PROGRESS_BAR_LOCATION]}]},{type:void 0,decorators:[{type:r.Optional},{type:r.Inject,args:[i.MAT_PROGRESS_BAR_DEFAULT_OPTIONS]}]},{type:r.ChangeDetectorRef}]},{value:[{type:r.Input}],bufferValue:[{type:r.Input}],_primaryValueBar:[{type:r.ViewChild,args:["primaryValueBar"]}],animationEnd:[{type:r.Output}],mode:[{type:r.Input}]});function u(c,a=0,e=100){return Math.max(a,Math.min(e,c))}class m{static{this.\u0275fac=function(e){return new(e||m)}}static{this.\u0275mod=r.\u0275\u0275defineNgModule({type:m})}static{this.\u0275inj=r.\u0275\u0275defineInjector({imports:[b.CommonModule,o.MatCommonModule,o.MatCommonModule]})}}(typeof ngDevMode>"u"||ngDevMode)&&r.\u0275setClassMetadata(m,[{type:r.NgModule,args:[{imports:[b.CommonModule,o.MatCommonModule],exports:[n,o.MatCommonModule],declarations:[n]}]}],null,null)}}]);