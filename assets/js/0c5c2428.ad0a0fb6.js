"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6236],{9297:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=t(4246),a=t(1670);const o={},r="Run with the Jar file",s={id:"installation/jar",title:"Run with the Jar file",description:"You need Java version 17+ to run Komga. Check your version with java -version.",source:"@site/docs/installation/jar.md",sourceDirName:"installation",slug:"/installation/jar",permalink:"/docs/installation/jar",draft:!1,unlisted:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/installation/jar.md",tags:[],version:"current",lastUpdatedAt:1704941760,formattedLastUpdatedAt:"Jan 11, 2024",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Run with Docker",permalink:"/docs/installation/docker"},next:{title:"Install via third-party integrations",permalink:"/docs/installation/thirdparty"}},c={},l=[{value:"Increase memory limit",id:"increase-memory-limit",level:2},{value:"Updating",id:"updating",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"run-with-the-jar-file",children:"Run with the Jar file"}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You need Java version 17+ to run Komga. Check your version with ",(0,i.jsx)(n.code,{children:"java -version"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["You can run Komga from the fat ",(0,i.jsx)(n.code,{children:"jar"})," file. You can download them in the ",(0,i.jsx)(n.a,{href:"https://github.com/gotson/komga/releases",children:"releases"})," section."]}),"\n",(0,i.jsxs)(n.p,{children:["In order to run Komga, use the following command (replace ",(0,i.jsx)(n.code,{children:"x.y.z"})," with the actual version number):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:"script",children:"java -jar komga-x.y.z.jar\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Once Komga is started, you can access the ",(0,i.jsx)(n.a,{href:"../guides/webui",children:"web interface"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["On Windows, use ",(0,i.jsx)(n.code,{children:"javaw"})," instead of ",(0,i.jsx)(n.code,{children:"java"})," to launch Komga ",(0,i.jsx)(n.em,{children:"without"})," a command prompt window appearing."]})}),"\n",(0,i.jsx)(n.h2,{id:"increase-memory-limit",children:"Increase memory limit"}),"\n",(0,i.jsxs)(n.p,{children:["By default the ",(0,i.jsx)(n.code,{children:"java"})," process will be limited in the maximum amount of memory (RAM) it can use, usually 1gb. If you encounter some ",(0,i.jsx)(n.code,{children:"OutOfMemoryException"})," in the logs you probably need to increase the maximum memory Komga can use."]}),"\n",(0,i.jsxs)(n.p,{children:["To do so, you can use the ",(0,i.jsx)(n.code,{children:"-Xmx<limit>"})," command line flag, where ",(0,i.jsx)(n.code,{children:"<limit>"})," can be any amount like ",(0,i.jsx)(n.code,{children:"2048m"}),", ",(0,i.jsx)(n.code,{children:"4g"})," etc. For example to run Komga with a maximum of 4gb of memory:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",metastring:"script",children:"java -jar -Xmx4g komga-x.y.z.jar\n"})}),"\n",(0,i.jsx)(n.h2,{id:"updating",children:"Updating"}),"\n",(0,i.jsxs)(n.p,{children:["To update just stop Komga, then start it with the latest ",(0,i.jsx)(n.code,{children:"jar"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1670:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>r});var i=t(7378);const a={},o=i.createContext(a);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);