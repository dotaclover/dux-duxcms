function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/show-Be8V5nz3.js","assets/vendor-map-DEYI1At9.js","assets/vendor-react-BlTfyhut.js","assets/vendor-tdesign-6RiSygsd.js","assets/vendor-refine-N0YDYeEW.js","assets/modulepreload-polyfill-tcKnMOR4.js","assets/vendor-echarts-YtT1A1hM.js","assets/vendor-tinymce-DkQhX6vO.js","assets/vendor-markdown-DVvl3HyZ.js","assets/vendor-lib-DKIH9BQe.js","assets/index-9cKyzMUZ.js","assets/useSelect-COj1vjfo.js","assets/cascader-DEwlaN_5.js","assets/uploadFile-9FMRXHlZ.js","assets/useUpload-BJcnr-Oo.js","assets/tinymce-BHJhxTDu.js","assets/manage-Dqx7gNgS.js","assets/modal-CvCWftZC.js","assets/form-DQw0GCge.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as j}from"./vendor-markdown-DVvl3HyZ.js";import{j as o}from"./vendor-map-DEYI1At9.js";import{R as _,r as y}from"./vendor-react-BlTfyhut.js";import{_ as v,ax as k,aw as T,D as E,ar as F,W as M}from"./vendor-refine-N0YDYeEW.js";import{J as R,X as C}from"./modulepreload-polyfill-tcKnMOR4.js";import"./vendor-echarts-YtT1A1hM.js";import{y as x,ag as w,B as P}from"./vendor-tdesign-6RiSygsd.js";import{F as D}from"./page-9WQXG9nb.js";import"./vendor-tinymce-DkQhX6vO.js";import"./vendor-lib-DKIH9BQe.js";import{b as I,c as L,d as A,e as O,f as N,g as q,h as S,i as K,j as V,k as B,l as H,m as J,n as W,o as X,p as z,q as G,r as Q,s as U,t as Y,v as Z,w as $}from"./index-9cKyzMUZ.js";import{M as ee}from"./form-DQw0GCge.js";import"./useSelect-COj1vjfo.js";import"./cascader-DEwlaN_5.js";import"./uploadFile-9FMRXHlZ.js";import"./useUpload-BJcnr-Oo.js";import"./tinymce-BHJhxTDu.js";import"./manage-Dqx7gNgS.js";const te=({magic:e,editResource:t,fields:r,componentEdit:l,componentShow:c})=>{const m=[I(),L(),A(),O(),N(),q(),S(),K(),V(),B(),H(),J(),W(),X(),z(),G(),Q(),U(),Y(),Z(),$()],n=v(),{mutate:f}=k(),{edit:g}=T(),h=_.useMemo(()=>{const a=[];r==null||r.map(s=>{m.map(d=>{!d||!s.list||d.name!=s.type||a.push(d.TableRender(s,n))})});const u=[{colKey:"link",title:n("table.actions"),fixed:"right",align:"center",width:160,cell:({row:s})=>o.jsxs("div",{className:"flex justify-center gap-4",children:[o.jsx(R,{title:n("buttons.show"),trigger:o.jsx(x,{theme:"primary",children:n("buttons.show")}),component:c,componentProps:{id:s.id,magic:e}}),t?o.jsx(x,{theme:"primary",onClick:()=>g(t,s.id),children:n("buttons.edit")}):o.jsx(R,{title:n("buttons.edit"),trigger:o.jsx(x,{theme:"primary",children:n("buttons.edit")}),component:l,componentProps:{id:s.id,magic:e}}),o.jsx(w,{content:n("buttons.confirm"),destroyOnClose:!0,placement:"top",showArrow:!0,theme:"default",onConfirm:()=>{f({resource:"tools.data",id:s.id,meta:{params:{magic:e}}})},children:o.jsx(x,{theme:"danger",children:n("buttons.delete")})})]})}];return[...a,...u]},[r]),i=_.useMemo(()=>{var u;const a=(u=r==null?void 0:r.map((s,d)=>{if(!(s!=null&&s.search))return;const b=m.find(p=>p&&p.name==s.type&&(p==null?void 0:p.FilterRender));if(!(!b||!b.FilterRender))return o.jsx(b.FilterRender,{...s},d)}))==null?void 0:u.filter(s=>s!=null);return a&&a.length>0?o.jsx(o.Fragment,{children:a}):void 0},[r]);return{columns:h,filters:i}},oe=({data:e})=>{var g,h;const{params:t}=E(),r=v(),{create:l}=T(),{resource:c}=M(),{columns:m,filters:n}=te({fields:(g=e==null?void 0:e.data)==null?void 0:g.fields,magic:t==null?void 0:t.name,editResource:(h=e==null?void 0:e.data)!=null&&h.page?"tools.data":void 0,componentShow:()=>j(()=>import("./show-Be8V5nz3.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16])),componentEdit:()=>j(()=>import("./modal-CvCWftZC.js"),__vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18]))});y.useEffect(()=>{var i;c!=null&&c.meta&&(c.meta.label=(i=e==null?void 0:e.data)==null?void 0:i.label)},[e]);const f=y.useMemo(()=>{var a,u;const i={rowKey:"id"};return((a=e==null?void 0:e.data)==null?void 0:a.type)=="common"&&(i.pagination=void 0),((u=e==null?void 0:e.data)==null?void 0:u.type)=="tree"&&(i.tree={childrenKey:"children",treeNodeColumnIndex:0,defaultExpandAll:!0},i.pagination=void 0),i},[e]);return o.jsx(C,{columns:m,tableHook:{meta:{params:{magic:t==null?void 0:t.name,action:"show"}}},table:f,actionRender:()=>{var i;return(i=e==null?void 0:e.data)!=null&&i.page?o.jsx(P,{icon:o.jsx("div",{className:"t-icon i-tabler:plus"}),onClick:()=>{l("tools.data")},children:r("buttons.create")}):o.jsx(R,{title:r("buttons.create"),trigger:o.jsx(P,{icon:o.jsx("div",{className:"t-icon i-tabler:plus"}),children:r("buttons.create")}),component:()=>j(()=>import("./modal-CvCWftZC.js"),__vite__mapDeps([17,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,18])),componentProps:{magic:t==null?void 0:t.name}})},filterRender:n?()=>n:void 0})},re=()=>{var l,c,m;const{params:e}=E(),{resource:t}=M(),{data:r}=F({url:"tools/magic/config",method:"get",meta:{params:{magic:e==null?void 0:e.name}},queryOptions:{cacheTime:0}});return t!=null&&t.meta&&(t.meta.label=(l=r==null?void 0:r.data)==null?void 0:l.label),o.jsx(D,{formProps:{labelAlign:"top"},resource:"tools.dataPage",back:!0,id:0,action:"edit",useFormProps:{meta:{mode:"page"},queryOptions:{cacheTime:0}},queryParams:{magic:e==null?void 0:e.name},children:o.jsx("div",{children:((c=r==null?void 0:r.data)==null?void 0:c.fields)&&o.jsx(ee,{fields:(m=r==null?void 0:r.data)==null?void 0:m.fields})})})},se=()=>{const{params:e}=E(),{data:t}=F({url:"tools/magic/config",method:"get",meta:{params:{magic:e==null?void 0:e.name}}});return(t==null?void 0:t.code)!==200?null:t.data.type==="page"?o.jsx(re,{}):o.jsx(oe,{data:t})},ye=()=>{const{params:e}=E();return o.jsx(se,{},e==null?void 0:e.name)};export{ye as default};