import{av as y,c as O,r as T,o as l,d as i,e as a,ax as c,az as d,ai as p,ay as g,aH as f,aw as L}from"./_plugin-vue_export-helper-17771205.js";/* empty css              */import{L as B,P as N}from"./index-84d8630a.js";import"./index-ec7f1cc8.js";import{C as w}from"./index-0f2397c5.js";import"./index-88f2a2ec.js";import{T as I,a as R}from"./index-ecf56c7f.js";import{s as S}from"./SimpleHeader-194467f3.js";import{g as U}from"./order-972c975a.js";import"./use-id-a3948fe8.js";import"./use-route-8af935f0.js";const $={class:"order-box"},D={class:"content"},H=["onClick"],q={class:"order-item-header"},z={__name:"Order",setup(E){const _=O(),e=T({status:"",loading:!1,finished:!1,refreshing:!1,list:[],page:1,totalPage:0}),h=async()=>{const{data:s,data:{list:o}}=await U({pageNumber:e.page,status:e.status});e.list=e.list.concat(o),e.totalPage=s.totalPage,e.loading=!1,e.page>=s.totalPage&&(e.finished=!0)},v=({name:s})=>{e.status=s,m()},b=s=>{_.push({path:"/order-detail",query:{id:s}})},u=()=>{!e.refreshing&&e.page<e.totalPage&&(console.log(e.page),console.log(e.totalPage),e.page=e.page+1),e.refreshing&&(e.list=[],e.refreshing=!1),h()},m=()=>{e.refreshing=!0,e.finished=!1,e.loading=!0,e.page=1,u()};return(s,o)=>{const r=I,k=R,x=w,C=B,P=N;return l(),i("div",$,[a(S,{name:"我的订单",back:"/user"}),a(k,{onClickTab:v,color:"#1baeae","title-active-color":"#1baeae",class:"order-tab",modelValue:e.status,"onUpdate:modelValue":o[0]||(o[0]=t=>e.status=t)},{default:c(()=>[a(r,{title:"全部",name:""}),a(r,{title:"待付款",name:"0"}),a(r,{title:"待确认",name:"1"}),a(r,{title:"待发货",name:"2"}),a(r,{title:"已发货",name:"3"}),a(r,{title:"交易完成",name:"4"})]),_:1},8,["modelValue"]),d("div",D,[a(P,{modelValue:e.refreshing,"onUpdate:modelValue":o[2]||(o[2]=t=>e.refreshing=t),onRefresh:m,class:"order-list-refresh"},{default:c(()=>[a(C,{loading:e.loading,"onUpdate:loading":o[1]||(o[1]=t=>e.loading=t),finished:e.finished,"finished-text":"没有更多了",onLoad:u,onOffset:t=>10},{default:c(()=>[(l(!0),i(p,null,g(e.list,(t,V)=>(l(),i("div",{key:V,class:"order-item-box",onClick:n=>b(t.orderNo)},[d("div",q,[d("span",null,"订单时间："+f(t.createTime),1),d("span",null,f(t.orderStatusString),1)]),(l(!0),i(p,null,g(t.newBeeMallOrderItemVOS,n=>(l(),L(x,{key:n.orderId,num:n.goodsCount,price:n.sellingPrice,desc:"全场包邮",title:n.goodsName,thumb:s.$filters.prefix(n.goodsCoverImg)},null,8,["num","price","title","thumb"]))),128))],8,H))),128))]),_:1},8,["loading","finished"])]),_:1},8,["modelValue"])])])}}},Z=y(z,[["__scopeId","data-v-d113d69c"]]);export{Z as default};