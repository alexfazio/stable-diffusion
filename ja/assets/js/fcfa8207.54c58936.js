"use strict";(self.webpackChunkpromptgineering=self.webpackChunkpromptgineering||[]).push([[2396],{8043:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var o=a(7462),r=(a(7294),a(3905)),n=a(9145);const i={sidebar_position:7},s="\ud83d\udfe2 What's in a Prompt?",l={unversionedId:"intermediate/whats_in_a_prompt",id:"intermediate/whats_in_a_prompt",title:"\ud83d\udfe2 What's in a Prompt?",description:"When crafting prompts for language learning models (LLMs), there are several factors to consider. The format and labelspace both play crucial roles in the effectiveness of the prompt.",source:"@site/docs/intermediate/whats_in_a_prompt.md",sourceDirName:"intermediate",slug:"/intermediate/whats_in_a_prompt",permalink:"/ja/docs/intermediate/whats_in_a_prompt",draft:!1,editUrl:"https://github.com/trigaten/promptgineering/tree/v1.2.3/docs/intermediate/whats_in_a_prompt.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udfe1 Dealing With Long Form Content",permalink:"/ja/docs/intermediate/long_form_content"},next:{title:"\ud83e\uddea Applied Prompting",permalink:"/ja/docs/category/-applied-prompting"}},p={},m=[{value:"The Importance of Format",id:"the-importance-of-format",level:2},{value:"Ground Truth: Not as Important as You Might Think",id:"ground-truth-not-as-important-as-you-might-think",level:2},{value:"The Role of Labelspace",id:"the-role-of-labelspace",level:2},{value:"Additional Tips",id:"additional-tips",level:2}],h={toc:m},c="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,o.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-whats-in-a-prompt"},"\ud83d\udfe2 What's in a Prompt?"),(0,r.kt)("p",null,"When crafting prompts for language learning models (LLMs), there are several factors to consider. The format and labelspace",(0,r.kt)("sup",{parentName:"p",id:"fnref-a"},(0,r.kt)("a",{parentName:"sup",href:"#fn-a",className:"footnote-ref"},"a"))," both play crucial roles in the effectiveness of the prompt. "),(0,r.kt)("h2",{id:"the-importance-of-format"},"The Importance of Format"),(0,r.kt)("p",null,"The format of the ",(0,r.kt)("a",{parentName:"p",id:"exemplars_0_18_1690621745249","data-tooltip-html":"Examples of the task that the prompt is trying to solve, which are included in the prompt itself.","data-tooltip-place":"top"},"exemplars"),(0,r.kt)(n.u,{anchorId:"exemplars_0_18_1690621745249",clickable:!0,mdxType:"Tooltip"})," in a prompt is crucial. It instructs the LLM on how to structure its response. For instance, if the exemplars use all capital words as answers, the LLM will follow suit, even if the answers provided are incorrect. "),(0,r.kt)("p",null,"Consider the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"What is 2+2? \nFIFTY\nWhat is 20+5?\nFORTY-THREE\nWhat is 12+9?\nTWENTY-ONE\n")),(0,r.kt)("p",null,"Despite the incorrect answers, the LLM correctly formats its response in all capital letters",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),"."),(0,r.kt)("h2",{id:"ground-truth-not-as-important-as-you-might-think"},"Ground Truth: Not as Important as You Might Think"),(0,r.kt)("p",null,"Interestingly, the actual answers or 'ground truth' in the exemplars are not as important as one might think. Research shows that providing random ",(0,r.kt)("a",{parentName:"p",id:"labels_0_147_1690621745249","data-tooltip-html":"The concept of labels is best understood with an example. <br/><br/>Say we want to classify some Tweets as mean or not mean. If we have a list of Tweets and their corresponding *label* (mean or not mean), we can train a model to classify whether tweets are mean or not. Labels are generally just possibilities for the classification task.","data-tooltip-place":"top"},"labels"),(0,r.kt)(n.u,{anchorId:"labels_0_147_1690621745249",clickable:!0,mdxType:"Tooltip"})," in the exemplars (as seem in the above example) has little impact on performance",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". This means that the LLM can still generate a correct response even if the exemplars contain incorrect information."),(0,r.kt)("h2",{id:"the-role-of-labelspace"},"The Role of Labelspace"),(0,r.kt)("p",null,'While the ground truth may not be crucial, the labelspace is. The labelspace refers to the list of possible labels for a given task. For example, in a classification task, the labelspace might include "positive" and "negative". '),(0,r.kt)("p",null,"Providing random labels from the labelspace in the exemplars can help the LLM understand the labelspace better, leading to improved results. Furthermore, it's important to represent the distribution of the labelspace accurately in the exemplars. Instead of sampling uniformly from the labelspace, it's better to sample according to the true distribution of the labels",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". For example, if you have a dataset of restaurant reviews and 60\\% of them are positive, your prompt should contains a 3:2 ratio of positive/negative prompts."),(0,r.kt)("h2",{id:"additional-tips"},"Additional Tips"),(0,r.kt)("p",null,"When creating prompts, using between 4-8 exemplars tends to yield good result",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")),". However, it can often be beneficial to include as many exemplars as possible. "),(0,r.kt)("p",null,"In conclusion, understanding the importance of format, ground truth, and labelspace can greatly enhance the effectiveness of your prompts."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-a"},"See the ",(0,r.kt)("a",{parentName:"li",href:"https://learnprompting.org/docs/vocabulary#labels"},"vocabulary reference")," for more info.",(0,r.kt)("a",{parentName:"li",href:"#fnref-a",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"Min, S., Lyu, X., Holtzman, A., Artetxe, M., Lewis, M., Hajishirzi, H., & Zettlemoyer, L. (2022). Rethinking the Role of Demonstrations: What Makes In-Context Learning Work?\n",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}f.isMDXComponent=!0}}]);