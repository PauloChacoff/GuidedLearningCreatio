(self.webpackChunkapp_studio_enterprise_analytics_dashboard=self.webpackChunkapp_studio_enterprise_analytics_dashboard||[]).push([[8296],{48296:(V,M,h)=>{h.r(M),h.d(M,{BaseTreeControl:()=>T,CDK_TREE_NODE_OUTLET_NODE:()=>y,CdkNestedTreeNode:()=>c,CdkTree:()=>d,CdkTreeModule:()=>D,CdkTreeNode:()=>r,CdkTreeNodeDef:()=>u,CdkTreeNodeOutlet:()=>a,CdkTreeNodeOutletContext:()=>I,CdkTreeNodePadding:()=>_,CdkTreeNodeToggle:()=>v,FlatTreeControl:()=>B,NestedTreeControl:()=>P,getTreeControlFunctionsMissingError:()=>k,getTreeControlMissingError:()=>w,getTreeMissingMatchingNodeDefError:()=>R,getTreeMultipleDefaultNodeDefsError:()=>x,getTreeNoValidDataSourceError:()=>O});var m=h(62225),l=h(62278),g=h(36486),n=h(59131),C=h(24897),b=h(13053);class T{constructor(){this.expansionModel=new m.SelectionModel(!0)}toggle(e){this.expansionModel.toggle(this._trackByValue(e))}expand(e){this.expansionModel.select(this._trackByValue(e))}collapse(e){this.expansionModel.deselect(this._trackByValue(e))}isExpanded(e){return this.expansionModel.isSelected(this._trackByValue(e))}toggleDescendants(e){this.expansionModel.isSelected(this._trackByValue(e))?this.collapseDescendants(e):this.expandDescendants(e)}collapseAll(){this.expansionModel.clear()}expandDescendants(e){let t=[e];t.push(...this.getDescendants(e)),this.expansionModel.select(...t.map(s=>this._trackByValue(s)))}collapseDescendants(e){let t=[e];t.push(...this.getDescendants(e)),this.expansionModel.deselect(...t.map(s=>this._trackByValue(s)))}_trackByValue(e){return this.trackBy?this.trackBy(e):e}}class B extends T{constructor(e,t,s){super(),this.getLevel=e,this.isExpandable=t,this.options=s,this.options&&(this.trackBy=this.options.trackBy)}getDescendants(e){const t=this.dataNodes.indexOf(e),s=[];for(let i=t+1;i<this.dataNodes.length&&this.getLevel(e)<this.getLevel(this.dataNodes[i]);i++)s.push(this.dataNodes[i]);return s}expandAll(){this.expansionModel.select(...this.dataNodes.map(e=>this._trackByValue(e)))}}class P extends T{constructor(e,t){super(),this.getChildren=e,this.options=t,this.options&&(this.trackBy=this.options.trackBy)}expandAll(){this.expansionModel.clear();const e=this.dataNodes.reduce((t,s)=>[...t,...this.getDescendants(s),s],[]);this.expansionModel.select(...e.map(t=>this._trackByValue(t)))}getDescendants(e){const t=[];return this._getDescendants(t,e),t.splice(1)}_getDescendants(e,t){e.push(t);const s=this.getChildren(t);Array.isArray(s)?s.forEach(i=>this._getDescendants(e,i)):(0,l.isObservable)(s)&&s.pipe((0,g.take)(1),(0,g.filter)(Boolean)).subscribe(i=>{for(const o of i)this._getDescendants(e,o)})}}const y=new n.InjectionToken("CDK_TREE_NODE_OUTLET_NODE");class a{constructor(e,t){this.viewContainer=e,this._node=t}static{this.\u0275fac=function(t){return new(t||a)(n.\u0275\u0275directiveInject(n.ViewContainerRef),n.\u0275\u0275directiveInject(y,8))}}static{this.\u0275dir=n.\u0275\u0275defineDirective({type:a,selectors:[["","cdkTreeNodeOutlet",""]]})}}(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(a,[{type:n.Directive,args:[{selector:"[cdkTreeNodeOutlet]"}]}],function(){return[{type:n.ViewContainerRef},{type:void 0,decorators:[{type:n.Inject,args:[y]},{type:n.Optional}]}]},null);class I{constructor(e){this.$implicit=e}}class u{constructor(e){this.template=e}static{this.\u0275fac=function(t){return new(t||u)(n.\u0275\u0275directiveInject(n.TemplateRef))}}static{this.\u0275dir=n.\u0275\u0275defineDirective({type:u,selectors:[["","cdkTreeNodeDef",""]],inputs:{when:[n.\u0275\u0275InputFlags.None,"cdkTreeNodeDefWhen","when"]}})}}(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(u,[{type:n.Directive,args:[{selector:"[cdkTreeNodeDef]",inputs:["when: cdkTreeNodeDefWhen"]}]}],function(){return[{type:n.TemplateRef}]},null);function O(){return Error("A valid data source must be provided.")}function x(){return Error("There can only be one default row without a when predicate function.")}function R(){return Error("Could not find a matching node definition for the provided node data.")}function w(){return Error("Could not find a tree control for the tree.")}function k(){return Error("Could not find functions for nested/flat tree in tree control.")}class d{get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}constructor(e,t){this._differs=e,this._changeDetectorRef=t,this._onDestroy=new l.Subject,this._levels=new Map,this.viewChange=new l.BehaviorSubject({start:0,end:Number.MAX_VALUE})}ngOnInit(){if(this._dataDiffer=this._differs.find([]).create(this.trackBy),!this.treeControl&&(typeof ngDevMode>"u"||ngDevMode))throw w()}ngOnDestroy(){this._nodeOutlet.viewContainer.clear(),this.viewChange.complete(),this._onDestroy.next(),this._onDestroy.complete(),this._dataSource&&typeof this._dataSource.disconnect=="function"&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null)}ngAfterContentChecked(){const e=this._nodeDefs.filter(t=>!t.when);if(e.length>1&&(typeof ngDevMode>"u"||ngDevMode))throw x();this._defaultNodeDef=e[0],this.dataSource&&this._nodeDefs&&!this._dataSubscription&&this._observeRenderChanges()}_switchDataSource(e){this._dataSource&&typeof this._dataSource.disconnect=="function"&&this.dataSource.disconnect(this),this._dataSubscription&&(this._dataSubscription.unsubscribe(),this._dataSubscription=null),e||this._nodeOutlet.viewContainer.clear(),this._dataSource=e,this._nodeDefs&&this._observeRenderChanges()}_observeRenderChanges(){let e;if((0,m.isDataSource)(this._dataSource)?e=this._dataSource.connect(this):(0,l.isObservable)(this._dataSource)?e=this._dataSource:Array.isArray(this._dataSource)&&(e=(0,l.of)(this._dataSource)),e)this._dataSubscription=e.pipe((0,g.takeUntil)(this._onDestroy)).subscribe(t=>this.renderNodeChanges(t));else if(typeof ngDevMode>"u"||ngDevMode)throw O()}renderNodeChanges(e,t=this._dataDiffer,s=this._nodeOutlet.viewContainer,i){const o=t.diff(e);o&&(o.forEachOperation((f,E,N)=>{if(f.previousIndex==null)this.insertNode(e[N],N,s,i);else if(N==null)s.remove(E),this._levels.delete(f.item);else{const F=s.get(E);s.move(F,N)}}),this._changeDetectorRef.detectChanges())}_getNodeDef(e,t){if(this._nodeDefs.length===1)return this._nodeDefs.first;const s=this._nodeDefs.find(i=>i.when&&i.when(t,e))||this._defaultNodeDef;if(!s&&(typeof ngDevMode>"u"||ngDevMode))throw R();return s}insertNode(e,t,s,i){const o=this._getNodeDef(e,t),f=new I(e);this.treeControl.getLevel?f.level=this.treeControl.getLevel(e):typeof i<"u"&&this._levels.has(i)?f.level=this._levels.get(i)+1:f.level=0,this._levels.set(e,f.level),(s||this._nodeOutlet.viewContainer).createEmbeddedView(o.template,f,t),r.mostRecentTreeNode&&(r.mostRecentTreeNode.data=e)}static{this.\u0275fac=function(t){return new(t||d)(n.\u0275\u0275directiveInject(n.IterableDiffers),n.\u0275\u0275directiveInject(n.ChangeDetectorRef))}}static{this.\u0275cmp=n.\u0275\u0275defineComponent({type:d,selectors:[["cdk-tree"]],contentQueries:function(t,s,i){if(t&1&&n.\u0275\u0275contentQuery(i,u,5),t&2){let o;n.\u0275\u0275queryRefresh(o=n.\u0275\u0275loadQuery())&&(s._nodeDefs=o)}},viewQuery:function(t,s){if(t&1&&n.\u0275\u0275viewQuery(a,7),t&2){let i;n.\u0275\u0275queryRefresh(i=n.\u0275\u0275loadQuery())&&(s._nodeOutlet=i.first)}},hostAttrs:["role","tree",1,"cdk-tree"],inputs:{dataSource:"dataSource",treeControl:"treeControl",trackBy:"trackBy"},exportAs:["cdkTree"],decls:1,vars:0,consts:[["cdkTreeNodeOutlet",""]],template:function(t,s){t&1&&n.\u0275\u0275elementContainer(0,0)},dependencies:[a],encapsulation:2})}}(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(d,[{type:n.Component,args:[{selector:"cdk-tree",exportAs:"cdkTree",template:"<ng-container cdkTreeNodeOutlet></ng-container>",host:{class:"cdk-tree",role:"tree"},encapsulation:n.ViewEncapsulation.None,changeDetection:n.ChangeDetectionStrategy.Default}]}],function(){return[{type:n.IterableDiffers},{type:n.ChangeDetectorRef}]},{dataSource:[{type:n.Input}],treeControl:[{type:n.Input}],trackBy:[{type:n.Input}],_nodeOutlet:[{type:n.ViewChild,args:[a,{static:!0}]}],_nodeDefs:[{type:n.ContentChildren,args:[u,{descendants:!0}]}]});class r{get role(){return"treeitem"}set role(e){this._elementRef.nativeElement.setAttribute("role",e)}static{this.mostRecentTreeNode=null}get data(){return this._data}set data(e){e!==this._data&&(this._data=e,this._setRoleFromData(),this._dataChanges.next())}get isExpanded(){return this._tree.treeControl.isExpanded(this._data)}get level(){return this._tree.treeControl.getLevel?this._tree.treeControl.getLevel(this._data):this._parentNodeAriaLevel}constructor(e,t){this._elementRef=e,this._tree=t,this._destroyed=new l.Subject,this._dataChanges=new l.Subject,r.mostRecentTreeNode=this,this.role="treeitem"}ngOnInit(){this._parentNodeAriaLevel=A(this._elementRef.nativeElement),this._elementRef.nativeElement.setAttribute("aria-level",`${this.level+1}`)}ngOnDestroy(){r.mostRecentTreeNode===this&&(r.mostRecentTreeNode=null),this._dataChanges.complete(),this._destroyed.next(),this._destroyed.complete()}focus(){this._elementRef.nativeElement.focus()}_setRoleFromData(){if(!this._tree.treeControl.isExpandable&&!this._tree.treeControl.getChildren&&(typeof ngDevMode>"u"||ngDevMode))throw k();this.role="treeitem"}static{this.\u0275fac=function(t){return new(t||r)(n.\u0275\u0275directiveInject(n.ElementRef),n.\u0275\u0275directiveInject(d))}}static{this.\u0275dir=n.\u0275\u0275defineDirective({type:r,selectors:[["cdk-tree-node"]],hostAttrs:[1,"cdk-tree-node"],hostVars:1,hostBindings:function(t,s){t&2&&n.\u0275\u0275attribute("aria-expanded",s.isExpanded)},inputs:{role:"role"},exportAs:["cdkTreeNode"]})}}(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(r,[{type:n.Directive,args:[{selector:"cdk-tree-node",exportAs:"cdkTreeNode",host:{class:"cdk-tree-node","[attr.aria-expanded]":"isExpanded"}}]}],function(){return[{type:n.ElementRef},{type:d}]},{role:[{type:n.Input}]});function A(p){let e=p.parentElement;for(;e&&!L(e);)e=e.parentElement;if(e)return e.classList.contains("cdk-nested-tree-node")?(0,C.coerceNumberProperty)(e.getAttribute("aria-level")):0;if(typeof ngDevMode>"u"||ngDevMode)throw Error("Incorrect tree structure containing detached node.");return-1}function L(p){const e=p.classList;return!!(e?.contains("cdk-nested-tree-node")||e?.contains("cdk-tree"))}class c extends r{constructor(e,t,s){super(e,t),this._differs=s}ngAfterContentInit(){if(this._dataDiffer=this._differs.find([]).create(this._tree.trackBy),!this._tree.treeControl.getChildren&&(typeof ngDevMode>"u"||ngDevMode))throw k();const e=this._tree.treeControl.getChildren(this.data);Array.isArray(e)?this.updateChildrenNodes(e):(0,l.isObservable)(e)&&e.pipe((0,g.takeUntil)(this._destroyed)).subscribe(t=>this.updateChildrenNodes(t)),this.nodeOutlet.changes.pipe((0,g.takeUntil)(this._destroyed)).subscribe(()=>this.updateChildrenNodes())}ngOnInit(){super.ngOnInit()}ngOnDestroy(){this._clear(),super.ngOnDestroy()}updateChildrenNodes(e){const t=this._getNodeOutlet();if(e&&(this._children=e),t&&this._children){const s=t.viewContainer;this._tree.renderNodeChanges(this._children,this._dataDiffer,s,this._data)}else this._dataDiffer.diff([])}_clear(){const e=this._getNodeOutlet();e&&(e.viewContainer.clear(),this._dataDiffer.diff([]))}_getNodeOutlet(){const e=this.nodeOutlet;return e&&e.find(t=>!t._node||t._node===this)}static{this.\u0275fac=function(t){return new(t||c)(n.\u0275\u0275directiveInject(n.ElementRef),n.\u0275\u0275directiveInject(d),n.\u0275\u0275directiveInject(n.IterableDiffers))}}static{this.\u0275dir=n.\u0275\u0275defineDirective({type:c,selectors:[["cdk-nested-tree-node"]],contentQueries:function(t,s,i){if(t&1&&n.\u0275\u0275contentQuery(i,a,5),t&2){let o;n.\u0275\u0275queryRefresh(o=n.\u0275\u0275loadQuery())&&(s.nodeOutlet=o)}},hostAttrs:[1,"cdk-nested-tree-node"],inputs:{role:"role",disabled:"disabled",tabIndex:"tabIndex"},exportAs:["cdkNestedTreeNode"],features:[n.\u0275\u0275ProvidersFeature([{provide:r,useExisting:c},{provide:y,useExisting:c}]),n.\u0275\u0275InheritDefinitionFeature]})}}(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(c,[{type:n.Directive,args:[{selector:"cdk-nested-tree-node",exportAs:"cdkNestedTreeNode",inputs:["role","disabled","tabIndex"],providers:[{provide:r,useExisting:c},{provide:y,useExisting:c}],host:{class:"cdk-nested-tree-node"}}]}],function(){return[{type:n.ElementRef},{type:d},{type:n.IterableDiffers}]},{nodeOutlet:[{type:n.ContentChildren,args:[a,{descendants:!0}]}]});const j=/([A-Za-z%]+)$/;class _{get level(){return this._level}set level(e){this._setLevelInput(e)}get indent(){return this._indent}set indent(e){this._setIndentInput(e)}constructor(e,t,s,i){this._treeNode=e,this._tree=t,this._element=s,this._dir=i,this._destroyed=new l.Subject,this.indentUnits="px",this._indent=40,this._setPadding(),i&&i.change.pipe((0,g.takeUntil)(this._destroyed)).subscribe(()=>this._setPadding(!0)),e._dataChanges.subscribe(()=>this._setPadding())}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}_paddingIndent(){const e=this._treeNode.data&&this._tree.treeControl.getLevel?this._tree.treeControl.getLevel(this._treeNode.data):null,t=this._level==null?e:this._level;return typeof t=="number"?`${t*this._indent}${this.indentUnits}`:null}_setPadding(e=!1){const t=this._paddingIndent();if(t!==this._currentPadding||e){const s=this._element.nativeElement,i=this._dir&&this._dir.value==="rtl"?"paddingRight":"paddingLeft",o=i==="paddingLeft"?"paddingRight":"paddingLeft";s.style[i]=t||"",s.style[o]="",this._currentPadding=t}}_setLevelInput(e){this._level=(0,C.coerceNumberProperty)(e,null),this._setPadding()}_setIndentInput(e){let t=e,s="px";if(typeof e=="string"){const i=e.split(j);t=i[0],s=i[1]||s}this.indentUnits=s,this._indent=(0,C.coerceNumberProperty)(t),this._setPadding()}static{this.\u0275fac=function(t){return new(t||_)(n.\u0275\u0275directiveInject(r),n.\u0275\u0275directiveInject(d),n.\u0275\u0275directiveInject(n.ElementRef),n.\u0275\u0275directiveInject(b.Directionality,8))}}static{this.\u0275dir=n.\u0275\u0275defineDirective({type:_,selectors:[["","cdkTreeNodePadding",""]],inputs:{level:[n.\u0275\u0275InputFlags.None,"cdkTreeNodePadding","level"],indent:[n.\u0275\u0275InputFlags.None,"cdkTreeNodePaddingIndent","indent"]}})}}(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(_,[{type:n.Directive,args:[{selector:"[cdkTreeNodePadding]"}]}],function(){return[{type:r},{type:d},{type:n.ElementRef},{type:b.Directionality,decorators:[{type:n.Optional}]}]},{level:[{type:n.Input,args:["cdkTreeNodePadding"]}],indent:[{type:n.Input,args:["cdkTreeNodePaddingIndent"]}]});class v{get recursive(){return this._recursive}set recursive(e){this._recursive=(0,C.coerceBooleanProperty)(e)}constructor(e,t){this._tree=e,this._treeNode=t,this._recursive=!1}_toggle(e){this.recursive?this._tree.treeControl.toggleDescendants(this._treeNode.data):this._tree.treeControl.toggle(this._treeNode.data),e.stopPropagation()}static{this.\u0275fac=function(t){return new(t||v)(n.\u0275\u0275directiveInject(d),n.\u0275\u0275directiveInject(r))}}static{this.\u0275dir=n.\u0275\u0275defineDirective({type:v,selectors:[["","cdkTreeNodeToggle",""]],hostBindings:function(t,s){t&1&&n.\u0275\u0275listener("click",function(o){return s._toggle(o)})},inputs:{recursive:[n.\u0275\u0275InputFlags.None,"cdkTreeNodeToggleRecursive","recursive"]}})}}(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(v,[{type:n.Directive,args:[{selector:"[cdkTreeNodeToggle]",host:{"(click)":"_toggle($event)"}}]}],function(){return[{type:d},{type:r}]},{recursive:[{type:n.Input,args:["cdkTreeNodeToggleRecursive"]}]});const S=[c,u,_,v,d,r,a];class D{static{this.\u0275fac=function(t){return new(t||D)}}static{this.\u0275mod=n.\u0275\u0275defineNgModule({type:D})}static{this.\u0275inj=n.\u0275\u0275defineInjector({})}}(typeof ngDevMode>"u"||ngDevMode)&&n.\u0275setClassMetadata(D,[{type:n.NgModule,args:[{exports:S,declarations:S}]}],null,null)}}]);