import{j as e}from"./vendor-map-xrlPGoMd.js";import{_ as F,W as I,ar as v}from"./vendor-refine-BPS4QmKj.js";import{y}from"./modulepreload-polyfill-DuwZr_J0.js";import{r as u}from"./vendor-react-CEAiij2-.js";import"./vendor-echarts-BA2V57Gb.js";import{F as a,I as p,R as s,$ as k,aj as E,a7 as R,Z as C,ad as M}from"./vendor-tdesign-CDUa2Lvz.js";import{F as P,a as o}from"./page-TEQDESa-.js";import{U as _}from"./uploadImageManage-DuSKSKW2.js";import{E as w}from"./tinymce-Cuw_GS6J.js";import"./vendor-lib-DkJHNO_p.js";import{u as x}from"./useSelect-CHkdsRnl.js";import"./index-CQfmoaEW.js";import{M as A}from"./form-B8z4QWnA.js";import"./vendor-tinymce-DBANSpiv.js";import"./vendor-markdown-BG3k-yNs.js";import"./manage-DqBD0yRD.js";import"./useUpload-DAFBiD59.js";import"./cascader-5lOqLYKR.js";import"./uploadImage-sSyERIZW.js";import"./uploadFile--4M0LX9v.js";const Y=()=>{const t=F(),{id:h}=I(),{data:l,isLoading:f}=v({resource:"content.category"}),j=(l==null?void 0:l.data)||[],[m]=a.useForm(),n=a.useWatch("class_id",m),{request:g}=y(),[r,d]=u.useState();u.useEffect(()=>{if(!n){d(void 0);return}g(`content/category/${n}/magic`,"get").then(c=>{d((c==null?void 0:c.data)||{})})},[n]);const{options:b}=x({resource:"content.source",optionLabel:"name",optionValue:"id"}),{options:i}=x({resource:"content.attr",optionLabel:"name",optionValue:"id"});return e.jsxs(P,{formProps:{labelAlign:"top"},back:!0,form:m,id:h,settingRender:e.jsxs(e.Fragment,{children:[e.jsx(a.FormItem,{label:t("content.article.fields.subtitle"),name:"subtitle",children:e.jsx(p,{})}),e.jsx(a.FormItem,{label:t("content.article.fields.image"),name:"images",children:e.jsx(_,{accept:"image/*",multiple:!0})}),e.jsx(a.FormItem,{label:t("content.article.fields.imagesAuto"),name:"images_auto",initialData:!0,children:e.jsxs(s.Group,{children:[e.jsx(s,{value:!0,children:t("content.article.fields.auto")}),e.jsx(s,{value:!1,children:t("content.article.fields.manual")})]})}),(i==null?void 0:i.length)>0&&e.jsx(a.FormItem,{label:t("content.article.fields.attrs"),name:"attrs",children:e.jsx(k.Group,{options:i})}),e.jsx(a.FormItem,{label:t("content.article.fields.source"),name:"source",children:e.jsx(E,{options:b,highlightKeyword:!0,filterable:!1,clearable:!0})}),(r==null?void 0:r.fields)&&e.jsx(A,{fields:r==null?void 0:r.fields,prefix:"extend"}),e.jsx(a.FormItem,{label:t("content.article.fields.status"),name:"status",initialData:!0,children:e.jsxs(s.Group,{children:[e.jsx(s,{value:!0,children:t("content.article.tab.published")}),e.jsx(s,{value:!1,children:t("content.article.tab.unpublished")})]})})]}),children:[e.jsx(o,{name:"class_id",children:e.jsx(R,{loading:f,options:j,keys:{label:"name",value:"id"},clearable:!0,checkStrictly:!0,placeholder:t("content.article.validate.class")})}),e.jsx(o,{name:"title",children:e.jsx(p,{placeholder:t("content.article.validate.title")})}),e.jsx(o,{name:"content",children:e.jsx(w,{})}),e.jsx(o,{name:"keywords",children:e.jsx(C,{placeholder:t("content.article.validate.keywords")})}),e.jsx(o,{name:"descriptions",initialData:"",children:e.jsx(M,{placeholder:t("content.article.validate.descriptions")})})]})};export{Y as default};