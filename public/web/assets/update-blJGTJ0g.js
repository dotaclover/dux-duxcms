import{j as s}from"./vendor-map-xrlPGoMd.js";import{r as o}from"./vendor-react-CEAiij2-.js";import{_ as j}from"./vendor-refine-BPS4QmKj.js";import{y as g,W as h,B as f}from"./modulepreload-polyfill-DuwZr_J0.js";import"./vendor-echarts-BA2V57Gb.js";import{G as v,d as i,B as c,c as Y}from"./vendor-tdesign-CDUa2Lvz.js";import"./vendor-tinymce-DBANSpiv.js";import"./vendor-lib-DkJHNO_p.js";import"./vendor-markdown-BG3k-yNs.js";const F=({data:a})=>{const t=j(),m=g(),[d,r]=o.useState(!1),[l,p]=o.useState(""),{onClose:u}=h(),x=o.useCallback(()=>{r(!0),m.request("cloud/apps/update","post",{data:{name:a.name}}).then(e=>{var n;if(e.code!==200){v.error(e.message);return}p((n=e==null?void 0:e.data)==null?void 0:n.content)}).finally(()=>{r(!1)})},[]);return s.jsxs(s.Fragment,{children:[l?s.jsx("div",{className:"p-4",children:s.jsx("pre",{className:"overflow-auto rounded-lg p-4 bg-component",children:l})}):s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"p-4",children:[s.jsx("div",{className:"mb-2",children:t("cloud.apps.tips.update")}),s.jsxs("div",{className:"mb-2",children:["当前版本：",i(a.local_time*1e3).format("YYYY-MM-DD HH:mm:ss")]}),s.jsxs("div",{children:["最新版本：",s.jsx("span",{className:"text-error",children:i(a.time*1e3).format("YYYY-MM-DD HH:mm:ss")})]})]}),s.jsxs(f.Footer,{children:[s.jsx(c,{variant:"outline",onClick:u,children:t("cloud.apps.action.close")}),s.jsx(c,{onClick:()=>{x()},children:t("cloud.apps.action.update")})]})]}),s.jsx(Y,{loading:d,fullscreen:!0,preventScrollThrough:!0,text:t("cloud.apps.tips.loading")})]})};export{F as default};