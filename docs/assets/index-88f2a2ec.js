import{T as S,H as T,I as k}from"./index-ec7f1cc8.js";import{U as x,V as B,e as n,Z as I,Y as P,a0 as h}from"./_plugin-vue_export-helper-17771205.js";const[v,s]=x("tag"),y={size:String,mark:Boolean,show:I,type:P("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};var p=B({name:v,props:y,emits:["close"],setup(o,{slots:t,emit:r}){const c=e=>{e.stopPropagation(),r("close",e)},i=()=>o.plain?{color:o.textColor||o.color,borderColor:o.color}:{color:o.textColor,background:o.color},d=()=>{var e;const{type:u,mark:m,plain:g,round:f,size:a,closeable:C}=o,l={mark:m,plain:g,round:f};a&&(l[a]=a);const b=C&&n(k,{name:"cross",class:[s("close"),T],onClick:c},null);return n("span",{style:i(),class:s([l,u])},[(e=t.default)==null?void 0:e.call(t),b])};return()=>n(S,{name:o.closeable?"van-fade":void 0},{default:()=>[o.show?d():null]})}});const z=h(p);export{z as T};