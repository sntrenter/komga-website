"use strict";(self.webpackChunkkomga_website=self.webpackChunkkomga_website||[]).push([[4114],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||n;return a?i.createElement(h,o(o({ref:t},d),{},{components:a})):i.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4709:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var i=a(7462),r=(a(7294),a(3905));const n={},o="Libraries",l={unversionedId:"guides/libraries",id:"guides/libraries",title:"Libraries",description:"You can separate content in different libraries, a library is a group of books. Libraries access can also be restricted to specific users.",source:"@site/docs/guides/libraries.md",sourceDirName:"guides",slug:"/guides/libraries",permalink:"/docs/guides/libraries",draft:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/guides/libraries.md",tags:[],version:"current",lastUpdatedAt:1697524768,formattedLastUpdatedAt:"Oct 17, 2023",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Desktop Application",permalink:"/docs/guides/desktop"},next:{title:"Emptying Library Trash",permalink:"/docs/guides/trash"}},s={},c=[{value:"Creating libraries",id:"creating-libraries",level:2},{value:"Scanner",id:"scanner",level:3},{value:"Empty trash automatically after every scan",id:"empty-trash-automatically-after-every-scan",level:4},{value:"Force directory modified time",id:"force-directory-modified-time",level:4},{value:"Scan on startup",id:"scan-on-startup",level:4},{value:"Scan interval",id:"scan-interval",level:4},{value:"One-Shots directory",id:"one-shots-directory",level:4},{value:"Scan for these file types",id:"scan-for-these-file-types",level:4},{value:"Directory exclusions",id:"directory-exclusions",level:4},{value:"Options",id:"options",level:3},{value:"Analysis",id:"analysis",level:4},{value:"Compute hash for files",id:"compute-hash-for-files",level:5},{value:"Compute hash for pages",id:"compute-hash-for-pages",level:5},{value:"Analyze page dimensions",id:"analyze-page-dimensions",level:5},{value:"File management",id:"file-management",level:4},{value:"Automatically repair incorrect file extensions",id:"automatically-repair-incorrect-file-extensions",level:5},{value:"Automatically convert to CBZ",id:"automatically-convert-to-cbz",level:5},{value:"Series cover",id:"series-cover",level:4},{value:"Metadata",id:"metadata",level:3},{value:"Edit a library",id:"edit-a-library",level:2},{value:"Delete a library",id:"delete-a-library",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"libraries"},"Libraries"),(0,r.kt)("p",null,"You can separate content in different libraries, a library is a group of books. Libraries access can also be restricted to specific users."),(0,r.kt)("p",null,"Each library has a root folder, and no library can share any part of their path."),(0,r.kt)("p",null,"For example if you have a library with a root path of ",(0,r.kt)("inlineCode",{parentName:"p"},"/books/mangas"),", you can't create a library with a root path of ",(0,r.kt)("inlineCode",{parentName:"p"},"/books"),", because the two root paths would overlap. You can however create a library with a root path of ",(0,r.kt)("inlineCode",{parentName:"p"},"/books/comics"),"."),(0,r.kt)("h2",{id:"creating-libraries"},"Creating libraries"),(0,r.kt)("p",null,"From the web interface:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"click on the ",(0,r.kt)("em",{parentName:"li"},"+")," icon next to ",(0,r.kt)("em",{parentName:"li"},"Libraries")," in the sidebar ",(0,r.kt)("img",{src:"/assets/media/guides/libraries/library-add.png",style:{verticalAlign:"middle",maxHeight:"32px"}})),(0,r.kt)("li",{parentName:"ul"},"choose a ",(0,r.kt)("em",{parentName:"li"},"Name")," for your library"),(0,r.kt)("li",{parentName:"ul"},"click the ",(0,r.kt)("em",{parentName:"li"},"Browse")," button and select a root folder containing your books"),(0,r.kt)("li",{parentName:"ul"},"click ",(0,r.kt)("em",{parentName:"li"},"Add"))),(0,r.kt)("img",{src:"/assets/media/guides/libraries/library-add-dialog.png",style:{maxHeight:"300px"},alt:"Add Library Dialog"}),(0,r.kt)("p",null,"You can also specify extra options."),(0,r.kt)("h3",{id:"scanner"},"Scanner"),(0,r.kt)("img",{src:"/assets/media/guides/libraries/library-add-scanner.png",style:{maxHeight:"400px"},alt:"Add Library Dialog Scanner"}),(0,r.kt)("h4",{id:"empty-trash-automatically-after-every-scan"},"Empty trash automatically after every scan"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/trash#automatically-empty-trash"},"Emptying library trash"),"."),(0,r.kt)("h4",{id:"force-directory-modified-time"},"Force directory modified time"),(0,r.kt)("p",null,"This will force the last modified time of a directory as the maximum from its own last modified time and the last modified time from all the books inside the directory. This should be used only if your filesystem does not update the last modified time of a directory when files inside it are modified (Google Drive for instance)."),(0,r.kt)("h4",{id:"scan-on-startup"},"Scan on startup"),(0,r.kt)("p",null,"If enabled, the library will be scanner when Komga starts."),(0,r.kt)("h4",{id:"scan-interval"},"Scan interval"),(0,r.kt)("p",null,"Choose to scan all of your libraries on a time-based interval. Choose the interval to use from the dropdown. Available frequencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"disabled"),(0,r.kt)("li",{parentName:"ul"},"hourly"),(0,r.kt)("li",{parentName:"ul"},"every 6 hours"),(0,r.kt)("li",{parentName:"ul"},"every 12 hours"),(0,r.kt)("li",{parentName:"ul"},"daily"),(0,r.kt)("li",{parentName:"ul"},"weekly")),(0,r.kt)("p",null,"The scan interval is based on when Komga started, or when you changed that setting for the library. For instance, if you have it set to \u201cevery 6 hours\u201d and you start your server at 12:35, then a scan will be started around 18:35."),(0,r.kt)("h4",{id:"one-shots-directory"},"One-Shots directory"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/oneshots"},"One-Shots"),"."),(0,r.kt)("h4",{id:"scan-for-these-file-types"},"Scan for these file types"),(0,r.kt)("p",null,"This will configure the scanner to only look for files with specific file extensions. Available types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Comic Book archives: ",(0,r.kt)("inlineCode",{parentName:"li"},"cbz"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"zip"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"cbr"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"rar")),(0,r.kt)("li",{parentName:"ul"},"PDF: ",(0,r.kt)("inlineCode",{parentName:"li"},"pdf")),(0,r.kt)("li",{parentName:"ul"},"Epub: ",(0,r.kt)("inlineCode",{parentName:"li"},"epub"))),(0,r.kt)("h4",{id:"directory-exclusions"},"Directory exclusions"),(0,r.kt)("p",null,"You can specify any pattern to exclude directory subtrees from the scan."),(0,r.kt)("p",null,"Any directory for which the full path contains any of the configured patterns will be ignored during the scan."),(0,r.kt)("p",null,"Patterns are checked against ",(0,r.kt)("strong",{parentName:"p"},"any part of the directory path"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"#recycle")," will match on:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/data/books/Comics/#recycle")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/data/books/Comics/My weirdly named #recycle comic"))))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To match only directories starting with the provided string, prefix the pattern with ",(0,r.kt)("inlineCode",{parentName:"p"},"/"),", like ",(0,r.kt)("inlineCode",{parentName:"p"},"/#recycle"))),(0,r.kt)("h3",{id:"options"},"Options"),(0,r.kt)("img",{src:"/assets/media/guides/libraries/library-add-options.png",style:{maxHeight:"500px"},alt:"Add Library Dialog Options"}),(0,r.kt)("h4",{id:"analysis"},"Analysis"),(0,r.kt)("h5",{id:"compute-hash-for-files"},"Compute hash for files"),(0,r.kt)("p",null,'Komga will compute a filehash for your files. This is required for the "restore from trash bin" functionality to work, and to detect duplicate files.'),(0,r.kt)("p",null,"This can consume lots of resources on large libraries or slow hardware."),(0,r.kt)("h5",{id:"compute-hash-for-pages"},"Compute hash for pages"),(0,r.kt)("p",null,"Komga will compute a filehash for the first and last 3 pages in each book (",(0,r.kt)("inlineCode",{parentName:"p"},"cbz")," only). Those are used to detect duplicate pages."),(0,r.kt)("p",null,"This can consume lots of resources on large libraries or slow hardware."),(0,r.kt)("h5",{id:"analyze-page-dimensions"},"Analyze page dimensions"),(0,r.kt)("p",null,"Komga will retrieve each page's dimensions (width and height). This is useful for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"properly displaying landscape pages in the web reader, when using double pages"),(0,r.kt)("li",{parentName:"ul"},'comparing page dimensions in the "Import" dialog')),(0,r.kt)("p",null,"This can consume lots of resources on large libraries or slow hardware."),(0,r.kt)("h4",{id:"file-management"},"File management"),(0,r.kt)("h5",{id:"automatically-repair-incorrect-file-extensions"},"Automatically repair incorrect file extensions"),(0,r.kt)("p",null,"Files with an incorrect extension will be automatically renamed in the background. For example a ",(0,r.kt)("inlineCode",{parentName:"p"},"zip")," file with a ",(0,r.kt)("inlineCode",{parentName:"p"},".cbr")," extension will be renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},".cbz"),"."),(0,r.kt)("h5",{id:"automatically-convert-to-cbz"},"Automatically convert to CBZ"),(0,r.kt)("p",null,"Books in ",(0,r.kt)("inlineCode",{parentName:"p"},"rar"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"cbr")," format (RAR4 only) will be converted to ",(0,r.kt)("inlineCode",{parentName:"p"},"cbz")," automatically in the background. The ",(0,r.kt)("inlineCode",{parentName:"p"},"zip")," files are created with the ",(0,r.kt)("inlineCode",{parentName:"p"},"DEFLATE")," method without compression."),(0,r.kt)("h4",{id:"series-cover"},"Series cover"),(0,r.kt)("p",null,"Choose which book cover is used for the series."),(0,r.kt)("h3",{id:"metadata"},"Metadata"),(0,r.kt)("img",{src:"/assets/media/guides/libraries/library-add-metadata.png",style:{maxHeight:"600px"},alt:"Add Library Dialog Metadata"}),(0,r.kt)("p",null,"Check the ",(0,r.kt)("a",{parentName:"p",href:"/docs/guides/scan-analysis-refresh#refresh-metadata"},"Refresh Metadata")," section to know more about what they do."),(0,r.kt)("h2",{id:"edit-a-library"},"Edit a library"),(0,r.kt)("p",null,"To edit a library, look for the action menu icon ",(0,r.kt)("img",{src:"/assets/media/guides/action-menu-icon.png",style:{verticalAlign:"middle",maxHeight:"32px"}})," and click on ",(0,r.kt)("em",{parentName:"p"},"Edit"),"."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you change the root folder of a library, and ",(0,r.kt)("strong",{parentName:"p"},"the new path doesn't share anything with the previous path"),", you will lose all your series, books and read progress for that library."),(0,r.kt)("p",{parentName:"admonition"},"If you change the path ",(0,r.kt)("strong",{parentName:"p"},"for a parent directory of the current path"),", you will not lose your content."),(0,r.kt)("p",{parentName:"admonition"},"If you change the path ",(0,r.kt)("strong",{parentName:"p"},"for a child directory of the current path"),", you will lose part of your content.")),(0,r.kt)("h2",{id:"delete-a-library"},"Delete a library"),(0,r.kt)("p",null,"To delete a library, look for the action menu icon ",(0,r.kt)("img",{src:"/assets/media/guides/action-menu-icon.png",style:{verticalAlign:"middle",maxHeight:"32px"}})," and click on ",(0,r.kt)("em",{parentName:"p"},"Delete"),"."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Deleting a library will remove all series and books contained in this library. Read progress for all those books will be deleted."),(0,r.kt)("p",{parentName:"admonition"},"Your media files will not be affected."),(0,r.kt)("p",{parentName:"admonition"},"This cannot be undone.")))}u.isMDXComponent=!0}}]);