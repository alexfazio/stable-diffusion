"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[1773],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},22695:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const i=n.p+"assets/images/dyno_example-f0fc428861e9edc3f10fd523afdeb4dc.png",r=n.p+"assets/images/API_key-a5bf434ed95b6a5650101e617e50ebae.png",s={sidebar_position:0},l="\ud83d\udfe2 Introduction",p={unversionedId:"basics/intro",id:"basics/intro",title:"\ud83d\udfe2 Introduction",description:"This chapter introduces simple prompting techniques as well as terminology. In order to understand prompting/prompt engineering, you first need to understand some very basic AI concepts. If you already know about the below topics, feel free to skip ahead to the next article.",source:"@site/docs/basics/intro.md",sourceDirName:"basics",slug:"/basics/intro",permalink:"/docs/basics/intro",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/basics/intro.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\ud83d\ude03 Basics",permalink:"/docs/category/-basics"},next:{title:"\ud83d\udfe2 Prompting",permalink:"/docs/basics/prompting"}},c={},u=[{value:"What is AI?",id:"what-is-ai",level:2},{value:"Why should I care?",id:"why-should-i-care",level:2},{value:"How do I get started?",id:"how-do-i-get-started",level:2},{value:"Dyno Embeds",id:"dyno-embeds",level:3}],d={toc:u},h="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"-introduction"},"\ud83d\udfe2 Introduction"),(0,o.kt)("p",null,"This chapter introduces simple prompting techniques as well as terminology. In order to understand prompting/prompt engineering, you first need to understand some ",(0,o.kt)("em",{parentName:"p"},"very")," basic AI concepts. If you already know about the below topics, feel free to skip ahead to the ",(0,o.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/basics/prompting"},"next article"),"."),(0,o.kt)("h2",{id:"what-is-ai"},"What is AI?"),(0,o.kt)("p",null,'For our purposes, artificial intelligence (AI) is a field in which people have created\n"smart" algorithms that "think" like humans',(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". These algorithms can write ",(0,o.kt)("strong",{parentName:"p"},"essays"),",\nsolve ",(0,o.kt)("strong",{parentName:"p"},"math problems"),", and create ",(0,o.kt)("strong",{parentName:"p"},"art"),". Recent advances in the field have created AIs\nso advanced that they can write convincing ",(0,o.kt)("strong",{parentName:"p"},"sales emails"),", ",(0,o.kt)("strong",{parentName:"p"},"news articles"),", and even\n",(0,o.kt)("strong",{parentName:"p"},"win ",(0,o.kt)("a",{parentName:"strong",href:"https://impakter.com/art-made-by-ai-wins-fine-arts-competition/"},"art competitions")),"."),(0,o.kt)("p",null,"AI is currently revolutionizing many industries, including ",(0,o.kt)("strong",{parentName:"p"},"journalism"),", ",(0,o.kt)("strong",{parentName:"p"},"healthcare"),", and\n",(0,o.kt)("strong",{parentName:"p"},"education"),". You will likely see it deployed in your workplace/classroom soon if you have not\nalready. Although AI is extremely useful, it requires humans to direct it on what to do.\nOften AIs are like very smart five-year-olds. They can do a lot of things, but they need\ncareful instruction to do them well."),(0,o.kt)("p",null,"Being able to properly direct AIs is a very powerful skill. So, how do you communicate with them?\nThe AIs this course discusses understand English (and other languages),\nso we can usually just describe tasks that we want done. For example, we can tell an AI to\n",(0,o.kt)("inlineCode",{parentName:"p"},"Write an essay about the benefits of AI")," and it would say",(0,o.kt)("sup",{parentName:"p",id:"fnref-2"},(0,o.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"In recent years, Artificial Intelligence (AI) has become a hot topic among the tech world. With its potential to revolutionize many aspects of our lives, AI is becoming increasingly relevant as technology continues to develop. From its applications in healthcare and transportation to its use in education and manufacturing, AI has already shown us its immense potential to benefit society in multiple ways.\n\nThe most obvious benefit of AI is its ability to automate mundane tasks. AI systems can be used to automate large-scale operations, such as data analysis, customer service, and even the production of goods. This frees up human labor to focus on complex, creative tasks that require more human intelligence and ingenuity. AI can also be used to analyze large amounts of data and make decisions in a fraction of the time it would take a human. This can be beneficial in industries such as finance, where AI can detect patterns in the stock market and offer insights that would otherwise go unnoticed.\n\nAI can also be used to make predictions and generate insights that can be used to improve efficiency and accuracy. For instance, AI can be used to predict customer trends and preferences, helping businesses make better decisions and increase profits. AI can also be used to identify potential risks and opportunities in various industries, such as finance, healthcare, and manufacturing. This can help companies make informed decisions and reduce the risk of costly mistakes.\n\nFinally, AI can be used to improve our understanding of the world. AI can be used to analyze large datasets and generate insights that can be used to better understand the world around us. This can be used to help us better understand the impacts of climate change, develop new treatments for diseases, and even predict events such as earthquakes and floods.\n\nOverall, AI has the potential to revolutionize many aspects of our lives. From automating mundane tasks to generating insights and predictions, AI can be used to improve efficiency, accuracy, and our understanding of the world. As technology continues to develop, AI will become increasingly relevant and its potential to benefit society will only grow.\n")),(0,o.kt)("h2",{id:"why-should-i-care"},"Why should I care?"),(0,o.kt)("p",null,"AI can be used to automate tasks that you spend countless hours doing ",(0,o.kt)("em",{parentName:"p"},"right now"),".\nWe mentioned several examples above, but you can also consider any slightly repetitive task you do.\nIt could be writing emails, writing reports, or even writing code. If you can describe the task\nto an AI, it can likely either do it for you or at least give you a starting point. "),(0,o.kt)("h2",{id:"how-do-i-get-started"},"How do I get started?"),(0,o.kt)("p",null,"Read the rest of this chapter, then check out other chapters that interest you.\nIn particular, the ",(0,o.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/applied_prompting/overview"},"applied prompting")," section may be of interest if you would like\nto see how professionals use AI to automate their work. You can experiment with AIs\nusing resources like ",(0,o.kt)("a",{parentName:"p",href:"https://beta.openai.com/playground"},"Playground"),", ",(0,o.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/tooling/IDEs/intro"},"other IDEs"),", or simply using the interactive ",(0,o.kt)("a",{parentName:"p",href:"https://learnprompting.org/docs/basics/intro#dyno-embeds"},"Dyno embeds")," that you will see throughout this site."),(0,o.kt)("p",null,"Before reading the next article, it is important to note that you don't need any technical background to do prompt engineering. Most of it is trial and error, and you can learn as you go."),(0,o.kt)("h3",{id:"dyno-embeds"},"Dyno Embeds"),(0,o.kt)("p",null,"This course offers an interactive learning experience. You can experiment with exercises discussed in the course using ",(0,o.kt)("a",{parentName:"p",href:"https://trydyno.com"},"Dyno")," embeds that are placed throughout the site."),(0,o.kt)("p",null,"Here is an ",(0,o.kt)("strong",{parentName:"p"},"image")," of what a Dyno embed looks like:"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:i,style:{width:"750px"}})),(0,o.kt)("p",null,"You should be able to see an embed that looks exactly like this image right below this paragraph. If you can't, you may need to enable JavaScript or use a different browser."),(0,o.kt)("hr",null),"Embed here:",(0,o.kt)("div",{"trydyno-embed":"","openai-model":"text-davinci-003","initial-prompt":"Generate a comma separated list of 10 ice cream flavors:","initial-response":"Chocolate, Vanilla, Strawberry, Mint Chip, Rocky Road, Cookie Dough, Butter Pecan, Neapolitan, Coffee, Coconut","max-tokens":"256","box-rows":"3","model-temp":"0.7","top-p":"1"},(0,o.kt)("noscript",null,"Failed to load Dyno Embed: JavaScript must be enabled")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Assuming that you can see it, click on the ",(0,o.kt)("strong",{parentName:"p"},"Generate")," button. If this is your first time using it (or you are in a new browser/have cleared cookies), it will ask you to input an ",(0,o.kt)("a",{parentName:"p",href:"https://platform.openai.com/account/api-keys"},"OpenAI API key"),". You can get a free key by clicking ",(0,o.kt)("a",{parentName:"p",href:"https://platform.openai.com/account/api-keys"},"this link")," and signing up for an OpenAI account. This key allows you to use OpenAI's AIs to generate text in the Dyno embeds. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Although OpenAI provides free credits, you will eventually have to pay to use their AI. Fortunately, it is ",(0,o.kt)("a",{parentName:"p",href:"https://openai.com/pricing"},"relatively cheap"),"!")),(0,o.kt)("p",null,"When you navigate to the ",(0,o.kt)("a",{parentName:"p",href:"https://platform.openai.com/account/api-keys"},"OpenAI API key")," page, click the ",(0,o.kt)("strong",{parentName:"p"},"Create new secret key")," button. It will pop up a modal that contains a string of text like this:"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:r,style:{width:"750px"}})),(0,o.kt)("p",null,"Put this key into the Dyno embed and hit ",(0,o.kt)("strong",{parentName:"p"},"Save"),". You should now be able to use the Dyno embeds throughout this site."),(0,o.kt)("p",null,"Now you have all of the information that you need to get started. Happy Learning!"),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},'Technically, they are not "thinking" like humans, but this is a simple way to explain it.',(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,o.kt)("li",{parentName:"ol",id:"fn-2"},"An AI (GPT-3 davinci-003) did in fact write this.",(0,o.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0}}]);