import{j as e}from"./vendor-map-CavGn2Gm.js";import{R as a,r as n}from"./vendor-react-BlTfyhut.js";import{_ as m}from"./vendor-refine-N0YDYeEW.js";import{V as i,W as c,O as d}from"./modulepreload-polyfill-gnEWSMTf.js";import"./vendor-echarts-YtT1A1hM.js";import{I as p}from"./vendor-tdesign-Dl0n85Ru.js";import{a as x}from"./button-BpZyQvx9.js";import{E as u,D as f}from"./link-Cl8VaVKv.js";import"./vendor-tinymce-DBANSpiv.js";import"./vendor-lib-CW-uXUk2.js";import"./vendor-markdown-CMNXrCXk.js";import"./action-CogfU8lF.js";const L=()=>{const r=m(),l=a.useMemo(()=>[{colKey:"row-select",type:"multiple"},{colKey:"id",sorter:!0,sortType:"all",title:"ID",width:100},{colKey:"title",title:r("tools.poster.fields.title"),minWidth:200,cell:({row:t})=>{var s;return e.jsxs(i,{size:"small",children:[((s=t.images)==null?void 0:s[0])&&e.jsx(i.Image,{src:t.images}),e.jsx(i.Title,{children:t.title}),e.jsx(i.Desc,{children:t.subtitle})]})}},{colKey:"link",title:r("table.actions"),fixed:"right",align:"center",width:120,cell:({row:t})=>e.jsxs("div",{className:"flex justify-center gap-4",children:[e.jsx(u,{rowId:t.id}),e.jsx(f,{rowId:t.id})]})}],[r]),o=n.useRef(null);return e.jsx(c,{ref:o,columns:l,actionRender:()=>e.jsx(x,{}),filterRender:()=>e.jsx(e.Fragment,{children:e.jsx(d,{name:"keyword",children:e.jsx(p,{placeholder:r("tools.poster.validate.title")})})})})};export{L as default};