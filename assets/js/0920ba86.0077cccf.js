"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2239],{3477:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(4246),n=t(1670);const r={},a="User accounts",l={id:"guides/user-accounts",title:"User accounts",description:"The administrator of a Komga server has the ability to create other User Accounts for that server.",source:"@site/docs/guides/user-accounts.md",sourceDirName:"guides",slug:"/guides/user-accounts",permalink:"/docs/guides/user-accounts",draft:!1,unlisted:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/guides/user-accounts.md",tags:[],version:"current",lastUpdatedAt:1704941760,formattedLastUpdatedAt:"Jan 11, 2024",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Local Artwork Assets",permalink:"/docs/guides/local-artwork-assets"},next:{title:"Server settings & management",permalink:"/docs/guides/server-settings"}},o={},d=[{value:"Creating Users",id:"creating-users",level:2},{value:"User Roles",id:"user-roles",level:2},{value:"Administrator",id:"administrator",level:3},{value:"Page Streaming",id:"page-streaming",level:3},{value:"File Download",id:"file-download",level:3},{value:"Shared Libraries",id:"shared-libraries",level:2},{value:"Content Restrictions",id:"content-restrictions",level:2},{value:"Age Rating",id:"age-rating",level:3},{value:"Labels",id:"labels",level:3},{value:"Multiple restrictions",id:"multiple-restrictions",level:3},{value:"Deleting Users",id:"deleting-users",level:2}];function c(e){const s={admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"user-accounts",children:"User accounts"}),"\n",(0,i.jsx)(s.p,{children:"The administrator of a Komga server has the ability to create other User Accounts for that server."}),"\n",(0,i.jsxs)(s.p,{children:["You can manage Users in ",(0,i.jsx)(s.em,{children:"Server Settings > Users"}),"."]}),"\n",(0,i.jsx)("img",{src:"/assets/media/guides/user-accounts/users-management.png",style:{maxHeight:"300px"},alt:"Users management"}),"\n",(0,i.jsx)(s.h2,{id:"creating-users",children:"Creating Users"}),"\n",(0,i.jsxs)(s.p,{children:["You can add a user by clicking on the ",(0,i.jsx)(s.em,{children:"+"})," button."]}),"\n",(0,i.jsx)("img",{src:"/assets/media/guides/user-accounts/add-user.png",style:{maxHeight:"200px"},alt:"Add User"}),"\n",(0,i.jsxs)(s.p,{children:["A dialog will show up. Fill in all the required information, and press ",(0,i.jsx)(s.em,{children:"Add"}),"."]}),"\n",(0,i.jsx)("img",{src:"/assets/media/guides/user-accounts/add-user-dialog.png",style:{maxHeight:"400px"},alt:"Add User Dialog"}),"\n",(0,i.jsx)(s.h2,{id:"user-roles",children:"User Roles"}),"\n",(0,i.jsx)(s.p,{children:"Users can have different roles, giving them the ability to do certain things."}),"\n",(0,i.jsx)(s.h3,{id:"administrator",children:"Administrator"}),"\n",(0,i.jsx)(s.p,{children:"An administrator can perform all the management actions:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"add, edit, and delete libraries"}),"\n",(0,i.jsx)(s.li,{children:"add, edit, and delete users"}),"\n",(0,i.jsx)(s.li,{children:"add, edit, and delete collections"}),"\n",(0,i.jsx)(s.li,{children:"edit series and book metadata"}),"\n",(0,i.jsx)(s.li,{children:"manually scan, analyze and refresh metadata"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"page-streaming",children:"Page Streaming"}),"\n",(0,i.jsx)(s.p,{children:"A user with this role will be able to stream individual pages, for example to read using the Webreader."}),"\n",(0,i.jsx)(s.h3,{id:"file-download",children:"File Download"}),"\n",(0,i.jsx)(s.p,{children:"A user with this role will be able to download the file of a book."}),"\n",(0,i.jsx)(s.h2,{id:"shared-libraries",children:"Shared Libraries"}),"\n",(0,i.jsxs)(s.p,{children:["An administrator can limit what libraries users can access. This is done via the ",(0,i.jsx)(s.em,{children:"Edit Restrictions"})," button."]}),"\n",(0,i.jsx)("img",{src:"/assets/media/guides/user-accounts/edit-libraries.png",style:{maxHeight:"50px"},alt:"Edit Restrictions"}),"\n",(0,i.jsxs)(s.p,{children:["Choose the libraries the user will be able to access, or select ",(0,i.jsx)(s.em,{children:"All libraries"})," for unrestricted access (default option)."]}),"\n",(0,i.jsx)("img",{src:"/assets/media/guides/user-accounts/edit-libraries-dialog.png",style:{maxHeight:"400px"},alt:"Edit Shared Libraries"}),"\n",(0,i.jsx)(s.h2,{id:"content-restrictions",children:"Content Restrictions"}),"\n",(0,i.jsx)(s.p,{children:"Content restrictions lets you control more finely the content you share. You can select specific age rating as well as content that you\u2019ve set with a specific Label."}),"\n",(0,i.jsx)(s.p,{children:"Content restriction is performed at series level, and will also apply to books, collections and reading lists."}),"\n",(0,i.jsx)(s.h3,{id:"age-rating",children:"Age Rating"}),"\n",(0,i.jsx)(s.p,{children:"Select which age rating you wish to only allow or exclude. For instance, if you choose to only allow content under 10 as the restriction, then only content that has an age rating of 10 or under will be shared . If you choose to exclude content over 16 then those will be hidden."}),"\n",(0,i.jsx)("img",{src:"/assets/media/guides/user-accounts/restriction-age-allow.png",style:{maxHeight:"400px"},alt:"Age Restriction Allow under"}),"\n",(0,i.jsx)("img",{src:"/assets/media/guides/user-accounts/restriction-age-exclude.png",style:{maxHeight:"400px"},alt:"Age Restriction Exclude over"}),"\n",(0,i.jsx)(s.h3,{id:"labels",children:"Labels"}),"\n",(0,i.jsx)(s.p,{children:"You can create arbitrary Labels when editing library content. When sharing, you can then choose to allow one or more Labels to have content matching those Labels shared. You can also exclude labels."}),"\n",(0,i.jsx)(s.p,{children:"Labels are defined on Series:"}),"\n",(0,i.jsx)("img",{src:"/assets/media/guides/user-accounts/series-sharing.png",style:{maxHeight:"400px"},alt:"Edit Shared Libraries"}),"\n",(0,i.jsx)(s.h3,{id:"multiple-restrictions",children:"Multiple restrictions"}),"\n",(0,i.jsx)(s.p,{children:"When combining multiple restrictions, the following rules apply:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Exclusion rules have always priority over allow rules."}),"\n",(0,i.jsxs)(s.li,{children:["Allow rules apply with an ",(0,i.jsx)(s.em,{children:"OR"}),' condition: for example allowing a user to access content rated 10 or under, or labelled "kids", the user will be able to access content matching one or the other.']}),"\n"]}),"\n",(0,i.jsx)("img",{src:"/assets/media/guides/user-accounts/restrictions-dialog.png",style:{maxHeight:"400px"},alt:"Edit Restrictions"}),"\n",(0,i.jsx)(s.h2,{id:"deleting-users",children:"Deleting Users"}),"\n",(0,i.jsxs)(s.admonition,{type:"danger",children:[(0,i.jsx)(s.p,{children:"Deleting a user will remove all read progress for this user."}),(0,i.jsx)(s.p,{children:"This cannot be undone."})]})]})}function h(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1670:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>a});var i=t(7378);const n={},r=i.createContext(n);function a(e){const s=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(r.Provider,{value:s},e.children)}}}]);