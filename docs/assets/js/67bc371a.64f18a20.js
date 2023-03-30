"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4838],{8006:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>m,toc:()=>h});var s=n(5773),r=(n(7378),n(5318)),a=n(6538);const o='import { OpenAI, PromptTemplate } from "langchain";\nimport { StructuredOutputParser } from "langchain/output_parsers";\n\nexport const run = async () => {\n  // With a `StructuredOutputParser` we can define a schema for the output.\n  const parser = StructuredOutputParser.fromNamesAndDescriptions({\n    answer: "answer to the user\'s question",\n    source: "source used to answer the user\'s question, should be a website.",\n  });\n\n  const formatInstructions = parser.getFormatInstructions();\n\n  const prompt = new PromptTemplate({\n    template:\n      "Answer the users question as best as possible.\\n{format_instructions}\\n{question}",\n    inputVariables: ["question"],\n    partialVariables: { format_instructions: formatInstructions },\n  });\n\n  const model = new OpenAI({ temperature: 0 });\n\n  const input = await prompt.format({\n    question: "What is the capital of France?",\n  });\n  const response = await model.call(input);\n\n  console.log(input);\n  /*\n  Answer the users question as best as possible.\n  The output should be a markdown code snippet formatted in the following schema:\n  ```json\n  {\n      "answer": string // answer to the user\'s question\n      "source": string // source used to answer the user\'s question, should be a website.\n  }\n  ```\n  */\n\n  console.log(response);\n  /*\n  ```json\n  {\n      "answer": "Paris",\n      "source": "https://en.wikipedia.org/wiki/France"\n  }\n  ```\n  */\n\n  console.log(parser.parse(response));\n  // { answer: \'Paris\', source: \'https://en.wikipedia.org/wiki/France\' }\n};\n',u='import { z } from "zod";\nimport { OpenAI, PromptTemplate } from "langchain";\nimport { StructuredOutputParser } from "langchain/output_parsers";\n\nexport const run = async () => {\n  // We can use zod to define a schema for the output using the `fromZodSchema` method of `StructuredOutputParser`.\n  const parser = StructuredOutputParser.fromZodSchema(\n    z.object({\n      answer: z.string().describe("answer to the user\'s question"),\n      sources: z\n        .array(z.string())\n        .describe("sources used to answer the question, should be websites."),\n    })\n  );\n\n  const formatInstructions = parser.getFormatInstructions();\n\n  const prompt = new PromptTemplate({\n    template:\n      "Answer the users question as best as possible.\\n{format_instructions}\\n{question}",\n    inputVariables: ["question"],\n    partialVariables: { format_instructions: formatInstructions },\n  });\n\n  const model = new OpenAI({ temperature: 0 });\n\n  const input = await prompt.format({\n    question: "What is the capital of France?",\n  });\n  const response = await model.call(input);\n\n  console.log(input);\n  /*\n  Answer the users question as best as possible.\n  The output should be a markdown code snippet formatted in the following schema:\n  */\n\n  console.log(response);\n  /*\n  ```json\n  {\n      "answer": "The capital of France is Paris.",\n      "sources": ["https://www.worldatlas.com/articles/what-is-the-capital-of-france.html"]\n  }\n  ```\n  */\n\n  console.log(parser.parse(response));\n  /*\n  {\n    answer: \'The capital of France is Paris.\',\n    sources: [\n      \'https://www.worldatlas.com/articles/what-is-the-capital-of-france.html\'\n    ]\n  }\n  */\n};\n',p='import { z } from "zod";\nimport { ChatOpenAI } from "langchain/chat_models";\nimport {\n  StructuredOutputParser,\n  OutputFixingParser,\n} from "langchain/output_parsers";\n\nexport const run = async () => {\n  const parser = StructuredOutputParser.fromZodSchema(\n    z.object({\n      answer: z.string().describe("answer to the user\'s question"),\n      sources: z\n        .array(z.string())\n        .describe("sources used to answer the question, should be websites."),\n    })\n  );\n  /** This is a bad output because sources is a string, not a list */\n  const badOutput = `\\`\\`\\`json\n  {\n    "answer": "foo",\n    "sources": "foo.com"\n  }\n  \\`\\`\\``;\n  try {\n    await parser.parse(badOutput);\n  } catch (e) {\n    console.log("Failed to parse bad output: ", e);\n    /*\n    Failed to parse bad output:  OutputParserException [Error]: Failed to parse. Text: ```json\n      {\n        "answer": "foo",\n        "sources": "foo.com"\n      }\n      ```. Error: [\n      {\n        "code": "invalid_type",\n        "expected": "array",\n        "received": "string",\n        "path": [\n          "sources"\n        ],\n        "message": "Expected array, received string"\n      }\n    ]\n    at StructuredOutputParser.parse (/Users/ankushgola/Code/langchainjs/langchain/src/output_parsers/structured.ts:71:13)\n    at run (/Users/ankushgola/Code/langchainjs/examples/src/prompts/fix_parser.ts:25:18)\n    at <anonymous> (/Users/ankushgola/Code/langchainjs/examples/src/index.ts:33:22)\n   */\n  }\n  const fixParser = OutputFixingParser.fromLLM(\n    new ChatOpenAI({ temperature: 0 }),\n    parser\n  );\n  const output = await fixParser.parse(badOutput);\n  console.log("Fixed output: ", output);\n  // Fixed output:  { answer: \'foo\', sources: [ \'foo.com\' ] }\n};\n',i="import { OpenAI, PromptTemplate } from \"langchain\";\nimport { CommaSeparatedListOutputParser } from \"langchain/output_parsers\";\n\nexport const run = async () => {\n  // With a `CommaSeparatedListOutputParser`, we can parse a comma separated list.\n  const parser = new CommaSeparatedListOutputParser();\n\n  const formatInstructions = parser.getFormatInstructions();\n\n  const prompt = new PromptTemplate({\n    template: \"List five {subject}.\\n{format_instructions}\",\n    inputVariables: [\"subject\"],\n    partialVariables: { format_instructions: formatInstructions },\n  });\n\n  const model = new OpenAI({ temperature: 0 });\n\n  const input = await prompt.format({ subject: \"ice cream flavors\" });\n  const response = await model.call(input);\n\n  console.log(input);\n  /*\n   List five ice cream flavors.\n   Your response should be a list of comma separated values, eg: `foo, bar, baz`\n  */\n\n  console.log(response);\n  // Vanilla, Chocolate, Strawberry, Mint Chocolate Chip, Cookies and Cream\n\n  console.log(parser.parse(response));\n  /*\n  [\n    'Vanilla',\n    'Chocolate',\n    'Strawberry',\n    'Mint Chocolate Chip',\n    'Cookies and Cream'\n  ]\n  */\n};\n",c={hide_table_of_contents:!0,sidebar_label:"Output Parsers",sidebar_position:2},l="Output Parsers",m={unversionedId:"modules/prompts/output_parsers/index",id:"modules/prompts/output_parsers/index",title:"Output Parsers",description:"Conceptual Guide",source:"@site/docs/modules/prompts/output_parsers/index.mdx",sourceDirName:"modules/prompts/output_parsers",slug:"/modules/prompts/output_parsers/",permalink:"/langchainjs/docs/modules/prompts/output_parsers/",draft:!1,editUrl:"https://github.com/hwchase17/langchainjs/docs/modules/prompts/output_parsers/index.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{hide_table_of_contents:!0,sidebar_label:"Output Parsers",sidebar_position:2},sidebar:"sidebar",previous:{title:"Additional Functionality",permalink:"/langchainjs/docs/modules/prompts/prompt_templates/additional_functionality"},next:{title:"Example Selectors",permalink:"/langchainjs/docs/modules/prompts/example_selectors/"}},d={},h=[{value:"Structured Output Parser",id:"structured-output-parser",level:2},{value:"Structured Output Parser with Zod Schema",id:"structured-output-parser-with-zod-schema",level:2},{value:"Output Fixing Parser",id:"output-fixing-parser",level:2},{value:"Comma-separated List Parser",id:"comma-separated-list-parser",level:2}],f={toc:h},w="wrapper";function g(t){let{components:e,...n}=t;return(0,r.kt)(w,(0,s.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"output-parsers"},"Output Parsers"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"https://docs.langchain.com/docs/components/output-parser"},"Conceptual Guide"))),(0,r.kt)("p",null,"Language models output text. But many times you may want to get more structured information than just text back. This is where output parsers come in."),(0,r.kt)("p",null,"Output parsers are classes that help structure language model responses. There are two main methods an output parser must implement:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"getFormatInstructions(): str")," A method which returns a string containing instructions for how the output of a language model should be formatted."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parse(raw: string): any")," A method which takes in a string (assumed to be the response from a language model) and parses it into some structure.")),(0,r.kt)("p",null,"And then one optional one:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parseWithPrompt(text: string, prompt: BasePromptValue): any"),": A method which takes in a string (assumed to be the response from a language model) and a formatted prompt (assumed to the prompt that generated such a response) and parses it into some structure. The prompt is largely provided in the event the OutputParser wants to retry or fix the output in some way, and needs information from the prompt to do so.")),(0,r.kt)("p",null,"Below we go over some examples of output parsers."),(0,r.kt)("h2",{id:"structured-output-parser"},"Structured Output Parser"),(0,r.kt)("p",null,"This output parser can be used when you want to return multiple fields."),(0,r.kt)(a.Z,{language:"typescript",mdxType:"CodeBlock"},o),(0,r.kt)("h2",{id:"structured-output-parser-with-zod-schema"},"Structured Output Parser with Zod Schema"),(0,r.kt)("p",null,"This output parser can be also be used when you want to define the output schema using Zod, a TypeScript validation library."),(0,r.kt)(a.Z,{language:"typescript",mdxType:"CodeBlock"},u),(0,r.kt)("h2",{id:"output-fixing-parser"},"Output Fixing Parser"),(0,r.kt)("p",null,"This output parser wraps another output parser, and in the event that the first one fails it calls out to another LLM to fix any errors."),(0,r.kt)(a.Z,{language:"typescript",mdxType:"CodeBlock"},p),(0,r.kt)("h2",{id:"comma-separated-list-parser"},"Comma-separated List Parser"),(0,r.kt)("p",null,"This output parser can be used when you want to return a list of items."),(0,r.kt)(a.Z,{language:"typescript",mdxType:"CodeBlock"},i))}g.isMDXComponent=!0}}]);