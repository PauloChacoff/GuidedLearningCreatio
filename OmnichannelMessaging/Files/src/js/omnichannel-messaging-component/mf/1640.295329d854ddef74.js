(self.webpackChunkapp_studio_enterprise_omnichannel_messaging=self.webpackChunkapp_studio_enterprise_omnichannel_messaging||[]).push([[1640],{21640:(w,u,a)=>{a.r(u),a.d(u,{MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS:()=>l,MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS_FACTORY:()=>h,MatProgressSpinner:()=>t,MatProgressSpinnerModule:()=>o,MatSpinner:()=>g});var r=a(59131),m=a(59445),_=a(48059),d=a(24897),p=a(40297);const y=["determinateSpinner"];function v(n,c){if(n&1&&(r.\u0275\u0275namespaceSVG(),r.\u0275\u0275elementStart(0,"svg",11),r.\u0275\u0275element(1,"circle",12),r.\u0275\u0275elementEnd()),n&2){const i=r.\u0275\u0275nextContext();r.\u0275\u0275attribute("viewBox",i._viewBox()),r.\u0275\u0275advance(),r.\u0275\u0275styleProp("stroke-dasharray",i._strokeCircumference(),"px")("stroke-dashoffset",i._strokeCircumference()/2,"px")("stroke-width",i._circleStrokeWidth(),"%"),r.\u0275\u0275attribute("r",i._circleRadius())}}const b=(0,m.mixinColor)(class{constructor(n){this._elementRef=n}},"primary"),l=new r.InjectionToken("mat-progress-spinner-default-options",{providedIn:"root",factory:h});function h(){return{diameter:f}}const f=100,k=10;class t extends b{constructor(c,i,e){super(c),this.mode=this._elementRef.nativeElement.nodeName.toLowerCase()==="mat-spinner"?"indeterminate":"determinate",this._value=0,this._diameter=f,this._noopAnimations=i==="NoopAnimations"&&!!e&&!e._forceAnimations,e&&(e.color&&(this.color=this.defaultColor=e.color),e.diameter&&(this.diameter=e.diameter),e.strokeWidth&&(this.strokeWidth=e.strokeWidth))}get value(){return this.mode==="determinate"?this._value:0}set value(c){this._value=Math.max(0,Math.min(100,(0,d.coerceNumberProperty)(c)))}get diameter(){return this._diameter}set diameter(c){this._diameter=(0,d.coerceNumberProperty)(c)}get strokeWidth(){return this._strokeWidth??this.diameter/10}set strokeWidth(c){this._strokeWidth=(0,d.coerceNumberProperty)(c)}_circleRadius(){return(this.diameter-k)/2}_viewBox(){const c=this._circleRadius()*2+this.strokeWidth;return`0 0 ${c} ${c}`}_strokeCircumference(){return 2*Math.PI*this._circleRadius()}_strokeDashOffset(){return this.mode==="determinate"?this._strokeCircumference()*(100-this._value)/100:null}_circleStrokeWidth(){return this.strokeWidth/this.diameter*100}static{this.\u0275fac=function(i){return new(i||t)(r.\u0275\u0275directiveInject(r.ElementRef),r.\u0275\u0275directiveInject(_.ANIMATION_MODULE_TYPE,8),r.\u0275\u0275directiveInject(l))}}static{this.\u0275cmp=r.\u0275\u0275defineComponent({type:t,selectors:[["mat-progress-spinner"],["mat-spinner"]],viewQuery:function(i,e){if(i&1&&r.\u0275\u0275viewQuery(y,5),i&2){let s;r.\u0275\u0275queryRefresh(s=r.\u0275\u0275loadQuery())&&(e._determinateCircle=s.first)}},hostAttrs:["role","progressbar","tabindex","-1",1,"mat-mdc-progress-spinner","mdc-circular-progress"],hostVars:16,hostBindings:function(i,e){i&2&&(r.\u0275\u0275attribute("aria-valuemin",0)("aria-valuemax",100)("aria-valuenow",e.mode==="determinate"?e.value:null)("mode",e.mode),r.\u0275\u0275styleProp("width",e.diameter,"px")("height",e.diameter,"px")("--mdc-circular-progress-size",e.diameter+"px")("--mdc-circular-progress-active-indicator-width",e.diameter+"px"),r.\u0275\u0275classProp("_mat-animation-noopable",e._noopAnimations)("mdc-circular-progress--indeterminate",e.mode==="indeterminate"))},inputs:{color:"color",mode:"mode",value:"value",diameter:"diameter",strokeWidth:"strokeWidth"},exportAs:["matProgressSpinner"],features:[r.\u0275\u0275InheritDefinitionFeature],decls:14,vars:11,consts:[["circle",""],["determinateSpinner",""],["aria-hidden","true",1,"mdc-circular-progress__determinate-container"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__determinate-circle-graphic"],["cx","50%","cy","50%",1,"mdc-circular-progress__determinate-circle"],["aria-hidden","true",1,"mdc-circular-progress__indeterminate-container"],[1,"mdc-circular-progress__spinner-layer"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-left"],[3,"ngTemplateOutlet"],[1,"mdc-circular-progress__gap-patch"],[1,"mdc-circular-progress__circle-clipper","mdc-circular-progress__circle-right"],["xmlns","http://www.w3.org/2000/svg","focusable","false",1,"mdc-circular-progress__indeterminate-circle-graphic"],["cx","50%","cy","50%"]],template:function(i,e){if(i&1&&(r.\u0275\u0275template(0,v,2,8,"ng-template",null,0,r.\u0275\u0275templateRefExtractor),r.\u0275\u0275elementStart(2,"div",2,1),r.\u0275\u0275namespaceSVG(),r.\u0275\u0275elementStart(4,"svg",3),r.\u0275\u0275element(5,"circle",4),r.\u0275\u0275elementEnd()(),r.\u0275\u0275namespaceHTML(),r.\u0275\u0275elementStart(6,"div",5)(7,"div",6)(8,"div",7),r.\u0275\u0275elementContainer(9,8),r.\u0275\u0275elementEnd(),r.\u0275\u0275elementStart(10,"div",9),r.\u0275\u0275elementContainer(11,8),r.\u0275\u0275elementEnd(),r.\u0275\u0275elementStart(12,"div",10),r.\u0275\u0275elementContainer(13,8),r.\u0275\u0275elementEnd()()()),i&2){const s=r.\u0275\u0275reference(1);r.\u0275\u0275advance(4),r.\u0275\u0275attribute("viewBox",e._viewBox()),r.\u0275\u0275advance(),r.\u0275\u0275styleProp("stroke-dasharray",e._strokeCircumference(),"px")("stroke-dashoffset",e._strokeDashOffset(),"px")("stroke-width",e._circleStrokeWidth(),"%"),r.\u0275\u0275attribute("r",e._circleRadius()),r.\u0275\u0275advance(4),r.\u0275\u0275property("ngTemplateOutlet",s),r.\u0275\u0275advance(2),r.\u0275\u0275property("ngTemplateOutlet",s),r.\u0275\u0275advance(2),r.\u0275\u0275property("ngTemplateOutlet",s)}},dependencies:[p.NgTemplateOutlet],styles:["@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner{--mdc-circular-progress-active-indicator-width:4px;--mdc-circular-progress-size:48px}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner .mdc-circular-progress{width:var(--mdc-circular-progress-size) !important;height:var(--mdc-circular-progress-size) !important}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}"],encapsulation:2,changeDetection:0})}}(typeof ngDevMode>"u"||ngDevMode)&&r.\u0275setClassMetadata(t,[{type:r.Component,args:[{selector:"mat-progress-spinner, mat-spinner",exportAs:"matProgressSpinner",host:{role:"progressbar",class:"mat-mdc-progress-spinner mdc-circular-progress",tabindex:"-1","[class._mat-animation-noopable]":"_noopAnimations","[class.mdc-circular-progress--indeterminate]":'mode === "indeterminate"',"[style.width.px]":"diameter","[style.height.px]":"diameter","[style.--mdc-circular-progress-size]":'diameter + "px"',"[style.--mdc-circular-progress-active-indicator-width]":'diameter + "px"',"[attr.aria-valuemin]":"0","[attr.aria-valuemax]":"100","[attr.aria-valuenow]":'mode === "determinate" ? value : null',"[attr.mode]":"mode"},inputs:["color"],changeDetection:r.ChangeDetectionStrategy.OnPush,encapsulation:r.ViewEncapsulation.None,template:`<ng-template #circle>
  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__indeterminate-circle-graphic"
       xmlns="http://www.w3.org/2000/svg" focusable="false">
    <circle [attr.r]="_circleRadius()"
            [style.stroke-dasharray.px]="_strokeCircumference()"
            [style.stroke-dashoffset.px]="_strokeCircumference() / 2"
            [style.stroke-width.%]="_circleStrokeWidth()"
            cx="50%" cy="50%"/>
  </svg>
</ng-template>

<!--
  All children need to be hidden for screen readers in order to support ChromeVox.
  More context in the issue: https://github.com/angular/components/issues/22165.
-->
<div class="mdc-circular-progress__determinate-container" aria-hidden="true" #determinateSpinner>
  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__determinate-circle-graphic"
       xmlns="http://www.w3.org/2000/svg" focusable="false">
    <circle [attr.r]="_circleRadius()"
            [style.stroke-dasharray.px]="_strokeCircumference()"
            [style.stroke-dashoffset.px]="_strokeDashOffset()"
            [style.stroke-width.%]="_circleStrokeWidth()"
            class="mdc-circular-progress__determinate-circle"
            cx="50%" cy="50%"/>
  </svg>
</div>
<!--TODO: figure out why there are 3 separate svgs-->
<div class="mdc-circular-progress__indeterminate-container" aria-hidden="true">
  <div class="mdc-circular-progress__spinner-layer">
    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">
      <ng-container [ngTemplateOutlet]="circle"></ng-container>
    </div>
    <div class="mdc-circular-progress__gap-patch">
      <ng-container [ngTemplateOutlet]="circle"></ng-container>
    </div>
    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">
      <ng-container [ngTemplateOutlet]="circle"></ng-container>
    </div>
  </div>
</div>
`,styles:["@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-color-1-fade-in-out{from{opacity:.99}25%{opacity:.99}26%{opacity:0}89%{opacity:0}90%{opacity:.99}to{opacity:.99}}@keyframes mdc-circular-progress-color-2-fade-in-out{from{opacity:0}15%{opacity:0}25%{opacity:.99}50%{opacity:.99}51%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-3-fade-in-out{from{opacity:0}40%{opacity:0}50%{opacity:.99}75%{opacity:.99}76%{opacity:0}to{opacity:0}}@keyframes mdc-circular-progress-color-4-fade-in-out{from{opacity:0}65%{opacity:0}75%{opacity:.99}90%{opacity:.99}to{opacity:0}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}.mdc-circular-progress{display:inline-flex;position:relative;direction:ltr;line-height:0;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{animation:mdc-circular-progress-container-rotate 1568.2352941176ms linear infinite}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-1{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-1-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-2{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-2-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-3{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-3-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__color-4{animation:mdc-circular-progress-spinner-layer-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both,mdc-circular-progress-color-4-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--closed{opacity:0}.mat-mdc-progress-spinner{--mdc-circular-progress-active-indicator-width:4px;--mdc-circular-progress-size:48px}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mdc-circular-progress-active-indicator-color)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner circle{stroke-width:var(--mdc-circular-progress-active-indicator-width)}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-1 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-2 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-3 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}@media screen and (forced-colors: active),(-ms-high-contrast: active){.mat-mdc-progress-spinner .mdc-circular-progress--four-color .mdc-circular-progress__color-4 .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mat-mdc-progress-spinner .mdc-circular-progress{width:var(--mdc-circular-progress-size) !important;height:var(--mdc-circular-progress-size) !important}.mat-mdc-progress-spinner{display:block;overflow:hidden;line-height:0}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.cdk-high-contrast-active .mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}"]}]}],function(){return[{type:r.ElementRef},{type:void 0,decorators:[{type:r.Optional},{type:r.Inject,args:[_.ANIMATION_MODULE_TYPE]}]},{type:void 0,decorators:[{type:r.Inject,args:[l]}]}]},{_determinateCircle:[{type:r.ViewChild,args:["determinateSpinner"]}],mode:[{type:r.Input}],value:[{type:r.Input}],diameter:[{type:r.Input}],strokeWidth:[{type:r.Input}]});const g=t;class o{static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275mod=r.\u0275\u0275defineNgModule({type:o})}static{this.\u0275inj=r.\u0275\u0275defineInjector({imports:[p.CommonModule,m.MatCommonModule]})}}(typeof ngDevMode>"u"||ngDevMode)&&r.\u0275setClassMetadata(o,[{type:r.NgModule,args:[{imports:[p.CommonModule],exports:[t,g,m.MatCommonModule],declarations:[t,g]}]}],null,null)}}]);