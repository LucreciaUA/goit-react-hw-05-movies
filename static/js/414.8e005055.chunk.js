"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[414],{81:function(e,r,n){n.d(r,{h:function(){return t}});var t=n(294).Z.create({baseURL:"https://api.themoviedb.org/3/"})},414:function(e,r,n){n.r(r),n.d(r,{Reviews:function(){return f}});var t=n(861),a=n(439),c=n(757),s=n.n(c),u=n(81),o=function(){var e=(0,t.Z)(s().mark((function e(r){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.h.get("movie/".concat(r,"/reviews?api_key=").concat("579f9cde8301da77a7eae5840c1b4661","&language=en-US&page=1"));case 2:return n=e.sent,console.log(n.data),e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),i=n(79),l=n(791),p=n(689),h=n(184),f=function(){var e=(0,l.useState)([]),r=(0,a.Z)(e,2),n=r[0],c=r[1],u=(0,p.UO)().movieId,f=(0,l.useState)(!1),d=(0,a.Z)(f,2),v=d[0],w=d[1];return(0,l.useEffect)((function(){var e=function(){var e=(0,t.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,o(u);case 4:r=e.sent,c(r.results),console.log(r.results),w(!1),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();e()}),[u]),(0,h.jsx)(h.Fragment,{children:0===n.length?(0,h.jsx)("p",{children:"There is no review"}):v?(0,h.jsx)(i.a,{}):(0,h.jsx)("ul",{children:n.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsx)("h3",{children:e.author_details.username}),(0,h.jsx)("p",{children:e.content})]},e.id)}))})})}},79:function(e,r,n){n.d(r,{a:function(){return s}});var t=n(154),a="loader_wrapper__LrcHi",c=n(184),s=function(){return(0,c.jsx)("div",{className:a,children:(0,c.jsx)(t.VL,{visible:!0,height:"80",width:"80",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["blue","blue","blue","yellow","yellow","yellow"]})})}}}]);
//# sourceMappingURL=414.8e005055.chunk.js.map