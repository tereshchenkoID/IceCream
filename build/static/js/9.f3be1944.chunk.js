(this.webpackJsonpwork=this.webpackJsonpwork||[]).push([[9],{113:function(e,c,t){"use strict";t(1);var s=t(8),i=t(114),a=t.n(i),r=t(0);c.a=({url:e,text:c})=>Object(r.jsx)("div",{className:a.a.block,children:Object(r.jsx)(s.b,{to:e,className:a.a.link,children:c})})},114:function(e,c,t){e.exports={block:"Link_block__2biKq",link:"Link_link__xhUPP"}},123:function(e,c,t){"use strict";t(1);var s=t(113),i=t(124),a=t.n(i),r=t(0);c.a=function(e){var c=e.text,t=e.url,i=e.link;return Object(r.jsxs)("div",{className:a.a.block,children:[Object(r.jsx)("div",{className:a.a.text,children:c}),t&&i&&Object(r.jsx)("div",{className:a.a.link,children:Object(r.jsx)(s.a,{url:t,text:i})})]})}},124:function(e,c,t){e.exports={block:"Title_block__3xF1w",text:"Title_text__6hjli",link:"Title_link__1GwJq"}},129:function(e,c,t){"use strict";var s=t(1),i=t(13),a=t.n(i),r=t(6),x=t(123),l=t(130),j=t.n(l),n=t(0);c.a=()=>{const[e,c]=Object(s.useState)(!1);return Object(n.jsx)("div",{className:j.a.block,children:Object(n.jsxs)("form",{onSubmit:e=>{e.preventDefault();const t=new FormData(e.target);t.set("email",t.get("email")),t.set("name",t.get("name")),t.set("subject",t.get("subject")),t.set("message",t.get("message")),t.set("type","2"),fetch("https://global-workers.eu/registration/mail.php",{method:"POST",body:t}).then((t=>{c(!0),t&&e.target.reset(),setTimeout((()=>{c(!1)}),5e3)})).catch((e=>console.log("Error",e)))},children:[Object(n.jsx)(x.a,{text:Object(r.b)("title-contact")}),e&&Object(n.jsx)("div",{className:j.a.alert,children:Object(r.a)("contact_alert")}),Object(n.jsxs)("div",{className:a()(j.a.item,j.a.inline),children:[Object(n.jsxs)("div",{className:j.a.wrapper,children:[Object(n.jsx)("div",{className:j.a.icon,children:Object(n.jsx)("svg",{viewBox:"0 0 50 50",children:Object(n.jsx)("path",{d:"M25,1C11.767,1,1,11.767,1,25c0,7.091,3.094,13.472,8,17.869v0.017l0.348,0.3c0.061,0.053,0.128,0.097,0.19,0.149 c0.431,0.364,0.875,0.713,1.331,1.047c0.123,0.09,0.246,0.177,0.371,0.264c0.484,0.34,0.979,0.664,1.487,0.968 c0.085,0.051,0.172,0.099,0.257,0.148c0.557,0.324,1.126,0.629,1.71,0.908c0.006,0.003,0.012,0.005,0.018,0.008 c1.249,0.595,2.559,1.082,3.915,1.456c0.025,0.007,0.05,0.015,0.075,0.021c0.641,0.175,1.293,0.322,1.954,0.443 c0.062,0.011,0.123,0.022,0.185,0.033c0.638,0.112,1.284,0.201,1.939,0.262c0.075,0.007,0.15,0.011,0.224,0.017 C23.663,48.965,24.327,49,25,49s1.337-0.035,1.996-0.09c0.075-0.006,0.15-0.01,0.224-0.017c0.655-0.06,1.301-0.15,1.939-0.262 c0.062-0.011,0.123-0.022,0.185-0.033c0.661-0.121,1.313-0.268,1.954-0.443c0.025-0.007,0.05-0.014,0.075-0.021 c1.356-0.374,2.666-0.861,3.915-1.456c0.006-0.003,0.012-0.005,0.018-0.008c0.584-0.279,1.153-0.585,1.71-0.908 c0.086-0.05,0.172-0.097,0.257-0.148c0.509-0.304,1.004-0.629,1.487-0.968c0.124-0.087,0.248-0.174,0.371-0.264 c0.456-0.334,0.9-0.683,1.331-1.047c0.062-0.052,0.129-0.096,0.19-0.149l0.348-0.3v-0.017c4.906-4.398,8-10.778,8-17.869 C49,11.767,38.233,1,25,1z M25,25c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S29.411,25,25,25z M28,27c6.065,0,11,4.935,11,11 v3.958c-0.042,0.035-0.086,0.067-0.128,0.102c-0.395,0.321-0.8,0.626-1.214,0.918c-0.092,0.065-0.182,0.132-0.274,0.195 c-0.447,0.305-0.906,0.591-1.373,0.862c-0.085,0.05-0.171,0.099-0.257,0.148c-0.49,0.275-0.989,0.533-1.498,0.769 c-0.053,0.025-0.107,0.049-0.161,0.073c-1.661,0.755-3.411,1.302-5.212,1.626c-0.057,0.01-0.114,0.021-0.171,0.031 c-0.567,0.097-1.139,0.172-1.715,0.225c-0.079,0.007-0.159,0.012-0.239,0.018C26.175,46.97,25.589,47,25,47 s-1.175-0.03-1.758-0.077c-0.079-0.006-0.159-0.011-0.239-0.018c-0.576-0.053-1.148-0.127-1.715-0.225 c-0.057-0.01-0.114-0.02-0.171-0.031c-1.801-0.324-3.551-0.871-5.212-1.626c-0.054-0.025-0.108-0.048-0.161-0.073 c-0.509-0.236-1.008-0.494-1.498-0.769c-0.086-0.049-0.171-0.098-0.257-0.148c-0.467-0.27-0.926-0.557-1.373-0.862 c-0.093-0.063-0.183-0.13-0.274-0.195c-0.414-0.292-0.819-0.596-1.214-0.918c-0.042-0.034-0.086-0.067-0.128-0.102V38 c0-6.065,4.935-11,11-11H28z M41,40.076V38c0-6.271-4.464-11.519-10.38-12.735C33.261,23.464,35,20.431,35,17 c0-5.514-4.486-10-10-10s-10,4.486-10,10c0,3.431,1.739,6.464,4.38,8.265C13.464,26.481,9,31.729,9,38v2.076 C5.284,36.135,3,30.831,3,25C3,12.869,12.869,3,25,3s22,9.869,22,22C47,30.831,44.716,36.135,41,40.076z"})})}),Object(n.jsx)("input",{type:"text",className:j.a.field,placeholder:Object(r.b)("contact_name"),name:"name",required:!0})]}),Object(n.jsxs)("div",{className:j.a.wrapper,children:[Object(n.jsx)("div",{className:j.a.icon,children:Object(n.jsx)("svg",{viewBox:"0 0 32 32",children:Object(n.jsx)("path",{stroke:"none",strokeWidth:"1",fillRule:"evenodd",fill:"#000",d:"M5.31500722,9.27391933 C5.12106043,9.45739405 5,9.71770487 5,10.0068455 L5,21.9931545 C5,22.2828882 5.11915965,22.5440384 5.31310687,22.7277332 L5.31310687,22.7277332 L13.05,16 L5.31500722,9.27391933 L5.31500722,9.27391933 L5.31500722,9.27391933 Z M27.6868931,9.27226685 C27.8808404,9.45596162 28,9.71711185 28,10.0068455 L28,21.9931545 C28,22.2822951 27.8789396,22.542606 27.6849928,22.7260807 L19.95,16 L27.6868931,9.27226685 L27.6868931,9.27226685 Z M19.2018297,16.6505829 L26.5,23 L6.5,23 L13.7981703,16.6505829 L16.5,19 L19.2018297,16.6505829 L19.2018297,16.6505829 Z M6.00359486,8 C4.89703997,8 4,8.89451376 4,9.99406028 L4,22.0059397 C4,23.1072288 4.88976324,24 6.00359486,24 L26.9964051,24 C28.10296,24 29,23.1054862 29,22.0059397 L29,9.99406028 C29,8.8927712 28.1102368,8 26.9964051,8 L6.00359486,8 L6.00359486,8 Z M16.5,17.7000122 L26.5,9 L6.5,9 L16.5,17.7000122 L16.5,17.7000122 Z"})})}),Object(n.jsx)("input",{type:"email",className:j.a.field,placeholder:Object(r.b)("contact_email"),name:"email",required:!0})]})]}),Object(n.jsx)("div",{className:j.a.item,children:Object(n.jsxs)("div",{className:j.a.wrapper,children:[Object(n.jsx)("div",{className:j.a.icon,children:Object(n.jsx)("svg",{viewBox:"0 0 32 32",children:Object(n.jsx)("path",{stroke:"none",strokeWidth:"1",fill:"#000",fillRule:"evenodd",d:"M19.5,3 L9.00276013,3 C7.89666625,3 7,3.89833832 7,5.00732994 L7,27.9926701 C7,29.1012878 7.89092539,30 8.99742191,30 L24.0025781,30 C25.1057238,30 26,29.1017876 26,28.0092049 L26,10.5 L26,10 L20,3 L19.5,3 L19.5,3 L19.5,3 Z M19,4 L8.9955775,4 C8.44573523,4 8,4.45526288 8,4.99545703 L8,28.004543 C8,28.5543187 8.45470893,29 8.9999602,29 L24.0000398,29 C24.5523026,29 25,28.5550537 25,28.0066023 L25,11 L20.9979131,11 C19.8944962,11 19,10.1134452 19,8.99408095 L19,4 L19,4 Z M20,4.5 L20,8.99121523 C20,9.54835167 20.4506511,10 20.9967388,10 L24.6999512,10 L20,4.5 L20,4.5 Z M10,10 L10,11 L17,11 L17,10 L10,10 L10,10 Z M10,7 L10,8 L17,8 L17,7 L10,7 L10,7 Z M10,13 L10,14 L23,14 L23,13 L10,13 L10,13 Z M10,16 L10,17 L23,17 L23,16 L10,16 L10,16 Z M10,19 L10,20 L23,20 L23,19 L10,19 L10,19 Z M10,22 L10,23 L23,23 L23,22 L10,22 L10,22 Z M10,25 L10,26 L23,26 L23,25 L10,25 L10,25 Z"})})}),Object(n.jsx)("input",{type:"text",className:j.a.field,placeholder:Object(r.b)("contact_subject"),name:"subject",required:!0})]})}),Object(n.jsx)("div",{className:j.a.item,children:Object(n.jsx)("textarea",{className:j.a.textarea,placeholder:Object(r.b)("contact_message"),name:"message",required:!0})}),Object(n.jsx)("div",{className:j.a.item,children:Object(n.jsx)("button",{type:"submit",className:j.a.button,children:Object(r.a)("contact_button")})})]})})}},130:function(e,c,t){e.exports={block:"Form_block__26syK",item:"Form_item__3w6tM",inline:"Form_inline__3lw-p",wrapper:"Form_wrapper__1Iys0",textarea:"Form_textarea__2ZAND",field:"Form_field__ZAspy",icon:"Form_icon__3S8qS",button:"Form_button__kaPR7",alert:"Form_alert__2U9IK"}},134:function(e,c,t){e.exports={block:"CaregoryCard_block__k-22W",img:"CaregoryCard_img__KNGXB",nickname:"CaregoryCard_nickname__1O9ws"}},151:function(e,c,t){e.exports={block:"Header_block__kguDn",picture:"Header_picture__3tzhI",content:"Header_content__1OJnn",title:"Header_title__26k3W",subtitle:"Header_subtitle__JnjEe"}},152:function(e,c,t){e.exports={category:"Main_category__12hlX"}},191:function(e,c,t){"use strict";t.r(c);var s=t(1),i=t(30),a=t(13),r=t.n(a),x=t(6),l=t(8),j=t(134),n=t.n(j),b=t(0);var d=({data:e,lang:c})=>Object(b.jsxs)(l.b,{className:n.a.block,to:"/search/".concat(e.id),title:e[c],children:[Object(b.jsx)("img",{src:"/img/categories/576/".concat(e.id,".webp"),alt:e[c],className:n.a.img,loading:"lazy"}),Object(b.jsx)("span",{className:n.a.nickname,children:e[c]})]}),m=t(123),o=t(135),p=t.n(o),O=t(151),h=t.n(O);var v=()=>Object(b.jsx)("header",{className:h.a.block,children:Object(b.jsxs)(p.a,{dots:!0,arrows:!1,lazyLoad:!0,infinite:!0,autoplay:!0,speed:500,autoplaySpeed:5e3,fade:!0,children:[Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:h.a.picture,children:Object(b.jsxs)("picture",{children:[Object(b.jsx)("source",{media:"(max-width: 576px)",srcSet:"/img/service/576/1x/1.webp 1x, /img/service/576/2x/1@2x.webp 2x"}),Object(b.jsx)("source",{media:"(max-width: 768px)",srcSet:"/img/service/768/1x/1.webp 1x, /img/service/768/2x/1@2x.webp 2x"}),Object(b.jsx)("source",{media:"(max-width: 992px)",srcSet:"/img/service/992/1x/1.webp 1x, /img/service/992/2x/1@2x.webp 2x"}),Object(b.jsx)("source",{media:"(max-width: 1200px)",srcSet:"/img/service/1200/1x/1.webp 1x, /img/service/1200/2x/1@2x.webp 2x"}),Object(b.jsx)("source",{media:"(max-width: 1600px)",srcSet:"/img/service/1600/1x/1.webp 1x, /img/service/1600/2x/1@2x.webp 2x"}),Object(b.jsx)("source",{media:"(min-width: 2000px)",srcSet:"/img/service/2048/1x/1.webp 1x, /img/service/2047/2x/1@2x.webp 2x"}),Object(b.jsx)("img",{src:"/img/service/1600/1x/1.webp",alt:"Slide 1",loading:"lazy"})]})}),Object(b.jsxs)("div",{className:h.a.content,children:[Object(b.jsx)("h1",{className:h.a.title,children:Object(x.a)("header_title_1")}),Object(b.jsx)("h4",{className:h.a.subtitle,children:Object(x.a)("header_subtitle_1")})]})]}),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:h.a.picture,children:Object(b.jsxs)("picture",{children:[Object(b.jsx)("source",{media:"(max-width: 576px)",srcSet:"/img/service/576/1x/2.webp 1x, /img/service/576/2x/2@2x.webp 2x"}),Object(b.jsx)("source",{media:"(max-width: 768px)",srcSet:"/img/service/768/1x/2.webp 1x, /img/service/768/2x/2@2x.webp 2x"}),Object(b.jsx)("source",{media:"(max-width: 992px)",srcSet:"/img/service/992/1x/2.webp 1x, /img/service/992/2x/2@2x.webp 2x"}),Object(b.jsx)("source",{media:"(max-width: 1200px)",srcSet:"/img/service/1200/1x/2.webp 1x, /img/service/1200/2x/2@2x.webp 2x"}),Object(b.jsx)("source",{media:"(max-width: 1600px)",srcSet:"/img/service/1600/1x/2.webp 1x, /img/service/1600/2x/2@2x.webp 2x"}),Object(b.jsx)("source",{media:"(min-width: 2000px)",srcSet:"/img/service/2048/1x/2.webp 1x, /img/service/2047/2x/2@2x.webp 2x"}),Object(b.jsx)("img",{src:"/img/service/1600/1x/2.webp",alt:"Slide 2",loading:"lazy"})]})}),Object(b.jsxs)("div",{className:h.a.content,children:[Object(b.jsx)("h2",{className:h.a.title,children:Object(x.a)("header_title_2")}),Object(b.jsx)("h4",{className:h.a.subtitle,children:Object(x.a)("header_subtitle_2")})]})]}),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:h.a.picture,children:Object(b.jsxs)("picture",{children:[Object(b.jsx)("source",{media:"(max-width: 576px)",srcSet:"/img/service/576/1x/3.webp 1x, /img/service/576/2x/3@2x.webp 2x"}),Object(b.jsx)("source",{media:"(max-width: 768px)",srcSet:"/img/service/768/1x/3.webp 1x, /img/service/768/2x/3@2x.webp 2x"}),Object(b.jsx)("source",{media:"(max-width: 992px)",srcSet:"/img/service/992/1x/3.webp 1x, /img/service/992/2x/3@2x.webp 2x"}),Object(b.jsx)("source",{media:"(max-width: 1200px)",srcSet:"/img/service/1200/1x/3.webp 1x, /img/service/1200/2x/2@2x.webp 2x"}),Object(b.jsx)("source",{media:"(max-width: 1600px)",srcSet:"/img/service/1600/1x/3.webp 1x, /img/service/1600/2x/2@2x.webp 2x"}),Object(b.jsx)("source",{media:"(min-width: 2000px)",srcSet:"/img/service/2048/1x/3.webp 1x, /img/service/2047/2x/2@2x.webp 2x"}),Object(b.jsx)("img",{src:"/img/service/1600/1x/3.webp",alt:"Slide 3",loading:"lazy"})]})}),Object(b.jsxs)("div",{className:h.a.content,children:[Object(b.jsx)("h2",{className:h.a.title,children:Object(x.a)("header_title_3")}),Object(b.jsx)("h4",{className:h.a.subtitle,children:Object(x.a)("header_subtitle_3")})]})]})]})}),g=t(129),u=t(152),_=t.n(u);c.default=()=>{let{dataSetting:e}=Object(i.c)((e=>e.settingReducer));const[c]=Object(s.useState)(Object(x.b)("lang"));return Object(b.jsx)(b.Fragment,{children:e&&e.job&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(v,{}),Object(b.jsxs)("main",{children:[Object(b.jsx)("section",{className:"section",children:Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:r()("col","col-12"),children:Object(b.jsx)(m.a,{url:"/search/0",text:Object(x.a)("main_title_categories"),link:Object(x.a)("title-view-all")})}),e.job.slice(1,e.job.length).map(((e,t)=>Object(b.jsx)("div",{className:r()("col","col-12","col-sm-6","col-md-4","col-lg-3","col-padding-vertical"),children:Object(b.jsx)("div",{className:_.a.category,children:Object(b.jsx)(d,{data:e,lang:c})})},t)))]})})})}),Object(b.jsx)("section",{className:r()("section","dark"),children:Object(b.jsx)("div",{className:"container-fluid",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(g.a,{})})})})]})]})})}}}]);
//# sourceMappingURL=9.f3be1944.chunk.js.map