(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var a=r(3),n=(r(0),r(96));const o={title:"Neutralino.storage"},i={unversionedId:"api/storage",id:"api/storage",isDocsHomePage:!1,title:"Neutralino.storage",description:"Neutralinojs has an in-built shared key-value storage. It's like a",source:"@site/docs/api/storage.md",slug:"/api/storage",permalink:"/docs/api/storage",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/storage.md",version:"current",sidebar:"docs",previous:{title:"Neutralino.computer",permalink:"/docs/api/computer"},next:{title:"Neutralino.debug",permalink:"/docs/api/debug"}},c=[{value:"storage.putData(StorageWriterOptions)",id:"storageputdatastoragewriteroptions",children:[{value:"StorageWriterOptions",id:"storagewriteroptions",children:[]}]},{value:"storage.getData(StorageReaderOptions)",id:"storagegetdatastoragereaderoptions",children:[{value:"StorageReaderOptions",id:"storagereaderoptions",children:[]},{value:"Return object (awaited):",id:"return-object-awaited",children:[]}]}],s={toc:c};function l({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Neutralinojs has an in-built shared key-value storage. It's like a\nglobal ",Object(n.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},Object(n.b)("inlineCode",{parentName:"a"},"LocalStorage"))," for all Neutralinojs modes.\n",Object(n.b)("inlineCode",{parentName:"p"},"Neutralinos.storage")," exposes methods for interacting with this storage feature."),Object(n.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"The storage API persists all data records into ",Object(n.b)("inlineCode",{parentName:"p"},".storage")," directory in the\nroot directory of your application. If you want to clear all data records,\ndelete the ",Object(n.b)("inlineCode",{parentName:"p"},".storage")," directory."))),Object(n.b)("h2",{id:"storageputdatastoragewriteroptions"},"storage.putData(StorageWriterOptions)"),Object(n.b)("p",null,"Writes data into Neutralinojs shared storage.\xa0"),Object(n.b)("h3",{id:"storagewriteroptions"},"StorageWriterOptions"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"bucket"),": A key to indentify data."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"data"),": Data as a string. If this value is ",Object(n.b)("inlineCode",{parentName:"li"},"null")," or ",Object(n.b)("inlineCode",{parentName:"li"},"undefined"),",\nthe specific data record will be erased from the disk.")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"await Neutralino.storage.putData({\n  bucket: 'userDetails',\n  data: JSON.stringify({\n    username: 'TestValue'\n  })\n});\n")),Object(n.b)("h2",{id:"storagegetdatastoragereaderoptions"},"storage.getData(StorageReaderOptions)"),Object(n.b)("p",null,"Reads and returns data for a given Neutralinojs shared storage key.\xa0"),Object(n.b)("h3",{id:"storagereaderoptions"},"StorageReaderOptions"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"bucket"),": The key of the storage data record.")),Object(n.b)("h3",{id:"return-object-awaited"},"Return object (awaited):"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"data"),": Data string of the storage record.")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre"},"let response = await Neutralino.storage.getData({\n  bucket: 'userDetails'\n});\nconsole.log(`Data: ${response.data}`);\n")))}l.isMDXComponent=!0},96:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return g}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),b=a,g=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return r?n.a.createElement(g,c(c({ref:t},l),{},{components:r})):n.a.createElement(g,c({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);