import{ah as m,Y as c,ai as d,$ as g,j as e,aj as p,ak as u,al as j,P as s,Q as l,am as x,an as i,ao as h}from"./modulepreload-polyfill-d587593e.js";const f=()=>{const r=m(),a=c(),{id:o}=d(),{data:n,isLoading:b}=g({resource:"content.category"});return n!=null&&n.data,e.jsxs(p,{formProps:{labelAlign:"top"},back:!0,id:o,initFormat:t=>(t.image=u(t.image),t),saveFormat:t=>(t.image=j(t.image),t),settingRender:e.jsxs(e.Fragment,{children:[e.jsx(s.FormItem,{label:a("content.page.fields.name"),name:"name",children:e.jsx(l,{})}),e.jsx(s.FormItem,{label:a("content.page.fields.subtitle"),name:"subtitle",children:e.jsx(l,{})}),e.jsx(s.FormItem,{label:a("content.page.fields.image"),name:"image",children:e.jsx(x,{...r,theme:"image",accept:"image/*"})}),e.jsx(s.FormItem,{label:a("content.page.fields.status"),name:"status",initialData:!0,children:e.jsxs(i.Group,{children:[e.jsx(i,{value:!0,children:a("content.page.tab.published")}),e.jsx(i,{value:!1,children:a("content.page.tab.unpublished")})]})})]}),children:[e.jsx(s.FormItem,{name:"title",children:e.jsx(l,{size:"large",placeholder:a("content.page.validate.title")})}),e.jsx(s.FormItem,{name:"content",children:e.jsx(h,{})})]})};export{f as default};