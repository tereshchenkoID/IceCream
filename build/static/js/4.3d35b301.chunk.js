(this.webpackJsonpwork=this.webpackJsonpwork||[]).push([[4],{109:function(e,a,t){"use strict";a.a=function(e){return localStorage[e]?JSON.parse(localStorage[e]):[]}},110:function(e,a,t){"use strict";t(0);var c=t(7),r=t(111),l=t.n(r),n=t(1);a.a=function(e){var a=e.data;return Object(n.jsx)("div",{className:l.a.block,children:a.map((function(e,a){return Object(n.jsxs)("div",{className:l.a.item,children:[e.url?Object(n.jsx)(c.b,{className:l.a.link,to:e.url,children:e.text}):Object(n.jsx)("div",{className:l.a.text,children:e.text}),Object(n.jsx)("div",{className:l.a.divider,children:"/"})]},a)}))})}},111:function(e,a,t){e.exports={block:"Breadcrumbs_block__166sE",item:"Breadcrumbs_item__2hFFv",divider:"Breadcrumbs_divider__1rr1C",link:"Breadcrumbs_link__1p2iU"}},112:function(e,a,t){"use strict";t(0);var c=t(7),r=t(113),l=t.n(r),n=t(1);a.a=({url:e,text:a})=>Object(n.jsx)("div",{className:l.a.block,children:Object(n.jsx)(c.b,{to:e,className:l.a.link,children:a})})},113:function(e,a,t){e.exports={block:"Link_block__2biKq",link:"Link_link__xhUPP"}},114:function(e,a,t){"use strict";a.a=function(e){var a=new Date,t=new Date(a.getFullYear(),a.getMonth(),a.getDate()),c=new Date(e.split("-")[0],e.split("-")[1],e.split("-")[2]),r=new Date(t.getFullYear(),c.getMonth(),c.getDate()),l=t.getFullYear()-c.getFullYear();return t<r&&(l-=1),l}},115:function(e,a,t){"use strict";a.a=function(e){var a=e.split("-");return"".concat(a[2],".").concat(a[1],".").concat(a[0])}},116:function(e,a,t){"use strict";t(0);var c=t(12),r=t.n(c),l=t(109),n=t(117),s=t.n(n),i=t(1),o=function(e,a){return a.find((function(a){return a===e}))};a.a=function(e){var a=e.id,t=e.favArray,c=e.setFavArray;return Object(i.jsx)("button",{className:r()(s.a.block,o(a,t)&&s.a.active),onClick:function(){return function(e,a,t){var c=a.slice();c.find((function(a){return a===e}))?c.splice(c.indexOf(e),1):c.push(e),localStorage.setItem("favourite",JSON.stringify(c)),t(Object(l.a)("favourite"))}(a,t,c)},children:Object(i.jsx)("svg",{height:"512",viewBox:"0 0 24 24",width:"512",xmlns:"http://www.w3.org/2000/svg",children:Object(i.jsx)("path",{d:"m23.363 8.584-7.378-1.127-3.307-7.044c-.247-.526-1.11-.526-1.357 0l-3.306 7.044-7.378 1.127c-.606.093-.848.83-.423 1.265l5.36 5.494-1.267 7.767c-.101.617.558 1.08 1.103.777l6.59-3.642 6.59 3.643c.54.3 1.205-.154 1.103-.777l-1.267-7.767 5.36-5.494c.425-.436.182-1.173-.423-1.266z",fill:"#fff"})})})}},117:function(e,a,t){e.exports={block:"Favourite_block__3nwqc",active:"Favourite_active__2X12m"}},118:function(e,a,t){"use strict";t(0);var c=t(12),r=t.n(c),l=t(10),n=t(109),s=t(119),i=t.n(s),o=t(1),d=function(e,a){return a.find((function(a){return a===e}))};a.a=function(e){var a=e.id,t=e.teamArray,c=e.setTeamArray;return Object(o.jsx)("button",{className:r()(i.a.block,d(a,t)&&i.a.active),onClick:function(){return function(e,a,t){var c=a.slice();c.find((function(a){return a===e}))?c.splice(c.indexOf(e),1):c.push(e),localStorage.setItem("team",JSON.stringify(c)),t(Object(n.a)("team"))}(a,t,c)},children:d(a,t)?Object(l.a)("card_button_remove"):Object(l.a)("card_button_send")})}},119:function(e,a,t){e.exports={block:"Team_block__3pweR",active:"Team_active__ZOZck"}},123:function(e,a,t){"use strict";t(0);var c=t(10),r=t(124),l=t.n(r),n=t(1);a.a=()=>Object(n.jsxs)("div",{className:l.a.block,children:[Object(n.jsx)("div",{className:l.a.icon,children:Object(n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 122.88 122.88",children:Object(n.jsx)("path",{d:"M70.8,32.64,83.46,44.49H70.8V32.64Zm-9.36,90.24a61.16,61.16,0,0,0,43.44-18,61.2,61.2,0,0,0,16.83-31.44A61.44,61.44,0,0,0,27.32,10.33a61.7,61.7,0,0,0-17,17,61.41,61.41,0,0,0,51.11,95.56ZM101.55,93,90.49,82V62.58h0V46.2a2.1,2.1,0,0,0-1.53-2L70.32,26a2.08,2.08,0,0,0-1.62-.78H36.17a3.75,3.75,0,0,0-1.92.52l-4.42-4.41a2.65,2.65,0,0,1,0-3.74,2.72,2.72,0,0,1,.51-.4,53.58,53.58,0,0,1,13.24-6.82,52.57,52.57,0,0,1,8.78-2.25A54.09,54.09,0,0,1,72,8.4a53,53,0,0,1,10.11,3.06,53.66,53.66,0,0,1,9.34,5,54.79,54.79,0,0,1,8.21,6.75,54.06,54.06,0,0,1,11.75,17.55,53,53,0,0,1,3.06,10.11,54.17,54.17,0,0,1,1,10.33v.24a54.5,54.5,0,0,1-3,17.86,53.55,53.55,0,0,1-3,6.94,54.82,54.82,0,0,1-4,6.47,2.64,2.64,0,0,1-3.67.62,2.46,2.46,0,0,1-.34-.29ZM86.28,77.78l-15-15a1.53,1.53,0,0,0,.42-.34,1.81,1.81,0,0,0,.46-1.2A1.85,1.85,0,0,0,71.72,60a1.54,1.54,0,0,0-1.13-.51H68l-6.94-6.94a1.54,1.54,0,0,0,.47-.37,1.82,1.82,0,0,0,0-2.41,1.51,1.51,0,0,0-1.12-.51H57.8L51,42.51h2.83A1.52,1.52,0,0,0,55,42a1.76,1.76,0,0,0,.45-1.2,1.78,1.78,0,0,0-.45-1.2v0a1.51,1.51,0,0,0-1.11-.49H47.57l-9.63-9.64H66.57V46.6a2.13,2.13,0,0,0,2.13,2.13H86.27V62.58h0v15.2ZM24.22,26.14l8.16,8.16V93.86a3.74,3.74,0,0,0,1.11,2.68,3.8,3.8,0,0,0,2.68,1.11H86.72a3.79,3.79,0,0,0,3.77-3.79V92.41l6.26,6.25a2.65,2.65,0,0,1,0,3.74,3.31,3.31,0,0,1-.3.25,53.92,53.92,0,0,1-24.79,11.9,54.81,54.81,0,0,1-10.22,1,54.2,54.2,0,0,1-10.57-1,52.74,52.74,0,0,1-10.11-3.06,53.66,53.66,0,0,1-9.34-5,54,54,0,0,1-15-15,53.66,53.66,0,0,1-5-9.34A53,53,0,0,1,8.4,72a54.2,54.2,0,0,1-1-10.57,54.81,54.81,0,0,1,1-10.22,54,54,0,0,1,12-24.93A2.62,2.62,0,0,1,24.06,26l.16.14ZM36.61,38.53,47.38,49.3H45.75a1.49,1.49,0,0,0-1.12.52,1.82,1.82,0,0,0,0,2.41h0a1.48,1.48,0,0,0,1.11.5h5.07l6.79,6.79H45.75a1.49,1.49,0,0,0-1.12.52,1.82,1.82,0,0,0,0,2.41,1.54,1.54,0,0,0,1.13.51h15.3l6.79,6.79H45.76a1.52,1.52,0,0,0-1.12.52,1.83,1.83,0,0,0-.45,1.2,1.78,1.78,0,0,0,.45,1.2,1.48,1.48,0,0,0,1.12.51H71.27l7,7a1.48,1.48,0,0,0-.77-.23H45.76a1.52,1.52,0,0,0-1.12.52,1.85,1.85,0,0,0-.45,1.2,1.8,1.8,0,0,0,.45,1.21v0a1.54,1.54,0,0,0,1.11.49H77.52a1.51,1.51,0,0,0,1.12-.51,1.8,1.8,0,0,0,.45-1.21,1.75,1.75,0,0,0-.28-1l7.47,7.46v5.23H36.61V38.53Z"})})}),Object(n.jsx)("h3",{className:l.a.label,children:Object(c.a)("alert-empty")})]})},124:function(e,a,t){e.exports={block:"Empty_block__tAEEO",icon:"Empty_icon__oxKBs",label:"Empty_label__1zDQk"}},125:function(e,a,t){"use strict";t(0);var c=t(7),r=t(10),l=t(114),n=t(115),s=t(112),i=t(116),o=t(118),d=t(126),j=t.n(d),b=t(1);a.a=({data:e,lang:a,setting:t,favArray:d,setFavArray:u,teamArray:m,setTeamArray:f})=>Object(b.jsx)("div",{className:j.a.block,children:Object(b.jsxs)("div",{className:j.a.wrapper,children:[Object(b.jsx)("div",{className:j.a.photo,children:Object(b.jsx)("img",{src:e.photo,alt:e.photo,loading:"lazy"})}),Object(b.jsxs)("div",{className:j.a.content,children:[Object(b.jsx)("div",{className:j.a.favourite,children:Object(b.jsx)(i.a,{id:e.id,favArray:d,setFavArray:u})}),Object(b.jsxs)("div",{className:j.a.wrap,children:[Object(b.jsx)("div",{className:j.a.head,children:Object(b.jsxs)("div",{className:j.a.name,children:[e.surname," ",e.name]})}),Object(b.jsxs)("div",{className:j.a.body,children:[Object(b.jsxs)("div",{className:j.a.info,children:[Object(b.jsxs)("div",{className:j.a.cell,children:[Object(b.jsxs)("p",{className:j.a.label,children:[Object(r.a)("card_age"),": "]}),Object(b.jsx)("p",{className:j.a.value,children:Object(l.a)(e.age)})]}),Object(b.jsxs)("div",{className:j.a.cell,children:[Object(b.jsxs)("p",{className:j.a.label,children:[Object(r.a)("card_gender"),": "]}),Object(b.jsx)("p",{className:j.a.value,children:t.gender[e.gender][a]})]}),Object(b.jsxs)("div",{className:j.a.cell,children:[Object(b.jsxs)("p",{className:j.a.label,children:[Object(r.a)("card_access"),": "]}),Object(b.jsx)("p",{className:j.a.value,children:t.access[e.eu_allowed_person][a]})]}),Object(b.jsxs)("div",{className:j.a.cell,children:[Object(b.jsxs)("p",{className:j.a.label,children:[Object(r.a)("card_vaccination"),": "]}),Object(b.jsx)("p",{className:j.a.value,children:t.vaccination[e.vaccinated][a]})]})]}),Object(b.jsx)("div",{className:j.a.info,children:Object(b.jsxs)("div",{className:j.a.cell,children:[Object(b.jsxs)("p",{className:j.a.label,children:[Object(r.a)("card_available"),": "]}),Object(b.jsxs)("p",{className:j.a.value,children:[Object(n.a)(e.available[0])," - ",Object(n.a)(e.available[1])]})]})})]}),Object(b.jsxs)("div",{className:j.a.footer,children:[Object(b.jsx)("div",{className:j.a.button,children:Object(b.jsx)(o.a,{id:e.id,teamArray:m,setTeamArray:f})}),Object(b.jsx)("div",{className:j.a.button,children:Object(b.jsx)(s.a,{url:"/profile/".concat(e.id),text:Object(r.a)("card_button_profile")})})]})]})]}),Object(b.jsxs)("div",{className:j.a.skills,children:[e.skills&&e.skills.slice(0,2).map(((e,c)=>Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{className:j.a.category,children:t.job[e.id][a]}),e.list.map(((c,r)=>c<t.job[e.id].list.length&&Object(b.jsx)("p",{className:j.a.subcategory,children:t.job[e.id].list[c][a]},r)))]},c))),e.skills.length>2&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:"..."}),Object(b.jsx)(c.b,{className:j.a.link,to:"/profile/".concat(e.id),children:Object(r.a)("card_more")})]})]})]})})},126:function(e,a,t){e.exports={block:"ProfileCard_block__1B7Nl",wrapper:"ProfileCard_wrapper__epdBr",skills:"ProfileCard_skills__2nTUQ",content:"ProfileCard_content__2BZIR",photo:"ProfileCard_photo__JPQbi",favourite:"ProfileCard_favourite__3FdlN",wrap:"ProfileCard_wrap__PyrEs",head:"ProfileCard_head__2yBkX",body:"ProfileCard_body__2SaRG",name:"ProfileCard_name__27BHm",info:"ProfileCard_info__3Rjpe",cell:"ProfileCard_cell__2rFjr",label:"ProfileCard_label__seLWf",value:"ProfileCard_value__1m9vu",link:"ProfileCard_link__2tmdN",category:"ProfileCard_category__3Ie_y",subcategory:"ProfileCard_subcategory__1qzLk",footer:"ProfileCard_footer__25wp3",button:"ProfileCard_button__1kKcV"}},131:function(e,a,t){"use strict";function c(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,c=new Array(a);t<a;t++)c[t]=e[t];return c}function r(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var t=[],c=!0,r=!1,l=void 0;try{for(var n,s=e[Symbol.iterator]();!(c=(n=s.next()).done)&&(t.push(n.value),!a||t.length!==a);c=!0);}catch(i){r=!0,l=i}finally{try{c||null==s.return||s.return()}finally{if(r)throw l}}return t}}(e,a)||function(e,a){if(e){if("string"===typeof e)return c(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,a):void 0}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.d(a,"a",(function(){return r}))},183:function(e,a,t){"use strict";t.r(a);var c=t(131),r=t(0),l=t(30),n=t(45),s=t(12),i=t.n(s),o=t(109),d=t(10),j=t(110),b=t(125),u=t(123),m=t(1);a.default=function(){var e=[{url:"/main",text:Object(d.a)("menu_link_1")},{text:Object(d.a)("menu_link_3")}],a=Object(r.useState)(Object(d.b)("lang")),t=Object(c.a)(a,1)[0],s=Object(r.useState)(Object(o.a)("favourite")),f=Object(c.a)(s,2),_=f[0],v=f[1],O=Object(r.useState)(Object(o.a)("team")),h=Object(c.a)(O,2),x=h[0],p=h[1],N=Object(l.c)((function(e){return e.cardReducer})).dataCard,y=Object(l.c)((function(e){return e.settingReducer})).dataSetting;return Object(m.jsxs)("main",{children:[Object(m.jsx)(n.ReactTitle,{title:"Global Workers | Bookmarks"}),Object(m.jsx)("section",{className:i()("section","alt"),children:Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:i()("col","col-12"),children:Object(m.jsx)(j.a,{data:e})})})})})}),Object(m.jsx)("section",{className:"section",children:Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:_.length>0?N.map((function(e,a){return c=_,r=e.id,c.find((function(e){return e===r}))&&Object(m.jsx)("div",{className:i()("col","col-12","col-md-6","col-lg-4"),children:Object(m.jsx)(b.a,{setting:y,data:e,lang:t,favArray:_,setFavArray:v,teamArray:x,setTeamArray:p})},a);var c,r})):Object(m.jsx)(u.a,{})})})})})]})}}}]);
//# sourceMappingURL=4.3d35b301.chunk.js.map