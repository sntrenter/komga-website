"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7021],{5138:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var r=n(4246),o=n(1670);const t={},i="Command Line Interface",a={id:"guides/cli",title:"Command Line Interface",description:"Komga offers a few commands available from the command line.",source:"@site/docs/guides/cli.md",sourceDirName:"guides",slug:"/guides/cli",permalink:"/docs/guides/cli",draft:!1,unlisted:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/guides/cli.md",tags:[],version:"current",lastUpdatedAt:1704941760,formattedLastUpdatedAt:"Jan 11, 2024",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Announcements",permalink:"/docs/guides/announcements"},next:{title:"Contribution",permalink:"/docs/contribution"}},d={},l=[{value:"How to use?",id:"how-to-use",level:2},{value:"With the <code>jar</code> file",id:"with-the-jar-file",level:3},{value:"With docker run",id:"with-docker-run",level:3},{value:"With docker-compose",id:"with-docker-compose",level:3},{value:"Available commands",id:"available-commands",level:2},{value:"List users",id:"list-users",level:3},{value:"Reset password for a user",id:"reset-password-for-a-user",level:3}];function c(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"command-line-interface",children:"Command Line Interface"}),"\n",(0,r.jsx)(s.p,{children:"Komga offers a few commands available from the command line."}),"\n",(0,r.jsx)(s.h2,{id:"how-to-use",children:"How to use?"}),"\n",(0,r.jsx)(s.p,{children:"You just need to append the command to the command line. Note that Komga will still start and run as usual."}),"\n",(0,r.jsxs)(s.h3,{id:"with-the-jar-file",children:["With the ",(0,r.jsx)(s.code,{children:"jar"})," file"]}),"\n",(0,r.jsx)(s.p,{children:"Example:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"java -jar komga-x.y.z.jar --list-users\n"})}),"\n",(0,r.jsx)(s.h3,{id:"with-docker-run",children:"With docker run"}),"\n",(0,r.jsx)(s.p,{children:"Example:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"docker run ghcr.io/gotson/komga:latest --list-users\n"})}),"\n",(0,r.jsx)(s.h3,{id:"with-docker-compose",children:"With docker-compose"}),"\n",(0,r.jsxs)(s.p,{children:["You can override the ",(0,r.jsx)(s.code,{children:"command"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"services:\n  komga:\n    image: gotson/komga:latest\n    command: --newpassword=toto --reset=admin@example.org\n"})}),"\n",(0,r.jsx)(s.h2,{id:"available-commands",children:"Available commands"}),"\n",(0,r.jsx)(s.h3,{id:"list-users",children:"List users"}),"\n",(0,r.jsxs)(s.p,{children:["Command: ",(0,r.jsx)(s.code,{children:"--list-users"})]}),"\n",(0,r.jsx)(s.p,{children:"This will output all the users configured in the database. The output will be shown in the console or the logs."}),"\n",(0,r.jsx)(s.p,{children:"Example:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"2023-08-02T13:41:45.215+08:00  INFO 1979 --- [           main] o.g.k.i.apprunner.ListUsersRunner        : Here is a list of all users: [admin@example.org, jacky@example.org]"})}),"\n",(0,r.jsx)(s.h3,{id:"reset-password-for-a-user",children:"Reset password for a user"}),"\n",(0,r.jsxs)(s.p,{children:["Command: ",(0,r.jsx)(s.code,{children:"--reset=user@domain.com --newpassword=YourNewPassword"})]}),"\n",(0,r.jsx)(s.p,{children:"This will reset the password for the specified user."}),"\n",(0,r.jsx)(s.p,{children:"Example:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"2023-08-02T13:50:42.998+08:00  INFO 2806 --- [           main] o.g.k.i.apprunner.PasswordResetRunner    : Reset password for user: admin@example.org"})})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1670:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>i});var r=n(7378);const o={},t=r.createContext(o);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);