import{j as s}from"./vendor-map-DjDVTs0N.js";import{r as u}from"./vendor-react-BlTfyhut.js";import{ax as B,G as D,A as L}from"./vendor-refine-BK41FXO6.js";import{E as P,M as z,W as E,a as g,m as M}from"./modulepreload-polyfill-D6ThnDFs.js";import"./vendor-echarts-JHGMnnew.js";import{F as b,B as l,ai as A,aj as G,ak as H,al as S,P as V,am as W}from"./vendor-tdesign-BxQoi5Mo.js";import"./vendor-tinymce-lUkVC9Da.js";import"./vendor-lib-CKVa3D7Q.js";const U=({className:t,title:c,children:d,onSubmit:n,onResult:x,back:v,rest:k,headerRender:F,actionRender:N,settingRender:f,formProps:C,form:I,...o})=>{const[e,w]=u.useState(),p=B(),i=D(),{resource:a}=L(),{name:j}=P(),[y,h]=u.useState(!1),[r]=b.useForm(I);return s.jsx(z,{title:c,header:F,actions:s.jsxs(s.Fragment,{children:[v&&s.jsx(l,{onClick:()=>{p()},variant:"outline",icon:s.jsx(A,{}),children:i("buttons.back")}),k&&s.jsx(l,{onClick:()=>{r.reset()},variant:"outline",icon:s.jsx(G,{}),loading:!!(e!=null&&e.formLoading),children:i("buttons.rest")}),N,f&&s.jsx(l,{variant:"outline",theme:"primary",icon:s.jsx(H,{}),onClick:()=>h(!0),children:i("buttons.setting")}),s.jsx(l,{onClick:()=>{r.submit()},loading:!!(e!=null&&e.formLoading),icon:s.jsx(S,{}),children:i("buttons.save")})]}),children:s.jsx(V,{className:t,children:s.jsxs(E,{form:r,onResult:m=>{x==null||x(m),w(m)},onSubmit:async m=>{await(n==null?void 0:n(m)),!(o!=null&&o.id)&&v&&p()},formProps:{labelAlign:"left",className:"divide-y divide-gray-2 dark:divide-gray-10",...C},...o,children:[s.jsx(g.Render,{mark:[j,a==null?void 0:a.name,"formBefore"]}),d,s.jsx(g.Render,{mark:[j,a==null?void 0:a.name,"form"]}),f&&s.jsxs(W,{sizeDraggable:!0,size:"450px",confirmBtn:i("buttons.save"),onConfirm:()=>{h(!1),r.submit()},header:i("buttons.setting"),visible:y,onClose:()=>h(!1),children:[f,s.jsx(g.Render,{mark:[j,a==null?void 0:a.name,"form","setting"]})]})]})})})},X=({label:t,help:c,requiredMark:d,...n})=>s.jsxs("div",{className:"grid grid-cols-1 mb-4 gap-4 pt-4 md:grid-cols-5",children:[t&&s.jsxs("div",{className:"col-span-2 xl:col-span-1",children:[s.jsxs("div",{className:"relative",children:[d&&s.jsx("span",{className:"absolute text-error -left-3",children:"*"}),t]}),s.jsx("div",{className:"mt-1 text-sm text-placeholder",children:c})]}),s.jsx("div",{className:M([t?"flex items-center col-span-3 xl:col-span-4":"col-span-5"]),children:s.jsx(b.FormItem,{...n,className:"w-full"})})]});export{U as F,X as a};