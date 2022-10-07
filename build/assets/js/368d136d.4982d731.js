"use strict";(self.webpackChunksoftware_designs_and_algorithms=self.webpackChunksoftware_designs_and_algorithms||[]).push([[8725],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=i,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7353:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={sidebar_position:3},l="3. Main concepts",c={unversionedId:"functional-programming/main_concepts",id:"functional-programming/main_concepts",title:"3. Main concepts",description:"3.1 Immutability",source:"@site/docs/4-functional-programming/main_concepts.md",sourceDirName:"4-functional-programming",slug:"/functional-programming/main_concepts",permalink:"/docs/functional-programming/main_concepts",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"2. Functional language possibilities",permalink:"/docs/functional-programming/language_possibilities"},next:{title:"4. Functional programing in JS",permalink:"/docs/functional-programming/is_js_functional"}},p={},m=[{value:"3.1 Immutability",id:"31-immutability",level:2},{value:"3.1.1 Side effects",id:"311-side-effects",level:3},{value:"3.1.2 Pure functions",id:"312-pure-functions",level:3},{value:"3.2 No shared state",id:"32-no-shared-state",level:2},{value:"3.2.1 Problems with shared state",id:"321-problems-with-shared-state",level:3},{value:"3.2.2 How to avoid it",id:"322-how-to-avoid-it",level:3},{value:"3.3 Composition",id:"33-composition",level:2},{value:"3.3.1 Composition over inheritance",id:"331-composition-over-inheritance",level:3}],d={toc:m};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"3-main-concepts"},"3. Main concepts"),(0,o.kt)("h2",{id:"31-immutability"},"3.1 Immutability"),(0,o.kt)("p",null,"The main rule of an immutable object is it cannot be modified after creation. Conversely, a mutable object is each object which can be modified after creation."),(0,o.kt)("p",null,"The data flow in the program is lossy if the immutability principle is not followed, that is why it is the main concept of functional programming. For example, ",(0,o.kt)("em",{parentName:"p"},"Listing 3.1"),". In case the data is mutated in the program some bugs which are hard to find can hide there."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Listing 3.1"',title:'"Listing','3.1"':!0},'const stat = [\n  { name: "John", score: 1.003 },\n  { name: "Lora", score: 2 },\n  { name: "Max", score: 3.76 },\n];\n\nconst statScoreInt = stat.map((el) => { // (1)\n  el.score = Math.floor(el.score); // (2)\n  el.name = el.name; // (3)\n\n  return el; // (4)\n});\n\nconsole.log(stat); // [{ name: "John", score: 1 }, { name: "Lora", score: 2 }, { name: "Max", score: 3 }]\nconsole.log(statScoreInt); // [{ name: "John", score: 1 }, { name: "Lora", score: 2 }, { name: "Max", score: 3 }]\n')),(0,o.kt)("p",null,"In the ",(0,o.kt)("inlineCode",{parentName:"p"},"Listing 3.1")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"stat")," array includes actual data from a database. It has player ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and player ",(0,o.kt)("inlineCode",{parentName:"p"},"score")," that shows win percentage. The task is to display the ",(0,o.kt)("inlineCode",{parentName:"p"},"score")," to the user as a rounded down integer. In lines from ",(0,o.kt)("em",{parentName:"p"},"(1)")," to ",(0,o.kt)("em",{parentName:"p"},"(4)")," it goes through array and modifies ",(0,o.kt)("inlineCode",{parentName:"p"},"score")," in a needed way and the result of this operation is ",(0,o.kt)("inlineCode",{parentName:"p"},"statScoreInt")," array. The last step is to console two arrays ",(0,o.kt)("inlineCode",{parentName:"p"},"stat")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"statScoreInt")," and the result is unexpectable. Both arrays are equal. That is because inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"map")," the ",(0,o.kt)("inlineCode",{parentName:"p"},"stat")," item was modified. These kinds of bugs are hard to find and can lead to strange actions. Immutability helps to avoid such behavior. For example, ",(0,o.kt)("em",{parentName:"p"},"Listing 3.2"),". The tasks is the same."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Listing 3.2"',title:'"Listing','3.2"':!0},'const stat = [\n  { name: "John", score: 1.003 },\n  { name: "Lora", score: 2 },\n  { name: "Max", score: 3.76 },\n];\n\nconst statScoreInt = stat.map((el) => {\n  return { score: Math.floor(el.score), ...el };\n});\n\nconsole.log(stat); // [{ name: "John", score: 1.003 }, { name: "Lora", score: 2 }, { name: "Max", score: 3.76 }]\nconsole.log(statScoreInt); // [{ name: "John", score: 1 }, { name: "Lora", score: 2 }, { name: "Max", score: 3 }]\n')),(0,o.kt)("p",null,"There are two arrays ",(0,o.kt)("inlineCode",{parentName:"p"},"stat")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"statScoreInt")," in ",(0,o.kt)("em",{parentName:"p"},"Listing 3.2"),". The difference is in the ",(0,o.kt)("inlineCode",{parentName:"p"},"map")," function, instead of modifying ",(0,o.kt)("inlineCode",{parentName:"p"},"stat")," item it creates a new element with copied data from ",(0,o.kt)("inlineCode",{parentName:"p"},"stat")," item and modified ",(0,o.kt)("inlineCode",{parentName:"p"},"score")," value. As a result, there are two arrays with different values."),(0,o.kt)("p",null,"In JavaScript, it might be easy to confuse ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," with immutability. The variable which cannot be redeclared is created by using ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," but immutable objects are not created by ",(0,o.kt)("inlineCode",{parentName:"p"},"const"),". You can't change the object that the binding refers to, but you can still change the properties of the object, which means that bindings created with ",(0,o.kt)("inlineCode",{parentName:"p"},"const")," are mutable."),(0,o.kt)("p",null,"Immutable objects can't be changed at all. You can make a value truly immutable by deep-freezing the object. JavaScript has a method that freezes an object one-level deep (in order to freeze an object deeply, recursion could be used to freeze each property and nested objects):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Listing 3.3"',title:'"Listing','3.3"':!0},'const a = Object.freeze({\n  greeting: "Hello",\n  subject: "student",\n  mark: "!",\n});\n\na.greeting = "Goodbye";\n// Error: Cannot assign to read only property \'foo\' of object Object\n')),(0,o.kt)("p",null,"There are several libraries in JavaScript which try to follow this principle, for example, ",(0,o.kt)("strong",{parentName:"p"},"Immutable.js"),"."),(0,o.kt)("h3",{id:"311-side-effects"},"3.1.1 Side effects"),(0,o.kt)("p",null,"If state changes are observable outside the called function and they are not returned value of the function it is a side effect."),(0,o.kt)("p",null,"Side effects include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Modifying any external variable or object property (e.g., a global variable, or a variable in the parent function scope chain)"),(0,o.kt)("li",{parentName:"ul"},"Logging to the console"),(0,o.kt)("li",{parentName:"ul"},"Alert"),(0,o.kt)("li",{parentName:"ul"},"Writing to the screen, in other words, replacing the content of a specific tag (querySelector(), getElementById(), etc.)"),(0,o.kt)("li",{parentName:"ul"},"Writing to a file"),(0,o.kt)("li",{parentName:"ul"},"The HTTP request might have side effects - therefore the function that triggers the request transitively have side effects"),(0,o.kt)("li",{parentName:"ul"},"Triggering any external process"),(0,o.kt)("li",{parentName:"ul"},"Calling any other functions with side effects")),(0,o.kt)("p",null,"In functional programming side effects are mostly avoided. It makes a program much easier to understand, and much easier to test."),(0,o.kt)("p",null,"That is important to understand that a program without side effects does nothing. If the code does not write to or read from a database, does not make any requests, does not change UI, etc., it does not bring any value. So we cannot completely avoid side effects."),(0,o.kt)("p",null,"What we can do is isolate side effects from the rest of your software. In case of keeping side effects separately from the rest of the software, the application will be much easier to extend, refactor, debug, test, and maintain."),(0,o.kt)("p",null,"That is why a lot of front-end frameworks suggest using state management tools along with the library. Because it separates components rendering from state management, and they are loosely coupled modules. ReactJS and Redux are examples of that."),(0,o.kt)("h3",{id:"312-pure-functions"},"3.1.2 Pure functions"),(0,o.kt)("p",null,"A function is called ",(0,o.kt)("strong",{parentName:"p"},"pure")," if it has the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Given the same input, always returns the same output"),(0,o.kt)("li",{parentName:"ul"},"Function without side effects")),(0,o.kt)("p",null,"A pure function also can be called a ",(0,o.kt)("strong",{parentName:"p"},"deterministic")," function."),(0,o.kt)("p",null,"Such JS arrays methods as: ",(0,o.kt)("inlineCode",{parentName:"p"},"map"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"filter"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"reduce")," etc., are examples of pure function. A pure function does not depend on any state, it only depends on input parameters."),(0,o.kt)("p",null,"Let's look on the example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Listing 3.4"',title:'"Listing','3.4"':!0},"const doubledPrice = (price) => price * 2;\ndoubledPrice(2);\n")),(0,o.kt)("p",null,"In this case, there are no side effects because ",(0,o.kt)("inlineCode",{parentName:"p"},"price")," comes as an argument. Also, the result will always be 4 if the ",(0,o.kt)("inlineCode",{parentName:"p"},"price")," is 2."),(0,o.kt)("p",null,"Just to compare let's check another example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Listing 3.5"',title:'"Listing','3.5"':!0},"let price = 2;\nconst doubledPrice = () => (price = price * 2);\ndoubledPrice();\n")),(0,o.kt)("p",null,"I believe, you already noticed the difference, there is a side effect in this case. The ",(0,o.kt)("inlineCode",{parentName:"p"},"price")," is changed inside the function, but ",(0,o.kt)("inlineCode",{parentName:"p"},"price")," is declared outside the ",(0,o.kt)("inlineCode",{parentName:"p"},"doubledPrice")," scope."),(0,o.kt)("h2",{id:"32-no-shared-state"},"3.2 No shared state"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Shared state")," is a memory space (could be an object or simple variable) that is reachable from all program parts. In other words, it is global and exists in shared scope. It also could be passed as a property between scopes. If two or more application parts change the same data, then the data is a shared state."),(0,o.kt)("h3",{id:"321-problems-with-shared-state"},"3.2.1 Problems with shared state"),(0,o.kt)("p",null,"If the state is changing from more than one place in the application, there is a risk of one modification preventing another part of the application to work with the actual data. So it might lead to strange hard to track bugs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Listing 3.6"',title:'"Listing','3.6"':!0},'const arr = ["bread", "milk", "wine"];\n\nfunction logGrocery(arr) {\n  for (let i = 0; i <= arr.length + 1; i++) {\n    console.log(arr.shift());\n  }\n}\n\nfunction main() {\n  // some code\n  logGrocery(arr);\n}\n\nfunction minor() {\n  // some code\n  logGrocery(arr);\n}\n\nmain();\nminor();\n\n// bread\n// milk\n// wine\n// undefined (1)\n')),(0,o.kt)("p",null,"In this case, there are three independent parties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Functions ",(0,o.kt)("inlineCode",{parentName:"li"},"main()")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"minor()")," do something and wants to log an ",(0,o.kt)("inlineCode",{parentName:"li"},"arr"),"."),(0,o.kt)("li",{parentName:"ul"},"Function ",(0,o.kt)("inlineCode",{parentName:"li"},"logElements()")," logs elements into ",(0,o.kt)("inlineCode",{parentName:"li"},"console"),". However, it removes elements from the array while logging them.\n",(0,o.kt)("inlineCode",{parentName:"li"},"logElements()")," breaks ",(0,o.kt)("inlineCode",{parentName:"li"},"minor()")," and that is why there is an ",(0,o.kt)("inlineCode",{parentName:"li"},"undefined")," in a line (1).")),(0,o.kt)("h3",{id:"322-how-to-avoid-it"},"3.2.2 How to avoid it"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"We can avoid shared state by copying data")),(0,o.kt)("p",null,'Until we are reading from a shared state without any modification we are safe. Before doing some modifications we need to "un-share" our state.'),(0,o.kt)("p",null,"Let's try to fix the previous example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Listing 3.7"',title:'"Listing','3.7"':!0},'const arr = ["bread", "milk", "wine"];\n\nfunction logGrocery(arr) {\n  const localArr = [...arr];\n\n  for (let i = 0; i <= localArr.length + 1; i++) {\n    console.log(localArr.shift());\n  }\n}\n\nfunction main() {\n  // some code\n  logGrocery(arr);\n}\n\nfunction minor() {\n  // some code\n  logGrocery(arr);\n}\n\nmain();\nminor();\n\n// bread\n// milk\n// wine\n// bread\n// milk\n// wine\n')),(0,o.kt)("p",null,"In this case, there are three independent parties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Functions ",(0,o.kt)("inlineCode",{parentName:"p"},"main()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"minor()")," do something and wants to log an ",(0,o.kt)("inlineCode",{parentName:"p"},"arr"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Function ",(0,o.kt)("inlineCode",{parentName:"p"},"logElements()")," logs elements into ",(0,o.kt)("inlineCode",{parentName:"p"},"console"),". The code creates a new variable ",(0,o.kt)("inlineCode",{parentName:"p"},"localArray"),", a copy of ",(0,o.kt)("inlineCode",{parentName:"p"},"arr"),". So the ",(0,o.kt)("inlineCode",{parentName:"p"},"localArray")," is modified, and it is a new declaration on each call. So everything works as expected.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Avoiding mutations by updating non-destructively"))),(0,o.kt)("p",null,"Let's imagine that we have to add some fruit to our shopping list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Listing 3.8"',title:'"Listing','3.8"':!0},"const shoppingList = [\"bread\", \"milk\", \"wine\"];\n\nfunction addToShoppingList(arr, item) {\n  return [...arr, item];\n}\n\nfunction main(item) {\n  // some code\n  return addToShoppingList(arr, item);\n}\n\nconst withFruit = main(\"fruit\");\n\nconsole.log(withFruit); // ['bread', 'milk', 'wine', 'fruit']\nconsole.log(shoppingList); // ['bread', 'milk', 'wine']\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Preventing mutations by making data immutable")),(0,o.kt)("p",null,"We can prevent mutations of shared data by making that data immutable. If data is immutable, it can be shared without any risks. In particular, there is no need to copy defensively."),(0,o.kt)("h2",{id:"33-composition"},"3.3 Composition"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Function composition")," is a combination of two or more functions. The single function does a small piece which is not valuable for an application, so in order to achieve the desired result, small functions have to be combined together. You can imagine composing functions as pipes of functions that data has to go through, so that outcome is reached. In functional programming, it is preferable to use composition over inheritance."),(0,o.kt)("h3",{id:"331-composition-over-inheritance"},"3.3.1 Composition over inheritance"),(0,o.kt)("p",null,"Let's check the example with object composition in JavaScript. This approach combines the power of objects and functional programming. For example, let's create an animal that can talk and eat. Previously, using inheritance we would have abstract class ",(0,o.kt)("inlineCode",{parentName:"p"},"Animal")," and a child class ",(0,o.kt)("inlineCode",{parentName:"p"},"TalkingAnimal"),". Imagine we had to add more and more animals. In this case, the hierarchy could become messy, since abilities are shared between animals."),(0,o.kt)("p",null,"Composition helps to solve the problem:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Listing 3.9"',title:'"Listing','3.9"':!0},'const dog = (name) => {\n  // (1)\n  const self = {\n    name,\n  };\n\n  return self;\n};\n\nconst buddy = dog("Buddy");\n')),(0,o.kt)("p",null,"The first step in ",(0,o.kt)("em",{parentName:"p"},"Listing 3.9")," ",(0,o.kt)("em",{parentName:"p"},"(1)")," is to create a function that creates an animal (e.g. dog)."),(0,o.kt)("p",null,"The internal variable ",(0,o.kt)("inlineCode",{parentName:"p"},"self")," represents the prototype using classes or prototypes."),(0,o.kt)("p",null,"The next step ",(0,o.kt)("em",{parentName:"p"},"(2)")," (",(0,o.kt)("em",{parentName:"p"},"Listing 3.10")," ",(0,o.kt)("em",{parentName:"p"},"(2)"),") is defining behaviors, it will be created as functions receiving the ",(0,o.kt)("inlineCode",{parentName:"p"},"self"),". Because they are functions it is easy to combine them. And finally ",(0,o.kt)("em",{parentName:"p"},"(3)"),", all of these functions have to be merged. ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign")," or the spread operator ",(0,o.kt)("inlineCode",{parentName:"p"},"({...a, ...b})")," can be used for this purpose."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Listing 3.10"',title:'"Listing','3.10"':!0},'const canSayHi = (self) => ({\n  // (1)\n  sayHi: () => console.log(`Hi! I\'m ${self.name}`),\n});\n\nconst canEat = () => ({\n  eat: (food) => console.log(`Eating ${food}...`),\n});\n\nconst behaviors = (self) => Object.assign({}, canSayHi(self), canEat()); // (2)\n\nconst dog = (name) => {\n  const self = {\n    name,\n  };\n\n  const dogBehaviors = (self) => ({\n    bark: () => console.log("Ruff!"),\n  });\n\n  return Object.assign(self, behaviors(self), dogBehaviors(self)); // (3)\n};\n\nconst buddy = dog("Buddy");\n\nbuddy.sayHi(); // Hi! I\'m Buddy\nbuddy.eat("Petfood"); // Eating Petfood...\nbuddy.bark(); // Ruff!\n')),(0,o.kt)("p",null,"The different behaviors were defined by using the prefix ",(0,o.kt)("inlineCode",{parentName:"p"},"can"),". Also, some behavior was combined ",(0,o.kt)("em",{parentName:"p"},"Listing 3.10, 2")," by ",(0,o.kt)("strong",{parentName:"p"},"composition"),"."),(0,o.kt)("p",null,"Let's create another animal, for example, a cat. The cat can talk and, it can eat as all animals do:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Listing 3.11"',title:'"Listing','3.11"':!0},'const cat = (name) => {\n  const self = {\n    name,\n  };\n\n  const catBehaviors = (self) => ({\n    meow: () => console.log("Meow!"),\n    haveLunch: (food) => {\n      self.eat(food);\n    },\n  });\n\n  return Object.assign(self, catBehaviors(self), canEat());\n};\n\nconst kitty = cat("Kitty");\n\nkitty.haveLunch("fish"); // Eating fish...\nkitty.meow(); // Meow!\n')),(0,o.kt)("p",null,"Keep in mind that all functionality was added in the same ",(0,o.kt)("inlineCode",{parentName:"p"},"self")," reference, that is a reason why ",(0,o.kt)("inlineCode",{parentName:"p"},"self.eat")," can be called within ",(0,o.kt)("inlineCode",{parentName:"p"},"haveLunch"),". That allows us to create ",(0,o.kt)("inlineCode",{parentName:"p"},"catBehaviors")," on top of other ",(0,o.kt)("inlineCode",{parentName:"p"},"behaviors"),"."),(0,o.kt)("p",null,"So composition is easier in maintenance and for reusability purposes. It is easy to refactor the code if needed. Composition is a simple ",(0,o.kt)("em",{parentName:"p"},"mental model"),", so there is no need to think in advance of hierarchy, and we can combine all small pieces in the way that we need them to be. For example, ",(0,o.kt)("em",{parentName:"p"},"Listing 3.12"),". The task is to create a statistic board with the possibility to sort, find all occurrences, and filter by prop."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Listing 3.12"',title:'"Listing','3.12"':!0},'const stat = [\n  { name: "Lora", score: 1.003 },\n  { name: "Lora", score: 1.003 },\n  { name: "Lora", score: 2 },\n  { name: "Max", score: 3.76 },\n];\n\nconst sort = (arr) => {\n  return arr.sort((a, b) => b.score - a.score);\n};\n\nconst filter = (params) => {\n  return (arr) => arr.filter((item) => item.name === params);\n};\n\nconst findAll = (params) => {\n  return (arr) => arr.filter((item) => item.score === params);\n};\n\nconst compose = (...funcs) => {\n  return (arr) => {\n    return funcs.reverse().reduce((acc, func) => func(acc), arr);\n  };\n};\n\nconsole.log(compose(filter("Lora"))(stat)); // [{ name: "Lora", score: 1.003 }, { name: "Lora", score: 1.003 }, { name: "Lora", score: 2 }]\nconsole.log(compose(findAll(1.003), filter("Lora"))(stat)); // [{ name: "Lora", score: 1.003 }, { name: "Lora", score: 1.003 }]\nconsole.log(compose(sort, filter("Lora"))(stat)); // [{ name: "Lora",score: 2 }, { name: "Lora",score: 1.003 }, { name: "Lora",score: 1.003 }]\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"sort")," function sorts,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"findAll")," function finds all ",(0,o.kt)("inlineCode",{parentName:"li"},"score")," occurrences,"),(0,o.kt)("li",{parentName:"ul"},"and ",(0,o.kt)("inlineCode",{parentName:"li"},"filter")," filters by ",(0,o.kt)("inlineCode",{parentName:"li"},"name"),","),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"compose")," function is a self-invoking","*"," function that can take any number of parameters and execute right-to-left, in other words, performs right-to-left function composition. So, you can compose functions the way you need. There is a possibility to ",(0,o.kt)("inlineCode",{parentName:"li"},"filter")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"sort")," in one part of the application and ",(0,o.kt)("inlineCode",{parentName:"li"},"filter")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"find")," in another without any duplication, by composing small reusable parts.")),(0,o.kt)("p",null,"*"," ",(0,o.kt)("strong",{parentName:"p"},"self-invoking")," function is a nameless (anonymous) function that is invoked immediately after its definition."))}u.isMDXComponent=!0}}]);