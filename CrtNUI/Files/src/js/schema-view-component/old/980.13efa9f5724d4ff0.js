(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[980],{98980:(b,K,c)=>{"use strict";c.r(K),c.d(K,{CONVERSATION_RESET_EVENT:()=>Q,ChatMessageActionHandler:()=>I,ChatMessageActionRequest:()=>V,ChatMessageTypeRegisterServiceMock:()=>be,ConversationEvent:()=>re,CrtChatDisclaimerComponent:()=>h,CrtChatMessagesComponent:()=>C,CrtChatPanelModule:()=>T,CrtChatTypingComponent:()=>y,CrtConversationComponent:()=>l,CrtMessageEditorComponent:()=>_,CrtMessageEditorInputComponent:()=>m,CrtMessageEditorReplyComponent:()=>f,MessageEditorPreprocessor:()=>Z,MessageEditorSendHandler:()=>H,MessageEditorSendRequest:()=>D});var o=c(97270),e=c(99314),i=c(44537);const q=["messages"],G=[[["",8,"messages-header"]]],X=[".messages-header"];function Y(a,n){}class C{get _lastAuthor(){return this._renderedMessages.length===0?this._lastMessageAuthor:this._renderedMessages[this._renderedMessages.length-1]?.author?.name??null}set messages(n){if(!n)return;const t=this._processMessages(n),s=this._filterNewMessages(t);this._addNewMessages(s),this._renderedMessages=[...this._renderedMessages,...s]}constructor(n){this._renderer=n,this._renderedMessages=[],this._lastMessageAuthor=null,this._messagesCounter=0,this._lastMessageDirections=null,this.messagePositionAttributeName="chat-message-position"}_getParentContainer(){return this.messagesContainer.nativeElement.parentElement}_addNewMessages(n){n.forEach(t=>{this._messagesCounter++;const s=i.ChatMessageTypeRegistry.getSelector(t.type),r=this._renderer.createElement(s);this._lastMessageDirections!==t.direction&&(r.classList.add("message-group-starter"),this._lastMessageDirections=t.direction),this._renderer.setProperty(r,"message",t),this._renderer.setAttribute(r,this.messagePositionAttributeName,`${this._messagesCounter}`),this._renderer.appendChild(this._getParentContainer(),r)})}_filterNewMessages(n){return n.filter(t=>!this._renderedMessages.some(s=>s.id===t.id))}_processMessages(n){return n.map(t=>t.author?.name!==this._lastAuthor?(this._lastMessageAuthor=t.author?.name,t):{...t,author:null})}reset(){this._messagesCounter=0,this._renderedMessages=[];const n=this._getParentContainer();Array.from(n.children).forEach(s=>{this._renderer.removeChild(n,s)})}static{this.\u0275fac=function(t){return new(t||C)(e.\u0275\u0275directiveInject(e.Renderer2))}}static{this.\u0275cmp=e.\u0275\u0275defineComponent({type:C,selectors:[["crt-chat-messages"]],viewQuery:function(t,s){if(t&1&&e.\u0275\u0275viewQuery(q,7,e.ElementRef),t&2){let r;e.\u0275\u0275queryRefresh(r=e.\u0275\u0275loadQuery())&&(s.messagesContainer=r.first)}},inputs:{messages:"messages"},ngContentSelectors:X,decls:6,vars:0,consts:[["messages",""],[1,"wrapper"],[1,"header-container"],[1,"messages-container"]],template:function(t,s){t&1&&(e.\u0275\u0275projectionDef(G),e.\u0275\u0275elementStart(0,"div",1)(1,"div",2),e.\u0275\u0275projection(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"div",3),e.\u0275\u0275template(4,Y,0,0,"ng-template",null,0,e.\u0275\u0275templateRefExtractor),e.\u0275\u0275elementEnd()())}})}}(0,o.Cg)([(0,i.CrtInput)(),(0,o.Sn)("design:type",Array),(0,o.Sn)("design:paramtypes",[Array])],C.prototype,"messages",null);var B=c(59861),d=c(76696),ee=c(79111),te=c(67360),ne=c(86432);function se(a,n){if(a&1&&(e.\u0275\u0275elementStart(0,"div",7),e.\u0275\u0275element(1,"crt-image-input",8)(2,"crt-label",9),e.\u0275\u0275elementEnd()),a&2){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(),e.\u0275\u0275property("value",t.author.photo)("placeholder",t.author.name),e.\u0275\u0275advance(),e.\u0275\u0275property("caption",t.author.name)}}let y=class k{ngOnInit(){this._initAnimation()}_initAnimation(){this.typingAnimation={animationData:()=>c.e(228).then(c.t.bind(c,37228,19)),autoplay:!0,loop:!0}}static{this.\u0275fac=function(t){return new(t||k)}}static{this.\u0275cmp=e.\u0275\u0275defineComponent({type:k,selectors:[["crt-chat-typing"]],inputs:{author:"author",message:"message"},decls:7,vars:3,consts:[[1,"typing"],["class","author",4,"ngIf"],[1,"typing-message"],[1,"animation"],["width","16px","height","16px",3,"config"],[1,"text"],["labelColor","var(--crt-palette-label-500)","labelType","caption","labelFontSize","10px",1,"typing-text",3,"caption"],[1,"author"],["readonly","true","placeholderMode","abbreviation","borderRadius","large","positioning","cover","size","extra-small",1,"author-image",3,"value","placeholder"],["labelColor","var(--crt-palette-label-500)","labelType","caption","labelFontSize","12px",1,"author-text",3,"caption"]],template:function(t,s){t&1&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275template(1,se,3,3,"div",1),e.\u0275\u0275elementStart(2,"div",2)(3,"div",3),e.\u0275\u0275element(4,"crt-lottie",4),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"div",5),e.\u0275\u0275element(6,"crt-label",6),e.\u0275\u0275elementEnd()()()),t&2&&(e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",s.author),e.\u0275\u0275advance(3),e.\u0275\u0275property("config",s.typingAnimation),e.\u0275\u0275advance(2),e.\u0275\u0275property("caption",s.message))},dependencies:[d.NgIf,ee.V,te.g,ne.w],styles:[".author[_ngcontent-%COMP%], .typing-message[_ngcontent-%COMP%]{display:flex;gap:8px;margin:10px 0}"]})}};(0,o.Cg)([(0,i.CrtInput)(),(0,o.Sn)("design:type",B.Bv)],y.prototype,"author",void 0),(0,o.Cg)([(0,i.CrtInput)(),(0,o.Sn)("design:type",String)],y.prototype,"message",void 0),y=(0,o.Cg)([(0,i.CrtViewElement)({type:"crt.ChatTyping",reuseStrategy:i.ViewElementReuseStrategy.Reuse})],y);var oe=c(38493);class re{}const Q="reset";var A=c(26182);const ae=["typing"],ie=["contentWrap"],ce=[[["","actions",""]],[["","information",""]],[["","placeholder",""]],[["","tools",""]],[["","typing",""]]],pe=["[actions]","[information]","[placeholder]","[tools]","[typing]"];function le(a,n){a&1&&(e.\u0275\u0275elementStart(0,"div",8,1),e.\u0275\u0275projection(2,4),e.\u0275\u0275elementEnd())}function de(a,n){if(a&1&&(e.\u0275\u0275elementStart(0,"span",13),e.\u0275\u0275text(1),e.\u0275\u0275elementEnd()),a&2){const t=e.\u0275\u0275nextContext(2);e.\u0275\u0275advance(),e.\u0275\u0275textInterpolate(t.unreadMessages>9?"9+":t.unreadMessages)}}function ge(a,n){if(a&1){const t=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",9),e.\u0275\u0275listener("click",function(){e.\u0275\u0275restoreView(t);const r=e.\u0275\u0275nextContext();return e.\u0275\u0275resetView(r.scrollToLastMessage())}),e.\u0275\u0275template(1,de,2,1,"span",10),e.\u0275\u0275elementStart(2,"div",11),e.\u0275\u0275element(3,"mat-icon",12),e.\u0275\u0275elementEnd()()}if(a&2){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",t.unreadMessages>0)}}let l=class L extends B.Mm{get _messagesContainer(){return this._chatMessagesComponent?.messagesContainer?.nativeElement?.parentElement}set conversationEvent(n){n?.forEach(t=>{t.name===Q&&(this._chatMessagesComponent.reset(),this.isScrolledUp=!1,this.unreadMessages=0)}),n?.length&&this.conversationEventChange.emit([])}constructor(n){super(n),this.injector=n,this._scrollOnOpen=!0,this.unreadMessages=0,this.isScrolledUp=!1,this.actions=[],this.information=[],this.tools=[],this.placeholder=[],this.typing=[],this.messages=[],this.isTyping=!1,this.conversationEventChange=new e.EventEmitter,this._observeLastVisibleMessageElement=()=>{const t=this._messagesContainer.querySelectorAll(`[${this._chatMessagesComponent.messagePositionAttributeName}]`),s=t.length,r=this._getLastVisibleMessageElement(t),p=r?parseInt(r.getAttribute(this._chatMessagesComponent.messagePositionAttributeName)):0;this.isScrolledUp=p<s,this.unreadMessages=Math.min(s-p,this.unreadMessages||0),this.changeDetectorRef.detectChanges()}}_scrollToBottom(){this.isScrolledUp||setTimeout(()=>{(this._typingContainer?.nativeElement||this._messagesContainer?.lastChild)?.scrollIntoView?.({block:"start"}),this.isScrolledUp=!1},0)}_resetScroll(){this.isScrolledUp=!1,this._scrollOnOpen=!0,this._observer?.disconnect()}_startObserve(n,t){n&&(this._stopObserve(n),this._observer=new IntersectionObserver(s=>t(s.filter(r=>r.target===n),n)),this._observer.observe(n))}_stopObserve(n){this._observer&&this._observer.unobserve(n)}_observeMessages(){this._messagesContainer&&new MutationObserver(t=>{for(const s of t)s.type==="childList"&&s.addedNodes.forEach(r=>{r.nodeType===Node.ELEMENT_NODE&&this._processLastElement(r)})}).observe(this._messagesContainer,{childList:!0,subtree:!1})}_processLastElement(n){n?.message?.direction===oe.MessageDirection.Outcoming?(this.isScrolledUp=!1,this._scrollToBottom()):this.isScrolledUp&&(this.unreadMessages=(this.unreadMessages||0)+1,this.changeDetectorRef.detectChanges()),this.isScrolledUp||(this._observer?.disconnect(),this._startObserve(n,t=>{t.forEach(s=>this.isScrolledUp=!s.isIntersecting)}))}_getLastVisibleMessageElement(n){const t=this._contentWrap.nativeElement;let s=null;return n.forEach(r=>{if(r instanceof HTMLElement){const p=r.getBoundingClientRect(),v=t.getBoundingClientRect();p.top<v.bottom&&p.bottom>v.top&&(s=r)}}),s}ngAfterViewInit(){super.ngAfterViewInit(),this._observeMessages(),this._contentWrap?.nativeElement?.addEventListener?.("scroll",this._observeLastVisibleMessageElement)}ngAfterViewChecked(){this.elementRef.nativeElement?.checkVisibility?.()?this._scrollOnOpen&&(this._scrollToBottom(),this._scrollOnOpen=!1):this._resetScroll()}ngOnChanges(){this.isScrolledUp||this._scrollToBottom()}ngOnDestroy(){super.ngOnDestroy(),this._contentWrap?.nativeElement?.removeEventListener?.("scroll",this._observeLastVisibleMessageElement)}scrollToLastMessage(){this.isScrolledUp=!1,this._scrollToBottom()}static{this.\u0275fac=function(t){return new(t||L)(e.\u0275\u0275directiveInject(e.Injector))}}static{this.\u0275cmp=e.\u0275\u0275defineComponent({type:L,selectors:[["crt-conversation"]],viewQuery:function(t,s){if(t&1&&(e.\u0275\u0275viewQuery(C,5),e.\u0275\u0275viewQuery(ae,5,e.ElementRef),e.\u0275\u0275viewQuery(ie,5,e.ElementRef)),t&2){let r;e.\u0275\u0275queryRefresh(r=e.\u0275\u0275loadQuery())&&(s._chatMessagesComponent=r.first),e.\u0275\u0275queryRefresh(r=e.\u0275\u0275loadQuery())&&(s._typingContainer=r.first),e.\u0275\u0275queryRefresh(r=e.\u0275\u0275loadQuery())&&(s._contentWrap=r.first)}},inputs:{actions:"actions",information:"information",tools:"tools",placeholder:"placeholder",typing:"typing",conversationEvent:"conversationEvent",messages:"messages",isTyping:"isTyping"},outputs:{conversationEventChange:"conversationEventChange"},features:[e.\u0275\u0275InheritDefinitionFeature,e.\u0275\u0275NgOnChangesFeature],ngContentSelectors:pe,decls:11,vars:3,consts:[["contentWrap",""],["typing",""],[1,"container"],[1,"chat-panel-content-wrap"],[3,"messages"],["class","typing",4,"ngIf"],["class","scroll-to-bottom",3,"click",4,"ngIf"],[1,"tools"],[1,"typing"],[1,"scroll-to-bottom",3,"click"],["class","unread-messages",4,"ngIf"],[1,"arrow-wrap"],["svgIcon","arrow-down-heavy"],[1,"unread-messages"]],template:function(t,s){t&1&&(e.\u0275\u0275projectionDef(ce),e.\u0275\u0275elementStart(0,"div",2),e.\u0275\u0275projection(1),e.\u0275\u0275projection(2,1),e.\u0275\u0275elementStart(3,"div",3,0)(5,"crt-chat-messages",4),e.\u0275\u0275projection(6,2,[1,"messages-header"]),e.\u0275\u0275elementEnd(),e.\u0275\u0275template(7,le,3,0,"div",5)(8,ge,4,1,"div",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(9,"div",7),e.\u0275\u0275projection(10,3),e.\u0275\u0275elementEnd()()),t&2&&(e.\u0275\u0275advance(5),e.\u0275\u0275property("messages",s.messages),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",s.isTyping),e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",s.isScrolledUp))},dependencies:[A.An,d.NgIf,C],styles:[".chat-panel-content-wrap[_ngcontent-%COMP%]{flex:1 1 auto;overflow-y:auto;box-sizing:border-box;overflow-x:hidden}.chat-panel-content-wrap[_ngcontent-%COMP%]   .scroll-to-bottom[_ngcontent-%COMP%]{position:sticky;left:50%;right:50%;transform:translate(-50%);bottom:4px;display:inline-flex;flex-direction:column;align-items:center;border-radius:16px}.chat-panel-content-wrap[_ngcontent-%COMP%]   .scroll-to-bottom[_ngcontent-%COMP%]   .unread-messages[_ngcontent-%COMP%]{position:fixed;min-width:8px;height:16px;top:-8px;left:-4px;border-radius:8px;padding:0 4px;text-align:center;direction:ltr}.chat-panel-content-wrap[_ngcontent-%COMP%]   .scroll-to-bottom[_ngcontent-%COMP%]   .arrow-wrap[_ngcontent-%COMP%]{width:32px;height:32px;cursor:pointer;display:flex;align-items:center;justify-content:center}.chat-panel-content-wrap[_ngcontent-%COMP%]   .scroll-to-bottom[_ngcontent-%COMP%]   .arrow-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{width:16px;height:16px}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100%;padding:16px 24px}.tools[_ngcontent-%COMP%]{width:100%;box-sizing:border-box;padding-top:10px;padding-bottom:10px}[_nghost-%COMP%]{display:block;height:100%}[dir=rtl][_ngcontent-%COMP%]   .scroll-to-bottom[_ngcontent-%COMP%]   .unread-messages[_ngcontent-%COMP%]{left:unset;right:-4px}"]})}};(0,o.Cg)([(0,i.CrtInput)(),(0,o.Sn)("design:type",Array)],l.prototype,"actions",void 0),(0,o.Cg)([(0,i.CrtInput)(),(0,o.Sn)("design:type",Array)],l.prototype,"information",void 0),(0,o.Cg)([(0,i.CrtInput)(),(0,o.Sn)("design:type",Array)],l.prototype,"tools",void 0),(0,o.Cg)([(0,i.CrtInput)(),(0,o.Sn)("design:type",Array)],l.prototype,"placeholder",void 0),(0,o.Cg)([(0,i.CrtInput)(),(0,o.Sn)("design:type",Array)],l.prototype,"typing",void 0),(0,o.Cg)([(0,i.CrtInput)(),(0,o.Sn)("design:type",Array),(0,o.Sn)("design:paramtypes",[Array])],l.prototype,"conversationEvent",null),(0,o.Cg)([(0,i.CrtInput)(),(0,o.Sn)("design:type",Array)],l.prototype,"messages",void 0),(0,o.Cg)([(0,i.CrtInput)(),(0,o.Sn)("design:type",Object)],l.prototype,"isTyping",void 0),(0,o.Cg)([(0,i.CrtOutput)(),(0,o.Sn)("design:type",Object)],l.prototype,"conversationEventChange",void 0),l=(0,o.Cg)([(0,i.CrtViewElement)({type:"crt.Conversation",contentSlots:["actions","information","messages","typing","tools","placeholder"],placeholderSize:{height:"1000px"}}),(0,i.CrtInterfaceDesignerItem)({toolbarConfig:{requiredFeatures:{ShowDesignerDemoItems:!0},position:110,groupType:i.DesignerToolGroupType.Components,icon:c(70807),defaultPropertyValues:{actions:[],information:[],messages:[],tools:[],placeholder:[],typing:[]}},designControlConfig:{allowDesignContent:!0},viewElementGroupType:i.ViewElementGroupType.LayoutElements,typeCaption:"Conversation.Caption"}),(0,o.Sn)("design:paramtypes",[e.Injector])],l);var S=c(79076);let f=class P extends S.K0{static{this.\u0275fac=(()=>{let n;return function(s){return(n||(n=e.\u0275\u0275getInheritedFactory(P)))(s||P)}})()}static{this.\u0275cmp=e.\u0275\u0275defineComponent({type:P,selectors:[["crt-message-editor-reply"]],features:[e.\u0275\u0275InheritDefinitionFeature],decls:0,vars:0,template:function(t,s){}})}};f=(0,o.Cg)([(0,i.CrtViewElement)({type:"crt.MessageEditorReply"})],f);const me=["items"];function ue(a,n){a&1&&e.\u0275\u0275elementContainer(0)}function Ce(a,n){if(a&1&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275template(1,ue,1,0,"ng-container",3),e.\u0275\u0275elementEnd()),a&2){const t=n.$implicit;e.\u0275\u0275advance(),e.\u0275\u0275property("ngTemplateOutlet",t)}}function he(a,n){if(a&1&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275template(1,Ce,2,1,"div",2),e.\u0275\u0275elementContainerEnd()),a&2){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(),e.\u0275\u0275property("ngForOf",t.itemsTemplates)}}let _=class x extends S.K0{set items(n){this._items=n}static{this.\u0275fac=(()=>{let n;return function(s){return(n||(n=e.\u0275\u0275getInheritedFactory(x)))(s||x)}})()}static{this.\u0275cmp=e.\u0275\u0275defineComponent({type:x,selectors:[["crt-message-editor"]],contentQueries:function(t,s,r){if(t&1&&e.\u0275\u0275contentQuery(r,me,4,e.TemplateRef),t&2){let p;e.\u0275\u0275queryRefresh(p=e.\u0275\u0275loadQuery())&&(s.itemsTemplates=p)}},inputs:{items:"items"},features:[e.\u0275\u0275InheritDefinitionFeature],decls:3,vars:1,consts:[[1,"message-editor"],[4,"ngIf"],[4,"ngFor","ngForOf"],[4,"ngTemplateOutlet"]],template:function(t,s){t&1&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275element(1,"crt-message-editor-reply"),e.\u0275\u0275template(2,he,2,1,"ng-container",1),e.\u0275\u0275elementEnd()),t&2&&(e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",s.itemsTemplates==null?null:s.itemsTemplates.length))},dependencies:[d.NgForOf,d.NgIf,d.NgTemplateOutlet,f],styles:["[_nghost-%COMP%]{width:100%}"]})}};(0,o.Cg)([(0,i.CrtInput)(),(0,o.Sn)("design:type",Array),(0,o.Sn)("design:paramtypes",[Array])],_.prototype,"items",null),_=(0,o.Cg)([(0,i.CrtViewElement)({type:"crt.MessageEditor",reuseStrategy:i.ViewElementReuseStrategy.Reuse,contentSlots:[{name:"items",lazy:!0,input:!0}]})],_);var ye=c(37222),g=c(38628),O=c(62441),_e=c(19344),fe=c(52606),w=c(86731);const Me=["crtInput"],ve=a=>({"message-editor-input-focused":a});let m=class j extends S.K0{constructor(){super(...arguments),this._publishMessageHotKeys=["Enter"],this._publishKeyboardAction="publishMessage",this.sendHotkeyPressed=new e.EventEmitter,this.keyboardHotkeysMap={keydown:{[this._publishKeyboardAction]:{sequence:this._publishMessageHotKeys}}},this.messageFormControl=new ye.MJ(""),this.chatInputChange=new e.EventEmitter,this.isFocusedChange=new e.EventEmitter,this.sendMessage=new e.EventEmitter}set chatInput(n){n!==this.messageFormControl?.value&&this.messageFormControl?.setValue(n)}_setIsFocused(n){this.isFocused=n,this.isFocusedChange.emit(n)}onBlur(){this._setIsFocused(!1)}ngOnInit(){this.messageFormControl?.valueChanges.subscribe(n=>{this.onInputContentChanged(n)})}onMessageEditorAreaClicked(){this.isFocused||(this._setIsFocused(!0),this.crtInput?.focus())}onInputContentChanged(n){n!==this.chatInput&&(this.chatInput=n,this.chatInputChange.emit(n))}onHotKeyPressed({action:n,event:t}){t.shiftKey===!1&&n===this._publishKeyboardAction&&(t.preventDefault(),(0,O.A)(this.messageFormControl?.value)||this.sendMessage.emit())}static{this.\u0275fac=(()=>{let n;return function(s){return(n||(n=e.\u0275\u0275getInheritedFactory(j)))(s||j)}})()}static{this.\u0275cmp=e.\u0275\u0275defineComponent({type:j,selectors:[["crt-message-editor-input"]],viewQuery:function(t,s){if(t&1&&e.\u0275\u0275viewQuery(Me,5),t&2){let r;e.\u0275\u0275queryRefresh(r=e.\u0275\u0275loadQuery())&&(s.crtInput=r.first)}},inputs:{chatInput:"chatInput",isFocused:"isFocused"},outputs:{sendHotkeyPressed:"sendHotkeyPressed",chatInputChange:"chatInputChange",isFocusedChange:"isFocusedChange",sendMessage:"sendMessage"},features:[e.\u0275\u0275InheritDefinitionFeature],decls:4,vars:10,consts:[["crtInput",""],[1,"message-editor-input",3,"click"],[3,"focusout","crtKeyboardHotkeyPressed","ngClass","control","labelPosition","multiline","placeholder","crtKeyboardHotkeys"]],template:function(t,s){if(t&1){const r=e.\u0275\u0275getCurrentView();e.\u0275\u0275elementStart(0,"div",1),e.\u0275\u0275listener("click",function(){return e.\u0275\u0275restoreView(r),e.\u0275\u0275resetView(s.onMessageEditorAreaClicked())}),e.\u0275\u0275elementStart(1,"crt-input",2,0),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275listener("focusout",function(){return e.\u0275\u0275restoreView(r),e.\u0275\u0275resetView(s.onBlur())})("crtKeyboardHotkeyPressed",function(v){return e.\u0275\u0275restoreView(r),e.\u0275\u0275resetView(s.onHotKeyPressed(v))}),e.\u0275\u0275elementEnd()()}t&2&&(e.\u0275\u0275advance(),e.\u0275\u0275propertyInterpolate("placeholder",e.\u0275\u0275pipeBind1(3,6,"MessageEditor.InputPlaceholder")),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(8,ve,s.isFocused===!0))("control",s.messageFormControl)("labelPosition","hidden")("multiline",!0)("crtKeyboardHotkeys",s.keyboardHotkeysMap))},dependencies:[d.NgClass,_e.j,fe.h,w.D9],styles:[".message-editor-input[_ngcontent-%COMP%]{display:flex;min-height:80px;max-height:147px}.message-editor-input[_ngcontent-%COMP%]   crt-input[_ngcontent-%COMP%]{flex:1;border:1px solid var(--crt-palette-border-900);border-radius:8px;overflow-y:scroll}.message-editor-input[_ngcontent-%COMP%]   crt-input.message-editor-input-focused[_ngcontent-%COMP%], .message-editor-input[_ngcontent-%COMP%]   crt-input[_ngcontent-%COMP%]:hover{border:1px solid var(--crt-palette-primary-800)}"]})}};(0,o.Cg)([(0,i.CrtInput)(),(0,o.Sn)("design:type",String),(0,o.Sn)("design:paramtypes",[String])],m.prototype,"chatInput",null),(0,o.Cg)([(0,i.CrtOutput)(),(0,o.Sn)("design:type",e.EventEmitter)],m.prototype,"chatInputChange",void 0),(0,o.Cg)([(0,i.CrtOutput)(),(0,o.Sn)("design:type",e.EventEmitter)],m.prototype,"isFocusedChange",void 0),(0,o.Cg)([(0,i.CrtOutput)(),(0,o.Sn)("design:type",Object)],m.prototype,"sendMessage",void 0),(0,o.Cg)([(0,i.CrtInput)(),(0,o.Sn)("design:type",Boolean)],m.prototype,"isFocused",void 0),m=(0,o.Cg)([(0,i.CrtViewElement)({type:"crt.MessageEditorInput"})],m);var Ee=c(49147),U=c(62115);let h=class z extends B.Mm{set caption(n){this._consentText=n}get caption(){return this._sanitizer.bypassSecurityTrustHtml(this._consentText)}constructor(n){super(n),this.acceptClicked=new e.EventEmitter,this._sanitizer=n.get(Ee.DomSanitizer)}agreeClicked(){this.acceptClicked.emit()}static{this.\u0275fac=function(t){return new(t||z)(e.\u0275\u0275directiveInject(e.Injector))}}static{this.\u0275cmp=e.\u0275\u0275defineComponent({type:z,selectors:[["crt-chat-disclaimer"]],inputs:{consentCode:"consentCode",caption:"caption"},outputs:{acceptClicked:"acceptClicked"},features:[e.\u0275\u0275InheritDefinitionFeature],decls:5,vars:4,consts:[[1,"outer-border"],[1,"disclaimer-message",3,"innerHTML"],["color","primary","size","large","data-qa","button-disclaimer-agree",1,"agree-button",3,"clicked"]],template:function(t,s){t&1&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275element(1,"span",1),e.\u0275\u0275elementStart(2,"crt-button",2),e.\u0275\u0275listener("clicked",function(){return s.agreeClicked()}),e.\u0275\u0275text(3),e.\u0275\u0275pipe(4,"translate"),e.\u0275\u0275elementEnd()()),t&2&&(e.\u0275\u0275advance(),e.\u0275\u0275property("innerHTML",s.caption,e.\u0275\u0275sanitizeHtml),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(4,2,"CopilotDisclaimer.AgreeButton")," "))},dependencies:[U.B,w.D9],styles:['.outer-border[_ngcontent-%COMP%]{position:relative;display:inline-block;padding:12px 16px;background:linear-gradient(90deg,#fafbfe,#fcfafe);border-radius:15px;border-width:1px;z-index:1}.outer-border[_ngcontent-%COMP%]   .agree-button[_ngcontent-%COMP%]{padding-top:8px;float:inline-end}.outer-border[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,#c4bdff,#ecb5ff);border-radius:16px}.outer-border[_ngcontent-%COMP%]:after{background:linear-gradient(90deg,#fafbfe,#fcfafe);content:"";position:absolute;inset:1px;border-radius:15px;z-index:-1}.disclaimer-message[_ngcontent-%COMP%]{display:block}']})}};(0,o.Cg)([(0,i.CrtInput)(),(0,o.Sn)("design:type",String)],h.prototype,"consentCode",void 0),(0,o.Cg)([(0,i.CrtOutput)(),(0,o.Sn)("design:type",Object)],h.prototype,"acceptClicked",void 0),(0,o.Cg)([(0,i.CrtInput)(),(0,o.Sn)("design:type",String),(0,o.Sn)("design:paramtypes",[String])],h.prototype,"caption",null),h=(0,o.Cg)([(0,i.CrtViewElement)({type:"crt.ChatDisclaimer",reuseStrategy:i.ViewElementReuseStrategy.Reuse}),(0,o.Sn)("design:paramtypes",[e.Injector])],h);var N=c(73308);let H=class extends i.BaseRequestHandler{handle(n){var t=this;return(0,N.A)(function*(){yield t.next?.handle(n)})()}};H=(0,o.Cg)([(0,i.CrtRequestHandler)({type:"crt.MessageEditorSendHandler",requestType:"crt.MessageEditorSendRequest"})],H);var E=c(16837);let I=class extends i.BaseRequestHandler{constructor(n){super(),this._sanitizeHtmlPipe=n.get(E.b8r),this._copilotToEditorCommunicationService=n.get(E.iKh)}handle(n){var t=this;return(0,N.A)(function*(){const s=t._sanitizeHtmlPipe.transform(n.message.text,{mode:"textOnly",dataType:i.DataValueType.MAXSIZE_TEXT});t._copilotToEditorCommunicationService.notify({editorAction:n.action,selection:s}),yield t.next?.handle(n)})()}};I=(0,o.Cg)([(0,i.CrtRequestHandler)({type:"crt.ChatMessageActionHandler",requestType:"crt.ChatMessageActionRequest"}),(0,o.Sn)("design:paramtypes",[e.Injector])],I);var F=c(96590);let be=(()=>{class a{static{this._selectorCounter=0}static getProvider(){return{provide:g.sur,useFactory:(t,s)=>{for(const r of t){let{selector:p}=(0,e.reflectComponentType)(r.componentType);p=p+this._selectorCounter++,s.defineComponent(p,r.componentType),i.ChatMessageTypeRegistry.register(r.messageType,p)}},deps:[g.UNY,F.CustomElementsBootstrapService]}}}return a})(),Z=(()=>{class a{_getViewConfigs(t,s){return E.uSH.getViewConfigInfoByProperty("type",s,t).map(r=>r?.viewConfig).filter(Boolean)}_updateBindings(t,s){this._setChatInputAttribute(t,s),this._setSendMessageRequest(t),this._setBindingsMappingAttribure(t,s)}_setChatInputAttribute(t,s){if(!(0,O.A)(t.chatInput))return;const r=`ChatInput_${t.name}`;s[r]={value:null},t.chatInput=`$${r}`}_setSendMessageRequest(t){if(!(0,O.A)(t.sendMessage))return;const s=this._getBindingsMappingAttribureName(t);t.sendMessage={request:"crt.MessageEditorSendRequest",params:{attributesMapping:`$${s}`}}}_setBindingsMappingAttribure(t,s){const r=this._getBindingsMappingAttribureName(t),p=s[r]?.value||{};p.ChatInput=t.chatInput.split("$").pop(),s[r]={value:p},t.bindingsMappingAttribure=r}_getBindingsMappingAttribureName(t){return t.bindingsMappingAttribure||`BindingsMapping_${t.name}`}crtOnMetaDataInit(t){var s=this;return(0,N.A)(function*(){const r=t,p=s._getViewConfigs(r.viewConfig,"crt.MessageEditor"),v=r.viewModelConfig.attributes;for(const Ne of p)s._updateBindings(Ne,v);return Promise.resolve(t)})()}static{this.\u0275fac=function(s){return new(s||a)}}static{this.\u0275prov=e.\u0275\u0275defineInjectable({token:a,factory:a.\u0275fac})}}return a})(),D=class extends i.BaseRequest{};D=(0,o.Cg)([(0,i.CrtRequest)({type:"crt.MessageEditorSendRequest"})],D);let V=class extends i.BaseRequest{};V=(0,o.Cg)([(0,i.CrtRequest)({type:"crt.ChatMessageActionRequest"})],V);var M=c(27643),Se=c(85970),$=c(31859);const Oe={"hu-HU":JSON.parse('{"MessageEditor":{"InputPlaceholder":"\xCDrjon be egy \xFCzenetet","SendButtonHint":"Send Message (Enter)"}}'),"hr-HR":JSON.parse('{"MessageEditor":{"InputPlaceholder":"Napi\u0161i poruku","SendButtonHint":"Po\u0161alji poruku (Enter)"}}'),"zh-CN":JSON.parse('{"MessageEditor":{"InputPlaceholder":"Type a message","SendButtonHint":"Send Message (Enter)"}}'),"sq-AL":JSON.parse('{"MessageEditor":{"InputPlaceholder":"Shkruaj nj\xEB mesazh","SendButtonHint":"D\xEBrgo nj\xEB Mesazh (Enter)"}}'),"en-GB":{},"bg-BG":JSON.parse('{"MessageEditor":{"InputPlaceholder":"\u0412\u044A\u0432\u0435\u0434\u0438 \u0441\u044A\u043E\u0431\u0449\u0435\u043D\u0438\u0435","SendButtonHint":"\u0418\u0437\u043F\u0440\u0430\u0442\u0438 \u0441\u044A\u043E\u0431\u0449\u0435\u043D\u0438\u0435 (Enter)"}}'),"zh-TW":JSON.parse('{"MessageEditor":{"InputPlaceholder":"\u8F38\u5165\u8A0A\u606F","SendButtonHint":"\u50B3\u9001\u8A0A\u606F (\u8F38\u5165)"}}'),"no-NO":{},"ko-KR":JSON.parse('{"MessageEditor":{"InputPlaceholder":"\uBA54\uC2DC\uC9C0\uB97C \uC785\uB825\uD569\uB2C8\uB2E4","SendButtonHint":"Send Message (Enter)"}}'),"ja-JP":JSON.parse('{"MessageEditor":{"InputPlaceholder":"\u30E1\u30C3\u30BB\u30FC\u30B8\u3092\u5165\u529B","SendButtonHint":"Send Message (Enter)"}}'),"fr-CA":{},zh:{},"vi-VN":JSON.parse('{"MessageEditor":{"InputPlaceholder":"Type a message","SendButtonHint":"Send Message (Enter)"}}'),"tr-TR":JSON.parse('{"MessageEditor":{"InputPlaceholder":"Type a message","SendButtonHint":"Send Message (Enter)"}}'),"th-TH":JSON.parse('{"MessageEditor":{"InputPlaceholder":"Type a message","SendButtonHint":"Send Message (Enter)"}}'),"sv-SE":JSON.parse('{"MessageEditor":{"InputPlaceholder":"Type a message","SendButtonHint":"Send Message (Enter)"}}'),"ro-RO":JSON.parse('{"MessageEditor":{"InputPlaceholder":"Scrie un mesaj","SendButtonHint":"Trimite mesaj (Enter)"}}'),"pt-PT":JSON.parse('{"MessageEditor":{"InputPlaceholder":"Type a message","SendButtonHint":"Send Message (Enter)"}}'),"pt-BR":JSON.parse('{"MessageEditor":{"InputPlaceholder":"Escrever uma mensagem","SendButtonHint":"Enviar Mensagem (Enter)"}}'),"pl-PL":JSON.parse('{"MessageEditor":{"InputPlaceholder":"Wpisz wiadomo\u015B\u0107","SendButtonHint":"Wy\u015Blij wiadomo\u015B\u0107 (Enter)"}}'),no:{},"nl-NL":JSON.parse('{"MessageEditor":{"InputPlaceholder":"Type a message","SendButtonHint":"Send Message (Enter)"}}'),"lv-LV":JSON.parse('{"MessageEditor":{"InputPlaceholder":"Type a message","SendButtonHint":"Send Message (Enter)"}}'),"kk-KZ":{},"it-IT":JSON.parse('{"MessageEditor":{"InputPlaceholder":"Inserisci un messaggio","SendButtonHint":"Invia Messaggio (Invio)"}}'),"id-ID":JSON.parse('{"MessageEditor":{"InputPlaceholder":"Ketik pesan","SendButtonHint":"Kirim Pesan (Enter)"}}'),"he-IL":JSON.parse('{"MessageEditor":{"InputPlaceholder":"Type a message","SendButtonHint":"Send Message (Enter)"}}'),"fr-FR":JSON.parse('{"MessageEditor":{"InputPlaceholder":"Type a message","SendButtonHint":"Send Message (Enter)"}}'),"fa-IR":{},"es-ES":JSON.parse('{"MessageEditor":{"InputPlaceholder":"Type a message","SendButtonHint":"Send Message (Enter)"}}'),"de-DE":JSON.parse('{"MessageEditor":{"InputPlaceholder":"Nachricht eingeben","SendButtonHint":"Nachricht senden (Enter)"}}'),"cs-CZ":JSON.parse('{"MessageEditor":{"InputPlaceholder":"Type a message","SendButtonHint":"Send Message (Enter)"}}'),"ar-SA":JSON.parse('{"MessageEditor":{"InputPlaceholder":"\u0643\u062A\u0627\u0628\u0629 \u0631\u0633\u0627\u0644\u0629","SendButtonHint":"\u0623\u0631\u0633\u0644 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 (\u0627\u0636\u063A\u0637 \u0632\u0631 Enter)"}}'),"en-US":JSON.parse('{"MessageEditor":{"InputPlaceholder":"Type a message","SendButtonHint":"Send Message (Enter)"},"CopilotDisclaimer":{"AgreeButton":"Agree"}}'),"ru-RU":JSON.parse('{"MessageEditor":{"InputPlaceholder":"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435","SendButtonHint":"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435 (Enter)"},"CopilotDisclaimer":{"AgreeButton":"\u041F\u0440\u0438\u043D\u044F\u0442\u044C"}}'),"uk-UA":JSON.parse('{"MessageEditor":{"InputPlaceholder":"\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F","SendButtonHint":"\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F (Enter)"}}')};var W=c(80759);const Ie=["toolbarItems"],Te=["inputs"],Pe=a=>({"message-editor-body-button-focussed":a});function xe(a,n){a&1&&e.\u0275\u0275elementContainer(0)}function je(a,n){if(a&1&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275template(1,xe,1,0,"ng-container",8),e.\u0275\u0275elementEnd()),a&2){const t=n.$implicit;e.\u0275\u0275advance(),e.\u0275\u0275property("ngTemplateOutlet",t)}}function Re(a,n){if(a&1&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div",6),e.\u0275\u0275template(2,je,2,1,"div",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()),a&2){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",t.inputsTemplates)}}function Be(a,n){a&1&&e.\u0275\u0275elementContainer(0)}function Ae(a,n){if(a&1&&(e.\u0275\u0275elementStart(0,"div"),e.\u0275\u0275template(1,Be,1,0,"ng-container",8),e.\u0275\u0275elementEnd()),a&2){const t=n.$implicit;e.\u0275\u0275advance(),e.\u0275\u0275property("ngTemplateOutlet",t)}}function we(a,n){if(a&1&&(e.\u0275\u0275elementContainerStart(0),e.\u0275\u0275elementStart(1,"div",9),e.\u0275\u0275template(2,Ae,2,1,"div",7),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementContainerEnd()),a&2){const t=e.\u0275\u0275nextContext();e.\u0275\u0275advance(2),e.\u0275\u0275property("ngForOf",t.toolbarItemsTemplates)}}let u=class R extends S.K0{constructor(){super(...arguments),this.sizeEnum=W.Ze,this.iconPositionEnum=W.q9,this.sendMessage=new e.EventEmitter}set toolbarItems(n){this._toolbarItems=n}set inputs(n){this._inputs=n}onSendClicked(){this.isInputContentEmpty()||this.sendMessage.emit(this.chatInput)}isInputContentEmpty(){return(0,O.A)(this.chatInput)}static{this.\u0275fac=(()=>{let n;return function(s){return(n||(n=e.\u0275\u0275getInheritedFactory(R)))(s||R)}})()}static{this.\u0275cmp=e.\u0275\u0275defineComponent({type:R,selectors:[["crt-message-editor-body"]],contentQueries:function(t,s,r){if(t&1&&(e.\u0275\u0275contentQuery(r,Ie,4,e.TemplateRef),e.\u0275\u0275contentQuery(r,Te,4,e.TemplateRef)),t&2){let p;e.\u0275\u0275queryRefresh(p=e.\u0275\u0275loadQuery())&&(s.toolbarItemsTemplates=p),e.\u0275\u0275queryRefresh(p=e.\u0275\u0275loadQuery())&&(s.inputsTemplates=p)}},inputs:{toolbarItems:"toolbarItems",inputs:"inputs",isFocused:"isFocused",chatInput:"chatInput"},outputs:{sendMessage:"sendMessage"},features:[e.\u0275\u0275InheritDefinitionFeature],decls:8,vars:12,consts:[[1,"message-editor-body"],[4,"ngIf"],[1,"message-editor-body-toolbar"],[1,"message-editor-body-toolbar-dropzone"],[1,"message-editor-body-toolbar-send"],[3,"clicked","ngClass","iconPosition","iconSize","icon","disabled","title"],[1,"message-editor-input-container"],[4,"ngFor","ngForOf"],[4,"ngTemplateOutlet"],[1,"message-editor-toolbar-container"]],template:function(t,s){t&1&&(e.\u0275\u0275elementStart(0,"div",0),e.\u0275\u0275template(1,Re,3,1,"ng-container",1),e.\u0275\u0275elementStart(2,"div",2)(3,"div",3),e.\u0275\u0275template(4,we,3,1,"ng-container",1),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(5,"div",4)(6,"crt-button",5),e.\u0275\u0275pipe(7,"translate"),e.\u0275\u0275listener("clicked",function(){return s.onSendClicked()}),e.\u0275\u0275elementEnd()()()()),t&2&&(e.\u0275\u0275advance(),e.\u0275\u0275property("ngIf",s.inputsTemplates==null?null:s.inputsTemplates.length),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngIf",s.toolbarItemsTemplates==null?null:s.toolbarItemsTemplates.length),e.\u0275\u0275advance(2),e.\u0275\u0275propertyInterpolate("title",e.\u0275\u0275pipeBind1(7,8,"MessageEditor.SendButtonHint")),e.\u0275\u0275property("ngClass",e.\u0275\u0275pureFunction1(10,Pe,s.isFocused===!0))("iconPosition",s.iconPositionEnum.OnlyIcon)("iconSize",s.sizeEnum.Large)("icon","message-editor-send-icon")("disabled",s.isInputContentEmpty()))},dependencies:[d.NgClass,d.NgForOf,d.NgIf,d.NgTemplateOutlet,U.B,w.D9],styles:["[_nghost-%COMP%]{position:relative;width:100%}[_nghost-%COMP%]   .message-editor-body[_ngcontent-%COMP%]   .message-editor-body-toolbar[_ngcontent-%COMP%]{display:flex;margin-top:-32px;padding:0 8px 3px 5px}[_nghost-%COMP%]   .message-editor-body[_ngcontent-%COMP%]   .message-editor-body-toolbar[_ngcontent-%COMP%]   .message-editor-body-toolbar-dropzone[_ngcontent-%COMP%]{flex-grow:1}[_nghost-%COMP%]   .message-editor-body[_ngcontent-%COMP%]   .message-editor-body-toolbar[_ngcontent-%COMP%]   .message-editor-body-toolbar-send[_ngcontent-%COMP%]{text-align:right}"]})}};(0,o.Cg)([(0,i.CrtInput)(),(0,o.Sn)("design:type",Array),(0,o.Sn)("design:paramtypes",[Array])],u.prototype,"toolbarItems",null),(0,o.Cg)([(0,i.CrtInput)(),(0,o.Sn)("design:type",Array),(0,o.Sn)("design:paramtypes",[Array])],u.prototype,"inputs",null),(0,o.Cg)([(0,i.CrtOutput)(),(0,o.Sn)("design:type",Object)],u.prototype,"sendMessage",void 0),(0,o.Cg)([(0,i.CrtInput)(),(0,o.Sn)("design:type",Boolean)],u.prototype,"isFocused",void 0),(0,o.Cg)([(0,i.CrtInput)(),(0,o.Sn)("design:type",String)],u.prototype,"chatInput",void 0),u=(0,o.Cg)([(0,i.CrtViewElement)({type:"crt.MessageEditorBody",contentSlots:[{name:"inputs",lazy:!0,input:!0},{name:"toolbarItems",lazy:!0,input:!0}]})],u);let T=class J{constructor(n){this._materialIconsRegistrator=n,this._materialIconsRegistrator.addIcons([{name:"message-editor-send-icon",icon:c(21888)},{name:"arrow-down-heavy",icon:c(73869)}])}static{this.\u0275fac=function(t){return new(t||J)(e.\u0275\u0275inject(M.KN))}}static{this.\u0275mod=e.\u0275\u0275defineNgModule({type:J})}static{this.\u0275inj=e.\u0275\u0275defineInjector({providers:[{provide:Se.m9D,useClass:Z,multi:!0}],imports:[A.m_,d.CommonModule,g.ugs,M.Cq,g.qOu,g.Sjg,F.CrtLibTranslateModule.forRoot({i18n:Oe}),E.XEY,g.JTN,$.y2.forRoot(),M.xf,g.AEo]})}};T=(0,o.Cg)([(0,i.CrtModule)({viewElements:[l,y,_,u,m,h],requestHandlers:[I]}),(0,o.Sn)("design:paramtypes",[M.KN])],T),function(){(typeof ngJitMode>"u"||ngJitMode)&&e.\u0275\u0275setNgModuleScope(T,{declarations:[C,l,y,_,u,m,f,h],imports:[A.m_,d.CommonModule,g.ugs,M.Cq,g.qOu,g.Sjg,F.CrtLibTranslateModule,E.XEY,g.JTN,$.y2,M.xf,g.AEo],exports:[C,l,y,_,u,m,f,h]})}()},70807:b=>{b.exports=`<svg width="72" height="64" viewBox="0 0 72 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M58 15H28C26.3431 15 25 16.3431 25 18C25 19.6569 26.3431 21 28 21H58C59.6569 21 61 19.6569 61 18C61 16.3431 59.6569 15 58 15Z" fill="#40ACF0"/>
<path d="M58 36H40C38.3431 36 37 37.3431 37 39C37 40.6569 38.3431 42 40 42H58C59.6569 42 61 40.6569 61 39C61 37.3431 59.6569 36 58 36Z" fill="#D1D1D1"/>
<path d="M58 26H40C38.3431 26 37 27.3431 37 29C37 30.6569 38.3431 32 40 32H58C59.6569 32 61 30.6569 61 29C61 27.3431 59.6569 26 58 26Z" fill="#D1D1D1"/>
<path d="M58 46H40C38.3431 46 37 47.3431 37 49C37 50.6569 38.3431 52 40 52H58C59.6569 52 61 50.6569 61 49C61 47.3431 59.6569 46 58 46Z" fill="#D1D1D1"/>
<circle cx="29" cy="39" r="4" fill="#004FD6"/>
<circle cx="29" cy="29" r="4" fill="#004FD6"/>
<circle cx="29" cy="49" r="4" fill="#004FD6"/>
<path d="M15 26C18.3137 26 21 23.3137 21 20C21 16.6863 18.3137 14 15 14C11.6863 14 9 16.6863 9 20C9 23.3137 11.6863 26 15 26Z" stroke="#FF4013" stroke-width="2" stroke-miterlimit="10"/>
<path d="M15 17.1152V20.3722L16.682 22.3302" stroke="#FF4013" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round"/>
</svg>
`},21888:b=>{b.exports=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5538 7.23804L4.32784 2.12044C4.17412 2.03159 3.99711 1.99031 3.81954 2.00192C3.64197 2.01352 3.47196 2.07747 3.33133 2.18556C3.18772 2.29787 3.08345 2.45217 3.03332 2.62654C2.98319 2.80092 2.98976 2.98652 3.05209 3.15698L4.59066 7.41713C4.60623 7.4596 4.63447 7.49638 4.67164 7.52255C4.70881 7.54873 4.75313 7.56306 4.79872 7.56365H8.75192C8.86558 7.56187 8.9757 7.60289 9.06004 7.67843C9.14438 7.75397 9.19668 7.85841 9.20637 7.97067C9.21011 8.02993 9.20155 8.08932 9.18122 8.14516C9.16089 8.20101 9.12922 8.25213 9.08817 8.29536C9.04712 8.3386 8.99755 8.37303 8.94254 8.39652C8.88753 8.42002 8.82824 8.43208 8.76834 8.43196H4.79872C4.75313 8.43256 4.70881 8.44689 4.67164 8.47307C4.63447 8.49924 4.60623 8.53601 4.59066 8.57849L3.05209 12.8386C3.00593 12.9699 2.99202 13.1101 3.01151 13.2478C3.03101 13.3854 3.08336 13.5165 3.16421 13.63C3.24505 13.7436 3.35206 13.8364 3.47636 13.9007C3.60065 13.9651 3.73864 13.9991 3.87887 14C4.02808 13.9993 4.17481 13.962 4.30594 13.8915L13.5538 8.75758C13.6893 8.68132 13.8019 8.57083 13.8803 8.43737C13.9587 8.30391 14 8.15224 14 7.99781C14 7.84338 13.9587 7.69171 13.8803 7.55825C13.8019 7.42479 13.6893 7.3143 13.5538 7.23804Z" fill="currentColor"/>
</svg>
`}}]);