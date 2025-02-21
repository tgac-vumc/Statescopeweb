"use strict";(self.webpackChunkStatescope=self.webpackChunkStatescope||[]).push([[6803],{2468:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>C,contentTitle:()=>A,default:()=>T,frontMatter:()=>q,metadata:()=>a,toc:()=>E});const a=JSON.parse('{"id":"installation","title":"Installation Guide","description":"\ud83d\udda5\ufe0f Hardware Requirements","source":"@site/docs/installation.md","sourceDirName":".","slug":"/installation","permalink":"/Statescopeweb/docs/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/tgac-vumc/Statescopeweb.git/docs/installation.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"id":"installation","title":"Installation Guide","sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"Input Arguments","permalink":"/Statescopeweb/docs/input"}}');var l=t(4848),s=t(8453),r=t(6540),i=t(4164),o=t(3104),c=t(6347),d=t(205),u=t(7485),h=t(1682),p=t(679);function m(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return m(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:l}}=e;return{value:n,label:t,attributes:a,default:l}}))}(t);return function(e){const n=(0,h.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function j(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const a=(0,c.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=x(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!j({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[o,c]=g({queryString:t,groupId:a}),[u,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,p.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),m=(()=>{const e=o??u;return j({value:e,tabValues:l})?e:null})();(0,d.A)((()=>{m&&i(m)}),[m]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!j({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),h(e)}),[c,h,l]),tabValues:l}}var b=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:r}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),l=r[t].value;l!==a&&(d(n),s(l))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,l.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,l.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:h,onClick:u,...s,className:(0,i.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,l.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function S(e){const n=f(e);return(0,l.jsxs)("div",{className:(0,i.A)("tabs-container",v.tabList),children:[(0,l.jsx)(y,{...n,...e}),(0,l.jsx)(w,{...n,...e})]})}function I(e){const n=(0,b.A)();return(0,l.jsx)(S,{...e,children:m(e.children)},String(n))}const k={tabItem:"tabItem_Ymn6"};function N(e){let{children:n,hidden:t,className:a}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,i.A)(k.tabItem,a),hidden:t,children:n})}const q={id:"installation",title:"Installation Guide",sidebar_position:1},A=void 0,C={},E=[{value:"\ud83d\udda5\ufe0f Hardware Requirements",id:"\ufe0f-hardware-requirements",level:2},{value:"OS Requirements",id:"os-requirements",level:3},{value:"\u2b07\ufe0f Installation Tutorials",id:"\ufe0f-installation-tutorials",level:2},{value:"Python Installation",id:"python-installation",level:3},{value:"R Installation",id:"r-installation",level:3},{value:"GitHub Installation",id:"github-installation",level:3},{value:"\ud83d\udcfd\ufe0f Running a Demo Script",id:"\ufe0f-running-a-demo-script",level:2},{value:"\ud83d\udee0\ufe0fAdditional Information",id:"\ufe0fadditional-information",level:2},{value:"Installing Conda",id:"installing-conda",level:4}];function R(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"\ufe0f-hardware-requirements",children:"\ud83d\udda5\ufe0f Hardware Requirements"}),"\n",(0,l.jsx)(n.p,{children:"Statescope can operate on a variety of systems depending on the data size:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Small-scale data"}),": Suitable for Binder (1 CPU, 2GB RAM on Google Cloud)."]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Large-scale data"}),": Performance improves significantly with higher computational power. Our recommendation for optimal performance is:","\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"CPU"}),": 40 threads (Xeon 2.60GHz or equivalent)"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Memory"}),": 128 GB RAM"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"Statescope\u2019s Empirical Bayes procedure includes independent optimization steps that can be parallelized to leverage multiple CPUs for faster execution."}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note"}),": For faster performance, the Statescope deconvolution module has GPU support, which can make computations 3-4 times faster."]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"os-requirements",children:"OS Requirements"}),"\n",(0,l.jsx)(n.p,{children:"Statescope is primarily tested on Linux-based operating systems. We recommend:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.strong,{children:"Linux distributions"}),": CentOS 7 or Ubuntu 16.04."]}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Note"}),": While BLADE might work on other OS platforms (macOS, Windows with WSL), these setups may require additional configurations."]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\ufe0f-installation-tutorials",children:"\u2b07\ufe0f Installation Tutorials"}),"\n","\n",(0,l.jsxs)(I,{children:[(0,l.jsxs)(N,{value:"python",label:"Python Installation",default:!0,children:[(0,l.jsx)(n.h3,{id:"python-installation",children:"Python Installation"}),(0,l.jsxs)(n.p,{children:["To install ",(0,l.jsx)(n.strong,{children:"Statescope"})," using pip, run the following command:"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"pip install Statescope\n"})}),(0,l.jsxs)(n.p,{children:["To manage dependencies, use Conda and the ",(0,l.jsx)(n.code,{children:"environment.yml"})," file for a consistent environment setup:"]}),(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsxs)(n.strong,{children:["Download the ",(0,l.jsx)(n.code,{children:"environment.yml"})," file"]}),":  ",(0,l.jsx)("a",{href:"/BLADE-site/BLADE/static/environment.yml",download:!0,class:"download-button",children:"Download environment.yml"})]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Place the file in your working directory."}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Create the Conda environment"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"conda create -n statescope_env python=3.8\nconda activate statescope_env\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"Activate the environment"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"conda activate statescope_env\n"})}),"\n"]}),"\n"]})]}),(0,l.jsxs)(N,{value:"r",label:"R Installation",children:[(0,l.jsx)(n.h3,{id:"r-installation",children:"R Installation"}),(0,l.jsxs)(n.p,{children:["To install ",(0,l.jsx)(n.strong,{children:"BLADE"})," from Bioconductor, use the following commands:"]}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-r",children:'if (!requireNamespace("BiocManager", quietly = TRUE))\n    install.packages("BiocManager")\nBiocManager::install("BLADE")\n'})}),(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Install R and RStudio from ",(0,l.jsx)(n.a,{href:"https://cran.r-project.org/",children:"CRAN"})," or ",(0,l.jsx)(n.a,{href:"https://www.rstudio.com/",children:"RStudio"}),"."]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Use the following commands to set up a project environment in RStudio:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-r",children:'install.packages("renv")\nrenv::init()\n'})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Ensure all dependencies are installed by running:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-r",children:"renv::restore()\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Verify the installation:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-r",children:"library(BLADE)\n"})}),"\n"]}),"\n"]})]}),(0,l.jsxs)(N,{value:"github",label:"GitHub Repository",children:[(0,l.jsx)(n.h3,{id:"github-installation",children:"GitHub Installation"}),(0,l.jsx)(n.p,{children:"To clone the GitHub repository, execute the following commands:"}),(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/aryamaanbose/BLADE_tasks.git\ncd BLADE_tasks\n"})}),(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Create a Conda environment and install dependencies:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"conda create -n statescope_env python=3.8\nconda activate statescope_env\n"})}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Pull updates regularly:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"git pull origin main\n"})}),"\n"]}),"\n"]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"\ufe0f-running-a-demo-script",children:"\ud83d\udcfd\ufe0f Running a Demo Script"}),"\n",(0,l.jsxs)(n.p,{children:["You can find a basic demo script under the ",(0,l.jsx)(n.a,{href:"/Statescopeweb/docs/python",children:"Tutorial"}),". You can open the script using the command below after installing ",(0,l.jsx)(n.strong,{children:"Statescope"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"jupyter notebook tutorial/BasicTutorial.ipynb\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\ufe0fadditional-information",children:"\ud83d\udee0\ufe0fAdditional Information"}),"\n",(0,l.jsx)(n.h4,{id:"installing-conda",children:"Installing Conda"}),"\n",(0,l.jsx)(n.p,{children:"If you don\u2019t already have Conda installed, you can download and install Miniconda by following these steps:"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:["Go to the ",(0,l.jsx)(n.a,{href:"https://docs.conda.io/en/latest/miniconda.html",children:"Miniconda download page"}),"."]}),"\n",(0,l.jsx)(n.li,{children:"Download the appropriate installer for your OS."}),"\n",(0,l.jsx)(n.li,{children:"Follow the installation instructions for your operating system to set up Conda."}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"After installation, you can verify Conda by running:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"conda --version\n"})})]})}function T(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(R,{...e})}):R(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var a=t(6540);const l={},s=a.createContext(l);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);