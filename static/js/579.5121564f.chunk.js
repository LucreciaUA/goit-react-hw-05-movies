"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[579],{779:function(e,t,n){n.d(t,{y:function(){return h}});var r=n(87),a="list_poster__MVOV7",s="list_filmCard__GhXcV",c=(n(791),"nothing_wrap__Kcp36"),o="nothing_info__bNgMG",i="nothing_emoji__CMHQv",u=n(184),l=function(){return(0,u.jsxs)("div",{className:c,children:[(0,u.jsx)("p",{className:o,children:"We are sorry. There are no films for your request."}),(0,u.jsx)("p",{className:i,children:"(\u30b7. .)\u30b7"})]})},h=function(e){var t=e.movies;return(0,u.jsx)(u.Fragment,{children:0===t.length?(0,u.jsx)(l,{}):(0,u.jsx)("ul",{children:t.map((function(e){return(0,u.jsx)("li",{children:(0,u.jsx)(r.rU,{to:"/movies/".concat(e.id),children:(0,u.jsxs)("div",{className:s,children:[(0,u.jsx)("img",{className:a,src:"".concat("https://image.tmdb.org/t/p/w500").concat(e.poster_path),alt:e.title}),(0,u.jsx)("h2",{children:e.title})]})})},e.id)}))})})}},579:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var r=n(861),a=n(439),s=n(757),c=n.n(s),o=n(381),i=function(){var e=(0,r.Z)(s.mark((function e(t,n){var r;return s.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.h.get("search/movie?query=".concat(t,"&api_key=").concat("579f9cde8301da77a7eae5840c1b4661","&language=en-US&page=").concat(n));case 2:return r=e.sent,console.log(r.data),e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),u=n(779),l=n(791),h="pagination_pagination__YKHjL",p="pagination_numButton__uUr2F",f=n(184),m=function(e){var t=e.currentPage,n=e.totalPages,r=e.onPageChange;return(0,f.jsx)("div",{className:h,children:Array.from({length:n},(function(e,n){return(0,f.jsx)("button",{className:p,disabled:n+1===t,onClick:function(){return r(n+1)},children:n+1},n)}))})},_={form:"search_form__Ogu+b",input:"search_input__BWdrH",button:"search_button__u4UqJ"},d=function(e){var t=e.onSubmit,n=(0,l.useState)(""),r=(0,a.Z)(n,2),s=r[0],c=r[1];return(0,f.jsxs)("form",{className:_.form,onSubmit:function(e){e.preventDefault(),t(s)},children:[(0,f.jsx)("input",{className:_.input,type:"text",autoComplete:"off",name:"searchQuery",autoFocus:!0,placeholder:"Search films",value:s,onChange:function(e){c(e.target.value.toLowerCase()),console.log(s)}}),(0,f.jsx)("button",{type:"submit",className:_.button,children:(0,f.jsx)("span",{className:_.search,children:"Search"})})]})},g=n(79),x="starting-page_wrap__trBxc",j="starting-page_info__3CjZ8",v="starting-page_emoji__wckPT",b=function(){return(0,f.jsxs)("div",{className:x,children:[(0,f.jsx)("p",{className:j,children:"Search films"}),(0,f.jsx)("p",{className:v})]})},w=function(){var e=(0,l.useState)([]),t=(0,a.Z)(e,2),n=t[0],s=t[1],o=(0,l.useState)(""),h=(0,a.Z)(o,2),p=h[0],_=h[1],x=(0,l.useState)(1),j=(0,a.Z)(x,2),v=j[0],w=j[1],y=(0,l.useState)(0),N=(0,a.Z)(y,2),S=N[0],k=N[1],C=(0,l.useState)(!1),Z=(0,a.Z)(C,2),P=Z[0],F=Z[1];(0,l.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!p){e.next=15;break}return e.prev=1,F(!0),e.next=5,i(p,v);case 5:t=e.sent,console.log(t.results),s(t.results),k(t.total_pages),F(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();e()}),[p,v]);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(d,{onSubmit:function(e){_(e),s([]),w(1),console.log(p)}}),""===p?(0,f.jsx)(b,{}):(0,f.jsxs)(f.Fragment,{children:[" ",P?(0,f.jsx)(g.a,{}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.y,{movies:n}),S>1&&(0,f.jsx)(m,{currentPage:v,totalPages:S,onPageChange:function(e){w(e)}})]})]})]})}},79:function(e,t,n){n.d(t,{a:function(){return c}});var r=n(154),a="loader_wrapper__LrcHi",s=n(184),c=function(){return(0,s.jsx)("div",{className:a,children:(0,s.jsx)(r.VL,{visible:!0,height:"80",width:"80",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["blue","blue","blue","yellow","yellow","yellow"]})})}},381:function(e,t,n){n.d(t,{h:function(){return r}});var r=n(294).Z.create({baseURL:"https://api.themoviedb.org/3/"})}}]);
//# sourceMappingURL=579.5121564f.chunk.js.map