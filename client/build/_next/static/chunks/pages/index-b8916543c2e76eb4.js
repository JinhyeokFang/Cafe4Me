(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(7027)}])},5631:function(e,t,n){"use strict";var r=n(5893),i=n(1907),o=n.n(i),a=function(e){var t=e.children,n=e.style;return(0,r.jsx)("div",{className:o().box,style:n,children:t})};t.Z=a},1802:function(e,t,n){"use strict";var r=n(1799),i=n(5893),o=n(3997),a=n.n(o),c=function(e){var t=e.style,n=e.content,o=e.clickEvent,c=e.width,s=e.height;return(0,i.jsx)("button",{className:a().button,onClick:o,style:(0,r.Z)({width:c,height:s,cursor:"pointer"},t),children:n})};t.Z=c},1849:function(e,t,n){"use strict";var r=n(5893),i=n(7059),o=n.n(i),a=function(e){var t=e.content,n=e.fontSize,i=e.color;return(0,r.jsx)("span",{className:o().detail,style:{fontSize:n,color:i},children:t})};t.Z=a},2642:function(e,t,n){"use strict";var r=n(5893),i=n(7294),o=n(7285),a=n.n(o),c=function(e,t){var n=e.type,o=e.valueUpdateEvent,c=e.fileUpdateEvent,s=e.keyPressedEvent,u=e.defaultValue,l=e.width,d=e.height,f=e.placeholder,h=(0,i.useState)(u||""),p=h[0],x=h[1],g=function(e){x(e.target.value),o(e.target.value),c&&c(e.target.files)};return(0,i.useImperativeHandle)(t,function(){return{clear:function(){x("")}}}),(0,r.jsx)("input",{type:n,className:a().input,value:p,onChange:g,onKeyDown:function(e){return void 0!==s?s(e.key):console.log("a")},style:{width:l,height:d},placeholder:f})};t.Z=(0,i.forwardRef)(c)},1504:function(e,t,n){"use strict";var r=n(5893),i=n(1435),o=n.n(i),a=function(e){var t=e.content,n=e.fontSize;return(0,r.jsx)("p",{className:o().paragraph,style:{fontSize:n},children:t})};t.Z=a},3666:function(e,t,n){"use strict";var r=n(5893),i=n(7294),o=n(4979),a=n.n(o),c=function(e){var t=e.tags,n=e.valueUpdateEvent,o=(0,i.useState)(Array(t.length).fill(!1)),c=o[0],s=o[1],u=function(e){s(c.map(function(t,n){return n==e?!t:t}))};return(0,i.useEffect)(function(){n(t.filter(function(e,t){return c[t]}))},[c]),(0,r.jsxs)("div",{className:a().container,children:[(0,r.jsx)("span",{children:"Filter: "}),t.map(function(e,t){return(0,r.jsx)("button",{onClick:function(){return u(t)},className:"".concat(a().tag," ").concat(c[t]?a().selected:""),children:e},t)})]})};t.Z=c},9352:function(e,t,n){"use strict";var r=n(5893),i=n(7693),o=n.n(i),a=function(e){var t=e.content,n=e.fontSize,i=e.textAlign;return(0,r.jsx)("h2",{className:o().title,style:{fontSize:n,textAlign:i},children:t})};t.Z=a},2927:function(e,t,n){"use strict";var r=n(5893),i=n(8226),o=n.n(i),a=function(){return(0,r.jsx)("footer",{className:o().container,children:(0,r.jsxs)("div",{children:["Made By Jin-hyeok Bang, 2022",(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),"Server Code: https://github.com/JinhyeokFang/cafe-for-me-server",(0,r.jsx)("br",{}),"Client Code: https://github.com/JinhyeokFang/cafe-for-me-client",(0,r.jsx)("br",{})]})})};t.Z=a},2902:function(e,t,n){"use strict";var r=n(5893),i=n(1163),o=n(7294),a=n(5766),c=n(8449),s=n.n(c),u=function(){var e=(0,o.useState)(0),t=e[0],n=e[1],c=(0,i.useRouter)(),u=(0,a.aC)(),l=u.isLogined,d=(u.setToken,u.clearToken),f=function(){n(window.pageYOffset)};(0,o.useEffect)(function(){return window.addEventListener("scroll",f,{passive:!0}),function(){window.removeEventListener("scroll",f)}},[]);var h=(0,o.useMemo)(function(){return 0===t},[t]);return(0,r.jsxs)("header",{children:[(0,r.jsxs)("div",{className:s().container+(h?" "+s().container_top:""),children:[(0,r.jsx)("div",{className:s().logo_container,onClick:function(){return c.push("/")},style:{cursor:"pointer"},children:(0,r.jsx)("div",{className:s().logo,children:"Cafe4Me"})}),(0,r.jsx)("nav",{className:s().navigation_container,children:(0,r.jsxs)("ul",{className:s().navigation,children:[(0,r.jsx)("li",{className:s().navigation_item,style:{cursor:"pointer"},onClick:function(){return c.push("/")},children:"카페 찾기"}),l()?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("li",{className:s().navigation_item,style:{cursor:"pointer"},onClick:function(){return c.push("/cafes/add")},children:"카페 추가"}),(0,r.jsx)("li",{className:s().navigation_item,style:{cursor:"pointer"},onClick:function(){c.push("/"),d()},children:"로그아웃"})]}):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("li",{className:s().navigation_item,style:{cursor:"pointer"},onClick:function(){c.push("/login")},children:"로그인"})})]})})]}),(0,r.jsx)("div",{className:s().spacer})]})};t.Z=u},7027:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r=n(5893),i=n(9008),o=n.n(i),a=n(7707),c=n.n(a),s=n(2902),u=n(2927),l=n(1799);function d(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):(function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n.push.apply(n,r)}return n})(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}),e}var f=n(5631),h=n(8356),p=n(7294),x=n(1802),g=n(7109),v=n(1163),_=n(545),j=n.n(_),m=function(e){var t=e.name,n=e.address,i=e.images,o=e.openHour,a=e.openMinute,c=e.closeDay,s=e.closeHour,u=e.closeMinute,l=e.tags,d=e.id,f=(0,p.useState)(!1),h=f[0],g=f[1],_=(0,v.useRouter)(),m=function(e){return"string"==typeof e&&e.length<2||e<10?"0"+e:e},y=function(){g(!h)};return(0,r.jsxs)("div",{className:j().container,onClick:y,style:{zIndex:h?2:0},children:[(0,r.jsx)("h1",{className:j().title,children:t}),(0,r.jsxs)("div",{style:{display:h?"block":"none"},className:j().detail,children:[(0,r.jsxs)("span",{children:["주소: ",n]}),(0,r.jsx)("br",{}),(0,r.jsxs)("span",{children:[m(o),":",m(a),"~",m(s),":",m(u)]}),(0,r.jsx)("br",{}),(0,r.jsxs)("span",{children:["휴뮤: ",c]}),(0,r.jsx)("br",{}),(0,r.jsx)("span",{children:"tags:"}),l.map(function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{children:e})," \xa0"]})}),(0,r.jsx)("br",{}),i.map(function(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("img",{src:e,style:{maxWidth:"200px"}}),(0,r.jsx)("br",{})]})}),(0,r.jsx)(x.Z,{content:"자세히 보기",style:{width:"100%",height:"20px",fontSize:"12px"},clickEvent:function(){return _.push("/cafes/find/".concat(d))}})]})]})},y=n(6005),Z=n(1849),b=n(453),w=n.n(b),k=function(e,t){var n=e.children,i=e.style,o=e.closedEvent,a=(0,p.useState)(!1),c=a[0],s=a[1],u=function(){s(!1),o()};return(0,p.useImperativeHandle)(t,function(){return{show:function(){s(!0)},close:function(){s(!1)}}}),(0,r.jsxs)("div",{className:w().container,style:d((0,l.Z)({},i),{opacity:c?1:0,visibility:c?"visible":"hidden"}),children:[(0,r.jsx)("button",{className:w().closeButton,style:{width:"30px",position:"absolute",right:"20px",top:"20px",cursor:"pointer"},onClick:u,children:"X"}),n]})},N=(0,p.forwardRef)(k),C=n(2642),E=n(1504),P=n(9352),S=function(e,t){var n=e.closedEvent,i=(0,p.useRef)(),o=(0,p.useState)(""),a=o[0],c=o[1],s=(0,y.Z)(a),u=s.data,l=s.isLoading;(0,p.useImperativeHandle)(t,function(){return{show:function(){var e;null===(e=i.current)||void 0===e||e.show()}}});var d=function(e,t){n(e,t),i.current.close()};return(0,r.jsxs)(N,{style:{width:"50%"},ref:i,closedEvent:function(){},children:[(0,r.jsx)(P.Z,{content:"원하는 위치 찾아서 이동"}),(0,r.jsx)(E.Z,{content:"원하는 위치의 주소를 입력하세요"}),(0,r.jsx)(Z.Z,{content:"주소"}),(0,r.jsx)(C.Z,{type:"text",placeholder:"주소",valueUpdateEvent:function(e){c(e)}}),l?"":u?u.location.filter(function(e,t){return t<5}).map(function(e){return(0,r.jsx)("div",{onClick:function(){return d(e.latitude,e.longitude)},children:(0,r.jsxs)(f.Z,{style:{width:"100%",cursor:"pointer"},children:[(0,r.jsx)(E.Z,{content:e.address}),(0,r.jsx)(Z.Z,{content:e.name})]})},e._id)}):""]})},D=(0,p.forwardRef)(S),O=n(3666),L=function(){var e=(0,p.useState)({latitude:37,longitude:127}),t=e[0],n=e[1],i=(0,p.useState)([]),o=i[0],a=i[1],c=(0,g.Z)(g.K.Location,d((0,l.Z)({},t),{maxDistance:1e6})),s=c.data,u=c.isLoading,v=(0,p.useRef)(),_=function(){navigator.geolocation.getCurrentPosition(function(e){n({latitude:e.coords.latitude,longitude:e.coords.longitude})})},j=function(){void 0!=v.current&&v.current.show()};(0,p.useEffect)(function(){_()},[]);var y=(0,p.useMemo)(function(){return{lat:t.latitude,lng:t.longitude}},[t]),Z=function(e,t){if(0===o.length)return!0;var n=e.tags;return console.log(n.filter(function(e){return o.includes(e)})),n.filter(function(e){return o.includes(e)}).length==o.length};return(0,r.jsxs)(f.Z,{children:[(0,r.jsx)(D,{ref:v,closedEvent:function(e,t){n({latitude:parseFloat(e),longitude:parseFloat(t)})}}),(0,r.jsx)(P.Z,{content:"지도에서 카페 찾기"}),(0,r.jsx)(h.D5,{center:y,style:{width:"100%",height:"360px"},onDragEnd:function(e){return n({latitude:e.getCenter().getLat(),longitude:e.getCenter().getLng()})},children:u||s&&s.cafes.filter(Z).map(function(e){return(0,r.jsx)(h.le,{position:{lat:e.location.coordinates[1],lng:e.location.coordinates[0]},children:(0,r.jsx)(m,{name:e.name,address:e.address,images:e.images,openHour:e.openHour,openMinute:e.openMinute,closeHour:e.closeHour,closeMinute:e.closeMinute,closeDay:e.closeDay,tags:e.tags,id:e._id})},e._id)})}),(0,r.jsx)(O.Z,{tags:["편안한","가성비있는","고급 원두","조용한"],valueUpdateEvent:a}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"10px"},children:[(0,r.jsx)(x.Z,{content:"원하는 위치로 이동",width:"49.5%",clickEvent:j}),(0,r.jsx)(x.Z,{content:"현재 위치로 이동",width:"49.5%",clickEvent:_})]})]})},M=function(){var e=(0,p.useState)(""),t=e[0],n=e[1],i=(0,g.Z)(g.K.CafeName,t||"카페"),o=i.data;i.isLoading;var a=(0,v.useRouter)();return(0,r.jsxs)(f.Z,{children:[(0,r.jsx)(P.Z,{content:"카페 이름 검색"}),(0,r.jsx)(C.Z,{type:"text",valueUpdateEvent:function(e){return n(e)},placeholder:"카페 이름을 입력하세요"}),o&&o.cafes.map(function(e){return(0,r.jsx)("div",{onClick:function(){a.push("/cafes/find/".concat(e._id))},children:(0,r.jsxs)(f.Z,{style:{width:"100%",cursor:"pointer"},children:[(0,r.jsx)(E.Z,{content:e.name}),(0,r.jsx)(Z.Z,{content:e.address})]})},e._id)})]})},H=function(){return(0,r.jsxs)("div",{className:c().container,children:[(0,r.jsxs)(o(),{children:[(0,r.jsx)("title",{children:"Cafe4Me"}),(0,r.jsx)("meta",{name:"description",content:"Cafe Suggestion Site For Me"}),(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)(s.Z,{}),(0,r.jsxs)("main",{className:c().main,children:[(0,r.jsx)(L,{}),(0,r.jsx)(M,{})]}),(0,r.jsx)(u.Z,{})]})}},849:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(196),i=n(8962);function o(e){var t=e||{},n=t.method,o=t.token,a=t.data,c={headers:{Authorization:o}};switch(n){case i.Z.Post:return function(e){return r.ZP.post(e,a,c).then(function(e){return e.data})};case i.Z.Put:return function(e){return r.ZP.put(e,a,c).then(function(e){return e.data})};case i.Z.Patch:return function(e){return r.ZP.patch(e,a,c).then(function(e){return e.data})};case i.Z.Delete:return function(e){return r.ZP.delete(e,c).then(function(e){return e.data})};default:return function(e){return r.ZP.get(e,c).then(function(e){return e.data})}}}},8962:function(e,t){"use strict";var n,r;(r=n||(n={}))[r.Get=0]="Get",r[r.Post=1]="Post",r[r.Put=2]="Put",r[r.Patch=3]="Patch",r[r.Delete=4]="Delete",t.Z=n},7109:function(e,t,n){"use strict";n.d(t,{K:function(){return r},Z:function(){return c}});var r,i,o=n(8100),a=n(849);function c(e,t,n){var i="/api/cafe/".concat(t);switch(e){case r.CafeId:i="/api/cafe/id/".concat(t);break;case r.UserId:i="/api/cafe/";break;case r.Address:i="/api/cafe/address/".concat(t);break;case r.Location:if("string"==typeof t)break;i="/api/cafe/location/".concat(t.longitude,"/").concat(t.latitude,"?maxDistance=").concat(t.maxDistance);break;case r.CafeName:i="/api/cafe/".concat(t)}var c=(0,o.ZP)(i,n||(0,a.Z)()),s=c.data,u=c.error;return{data:s,isLoading:!u&&!s,error:u}}(i=r||(r={}))[i.CafeName=0]="CafeName",i[i.CafeId=1]="CafeId",i[i.UserId=2]="UserId",i[i.Address=3]="Address",i[i.Location=4]="Location"},6005:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(8100),i=n(849);function o(e,t){var n=(0,r.ZP)("/api/location/".concat(e),t||(0,i.Z)()),o=n.data,a=n.error;return{data:o,isLoading:!a&&!o,error:a}}},1907:function(e){e.exports={box:"box_box__xynT1"}},3997:function(e){e.exports={button:"button_button__pHgD_"}},7059:function(e){e.exports={detail:"detail_detail__F7Ijs"}},453:function(e){e.exports={container:"dialog_container__PgonL",closeButton:"dialog_closeButton__zWIgG"}},7285:function(e){e.exports={input:"input_input__atQmS"}},545:function(e){e.exports={container:"marker-content_container__DytDA",title:"marker-content_title__r0NH2"}},1435:function(e){e.exports={paragraph:"paragraph_paragraph__2wNCZ"}},4979:function(e){e.exports={container:"tag_filter_container__Xk3iu",tag:"tag_filter_tag__QSbbh",selected:"tag_filter_selected__wDEa5"}},7693:function(e){e.exports={title:"title_title__lqk0d"}},8226:function(e){e.exports={container:"footer_container__51Gge"}},8449:function(e){e.exports={spacer:"header_spacer__wDrR7",container:"header_container__vQZGd",container_top:"header_container_top__DMzkS",logo_container:"header_logo_container__CxYcO",logo:"header_logo__2_0kJ",navigation_container:"header_navigation_container__O9NQn",navigation:"header_navigation__OWysb",navigation_item:"header_navigation_item__bSJ97"}},7707:function(e){e.exports={main:"Home_main__s_vus"}}},function(e){e.O(0,[295,100,356,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);