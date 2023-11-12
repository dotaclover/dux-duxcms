import{_ as n}from"./index-1fd01b2f.js";import{U as p,R as m,j as e,V as l,M as u,W as g,X as s,Y as i,Z as r,$ as x,H as o,a0 as c}from"./modulepreload-polyfill-ac150c65.js";const j={blue:"bg-blue-7",purple:"bg-pink-7",red:"bg-red-7",yellow:"bg-yellow-7",green:"bg-green-7",gray:"bg-gray-7"},b=()=>{const t=p(),d=m.useMemo(()=>[{colKey:"name",title:t("cloud.apps.fields.name"),minWidth:300,cell:({row:a})=>e.jsxs(l,{size:"small",children:[e.jsx(l.Image,{src:a.icon,className:u([j[a.color],"p-2"])}),e.jsx(l.Title,{children:a.title}),e.jsx(l.Desc,{children:a.desc})]})},{colKey:"time",title:t("cloud.apps.fields.time"),cell:({row:a})=>e.jsx(e.Fragment,{children:g(a.local_time*1e3).format("YYYY-MM-DD HH:mm:ss")})},{colKey:"update",title:t("cloud.apps.fields.update"),cell:({row:a})=>e.jsx(e.Fragment,{children:a!=null&&a.update?e.jsx(i,{title:t("cloud.apps.action.update"),trigger:e.jsx(s,{theme:"warning",variant:"outline",className:"cursor-pointer",children:"有更新"}),component:()=>n(()=>import("./update-3788b690.js"),["assets/update-3788b690.js","assets/modulepreload-polyfill-ac150c65.js"]),componentProps:{data:a}}):e.jsx(s,{variant:"outline",children:"暂无更新"})})},{colKey:"link",title:t("table.actions"),fixed:"right",align:"center",width:160,cell:({row:a})=>e.jsxs("div",{className:"flex justify-center gap-4",children:[e.jsx(r,{theme:"primary",href:"https://www.dux.cn/apps/"+a.id,target:"_black",children:t("buttons.show")}),e.jsx(i,{title:t("cloud.apps.action.uninstall"),trigger:e.jsx(r,{theme:"danger",children:t("cloud.apps.action.uninstall")}),component:()=>n(()=>import("./uninstall-7132937a.js"),["assets/uninstall-7132937a.js","assets/modulepreload-polyfill-ac150c65.js"]),componentProps:{name:a.name}})]})}],[t]);return e.jsx(e.Fragment,{children:e.jsx(x,{columns:d,table:{rowKey:"id",pagination:{disabled:!0}},title:t("cloud.apps.name"),actionRender:()=>e.jsxs(e.Fragment,{children:[e.jsx(i,{title:t("cloud.apps.action.login"),trigger:e.jsx(o,{icon:e.jsx(c,{name:"user"}),variant:"outline",theme:"primary",children:t("cloud.apps.action.login")}),component:()=>n(()=>import("./login-5be567ba.js"),["assets/login-5be567ba.js","assets/modulepreload-polyfill-ac150c65.js"])}),e.jsx(i,{title:t("cloud.apps.action.install"),trigger:e.jsx(o,{icon:e.jsx(c,{name:"uninstall"}),variant:"outline",theme:"success",children:t("cloud.apps.action.install")}),component:()=>n(()=>import("./install-27aacae1.js"),["assets/install-27aacae1.js","assets/modulepreload-polyfill-ac150c65.js"])})]})})})};export{j as colorStyle,b as default};