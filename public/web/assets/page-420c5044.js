import{av as g,ap as b,U as u,a4 as x,a5 as j,j as o,O as y}from"./modulepreload-polyfill-ac2ad948.js";import{F}from"./page-dcd37b5d.js";import"./index-9b4a0878.js";import{M as h}from"./form-c049bf47.js";import{C as P}from"./index-9069c2b5.js";import"./index-59628e3a.js";import"./index-62e98837.js";import"./cascader-4c2f272d.js";import"./useUpload-1230eea6.js";import"./index-b453100f.js";import"./uploadFile-3289d450.js";import"./tinymce-fa480739.js";import"./manage-1e10d394.js";import"./index-952c5e1d.js";const U=()=>{var m,i,l,n,p;const{id:c,params:e}=g(),{resource:t}=b(),d=u(),r=e==null?void 0:e.name,{data:a}=x({url:"tools/magic/config",method:"get",meta:{params:{magic:r}}});t!=null&&t.meta&&(t.meta.label=(m=a==null?void 0:a.data)==null?void 0:m.label);const{data:s,isLoading:f}=j({resource:"tools.data",meta:{params:{magic:r}},pagination:{mode:"off"}});return o.jsxs(F,{formProps:{labelAlign:"top"},back:!0,id:c,queryParams:{magic:r},children:[((i=a==null?void 0:a.data)==null?void 0:i.type)=="tree"&&o.jsx(y.FormItem,{label:d("tools.data.fields.parent"),name:"parent_id",children:o.jsx(P,{checkStrictly:!0,loading:f,options:s==null?void 0:s.data,keys:{label:((l=a==null?void 0:a.data)==null?void 0:l.tree_label)||"name",value:"id"},clearable:!0})}),((n=a==null?void 0:a.data)==null?void 0:n.fields)&&o.jsx(h,{fields:(p=a==null?void 0:a.data)==null?void 0:p.fields})]})};export{U as default};