(self.webpackChunkapp_studio_enterprise_error_list_dialog=self.webpackChunkapp_studio_enterprise_error_list_dialog||[]).push([[6936],{96936:(M,P,c)=>{c.r(P),c.d(P,{BroadcastChannel:()=>y,beLeader:()=>z,clearNodeFolder:()=>Fe,createLeaderElection:()=>it,enforceOptions:()=>Je});function H(e){return!!(e&&typeof e.then=="function")}function m(e){return e||(e=0),new Promise(function(t){return setTimeout(t,e)})}function K(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function v(){return Math.random().toString(36).substring(2)}var k=0,g=0;function p(){var e=new Date().getTime();return e===k?(g++,e*1e3+g):(k=e,g=0,e*1e3)}var l=Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]",V=p,G="native";function X(e){var t={messagesCallback:null,bc:new BroadcastChannel(e),subFns:[]};return t.bc.onmessage=function(n){t.messagesCallback&&t.messagesCallback(n.data)},t}function Q(e){e.bc.close(),e.subFns=[]}function Y(e,t){try{return e.bc.postMessage(t,!1),Promise.resolve()}catch(n){return Promise.reject(n)}}function Z(e,t){e.messagesCallback=t}function $(){if(l&&typeof window>"u")return!1;if(typeof BroadcastChannel=="function"){if(BroadcastChannel._pubkey)throw new Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");return!0}else return!1}function q(){return 150}const ee={create:X,close:Q,onMessage:Z,postMessage:Y,canBeUsed:$,type:G,averageResponseTime:q,microSeconds:V};var C=function(){function e(t){this.ttl=t,this.set=new Set,this.timeMap=new Map}return e.prototype.has=function(t){return this.set.has(t)},e.prototype.add=function(t){var n=this;this.timeMap.set(t,E()),this.set.add(t),setTimeout(function(){te(n)},0)},e.prototype.clear=function(){this.set.clear(),this.timeMap.clear()},e}();function te(e){for(var t=E()-e.ttl,n=e.set[Symbol.iterator]();;){var r=n.next().value;if(!r)return;var i=e.timeMap.get(r);if(i<t)e.timeMap.delete(r),e.set.delete(r);else return}}function E(){return new Date().getTime()}function h(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=JSON.parse(JSON.stringify(e));return typeof t.webWorkerSupport>"u"&&(t.webWorkerSupport=!0),t.idb||(t.idb={}),t.idb.ttl||(t.idb.ttl=1e3*45),t.idb.fallbackInterval||(t.idb.fallbackInterval=150),e.idb&&typeof e.idb.onclose=="function"&&(t.idb.onclose=e.idb.onclose),t.localstorage||(t.localstorage={}),t.localstorage.removeTimeout||(t.localstorage.removeTimeout=1e3*60),e.methods&&(t.methods=e.methods),t.node||(t.node={}),t.node.ttl||(t.node.ttl=1e3*60*2),typeof t.node.useFastPath>"u"&&(t.node.useFastPath=!0),t}var ne=p,re="pubkey.broadcast-channel-0-",u="messages",ie="idb";function S(){if(typeof indexedDB<"u")return indexedDB;if(typeof window<"u"){if(typeof window.mozIndexedDB<"u")return window.mozIndexedDB;if(typeof window.webkitIndexedDB<"u")return window.webkitIndexedDB;if(typeof window.msIndexedDB<"u")return window.msIndexedDB}return!1}function se(e){var t=S(),n=re+e,r=t.open(n,1);r.onupgradeneeded=function(s){var o=s.target.result;o.createObjectStore(u,{keyPath:"id",autoIncrement:!0})};var i=new Promise(function(s,o){r.onerror=function(a){return o(a)},r.onsuccess=function(){s(r.result)}});return i}function oe(e,t,n){var r=new Date().getTime(),i={uuid:t,time:r,data:n},s=e.transaction([u],"readwrite");return new Promise(function(o,a){s.oncomplete=function(){return o()},s.onerror=function(st){return a(st)};var _=s.objectStore(u);_.add(i)})}function ot(e){var t=e.transaction(u).objectStore(u),n=[];return new Promise(function(r){t.openCursor().onsuccess=function(i){var s=i.target.result;s?(n.push(s.value),s.continue()):r(n)}})}function ae(e,t){var n=e.transaction(u).objectStore(u),r=[];function i(){try{var s=IDBKeyRange.bound(t+1,1/0);return n.openCursor(s)}catch{return n.openCursor()}}return new Promise(function(s){i().onsuccess=function(o){var a=o.target.result;a?a.value.id<t+1?a.continue(t+1):(r.push(a.value),a.continue()):s(r)}})}function ue(e,t){var n=e.transaction([u],"readwrite").objectStore(u).delete(t);return new Promise(function(r){n.onsuccess=function(){return r()}})}function ce(e,t){var n=new Date().getTime()-t,r=e.transaction(u).objectStore(u),i=[];return new Promise(function(s){r.openCursor().onsuccess=function(o){var a=o.target.result;if(a){var _=a.value;if(_.time<n)i.push(_),a.continue();else{s(i);return}}else s(i)}})}function fe(e,t){return ce(e,t).then(function(n){return Promise.all(n.map(function(r){return ue(e,r.id)}))})}function de(e,t){return t=h(t),se(e).then(function(n){var r={closed:!1,lastCursorId:0,channelName:e,options:t,uuid:v(),eMIs:new C(t.idb.ttl*2),writeBlockPromise:Promise.resolve(),messagesCallback:null,readQueuePromises:[],db:n};return n.onclose=function(){r.closed=!0,t.idb.onclose&&t.idb.onclose()},I(r),r})}function I(e){e.closed||T(e).then(function(){return m(e.options.idb.fallbackInterval)}).then(function(){return I(e)})}function le(e,t){return!(e.uuid===t.uuid||t.eMIs.has(e.id)||e.data.time<t.messagesCallbackTime)}function T(e){return e.closed||!e.messagesCallback?Promise.resolve():ae(e.db,e.lastCursorId).then(function(t){var n=t.filter(function(r){return!!r}).map(function(r){return r.id>e.lastCursorId&&(e.lastCursorId=r.id),r}).filter(function(r){return le(r,e)}).sort(function(r,i){return r.time-i.time});return n.forEach(function(r){e.messagesCallback&&(e.eMIs.add(r.id),e.messagesCallback(r.data))}),Promise.resolve()})}function me(e){e.closed=!0,e.db.close()}function ve(e,t){return e.writeBlockPromise=e.writeBlockPromise.then(function(){return oe(e.db,e.uuid,t)}).then(function(){K(0,10)===0&&fe(e.db,e.options.idb.ttl)}),e.writeBlockPromise}function pe(e,t,n){e.messagesCallbackTime=n,e.messagesCallback=t,T(e)}function he(){if(l)return!1;var e=S();return!!e}function _e(e){return e.idb.fallbackInterval*2}const ge={create:de,close:me,onMessage:pe,postMessage:ve,canBeUsed:he,type:ie,averageResponseTime:_e,microSeconds:ne};var we=p,be="pubkey.broadcastChannel-",ye="localstorage";function B(){var e;if(typeof window>"u")return null;try{e=window.localStorage,e=window["ie8-eventlistener/storage"]||window.localStorage}catch{}return e}function D(e){return be+e}function Le(e,t){return new Promise(function(n){m().then(function(){var r=D(e.channelName),i={token:v(),time:new Date().getTime(),data:t,uuid:e.uuid},s=JSON.stringify(i);B().setItem(r,s);var o=document.createEvent("Event");o.initEvent("storage",!0,!0),o.key=r,o.newValue=s,window.dispatchEvent(o),n()})})}function Me(e,t){var n=D(e),r=function(s){s.key===n&&t(JSON.parse(s.newValue))};return window.addEventListener("storage",r),r}function Pe(e){window.removeEventListener("storage",e)}function ke(e,t){if(t=h(t),!O())throw new Error("BroadcastChannel: localstorage cannot be used");var n=v(),r=new C(t.localstorage.removeTimeout),i={channelName:e,uuid:n,eMIs:r};return i.listener=Me(e,function(s){i.messagesCallback&&s.uuid!==n&&(!s.token||r.has(s.token)||s.data.time&&s.data.time<i.messagesCallbackTime||(r.add(s.token),i.messagesCallback(s.data)))}),i}function Ce(e){Pe(e.listener)}function Ee(e,t,n){e.messagesCallbackTime=n,e.messagesCallback=t}function O(){if(l)return!1;var e=B();if(!e)return!1;try{var t="__broadcastchannel_check";e.setItem(t,"works"),e.removeItem(t)}catch{return!1}return!0}function Se(){var e=120,t=navigator.userAgent.toLowerCase();return t.includes("safari")&&!t.includes("chrome")?e*2:e}const Ie={create:ke,close:Ce,onMessage:Ee,postMessage:Le,canBeUsed:O,type:ye,averageResponseTime:Se,microSeconds:we};var Te=p,Be="simulate",w=new Set;function De(e){var t={name:e,messagesCallback:null};return w.add(t),t}function Oe(e){w.delete(e)}function xe(e,t){return new Promise(function(n){return setTimeout(function(){var r=Array.from(w);r.filter(function(i){return i.name===e.name}).filter(function(i){return i!==e}).filter(function(i){return!!i.messagesCallback}).forEach(function(i){return i.messagesCallback(t)}),n()},5)})}function Ae(e,t){e.messagesCallback=t}function Ne(){return!0}function Re(){return 5}const Ue={create:De,close:Oe,onMessage:Ae,postMessage:xe,canBeUsed:Ne,type:Be,averageResponseTime:Re,microSeconds:Te};var b=[ee,ge,Ie];if(l){var x=c(82891);typeof x.canBeUsed=="function"&&b.push(x)}function A(e){var t=[].concat(e.methods,b).filter(Boolean);if(e.type){if(e.type==="simulate")return Ue;var n=t.find(function(i){return i.type===e.type});if(n)return n;throw new Error("method-type "+e.type+" not found")}!e.webWorkerSupport&&!l&&(t=t.filter(function(i){return i.type!=="idb"}));var r=t.find(function(i){return i.canBeUsed()});if(r)return r;throw new Error("No useable methode found:"+JSON.stringify(b.map(function(i){return i.type})))}var y=function(t,n){this.name=t,L&&(n=L),this.options=h(n),this.method=A(this.options),this._iL=!1,this._onML=null,this._addEL={message:[],internal:[]},this._uMP=new Set,this._befC=[],this._prepP=null,je(this)};y._pubkey=!0;function Fe(e){e=h(e);var t=A(e);return t.type==="node"?t.clearNodeFolder().then(function(){return!0}):Promise.resolve(!1)}var L;function Je(e){L=e}y.prototype={postMessage:function(t){if(this.closed)throw new Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed");return N(this,"message",t)},postInternal:function(t){return N(this,"internal",t)},set onmessage(e){var t=this.method.microSeconds(),n={time:t,fn:e};F(this,"message",this._onML),e&&typeof e=="function"?(this._onML=n,U(this,"message",n)):this._onML=null},addEventListener:function(t,n){var r=this.method.microSeconds(),i={time:r,fn:n};U(this,t,i)},removeEventListener:function(t,n){var r=this._addEL[t].find(function(i){return i.fn===n});F(this,t,r)},close:function(){var t=this;if(!this.closed){this.closed=!0;var n=this._prepP?this._prepP:Promise.resolve();return this._onML=null,this._addEL.message=[],n.then(function(){return Promise.all(Array.from(t._uMP))}).then(function(){return Promise.all(t._befC.map(function(r){return r()}))}).then(function(){return t.method.close(t._state)})}},get type(){return this.method.type},get isClosed(){return this.closed}};function N(e,t,n){var r=e.method.microSeconds(),i={time:r,type:t,data:n},s=e._prepP?e._prepP:Promise.resolve();return s.then(function(){var o=e.method.postMessage(e._state,i);return e._uMP.add(o),o.catch().then(function(){return e._uMP.delete(o)}),o})}function je(e){var t=e.method.create(e.name,e.options);H(t)?(e._prepP=t,t.then(function(n){e._state=n})):e._state=t}function R(e){return e._addEL.message.length>0||e._addEL.internal.length>0}function U(e,t,n){e._addEL[t].push(n),We(e)}function F(e,t,n){e._addEL[t]=e._addEL[t].filter(function(r){return r!==n}),ze(e)}function We(e){if(!e._iL&&R(e)){var t=function(i){e._addEL[i.type].forEach(function(s){i.time>=s.time&&s.fn(i.data)})},n=e.method.microSeconds();e._prepP?e._prepP.then(function(){e._iL=!0,e.method.onMessage(e._state,t,n)}):(e._iL=!0,e.method.onMessage(e._state,t,n))}}function ze(e){if(e._iL&&!R(e)){e._iL=!1;var t=e.method.microSeconds();e.method.onMessage(e._state,null,t)}}var He=c(57),Ke=c.n(He);function Ve(e){if(!(typeof WorkerGlobalScope=="function"&&self instanceof WorkerGlobalScope)){if(typeof window.addEventListener!="function")return;window.addEventListener("beforeunload",function(){e()},!0),window.addEventListener("unload",function(){e()},!0)}}const Ge={add:Ve};var Xe=c(25870),Qe=c.n(Xe),Ye=Ke()?Qe():Ge,f=new Set,J=!1;function Ze(){J||(J=!0,Ye.add(j))}function $e(e){if(Ze(),typeof e!="function")throw new Error("Listener is no function");f.add(e);var t={remove:function(){return f.delete(e)},run:function(){return f.delete(e),e()}};return t}function j(){var e=[];return f.forEach(function(t){e.push(t()),f.delete(t)}),Promise.all(e)}function qe(){f.clear()}function et(){return f.size}const tt={add:$e,runAll:j,removeAll:qe,getSize:et};var W=function(t,n){this._channel=t,this._options=n,this.isLeader=!1,this.isDead=!1,this.token=v(),this._isApl=!1,this._reApply=!1,this._unl=[],this._lstns=[],this._invs=[],this._dpL=function(){},this._dpLC=!1};W.prototype={applyOnce:function(){var t=this;if(this.isLeader||this.isDead)return Promise.resolve(!1);if(this._isApl)return this._reApply=!0,Promise.resolve(!1);this._isApl=!0;var n=!1,r=[],i=function(a){a.context==="leader"&&a.token!=t.token&&(r.push(a),a.action==="apply"&&a.token>t.token&&(n=!0),a.action==="tell"&&(n=!0))};this._channel.addEventListener("internal",i);var s=d(this,"apply").then(function(){return m(t._options.responseTime)}).then(function(){return n?Promise.reject(new Error):d(t,"apply")}).then(function(){return m(t._options.responseTime)}).then(function(){return n?Promise.reject(new Error):d(t)}).then(function(){return z(t)}).then(function(){return!0}).catch(function(){return!1}).then(function(o){return t._channel.removeEventListener("internal",i),t._isApl=!1,!o&&t._reApply?(t._reApply=!1,t.applyOnce()):o});return s},awaitLeadership:function(){return this._aLP||(this._aLP=nt(this)),this._aLP},set onduplicate(e){this._dpL=e},die:function(){var t=this;if(!this.isDead)return this.isDead=!0,this._lstns.forEach(function(n){return t._channel.removeEventListener("internal",n)}),this._invs.forEach(function(n){return clearInterval(n)}),this._unl.forEach(function(n){n.remove()}),d(this,"death")}};function nt(e){return e.isLeader?Promise.resolve():new Promise(function(t){var n=!1;function r(){n||(n=!0,clearInterval(i),e._channel.removeEventListener("internal",s),t(!0))}e.applyOnce().then(function(){e.isLeader&&r()});var i=setInterval(function(){e.applyOnce().then(function(){e.isLeader&&r()})},e._options.fallbackInterval);e._invs.push(i);var s=function(a){a.context==="leader"&&a.action==="death"&&e.applyOnce().then(function(){e.isLeader&&r()})};e._channel.addEventListener("internal",s),e._lstns.push(s)})}function d(e,t){var n={context:"leader",action:t,token:e.token};return e._channel.postInternal(n)}function z(e){e.isLeader=!0;var t=tt.add(function(){return e.die()});e._unl.push(t);var n=function(i){i.context==="leader"&&i.action==="apply"&&d(e,"tell"),i.context==="leader"&&i.action==="tell"&&!e._dpLC&&(e._dpLC=!0,e._dpL(),d(e,"tell"))};return e._channel.addEventListener("internal",n),e._lstns.push(n),d(e,"tell")}function rt(e,t){return e||(e={}),e=JSON.parse(JSON.stringify(e)),e.fallbackInterval||(e.fallbackInterval=3e3),e.responseTime||(e.responseTime=t.method.averageResponseTime(t.options)),e}function it(e,t){if(e._leaderElector)throw new Error("BroadcastChannel already has a leader-elector");t=rt(t,e);var n=new W(e,t);return e._befC.push(function(){return n.die()}),e._leaderElector=n,n}},57:M=>{M.exports=!1},82891:()=>{},25870:()=>{}}]);