import{I as g}from"./index-d1c9b409.js";import{aa as m,Y as P,X as C,V as S,T as z,aY as x,Z as y,F as B,Q as r,e as t,W as D}from"./_plugin-vue_export-helper-17771205.js";const I={name:m,shape:P("round"),disabled:Boolean,iconSize:C,modelValue:m,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var G=S({props:z({},I,{bem:x(Function),role:String,parent:Object,checked:Boolean,bindGroup:y}),emits:["click","toggle"],setup(e,{emit:s,slots:c}){const u=B(),l=n=>{if(e.parent&&e.bindGroup)return e.parent.props[n]},a=r(()=>l("disabled")||e.disabled),f=r(()=>l("direction")),v=r(()=>{const n=e.checkedColor||l("checkedColor");if(n&&e.checked&&!a.value)return{borderColor:n,backgroundColor:n}}),h=n=>{const{target:i}=n,o=u.value,d=o===i||(o==null?void 0:o.contains(i));!a.value&&(d||!e.labelDisabled)&&s("toggle"),s("click",n)},b=()=>{const{bem:n,shape:i,checked:o}=e,d=e.iconSize||l("iconSize");return t("div",{ref:u,class:n("icon",[i,{disabled:a.value,checked:o}]),style:{fontSize:D(d)}},[c.icon?c.icon({checked:o,disabled:a.value}):t(g,{name:"success",style:v.value},null)])},k=()=>{if(c.default)return t("span",{class:e.bem("label",[e.labelPosition,{disabled:a.value}])},[c.default()])};return()=>{const n=e.labelPosition==="left"?[k(),b()]:[b(),k()];return t("div",{role:e.role,class:e.bem([{disabled:a.value,"label-disabled":e.labelDisabled},f.value]),tabindex:a.value?void 0:0,"aria-checked":e.checked,onClick:h},[n])}}});export{I as c,G as s};
