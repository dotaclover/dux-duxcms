function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/save-B-MoAC77.js","assets/vendor-map-xrlPGoMd.js","assets/vendor-react-CEAiij2-.js","assets/vendor-tdesign-CDUa2Lvz.js","assets/vendor-refine-BPS4QmKj.js","assets/modulepreload-polyfill-DuwZr_J0.js","assets/vendor-echarts-BA2V57Gb.js","assets/vendor-tinymce-DBANSpiv.js","assets/vendor-markdown-BG3k-yNs.js","assets/vendor-lib-DkJHNO_p.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./vendor-markdown-BG3k-yNs.js";import{j as e}from"./vendor-map-xrlPGoMd.js";import{A as l}from"./vendor-react-CEAiij2-.js";import{_ as s}from"./vendor-refine-BPS4QmKj.js";import{P as a}from"./modulepreload-polyfill-DuwZr_J0.js";import"./vendor-echarts-BA2V57Gb.js";import"./vendor-tdesign-CDUa2Lvz.js";import{b as m}from"./button-BG1z6bng.js";import{a as n,D as p}from"./link-Bwn5aYx5.js";import"./vendor-tinymce-DBANSpiv.js";import"./vendor-lib-DkJHNO_p.js";import"./action-Dcsrtdbk.js";const L=()=>{const t=s(),i=l.useMemo(()=>[{colKey:"id",sorter:!0,sortType:"all",title:"ID",width:150},{colKey:"from",title:t("content.replace.fields.from"),ellipsis:!0},{colKey:"to",title:t("content.replace.fields.to"),ellipsis:!0},{colKey:"link",title:t("table.actions"),fixed:"right",align:"center",width:160,cell:({row:o})=>e.jsxs("div",{className:"flex justify-center gap-4",children:[e.jsx(n,{rowId:o.id,component:()=>r(()=>import("./save-B-MoAC77.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))}),e.jsx(p,{rowId:o.id})]})}],[t]);return e.jsx(a,{columns:i,table:{rowKey:"id"},title:t("content.replace.name"),actionRender:()=>e.jsx(m,{component:()=>r(()=>import("./save-B-MoAC77.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))})})};export{L as default};