(self.webpackChunkapp_studio_enterprise_relationship_diagram=self.webpackChunkapp_studio_enterprise_relationship_diagram||[]).push([[1857,4238],{71857:(B,f,l)=>{l.r(f),l.d(f,{Platform:()=>i,PlatformModule:()=>a,_getEventTarget:()=>D,_getFocusedElementPierceShadowDom:()=>T,_getShadowRoot:()=>S,_isTestEnvironment:()=>R,_supportsShadowDom:()=>g,getRtlScrollAxisType:()=>_,getSupportedInputTypes:()=>w,normalizePassiveListenerOptions:()=>E,supportsPassiveEventListeners:()=>m,supportsScrollBehavior:()=>I});var o=l(59131),v=l(40297);let c;try{c=typeof Intl<"u"&&Intl.v8BreakIterator}catch{c=!1}class i{constructor(t){this._platformId=t,this.isBrowser=this._platformId?(0,v.isPlatformBrowser)(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||c)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static{this.\u0275fac=function(r){return new(r||i)(o.\u0275\u0275inject(o.PLATFORM_ID))}}static{this.\u0275prov=o.\u0275\u0275defineInjectable({token:i,factory:i.\u0275fac,providedIn:"root"})}}(typeof ngDevMode>"u"||ngDevMode)&&o.\u0275setClassMetadata(i,[{type:o.Injectable,args:[{providedIn:"root"}]}],function(){return[{type:Object,decorators:[{type:o.Inject,args:[o.PLATFORM_ID]}]}]},null);class a{static{this.\u0275fac=function(r){return new(r||a)}}static{this.\u0275mod=o.\u0275\u0275defineNgModule({type:a})}static{this.\u0275inj=o.\u0275\u0275defineInjector({})}}(typeof ngDevMode>"u"||ngDevMode)&&o.\u0275setClassMetadata(a,[{type:o.NgModule,args:[{}]}],null,null);let s;const h=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function w(){if(s)return s;if(typeof document!="object"||!document)return s=new Set(h),s;let e=document.createElement("input");return s=new Set(h.filter(t=>(e.setAttribute("type",t),e.type===t))),s}let d;function m(){if(d==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>d=!0}))}finally{d=d||!1}return d}function E(e){return m()?e:!!e.capture}let u,n;function I(){if(n==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return n=!1,n;if("scrollBehavior"in document.documentElement.style)n=!0;else{const e=Element.prototype.scrollTo;e?n=!/\{\s*\[native code\]\s*\}/.test(e.toString()):n=!1}}return n}function _(){if(typeof document!="object"||!document)return 0;if(u==null){const e=document.createElement("div"),t=e.style;e.dir="rtl",t.width="1px",t.overflow="auto",t.visibility="hidden",t.pointerEvents="none",t.position="absolute";const r=document.createElement("div"),y=r.style;y.width="2px",y.height="1px",e.appendChild(r),document.body.appendChild(e),u=0,e.scrollLeft===0&&(e.scrollLeft=1,u=e.scrollLeft===0?1:2),e.remove()}return u}let p;function g(){if(p==null){const e=typeof document<"u"?document.head:null;p=!!(e&&(e.createShadowRoot||e.attachShadow))}return p}function S(e){if(g()){const t=e.getRootNode?e.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&t instanceof ShadowRoot)return t}return null}function T(){let e=typeof document<"u"&&document?document.activeElement:null;for(;e&&e.shadowRoot;){const t=e.shadowRoot.activeElement;if(t===e)break;e=t}return e}function D(e){return e.composedPath?e.composedPath()[0]:e.target}function R(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}}}]);