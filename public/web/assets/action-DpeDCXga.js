import{j as s}from"./vendor-map-xrlPGoMd.js";import{_ as u,au as j,W as d,V as h,av as w,aw as M}from"./vendor-refine-BPS4QmKj.js";import{B as y}from"./modulepreload-polyfill-FQPaZMP9.js";import{ab as f}from"./vendor-tdesign-CDUa2Lvz.js";const A=({title:t,resource:a="",action:o,Cp:n,...e})=>{const{resource:c}=d();return s.jsx(h,{resource:a||(c==null?void 0:c.name),action:o||"",children:n&&s.jsx(n,{theme:"primary",...e,children:(e==null?void 0:e.children)||t})})},P=({resource:t,action:a="create",...o})=>{const n=u(),{create:e}=j(),{resource:c}=d();return s.jsx(A,{resource:t,action:a,onClick:()=>{e(t||(c==null?void 0:c.name)||"")},title:n("buttons.create"),...o})},S=({resource:t,action:a="edit",rowId:o,...n})=>{const e=u(),{edit:c}=j(),{resource:r}=d();return s.jsx(A,{resource:t,action:a,onClick:()=>{c(t||(r==null?void 0:r.name)||"",o)},title:e("buttons.edit"),...n})},b=({title:t,resource:a,action:o="",onConfirm:n,Cp:e,...c})=>{const r=u(),{resource:l}=d();return s.jsx(h,{resource:a||(l==null?void 0:l.name),action:o,children:s.jsx(f,{content:r("buttons.confirm"),destroyOnClose:!0,placement:"top",showArrow:!0,theme:"default",onConfirm:n,children:e&&s.jsx(e,{theme:"primary",...c,children:(c==null?void 0:c.children)||t})})})},V=({resource:t,action:a="delete",rowId:o,params:n,onConfirm:e,...c})=>{const r=u(),{mutate:l}=w(),{resource:i}=d();return s.jsx(b,{title:r("buttons.delete"),resource:t,action:a,theme:"danger",onConfirm:()=>{l({resource:t||(i==null?void 0:i.name)||"",id:o,meta:{params:n}}),e==null||e()},...c})},v=({resource:t,action:a="delete",rowIds:o,params:n,onConfirm:e,...c})=>{const r=u(),{mutate:l}=M(),{resource:i}=d();return s.jsx(b,{title:r("buttons.delete"),resource:t,action:a,theme:"danger",onConfirm:()=>{l({resource:t||(i==null?void 0:i.name)||"",ids:o,meta:{params:n}}),e==null||e()},...c})},x=({resource:t,action:a="",rowId:o=0,component:n,componentProps:e,modal:c,title:r,Cp:l,...i})=>{const{resource:m}=d();return s.jsx(h,{resource:t||(m==null?void 0:m.name),action:a,children:s.jsx(y,{title:r,trigger:l&&s.jsx(l,{theme:"primary",...i,children:(i==null?void 0:i.children)||r}),component:n,componentProps:{id:o,...e},...c})})},B=({action:t="create",title:a,...o})=>{const n=u();return s.jsx(x,{title:a||n("buttons.create"),action:t,...o})},I=({action:t="show",title:a,...o})=>{const n=u();return s.jsx(x,{title:a||n("buttons.show"),action:t,...o})},O=({action:t="edit",title:a,...o})=>{const n=u();return s.jsx(x,{title:a||n("buttons.edit"),action:t,...o})};export{x as A,P as C,V as D,O as E,I as S,b as a,v as b,B as c,S as d};
