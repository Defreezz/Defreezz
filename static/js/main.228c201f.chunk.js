(this.webpackJsonpexam01=this.webpackJsonpexam01||[]).push([[0],{25:function(e,a,t){},26:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var n,r=t(0),c=t.n(r),s=t(4),l=t.n(s),u=(t(25),t(26),t(8)),i=function(e){return e.counter};!function(e){e.SET_COUNTER="Counter/SET_COUNTER",e.SET_START_VALUE="Counter/SET_START_VALUE",e.SET_MAX_VALUE="Counter/SET_MAX_VALUE",e.SET_ERROR="Counter/SET_ERROR",e.SET_VERSION_COUNTER="Counter/SET_VERSION_COUNTER",e.SET_AFTER_SAVE_VALUES="Counter/SET_AFTER_SAVE_VALUES"}(n||(n={}));var o=function(e){return{type:n.SET_COUNTER,payload:{counter:e}}},j=function(e){return{type:n.SET_START_VALUE,payload:{startValue:e}}},b=function(e){return{type:n.SET_MAX_VALUE,payload:{maxValue:e}}},d=function(e){return{type:n.SET_ERROR,payload:{error:e}}},S=function(e){return{type:n.SET_VERSION_COUNTER,payload:{versionCounter:e}}},O=function(e,a){return{type:n.SET_AFTER_SAVE_VALUES,payload:{afterSaveMaxValue:e,afterSaveStartValue:a}}},x=t(5),E=t(19),m=t(1);function v(e){var a=e.name,t=e.callback,n=e.disabled,r=Object(E.a)(e,["name","callback","disabled"]);return Object(m.jsx)("button",Object(x.a)(Object(x.a)({className:"butt",disabled:n,onClick:t},r),{},{children:a}))}function V(e){var a=e.value,t=a===e.maxValue?"displayMax":"displayDefault";return Object(m.jsx)("div",{className:"display",children:Object(m.jsx)("div",{className:t,children:a})})}function p(e){var a=e.counter,t=e.maxValue,n=e.startValue,r=e.afterSaveMaxValue,c=e.afterSaveStartValue,s=e.error,l=e.maxValueHandler,u=e.startValueHandler,i=e.onFocusHandler,o=e.saveSettingsHandler,j=e.inc,b=e.reset,d=t<n||t<0?"spanError":"spanDefault",S=t<n||t<0?"inputSetError":"inputSet";return Object(m.jsxs)("div",{className:"v1",children:[Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsxs)("div",{className:"display",children:[Object(m.jsx)("span",{className:d,children:"Max Value"}),Object(m.jsx)("input",{onFocus:i,value:t,className:S,min:0,onChange:l}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:d,children:"Start Value"}),Object(m.jsx)("input",{onFocus:i,value:n,className:S,min:0,onChange:u})]}),Object(m.jsx)("span",{className:"buttContainerSet",children:Object(m.jsx)(v,{disabled:n>=t||n<0||r===t&&c===n,name:"SAVE",callback:o})})]}),Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"wrapper",children:[s?Object(m.jsx)("div",{className:"display",children:Object(m.jsx)("div",{className:"error",children:s})}):Object(m.jsx)(V,{value:a,maxValue:t}),Object(m.jsxs)("span",{className:"buttContainer",children:[Object(m.jsx)(v,{name:"INC",callback:j,disabled:!!s||a===t}),Object(m.jsx)(v,{name:"RESET",callback:b,disabled:!!s||a===n})]})]})})]})}var f=t(18);function N(e){var a=e.counter,t=e.maxValue,n=e.startValue,c=e.maxValueHandler,s=e.startValueHandler,l=e.saveSettings,u=e.inc,i=e.reset,o=Object(r.useState)(!0),j=Object(f.a)(o,2),b=j[0],d=j[1],S=t<n||t<0?"spanError":"spanDefault",O=t<n||t<0?"inputSetError":"inputSet";return b?Object(m.jsx)("div",{children:Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)(V,{value:a,maxValue:t}),Object(m.jsxs)("span",{className:"buttContainer",children:[Object(m.jsx)(v,{name:"INC",callback:u,disabled:a>=t}),Object(m.jsx)(v,{name:"RESET",callback:i,disabled:a===n}),Object(m.jsx)(v,{name:"SET",callback:function(){d(!b)}})]})]})}):Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsxs)("div",{className:"display",children:[Object(m.jsx)("span",{className:S,children:"Max Value "}),Object(m.jsx)("input",{value:t,min:0,className:O,onChange:c}),Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:S,children:"Start Value"}),Object(m.jsx)("input",{value:n,className:O,min:0,onChange:s})]}),Object(m.jsx)("span",{className:"buttContainerSet",children:Object(m.jsx)(v,{disabled:n>=t||n<0,name:"SAVE",callback:function(){d(!b),l()}})})]})}var T=t(50);function h(){var e=Object(u.c)(i),a=e.counter,t=e.startValue,n=e.maxValue,c=e.error,s=e.versionCounter,l=e.afterSaveMaxValue,x=e.afterSaveStartValue,E=Object(u.b)(),v=function(){a<n&&E(o(a+1))},V=function(){E(o(t))},f=function(e){var a=e.currentTarget.value;Number.isInteger(+a)&&E(b(Number(e.currentTarget.value)))},h=function(e){var a=e.currentTarget.value;Number.isInteger(+a)&&(E(j(Number(a))),E(o(Number(a))))};Object(r.useEffect)((function(){C()}),[]),Object(r.useEffect)((function(){g(s)}),[s]);var _=function(){localStorage.setItem("MaxValue",JSON.stringify(n)),localStorage.setItem("StartValue",JSON.stringify(t))},g=function(e){localStorage.setItem("VersionCounter",JSON.stringify(e))},C=function(){var e=localStorage.getItem("MaxValue"),a=localStorage.getItem("StartValue"),t=localStorage.getItem("VersionCounter");E(S(t&&JSON.parse(t))),null===e||null===a?(E(b(0)),E(j(0)),E(o(0))):Number.isInteger(Number(e)&&Number(a))?(E(b(e&&JSON.parse(e))),E(j(a&&JSON.parse(a))),E(o(a&&JSON.parse(a)))):(E(o(0)),E(j(0)),E(b(0)))};return s?Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("div",{className:"switch",children:Object(m.jsxs)("span",{children:["v1",Object(m.jsx)(T.a,{checked:s,onChange:function(){E(S(!s)),g(s)}}),"v2"]})}),Object(m.jsx)(N,{startValue:t,counter:a,maxValue:n,maxValueHandler:f,inc:v,reset:V,startValueHandler:h,saveSettings:function(){_(),o(t),E(O(n,t))}})]}):Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("div",{className:"switch",children:Object(m.jsxs)("span",{children:["v1",Object(m.jsx)(T.a,{checked:s,onChange:function(){E(S(!s)),g(s)}}),"v2"]})}),Object(m.jsx)(p,{afterSaveMaxValue:l,afterSaveStartValue:x,startValue:t,counter:a,maxValue:n,inc:v,reset:V,error:c,maxValueHandler:f,startValueHandler:h,onFocusHandler:function(){E(O(0,0)),E(d('enter values and press "save"'))},saveSettingsHandler:function(){E(d("")),E(o(t)),E(O(n,t)),_()}})]})}var _=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(h,{})})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,51)).then((function(a){var t=a.getCLS,n=a.getFID,r=a.getFCP,c=a.getLCP,s=a.getTTFB;t(e),n(e),r(e),c(e),s(e)}))},C=t(12),R={counter:0,startValue:0,maxValue:0,afterSaveMaxValue:0,afterSaveStartValue:0,versionCounter:!1,error:""},A=Object(C.a)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case n.SET_COUNTER:case n.SET_START_VALUE:case n.SET_MAX_VALUE:case n.SET_ERROR:case n.SET_VERSION_COUNTER:case n.SET_AFTER_SAVE_VALUES:return Object(x.a)(Object(x.a)({},e),a.payload);default:return e}}}),y=Object(C.b)(A);window.store=y,l.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(u.a,{store:y,children:Object(m.jsx)(_,{})})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.228c201f.chunk.js.map