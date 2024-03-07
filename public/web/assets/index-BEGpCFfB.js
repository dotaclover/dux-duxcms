import{u as x,m as L,n as K,s as t,w as $,J as I,bb as D,az as N,y as A,B as k,g as J,h as T,i as F,p as q,G as H,al as M}from"./modulepreload-polyfill-DkiKXnSB.js";/**
 * tdesign v1.5.2
 * (c) 2024 tdesign
 * @license MIT
 */function S(r,n){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);n&&(e=e.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),o.push.apply(o,e)}return o}function g(r){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?S(Object(o),!0).forEach(function(e){A(r,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):S(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}var R=function(n){var o=n.content,e=n.cancelBtn,c=n.confirmBtn,u=n.icon,s=n.theme,b=n.onCancel,E=b===void 0?k:b,y=n.onConfirm,i=y===void 0?k:y,d=n.onClose,v=d===void 0?k:d,O=x(),f=O.classPrefix,h=L({InfoCircleFilledIcon:K}),_=h.InfoCircleFilledIcon,w=e==null,P=c==null;function B(){var p="#0052D9",l=t.createElement(_,null);switch(s){case"warning":p="#FFAA00";break;case"danger":p="#FF3E00";break}var a=null;return t.isValidElement(u)?a=t.cloneElement(u,g({style:{color:p}},u.props)):l&&(a=t.cloneElement(l,{style:{color:p}})),a}function C(){return t.isValidElement(e)?t.cloneElement(e,{onClick:function(l){var a,m;v({e:l,trigger:"cancel"}),(a=e.props)===null||a===void 0||(m=a.onClick)===null||m===void 0||m.call(a,l)}}):w?null:t.createElement(I,g({size:"small",theme:"default",variant:"base",onClick:function(l){v({e:l,trigger:"cancel"}),E({e:l})}},D(e)==="object"?g({},e):{}),N(e)&&e)}function G(){return t.isValidElement(c)?t.cloneElement(c,{onClick:function(l){var a,m;v({e:l,trigger:"confirm"}),(a=c.props)===null||a===void 0||(m=a.onClick)===null||m===void 0||m.call(a,l)}}):P?null:t.createElement(I,g({size:"small",theme:"primary",onClick:function(l){v({e:l,trigger:"confirm"}),i({e:l})}},D(c)==="object"?g({},c):{}),N(c)&&c)}return t.createElement("div",{className:"".concat(f,"-popconfirm__content ").concat(n.className),style:n.style},t.createElement("div",{className:"".concat(f,"-popconfirm__body")},B(),t.createElement("div",{className:"".concat(f,"-popconfirm__inner")},o)),t.createElement("div",{className:"".concat(f,"-popconfirm__buttons")},t.createElement("span",{className:$("".concat(f,"-popconfirm__cancel"))},C()),t.createElement("span",{className:$("".concat(f,"-popconfirm__confirm"))},G())))};R.displayName="Popcontent";/**
 * tdesign v1.5.2
 * (c) 2024 tdesign
 * @license MIT
 */var Q={destroyOnClose:!0,placement:"top",showArrow:!0,theme:"default"};/**
 * tdesign v1.5.2
 * (c) 2024 tdesign
 * @license MIT
 */function V(r,n){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);n&&(e=e.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),o.push.apply(o,e)}return o}function j(r){for(var n=1;n<arguments.length;n++){var o=arguments[n]!=null?arguments[n]:{};n%2?V(Object(o),!0).forEach(function(e){A(r,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):V(Object(o)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))})}return r}var z=J.forwardRef(function(r,n){var o=x(),e=o.classPrefix,c=T("popconfirm"),u=F(c,2),s=u[0],b=u[1],E=typeof s.cancel=="string"?s.cancel:s.cancel.content,y=typeof s.confirm=="string"?s.confirm:s.confirm.content,i=q(r,Q),d=i.cancelBtn,v=d===void 0?b(E):d,O=i.confirmBtn,f=O===void 0?b(y):O,h=H(i,"visible",i.onVisibleChange),_=F(h,2),w=_[0],P=_[1];return t.createElement(M,j(j({ref:n},i),{},{visible:w,trigger:"click",onVisibleChange:function(C){return P(C)},overlayClassName:$("".concat(e,"-popconfirm")),content:t.createElement(R,j(j({cancelBtn:v,confirmBtn:f},i),{},{onClose:function(C){return P(!1,C)}}))},i.popupProps))});z.displayName="Popconfirm";/**
 * tdesign v1.5.2
 * (c) 2024 tdesign
 * @license MIT
 */var W=z;export{W as P};
