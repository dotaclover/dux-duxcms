import{U as i,j as e,bH as u,O as a,S as c,P as t}from"./modulepreload-polyfill-ac150c65.js";import{u as x}from"./useSelect-e9bae78c.js";import{u as d,f as j,g as p,U as f}from"./useUpload-c49e3844.js";import{S as h}from"./index-c55b5791.js";const g=m=>{const r=i(),l=d(),{options:o,onSearch:n}=x({resource:"system.role",optionLabel:"name",optionValue:"id"});return e.jsxs(u,{id:m==null?void 0:m.id,initFormat:s=>(s.avatar=j(s==null?void 0:s.avatar),s),saveFormat:s=>(s.avatar=p(s==null?void 0:s.avatar),s),children:[e.jsx(a.FormItem,{label:r("system.user.fields.roles"),name:"roles",children:e.jsx(c,{filterable:!0,onSearch:n,options:o,multiple:!0})}),e.jsx(a.FormItem,{label:r("system.user.fields.username"),name:"username",children:e.jsx(t,{})}),e.jsx(a.FormItem,{label:r("system.user.fields.nickname"),name:"nickname",children:e.jsx(t,{})}),e.jsx(a.FormItem,{label:r("system.user.fields.avatar"),name:"avatar",children:e.jsx(f,{...l,theme:"image",accept:"image/*"})}),e.jsx(a.FormItem,{label:r("system.user.fields.password"),name:"password",children:e.jsx(t,{type:"password",autocomplete:"new-password"})}),e.jsx(a.FormItem,{label:r("system.user.fields.status"),name:"status",children:e.jsx(h,{})})]})};export{g as default};