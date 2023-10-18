"use strict";(self.webpackChunkkomga_website=self.webpackChunkkomga_website||[]).push([[473],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var i=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,i,r=function(e,t){if(null==e)return{};var o,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)o=n[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(o),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||n;return o?i.createElement(f,l(l({ref:t},p),{},{components:o})):i.createElement(f,l({ref:t},p))}));function f(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,l=new Array(n);l[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:r,l[1]=a;for(var c=2;c<n;c++)l[c]=o[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,o)}m.displayName="MDXCreateElement"},7703:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var i=o(7462),r=(o(7294),o(3905));const n={},l="Import Books",a={unversionedId:"guides/import-books",id:"guides/import-books",title:"Import Books",description:"Komga lets you import files that are outside your existing libraries directly into existing series folder (from the Import > Books screen).",source:"@site/docs/guides/import-books.md",sourceDirName:"guides",slug:"/guides/import-books",permalink:"/docs/guides/import-books",draft:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/guides/import-books.md",tags:[],version:"current",lastUpdatedAt:1697524768,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Full Text Search",permalink:"/docs/guides/search"},next:{title:"Duplicate Files",permalink:"/docs/guides/duplicate-files"}},s={},c=[{value:"Scan for books",id:"scan-for-books",level:2},{value:"Select destination series",id:"select-destination-series",level:2},{value:"Check book details",id:"check-book-details",level:2},{value:"Finalize the import",id:"finalize-the-import",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"import-books"},"Import Books"),(0,r.kt)("p",null,"Komga lets you import files that are outside your existing libraries directly into existing series folder (from the ",(0,r.kt)("em",{parentName:"p"},"Import > Books")," screen)."),(0,r.kt)("h2",{id:"scan-for-books"},"Scan for books"),(0,r.kt)("p",null,"Start by choosing a folder to scan for eligible books, and click ",(0,r.kt)("em",{parentName:"p"},"Scan"),"."),(0,r.kt)("img",{src:"/assets/media/guides/import-books/book-import-scan.png",style:{maxHeight:" 400px"},alt:"Scan for books"}),(0,r.kt)("p",null,"Komga will display a list of all files eligible for import."),(0,r.kt)("h2",{id:"select-destination-series"},"Select destination series"),(0,r.kt)("p",null,"You will need to pick a destination series for each. You can choose individually, or for all the selected files at once using the ",(0,r.kt)("em",{parentName:"p"},"Select Series")," button."),(0,r.kt)("img",{src:"/assets/media/guides/import-books/book-import-pick-series.png",style:{maxHeight:" 400px"},alt:"Select series"}),(0,r.kt)("h2",{id:"check-book-details"},"Check book details"),(0,r.kt)("p",null,"For each book, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"display the book details: format, number of pages, and detailed page list"),(0,r.kt)("li",{parentName:"ul"},"browse the book pages"),(0,r.kt)("li",{parentName:"ul"},"change the destination file name")),(0,r.kt)("p",null,"If you choose a number for a book, and a book already exists with that number, Komga will offer you to upgrade it, effectively replacing the existing file. In case of upgrade, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"display the details of both books side by side"),(0,r.kt)("li",{parentName:"ul"},"browse both books side by side")),(0,r.kt)("img",{src:"/assets/media/guides/import-books/book-import-buttons.png",style:{maxHeight:" 400px"},alt:"Book actions"}),(0,r.kt)("h2",{id:"finalize-the-import"},"Finalize the import"),(0,r.kt)("p",null,"Komga will import only the selected files (checkbox on the left)."),(0,r.kt)("p",null,"You can decide to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"move the files: files will be moved from their location, effectively deleting the original file."),(0,r.kt)("li",{parentName:"ul"},"copy/hardlink the files: Komga will try to hardlink the files to their destination (compatible file systems only), and if that doesn't work will copy the files to their destination, leaving the original file untouched.")),(0,r.kt)("p",null,"Cick ",(0,r.kt)("em",{parentName:"p"},"Import")," to start the import process."))}d.isMDXComponent=!0}}]);