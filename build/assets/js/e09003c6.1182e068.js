"use strict";(self.webpackChunksoftware_designs_and_algorithms=self.webpackChunksoftware_designs_and_algorithms||[]).push([[5200],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},44:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={sidebar_position:6},l="5. Conclusion",c={unversionedId:"design-patterns/conclusion",id:"design-patterns/conclusion",title:"5. Conclusion",description:"You may successfully code without having an idea of what patterns are. Moreover, you might have implemented some of them without even noticing. But conscious usage of tool differs is an important step from a beginner level to professional. You may hammer a nail, and you may hit it with a drill as well, if you make enough effort. Professional developer understands, that it's not a purpose of a drill.",source:"@site/docs/5-design-patterns/conclusion.md",sourceDirName:"5-design-patterns",slug:"/design-patterns/conclusion",permalink:"/docs/design-patterns/conclusion",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"4. Behavioral Design Patterns",permalink:"/docs/design-patterns/behavioral_design_patterns"},next:{title:"6. \ud83d\udcda Home Task",permalink:"/docs/design-patterns/hometask"}},u={},p=[],d={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"5-conclusion"},"5. Conclusion"),(0,i.kt)("p",null,"You may successfully code without having an idea of what patterns are. Moreover, you might have implemented some of them without even noticing. But conscious usage of tool differs is an important step from a beginner level to professional. You may hammer a nail, and you may hit it with a drill as well, if you make enough effort. Professional developer understands, that it's not a purpose of a drill."),(0,i.kt)("p",null,"Software development would be much easier without changes at all. But changes are everywhere: requirements, environment, hardware and so on. The main purpose of software development is creation of systems, that will allow localizing and minimize negative influence of such changes."),(0,i.kt)("p",null,"That is why we should write reusable code with minimal dependency on other parts of the program and use SRP (single responsibility) and OCP (open-closed) principles. That is why we should use abstractions and depend on them rather than on realization details. And also prefer composition over inheritance."),(0,i.kt)("p",null,"Using design patterns, the code, which conducts these approaches and principles, can be achieved much easier. For example, Strategy pattern allows writing code, which is opened for extension, but closed for modification. Observer pattern allows creating loose coupled code and so on."))}f.isMDXComponent=!0}}]);