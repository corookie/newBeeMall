import{av as p,c as m,r as v,ag as f,o as g,d as h,e as o,ax as k,az as s,aH as d,aC as b,aD as w}from"./_plugin-vue_export-helper-17771205.js";import{S as x,I,n as S}from"./index-d1c9b409.js";import{s as y}from"./SimpleHeader-194467f3.js";import{g as C}from"./user-a7c5b7ad.js";const t=n=>(b("data-v-f5bf3a6a"),n=n(),w(),n),B={class:"user-box"},N={class:"user-info"},U={class:"info"},$=t(()=>s("img",{src:"https://s.yezgea02.com/1604040746310/aaaddd.png"},null,-1)),z={class:"user-desc"},D={class:"name"},H={class:"user-list"},V=t(()=>s("span",null,"我的订单",-1)),q=t(()=>s("span",null,"账号管理",-1)),E=t(()=>s("span",null,"地址管理",-1)),M=t(()=>s("span",null,"关于我们",-1)),R={__name:"User",setup(n){const _=m(),e=v({user:{},loading:!0});f(async()=>{const{data:i}=await C();e.user=i,e.loading=!1});const r=(i,a)=>{_.push({path:i,query:a||{}})};return(i,a)=>{const u=x,l=I;return g(),h("div",B,[o(y,{name:"我的"}),o(u,{title:"",avatar:!0,row:3,loading:e.loading},{default:k(()=>[s("div",N,[s("div",U,[$,s("div",z,[s("span",null,"昵称："+d(e.user.nickName),1),s("span",null,"登录名："+d(e.user.loginName),1),s("span",D,"个性签名："+d(e.user.introduceSign),1)])])])]),_:1},8,["loading"]),s("ul",H,[s("li",{class:"van-hairline--bottom",onClick:a[0]||(a[0]=c=>r("/order"))},[V,o(l,{name:"arrow"})]),s("li",{class:"van-hairline--bottom",onClick:a[1]||(a[1]=c=>r("/setting"))},[q,o(l,{name:"arrow"})]),s("li",{class:"van-hairline--bottom",onClick:a[2]||(a[2]=c=>r("/address",{from:"mine"}))},[E,o(l,{name:"arrow"})]),s("li",{onClick:a[3]||(a[3]=c=>r("/about"))},[M,o(l,{name:"arrow"})])]),o(S)])}}},G=p(R,[["__scopeId","data-v-f5bf3a6a"]]);export{G as default};
