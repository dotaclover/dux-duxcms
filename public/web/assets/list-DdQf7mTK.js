import{X as r,s as a,j as s,a7 as n}from"./modulepreload-polyfill-DkiKXnSB.js";import{a as o}from"./button-D0ULnvDG.js";import{E as c,D as d}from"./link-JNlAaly3.js";import"./action-BYcpOc6q.js";import"./index-BEGpCFfB.js";const j=()=>{const t=r(),l=a.useMemo(()=>[{colKey:"id",sorter:!0,sortType:"all",title:"ID",width:100},{colKey:"name",title:t("content.recommend.fields.name"),ellipsis:!0},{colKey:"articles",title:t("content.recommend.fields.articles"),ellipsis:!0,cell:({row:e})=>{var i;return(i=e==null?void 0:e.articles)==null?void 0:i.length}},{colKey:"created_at",title:t("content.recommend.fields.createdAt"),sorter:!0,sortType:"all",width:200},{colKey:"link",title:t("table.actions"),fixed:"right",align:"center",width:120,cell:({row:e})=>s.jsxs("div",{className:"flex justify-center gap-4",children:[s.jsx(c,{rowId:e.id}),s.jsx(d,{rowId:e.id})]})}],[t]);return s.jsx(n,{columns:l,actionRender:()=>s.jsx(o,{})})};export{j as default};
