"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[836],{2334:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>t,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(4246),r=n(1670);const i={},a="Frequently Asked Questions",l={id:"faq",title:"Frequently Asked Questions",description:"I forgot my password",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/gotson/komga-website/tree/master/docs/faq.md",tags:[],version:"current",lastUpdatedAt:1704941760,formattedLastUpdatedAt:"Jan 11, 2024",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Community",permalink:"/docs/community"}},t={},d=[{value:"I forgot my password",id:"i-forgot-my-password",level:2},{value:"Where can I find the log files?",id:"where-can-i-find-the-log-files",level:2},{value:"How to enable DEBUG or TRACE logs?",id:"how-to-enable-debug-or-trace-logs",level:2},{value:"Via an <code>application.yml</code>",id:"via-an-applicationyml",level:3},{value:"Using the <code>jar</code> via the command line",id:"using-the-jar-via-the-command-line",level:3},{value:"Using Docker",id:"using-docker",level:3},{value:"Komga seems slow, how can I check what&#39;s going on?",id:"komga-seems-slow-how-can-i-check-whats-going-on",level:2},{value:"The memory consumption is huge",id:"the-memory-consumption-is-huge",level:2},{value:"How can I sync reading progress with tracker websites?",id:"how-can-i-sync-reading-progress-with-tracker-websites",level:2},{value:"Webreader double pages are not showing as single page",id:"webreader-double-pages-are-not-showing-as-single-page",level:2},{value:"Media type application/x-7z-compressed is not supported",id:"media-type-applicationx-7z-compressed-is-not-supported",level:2},{value:"My books/series show a different name than the files/folders",id:"my-booksseries-show-a-different-name-than-the-filesfolders",level:2},{value:"This server has already been claimed",id:"this-server-has-already-been-claimed",level:2},{value:"How can I move a library to a different folder?",id:"how-can-i-move-a-library-to-a-different-folder",level:2},{value:"Scan doesn&#39;t pick up new files under mergerfs",id:"scan-doesnt-pick-up-new-files-under-mergerfs",level:2},{value:"Docker on Raspberry PI arm32: No monotonic clock was available",id:"docker-on-raspberry-pi-arm32-no-monotonic-clock-was-available",level:2}];function c(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,o.jsx)(s.h2,{id:"i-forgot-my-password",children:"I forgot my password"}),"\n",(0,o.jsxs)(s.p,{children:["Either ask an admin to reset your password, or use the ",(0,o.jsx)(s.a,{href:"/docs/guides/cli#reset-password-for-a-user",children:"Command Line Interface"})," to reset it by yourself."]}),"\n",(0,o.jsx)(s.h2,{id:"where-can-i-find-the-log-files",children:"Where can I find the log files?"}),"\n",(0,o.jsx)(s.p,{children:"By default (if you haven't changed the configuration), log files are located:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["on the Windows app: ",(0,o.jsx)(s.code,{children:"%LOCALAPPDATA%/Komga/logs/komga.log"})]}),"\n",(0,o.jsxs)(s.li,{children:["on the macOS app: ",(0,o.jsx)(s.code,{children:"~/Library/Logs/Komga/komga.log"})]}),"\n",(0,o.jsxs)(s.li,{children:["on Windows: ",(0,o.jsx)(s.code,{children:"%USERPROFILE%/.komga/komga.log"})]}),"\n",(0,o.jsxs)(s.li,{children:["on macOS or Unix: ",(0,o.jsx)(s.code,{children:"~/.komga/komga.log"})]}),"\n",(0,o.jsxs)(s.li,{children:["on Docker: in the directory you mounted as ",(0,o.jsx)(s.code,{children:"/config"}),", in a subdirectory called ",(0,o.jsx)(s.code,{children:"logs"})]}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"how-to-enable-debug-or-trace-logs",children:"How to enable DEBUG or TRACE logs?"}),"\n",(0,o.jsxs)(s.h3,{id:"via-an-applicationyml",children:["Via an ",(0,o.jsx)(s.code,{children:"application.yml"})]}),"\n",(0,o.jsxs)(s.p,{children:["Add the following key in your ",(0,o.jsx)(s.code,{children:"application.yml"}),":"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-yaml",children:"logging.level.org.gotson.komga: DEBUG\n"})}),"\n",(0,o.jsx)(s.p,{children:"or"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-yaml",children:"logging.level.org.gotson.komga: TRACE\n"})}),"\n",(0,o.jsxs)(s.h3,{id:"using-the-jar-via-the-command-line",children:["Using the ",(0,o.jsx)(s.code,{children:"jar"})," via the command line"]}),"\n",(0,o.jsxs)(s.p,{children:["Start the ",(0,o.jsx)(s.code,{children:"jar"})," with the following option:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-shell",metastring:"script",children:"java -jar komga-x.y.z.jar --logging.level.org.gotson.komga=DEBUG\n"})}),"\n",(0,o.jsx)(s.p,{children:"or"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-shell",metastring:"script",children:"java -jar komga-x.y.z.jar --logging.level.org.gotson.komga=TRACE\n"})}),"\n",(0,o.jsx)(s.h3,{id:"using-docker",children:"Using Docker"}),"\n",(0,o.jsx)(s.p,{children:"Add the following environment variable:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-shell",metastring:"script",children:"LOGGING_LEVEL_ORG_GOTSON_KOMGA=DEBUG\n"})}),"\n",(0,o.jsx)(s.p,{children:"or"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-shell",metastring:"script",children:"LOGGING_LEVEL_ORG_GOTSON_KOMGA=TRACE\n"})}),"\n",(0,o.jsx)(s.h2,{id:"komga-seems-slow-how-can-i-check-whats-going-on",children:"Komga seems slow, how can I check what's going on?"}),"\n",(0,o.jsx)(s.p,{children:"If any activity is going on, an animated yellow bar will appear below the top-left logo. Hover your cursor over the bar to see the details of all pending tasks."}),"\n",(0,o.jsxs)("video",{controls:!0,width:"250",children:[(0,o.jsx)("source",{src:"/assets/media/faq/server-activity.webm",type:"video/webm"}),(0,o.jsx)(s.p,{children:"Sorry, your browser doesn't support embedded videos."})]}),"\n",(0,o.jsx)(s.h2,{id:"the-memory-consumption-is-huge",children:"The memory consumption is huge"}),"\n",(0,o.jsxs)(s.p,{children:["TL;DR: The operating system ",(0,o.jsx)(s.em,{children:"does not"})," report the real memory usage of the application, so don't look at those figures."]}),"\n",(0,o.jsxs)(s.p,{children:["Komga runs on the Java Virtual Machine (JVM). The JVM works differently than other native programs in regard to memory consumption.\nOn startup, the JVM will ",(0,o.jsx)(s.em,{children:"reserve"})," some memory from the OS, but that doesn't mean this memory is used by the application. If the OS needs to reclaim that memory, the JVM will try to release it."]}),"\n",(0,o.jsx)(s.p,{children:"By default, the JVM would reserve 1/4th of the physical memory (depends on the total memory and JVM version), for instance if you have 32 Gb of memory, the JVM would reserve 8 Gb."}),"\n",(0,o.jsxs)(s.p,{children:["To increase or limit the maximum memory, see ",(0,o.jsx)(s.a,{href:"/docs/installation/jar#increase-memory-limit",children:"here"})," (jar) and ",(0,o.jsx)(s.a,{href:"/docs/installation/docker#increase-memory-limit",children:"here"})," (Docker)."]}),"\n",(0,o.jsx)(s.h2,{id:"how-can-i-sync-reading-progress-with-tracker-websites",children:"How can I sync reading progress with tracker websites?"}),"\n",(0,o.jsx)(s.p,{children:"Komga does not support this outside the box."}),"\n",(0,o.jsxs)(s.p,{children:["You can try ",(0,o.jsx)(s.a,{href:"https://github.com/MALSync/MALSync",children:"MAL-Sync"})," which integrates with Komga and works with MyAnimeList, Kitsu, Anilist and others."]}),"\n",(0,o.jsx)(s.h2,{id:"webreader-double-pages-are-not-showing-as-single-page",children:"Webreader double pages are not showing as single page"}),"\n",(0,o.jsxs)(s.p,{children:["The double pages feature of the webreader requires image sizes to be available. This feature was added in v",(0,o.jsx)(s.code,{children:"0.51.0"}),". If your books have been analyzed before that version, you will need to re-analyze them in order for the double pages feature to work properly."]}),"\n",(0,o.jsx)(s.h2,{id:"media-type-applicationx-7z-compressed-is-not-supported",children:"Media type application/x-7z-compressed is not supported"}),"\n",(0,o.jsxs)(s.p,{children:["Your files are compressed using 7zip, which is not supported. Extract your archives and compress them again using the ",(0,o.jsx)(s.code,{children:"zip"})," format."]}),"\n",(0,o.jsx)(s.h2,{id:"my-booksseries-show-a-different-name-than-the-filesfolders",children:"My books/series show a different name than the files/folders"}),"\n",(0,o.jsxs)(s.p,{children:["Komga automatically import metadata from ",(0,o.jsx)(s.code,{children:"EPUB"})," files and from ",(0,o.jsx)(s.code,{children:"ComicInfo.xml"})," for ",(0,o.jsx)(s.code,{children:"cbz"}),"/",(0,o.jsx)(s.code,{children:"cbr"}),". The imported metadata will override the file/folder name."]}),"\n",(0,o.jsx)(s.h2,{id:"this-server-has-already-been-claimed",children:"This server has already been claimed"}),"\n",(0,o.jsxs)(s.p,{children:["The server cannot be claimed if a user already exists in the database. It can happen when you start Komga for the first time without the ",(0,o.jsx)(s.code,{children:"claim"})," profile as Komga will generate a default user."]}),"\n",(0,o.jsxs)(s.p,{children:["You can solve the issue by deleting the database. By default it is located in ",(0,o.jsx)(s.code,{children:"~/.komga/database.sqlite"}),". ",(0,o.jsx)(s.code,{children:"~"})," is your home directory on Unix, and your User profile on Windows."]}),"\n",(0,o.jsx)(s.h2,{id:"how-can-i-move-a-library-to-a-different-folder",children:"How can I move a library to a different folder?"}),"\n",(0,o.jsx)(s.p,{children:"You can follow those steps:"}),"\n",(0,o.jsxs)(s.ol,{children:["\n",(0,o.jsxs)(s.li,{children:["Make sure ",(0,o.jsx)(s.a,{href:"/docs/guides/libraries#compute-hash-for-files",children:"File Hashing"})," is enabled on the library."]}),"\n",(0,o.jsxs)(s.li,{children:["Disable ",(0,o.jsx)(s.a,{href:"/docs/guides/trash#automatically-empty-trash",children:"automatically emptying the trash"})," for the library."]}),"\n",(0,o.jsx)(s.li,{children:"Perform a scan on the library and let all tasks finish. This will ensure all files are hashed."}),"\n",(0,o.jsx)(s.li,{children:"Stop Komga."}),"\n",(0,o.jsx)(s.li,{children:"Move/copy the files to the new folder."}),"\n",(0,o.jsx)(s.li,{children:"Start Komga."}),"\n",(0,o.jsx)(s.li,{children:"Edit the library and choose the new folder as the library root directory."}),"\n",(0,o.jsx)(s.li,{children:"A scan will be triggered automatically after saving the library. The scan could take some time depending on the size of the library."}),"\n",(0,o.jsx)(s.li,{children:"Once the scan is finished, the series and books should have been matched with the files in the new folder."}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"scan-doesnt-pick-up-new-files-under-mergerfs",children:"Scan doesn't pick up new files under mergerfs"}),"\n",(0,o.jsxs)(s.p,{children:["Add ",(0,o.jsx)(s.code,{children:"func.getattr=newest"})," to the options in your ",(0,o.jsx)(s.code,{children:"/etc/fstab"})," entry for the mergerfs volume. By default, mergerfs doesn't update the modified times for everything for performance reasons. This forces it to. In most cases the performance impact is negligible."]}),"\n",(0,o.jsx)(s.p,{children:"Example:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-shell",children:"/media/user/disk* /media/user/storage fuse.mergerfs defaults,nonempty,allow_other,use_ino,cache.files=off,moveonenospc=true,dropcacheonclose=true,minfreespace=50G,category.create=mfs,func.getattr=newest,fsname=mergerfs 0 0\n"})}),"\n",(0,o.jsx)(s.h2,{id:"docker-on-raspberry-pi-arm32-no-monotonic-clock-was-available",children:"Docker on Raspberry PI arm32: No monotonic clock was available"}),"\n",(0,o.jsx)(s.p,{children:"If you encounter the following message when starting the container:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-log",children:"OpenJDK Server VM warning: No monotonic clock was available - timed services may be adversely affected if the time-of-day clock changes\n"})}),"\n",(0,o.jsx)(s.p,{children:"Your host system needs to have installed:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["Docker version ",(0,o.jsx)(s.code,{children:"19.03.9"})," or newer"]}),"\n",(0,o.jsxs)(s.li,{children:["libseccomp version ",(0,o.jsx)(s.code,{children:"2.4.2"})," or newer"]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1670:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>a});var o=n(7378);const r={},i=o.createContext(r);function a(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);