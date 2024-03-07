import{u as X,g as d,s as w,af as ve,i as K,y as B,ag as M,ah as me,w as D,ai as ge,aj as he,p as ye,G as be,ak as Ce,h as xe,Q as $,al as je,X as we,am as Pe,Z as Oe,P as O,an as Ee,j as r,ao as R,ap as _e,aq as Ie}from"./modulepreload-polyfill-DkiKXnSB.js";import{F as Re,a as F}from"./page-BdVWdBJ4.js";import{U as Se}from"./uploadImageManage-DyY6Ak7P.js";import{E as ke}from"./tinymce-BUv0ADRy.js";import{u as G}from"./useSelect-Bn3A9Gfh.js";import"./index-V7eSIHbg.js";import{M as Ne}from"./form-B_AO_KlY.js";import{C as Fe}from"./index-94D9uViR.js";import{T as Le}from"./index-BhHJHqY3.js";import"./manage-Bom0epIq.js";import"./useUpload-DH6oH64-.js";import"./index-BEGpCFfB.js";import"./index-BL_4kOPz.js";import"./index-BO3kD13t.js";import"./uploadImage-Dzshn1MY.js";import"./cascader-DGRZgSrA.js";import"./uploadFile-pTi1aoYj.js";/**
 * tdesign v1.5.2
 * (c) 2024 tdesign
 * @license MIT
 */var Ae={filterable:!0,highlightKeyword:!0,placeholder:void 0,size:"medium",status:"default"};/**
 * tdesign v1.5.2
 * (c) 2024 tdesign
 * @license MIT
 */var Ke=ve,Z=/[\\^$.*+?()[\]{}|]/g,De=RegExp(Z.source);function Ve(t){return t=Ke(t),t&&De.test(t)?t.replace(Z,"\\$&"):t}var J=Ve,Y=function(s){var n=X(),e=n.classPrefix,c=s.content,x=s.keyword,y=d.useMemo(function(){var g;if(!c)return{list:[]};if(typeof c!="string"||!x)return{list:[c]};var v=new RegExp(J(x),"i"),C=(g=c.match(v))===null||g===void 0?void 0:g[0];return{list:c.split(C),keyword:C}},[c,x]);return w.createElement("div",{className:"".concat(e,"-select-option__highlight-item")},y.list.map(function(g,v){return v?[w.createElement("b",{className:"".concat(e,"-is-highlight"),key:g+y.keyword},y.keyword),g]:g}))};Y.displayName="HighlightOption";/**
 * tdesign v1.5.2
 * (c) 2024 tdesign
 * @license MIT
 */function U(t,s){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);s&&(e=e.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),n.push.apply(n,e)}return n}function q(t){for(var s=1;s<arguments.length;s++){var n=arguments[s]!=null?arguments[s]:{};s%2?U(Object(n),!0).forEach(function(e){B(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var ee=d.forwardRef(function(t,s){var n=t.value,e=t.popupVisible,c=t.onSelect,x=X(),y=x.classPrefix,g=d.useState(""),v=K(g,2),C=v[0],P=v[1],h=d.useRef(-1),E="".concat(y,"-select__list"),V=["".concat(y,"-select-option"),B({},t.sizeClassNames[t.size],t.size)],j=d.useMemo(function(){var i=(t.options||[]).map(function(a){var b={};return typeof a=="string"?b={text:a,label:a}:(a.text&&typeof a.text!="string"&&M.warn("AutoComplete","`text` must be a string."),a.text?b=a:typeof a.label=="string"?b=q(q({},a),{},{text:a.label}):M.warn("AutoComplete","one of `label` and `text` must be a existed string.")),b});if(t.filter)i=i.filter(function(a){return t.filter(n,a)});else if(t.filterable){var p=new RegExp(J(n),"i");i=i.filter(function(a){return p.test(a.text)})}return i},[t.options,n,t.filterable]),z=function(p){for(var a=p.target;a&&a.tagName!=="LI";)a=a.parentNode;var b=a.getAttribute("title");P(b),c==null||c(b,{e:p})},L=function(p){if(p.code==="Enter"||p.key==="Enter"){var a=h.current;if(a===-1)return;c==null||c(j[h.current].text,{e:p})}else{var b,I=h.current,k;p.code==="ArrowUp"||p.key==="ArrowUp"?k=I-1<0?j.length-1:I-1:(p.code==="ArrowDown"||p.key==="ArrowDown")&&(k=I+1>=j.length?0:I+1),P((b=j[k])===null||b===void 0?void 0:b.text)}},S=function(){ge(document,"keydown",L)},_=function(){he(document,"keydown",L)};return d.useImperativeHandle(s,function(){return{addKeyboardListener:S,removeKeyboardListener:_}}),d.useEffect(function(){return e?S():_(),function(){_()}},[e]),d.useEffect(function(){n||P("")},[n]),d.useEffect(function(){h.current=j.findIndex(function(i){return i.text===C})},[C,j]),j.length?w.createElement("ul",{className:E},j.map(function(i){var p=[].concat(V);i.text===C&&p.push("".concat(y,"-select-option--hover"));var a=(me(i.label)?i.label():i.label)||i.text;return w.createElement("li",{key:i.text,className:D(p),title:i.text,onClick:z},typeof a=="string"&&t.highlightKeyword?w.createElement(Y,{content:a,keyword:n}):a)})):null});ee.displayName="OptionsList";/**
 * tdesign v1.5.2
 * (c) 2024 tdesign
 * @license MIT
 */function Q(t,s){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);s&&(e=e.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),n.push.apply(n,e)}return n}function m(t){for(var s=1;s<arguments.length;s++){var n=arguments[s]!=null?arguments[s]:{};s%2?Q(Object(n),!0).forEach(function(e){B(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var te=d.forwardRef(function(t,s){var n,e=ye(t,Ae),c=d.useRef(),x=d.useRef(),y=be(e,"value",e.onChange),g=K(y,2),v=g[0],C=g[1],P=Ce(),h=P.classPrefix,E=P.sizeClassNames,V=xe("input"),j=K(V,1),z=j[0],L=d.useState(!1),S=K(L,2),_=S[0],i=S[1],p=d.useRef(null);d.useImperativeHandle(s,function(){return{inputRef:c.current,popupRef:x.current}});var a=function(l,u){var o,A=l.getBoundingClientRect().width||l.offsetWidth||l.clientWidth,N=u.getBoundingClientRect().width||u.offsetWidth||u.clientWidth;return m({width:A>=N?"".concat(A,"px"):"auto"},(o=e.popupProps)===null||o===void 0?void 0:o.overlayInnerStyle)},b=["".concat(h,"-auto-complete")].concat(e.className),I=function(f){var l=["".concat(h,"-select__dropdown")];return(f=e.popupProps)!==null&&f!==void 0&&f.overlayClassName&&(l=l.concat(e.popupProps.overlayClassName)),D(l)}(),k=function(f){var l=["".concat(h,"-select__dropdown-inner")];return(f=e.popupProps)!==null&&f!==void 0&&f.overlayInnerClassName&&(l=l.concat(e.popupProps.overlayInnerClassName)),D(l)}(),ne=function(l,u){_||i(!0),C(l,u)},re=function(){var f=m({value:v,size:e.size},e.inputProps);return f}(),oe=function(l,u){var o;i(!0),(o=e.onFocus)===null||o===void 0||o.call(e,m(m({},u),{},{value:l}));var A=setTimeout(function(){var N;(N=p.current)===null||N===void 0||N.addKeyboardListener(),clearTimeout(A)},0)},ae=function(l,u){var o;(o=e.onBlur)===null||o===void 0||o.call(e,m(m({},u),{},{value:l}))},le=function(l,u){var o;(o=e.onEnter)===null||o===void 0||o.call(e,m(m({},u),{},{value:l}))},se=function(l,u){var o;(o=e.onCompositionend)===null||o===void 0||o.call(e,m(m({},u),{},{value:l}))},ie=function(l,u){var o;(o=e.onCompositionstart)===null||o===void 0||o.call(e,m(m({},u),{},{value:l}))},ce=function(l,u){var o;e.readonly||e.disabled||(i(!1),C(l,u),(o=e.onSelect)===null||o===void 0||o.call(e,l,u))},ue=function(l,u){var o=u.trigger;o!=="trigger-element-click"&&i(l)},pe=e.triggerElement||e.children||w.createElement($,m({ref:c,placeholder:(n=e.placeholder)!==null&&n!==void 0?n:z.placeholder,tips:e.tips,status:e.status,readonly:e.readonly,disabled:e.disabled,clearable:e.clearable,autofocus:e.autofocus,onClear:e.onClear,onChange:ne,onFocus:oe,onBlur:ae,onEnter:le,onCompositionend:se,onCompositionstart:ie},re)),T=Array.isArray(e.options)&&w.createElement(ee,{ref:p,value:v,options:e.options,size:e.size,sizeClassNames:E,onSelect:ce,popupVisible:_,highlightKeyword:e.highlightKeyword,filterable:e.filterable,filter:e.filter}),W=e.panelTopContent,H=e.panelBottomContent,fe=W||T||H?w.createElement("div",{className:"".concat(h,"-autocomplete__panel")},W,T,H):null,de=m(m({},e.popupProps),{},{overlayInnerStyle:a,overlayInnerClassName:k,overlayClassName:I});return w.createElement("div",{className:D(b),style:e.style},w.createElement(je,m({ref:x,visible:_,onVisibleChange:ue,trigger:"focus",placement:"bottom-left",hideEmptyPopup:!0,content:fe},de),pe))});te.displayName="AutoComplete";/**
 * tdesign v1.5.2
 * (c) 2024 tdesign
 * @license MIT
 */var ze=te;const rt=()=>{const t=we(),{id:s}=Pe(),{data:n,isLoading:e}=Oe({resource:"content.category"}),c=(n==null?void 0:n.data)||[],[x]=O.useForm(),y=O.useWatch("class_id",x),{request:g}=Ee(),[v,C]=d.useState();d.useEffect(()=>{if(!y){C(void 0);return}g(`content/category/${y}/magic`,"get").then(E=>{C((E==null?void 0:E.data)||{})})},[y]);const{options:P}=G({resource:"content.source",optionLabel:"name",optionValue:"id"}),{options:h}=G({resource:"content.attr",optionLabel:"name",optionValue:"id"});return r.jsxs(Re,{formProps:{labelAlign:"top"},back:!0,form:x,id:s,settingRender:r.jsxs(r.Fragment,{children:[r.jsx(O.FormItem,{label:t("content.article.fields.subtitle"),name:"subtitle",children:r.jsx($,{})}),r.jsx(O.FormItem,{label:t("content.article.fields.image"),name:"images",children:r.jsx(Se,{accept:"image/*",multiple:!0})}),r.jsx(O.FormItem,{label:t("content.article.fields.imagesAuto"),name:"images_auto",initialData:!0,children:r.jsxs(R.Group,{children:[r.jsx(R,{value:!0,children:t("content.article.fields.auto")}),r.jsx(R,{value:!1,children:t("content.article.fields.manual")})]})}),(h==null?void 0:h.length)>0&&r.jsx(O.FormItem,{label:t("content.article.fields.attrs"),name:"attrs",children:r.jsx(_e.Group,{options:h})}),r.jsx(O.FormItem,{label:t("content.article.fields.source"),name:"source",children:r.jsx(ze,{options:P,highlightKeyword:!0,filterable:!1,clearable:!0})}),(v==null?void 0:v.fields)&&r.jsx(Ne,{fields:v==null?void 0:v.fields,prefix:"extend"}),r.jsx(O.FormItem,{label:t("content.article.fields.status"),name:"status",initialData:!0,children:r.jsxs(R.Group,{children:[r.jsx(R,{value:!0,children:t("content.article.tab.published")}),r.jsx(R,{value:!1,children:t("content.article.tab.unpublished")})]})})]}),children:[r.jsx(F,{name:"class_id",children:r.jsx(Fe,{loading:e,options:c,keys:{label:"name",value:"id"},clearable:!0,checkStrictly:!0,placeholder:t("content.article.validate.class")})}),r.jsx(F,{name:"title",children:r.jsx($,{placeholder:t("content.article.validate.title")})}),r.jsx(F,{name:"content",children:r.jsx(ke,{})}),r.jsx(F,{name:"keywords",children:r.jsx(Ie,{placeholder:t("content.article.validate.keywords")})}),r.jsx(F,{name:"descriptions",initialData:"",children:r.jsx(Le,{placeholder:t("content.article.validate.descriptions")})})]})};export{rt as default};
