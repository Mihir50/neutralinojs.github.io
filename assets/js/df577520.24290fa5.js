(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,s=p["".concat(i,".").concat(m)]||p[m]||u[m]||l;return n?r.a.createElement(s,b(b({ref:t},c),{},{components:n})):r.a.createElement(s,b({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var c=2;c<l;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return c}));var a=n(3),r=(n(0),n(101));const l={title:"Global Variables"},i={unversionedId:"developer-environment/global-variables",id:"developer-environment/global-variables",isDocsHomePage:!1,title:"Global Variables",description:"These JavaScript variables can be used anywhere because these variables are defined in the window scope.",source:"@site/docs/developer-environment/global-variables.md",slug:"/developer-environment/global-variables",permalink:"/docs/developer-environment/global-variables",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/developer-environment/global-variables.md",version:"current",sidebar:"docs",previous:{title:"Modes",permalink:"/docs/configuration/modes"},next:{title:"Committers",permalink:"/docs/community/committers"}},b=[{value:"Predefined global variables",id:"predefined-global-variables",children:[]},{value:"Custom global variables",id:"custom-global-variables",children:[]}],o={toc:b};function c({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"These JavaScript variables can be used anywhere because these variables are defined in the window scope."),Object(r.b)("h2",{id:"predefined-global-variables"},"Predefined global variables"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Variable"),Object(r.b)("th",{parentName:"tr",align:null},"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NL_OS")),Object(r.b)("td",{parentName:"tr",align:null},"Operating system name: ",Object(r.b)("inlineCode",{parentName:"td"},"Linux"),", ",Object(r.b)("inlineCode",{parentName:"td"},"Windows"),", or ",Object(r.b)("inlineCode",{parentName:"td"},"Darwin"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NL_APPID")),Object(r.b)("td",{parentName:"tr",align:null},"Application identifier")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NL_PORT")),Object(r.b)("td",{parentName:"tr",align:null},"Application port")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NL_MODE")),Object(r.b)("td",{parentName:"tr",align:null},"Mode of the application: ",Object(r.b)("inlineCode",{parentName:"td"},"window"),", ",Object(r.b)("inlineCode",{parentName:"td"},"browser"),", or ",Object(r.b)("inlineCode",{parentName:"td"},"cloud"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NL_VERSION")),Object(r.b)("td",{parentName:"tr",align:null},"Neutralinojs server version")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NL_CVERSION")),Object(r.b)("td",{parentName:"tr",align:null},"Neutralinojs client version")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NL_CWD")),Object(r.b)("td",{parentName:"tr",align:null},"Current working directory")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NL_PATH")),Object(r.b)("td",{parentName:"tr",align:null},"Application path")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NL_ARGS")),Object(r.b)("td",{parentName:"tr",align:null},"Command-line arguments")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"NL_PID")),Object(r.b)("td",{parentName:"tr",align:null},"Current process's identifier")))),Object(r.b)("h2",{id:"custom-global-variables"},"Custom global variables"),Object(r.b)("p",null,"You make custom global variables too via ",Object(r.b)("inlineCode",{parentName:"p"},"neutralino.config.json"),", as shown\nbelow."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'....\n"globalVariables": {\n    "TEST": "Test Value"\n},\n....\n')),Object(r.b)("p",null,"The above custom global variable's value can be accessed with ",Object(r.b)("inlineCode",{parentName:"p"},"NL_TEST"),"."))}c.isMDXComponent=!0}}]);