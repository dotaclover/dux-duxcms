function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/save-ChUbrJv-.js","assets/vendor-map-10JxgbXS.js","assets/vendor-react-CEAiij2-.js","assets/vendor-tdesign-DmncltsQ.js","assets/vendor-refine-D6iU_90Y.js","assets/modulepreload-polyfill-4Dy0yiAt.js","assets/vendor-echarts-BA2V57Gb.js","assets/vendor-tinymce-DBANSpiv.js","assets/vendor-lib-dAQ50EbT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-DpDNW0De.js";import{j as e}from"./vendor-map-10JxgbXS.js";import{A as l}from"./vendor-react-CEAiij2-.js";import{_ as s}from"./vendor-refine-D6iU_90Y.js";import{P as a}from"./modulepreload-polyfill-4Dy0yiAt.js";import"./vendor-echarts-BA2V57Gb.js";import"./vendor-tdesign-DmncltsQ.js";import{b as m}from"./button-CawO_UED.js";import{a as n,D as p}from"./link-Dp5tK8pq.js";import"./vendor-tinymce-DBANSpiv.js";import"./vendor-lib-dAQ50EbT.js";import"./action-D2DF2Cqd.js";const L=()=>{const t=s(),i=l.useMemo(()=>[{colKey:"id",sorter:!0,sortType:"all",title:"ID",width:150},{colKey:"from",title:t("content.replace.fields.from"),ellipsis:!0},{colKey:"to",title:t("content.replace.fields.to"),ellipsis:!0},{colKey:"link",title:t("table.actions"),fixed:"right",align:"center",width:160,cell:({row:o})=>e.jsxs("div",{className:"flex justify-center gap-4",children:[e.jsx(n,{rowId:o.id,component:()=>r(()=>import("./save-ChUbrJv-.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))}),e.jsx(p,{rowId:o.id})]})}],[t]);return e.jsx(a,{columns:i,table:{rowKey:"id"},title:t("content.replace.name"),actionRender:()=>e.jsx(m,{component:()=>r(()=>import("./save-ChUbrJv-.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))})})};export{L as default};