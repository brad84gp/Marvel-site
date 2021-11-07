(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],{46:function(e,t,a){e.exports=a(94)},52:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},76:function(e,t){e.exports={publicKey:"e5d473050b2edb6b37ff102e9868fed9",privateKey:"c3d3d5ab05026f6490d27cc60eb95130f0aed045"}},79:function(e,t,a){},80:function(e,t,a){},84:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),l=a(14),c=a.n(l),u=(a(51),a(20)),i=a(6),s=a(7),m=(a(52),a(2)),o=function(){var e=Object(r.useState)(!1),t=Object(s.a)(e,2),a=t[0],l=t[1];return n.a.createElement("div",null,n.a.createElement(m.r,{color:"dark",dark:!0,expand:"md"},n.a.createElement(m.j,{md:1,lg:2}),n.a.createElement(m.j,{xs:12,md:10,lg:8,style:{margin:" 2em auto",textAlign:"center"}},n.a.createElement(m.x,{style:{borderBottom:"5px solid red"}},n.a.createElement(m.j,{md:1,lg:2}),n.a.createElement(m.j,{xs:12,md:10,lg:8},n.a.createElement(m.s,{href:"/",style:{fontSize:"35px"}},"Marveling at Marvel")),n.a.createElement(m.j,{md:1,lg:2})),n.a.createElement(m.x,null,n.a.createElement(m.t,{onClick:function(){return l(!a)}}),n.a.createElement(m.k,{isOpen:a,navbar:!0},n.a.createElement(m.o,{navbar:!0,style:{margin:"auto",fontSize:"20px"}},n.a.createElement(m.p,null,n.a.createElement(m.q,{href:"/characters",id:"navitem-item"},"Characters")),n.a.createElement(m.p,null,n.a.createElement(m.q,{href:"/",id:"navitem-item"},"Home")))))),n.a.createElement(m.j,{md:1,lg:2})))},E=a(4),p=a.n(E),f=a(8),d=(a(56),function(){return n.a.createElement("div",{className:"loadingSymbol"})}),h=(a(57),a(38)),b=a(39),v=a(58),g=a(76),y=g.publicKey,j=g.privateKey,x=a(77),C="http://gateway.marvel.com/v1/public",O=function(){function e(){Object(h.a)(this,e)}return Object(b.a)(e,null,[{key:"request",value:function(){var e=Object(f.a)(p.a.mark((function e(t){var a,r,n,l,c,u=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>1&&void 0!==u[1]?u[1]:"",r=u.length>2&&void 0!==u[2]?u[2]:"get",console.log(t,a,r),console.debug("API Call:",t,r),n=(new Date).getTime(),l=x("".concat(n)+"".concat(j)+"".concat(y)),e.prev=6,e.next=9,v({method:r,url:"".concat(C,"/").concat(t,"?").concat(a,"&ts=").concat(n,"&apikey=").concat(y,"&hash=").concat(l),headers:{"Content-Type":"application/json"}});case 9:return e.abrupt("return",e.sent);case 12:throw e.prev=12,e.t0=e.catch(6),console.error("API Error:",e.t0.response),c=e.t0.response.data.error.message,Array.isArray(c)?c:[c];case 17:case"end":return e.stop()}}),e,null,[[6,12]])})));return function(t){return e.apply(this,arguments)}}()},{key:"setUpHomePage",value:function(){var e=Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.floor(1559*Math.random()+1),e.next=3,this.request("characters","offset=".concat(t));case 3:return a=e.sent,e.abrupt("return",a.data.data.results);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getAllCharacters",value:function(){var e=Object(f.a)(p.a.mark((function e(t){var a,r,n,l,c=arguments;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=c.length>1&&void 0!==c[1]&&c[1],r=c.length>2?c[2]:void 0,0!=a){e.next=9;break}return e.next=5,this.request("characters","offset=".concat(t));case 5:return n=e.sent,e.abrupt("return",n.data.data.results);case 9:return e.next=11,this.request("characters","nameStartsWith=".concat(r));case 11:return l=e.sent,e.abrupt("return",l.data.data.results);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getSpecificCharacter",value:function(){var e=Object(f.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("characters","nameStartsWith=".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data.data.results);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"findCharacterInformation",value:function(){var e=Object(f.a)(p.a.mark((function e(t){var a,r,n;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("characters/".concat(t));case 2:return a=e.sent,e.next=5,this.request("characters/".concat(t,"/series"));case 5:return r=e.sent,e.next=8,this.request("characters/".concat(t,"/comics"));case 8:return n=e.sent,e.abrupt("return",[{character:a.data.data.results,seriesInfo:r.data.data.results,comicInfo:n.data.data.results}]);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCharacterStories",value:function(){var e=Object(f.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.request("stories/".concat(t));case 2:return a=e.sent,e.abrupt("return",a.data.data.results);case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),k=(a(79),function(){return n.a.createElement("div",{className:"footerDiv"},n.a.createElement("div",{className:"footerInfo"},n.a.createElement("ul",null,n.a.createElement("li",null,"All API information was retrieved from ",n.a.createElement("a",{href:"http://developer.marvel.com",target:"_blank"},"http://developer.marvel.com")),n.a.createElement("li",null,"All Icons were retrieved from ",n.a.createElement("a",{href:"https://icons8.com/icon/26190/scroll-up"},"Scroll Up icon by Icons8")))))}),w=function(){var e=Object(r.useState)(),t=Object(s.a)(e,2),a=t[0],l=t[1];Object(r.useLayoutEffect)((function(){function e(){return(e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.setUpHomePage();case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),console.log(a);var c=function(e){var t=e.el,a=t.thumbnail.path+"."+t.thumbnail.extension;return console.log(t.thumbnail.path),"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"!=t.thumbnail.path?n.a.createElement("img",{src:a,id:"characterImages"}):null};return a?n.a.createElement("div",{className:"homeDiv"},n.a.createElement(m.x,{className:"imagesRow"},n.a.createElement(m.j,null,a.map((function(e){return n.a.createElement(c,{el:e})})))),n.a.createElement(m.x,{style:{marginTop:"-8em"}},n.a.createElement(k,null))):n.a.createElement(d,null)},S=n.a.createContext(),I=(a(80),function(e){var t=e.id,a=e.comics,l=e.name,c=e.series,u=e.stories,i=e.thumbnail,o=e.urls,E=Object(r.useState)({id:t,href:"/characters/".concat(t),comics:a,name:l,series:c,stories:u,thumbnail:i,urls:o}),p=Object(s.a)(E,2),f=p[0];p[1];return n.a.createElement("div",{className:"characterDiv"},n.a.createElement("a",{href:f.href},n.a.createElement(m.b,{inverse:!0,className:"characterCards"},n.a.createElement(m.e,{width:"100%",height:"100%",src:f.thumbnail,alt:"Card image cap"}),n.a.createElement(m.f,null,n.a.createElement(m.i,{tag:"h1",id:"characterName"},f.name)))))}),N=function(){var e=Object(r.useState)(),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(r.useState)(),u=Object(s.a)(c,2),i=u[0],o=u[1],E=Object(r.useContext)(S).setTrueORfalse;Object(r.useLayoutEffect)((function(){if(a){function e(){return(e=Object(f.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getSpecificCharacter(a);case 2:t=e.sent,o(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}}),[a]);var d=function(e){var t=e.char,a=e.id;return n.a.createElement("option",{value:t,id:a})};return n.a.createElement("div",null,n.a.createElement(m.l,{onChange:function(e){e.preventDefault();var t=document.getElementById("characterSearch");if(""==t.value)return null;l(t.value),E({boolValue:!0,charValue:t.value})}},n.a.createElement(m.n,null,n.a.createElement(m.m,{id:"characterSearch",list:"characterDropdown",name:"characterDropdown"}),i?n.a.createElement("datalist",{id:"characterDropdown",style:{width:"100px"}},i.map((function(e){return n.a.createElement(d,{char:e.name,id:e.id})}))):null,n.a.createElement(m.a,{color:"secondary",type:"submit"},"Search Characters"))))},T=function(){var e=Object(r.useState)(),t=Object(s.a)(e,2),a=t[0],l=t[1],c=Object(r.useState)(0),u=Object(s.a)(c,2),i=u[0],o=u[1],E=Object(r.useState)({boolValue:!1,charValue:""}),h=Object(s.a)(E,2),b=h[0],v=h[1];return Object(r.useLayoutEffect)((function(){function e(){return(e=Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!=b.boolValue){e.next=7;break}return e.next=3,O.getAllCharacters(i);case 3:t=e.sent,l(t),e.next=11;break;case 7:return e.next=9,O.getAllCharacters(i,b.boolValue,b.charValue);case 9:a=e.sent,l(a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[i,b]),n.a.createElement("div",null,n.a.createElement(m.x,{style:{marginTop:"2%"}},n.a.createElement(m.j,{md:2,lg:1}),n.a.createElement(m.j,{sm:12,md:8,lg:10},n.a.createElement(S.Provider,{value:{setTrueORfalse:v}},n.a.createElement(N,null)),n.a.createElement("br",null),n.a.createElement(m.u,{"aria-label":"Page naviagtion",style:{position:"relative",display:"flex",justifyContent:" center"}},n.a.createElement(m.v,null,n.a.createElement(m.w,{first:!0,href:"",onClick:function(){o(0)}})),n.a.createElement(m.v,null,n.a.createElement(m.w,{previous:!0,href:"",onClick:function(){if(0==i)return null;o(i-20)}})),n.a.createElement(m.v,null,n.a.createElement(m.w,{next:!0,href:"#",onClick:function(){if(i>1513)return null;o(i+20)}})),n.a.createElement(m.v,null,n.a.createElement(m.w,{last:!0,href:"#",onClick:function(){o(1514)}})))),n.a.createElement(m.j,{md:2,lg:1})),n.a.createElement(m.x,null,n.a.createElement(m.j,{md:2,lg:1}),n.a.createElement(m.j,{sm:12,md:8,lg:10},n.a.createElement(m.x,null,a?n.a.createElement(m.d,null,a.map((function(e){return n.a.createElement(I,{key:e.id,id:e.id,comics:e.comics,name:e.name,series:e.series,stories:e.stories,thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,urls:e.urls})}))):n.a.createElement(d,null))),n.a.createElement(m.j,{md:2,lg:1})),n.a.createElement(m.x,null,n.a.createElement(k,null)))},A=a(15),P=(a(84),function(e){var t=e.format,a=e.id,l=e.characters,c=e.dates,u=void 0===c?null:c,o=e.description,E=e.image,p=e.prices,f=void 0===p?null:p,d=e.title,h=e.upc,b=void 0===h?null:h,v=e.issueNum,g=void 0===v?null:v,y=e.pageCount,j=void 0===y?null:y,x=Object(i.f)(),C=Object(r.useState)({id:a,format:t,characters:l,dates:u,description:o,image:E,prices:f,title:d,upc:b,issueNum:g,pageCount:j}),O=Object(s.a)(C,2),k=O[0];O[1];return"series"==k.format?n.a.createElement(m.b,{className:"seriesCard",id:k.id},n.a.createElement(m.e,{top:!0,width:"100%",src:k.image,alt:"Card image cap"}),n.a.createElement(m.c,{className:"cardBody"},n.a.createElement(m.i,{tag:"h5"},k.title),n.a.createElement(m.g,{tag:"h6",className:"mb-2 text-muted"},"Series"),n.a.createElement(m.h,null,k.description),n.a.createElement(m.a,{onClick:function(){x.push("/SeriesPopUp")}},"View More"))):"comics"==k.format?n.a.createElement(m.b,{className:"ComicCard"},n.a.createElement(m.e,{top:!0,width:"100%",src:k.image,alt:"Card image cap"}),n.a.createElement(m.c,{className:"cardBody"},n.a.createElement(m.i,{tag:"h5"},k.title),n.a.createElement(m.g,{tag:"h6",className:"mb-2 text-muted"},"Comic"),n.a.createElement(m.h,null,k.description),n.a.createElement(m.a,{onClick:function(){x.push("/ComicPopUp")}},"View More"))):void 0}),D=(a(88),function(e){for(var t=e.storyId,a="",l=t.length-1;l>0;l--)if("/"==t[l]){var c=l+1;a=t.slice(c);break}var u=Object(r.useState)({}),i=Object(s.a)(u,2),o=i[0],E=i[1];return Object(r.useEffect)((function(){function e(){return(e=Object(f.a)(p.a.mark((function e(t){var a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.getCharacterStories(t);case 2:a=e.sent,E(a);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(t){e.apply(this,arguments)}(a)}),[]),o[0]?n.a.createElement("div",{className:"storyDiv"},n.a.createElement(m.b,{className:"storyCard"},n.a.createElement(m.c,{className:"cardBody"},n.a.createElement(m.i,{tag:"h5"},"Title : ",o[0].title),n.a.createElement(m.g,{tag:"h6",className:"mb-2 text-muted"},"Original Issue : ",o[0].originalIssue.name)))):null}),U=function(){var e=Object(i.g)().id,t=Object(A.b)(),a=Object(A.c)((function(e){return e.characterInfo})),l=a.character,c=a.seriesInfo,u=a.comicInfo;Object(r.useEffect)((function(){function a(){return(a=Object(f.a)(p.a.mark((function a(){var r;return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,O.findCharacterInformation(e);case 2:r=a.sent,t({type:"NEW_CHARACTER",payload:r});case 4:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}),[]),console.log(a);var s=function(e){var t=e.element;return n.a.createElement("li",{style:{listStyle:"none"}},n.a.createElement("a",{href:t.url,target:"_blank",id:"urlAnchor"},t.type))};return l?n.a.createElement("div",null,n.a.createElement(m.x,{style:{height:"100vh",marginTop:"2em"}},n.a.createElement(m.j,{md:2,lg:1}),n.a.createElement(m.j,{sm:12,md:8,lg:10,className:"pageColumn"},n.a.createElement(m.x,null,n.a.createElement(m.j,{sm:12,md:2},n.a.createElement("div",{className:"stickyDiv"},n.a.createElement("img",{src:a.character[0].thumbnail.path+"."+a.character[0].thumbnail.extension,id:"comicImage"}),n.a.createElement("div",{id:"characterInfo"},n.a.createElement("h3",null,a.character[0].name),n.a.createElement("h5",null,"Total Comics : ",a.character[0].comics.available),n.a.createElement("h5",null,"Total Series : ",a.character[0].series.available),n.a.createElement("h5",null,"Total Stories : ",a.character[0].stories.available),n.a.createElement("h5",null,"Related URLS"),n.a.createElement("ul",null,a.character[0].urls.map((function(e){return n.a.createElement(s,{element:e})})))))),n.a.createElement(m.j,{md:3}),n.a.createElement(m.j,{md:6},n.a.createElement(m.x,null,n.a.createElement("h1",{id:"seriesTitle"},n.a.createElement("u",null,"Character Series")),c?n.a.createElement("div",{className:"seriesCardDeck"},c.map((function(e){return n.a.createElement(P,{key:e.id,format:"series",id:e.id,characters:e.characters,dates:e.dates,description:e.description,image:e.thumbnail.path+"."+e.thumbnail.extension,prices:e.prices,title:e.title,upc:e.prices,issueNum:e.issueNumber,pageCount:e.pageCount})}))):null),n.a.createElement(m.x,{style:{marginTop:"5em"}},n.a.createElement("h1",{id:"comicsTitle"},n.a.createElement("u",null,"Character Comics")),u?n.a.createElement("div",{className:"ComicsCardDeck"},u.map((function(e){return n.a.createElement(P,{key:e.id,format:"comics",id:e.id,characters:e.characters,dates:e.dates,description:e.description,image:e.thumbnail.path+"."+e.thumbnail.extension,prices:e.prices,title:e.title,upc:e.prices,issueNum:e.issueNumber,pageCount:e.pageCount})}))):null),n.a.createElement(m.x,{style:{marginTop:"5em"}},n.a.createElement("h1",{id:"storiesTitle"},n.a.createElement("u",null,"Character Stories")),a?n.a.createElement("div",{className:"ComicStoryCard"},a.character[0].stories.items.map((function(e){return n.a.createElement(D,{storyId:e.resourceURI})}))):null))),n.a.createElement(m.x,{style:{marginLeft:"-8.9em"}},n.a.createElement(k,null))),n.a.createElement(m.j,{md:2,lg:1}))):n.a.createElement(d,null)},R=(a(89),function(){var e=Object(A.c)((function(e){return e.characterInfo})).comicInfo;console.log(e);var t=function(e){var t=e.el,a=Object(r.useState)(!1),l=Object(s.a)(a,2),c=l[0],u=l[1];return n.a.createElement(m.b,{inverse:!0,className:"comicCardPopUp"},n.a.createElement(m.e,{id:"popUpImg",src:t.thumbnail.path+"."+t.thumbnail.extension,alt:"Card image cap"}),n.a.createElement(m.a,{color:"primary",onClick:function(){return u(!c)},style:{marginBottom:"1rem",marginTop:"1rem"}},"See Details"),n.a.createElement(m.k,{isOpen:c},n.a.createElement(m.b,{style:{color:"black"}},n.a.createElement(m.i,{tag:"h4"},"Title: ",t.title),n.a.createElement(m.g,null,"UPC: ",t.upc),n.a.createElement(m.g,null,"Digital Id: ",t.digitalId),n.a.createElement("br",null),n.a.createElement(m.c,null,n.a.createElement("p",null,t.description?'"'.concat(t.description,'"'):null),n.a.createElement("ul",null,n.a.createElement("li",null,"Issue Number: ",t.issueNumber),n.a.createElement("li",null,"Modified: ",t.modified.slice(0,10)),n.a.createElement("li",null,"Prices",n.a.createElement("ul",null,t.prices[0]?n.a.createElement("li",null,"Print Price: $",t.prices[0].price):null,t.prices[1]?n.a.createElement("li",null,"Digital Price: $",t.prices[1].price):null)))),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("h5",null,"Related Urls"),n.a.createElement("ul",{style:{fontSize:"15px"}},t.urls[0]?n.a.createElement("li",null,n.a.createElement("b",null,t.urls[0].type,":")," ",n.a.createElement("a",{href:t.urls[0].url,target:"_blank",rel:"noreferrer"},t.urls[0].url)):null,t.urls[1]?n.a.createElement("li",null,n.a.createElement("b",null,t.urls[1].type,":")," ",n.a.createElement("a",{href:t.urls[1].url,target:"_blank",rel:"noreferrer"},t.urls[1].url)):null,t.urls[2]?n.a.createElement("li",null,n.a.createElement("b",null,t.urls[2].type,":")," ",n.a.createElement("a",{href:t.urls[2].url,target:"_blank",rel:"noreferrer"},t.urls[2].url)):null,t.urls[3]?n.a.createElement("li",null,n.a.createElement("b",null,t.urls[3].type,":")," ",n.a.createElement("a",{href:t.urls[3].url,target:"_blank",rel:"noreferrer"},t.urls[3].url)):null))))))};return n.a.createElement("div",{className:"comicPopUpDiv"},n.a.createElement(m.x,null,n.a.createElement(m.j,{md:2,lg:1}),n.a.createElement(m.j,{sm:12,md:8,lg:10},n.a.createElement(m.x,null,e?n.a.createElement(n.a.Fragment,null,e.map((function(e){return n.a.createElement(t,{el:e})}))):null)),n.a.createElement(m.j,{md:2,lg:1})),n.a.createElement(m.x,null,n.a.createElement(k,null)))}),_=(a(90),function(){var e=Object(A.c)((function(e){return e.characterInfo})).seriesInfo,t=function(e){var t=e.el,a=Object(r.useState)(!1),l=Object(s.a)(a,2),c=l[0],u=l[1],i=function(e){var t=e.el;return n.a.createElement("li",null,n.a.createElement("b",null,"name:")," ",t.name," ",n.a.createElement("b",null,"Role: ")," ",t.role)};return n.a.createElement(m.b,{inverse:!0,className:"seriesInfoPopUp",id:t.id},n.a.createElement(m.e,{id:"popUpImg",src:t.thumbnail.path+"."+t.thumbnail.extension,alt:"Card image cap"}),n.a.createElement(m.a,{color:"primary",onClick:function(){return u(!c)},style:{marginBottom:"1rem",marginTop:"1rem"}},"See Details"),n.a.createElement(m.k,{isOpen:c},n.a.createElement(m.b,{style:{color:"black"}},n.a.createElement(m.i,{tag:"h4"},"Title: ",t.title),n.a.createElement(m.g,null,"Start Year: ",t.startYear),n.a.createElement(m.g,null,"End Year: ",t.endYear),t.rating?n.a.createElement(m.g,null,"Rating: ",t.rating):null,n.a.createElement("br",null),n.a.createElement(m.c,null,n.a.createElement("p",null,t.description?'"'.concat(t.description,'"'):null),n.a.createElement("ul",null,n.a.createElement("li",null,"Modified: ",t.modified.slice(0,10)),n.a.createElement("li",null,"Creators",t.creators.items?n.a.createElement("ul",null,t.creators.items.map((function(e){return n.a.createElement(i,{el:e})}))):null))),n.a.createElement("br",null),n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("h5",null,"Related Urls"),n.a.createElement("ul",{style:{fontSize:"15px"}},t.urls[0]?n.a.createElement("li",null,n.a.createElement("b",null,t.urls[0].type,":")," ",n.a.createElement("a",{href:t.urls[0].url,target:"_blank",rel:"noreferrer"},t.urls[0].url)):null,t.urls[1]?n.a.createElement("li",null,n.a.createElement("b",null,t.urls[1].type,":")," ",n.a.createElement("a",{href:t.urls[1].url,target:"_blank",rel:"noreferrer"},t.urls[1].url)):null,t.urls[2]?n.a.createElement("li",null,n.a.createElement("b",null,t.urls[2].type,":")," ",n.a.createElement("a",{href:t.urls[2].url,target:"_blank",rel:"noreferrer"},t.urls[2].url)):null,t.urls[3]?n.a.createElement("li",null,n.a.createElement("b",null,t.urls[3].type,":")," ",n.a.createElement("a",{href:t.urls[3].url,target:"_blank",rel:"noreferrer"},t.urls[3].url)):null))))))};return n.a.createElement("div",{className:"SeriesPopUpDiv"},n.a.createElement(m.x,null,n.a.createElement(m.j,{md:2,lg:1}),n.a.createElement(m.j,{sm:12,md:8,lg:10},n.a.createElement(m.x,null,e?n.a.createElement(n.a.Fragment,null,e.map((function(e){return n.a.createElement(t,{el:e})}))):null)),n.a.createElement(m.j,{md:2,lg:1})),n.a.createElement(m.x,null,n.a.createElement(k,null)))});a(91);var q=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(u.a,null,n.a.createElement(o,null),n.a.createElement(i.c,null,n.a.createElement(i.a,{exact:!0,path:"/"},n.a.createElement(w,null)),n.a.createElement(i.a,{exact:!0,path:"/characters"},n.a.createElement(T,null)),n.a.createElement(i.a,{exact:!0,path:"/characters/:id"},n.a.createElement(U,null)),n.a.createElement(i.a,{exact:!0,path:"/ComicPopUP"},n.a.createElement(R,null)),n.a.createElement(i.a,{exact:!0,path:"/SeriesPopUp"},n.a.createElement(_,null)))))},V=a(16),B=a(24),M={characterInfo:[]};var H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEW_CHARACTER":var a=t.payload;return Object(B.a)(Object(B.a)({},e),{},{characterInfo:e.characterInfo=a[0]});case"RESET_CHARACTER":return{INTITIAL_STATE:M};default:return e}},L=a(23),z=a(42),K=a(43),W={key:"root",storage:a.n(K).a},Y=Object(L.a)(W,H),F=Object(V.b)(Y),J=Object(L.b)(F);c.a.render(n.a.createElement(A.a,{store:F},n.a.createElement(z.a,{loading:null,persistor:J},n.a.createElement(q,null))),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.e0d64dcc.chunk.js.map