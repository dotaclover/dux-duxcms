import{j as e}from"./vendor-map-CavGn2Gm.js";import{R as n,r as o}from"./vendor-react-BlTfyhut.js";import{_ as c}from"./vendor-refine-N0YDYeEW.js";import{V as a,W as d,O as u}from"./modulepreload-polyfill-gnEWSMTf.js";import"./vendor-echarts-YtT1A1hM.js";import{$ as i,I as p}from"./vendor-tdesign-Dl0n85Ru.js";import{D as m,a as b}from"./button-BpZyQvx9.js";import{E as h,D as x}from"./link-Cl8VaVKv.js";import"./vendor-tinymce-DBANSpiv.js";import"./vendor-lib-CW-uXUk2.js";import"./vendor-markdown-CMNXrCXk.js";import"./action-CogfU8lF.js";const E=()=>{const t=c(),r=n.useMemo(()=>[{colKey:"row-select",type:"multiple"},{colKey:"id",sorter:!0,sortType:"all",title:"ID",width:100},{colKey:"title",title:t("content.page.fields.title"),ellipsis:!0,cell:({row:l})=>e.jsxs(a,{size:"small",children:[e.jsx(a.Image,{src:l.image}),e.jsx(a.Title,{children:l.title}),e.jsx(a.Desc,{children:l.subtitle})]})},{colKey:"name",title:t("content.page.fields.name"),ellipsis:!0},{colKey:"status",title:t("content.page.fields.status"),width:150,filter:{type:"single",list:[{label:t("content.page.tab.published"),value:"1"},{label:t("content.page.tab.unpublished"),value:"2"}]},cell:({row:l})=>e.jsx(e.Fragment,{children:l.status?e.jsx(i,{theme:"warning",variant:"outline",children:t("content.page.tab.published")}):e.jsx(i,{theme:"success",variant:"outline",children:t("content.page.tab.unpublished")})})},{colKey:"created_at",title:t("content.page.fields.createdAt"),sorter:!0,sortType:"all",width:200},{colKey:"link",title:t("table.actions"),fixed:"right",align:"center",width:120,cell:({row:l})=>e.jsxs("div",{className:"flex justify-center gap-4",children:[e.jsx(h,{rowId:l.id}),e.jsx(x,{rowId:l.id})]})}],[t]),s=o.useRef(null);return e.jsx(d,{columns:r,ref:s,tabs:[{label:t("content.page.tab.all"),value:"0"},{label:t("content.page.tab.published"),value:"1"},{label:t("content.page.tab.unpublished"),value:"2"}],batchRender:()=>{var l;return e.jsx(e.Fragment,{children:e.jsx(m,{rowIds:((l=s.current)==null?void 0:l.selecteds)||[],variant:"outline",icon:e.jsx("div",{className:"t-icon i-tabler:trash"})})})},actionRender:()=>e.jsx(b,{}),filterRender:()=>e.jsx(e.Fragment,{children:e.jsx(u,{name:"keyword",children:e.jsx(p,{})})})})};export{E as default};