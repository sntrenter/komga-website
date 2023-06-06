(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{306:function(e,a,t){"use strict";t.r(a);var o=t(10),r=Object(o.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"scanning-analyzing-and-refreshing-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scanning-analyzing-and-refreshing-metadata"}},[e._v("#")]),e._v(" Scanning, Analyzing and Refreshing Metadata")]),e._v(" "),a("p",[e._v("Once a library has been created, it is processed by Komga so all the files are matched to series and books, and metadata is gathered. As time goes on, you’ll add and remove books to the libraries or make other changes that mean the library is no longer up-to-date. You can Scan libraries to bring them up-to-date. Scanning, Analyzing and Refreshing a library do different things.")]),e._v(" "),a("h2",{attrs:{id:"scan-library-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scan-library-files"}},[e._v("#")]),e._v(" Scan Library Files")]),e._v(" "),a("p",[e._v("Scanning a library makes Komga check its folders and sub-folders for new or removed books. If it finds new media, it then pulls it into the library. You can think of scanning as “check for new or changed content”.")]),e._v(" "),a("p",[e._v("All files that have changed after a scan will be Analyzed.")]),e._v(" "),a("p",[e._v("You should Scan Library Files if you have:")]),e._v(" "),a("ul",[a("li",[e._v("Added or deleted files or folders")]),e._v(" "),a("li",[e._v("Renamed a file or folder")]),e._v(" "),a("li",[e._v("Moved files or folders from one location to another")])]),e._v(" "),a("p",[e._v("By default, Komga will scan your libraries regularly.")]),e._v(" "),a("h2",{attrs:{id:"what-happens-during-a-scan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-happens-during-a-scan"}},[e._v("#")]),e._v(" What happens during a Scan?")]),e._v(" "),a("p",[e._v("Komga will generate a library representation of your files on disk. A Komga library does "),a("em",[e._v("not")]),e._v(" represent exactly your folder structure.")]),e._v(" "),a("ul",[a("li",[e._v("Komga will create a "),a("em",[e._v("Series")]),e._v(" for each subfolder of any library, whatever the depth of this subfolder in your directory structure")]),e._v(" "),a("li",[e._v("Komga will create a "),a("em",[e._v("Book")]),e._v(" for each file found, and place it inside the "),a("em",[e._v("Series")]),e._v(" corresponding to the parent folder of the file")])]),e._v(" "),a("h2",{attrs:{id:"analyze-books"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#analyze-books"}},[e._v("#")]),e._v(" Analyze books")]),e._v(" "),a("p",[e._v("Analysis is automatically performed when content is added to your Library. In rare cases, new versions of Komga may update the media analysis capabilities to correct something or add the ability to detect new things. In those cases, content may be re-analyzed when you access it after the new server version is installed.")]),e._v(" "),a("h3",{attrs:{id:"what-happens-during-analysis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-happens-during-analysis"}},[e._v("#")]),e._v(" What happens during Analysis?")]),e._v(" "),a("p",[e._v("Whenever an item is added to one of your Libraries, Komga performs some analysis on it to gather information. In addition, all files analyzed will also be refreshed for metadata.")]),e._v(" "),a("h4",{attrs:{id:"gather-media-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gather-media-properties"}},[e._v("#")]),e._v(" Gather media properties")]),e._v(" "),a("p",[e._v("The primary purpose of media analysis is to gather information about that media item. All of the media you add to a Library has properties that are useful to know, such as:")]),e._v(" "),a("ul",[a("li",[e._v("Container: ZIP, RAR, EPUB, PDF, etc.")]),e._v(" "),a("li",[e._v("Images Format: JPEG, PNG, WEBP, etc.")])]),e._v(" "),a("p",[e._v("Why, though? What use are these media properties? Your Server, together with your apps, can use this information to help determine whether (and how) content can be played.")]),e._v(" "),a("p",[e._v("For example: Imagine you have a CBR file with WEBP images, but you’re using Internet Explorer (which can’t read WEBP). Since the webreader knows what kind of content your browser can display and since your media analysis detected that the book has WEBP images, your Komga Server can convert those images to a compatible format (like JPEG) for you in order to let you read your book successfully.")]),e._v(" "),a("h4",{attrs:{id:"generate-default-artwork"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generate-default-artwork"}},[e._v("#")]),e._v(" Generate default artwork")]),e._v(" "),a("p",[e._v("During analysis, artwork will automatically be grabbed from a book file. The first page will be used for poster/thumbnail type purposes.")]),e._v(" "),a("h3",{attrs:{id:"analyze-your-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#analyze-your-content"}},[e._v("#")]),e._v(" Analyze your content")]),e._v(" "),a("p",[e._v("You can analyze content in multiple ways: for a book, for a series, or even for an entire Library.")]),e._v(" "),a("p",[e._v("Look for the action menu icon "),a("img",{staticStyle:{"vertical-align":"middle"},attrs:{src:"/assets/media/guides/action-menu-icon.png",height:"32"}}),e._v(" and click on "),a("em",[e._v("Analyze")]),e._v(".")]),e._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[e._v("DANGER")]),e._v(" "),a("p",[e._v("Depending on the size of your Library, analysis may take a while.")])]),e._v(" "),a("h3",{attrs:{id:"media-analysis-screen"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#media-analysis-screen"}},[e._v("#")]),e._v(" Media Analysis screen")]),e._v(" "),a("p",[e._v("You can check all the media for which the analysis did not succeed from the Media Analysis screen. You can access it from "),a("em",[e._v("Media Management > Media Analysis")]),e._v(".")]),e._v(" "),a("p",[e._v("It will show you all books with a status of:")]),e._v(" "),a("ul",[a("li",[e._v("Error: Komga could not analyze the book. If possible, there will be a comment to describe the error.")]),e._v(" "),a("li",[e._v("Unsupported: Komga does not support those files. The comment will give you more information.")])]),e._v(" "),a("a",{attrs:{href:"/assets/media/guides/scan-analysis-refresh/media-analysis.png"}},[a("img",{staticStyle:{"vertical-align":"middle","max-height":"400px"},attrs:{src:"/assets/media/guides/scan-analysis-refresh/media-analysis.png",alt:"Media Analysis"}})]),e._v(" "),a("h2",{attrs:{id:"refresh-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refresh-metadata"}},[e._v("#")]),e._v(" Refresh metadata")]),e._v(" "),a("p",[e._v("Refreshing Metadata for a library, series, or individual book causes the metadata for the item to be refreshed, even if it already has metadata. You can think of refreshing as “update metadata for the requested item even if it already has some”.")]),e._v(" "),a("p",[e._v("You should refresh a library or individual item if:")]),e._v(" "),a("ul",[a("li",[e._v("You’ve changed options for the library")]),e._v(" "),a("li",[e._v('You’ve added "local media assets" (such as artwork)')])]),e._v(" "),a("p",[e._v("Metadata is gathered from the following sources:")]),e._v(" "),a("ul",[a("li",[e._v("a local "),a("code",[e._v("ComicInfo.xml")]),e._v(" file located inside a CBZ or CBR")]),e._v(" "),a("li",[e._v("the metadata of an EPUB file")]),e._v(" "),a("li",[e._v("local media assets")])]),e._v(" "),a("p",[e._v("The metadata refresh is dependent of the options of the Library.")]),e._v(" "),a("h3",{attrs:{id:"import-metadata-for-cbr-cbz-containing-a-comicinfo-xml-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-metadata-for-cbr-cbz-containing-a-comicinfo-xml-file"}},[e._v("#")]),e._v(" Import metadata for CBR/CBZ containing a ComicInfo.xml file")]),e._v(" "),a("h4",{attrs:{id:"book-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#book-metadata"}},[e._v("#")]),e._v(" Book metadata")]),e._v(" "),a("p",[e._v("This will import the following elements from the "),a("code",[e._v("ComicInfo.xml")]),e._v(" file in Komga:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Year")]),e._v(", "),a("code",[e._v("Month")]),e._v(", and "),a("code",[e._v("Day")]),e._v(" to form the "),a("em",[e._v("Release Date")])]),e._v(" "),a("li",[a("code",[e._v("Writer")]),e._v(", "),a("code",[e._v("Penciller")]),e._v(", "),a("code",[e._v("Inker")]),e._v(", "),a("code",[e._v("Colorist")]),e._v(", "),a("code",[e._v("Letterer")]),e._v(", "),a("code",[e._v("CoverArtist")]),e._v(", "),a("code",[e._v("Editor")]),e._v(", and "),a("code",[e._v("Translator")]),e._v(" as "),a("em",[e._v("Authors")]),e._v(" with the according role. A value with multiple names separated by a "),a("code",[e._v(",")]),e._v(" will be split in different authors.")]),e._v(" "),a("li",[a("code",[e._v("Title")]),e._v(", "),a("code",[e._v("Summary")]),e._v(", "),a("code",[e._v("Number")]),e._v(" as their Komga equivalent")]),e._v(" "),a("li",[e._v("Valid "),a("code",[e._v("Web")]),e._v(" links as a book link")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("Tags")]),e._v(" element will be split by "),a("code",[e._v(",")]),e._v(" and added to the book's "),a("em",[e._v("tags")])]),e._v(" "),a("li",[e._v("If the "),a("code",[e._v("GTIN")]),e._v(" element contains a valid ISBN, as the book's "),a("em",[e._v("ISBN")])])]),e._v(" "),a("h4",{attrs:{id:"series-metadata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#series-metadata"}},[e._v("#")]),e._v(" Series metadata")]),e._v(" "),a("p",[e._v("This will import the following elements from the "),a("code",[e._v("ComicInfo.xml")]),e._v(" of the Series' books in Komga:")]),e._v(" "),a("ul",[a("li",[e._v("The "),a("code",[e._v("Series")]),e._v(" and "),a("code",[e._v("Volume")]),e._v(" elements will be used to overwrite the title of the Series, in the form "),a("code",[e._v("<Series> (<Volume>)")]),e._v(", or just "),a("code",[e._v("<Series>")]),e._v(" if the "),a("code",[e._v("Volume")]),e._v(" element is not present or if the "),a("code",[e._v("Volume")]),e._v(" is "),a("code",[e._v("1")]),e._v(". If multiple values are present, the most frequent value from all books will be used.")]),e._v(" "),a("li",[e._v("The various "),a("code",[e._v("AgeRating")]),e._v(" values will be converted to a number in Komga. The highest value from all books will be used.")]),e._v(" "),a("li",[e._v("The most frequent "),a("code",[e._v("Publisher")]),e._v(" value will be used as Komga's equivalent.")]),e._v(" "),a("li",[e._v("A "),a("code",[e._v("Manga")]),e._v(" element with the value "),a("code",[e._v("YesAndRightToLeft")]),e._v(" will mark the reading direction as "),a("em",[e._v("Right to left")]),e._v(". The most frequent value from all books will be used.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("Genre")]),e._v(" element will be split by "),a("code",[e._v(",")]),e._v(". All genres from all books will be added to the Series.")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("LanguageISO")]),e._v(" element will be used as the Series' language. The most frequent value from all books will be used.")]),e._v(" "),a("li",[e._v("The highest value from "),a("code",[e._v("Count")]),e._v(" will be used as the total count of books.")])]),e._v(" "),a("h4",{attrs:{id:"collections"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#collections"}},[e._v("#")]),e._v(" Collections")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("SeriesGroup")]),e._v(" element will be used to create a collection with that name, or add the series to an existing collection with that name.")]),e._v(" "),a("p",[e._v("If the "),a("code",[e._v("SeriesGroup")]),e._v(" element is set to a different value in each book of the series, then each value of the element will create a collection.")]),e._v(" "),a("h4",{attrs:{id:"read-lists"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#read-lists"}},[e._v("#")]),e._v(" Read lists")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("AlternateSeries")]),e._v(" or "),a("code",[e._v("StoryArc")]),e._v(" elements will be used to create a read list with that name, or add the book to an existing read list with that name.")]),e._v(" "),a("p",[e._v("If the "),a("code",[e._v("AlternateNumber")]),e._v(" element is set, it will be used to position the book in the read list.")]),e._v(" "),a("h5",{attrs:{id:"storyarcnumber"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#storyarcnumber"}},[e._v("#")]),e._v(" StoryArcNumber")]),e._v(" "),a("p",[e._v("If the "),a("code",[e._v("StoryArcNumber")]),e._v(" element is set, it will be used in conjunction with "),a("code",[e._v("StoryArc")]),e._v(" to position the book in the read list.")]),e._v(" "),a("p",[e._v("Both "),a("code",[e._v("StoryArc")]),e._v(" and "),a("code",[e._v("StoryArcNumber")]),e._v(" elements can contain multiple values, separated by "),a("code",[e._v(",")]),e._v(". Komga will do its best to match each pair:")]),e._v(" "),a("ul",[a("li",[e._v("If both elements are set, but do not contain the same number of values, the extra values will not be used")]),e._v(" "),a("li",[e._v("If there are invalid values, like blank strings or invalid numbers, the whole pair will be ignored")])]),e._v(" "),a("h3",{attrs:{id:"import-metadata-from-epub-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-metadata-from-epub-files"}},[e._v("#")]),e._v(" Import metadata from EPUB files")]),e._v(" "),a("h4",{attrs:{id:"book-metadata-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#book-metadata-2"}},[e._v("#")]),e._v(" Book metadata")]),e._v(" "),a("p",[e._v("This will import the following fields from the Epub metadata in Komga:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("dc:title")]),e._v(" element as the "),a("em",[e._v("Title")])]),e._v(" "),a("li",[a("code",[e._v("dc:description")]),e._v(" element as the "),a("em",[e._v("Summary")])]),e._v(" "),a("li",[a("code",[e._v("dc:date")]),e._v(" element as the "),a("em",[e._v("Release date")])]),e._v(" "),a("li",[a("code",[e._v("dc:identifier")]),e._v(" element as the "),a("em",[e._v("ISBN")]),e._v(", if it is a valid ISBN")]),e._v(" "),a("li",[a("code",[e._v("dc:creator")]),e._v(" element as "),a("em",[e._v("Authors")]),e._v(". The role will be imported either from the "),a("code",[e._v("opf:role")]),e._v(" property, or from a "),a("code",[e._v("meta")]),e._v(" element containing "),a("code",[e._v("role")]),e._v(" property and a "),a("code",[e._v("marc:relators")]),e._v(" scheme. A value with multiple names separated by a "),a("code",[e._v(",")]),e._v(" will be split in different authors.")])]),e._v(" "),a("h4",{attrs:{id:"series-metadata-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#series-metadata-2"}},[e._v("#")]),e._v(" Series metadata")]),e._v(" "),a("p",[e._v("This will import the following fields from the Epub metadata in Komga:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("dc:publisher")]),e._v(" element as the "),a("em",[e._v("Publisher")])]),e._v(" "),a("li",[a("code",[e._v("dc:language")]),e._v(" element as the "),a("em",[e._v("Language")])]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("page-progression-direction")]),e._v(" property of the "),a("code",[e._v("spine")]),e._v(" element as the "),a("em",[e._v("Reading direction")])]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("belongs-to-collection")]),e._v(" meta property will be used to overwrite the title of a Series. If multiple values are present, the most frequent value from all books will be used.")])]),e._v(" "),a("h3",{attrs:{id:"import-metadata-generated-by-mylar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-metadata-generated-by-mylar"}},[e._v("#")]),e._v(" Import metadata generated by Mylar")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/mylar3/mylar3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mylar"),a("OutboundLink")],1),e._v(" can generate a "),a("code",[e._v("series.json")]),e._v(" file inside your Series folders. This option will import the following fields into Komga:")]),e._v(" "),a("ul",[a("li",[e._v("The "),a("code",[e._v("name")]),e._v(" field will be used for the Series title. If the "),a("code",[e._v("volume")]),e._v(" field is set and is different from "),a("code",[e._v("1")]),e._v(", then the "),a("code",[e._v("year")]),e._v(" field will be appended to the title, in the form "),a("code",[e._v("<name> (<year>)")]),e._v(".")]),e._v(" "),a("li",[a("code",[e._v("status")]),e._v(" will be used to set the Series status.")]),e._v(" "),a("li",[a("code",[e._v("description_formatted")]),e._v(" or "),a("code",[e._v("description_text")]),e._v(" will be used for the Series summary.")]),e._v(" "),a("li",[a("code",[e._v("publisher")]),e._v(" will be used for the Series publisher.")]),e._v(" "),a("li",[a("code",[e._v("age_rating")]),e._v(" will be used for the Series age rating.")]),e._v(" "),a("li",[a("code",[e._v("total_issues")]),e._v(" will be used for the total count of books.")])]),e._v(" "),a("h3",{attrs:{id:"import-local-media-assets"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-local-media-assets"}},[e._v("#")]),e._v(" Import local media assets")]),e._v(" "),a("h4",{attrs:{id:"local-artwork"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#local-artwork"}},[e._v("#")]),e._v(" Local artwork")]),e._v(" "),a("p",[e._v("This will enable import for local artwork, check the "),a("a",{attrs:{href:"/guides/local-artwork-assets"}},[e._v("Local Artwork Assets")]),e._v(" section for more information.")]),e._v(" "),a("h3",{attrs:{id:"import-isbn-within-barcode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-isbn-within-barcode"}},[e._v("#")]),e._v(" Import ISBN within barcode")]),e._v(" "),a("h4",{attrs:{id:"isbn-barcode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isbn-barcode"}},[e._v("#")]),e._v(" ISBN barcode")]),e._v(" "),a("p",[e._v("Komga will inspect the first and last 3 pages of each book for barcodes. If a barcode is present and contains an ISBN code, it will be imported.")])])}),[],!1,null,null,null);a.default=r.exports}}]);