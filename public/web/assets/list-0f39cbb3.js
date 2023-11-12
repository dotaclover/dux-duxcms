import{_ as h}from"./index-1fd01b2f.js";import{U as u,R as p,j as e,V as i,ad as x,Z as n,X as r,Y as j,$ as f,ah as a,S as l}from"./modulepreload-polyfill-ac150c65.js";import{u as y}from"./useSelect-e9bae78c.js";import{D as v}from"./index-5f5e664f.js";const k=()=>{const t=u(),c=p.useMemo(()=>[{colKey:"id",sorter:!0,sortType:"all",title:"ID",width:100},{colKey:"username",title:t("system.operate.fields.user"),cell:({row:s})=>e.jsxs(i,{size:"small",children:[e.jsx(i.Avatar,{image:s.avatar,children:s.nickname[0]}),e.jsx(i.Title,{children:s.nickname}),e.jsx(i.Desc,{children:s.username})]})},{colKey:"request_method",title:t("system.operate.fields.request"),minWidth:210,cell:({row:s})=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{children:e.jsx(x,{content:s.request_url,children:e.jsx(n,{children:s.route_name})})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(r,{theme:"primary",variant:"outline",children:s.request_method}),e.jsx(r,{theme:"success",variant:"outline",children:s.request_time})]})]})},{colKey:"client_ip",title:t("system.operate.fields.client"),minWidth:200,cell:({row:s})=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("div",{children:s.client_ip}),e.jsx("div",{className:"flex gap-2",children:e.jsx(r,{theme:"primary",variant:"outline",children:s.client_device})})]})},{colKey:"time",title:t("system.operate.fields.requestTime"),minWidth:200},{colKey:"link",title:t("table.actions"),fixed:"right",align:"center",width:160,cell:({row:s})=>e.jsx("div",{className:"flex justify-center gap-4",children:e.jsx(j,{title:t("buttons.show"),trigger:e.jsx(n,{theme:"primary",children:t("buttons.show")}),component:()=>h(()=>import("./show-4a2f841c.js"),["assets/show-4a2f841c.js","assets/modulepreload-polyfill-ac150c65.js"]),componentProps:{id:s.id}})})}],[t]),{options:o,onSearch:d,queryResult:m}=y({resource:"system.user",optionLabel:"nickname",optionValue:"id"});return e.jsx(f,{columns:c,table:{rowKey:"id"},title:t("system.operate.name"),filterRender:()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{name:"user",children:e.jsx(l,{filterable:!0,loading:m.isLoading,onSearch:d,options:o,placeholder:t("system.operate.filters.userPlaceholder"),clearable:!0})}),e.jsx(a,{name:"method",children:e.jsxs(l,{placeholder:t("system.operate.filters.method.placeholder"),clearable:!0,children:[e.jsx(l.Option,{value:"post",children:t("system.operate.filters.method.post")}),e.jsx(l.Option,{value:"put",children:t("system.operate.filters.method.put")}),e.jsx(l.Option,{value:"patch",children:t("system.operate.filters.method.patch")}),e.jsx(l.Option,{value:"delete",children:t("system.operate.filters.method.delete")})]})}),e.jsx(a,{name:"date",children:e.jsx(v,{enableTimePicker:!0,clearable:!0})})]})})};export{k as default};