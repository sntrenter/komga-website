"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9353],{9882:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var i=t(4246),r=t(1670);const o={},a="Deprecation",d={id:"api/deprecation",title:"Deprecation",description:"To be removed in 2.0.0",source:"@site/docs/api/deprecation.md",sourceDirName:"api",slug:"/api/deprecation",permalink:"/docs/api/deprecation",draft:!1,unlisted:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/api/deprecation.md",tags:[],version:"current",lastUpdatedAt:1704362862,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{},sidebar:"api",previous:{title:"REST API",permalink:"/docs/api/rest"}},s={},c=[{value:"To be removed in 2.0.0",id:"to-be-removed-in-200",level:2},{value:"PUT /api/v1/libraries/{libraryId}",id:"put-apiv1librarieslibraryid",level:3}];function p(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"deprecation",children:"Deprecation"}),"\n",(0,i.jsx)(n.h2,{id:"to-be-removed-in-200",children:"To be removed in 2.0.0"}),"\n",(0,i.jsxs)(n.p,{children:["The following API endpoints will be removed in version ",(0,i.jsx)(n.code,{children:"2.0.0"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"put-apiv1librarieslibraryid",children:"PUT /api/v1/libraries/{libraryId}"}),"\n",(0,i.jsxs)(n.p,{children:["Deprecated since version: ",(0,i.jsx)(n.code,{children:"1.3.0"})]}),"\n",(0,i.jsxs)(n.p,{children:["Use ",(0,i.jsx)(n.code,{children:"PATCH /api/v1/libraries/{libraryId}"})," instead, without any change needed. The ",(0,i.jsx)(n.code,{children:"PUT"})," endpoint redirects to the ",(0,i.jsx)(n.code,{children:"PATCH"})," endpoint internally."]}),"\n",(0,i.jsx)(n.p,{children:"The endpoint now accepts a partial DTO, and will only update fields that are present."})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},1670:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>a});var i=t(7378);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);