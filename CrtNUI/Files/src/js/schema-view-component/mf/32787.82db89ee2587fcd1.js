(self.webpackChunkapp_studio_enterprise_schema_view=self.webpackChunkapp_studio_enterprise_schema_view||[]).push([[32787],{32787:(K,P,C)=>{C.r(P),C.d(P,{CONFIG_TOKEN:()=>O,DBMode:()=>f,NgxIndexedDBModule:()=>S,NgxIndexedDBService:()=>w});var y=C(73308),m=C(59131),I=C(40297),l=C(62278),E=C(36486);function h(g,e,r,t){return new Promise((n,o)=>{g||o("IndexedDB not available");const i=g.open(e,r);let s;i.onsuccess=c=>{s=i.result,n(s)},i.onerror=c=>{o(`IndexedDB error: ${i.error}`)},typeof t=="function"&&(i.onupgradeneeded=c=>{t(c,s)})})}function A(g,e,r,t,n){return M.apply(this,arguments)}function M(){return M=(0,y.A)(function*(g,e,r,t,n){return new Promise((o,i)=>{if(!g)return;const s=g.open(e,r);s.onupgradeneeded=function(){var c=(0,y.A)(function*(d){const a=d.target.result,x=t.map(function(){var D=(0,y.A)(function*(v){if(!a.objectStoreNames.contains(v.store)){const _=a.createObjectStore(v.store,v.storeConfig);for(const B of v.storeSchema)_.createIndex(B.name,B.keypath,B.options)}});return function(v){return D.apply(this,arguments)}}());yield Promise.all(x);const u=n&&n();if(u){const D=Object.keys(u).map(v=>parseInt(v,10)).filter(v=>v>d.oldVersion).sort((v,_)=>v-_);for(const v of D)u[v](a,s.transaction)}a.close(),o()});return function(d){return c.apply(this,arguments)}}(),s.onsuccess=c=>{c.target.result.close(),o()},s.onerror=c=>{i(c)}})}),M.apply(this,arguments)}function k(g,e,r){if(!g||!e||!r)throw Error('Params: "dbName", "version", "storeName" are mandatory.');return new l.Observable(t=>{try{const n=e+1,o=indexedDB.open(g,n);o.onupgradeneeded=i=>{const s=i.target.result;s.deleteObjectStore(r),s.close(),console.log("onupgradeneeded"),t.next(!0),t.complete()},o.onerror=i=>t.error(i)}catch(n){t.error(n)}})}function q(g,e){return g.objectStoreNames.contains(e)}function j(g,e,r){g||r("You need to use the openDatabase function to create a database before you query it!"),q(g,e)||r(`objectStore does not exists: ${e}`)}function b(g,e){const r=g.transaction(e.storeName,e.dbMode);return r.onerror=e.error,r.onabort=e.abort,r}function p(g,e,r,t){return{storeName:e,dbMode:g,error:n=>{r(n)},abort:n=>{r(n)}}}var f;(function(g){g.readonly="readonly",g.readwrite="readwrite"})(f||(f={}));const O=new m.InjectionToken(null);class w{constructor(e,r){if(this.dbConfigs=e,this.platformId=r,this.defaultDatabaseName=null,this.isBrowser=(0,I.isPlatformBrowser)(this.platformId),this.isBrowser){this.indexedDB=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;const t=Object.values(this.dbConfigs),n=t.length===1;for(const o of t)this.instanciateConfig(o,n)}}instanciateConfig(e,r){var t=this;return(0,y.A)(function*(){if(!e.name)throw new Error("NgxIndexedDB: Please, provide the dbName in the configuration");if(!e.version)throw new Error("NgxIndexedDB: Please, provide the db version in the configuration");if((e.isDefault??!1)&&t.defaultDatabaseName)throw new Error("NgxIndexedDB: Only one database can be set as default");((e.isDefault??!1)&&!t.defaultDatabaseName||r)&&(t.defaultDatabaseName=e.name,t.selectedDb=e.name),yield A(t.indexedDB,e.name,e.version,e.objectStoresMeta,e.migrationFactory),h(t.indexedDB,e.name).then(n=>{n.version!==e.version&&(t.dbConfigs[e.name].version=n.version)})})()}get dbConfig(){return this.dbConfigs[this.selectedDb]}getDatabaseVersion(){return new l.Observable(e=>{h(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(r=>{e.next(r.version),e.complete()}).catch(r=>e.error(`error during get version of database => ${r} `))})}selectDb(e){if(e=e??this.defaultDatabaseName,!e)throw new Error("No database name specified and no default database set.");if(!Object.keys(this.dbConfigs).includes(e))throw new Error(`NgxIndexedDB: Database ${e} is not initialized.`);this.selectedDb=e}createObjectStore(e,r){var t=this;return(0,y.A)(function*(){const n=[e];yield A(t.indexedDB,t.dbConfig.name,++t.dbConfig.version,n,r)})()}add(e,r,t){return new l.Observable(n=>{h(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(o=>{const s=b(o,p(f.readwrite,e,d=>n.error(d))).objectStore(e),c=t?s.add(r,t):s.add(r);c.onsuccess=function(){var d=(0,y.A)(function*(a){const x=a.target.result,u=s.get(x);u.onsuccess=D=>{n.next(D.target.result),n.complete()},u.onerror=D=>{n.error(D)}});return function(a){return d.apply(this,arguments)}}(),c.onerror=d=>{n.error(d)}}).catch(o=>n.error(o))})}bulkAdd(e,r){const t=new Promise((n,o)=>{h(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(i=>{const c=b(i,p(f.readwrite,e,n,o)).objectStore(e),d=r.map(a=>new Promise((x,u)=>{const D=a.key;delete a.key;const v=D?c.add(a,D):c.add(a);v.onsuccess=_=>{const B=_.target.result;x(B)}}));n(Promise.all(d))}).catch(i=>o(i))});return(0,l.from)(t)}bulkDelete(e,r){const t=r.map(n=>new Promise((o,i)=>{h(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(s=>{const c=b(s,p(f.readwrite,e,i,o));c.objectStore(e).delete(n),c.oncomplete=()=>{this.getAll(e).pipe((0,E.take)(1)).subscribe(a=>{o(a)})}}).catch(s=>i(s))}));return(0,l.from)(Promise.all(t))}getByKey(e,r){return new l.Observable(t=>{h(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(n=>{const s=b(n,p(f.readonly,e,t.error)).objectStore(e).get(r);s.onsuccess=c=>{t.next(c.target.result),t.complete()},s.onerror=c=>{t.error(c)}}).catch(n=>t.error(n))})}bulkGet(e,r){const t=r.map(n=>this.getByKey(e,n));return new l.Observable(n=>{(0,l.combineLatest)(t).subscribe(o=>{n.next(o),n.complete()})})}getByID(e,r){return new l.Observable(t=>{h(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(n=>{j(n,e,c=>t.error(c));const s=b(n,p(f.readonly,e,t.error,t.next)).objectStore(e).get(r);s.onsuccess=c=>{t.next(c.target.result)}}).catch(n=>t.error(n))})}getByIndex(e,r,t){return new l.Observable(n=>{h(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(o=>{j(o,e,a=>n.error(a));const d=b(o,p(f.readonly,e,n.error)).objectStore(e).index(r).get(t);d.onsuccess=a=>{n.next(a.target.result),n.complete()}}).catch(o=>n.error(o))})}getAll(e){return new l.Observable(r=>{h(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(t=>{j(t,e,s=>r.error(s));const i=b(t,p(f.readonly,e,r.error,r.next)).objectStore(e).getAll();i.onerror=s=>{r.error(s)},i.onsuccess=({target:{result:s}})=>{r.next(s),r.complete()}}).catch(t=>r.error(t))})}update(e,r){return new l.Observable(t=>{h(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(n=>{j(n,e,c=>t.error(c));const i=b(n,p(f.readwrite,e,c=>t.error(c))).objectStore(e),s=i.put(r);s.onsuccess=function(){var c=(0,y.A)(function*(d){const a=d.target.result,x=i.get(a);x.onsuccess=u=>{t.next(u.target.result),t.complete()}});return function(d){return c.apply(this,arguments)}}()}).catch(n=>t.error(n))})}bulkPut(e,r){let t;return new l.Observable(n=>{h(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(o=>{j(o,e,s=>n.error(s)),t=b(o,p(f.readwrite,e,s=>n.error(s)));const i=t.objectStore(e);r.forEach((s,c)=>{const d=i.put(s);c===r.length-1&&(d.onsuccess=a=>{t.commit(),n.next(a.target.result),n.complete()}),d.onerror=a=>{t.abort(),n.error(a)}})}).catch(o=>{t?.abort(),n.error(o)})})}delete(e,r){return new l.Observable(t=>{h(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(n=>{j(n,e,s=>t.error(s));const o=b(n,p(f.readwrite,e,s=>t.error(s)));o.objectStore(e).delete(r),o.oncomplete=()=>{this.getAll(e).pipe((0,E.take)(1)).subscribe(s=>{t.next(s),t.complete()})}}).catch(n=>t.error(n))})}deleteByKey(e,r){return new l.Observable(t=>{h(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(n=>{j(n,e,s=>t.error(s));const o=b(n,p(f.readwrite,e,s=>t.error(s))),i=o.objectStore(e);o.oncomplete=()=>{t.next(!0),t.complete()},i.delete(r)}).catch(n=>t.error(n))})}clear(e){return new l.Observable(r=>{h(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(t=>{j(t,e,i=>r.error(i));const n=b(t,p(f.readwrite,e,i=>r.error(i)));n.objectStore(e).clear(),n.oncomplete=()=>{r.next(!0),r.complete()}}).catch(t=>r.error(t))})}deleteDatabase(){var e=this;return new l.Observable(r=>{h(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(function(){var t=(0,y.A)(function*(n){yield n.close();const o=e.indexedDB.deleteDatabase(e.dbConfig.name);o.onsuccess=()=>{r.next(!0),r.complete()},o.onerror=i=>r.error(i),o.onblocked=()=>{throw new Error("Unable to delete database because it's blocked")}});return function(n){return t.apply(this,arguments)}}()).catch(t=>r.error(t))})}openCursor(e,r,t="next"){return new l.Observable(n=>{h(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(o=>{j(o,e,d=>n.error(d));const s=b(o,p(f.readonly,e,n.error)).objectStore(e),c=r===void 0?s.openCursor():s.openCursor(r,t);c.onsuccess=d=>{n.next(d),n.complete()}}).catch(o=>n.error(o))})}openCursorByIndex(e,r,t,n="next",o=f.readonly){const i=new l.Subject;return h(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(s=>{j(s,e,u=>{i.error(u)});const x=b(s,p(o,e,u=>{i.error(u)},()=>{i.next()})).objectStore(e).index(r).openCursor(t,n);x.onsuccess=u=>{i.next(u)}}).catch(s=>i.error(s)),i}getAllByIndex(e,r,t){const n=[];return new l.Observable(o=>{h(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(i=>{j(i,e,x=>o.error(x));const a=b(i,p(f.readonly,e,o.error)).objectStore(e).index(r).openCursor(t);a.onsuccess=x=>{const u=x.target.result;u?(n.push(u.value),u.continue()):(o.next(n),o.complete())}}).catch(i=>o.error(i))})}getAllKeysByIndex(e,r,t){const n=[];return new l.Observable(o=>{h(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(i=>{j(i,e,x=>o.error(x));const a=b(i,p(f.readonly,e,o.error)).objectStore(e).index(r).openKeyCursor(t);a.onsuccess=x=>{const u=x.target.result;u?(n.push({primaryKey:u.primaryKey,key:u.key}),u.continue()):(o.next(n),o.complete())}}).catch(i=>o.error(i))})}count(e,r){return new l.Observable(t=>{h(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(n=>{j(n,e,c=>t.error(c));const s=b(n,p(f.readonly,e,t.error)).objectStore(e).count(r);s.onerror=c=>t.error(c),s.onsuccess=c=>{t.next(c.target.result),t.complete()}}).catch(n=>t.error(n))})}countByIndex(e,r,t){return new l.Observable(n=>{h(this.indexedDB,this.dbConfig.name,this.dbConfig.version).then(o=>{j(o,e,a=>n.error(a));const d=b(o,p(f.readonly,e,n.error)).objectStore(e).index(r).count(t);d.onerror=a=>n.error(a),d.onsuccess=a=>{n.next(a.target.result),n.complete()}}).catch(o=>n.error(o))})}deleteObjectStore(e){return k(this.dbConfig.name,++this.dbConfig.version,e)}static{this.\u0275fac=function(r){return new(r||w)(m.\u0275\u0275inject(O),m.\u0275\u0275inject(m.PLATFORM_ID))}}static{this.\u0275prov=m.\u0275\u0275defineInjectable({token:w,factory:w.\u0275fac})}}(typeof ngDevMode>"u"||ngDevMode)&&m.\u0275setClassMetadata(w,[{type:m.Injectable}],()=>[{type:void 0,decorators:[{type:m.Inject,args:[O]}]},{type:void 0,decorators:[{type:m.Inject,args:[m.PLATFORM_ID]}]}],null);class S{static forRoot(...e){const r={};for(const t of e)Object.assign(r,{[t.name]:t});return{ngModule:S,providers:[w,{provide:O,useValue:r}]}}static{this.\u0275fac=function(r){return new(r||S)}}static{this.\u0275mod=m.\u0275\u0275defineNgModule({type:S})}static{this.\u0275inj=m.\u0275\u0275defineInjector({imports:[I.CommonModule]})}}(typeof ngDevMode>"u"||ngDevMode)&&m.\u0275setClassMetadata(S,[{type:m.NgModule,args:[{declarations:[],imports:[I.CommonModule]}]}],null,null)}}]);