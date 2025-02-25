"use strict";(self.webpackChunkStatescope=self.webpackChunkStatescope||[]).push([[7443],{3588:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>o});const n=JSON.parse('{"id":"api-reference","title":"Statescope API Reference","description":"Class: Statescope","source":"@site/docs/api-reference.md","sourceDirName":".","slug":"/api-reference","permalink":"/Statescope/docs/api-reference","draft":false,"unlisted":false,"editUrl":"https://github.com/tgac-vumc/Statescopeweb.git/docs/api-reference.md","tags":[],"version":"current","frontMatter":{"id":"api-reference","title":"Statescope API Reference","sidebar_label":"API Reference"},"sidebar":"tutorialSidebar","previous":{"title":"R","permalink":"/Statescope/docs/r"},"next":{"title":"Troubleshooting","permalink":"/Statescope/docs/troubleshooting"}}');var i=s(4848),c=s(8453);const r={id:"api-reference",title:"Statescope API Reference",sidebar_label:"API Reference"},d=void 0,l={},o=[{value:"Class: <code>Statescope</code>",id:"class-statescope",level:2},{value:"Initialize Statescope",id:"initialize-statescope",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Deconvolution Functions",id:"deconvolution-functions",level:2},{value:"<code>Deconvolution()</code>",id:"deconvolution",level:3},{value:"Construction and Initialization",id:"construction-and-initialization",level:2},{value:"<code>Initialize_Statescope()</code>",id:"initialize_statescope",level:3},{value:"Visualization Functions",id:"visualization-functions",level:2},{value:"<code>Heatmap_Fractions()</code>",id:"heatmap_fractions",level:3},{value:"Utility Functions",id:"utility-functions",level:2},{value:"<code>Extract_GEX()</code>",id:"extract_gex",level:3}];function a(e){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.h2,{id:"class-statescope",children:["Class: ",(0,i.jsx)(t.code,{children:"Statescope"})]}),"\n",(0,i.jsx)(t.h3,{id:"initialize-statescope",children:"Initialize Statescope"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"Statescope_model = Initialize_Statescope(Bulk, TumorType='NSCLC')\n"})}),"\n",(0,i.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Bulk"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"pandas.DataFrame"})}),(0,i.jsx)(t.td,{children:"Bulk gene expression matrix (library-size-corrected counts)."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"TumorType"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"str"})}),(0,i.jsxs)(t.td,{children:["Tumor type to select predefined signature (e.g., ",(0,i.jsx)(t.code,{children:'"NSCLC"'}),", ",(0,i.jsx)(t.code,{children:'"PDAC"'}),")."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Ncelltypes"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"int"})}),(0,i.jsx)(t.td,{children:"Number of cell types in the signature."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"celltype_key"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"str"})}),(0,i.jsx)(t.td,{children:"Key to use for cell type in AnnData."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Ncores"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"int"})}),(0,i.jsx)(t.td,{children:"Number of cores to use for parallel computing."})]})]})]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"deconvolution-functions",children:"Deconvolution Functions"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Function"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Deconvolution()"})}),(0,i.jsx)(t.td,{children:"Performs Bayesian Log Normal Deconvolution."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Refinement()"})}),(0,i.jsx)(t.td,{children:"Refines gene expression after deconvolution."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"StateDiscovery()"})}),(0,i.jsxs)(t.td,{children:["Discovers cellular states using ",(0,i.jsx)(t.strong,{children:"cNMF"}),"."]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"deconvolution",children:(0,i.jsx)(t.code,{children:"Deconvolution()"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"Statescope_model.Deconvolution()\n"})}),"\n",(0,i.jsx)(t.p,{children:"Performs BLADE-based deconvolution on bulk RNA-seq data."}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"construction-and-initialization",children:"Construction and Initialization"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Function"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Initialize_Statescope()"})}),(0,i.jsxs)(t.td,{children:["Initializes the ",(0,i.jsx)(t.strong,{children:"Statescope"})," model with bulk data and signatures."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"fetch_signature()"})}),(0,i.jsx)(t.td,{children:"Retrieves the precomputed signature matrix."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"list_available_signatures()"})}),(0,i.jsx)(t.td,{children:"Lists all available signatures."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"initialize_statescope",children:(0,i.jsx)(t.code,{children:"Initialize_Statescope()"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'Statescope_model = Initialize_Statescope(Bulk, TumorType="NSCLC")\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Initializes the ",(0,i.jsx)(t.strong,{children:"Statescope"})," object."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"visualization-functions",children:"Visualization Functions"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Function"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Heatmap_Fractions()"})}),(0,i.jsx)(t.td,{children:"Plots a heatmap of deconvolution cell type fractions."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Heatmap_StateScores()"})}),(0,i.jsxs)(t.td,{children:["Visualizes ",(0,i.jsx)(t.strong,{children:"state scores"})," in a heatmap."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Heatmap_GEX()"})}),(0,i.jsxs)(t.td,{children:["Displays the ",(0,i.jsx)(t.strong,{children:"gene expression matrix"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"TSNE_AllStates()"})}),(0,i.jsxs)(t.td,{children:["Performs ",(0,i.jsx)(t.strong,{children:"t-SNE clustering"})," for all states."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"TSNE_CellTypes()"})}),(0,i.jsxs)(t.td,{children:["Runs ",(0,i.jsx)(t.strong,{children:"t-SNE per cell type"}),"."]})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"heatmap_fractions",children:(0,i.jsx)(t.code,{children:"Heatmap_Fractions()"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"Heatmap_Fractions(Statescope_model)\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Plots a heatmap of ",(0,i.jsx)(t.strong,{children:"cell type proportions"})," per sample."]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.h2,{id:"utility-functions",children:"Utility Functions"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Function"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Extract_GEX()"})}),(0,i.jsx)(t.td,{children:"Extracts purified gene expression for a given cell type."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Extract_StateScores()"})}),(0,i.jsxs)(t.td,{children:["Extracts ",(0,i.jsx)(t.strong,{children:"state scores"})," per sample."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Extract_StateLoadings()"})}),(0,i.jsxs)(t.td,{children:["Extracts ",(0,i.jsx)(t.strong,{children:"state loadings"})," for gene expression clustering."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"Create_Cluster_Matrix()"})}),(0,i.jsx)(t.td,{children:"Generates scaled data matrices for clustering."})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"extract_gex",children:(0,i.jsx)(t.code,{children:"Extract_GEX()"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'Extract_GEX(Statescope_model, celltype="T_cells_CD8+")\n'})}),"\n",(0,i.jsx)(t.p,{children:"Retrieves refined gene expression data per cell type."}),"\n",(0,i.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>d});var n=s(6540);const i={},c=n.createContext(i);function r(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);