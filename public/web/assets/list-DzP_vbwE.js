function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/save-BXja6bny.js","assets/vendor-map-DEYI1At9.js","assets/vendor-react-BlTfyhut.js","assets/vendor-tdesign-6RiSygsd.js","assets/vendor-refine-N0YDYeEW.js","assets/modulepreload-polyfill-tcKnMOR4.js","assets/vendor-echarts-YtT1A1hM.js","assets/vendor-tinymce-DkQhX6vO.js","assets/vendor-markdown-DVvl3HyZ.js","assets/vendor-lib-DKIH9BQe.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./vendor-markdown-DVvl3HyZ.js";import{j as t}from"./vendor-map-DEYI1At9.js";import{R as s}from"./vendor-react-BlTfyhut.js";import{_ as m}from"./vendor-refine-N0YDYeEW.js";import{X as a}from"./modulepreload-polyfill-tcKnMOR4.js";import"./vendor-echarts-YtT1A1hM.js";import"./vendor-tdesign-6RiSygsd.js";import{b as l}from"./button-DQspp17Z.js";import{a as n,D as p}from"./link-DRJ3FwmT.js";import"./vendor-tinymce-DkQhX6vO.js";import"./vendor-lib-DKIH9BQe.js";import"./action-CjvHrvxx.js";const L=()=>{const e=m(),i=s.useMemo(()=>[{colKey:"id",sorter:!0,sortType:"all",title:"ID",width:150},{colKey:"name",title:e("system.role.fields.name"),ellipsis:!0},{colKey:"link",title:e("table.actions"),fixed:"right",align:"center",width:160,cell:({row:o})=>t.jsxs("div",{className:"flex justify-center gap-4",children:[t.jsx(n,{rowId:o.id,component:()=>r(()=>import("./save-BXja6bny.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))}),t.jsx(p,{rowId:o.id})]})}],[e]);return t.jsx(a,{columns:i,table:{rowKey:"id"},title:e("system.role.name"),actionRender:()=>t.jsx(l,{component:()=>r(()=>import("./save-BXja6bny.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]))})})};export{L as default};