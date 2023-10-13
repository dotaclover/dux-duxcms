import{_ as f}from"./index-4849d83d.js";import{Y as P,ac as E,ad as K,g as c,ap as N,R as C,j as e,ab as F,a7 as o,a3 as x,af as I,J as n,a9 as h,P as L,S as k}from"./modulepreload-polyfill-d587593e.js";import{P as j}from"./index-ed80d7fc.js";const D=()=>{const t=P(),{mutate:d}=E(),{create:b,edit:v}=K(),s=c.useRef(null),[u,m]=c.useState(!1),{options:l,onSearch:y,queryResult:_}=N({resource:"tools.magicGroup",optionLabel:"label",optionValue:"id"});c.useEffect(()=>{var i,r,a;!l.length&&!u||(m(()=>!0),(a=(i=s.current)==null?void 0:i.form)==null||a.setFieldsValue({menu_id:(r=l[0])==null?void 0:r.value}))},[u,l]);const R=C.useMemo(()=>[{colKey:"row-select",type:"multiple"},{colKey:"id",sorter:!0,sortType:"all",title:"ID",width:100},{colKey:"group_label",title:t("tools.magic.fields.group"),ellipsis:!0,cell:({row:i})=>e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(F,{name:i.group_icon})," ",i.group_label||t("tools.magic.fields.unknown")]})},{colKey:"label",title:t("tools.magic.fields.label"),ellipsis:!0},{colKey:"type",title:t("tools.magic.fields.type"),ellipsis:!0,cell:({row:i})=>e.jsxs(e.Fragment,{children:[i.type==="common"&&e.jsx(o,{variant:"outline",theme:"primary",children:t("tools.magic.fields.list")}),i.type==="pages"&&e.jsx(o,{variant:"outline",theme:"warning",children:t("tools.magic.fields.pages")}),i.type==="tree"&&e.jsx(o,{variant:"outline",theme:"success",children:t("tools.magic.fields.tree")})]})},{colKey:"external",title:t("tools.magic.fields.external"),ellipsis:!0,cell:({row:i})=>e.jsx(e.Fragment,{children:i.external?e.jsx(o,{variant:"outline",theme:"danger",children:t("tools.magic.fields.private")}):e.jsx(o,{variant:"outline",theme:"primary",children:t("tools.magic.fields.public")})})},{colKey:"link",title:t("table.actions"),fixed:"right",align:"center",width:120,cell:({row:i})=>e.jsxs("div",{className:"flex justify-center gap-4",children:[e.jsx(x,{theme:"primary",onClick:()=>v("tools.magic",i.id),children:t("buttons.edit")}),e.jsx(j,{content:t("buttons.confirm"),destroyOnClose:!0,placement:"top",showArrow:!0,theme:"default",onConfirm:()=>{d({resource:"article",id:i.id})},children:e.jsx(x,{theme:"danger",children:t("buttons.delete")})})]})}],[t]);return e.jsx(I,{ref:s,columns:R,actionRender:()=>e.jsx(n,{icon:e.jsx("div",{className:"i-tabler:plus t-icon"}),onClick:()=>{b("tools.magic")},children:t("buttons.create")}),filterRender:()=>{var i,r,a,p;return e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(h,{title:t("tools.magic.fields.addGroup"),trigger:e.jsx(n,{icon:e.jsx("div",{className:"i-tabler:plus"}),variant:"outline"}),component:()=>f(()=>import("./group-7e11d440.js"),["assets/group-7e11d440.js","assets/modulepreload-polyfill-d587593e.js"])})}),e.jsx(L.FormItem,{name:"group_id",initialData:(i=l==null?void 0:l[0])==null?void 0:i.value,children:e.jsx(k,{filterable:!0,clearable:!0,onSearch:y,options:l,placeholder:t("tools.magic.placeholder.group"),loading:_.isLoading})}),((a=(r=s.current)==null?void 0:r.filters)==null?void 0:a.group_id)&&e.jsxs("div",{className:"flex gap-2",children:[e.jsx(h,{title:t("tools.magic.fields.editGroup"),trigger:e.jsx(n,{icon:e.jsx("div",{className:"i-tabler:edit"}),variant:"outline"}),component:()=>f(()=>import("./group-7e11d440.js"),["assets/group-7e11d440.js","assets/modulepreload-polyfill-d587593e.js"]),componentProps:{id:(p=s.current)==null?void 0:p.filters.group_id}}),e.jsx(j,{content:t("buttons.confirm"),destroyOnClose:!0,placement:"top",showArrow:!0,theme:"default",onConfirm:()=>{var g;d({resource:"tools.magicGroup",id:(g=s.current)==null?void 0:g.filters.group_id}),m(!1)},children:e.jsx(n,{icon:e.jsx("div",{className:"i-tabler:trash"}),variant:"outline"})})]})]})}})};export{D as default};