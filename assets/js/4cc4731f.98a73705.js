"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1169],{2588:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(4246),a=t(1670);const s={},l="Install via third-party integrations",o={id:"installation/thirdparty",title:"Install via third-party integrations",description:"Those methods are not officially supported, if you encounter installation issues please contact the respective authors.",source:"@site/docs/installation/thirdparty.md",sourceDirName:"installation",slug:"/installation/thirdparty",permalink:"/docs/installation/thirdparty",draft:!1,unlisted:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/installation/thirdparty.md",tags:[],version:"current",lastUpdatedAt:1704362862,formattedLastUpdatedAt:"Jan 4, 2024",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Run with the Jar file",permalink:"/docs/installation/jar"},next:{title:"Configuration options",permalink:"/docs/installation/configuration"}},r={},d=[{value:"Windows Installer and Updater",id:"windows-installer-and-updater",level:2},{value:"Scoop (Windows)",id:"scoop-windows",level:2},{value:"Installation",id:"installation",level:3},{value:"1. (Skip if JDK is installed) Install JDK",id:"1-skip-if-jdk-is-installed-install-jdk",level:4},{value:"2. Install Komga",id:"2-install-komga",level:4},{value:"Manage",id:"manage",level:3},{value:"Run",id:"run",level:4},{value:"Update",id:"update",level:4},{value:"Uninstall",id:"uninstall",level:4},{value:"AUR - Arch User Repository",id:"aur---arch-user-repository",level:2},{value:"Installation",id:"installation-1",level:3},{value:"Run",id:"run-1",level:3},{value:"QNAP",id:"qnap",level:2},{value:"FreeNAS",id:"freenas",level:2},{value:"YunoHost",id:"yunohost",level:2},{value:"TrueNAS SCALE",id:"truenas-scale",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"install-via-third-party-integrations",children:"Install via third-party integrations"}),"\n",(0,i.jsx)(n.admonition,{title:"Warning",type:"warning",children:(0,i.jsx)(n.p,{children:"Those methods are not officially supported, if you encounter installation issues please contact the respective authors."})}),"\n",(0,i.jsx)(n.h2,{id:"windows-installer-and-updater",children:"Windows Installer and Updater"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.a,{href:"https://github.com/losslesspng/SetUpKomgaJava",children:"Powershell script"})," to get up and running with Komga."]}),"\n",(0,i.jsx)(n.h2,{id:"scoop-windows",children:"Scoop (Windows)"}),"\n",(0,i.jsxs)(n.p,{children:["Komga is available in ",(0,i.jsx)(n.a,{href:"https://github.com/ScoopInstaller/Scoop",children:"Scoop"}),"'s ",(0,i.jsx)(n.a,{href:"https://github.com/ScoopInstaller/Extras",children:"extras"})," bucket."]}),"\n",(0,i.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["You need Scoop to use this installation method. Instruction to install Scoop can be found ",(0,i.jsx)(n.a,{href:"https://github.com/ScoopInstaller/Scoop#installation",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"1-skip-if-jdk-is-installed-install-jdk",children:"1. (Skip if JDK is installed) Install JDK"}),"\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"scoop bucket add java"})," and then run ",(0,i.jsx)(n.code,{children:"scoop install java/temurin-lts-jdk"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"2-install-komga",children:"2. Install Komga"}),"\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"scoop bucket add extras"})," and then run ",(0,i.jsx)(n.code,{children:"scoop install komga"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"manage",children:"Manage"}),"\n",(0,i.jsx)(n.h4,{id:"run",children:"Run"}),"\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"komga"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Note: Default config dir is ",(0,i.jsx)(n.code,{children:"%USERPROFILE%\\scoop\\apps\\komga\\current\\config"})]}),"\n",(0,i.jsx)(n.h4,{id:"update",children:"Update"}),"\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"scoop update komga"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"uninstall",children:"Uninstall"}),"\n",(0,i.jsxs)(n.p,{children:["Run ",(0,i.jsx)(n.code,{children:"scoop uninstall komga"})]}),"\n",(0,i.jsx)(n.h2,{id:"aur---arch-user-repository",children:"AUR - Arch User Repository"}),"\n",(0,i.jsxs)(n.p,{children:["Komga is available as an ",(0,i.jsx)(n.a,{href:"https://aur.archlinux.org/packages/komga/",children:"AUR"})," package."]}),"\n",(0,i.jsx)(n.h3,{id:"installation-1",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["It can be installed using ",(0,i.jsx)(n.code,{children:"yay -S komga"})," (or any other AUR package manager)."]}),"\n",(0,i.jsx)(n.h3,{id:"run-1",children:"Run"}),"\n",(0,i.jsxs)(n.p,{children:["Just run ",(0,i.jsx)(n.code,{children:"komga"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"qnap",children:"QNAP"}),"\n",(0,i.jsxs)(n.p,{children:["Komga is available as a ",(0,i.jsx)(n.a,{href:"https://www.qnapclub.eu/en/qpkg/853",children:"QPKG"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"freenas",children:"FreeNAS"}),"\n",(0,i.jsxs)(n.p,{children:["There is a ",(0,i.jsx)(n.a,{href:"https://blog.tommyku.com/blog/deploying-komga-on-freenas-jail/",children:"tutorial"})," to install Komga on FreeNAS jail."]}),"\n",(0,i.jsx)(n.h2,{id:"yunohost",children:"YunoHost"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://install-app.yunohost.org/?app=komga",children:(0,i.jsx)(n.img,{src:"https://install-app.yunohost.org/install-with-yunohost.svg",alt:"Install Komga with YunoHost"})})}),"\n",(0,i.jsx)(n.h2,{id:"truenas-scale",children:"TrueNAS SCALE"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"SCALE is still in beta"})}),"\n",(0,i.jsxs)(n.p,{children:["There is a ",(0,i.jsx)(n.a,{href:"https://truecharts.org/manual/Quick-Start%20Guides/01-Open-Apps/",children:"tutorial"})," to install Truecharts on TrueNAS SCALE. Follow steps 1-4 to add TrueCharts to SCALE.\nIn order to create komga you need to find it under the TrueCharts apps in SCALE.\nScale needs access to ip range of: 172.16.0.0/16 in order to deploy.\nKeep all defaults and change:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Enter a name with lowercase letters."}),"\n",(0,i.jsxs)(n.li,{children:['Change the update type to "Rolling Update',":Create",' new pods and then kill old ones"']}),"\n",(0,i.jsx)(n.li,{children:"Next"}),"\n",(0,i.jsx)(n.li,{children:"You can change the node port to whatever you prefer, this is the port you will be accessing komga over."}),"\n",(0,i.jsx)(n.li,{children:"This is the Komga Data source, add what you need."}),"\n",(0,i.jsx)(n.li,{children:"Next"}),"\n",(0,i.jsx)(n.li,{children:"Next"}),"\n",(0,i.jsx)(n.li,{children:"Choose the container resources (I chose default), Next."}),"\n",(0,i.jsx)(n.li,{children:"I left this at disabled, Next."}),"\n",(0,i.jsx)(n.li,{children:"Install Komga and let it run.\nOnce its installed click portal and you  now have komga setup in SCALE."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1670:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var i=t(7378);const a={},s=i.createContext(a);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);