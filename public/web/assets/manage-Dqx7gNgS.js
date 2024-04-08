import{j as e}from"./vendor-map-DEYI1At9.js";import{S as _,m as j}from"./modulepreload-polyfill-tcKnMOR4.js";import{r as x}from"./vendor-react-BlTfyhut.js";import{_ as Q,ar as L,O as T}from"./vendor-refine-N0YDYeEW.js";import{u as W}from"./useUpload-BJcnr-Oo.js";import"./vendor-echarts-YtT1A1hM.js";import{W as G,B as c,ag as R,o as u,ac as H,I as J,Q as K,b as y,N as V}from"./vendor-tdesign-6RiSygsd.js";import"./vendor-tinymce-DkQhX6vO.js";import"./vendor-lib-DKIH9BQe.js";const de=({mode:a="single",accept:d,onChange:p,onClose:o})=>{var C,$,M,I;const[r,i]=x.useState([]),[m,v]=x.useState(0),[k,U]=x.useState(1),[B,g]=x.useState(!1),[S,N]=x.useState(""),[O,F]=x.useState(!1),q=W(),{config:h}=_(),t=Q(),{data:A,isLoading:D,refetch:P}=L({method:"get",url:h.apiPath.uploadManage||"upload/manage",meta:{params:{type:"files",id:m,page:k,accept:d}}}),l=A,{data:b,refetch:z}=L({method:"get",url:h.apiPath.uploadManage||"upload/manage",meta:{params:{type:"folder"}}}),{mutate:w}=T();return e.jsxs("div",{className:"app-file-manage h-580px flex",children:[e.jsxs("div",{className:"w-45 flex flex-none flex-col border-r border-component",children:[e.jsx("div",{className:"flex-none p-3",children:e.jsx(G,{...q,accept:d,theme:"file",fileListDisplay:e.jsx(e.Fragment,{}),trigger:e.jsx(c,{block:!0,loading:O,children:t("fields.upload",{ns:"file"})}),beforeAllFilesUpload:()=>(F(!0),!0),onSuccess:()=>{F(!1),P()},multiple:!0,formatRequest:s=>(s.dir_id=m,s)})}),e.jsx("div",{className:"flex-1 overflow-auto border-t border-component",children:e.jsxs("ul",{className:"flex flex-col gap-2 p-2",children:[e.jsx("li",{className:j(["block cursor-pointer rounded px-2 py-1.2 hover:bg-component",m?"":"text-brand"]),onClick:()=>{v(0),i([])},children:t("fields.all",{ns:"file"})}),(C=b==null?void 0:b.data)==null?void 0:C.map((s,n)=>e.jsxs("li",{className:j(["block cursor-pointer rounded px-2 py-1.2 hover:bg-component flex group",m==s.id?"text-brand":""]),children:[e.jsx("div",{className:"w-0 flex-1",onClick:()=>{v(s.id),i([])},children:s.name}),e.jsx("div",{className:"invisible flex flex-none items-center text-primary group-hover:visible hover:text-error",children:e.jsx(R,{content:"确认删除目录吗？",onConfirm:()=>{w({method:"delete",url:h.apiPath.uploadManage||"upload/manage",values:{},meta:{params:{id:s.id,type:"folder-delete"}}},{onSuccess(){m==s.id&&v(0),z()}})},children:e.jsx(u,{name:"close"})})})]},n)),e.jsx("li",{children:e.jsx(H,{showArrow:!0,trigger:"click",destroyOnClose:!0,visible:B,content:e.jsxs("div",{className:"flex gap-2 px-1 py-2",children:[e.jsx("div",{className:"flex-1",children:e.jsx(J,{placeholder:t("placeholder.dirName",{ns:"file"}),value:S,onChange:s=>N(s)})}),e.jsx("div",{className:"flex-none",children:e.jsx(c,{theme:"default",shape:"square",variant:"base",onClick:()=>{g(!1),w({method:"post",url:h.apiPath.uploadManage||"upload/manage",values:{name:S},meta:{params:{type:"folder-create"}}},{onSuccess(){i([]),N(""),z()}})},children:e.jsx(u,{name:"check"})})}),e.jsx("div",{className:"flex-none",children:e.jsx(c,{theme:"danger",shape:"square",variant:"base",onClick:()=>{g(!1),N("")},children:e.jsx(u,{name:"close"})})})]}),children:e.jsx(c,{theme:"default",variant:"dashed",className:"w-full",onClick:()=>{g(!0)},children:t("fields.create",{ns:"file"})})})})]})})]}),e.jsxs("div",{className:"w-0 flex flex-1 flex-col",children:[e.jsx("div",{className:"flex-1 overflow-auto p-3",children:D?e.jsx("div",{className:"h-450px",children:e.jsx("div",{className:"grid grid-cols-4 gap-3",children:[1,2,3,4].map((s,n)=>e.jsx(X,{},n))})}):e.jsx(e.Fragment,{children:(($=l==null?void 0:l.data)==null?void 0:$.length)>0?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"h-450px",children:e.jsx("div",{className:"grid lg:grid-cols-4 grid-cols-2 gap-3",children:(M=l==null?void 0:l.data)==null?void 0:M.map((s,n)=>e.jsx(Y,{active:r.includes(s.id),title:s.name,url:s.url,size:s.size,mime:s.mime,onClick:()=>{i(f=>f.includes(s.id)?f.filter(E=>E!=s.id):a=="single"?[s.id]:[...f,s.id])}},n))})}),e.jsx("div",{className:"mt-4",children:e.jsx(K,{total:((I=l==null?void 0:l.meta)==null?void 0:I.total)||0,pageSizeOptions:[],pageSize:12,current:k,onChange:s=>{U(s.current),i([])}})})]}):e.jsx("div",{className:"h-450px flex items-center justify-center",children:e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("div",{children:e.jsx(u,{name:"application",size:80})}),e.jsx("div",{className:"mt-4 text-base text-primary",children:t("placeholder.noData",{ns:"file"})}),e.jsx("div",{className:"text-sm",children:t("placeholder.noDataDesc",{ns:"file"})})]})})})}),e.jsxs("div",{className:"flex justify-between border-t p-3 border-component",children:[e.jsx("div",{children:r.length>0&&e.jsx(R,{content:t("placeholder.delete",{ns:"file"}),onConfirm:()=>{w({method:"delete",url:h.apiPath.uploadManage||"upload/manage",values:{},meta:{params:{id:r.join(","),type:"files-delete"}}},{onSuccess(){i([]),P()}})},children:e.jsx(c,{shape:"circle",theme:"danger",variant:"outline",icon:e.jsx(u,{name:"delete"})})})}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(c,{variant:"outline",onClick:o,children:t("fields.cancel",{ns:"file"})}),e.jsx(c,{disabled:r.length<=0,onClick:()=>{var n;const s=(n=l==null?void 0:l.data)==null?void 0:n.filter(f=>r.includes(f.id));p==null||p(s),o==null||o()},children:t("fields.confirm",{ns:"file"})})]})]})]})]})},X=()=>e.jsxs("div",{className:j(["cursor-pointer overflow-hidden border rounded p-2 hover:border-brand border-component"]),children:[e.jsx("div",{className:"relative h-20",children:e.jsx(y,{animation:"flashed",className:"h-full w-full",children:" "})}),e.jsxs("div",{className:"mt-1 flex flex-col gap-0.5 px-1",children:[e.jsx("div",{className:"truncate text-sm text-primary",children:e.jsx(y,{animation:"flashed",children:" "})}),e.jsx("div",{className:"text-xs text-secondary",children:e.jsx(y,{animation:"flashed",children:" "})})]})]}),Y=({title:a,size:d,url:p,mime:o,active:r,onClick:i})=>e.jsxs("div",{className:j(["cursor-pointer overflow-hidden border rounded p-2 hover:border-brand",r?"border-brand":"border-component"]),onClick:i,children:[e.jsxs("div",{className:"relative h-20",children:[e.jsx(Z,{mime:o,url:p}),r&&e.jsx("div",{className:"absolute z-1 h-10 w-10 flex rotate-45 items-end justify-center bg-brand -right-7 -top-7",children:e.jsx("div",{className:"i-tabler:check text-white -rotate-45"})})]}),e.jsxs("div",{className:"mt-1 flex flex-col gap-0.5 px-1",children:[e.jsx("div",{className:"truncate text-sm text-primary",title:a,children:a}),e.jsx("div",{className:"text-xs text-secondary",children:d})]})]}),Z=({mime:a="",url:d})=>{switch(!0){case/^image\//.test(a):return e.jsx(V,{className:"bg-component",src:d,fit:"contain",style:{height:"100%"}});case/^video\//.test(a):return e.jsx("div",{className:"h-full w-full flex items-center justify-center rounded p-2 text-white bg-success",children:e.jsx("div",{className:"i-tabler:video h-6 w-6"})});case/^music\//.test(a):return e.jsx("div",{className:"h-full w-full flex items-center justify-center rounded p-2 text-white bg-warning",children:e.jsx("div",{className:"i-tabler:audio h-6 w-6"})});case/^application\/pdf$/.test(a):return e.jsx("div",{className:"h-full w-full flex items-center justify-center rounded p-2 text-white bg-error",children:e.jsx("div",{className:"i-tabler:pdf h-6 w-6"})});case/^application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document$/.test(a):case/^application\/msword$/.test(a):return e.jsx("div",{className:"h-full w-full flex items-center justify-center rounded p-2 text-white bg-brand",children:e.jsx("div",{className:"i-tabler:file-type-doc h-6 w-6"})});case/^application\/vnd\.openxmlformats-officedocument\.spreadsheetml\.sheet$/.test(a):case/^application\/vnd\.ms-excel$/.test(a):return e.jsx("div",{className:"h-full w-full flex items-center justify-center rounded p-2 text-white bg-brand",children:e.jsx("div",{className:"i-tabler:file-type-xls h-6 w-6"})});case/^application\/zip$/.test(a):case/^application\/x-rar-compressed$/.test(a):case/^application\/x-7z-compressed$/.test(a):return e.jsx("div",{className:"h-full w-full flex items-center justify-center rounded p-2 text-white bg-brand",children:e.jsx("div",{className:"i-tabler:file-zip h-6 w-6"})});default:return e.jsx("div",{className:"h-full w-full flex items-center justify-center rounded p-2 text-white bg-brand",children:e.jsx("div",{className:"i-tabler:file-unknown h-6 w-6"})})}};export{de as F};
