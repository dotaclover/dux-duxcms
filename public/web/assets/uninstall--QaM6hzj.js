import{j as s}from"./vendor-map-CavGn2Gm.js";import{r as a}from"./vendor-react-BlTfyhut.js";import{_ as g}from"./vendor-refine-N0YDYeEW.js";import{H as j,I as f}from"./modulepreload-polyfill-gnEWSMTf.js";import"./vendor-echarts-YtT1A1hM.js";import{G as v,I as b,a2 as N,B as S,c as w}from"./vendor-tdesign-Dl0n85Ru.js";import"./vendor-tinymce-DBANSpiv.js";import"./vendor-lib-CW-uXUk2.js";import"./vendor-markdown-CMNXrCXk.js";const M=({name:d})=>{const t=g(),[l,c]=a.useState(""),[r,p]=a.useState(!1),u=j(),[m,n]=a.useState(!1),[o,x]=a.useState(""),h=a.useCallback(()=>{n(!0),u.request("cloud/apps/delete","post",{data:{name:d,password:l,build:r}}).then(e=>{var i;if(e.code!==200){v.error(e.message);return}x((i=e==null?void 0:e.data)==null?void 0:i.content)}).finally(()=>{n(!1)})},[]);return s.jsxs(s.Fragment,{children:[s.jsxs("div",{className:"p-4",children:[s.jsx("div",{className:"mb-2 text-error",children:t("cloud.apps.tips.uninstall")}),s.jsx(b,{type:"password",value:l,disabled:!!o,onChange:e=>{c(()=>e)}})]}),s.jsxs("div",{className:"p-4",children:[s.jsx("div",{className:"mb-2",children:t("cloud.apps.validator.build")}),s.jsx(N,{value:r,onChange:e=>p(e)}),s.jsx("div",{className:"mt-2 text-placeholder",children:t("cloud.apps.help.build")})]}),o?s.jsx("div",{className:"p-4",children:s.jsx("pre",{className:"overflow-auto rounded-lg p-4 bg-component",children:o})}):s.jsx(f.Footer,{children:s.jsx(S,{onClick:()=>{h()},children:t("cloud.apps.action.uninstall")})}),s.jsx(w,{loading:m,fullscreen:!0,preventScrollThrough:!0,text:t("cloud.apps.tips.loading")})]})};export{M as default};