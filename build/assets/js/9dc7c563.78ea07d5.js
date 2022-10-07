"use strict";(self.webpackChunksoftware_designs_and_algorithms=self.webpackChunksoftware_designs_and_algorithms||[]).push([[6772],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return g}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),g=i,f=m["".concat(s,".").concat(g)]||m[g]||p[g]||r;return t?a.createElement(f,o(o({ref:n},c),{},{components:t})):a.createElement(f,o({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9428:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),o=["components"],l={sidebar_position:2},s="2. Functional language possibilities",u={unversionedId:"functional-programming/language_possibilities",id:"functional-programming/language_possibilities",title:"2. Functional language possibilities",description:"There are several functional languages in there: Scala, Clojure, Lisp, Haskel, etc.",source:"@site/docs/4-functional-programming/language_possibilities.md",sourceDirName:"4-functional-programming",slug:"/functional-programming/language_possibilities",permalink:"/docs/functional-programming/language_possibilities",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Functional programing (FP)",permalink:"/docs/functional-programming/general_fp"},next:{title:"3. Main concepts",permalink:"/docs/functional-programming/main_concepts"}},c={},p=[{value:"2.1 First class functions",id:"21-first-class-functions",level:2},{value:"2.1.1 Higher order function",id:"211-higher-order-function",level:3},{value:"2.2 Currying",id:"22-currying",level:2}],m={toc:p};function g(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"2-functional-language-possibilities"},"2. Functional language possibilities"),(0,r.kt)("p",null,"There are several functional languages in there: ",(0,r.kt)("inlineCode",{parentName:"p"},"Scala"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Clojure"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Lisp"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Haskel"),", etc."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"When functional approach should be used?")),(0,r.kt)("p",null,"In projects where is a lot of math and where concurrency is required. For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"digital signal processing"),(0,r.kt)("li",{parentName:"ul"},"digital image processing"),(0,r.kt)("li",{parentName:"ul"},"data manipulation"),(0,r.kt)("li",{parentName:"ul"},"supply chain projects"),(0,r.kt)("li",{parentName:"ul"},"agricultural projects")),(0,r.kt)("p",null,"Before we go any further, it is important to highlight that in order to be a functional language, it is not enough to just follow functional principles, language itself has to support some functional possibilities."),(0,r.kt)("h2",{id:"21-first-class-functions"},"2.1 First class functions"),(0,r.kt)("p",null,"In computer science, they say that a programming language supports first-class functions if it treats functions as first-class citizens. In simple words, language supports first-class functions if it can pass functions as parameters to other functions, can return them as values from other functions, and can assign them to variables or can store them in data structures."),(0,r.kt)("p",null,"Examples:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("em",{parentName:"li"},"Listing 2.2")," line(1) you can see, that function is assigned to ",(0,r.kt)("inlineCode",{parentName:"li"},"consoleValue")),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("em",{parentName:"li"},"Listing 2.2")," line(2) function ",(0,r.kt)("inlineCode",{parentName:"li"},"logFn")," returns as a value from ",(0,r.kt)("inlineCode",{parentName:"li"},"logPowerOfTwo")),(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("em",{parentName:"li"},"Listing 2.2")," line(3) ",(0,r.kt)("inlineCode",{parentName:"li"},"consoleValue")," is passed as a parameter while calling ",(0,r.kt)("inlineCode",{parentName:"li"},"logPowerOfTwo"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Listing 2.1 - Example of storing function in object data structure"',title:'"Listing',2.1:!0,"-":!0,Example:!0,of:!0,storing:!0,function:!0,in:!0,object:!0,data:!0,'structure"':!0},'const example = {\n  name: "John",\n  getName() {\n    return console.log(this.name);\n  },\n};\n')),(0,r.kt)("p",null,"It is important to remember that the language must implement the feature passing function as a parameter. It is not a functional concept, and it is a language possibility. By using this feature we can follow another functional concept such as higher order function (HOF)."),(0,r.kt)("h3",{id:"211-higher-order-function"},"2.1.1 Higher order function"),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"higher order function")," is any function that takes a function as an argument, returns a function, or both."),(0,r.kt)("p",null,"Higher order functions are often used to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Abstract or isolate actions, effects, or async flow control using callback functions, promises, monads, etc"),(0,r.kt)("li",{parentName:"ul"},"Create utilities that can act on a wide variety of data types"),(0,r.kt)("li",{parentName:"ul"},"Partially apply a function to its arguments or create a curried function for the purpose of reuse or function composition"),(0,r.kt)("li",{parentName:"ul"},"Take a list of functions and return some composition of those input functions")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Listing 2.2"',title:'"Listing','2.2"':!0},"const consoleValue = (value) => console.log(value); // (1)\nconst logPowerOfTwo = (logFn, value) => logFn(value * value); // (2)\n\nlogPowerOfTwo(consoleValue, 5); // 25 (3)\n")),(0,r.kt)("p",null,"Each JavaScript function that takes a callback is a HOF. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"filter"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"forEach")," etc."),(0,r.kt)("h2",{id:"22-currying"},"2.2 Currying"),(0,r.kt)("p",null,"Currying is a technique that converts function with more than one parameter into the chain of functions with one argument. In a math way - it is a process of transforming function with multiple arities in functions with less (usually one) arity."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Arity")," - number of function's arguments."),(0,r.kt)("p",null,"For example, currying a function ",(0,r.kt)("inlineCode",{parentName:"p"},"foo")," that takes three arguments creates three functions."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usual syntax")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Listing 2.3"',title:'"Listing','2.3"':!0},"const foo = (a, b, c) => a + b + c;\n\nfoo(1, 2, 3); // 6\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Currying")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Listing 2.4 - Based on arrow functions"',title:'"Listing',2.4:!0,"-":!0,Based:!0,on:!0,arrow:!0,'functions"':!0},"const curryingSum = (a) => (b) => (c) => a + b + c;\n\ncurryingSum(1)(2)(3); // 6\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Listing 2.5 - Based on regular functions"',title:'"Listing',2.5:!0,"-":!0,Based:!0,on:!0,regular:!0,'functions"':!0},"const curryingSum = function (a) {\n  return function (b) {\n    return function (c) {\n      return a + b + c;\n    };\n  };\n};\n\ncurryingSum(1)(2)(3); // 6\n")),(0,r.kt)("p",null,"Currying is not something that you have to use every time, it is something that is useful in certain situations. For example, if you need to call the same function with ",(0,r.kt)("strong",{parentName:"p"},"some of the same")," parameters a lot. This function can be divided into smaller ones and some of them can be called when needed."))}g.isMDXComponent=!0}}]);