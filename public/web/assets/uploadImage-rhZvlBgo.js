import{j as f}from"./vendor-map-Dmo-f729.js";import{u as x}from"./useUpload-DedY0J-X.js";import{G as g}from"./modulepreload-polyfill-BJI5hq6_.js";import{r as U}from"./vendor-react-CEAiij2-.js";import{aa as d}from"./vendor-tdesign-Bh4nsAtR.js";const E=({className:e,value:m,defaultValue:n,onChange:p,multiple:o,...i})=>{const u=x(),[r,s]=g({value:m,defaultValue:n,onChange:p}),l=U.useMemo(()=>r?Array.isArray(r)?r.map(t=>({url:t})):[{url:r}]:[],[r]);return f.jsx(d,{className:e,files:l,theme:"image",accept:"image/*",onChange:t=>{const a=t==null?void 0:t.map(c=>c.url);s(o?a:a==null?void 0:a[0])},multiple:o,...u,...i})};export{E as U};