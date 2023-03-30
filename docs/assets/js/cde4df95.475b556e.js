"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9696],{5318:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=r,f=m["".concat(l,".").concat(u)]||m[u]||p[u]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>g});var a=n(7378),r=n(8944),o=n(5161),i=n(1884),s=n(5626),l=n(9213);const c={cardContainer:"cardContainer_H47c",cardTitle:"cardTitle_tTnA",cardDescription:"cardDescription_rTl4"};function d(e){let{href:t,children:n}=e;return a.createElement(i.Z,{href:t,className:(0,r.Z)("card padding--lg",c.cardContainer)},n)}function m(e){let{href:t,icon:n,title:o,description:i}=e;return a.createElement(d,{href:t},a.createElement("h2",{className:(0,r.Z)("text--truncate",c.cardTitle),title:o},n," ",o),i&&a.createElement("p",{className:(0,r.Z)("text--truncate",c.cardDescription),title:i},i))}function p(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?a.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const n=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(t.docId??void 0);return a.createElement(m,{href:t.href,icon:n,title:t.label,description:r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return a.createElement(u,{item:t});case"category":return a.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const n=(0,o.jA)();return a.createElement(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return a.createElement(h,e);const i=(0,o.MN)(t);return a.createElement("section",{className:(0,r.Z)("row",n)},i.map(((e,t)=>a.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},a.createElement(f,{item:e})))))}},9770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(5773),r=(n(7378),n(5318)),o=n(5162);const i={sidebar_position:2,hide_table_of_contents:!0,sidebar_label:"Models"},s="Models",l={unversionedId:"modules/models/index",id:"modules/models/index",title:"Models",description:"Conceptual Guide",source:"@site/docs/modules/models/index.mdx",sourceDirName:"modules/models",slug:"/modules/models/",permalink:"/langchainjs/docs/modules/models/",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/docs/modules/models/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,hide_table_of_contents:!0,sidebar_label:"Models"},sidebar:"sidebar",previous:{title:"Examples",permalink:"/langchainjs/docs/modules/schema/example"},next:{title:"Chat Models",permalink:"/langchainjs/docs/modules/models/chat/"}},c={},d=[{value:"All Models",id:"all-models",level:2},{value:"Advanced",id:"advanced",level:2}],m={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"models"},"Models"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://docs.langchain.com/docs/components/models/"},"Conceptual Guide"))),(0,r.kt)("p",null,"Models are a core component of LangChain. LangChain is not a provider of models, but rather provides a standard interface through which you can interact with a variety of language models.\nLangChain provides support for both text-based Large Language Models (LLMs), Chat Models, and Text Embedding models."),(0,r.kt)("p",null,"LLMs use a text-based input and output, while Chat Models use a message-based input and output."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Note:"))," Chat model APIs are fairly new, so we are still figuring out the correct abstractions. If you have any feedback, please let us know!")),(0,r.kt)("h2",{id:"all-models"},"All Models"),(0,r.kt)(o.Z,{mdxType:"DocCardList"}),(0,r.kt)("h2",{id:"advanced"},"Advanced"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This section is for users who want a deeper technical understanding of how LangChain works. If you are just getting started, you can skip this section.")),(0,r.kt)("p",null,"Both LLMs and Chat Models are built on top of the ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseLanguageModel")," class. This class provides a common interface for all models, and allows us to easily swap out models in chains without changing the rest of the code."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseLanguageModel")," class has two abstract methods: ",(0,r.kt)("inlineCode",{parentName:"p"},"generatePrompt")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"getNumTokens"),", which are implemented by ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseChatModel")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseLLM")," respectively."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"BaseLLM")," is a subclass of ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseLanguageModel")," that provides a common interface for LLMs while ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseChatModel")," is a subclass of ",(0,r.kt)("inlineCode",{parentName:"p"},"BaseLanguageModel")," that provides a common interface for chat models."))}u.isMDXComponent=!0}}]);