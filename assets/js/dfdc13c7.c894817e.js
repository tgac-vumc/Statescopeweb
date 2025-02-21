"use strict";(self.webpackChunkStatescope=self.webpackChunkStatescope||[]).push([[9876],{4199:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"deconvolution","title":"Deconvolution","description":"This page provides an overview of the deconvolution process in BLADE and instructions on how to apply it to your data using the provided Snakemake pipeline.","source":"@site/docs/deconvolution.md","sourceDirName":".","slug":"/deconvolution","permalink":"/Statescopeweb/docs/deconvolution","draft":false,"unlisted":false,"editUrl":"https://github.com/tgac-vumc/Statescopeweb.git/docs/deconvolution.md","tags":[],"version":"current","frontMatter":{"id":"deconvolution","title":"Deconvolution"}}');var r=o(4848),s=o(8453);const i={id:"deconvolution",title:"Deconvolution"},l="Deconvolution",c={},a=[{value:"Steps for Deconvolution Using Snakemake",id:"steps-for-deconvolution-using-snakemake",level:2},{value:"1. <strong>Prepare Your Environment</strong>",id:"1-prepare-your-environment",level:3},{value:"2. <strong>Run the Workflow</strong>",id:"2-run-the-workflow",level:3}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"deconvolution",children:"Deconvolution"})}),"\n",(0,r.jsxs)(n.p,{children:["This page provides an overview of the deconvolution process in ",(0,r.jsx)(n.strong,{children:"BLADE"})," and instructions on how to apply it to your data using the provided Snakemake pipeline."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"steps-for-deconvolution-using-snakemake",children:"Steps for Deconvolution Using Snakemake"}),"\n",(0,r.jsxs)(n.h3,{id:"1-prepare-your-environment",children:["1. ",(0,r.jsx)(n.strong,{children:"Prepare Your Environment"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Ensure that all dependencies are installed, including Snakemake and the required Conda environments."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Install Snakemake:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"conda install -c bioconda -c conda-forge snakemake\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Verify Conda environments:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ensure you have an environment file (",(0,r.jsx)(n.code,{children:"oncoBLADE.yaml"}),") for running ",(0,r.jsx)(n.strong,{children:"BLADE"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Create the environment if it doesn't already exist:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"conda env create -f envs/oncoBLADE.yaml\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Prepare the directory structure:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Ensure the ",(0,r.jsx)(n.code,{children:"Bulk_data"})," directory contains your bulk RNA-seq data in the file ",(0,r.jsx)(n.code,{children:"Transcriptome_matrix.txt"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:["Ensure the ",(0,r.jsx)(n.code,{children:"SignaturePipeline/output"})," directory contains the signature matrix file ",(0,r.jsx)(n.code,{children:"Corrected_Signature_matrix.pickle"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Update the ",(0,r.jsx)(n.code,{children:"config.yaml"})," file:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Edit the ",(0,r.jsx)(n.code,{children:"config.yaml"})," file to specify the data directory and other parameters:","\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"all:\n  data_dir: '/net/beegfs/scratch/abose/BLADE'\n\nBLADE:\n  Parameters:\n    Alpha: 1\n    Alpha0: 1000\n    Kappa0: 1\n    SY: 1\n    Nrep: 1  \n    Nrepfinal: 1\n    Njob: 10        \n    std_const: 0.001\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsxs)(n.h3,{id:"2-run-the-workflow",children:["2. ",(0,r.jsx)(n.strong,{children:"Run the Workflow"})]}),"\n",(0,r.jsx)(n.p,{children:"Use Snakemake to execute the workflow:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"snakemake -s Snakefile \\\n    --cores 10 \\\n    --use-conda\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>l});var t=o(6540);const r={},s=t.createContext(r);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);