import{c as _,a as H,r as R}from"./index-ec7f1cc8.js";import{i as g,u as x,n as C,a as w,g as N,b as F,h as T,c as W,r as k,o as B,d as D,e as q,f as P,R as V}from"./_plugin-vue_export-helper-17771205.js";/* empty css              *//* empty css              *//* empty css              */(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const O=g&&"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype,m={event:"event",observer:"observer"};function v(r,t){if(!r.length)return;const e=r.indexOf(t);if(e>-1)return r.splice(e,1)}function S(r,t){if(r.tagName!=="IMG"||!r.getAttribute("data-srcset"))return;let e=r.getAttribute("data-srcset");const s=r.parentNode.offsetWidth*t;let o,n,a;e=e.trim().split(",");const d=e.map(l=>(l=l.trim(),o=l.lastIndexOf(" "),o===-1?(n=l,a=999998):(n=l.substr(0,o),a=parseInt(l.substr(o+1,l.length-o-2),10)),[a,n]));d.sort((l,c)=>{if(l[0]<c[0])return 1;if(l[0]>c[0])return-1;if(l[0]===c[0]){if(c[1].indexOf(".webp",c[1].length-5)!==-1)return 1;if(l[1].indexOf(".webp",l[1].length-5)!==-1)return-1}return 0});let h="",f;for(let l=0;l<d.length;l++){f=d[l],h=f[1];const c=d[l+1];if(c&&c[0]<s){h=f[1];break}else if(!c){h=f[1];break}}return h}const U=(r=1)=>g&&window.devicePixelRatio||r;function j(){if(!g)return!1;let r=!0;try{const t=document.createElement("canvas");t.getContext&&t.getContext("2d")&&(r=t.toDataURL("image/webp").indexOf("data:image/webp")===0)}catch{r=!1}return r}function G(r,t){let e=null,i=0;return function(...s){if(e)return;const o=Date.now()-i,n=()=>{i=Date.now(),e=!1,r.apply(this,s)};o>=t?n():e=setTimeout(n,t)}}function M(r,t,e){r.addEventListener(t,e,{capture:!1,passive:!0})}function K(r,t,e){r.removeEventListener(t,e,!1)}const A=(r,t,e)=>{const i=new Image;if(!r||!r.src)return e(new Error("image src is required"));i.src=r.src,r.cors&&(i.crossOrigin=r.cors),i.onload=()=>t({naturalHeight:i.naturalHeight,naturalWidth:i.naturalWidth,src:i.src}),i.onerror=s=>e(s)};class Q{constructor({max:t}){this.options={max:t||100},this.caches=[]}has(t){return this.caches.indexOf(t)>-1}add(t){this.has(t)||(this.caches.push(t),this.caches.length>this.options.max&&this.free())}free(){this.caches.shift()}}class J{constructor({el:t,src:e,error:i,loading:s,bindType:o,$parent:n,options:a,cors:d,elRenderer:h,imageCache:f}){this.el=t,this.src=e,this.error=i,this.loading=s,this.bindType=o,this.attempt=0,this.cors=d,this.naturalHeight=0,this.naturalWidth=0,this.options=a,this.$parent=n,this.elRenderer=h,this.imageCache=f,this.performanceData={loadStart:0,loadEnd:0},this.filter(),this.initState(),this.render("loading",!1)}initState(){"dataset"in this.el?this.el.dataset.src=this.src:this.el.setAttribute("data-src",this.src),this.state={loading:!1,error:!1,loaded:!1,rendered:!1}}record(t){this.performanceData[t]=Date.now()}update({src:t,loading:e,error:i}){const s=this.src;this.src=t,this.loading=e,this.error=i,this.filter(),s!==this.src&&(this.attempt=0,this.initState())}checkInView(){const t=x(this.el);return t.top<window.innerHeight*this.options.preLoad&&t.bottom>this.options.preLoadTop&&t.left<window.innerWidth*this.options.preLoad&&t.right>0}filter(){Object.keys(this.options.filter).forEach(t=>{this.options.filter[t](this,this.options)})}renderLoading(t){this.state.loading=!0,A({src:this.loading,cors:this.cors},()=>{this.render("loading",!1),this.state.loading=!1,t()},()=>{t(),this.state.loading=!1})}load(t=C){if(this.attempt>this.options.attempt-1&&this.state.error){t();return}if(!(this.state.rendered&&this.state.loaded)){if(this.imageCache.has(this.src))return this.state.loaded=!0,this.render("loaded",!0),this.state.rendered=!0,t();this.renderLoading(()=>{var e,i;this.attempt++,(i=(e=this.options.adapter).beforeLoad)==null||i.call(e,this,this.options),this.record("loadStart"),A({src:this.src,cors:this.cors},s=>{this.naturalHeight=s.naturalHeight,this.naturalWidth=s.naturalWidth,this.state.loaded=!0,this.state.error=!1,this.record("loadEnd"),this.render("loaded",!1),this.state.rendered=!0,this.imageCache.add(this.src),t()},s=>{!this.options.silent&&console.error(s),this.state.error=!0,this.state.loaded=!1,this.render("error",!1)})})}}render(t,e){this.elRenderer(this,t,e)}performance(){let t="loading",e=0;return this.state.loaded&&(t="loaded",e=(this.performanceData.loadEnd-this.performanceData.loadStart)/1e3),this.state.error&&(t="error"),{src:this.src,state:t,time:e}}$destroy(){this.el=null,this.src=null,this.error=null,this.loading=null,this.bindType=null,this.attempt=0}}const z="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",X=["scroll","wheel","mousewheel","resize","animationend","transitionend","touchmove"],Y={rootMargin:"0px",threshold:0};function Z(){return class{constructor({preLoad:t,error:e,throttleWait:i,preLoadTop:s,dispatchEvent:o,loading:n,attempt:a,silent:d=!0,scale:h,listenEvents:f,filter:l,adapter:c,observer:L,observerOptions:E}){this.mode=m.event,this.listeners=[],this.targetIndex=0,this.targets=[],this.options={silent:d,dispatchEvent:!!o,throttleWait:i||200,preLoad:t||1.3,preLoadTop:s||0,error:e||z,loading:n||z,attempt:a||3,scale:h||U(h),ListenEvents:f||X,supportWebp:j(),filter:l||{},adapter:c||{},observer:!!L,observerOptions:E||Y},this.initEvent(),this.imageCache=new Q({max:200}),this.lazyLoadHandler=G(this.lazyLoadHandler.bind(this),this.options.throttleWait),this.setMode(this.options.observer?m.observer:m.event)}config(t={}){Object.assign(this.options,t)}performance(){return this.listeners.map(t=>t.performance())}addLazyBox(t){this.listeners.push(t),g&&(this.addListenerTarget(window),this.observer&&this.observer.observe(t.el),t.$el&&t.$el.parentNode&&this.addListenerTarget(t.$el.parentNode))}add(t,e,i){if(this.listeners.some(n=>n.el===t))return this.update(t,e),w(this.lazyLoadHandler);const s=this.valueFormatter(e.value);let{src:o}=s;w(()=>{o=S(t,this.options.scale)||o,this.observer&&this.observer.observe(t);const n=Object.keys(e.modifiers)[0];let a;n&&(a=i.context.$refs[n],a=a?a.$el||a:document.getElementById(n)),a||(a=N(t));const d=new J({bindType:e.arg,$parent:a,el:t,src:o,loading:s.loading,error:s.error,cors:s.cors,elRenderer:this.elRenderer.bind(this),options:this.options,imageCache:this.imageCache});this.listeners.push(d),g&&(this.addListenerTarget(window),this.addListenerTarget(a)),this.lazyLoadHandler(),w(()=>this.lazyLoadHandler())})}update(t,e,i){const s=this.valueFormatter(e.value);let{src:o}=s;o=S(t,this.options.scale)||o;const n=this.listeners.find(a=>a.el===t);n?n.update({src:o,error:s.error,loading:s.loading}):this.add(t,e,i),this.observer&&(this.observer.unobserve(t),this.observer.observe(t)),this.lazyLoadHandler(),w(()=>this.lazyLoadHandler())}remove(t){if(!t)return;this.observer&&this.observer.unobserve(t);const e=this.listeners.find(i=>i.el===t);e&&(this.removeListenerTarget(e.$parent),this.removeListenerTarget(window),v(this.listeners,e),e.$destroy())}removeComponent(t){t&&(v(this.listeners,t),this.observer&&this.observer.unobserve(t.el),t.$parent&&t.$el.parentNode&&this.removeListenerTarget(t.$el.parentNode),this.removeListenerTarget(window))}setMode(t){!O&&t===m.observer&&(t=m.event),this.mode=t,t===m.event?(this.observer&&(this.listeners.forEach(e=>{this.observer.unobserve(e.el)}),this.observer=null),this.targets.forEach(e=>{this.initListen(e.el,!0)})):(this.targets.forEach(e=>{this.initListen(e.el,!1)}),this.initIntersectionObserver())}addListenerTarget(t){if(!t)return;let e=this.targets.find(i=>i.el===t);return e?e.childrenCount++:(e={el:t,id:++this.targetIndex,childrenCount:1,listened:!0},this.mode===m.event&&this.initListen(e.el,!0),this.targets.push(e)),this.targetIndex}removeListenerTarget(t){this.targets.forEach((e,i)=>{e.el===t&&(e.childrenCount--,e.childrenCount||(this.initListen(e.el,!1),this.targets.splice(i,1),e=null))})}initListen(t,e){this.options.ListenEvents.forEach(i=>(e?M:K)(t,i,this.lazyLoadHandler))}initEvent(){this.Event={listeners:{loading:[],loaded:[],error:[]}},this.$on=(t,e)=>{this.Event.listeners[t]||(this.Event.listeners[t]=[]),this.Event.listeners[t].push(e)},this.$once=(t,e)=>{const i=(...s)=>{this.$off(t,i),e.apply(this,s)};this.$on(t,i)},this.$off=(t,e)=>{if(!e){if(!this.Event.listeners[t])return;this.Event.listeners[t].length=0;return}v(this.Event.listeners[t],e)},this.$emit=(t,e,i)=>{this.Event.listeners[t]&&this.Event.listeners[t].forEach(s=>s(e,i))}}lazyLoadHandler(){const t=[];this.listeners.forEach(e=>{(!e.el||!e.el.parentNode)&&t.push(e),e.checkInView()&&e.load()}),t.forEach(e=>{v(this.listeners,e),e.$destroy()})}initIntersectionObserver(){O&&(this.observer=new IntersectionObserver(this.observerHandler.bind(this),this.options.observerOptions),this.listeners.length&&this.listeners.forEach(t=>{this.observer.observe(t.el)}))}observerHandler(t){t.forEach(e=>{e.isIntersecting&&this.listeners.forEach(i=>{if(i.el===e.target){if(i.state.loaded)return this.observer.unobserve(i.el);i.load()}})})}elRenderer(t,e,i){if(!t.el)return;const{el:s,bindType:o}=t;let n;switch(e){case"loading":n=t.loading;break;case"error":n=t.error;break;default:({src:n}=t);break}if(o?s.style[o]='url("'+n+'")':s.getAttribute("src")!==n&&s.setAttribute("src",n),s.setAttribute("lazy",e),this.$emit(e,t,i),this.options.adapter[e]&&this.options.adapter[e](t,this.options),this.options.dispatchEvent){const a=new CustomEvent(e,{detail:t});s.dispatchEvent(a)}}valueFormatter(t){let e=t,{loading:i,error:s}=this.options;return F(t)&&({src:e}=t,i=t.loading||this.options.loading,s=t.error||this.options.error),{src:e,loading:i,error:s}}}}var tt=r=>({props:{tag:{type:String,default:"div"}},emits:["show"],render(){return T(this.tag,this.show&&this.$slots.default?this.$slots.default():null)},data(){return{el:null,state:{loaded:!1},show:!1}},mounted(){this.el=this.$el,r.addLazyBox(this),r.lazyLoadHandler()},beforeUnmount(){r.removeComponent(this)},methods:{checkInView(){const t=x(this.$el);return g&&t.top<window.innerHeight*r.options.preLoad&&t.bottom>0&&t.left<window.innerWidth*r.options.preLoad&&t.right>0},load(){this.show=!0,this.state.loaded=!0,this.$emit("show",this)},destroy(){return this.$destroy}}});const et={selector:"img"};class st{constructor({el:t,binding:e,vnode:i,lazy:s}){this.el=null,this.vnode=i,this.binding=e,this.options={},this.lazy=s,this.queue=[],this.update({el:t,binding:e})}update({el:t,binding:e}){this.el=t,this.options=Object.assign({},et,e.value),this.getImgs().forEach(s=>{this.lazy.add(s,Object.assign({},this.binding,{value:{src:"dataset"in s?s.dataset.src:s.getAttribute("data-src"),error:("dataset"in s?s.dataset.error:s.getAttribute("data-error"))||this.options.error,loading:("dataset"in s?s.dataset.loading:s.getAttribute("data-loading"))||this.options.loading}}),this.vnode)})}getImgs(){return Array.from(this.el.querySelectorAll(this.options.selector))}clear(){this.getImgs().forEach(e=>this.lazy.remove(e)),this.vnode=null,this.binding=null,this.lazy=null}}class it{constructor({lazy:t}){this.lazy=t,this.queue=[]}bind(t,e,i){const s=new st({el:t,binding:e,vnode:i,lazy:this.lazy});this.queue.push(s)}update(t,e,i){const s=this.queue.find(o=>o.el===t);s&&s.update({el:t,binding:e,vnode:i})}unbind(t){const e=this.queue.find(i=>i.el===t);e&&(e.clear(),v(this.queue,e))}}var rt=r=>({props:{src:[String,Object],tag:{type:String,default:"img"}},render(){var t,e;return T(this.tag,{src:this.renderSrc},(e=(t=this.$slots).default)==null?void 0:e.call(t))},data(){return{el:null,options:{src:"",error:"",loading:"",attempt:r.options.attempt},state:{loaded:!1,error:!1,attempt:0},renderSrc:""}},watch:{src(){this.init(),r.addLazyBox(this),r.lazyLoadHandler()}},created(){this.init(),this.renderSrc=this.options.loading},mounted(){this.el=this.$el,r.addLazyBox(this),r.lazyLoadHandler()},beforeUnmount(){r.removeComponent(this)},methods:{init(){const{src:t,loading:e,error:i}=r.valueFormatter(this.src);this.state.loaded=!1,this.options.src=t,this.options.error=i,this.options.loading=e,this.renderSrc=this.options.loading},checkInView(){const t=x(this.$el);return t.top<window.innerHeight*r.options.preLoad&&t.bottom>0&&t.left<window.innerWidth*r.options.preLoad&&t.right>0},load(t=C){if(this.state.attempt>this.options.attempt-1&&this.state.error){t();return}const{src:e}=this.options;A({src:e},({src:i})=>{this.renderSrc=i,this.state.loaded=!0},()=>{this.state.attempt++,this.renderSrc=this.options.error,this.state.error=!0})}}});const nt={install(r,t={}){const e=Z(),i=new e(t),s=new it({lazy:i});r.config.globalProperties.$Lazyload=i,t.lazyComponent&&r.component("LazyComponent",tt(i)),t.lazyImage&&r.component("LazyImage",rt(i)),r.directive("lazy",{beforeMount:i.add.bind(i),updated:i.update.bind(i),unmounted:i.remove.bind(i)}),r.directive("lazy-container",{beforeMount:s.bind.bind(s),updated:s.update.bind(s),unmounted:s.unbind.bind(s)})}};const ot={id:"app"},at={__name:"App",setup(r){const t=W(),e=k({transitionName:"slide-left"});return t.beforeEach((i,s)=>{i.meta.index>s.meta.index?e.transitionName="slide-left":i.meta.index<s.meta.index?e.transitionName="slide-right":e.transitionName=""}),(i,s)=>(B(),D("div",ot,[q(P(V))]))}};(function(r,t){var e=r.document,i=e.documentElement,s=e.querySelector('meta[name="viewport"]'),o=e.querySelector('meta[name="flexible"]'),n=0,a=0,d,h=t.flexible||(t.flexible={});if(s){console.warn("将根据已有的meta标签来设置缩放比例");var f=s.getAttribute("content").match(/initial\-scale=([\d\.]+)/);f&&(a=parseFloat(f[1]),n=parseInt(1/a))}else if(o){var l=o.getAttribute("content");if(l){var c=l.match(/initial\-dpr=([\d\.]+)/),L=l.match(/maximum\-dpr=([\d\.]+)/);c&&(n=parseFloat(c[1]),a=parseFloat((1/n).toFixed(2))),L&&(n=parseFloat(L[1]),a=parseFloat((1/n).toFixed(2)))}}if(!n&&!a){r.navigator.appVersion.match(/android/gi);var E=r.navigator.appVersion.match(/iphone/gi),$=r.devicePixelRatio;E?$>=3&&(!n||n>=3)?n=3:$>=2&&(!n||n>=2)?n=2:n=1:n=1,a=1/n}if(i.setAttribute("data-dpr",n),!s)if(s=e.createElement("meta"),s.setAttribute("name","viewport"),s.setAttribute("content","initial-scale="+a+", maximum-scale="+a+", minimum-scale="+a+", user-scalable=no"),i.firstElementChild)i.firstElementChild.appendChild(s);else{var I=e.createElement("div");I.appendChild(s),e.write(I.innerHTML)}function y(){var u=i.getBoundingClientRect().width;u/n>540&&(u=540*n);var p=u/10;i.style.fontSize=p+"px",h.rem=r.rem=p}r.addEventListener("resize",function(){clearTimeout(d),d=setTimeout(y,300)},!1),r.addEventListener("pageshow",function(u){u.persisted&&(clearTimeout(d),d=setTimeout(y,300))},!1),e.readyState==="complete"?e.body.style.fontSize=12*n+"px":e.addEventListener("DOMContentLoaded",function(u){e.body.style.fontSize=12*n+"px"},!1),y(),h.dpr=r.dpr=n,h.refreshRem=y,h.rem2px=function(u){var p=parseFloat(u)*this.rem;return typeof u=="string"&&u.match(/rem$/)&&(p+="px"),p},h.px2rem=function(u){var p=parseFloat(u)/this.rem;return typeof u=="string"&&u.match(/px$/)&&(p+="rem"),p}})(window,window.lib||(window.lib={}));const b=_(at);b.use(H());b.use(R);b.use(nt);b.config.globalProperties.$filters={prefix(r){return r&&r.startsWith("http")||(r=`http://backend-api-01.newbee.ltd${r}`),r}};b.mount("#app");