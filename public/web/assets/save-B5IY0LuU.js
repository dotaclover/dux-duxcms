import{j as e}from"./vendor-map-xrlPGoMd.js";import{r as p}from"./vendor-react-CEAiij2-.js";import{Y as F}from"./modulepreload-polyfill-FQPaZMP9.js";import{_ as I}from"./vendor-refine-BPS4QmKj.js";import"./vendor-echarts-BA2V57Gb.js";import{al as i,F as m,ad as N,I as h,n as g,B as y}from"./vendor-tdesign-CDUa2Lvz.js";import"./vendor-tinymce-DBANSpiv.js";import"./vendor-lib-DkJHNO_p.js";import"./vendor-markdown-DKT2DIHL.js";const P=n=>{const[c,j]=p.useState({});return e.jsx(F,{id:n==null?void 0:n.id,onResult:({formData:s})=>{j(s==null?void 0:s.data)},padding:!1,children:e.jsx(i,{placement:"top",size:"medium",defaultValue:0,children:Object.entries((c==null?void 0:c.meta)||{}).filter(([s])=>s!="theme").map(([s,r],x)=>{const l=Object.entries((r==null?void 0:r.fields)||{});return e.jsx(i.TabPanel,{value:x,label:r==null?void 0:r.name,destroyOnHide:!1,children:e.jsx("div",{className:"p-5",children:l.map(([a,t],o)=>{if((t==null?void 0:t.type)=="textarea")return e.jsx(m.FormItem,{name:[s,a],label:t==null?void 0:t.label,children:e.jsx(N,{})},o);if((t==null?void 0:t.type)=="text")return e.jsx(m.FormItem,{name:[s,a],label:t==null?void 0:t.label,children:e.jsx(h,{})},o);if((t==null?void 0:t.type)=="list")return e.jsx(O,{name:[s,a],items:t==null?void 0:t.fields},o)})})},x)})})})},O=({name:n,items:c})=>{const j=I();return e.jsx(m.FormList,{name:n,children:(s,{add:r,remove:x})=>e.jsxs(e.Fragment,{children:[s.map(({key:l,name:a,...t})=>e.jsxs("div",{className:"flex gap-4",children:[Object.entries(c||{}).map(([o,u],b)=>p.createElement(m.FormItem,{...t,key:b,name:[a,o],label:u,className:"w-0 flex-1"},e.jsx(h,{className:"w-full"}))),e.jsx(m.FormItem,{label:" ",className:"flex-none",children:e.jsx(g,{size:"20px",name:"delete",style:{cursor:"pointer"},onClick:()=>x(a)})})]},l)),e.jsx(m.FormItem,{children:e.jsx(y,{theme:"default",variant:"dashed",onClick:()=>r({}),children:j("cms.theme.addField")})})]})})};export{P as default};
