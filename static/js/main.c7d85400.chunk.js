(this["webpackJsonpmy-github"]=this["webpackJsonpmy-github"]||[]).push([[0],{20:function(e,t,r){},21:function(e,t,r){"use strict";r.r(t),r.d(t,"username",(function(){return z}));var n=r(2),o=r.n(n),a=r(4),s=r(3),c=r(1),l=r.n(c),i=r(9),u=r.n(i),j=r(10),f=r(7),b=r(0),g=function(e){var t=e.user,r=e.setLangs,n=e.setRepos,s=e.setFollowers,c=e.setFollowing;return l.a.useEffect((function(){function e(){return(e=Object(a.a)(o.a.mark((function e(){var r,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=function(){var e=w(r.data);s({data:e,errors:r.errors}),O(t.followers,"followers")},n=function(){null===r?(r=h(t.followers,"followers"),setTimeout(n,10)):a()},r=h(t.followers,"followers"),n();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(){return(l=Object(a.a)(o.a.mark((function e(){var r,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=function(){var e=w(r.data);c({data:e,errors:r.errors}),O(t.following,"following")},n=function(){null===r?(r=h(t.following,"following"),setTimeout(n,10)):a()},r=h(t.following,"following"),n();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function i(){return(i=Object(a.a)(o.a.mark((function e(){var a,s,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=function(){var e=x(a.data);r(e),n({data:a.data,errors:a.errors}),O(t.public_repos,"repos")},s=function(){null===a?(a=h(t.public_repos,"repos"),setTimeout(s,10)):c()},a=h(t.public_repos,"repos"),s();case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}for(var u=1;u<=Math.ceil(t.followers/100);u++)d("followers",u);for(var j=1;j<=Math.ceil(t.following/100);j++)d("following",j);for(var f=1;f<=Math.ceil(t.public_repos/100);f++)d("repos",f);!function(){e.apply(this,arguments)}(),function(){l.apply(this,arguments)}(),function(){i.apply(this,arguments)}()}),[]),Object(b.jsx)(b.Fragment,{})};function d(e,t){return p.apply(this,arguments)}function p(){return(p=Object(a.a)(o.a.mark((function e(t,r){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.github.com/users/".concat(z,"/").concat(t,"?q=&per_page=100&page=").concat(r));case 3:if(200!==(n=e.sent).status){e.next=11;break}return e.next=7,n.json();case 7:a=e.sent,sessionStorage.setItem("".concat(z,"_").concat(t,"_page_").concat(r),JSON.stringify(a)),e.next=12;break;case 11:throw n.status;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),sessionStorage.setItem("".concat(z,"_").concat(t,"_error_").concat(r),JSON.stringify(e.t0));case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function h(e,t){for(var r=0,n=[],o=1;o<=Math.ceil(e/100);o++){var a=sessionStorage.getItem("".concat(z,"_").concat(t,"_page_").concat(o));if(a){var s=JSON.parse(a);n=n.concat(Object(f.a)(s)),r++}}for(var c=[],l=1;l<=Math.ceil(e/100);l++){var i=JSON.parse(sessionStorage.getItem("".concat(z,"_").concat(t,"_error_").concat(l)));i&&(c=c.concat(i),r++)}return 0===c.length&&(c=null),r===Math.ceil(e/100)?{data:n,errors:c}:null}function O(e,t){for(var r=1;r<=Math.ceil(e/100);r++)sessionStorage.removeItem("".concat(z,"_").concat(t,"_page_").concat(r)),sessionStorage.removeItem("".concat(z,"_").concat(t,"_error_").concat(r))}function w(e){var t=[],r=[];e.forEach((function(e,n){t[n]=e.login.toLowerCase(),r[n]={login:e.login,avatar_url:e.avatar_url,url:e.html_url}})),t.sort();for(var n=[],o=0;o<t.length;o++)for(var a=0;a<r.length;a++)if(t[o]===r[a].login.toLowerCase()){n[o]=r[a];break}return n}function x(e){var t,r=[],n=Object(j.a)(e);try{for(n.s();!(t=n.n()).done;){var o=t.value;r.includes(o.language)||null==o.language||r.push(o.language)}}catch(a){n.e(a)}finally{n.f()}return r.sort()}var m=function(e){var t=e.error;return Object(b.jsxs)("div",{className:"userError",children:[Object(b.jsxs)("h1",{children:["ERROR ",t]}),Object(b.jsxs)("p",{children:["But do not worry, you can still find the information you are looking for",Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"https://github.com/".concat(z),target:"_blank",rel:"noreferrer",children:"HERE"})]})]})},v=function(e){var t=e.errors,r=e.details,n=Object(f.a)(new Set(t));return Object(b.jsxs)("div",{className:"detailsError",children:[Object(b.jsxs)("p",{children:["Some data is missing due to the following error(s): ",n.join(", "),"."]}),Object(b.jsxs)("p",{children:["You may find the missing information",Object(b.jsx)("br",{}),Object(b.jsx)("a",{href:"https://github.com/".concat(z,"?tab=").concat(r),target:"_blank",rel:"noreferrer",children:"HERE"})]})]})},_=function(){for(var e=[],t=0;t<12;t++)e.push(Object(b.jsx)("div",{},"lds_".concat(t)));return Object(b.jsx)("div",{className:"lds-spinner",children:e})},y=function(e){var t=e.details,r=l.a.useState(!1),n=Object(s.a)(r,2),o=n[0],a=n[1],c=l.a.useState(!1),i=Object(s.a)(c,2),u=i[0],j=i[1],f=""===t.repos||""===t.followers||""===t.following;return l.a.useEffect((function(){window.addEventListener("scroll",(function(){window.pageYOffset>20?a(!0):a(!1),window.pageYOffset<document.body.scrollHeight-window.innerHeight-20?j(!0):j(!1)}))}),[]),Object(b.jsxs)("div",{className:"scroll",children:[o&&f&&Object(b.jsx)(N,{}),u&&f&&Object(b.jsx)(k,{})]})},N=function(){return Object(b.jsxs)("svg",{onClick:function(){return window.scrollTo(0,0)},className:"nav--btn goToTop",role:"img","aria-label":"Go To Top",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 39.92 39.93",children:[Object(b.jsx)("path",{className:"back",d:"M0 21.13v-2.34c0-.28.07-.56.1-.84A20.05 20.05 0 0 1 16.53.33l2.26-.31h2.34l.38.07 2.62.38c9.948 2.143 16.702 11.414 15.69 21.54a19.21 19.21 0 0 1-4.94 11.21 19.57 19.57 0 0 1-14.09 6.7 19 19 0 0 1-11-2.8 19.65 19.65 0 0 1-9.47-13.7C.19 22.65.1 21.89 0 21.13zm20-4.69c.13.15.22.26.32.36l9.51 9.51.4.37a1.45 1.45 0 0 0 2-.24 1.42 1.42 0 0 0 .29-.62 1.58 1.58 0 0 0-.56-1.49q-5.39-5.37-10.76-10.75a1.52 1.52 0 0 0-2.51 0q-5.36 5.34-10.7 10.7a3.92 3.92 0 0 0-.34.37 1.45 1.45 0 0 0 .23 2 1.42 1.42 0 0 0 .44.23 1.54 1.54 0 0 0 1.68-.51l9.62-9.62z"}),Object(b.jsx)("path",{className:"front",d:"M19.99 16.44l-.35.34-9.62 9.62a1.54 1.54 0 0 1-1.68.51 1.44 1.44 0 0 1-.91-1.82 1.26 1.26 0 0 1 .24-.44 3.92 3.92 0 0 1 .34-.37l10.7-10.7a1.53 1.53 0 0 1 2.51 0l10.76 10.75a1.56 1.56 0 0 1 .56 1.49 1.44 1.44 0 0 1-1.7 1.14 1.4 1.4 0 0 1-.62-.28l-.4-.37q-4.74-4.75-9.51-9.51c-.12-.1-.19-.21-.32-.36z"})]})},k=function(){return Object(b.jsxs)("svg",{onClick:function(){return window.scrollTo(0,document.body.scrollHeight)},className:"nav--btn goToBottom",role:"img","aria-label":"Go To Bottom",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 39.92 39.93",children:[Object(b.jsx)("path",{className:"back",d:"M39.92 18.8v2.34c0 .28-.07.56-.1.84a20.05 20.05 0 0 1-16.43 17.64l-2.26.31h-2.34l-.38-.07-2.62-.38C5.846 37.333-.902 28.063.11 17.94A19.21 19.21 0 0 1 5.05 6.73 19.57 19.57 0 0 1 19.14.03a19 19 0 0 1 11 2.8 19.65 19.65 0 0 1 9.47 13.7c.14.73.21 1.51.31 2.27zm-20 4.69c-.13-.15-.22-.26-.32-.36l-9.49-9.51-.4-.37a1.45 1.45 0 0 0-2 .24 1.42 1.42 0 0 0-.29.62 1.58 1.58 0 0 0 .56 1.49q5.39 5.37 10.76 10.75a1.52 1.52 0 0 0 2.51 0q5.35-5.34 10.7-10.7a3.92 3.92 0 0 0 .34-.37 1.45 1.45 0 0 0-.23-2 1.42 1.42 0 0 0-.44-.23 1.54 1.54 0 0 0-1.68.51q-4.8 4.81-9.62 9.62z"}),Object(b.jsx)("path",{className:"front",d:"M19.93 23.49l.35-.34 9.62-9.62a1.54 1.54 0 0 1 1.68-.51 1.44 1.44 0 0 1 .91 1.82 1.26 1.26 0 0 1-.24.44 3.92 3.92 0 0 1-.34.37q-5.34 5.36-10.7 10.7a1.53 1.53 0 0 1-2.51 0L7.94 15.6a1.56 1.56 0 0 1-.56-1.49 1.44 1.44 0 0 1 1.7-1.14 1.4 1.4 0 0 1 .62.28l.4.37 9.51 9.51c.1.13.19.21.32.36z"})]})},S=function(e){var t=e.details,r=e.repos,n=e.followers,o=e.following;return Object(b.jsxs)("div",{className:"details",children:[Object(b.jsx)(E,{details:t,repos:r}),Object(b.jsx)(L,{details:t,followers:n}),Object(b.jsx)(M,{details:t,following:o})]})},E=function(e){var t=e.details,r=e.repos;return r?Object(b.jsxs)("div",{className:"repos--block",style:{display:t.repos},children:[Object(b.jsx)("h2",{children:"REPOS"}),Object(b.jsx)("ul",{className:"repos--list",children:r.data.map((function(e,t){return Object(b.jsxs)("li",{children:[Object(b.jsxs)("div",{className:"repo_icons",children:[e.language?Object(b.jsx)("img",{src:"img/".concat(e.language.toLowerCase(),".svg"),alt:"".concat(e.language)}):Object(b.jsx)("span",{}),e.has_pages?Object(b.jsx)("a",{href:"https://".concat(z,".github.io/").concat(e.name,"/index.html"),target:"_blank",rel:"noreferrer",children:Object(b.jsx)("img",{src:"img/world-wide-web.svg",alt:"webpage"})}):Object(b.jsx)("span",{}),e.archived?Object(b.jsx)("img",{src:"img/archive.svg",alt:"archive"}):Object(b.jsx)("span",{})]}),Object(b.jsx)("a",{href:e.html_url,target:"_blank",rel:"noreferrer",children:e.name})]},"repos_".concat(t))}))}),r.errors&&Object(b.jsx)(v,{errors:r.errors,details:"repositories"})]}):""===t.repos&&Object(b.jsx)(_,{})},L=function(e){var t=e.details,r=e.followers;return r?Object(b.jsxs)("div",{className:"followers--block",style:{display:t.followers},children:[Object(b.jsx)("h2",{children:"FOLLOWERS"}),Object(b.jsx)("ul",{className:"followers--list",children:r.data.map((function(e,t){return Object(b.jsxs)("li",{children:[Object(b.jsx)("img",{src:e.avatar_url,alt:"Avatar of ".concat(e.login)}),Object(b.jsx)("a",{href:e.url,children:e.login})]},"followers_".concat(t))}))}),r.errors&&Object(b.jsx)(v,{errors:r.errors,details:"followers"})]}):""===t.followers&&Object(b.jsx)(_,{})},M=function(e){var t=e.details,r=e.following;return r?Object(b.jsxs)("div",{className:"following--block",style:{display:t.following},children:[Object(b.jsx)("h2",{children:"FOLLOWING"}),Object(b.jsx)("ul",{className:"following--list",children:r.data.map((function(e,t){return Object(b.jsxs)("li",{children:[Object(b.jsx)("img",{src:e.avatar_url,alt:"Avatar of ".concat(e.login)}),Object(b.jsx)("a",{href:e.url,children:e.login})]},"following_".concat(t))}))}),r.errors&&Object(b.jsx)(v,{errors:r.errors,details:"following"})]}):""===t.following&&Object(b.jsx)(_,{})},R=r(12),T=r(11),F=r.n(T),C=function(e){var t=e.user,r=e.langs,n=e.details,o=e.setDetails;return Object(b.jsxs)("div",{className:"summary",children:[Object(b.jsx)("img",{className:"avatar",src:t.avatar_url,alt:"Avatar of ".concat(t.login)}),Object(b.jsx)("h1",{children:t.login}),Object(b.jsx)("p",{children:t.bio}),Object(b.jsx)(I,{langs:r}),Object(b.jsx)(q,{user:t,details:n,setDetails:o})]})},I=function(e){var t=e.langs;return t&&Object(b.jsx)("div",{className:"languages",children:t.map((function(e,t){return Object(b.jsx)("img",{src:"img/".concat(e.toLowerCase(),".svg"),alt:e},"lang_".concat(t))}))})},q=function(e){var t=e.user,r=e.details,n=e.setDetails,o=Object(R.a)({},r),a={repos:function(){o.repos="none"===o.repos?"":"none",o.followers="none",o.following="none",n(o)},followers:function(){o.repos="none",o.followers="none"===o.followers?"":"none",o.following="none",n(o)},following:function(){o.repos="none",o.followers="none",o.following="none"===o.following?"":"none",n(o)}};return Object(b.jsxs)("div",{className:"features",children:[Object(b.jsx)(B,{button:"REPOS",number:t.public_repos,toggle:a.repos}),Object(b.jsx)(B,{button:"FOLLOWERS",number:t.followers,toggle:a.followers}),Object(b.jsx)(B,{button:"FOLLOWING",number:t.following,toggle:a.following})]})},B=function(e){var t=e.button,r=e.number,n=e.toggle;return Object(b.jsxs)("div",{className:"feature",children:[Object(b.jsx)(F.a,{delay:1,end:r,duration:3}),Object(b.jsx)("button",{onClick:n,children:t})]})},z=(r(20),"LaetitiaBodin"),J=function(){var e=l.a.useState(null),t=Object(s.a)(e,2),r=t[0],n=t[1],c=l.a.useState(null),i=Object(s.a)(c,2),u=i[0],j=i[1],f=l.a.useState({repos:"none",followers:"none",following:"none"}),d=Object(s.a)(f,2),p=d[0],h=d[1],O=l.a.useState(null),w=Object(s.a)(O,2),x=w[0],v=w[1],_=l.a.useState(null),N=Object(s.a)(_,2),k=N[0],E=N[1],L=l.a.useState(null),M=Object(s.a)(L,2),R=M[0],T=M[1];return l.a.useEffect((function(){function e(){return(e=Object(a.a)(o.a.mark((function e(){var t,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={data:null,error:null},e.prev=1,e.next=4,fetch("https://api.github.com/users/".concat(z));case 4:if(200!==(r=e.sent).status){e.next=11;break}return e.next=8,r.json();case 8:t.data=e.sent,e.next=12;break;case 11:throw r.status;case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),t.error=e.t0;case 17:return e.prev=17,n(t),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[1,14,17,20]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r?r.error?Object(b.jsx)(m,{error:r.error}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g,{user:r.data,setLangs:j,setRepos:v,setFollowers:E,setFollowing:T}),Object(b.jsx)(C,{user:r.data,langs:u,details:p,setDetails:h}),Object(b.jsx)(S,{details:p,repos:x,followers:k,following:R}),Object(b.jsx)(y,{details:p})]}):null};u.a.render(Object(b.jsx)(J,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.c7d85400.chunk.js.map