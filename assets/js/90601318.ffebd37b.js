/*! For license information please see 90601318.ffebd37b.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[794171],{136093:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var n=r(824246),a=r(511151);const o={id:"backend-app-api.backend.add",title:"Backend.add()",description:"API reference for Backend.add()"},c=void 0,u={id:"reference/backend-app-api.backend.add",title:"Backend.add()",description:"API reference for Backend.add()",source:"@site/../docs/reference/backend-app-api.backend.add.md",sourceDirName:"reference",slug:"/reference/backend-app-api.backend.add",permalink:"/docs/reference/backend-app-api.backend.add",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-app-api.backend.add.md",tags:[],version:"current",frontMatter:{id:"backend-app-api.backend.add",title:"Backend.add()",description:"API reference for Backend.add()"}},i={},s=[{value:"Parameters",id:"parameters",level:2}];function d(e){const t=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td"},(0,a.ah)(),e.components);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-app-api",children:(0,n.jsx)(t.code,{children:"@backstage/backend-app-api"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-app-api.backend",children:(0,n.jsx)(t.code,{children:"Backend"})})," > ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-app-api.backend.add",children:(0,n.jsx)(t.code,{children:"add"})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"add(feature: BackendFeature | (() => BackendFeature) | Promise<{\n        default: BackendFeature | (() => BackendFeature);\n    }>): void;\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"feature"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"/docs/reference/backend-plugin-api.backendfeature",children:"BackendFeature"})," | (() => ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-plugin-api.backendfeature",children:"BackendFeature"}),") | Promise<{ default: ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-plugin-api.backendfeature",children:"BackendFeature"})," | (() => ",(0,n.jsx)(t.a,{href:"/docs/reference/backend-plugin-api.backendfeature",children:"BackendFeature"}),"); }>"]}),(0,n.jsx)(t.td,{})]})})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"void"})]})}const f=function(e={}){const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(d,e)})):d(e)}},371426:(e,t,r)=>{var n=r(827378),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var n,o={},s=null,d=null;for(n in void 0!==r&&(s=""+r),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,n)&&!i.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:s,ref:d,props:o,_owner:u.current}}t.Fragment=o,t.jsx=s,t.jsxs=s},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),l=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,b={};function k(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||h}function m(){}function _(e,t,r){this.props=e,this.context=t,this.refs=b,this.updater=r||h}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=k.prototype;var v=_.prototype=new m;v.constructor=_,y(v,k.prototype),v.isPureReactComponent=!0;var j=Array.isArray,x=Object.prototype.hasOwnProperty,g={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,n){var a,o={},c=null,u=null;if(null!=t)for(a in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(c=""+t.key),t)x.call(t,a)&&!S.hasOwnProperty(a)&&(o[a]=t[a]);var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){for(var s=Array(i),d=0;d<i;d++)s[d]=arguments[d+2];o.children=s}if(e&&e.defaultProps)for(a in i=e.defaultProps)void 0===o[a]&&(o[a]=i[a]);return{$$typeof:r,type:e,key:c,ref:u,props:o,_owner:g.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var R=/\/+/g;function C(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,a,o,c){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var i=!1;if(null===e)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case r:case n:i=!0}}if(i)return c=c(i=e),e=""===o?"."+C(i,0):o,j(c)?(a="",null!=e&&(a=e.replace(R,"$&/")+"/"),P(c,t,a,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,a+(!c.key||i&&i.key===c.key?"":(""+c.key).replace(R,"$&/")+"/")+e)),t.push(c)),1;if(i=0,o=""===o?".":o+":",j(e))for(var s=0;s<e.length;s++){var d=o+C(u=e[s],s);i+=P(u,t,a,d,c)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),s=0;!(u=e.next()).done;)i+=P(u=u.value,t,a,d=o+C(u,s++),c);else if("object"===u)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function $(e,t,r){if(null==e)return e;var n=[],a=0;return P(e,n,"","",(function(e){return t.call(r,e,a++)})),n}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var B={current:null},F={transition:null},I={ReactCurrentDispatcher:B,ReactCurrentBatchConfig:F,ReactCurrentOwner:g};t.Children={map:$,forEach:function(e,t,r){$(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return $(e,(function(){t++})),t},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=k,t.Fragment=a,t.Profiler=c,t.PureComponent=_,t.StrictMode=o,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=y({},e.props),o=e.key,c=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,u=g.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in t)x.call(t,s)&&!S.hasOwnProperty(s)&&(a[s]=void 0===t[s]&&void 0!==i?i[s]:t[s])}var s=arguments.length-2;if(1===s)a.children=n;else if(1<s){i=Array(s);for(var d=0;d<s;d++)i[d]=arguments[d+2];a.children=i}return{$$typeof:r,type:e.type,key:o,ref:c,props:a,_owner:u}},t.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=w,t.lazy=function(e){return{$$typeof:l,_payload:{_status:-1,_result:e},_init:O}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=F.transition;F.transition={};try{e()}finally{F.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return B.current.useCallback(e,t)},t.useContext=function(e){return B.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return B.current.useDeferredValue(e)},t.useEffect=function(e,t){return B.current.useEffect(e,t)},t.useId=function(){return B.current.useId()},t.useImperativeHandle=function(e,t,r){return B.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return B.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return B.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return B.current.useMemo(e,t)},t.useReducer=function(e,t,r){return B.current.useReducer(e,t,r)},t.useRef=function(e){return B.current.useRef(e)},t.useState=function(e){return B.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return B.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return B.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Zo:()=>u,ah:()=>o});var n=r(667294);const a=n.createContext({});function o(e){const t=n.useContext(a);return n.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function u({components:e,children:t,disableParentContext:r}){let u;return u=r?"function"==typeof e?e({}):e||c:o(e),n.createElement(a.Provider,{value:u},t)}}}]);