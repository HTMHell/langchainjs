"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6557],{5318:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(5773),o=(n(7378),n(5318));const a={hide_table_of_contents:!0},s="MarkdownTextSplitter",i={unversionedId:"modules/indexes/text_splitters/examples/markdown",id:"modules/indexes/text_splitters/examples/markdown",title:"MarkdownTextSplitter",description:"If your content is in Markdown format then MarkdownTextSplitter. This class will split your content into documents based on the Markdown headers. For example, if you have the following Markdown content:",source:"@site/docs/modules/indexes/text_splitters/examples/markdown.mdx",sourceDirName:"modules/indexes/text_splitters/examples",slug:"/modules/indexes/text_splitters/examples/markdown",permalink:"/langchainjs/docs/modules/indexes/text_splitters/examples/markdown",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/docs/modules/indexes/text_splitters/examples/markdown.mdx",tags:[],version:"current",frontMatter:{hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"CharacterTextSplitter",permalink:"/langchainjs/docs/modules/indexes/text_splitters/examples/character"},next:{title:"RecursiveCharacterTextSplitter",permalink:"/langchainjs/docs/modules/indexes/text_splitters/examples/recursive_character"}},l={},c=[],p={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"markdowntextsplitter"},(0,o.kt)("inlineCode",{parentName:"h1"},"MarkdownTextSplitter")),(0,o.kt)("p",null,"If your content is in Markdown format then ",(0,o.kt)("inlineCode",{parentName:"p"},"MarkdownTextSplitter"),". This class will split your content into documents based on the Markdown headers. For example, if you have the following Markdown content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"# Header 1\n\nThis is some content.\n\n## Header 2\n\nThis is some more content.\n\n# Header 3\n\nThis is even more content.\n")),(0,o.kt)("p",null,"Then the ",(0,o.kt)("inlineCode",{parentName:"p"},"MarkdownTextSplitter")," will split the content into three documents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { MarkdownTextSplitter } from "langchain/text_splitter";\n\nconst text = `# Header 1\n\nThis is some content.\n\n## Header 2\n\nThis is some more content.\n\n# Header 3\n\nThis is even more content.`;\n\nconst splitter = new MarkdownTextSplitter();\n\nconst output = splitter.createDocuments([text], { metadata: "something" });\n/*\n[\n  {\n    "pageContent": "# Header 1\\n\\nThis is some content.",\n    "metadata": "something"\n  },\n  {\n    "pageContent": "## Header 2\\n\\nThis is some more content.",\n    "metadata": "something"\n  },\n  {\n    "pageContent": "# Header 3\\n\\nThis is even more content.",\n    "metadata": "something"\n  }\n]\n*/\n')))}m.isMDXComponent=!0}}]);