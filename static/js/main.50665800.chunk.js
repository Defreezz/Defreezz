(this.webpackJsonpexam01=this.webpackJsonpexam01||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),s=a(5),r=a.n(s),l=(a(20),a(3)),i=(a(21),a(1));function u(e){var t=e.value,a=t===e.maxValue?"displayMax":"displayDefault";return Object(i.jsx)("div",{className:"display",children:Object(i.jsx)("div",{className:a,children:t})})}function j(e){var t=e.name,a=e.callback,c=e.disabled;return Object(i.jsx)("button",{className:"butt",disabled:c,onClick:a,children:t})}function b(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(0),r=Object(l.a)(s,2),b=r[0],o=r[1],O=Object(c.useState)(0),d=Object(l.a)(O,2),p=d[0],m=d[1];Object(c.useEffect)((function(){x()}),[]);var x=function(){var e=localStorage.getItem("MaxValue"),t=localStorage.getItem("StartValue");m(e&&JSON.parse(e)),o(t&&JSON.parse(t)),n(t&&JSON.parse(t)),null===e&&n(0),null===e&&o(0),null===e&&m(0)},S=Object(c.useState)(!0),f=Object(l.a)(S,2),v=f[0],N=f[1];return v?Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"wrapper",children:[Object(i.jsx)(u,{value:a,maxValue:p}),Object(i.jsxs)("span",{className:"buttContainer",children:[Object(i.jsx)(j,{name:"INC",callback:function(){a<p&&n(a+1)},disabled:a>=p}),Object(i.jsx)(j,{name:"RESET",callback:function(){n(b)},disabled:a===b}),Object(i.jsx)(j,{name:"SET",callback:function(){N(!v)}})]})]})}):Object(i.jsxs)("div",{className:"wrapper",children:[Object(i.jsxs)("div",{className:"display",children:[Object(i.jsx)("span",{className:p<=b||p<=0?"spanError":"spanDefault",children:"Max Value "}),Object(i.jsx)("input",{value:p,className:p<=b||p<=0?"inputSetError":"inputSet",type:"number",onChange:function(e){m(Number(e.currentTarget.value))}}),Object(i.jsx)("br",{}),Object(i.jsx)("span",{className:p<=b||p<=0?"spanError":"spanDefault",children:"Start Value"}),Object(i.jsx)("input",{value:b,className:p<=b||b<0?"inputSetError":"inputSet",type:"number",onChange:function(e){o(Number(e.currentTarget.value)),n(Number(e.currentTarget.value))}})]}),Object(i.jsx)("span",{className:"buttContainerSet",children:Object(i.jsx)(j,{disabled:b>=p||b<0,name:"SAVE",callback:function(){N(!v),localStorage.setItem("MaxValue",JSON.stringify(p)),localStorage.setItem("StartValue",JSON.stringify(b)),n(b)}})})]})}var o=a(44);function O(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(0),r=Object(l.a)(s,2),b=r[0],o=r[1],O=Object(c.useState)(0),d=Object(l.a)(O,2),p=d[0],m=d[1];Object(c.useEffect)((function(){x()}),[]);var x=function(){var e=localStorage.getItem("MaxValue"),t=localStorage.getItem("StartValue");m(e&&JSON.parse(e)),o(t&&JSON.parse(t)),n(t&&JSON.parse(t)),null===e&&n(0),null===e&&o(0),null===e&&m(0)};return Object(i.jsxs)("div",{className:"v1",children:[Object(i.jsxs)("div",{className:"wrapper",children:[Object(i.jsxs)("div",{className:"display",children:[Object(i.jsx)("span",{className:p<=b||p<=0?"spanError":"spanDefault",children:"Max Value "}),Object(i.jsx)("input",{value:p,className:p<=b||p<=0?"inputSetError":"inputSet",type:"number",onChange:function(e){m(Number(e.currentTarget.value))}}),Object(i.jsx)("br",{}),Object(i.jsx)("span",{className:p<=b||p<=0?"spanError":"spanDefault",children:"Start Value"}),Object(i.jsx)("input",{value:b,className:p<=b||b<0?"inputSetError":"inputSet",type:"number",onChange:function(e){o(Number(e.currentTarget.value)),n(Number(e.currentTarget.value))}})]}),Object(i.jsx)("span",{className:"buttContainerSet",children:Object(i.jsx)(j,{disabled:b>=p||b<0,name:"SAVE",callback:function(){localStorage.setItem("MaxValue",JSON.stringify(p)),localStorage.setItem("StartValue",JSON.stringify(b)),n(b)}})})]}),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"wrapper",children:[b>=p||b<0?Object(i.jsx)("div",{className:"display",children:Object(i.jsx)("div",{className:"error",children:"invalid input"})}):Object(i.jsx)(u,{value:a,maxValue:p}),Object(i.jsxs)("span",{className:"buttContainer",children:[Object(i.jsx)(j,{name:"INC",callback:function(){a<p&&n(a+1)},disabled:a>=p||b<0}),Object(i.jsx)(j,{name:"RESET",callback:function(){n(b)},disabled:a===b})]})]})})]})}var d=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1],s=function(e){localStorage.setItem("VersionCounter",JSON.stringify(e))};return Object(c.useEffect)((function(){!function(){var e=localStorage.getItem("VersionCounter");n(e&&JSON.parse(e))}()}),[]),Object(c.useEffect)((function(){s(a)}),[a]),a?Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("div",{className:"switch",children:Object(i.jsxs)("span",{children:["v1",Object(i.jsx)(o.a,{checked:a,onChange:function(){n(!a),s(a)}}),"v2"]})}),Object(i.jsx)(b,{})]}):Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("div",{className:"switch",children:Object(i.jsxs)("span",{children:["v1",Object(i.jsx)(o.a,{checked:a,onChange:function(){n(!a),s(a)}}),"v2"]})}),Object(i.jsx)(O,{})]})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(d,{})}),document.getElementById("root")),p()}},[[27,1,2]]]);
//# sourceMappingURL=main.50665800.chunk.js.map