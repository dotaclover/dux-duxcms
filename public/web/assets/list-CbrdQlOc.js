function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/save-Bdslj-UE.js","assets/modulepreload-polyfill-DkiKXnSB.js","assets/index-BhHJHqY3.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as l}from"./index-CInEZ-VQ.js";import{a9 as i,j as s,$ as d,a0 as o,aa as x,ab as h,X as j,a5 as m,ac as u,a6 as f,J as p,ad as n,a8 as r}from"./modulepreload-polyfill-DkiKXnSB.js";import{C as g,E as v}from"./button-D0ULnvDG.js";import"./action-BYcpOc6q.js";import"./index-BEGpCFfB.js";const I=()=>{const{data:e,refetch:t}=i({});return s.jsx(d,{children:s.jsx("div",{className:"mb-4",children:e&&e.length>0?s.jsx("div",{className:"grid grid-cols-2 gap-4 2xl:grid-cols-4 xl:grid-cols-3",children:e==null?void 0:e.map((c,a)=>s.jsx(N,{item:c,refetch:t},a))}):s.jsx(o,{children:s.jsx(x,{})})})})},N=({item:e,refetch:t})=>{const{mutate:c}=h(),a=j();return s.jsx(o,{title:e==null?void 0:e.name,actions:s.jsx(m,{theme:"success",children:a("cms.theme.default")}),bordered:!0,cover:s.jsx(u,{src:e==null?void 0:e.image,className:"h-50"}),footer:s.jsxs("div",{className:"grid grid-cols-3 items-center justify-between divide-x divide-gray-200",children:[s.jsx("div",{className:"flex justify-center",children:s.jsx(f,{title:a("cms.theme.info"),trigger:s.jsx(p,{variant:"text",children:s.jsx(n,{content:a("cms.theme.info"),children:s.jsx(r,{name:"help-circle"})})}),children:s.jsx("div",{className:"p-4",children:(e==null?void 0:e.help)||a("cms.theme.empty")})})}),s.jsx("div",{className:"flex justify-center",children:s.jsx(g,{onConfirm:()=>{c({url:`cms/theme/${e==null?void 0:e.id}`,method:"patch",values:{},successNotification:()=>(t==null||t(),!1)})},variant:"text",action:"store",children:s.jsx(n,{content:a("cms.theme.change"),children:s.jsx(r,{name:"component-switch"})})})}),s.jsx("div",{className:"flex justify-center",children:s.jsx(v,{component:()=>l(()=>import("./save-Bdslj-UE.js"),__vite__mapDeps([0,1,2])),rowId:e==null?void 0:e.id,title:a("cms.theme.config"),variant:"text",theme:"default",children:s.jsx(n,{content:a("cms.theme.config"),children:s.jsx(r,{name:"edit-1"})})})})]})})};export{I as default};
