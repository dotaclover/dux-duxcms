import{_ as i}from"./index-4849d83d.js";import{Y as n,ac as c,R as d,j as t,a9 as o,a3 as r,af as m,J as p}from"./modulepreload-polyfill-d587593e.js";import{S as u}from"./index-f4a3a35f.js";import{P as y}from"./index-ed80d7fc.js";const j=()=>{const e=n(),{mutate:a}=c(),l=d.useMemo(()=>[{colKey:"id",sorter:!0,sortType:"all",title:"ID",width:150},{colKey:"secret_id",title:e("system.api.fields.secretId"),ellipsis:!0},{colKey:"secret_key",title:e("system.api.fields.secretKey"),ellipsis:!0},{colKey:"status",title:e("system.api.fields.status"),edit:{component:u,props:{},keepEditMode:!0}},{colKey:"link",title:e("table.actions"),fixed:"right",align:"center",width:160,cell:({row:s})=>t.jsxs("div",{className:"flex justify-center gap-4",children:[t.jsx(o,{title:e("buttons.edit"),trigger:t.jsx(r,{theme:"primary",children:e("buttons.edit")}),component:()=>i(()=>import("./save-1d9f41ab.js"),["assets/save-1d9f41ab.js","assets/modulepreload-polyfill-d587593e.js"]),componentProps:{id:s.id}}),t.jsx(y,{content:e("buttons.confirm"),destroyOnClose:!0,placement:"top",showArrow:!0,theme:"default",onConfirm:()=>{a({resource:"system.role",id:s.id})},children:t.jsx(r,{theme:"danger",children:e("buttons.delete")})})]})}],[e]);return t.jsx(m,{columns:l,table:{rowKey:"id"},title:e("system.api.name"),actionRender:()=>t.jsx(o,{title:e("buttons.create"),trigger:t.jsx(p,{icon:t.jsx("div",{className:"t-icon i-tabler:plus"}),children:e("buttons.create")}),component:()=>i(()=>import("./save-1d9f41ab.js"),["assets/save-1d9f41ab.js","assets/modulepreload-polyfill-d587593e.js"])})})};export{j as default};
