"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[740],{443:function(t,e,r){r.d(e,{Hg:function(){return i},IQ:function(){return f},Jh:function(){return l},pm:function(){return o},s_:function(){return p}});var n=r(861),a=r(757),u=r.n(a),c=r(340),s="16b38c03c30ede9b820f4f11ba02153b";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?api_key=".concat(s,"&query=").concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(s));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(s));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},740:function(t,e,r){r.r(e);var n=r(439),a=r(443),u=r(791),c=r(87),s=r(689),i=r(184);e.default=function(){var t=(0,u.useState)([]),e=(0,n.Z)(t,2),r=e[0],o=e[1],p=(0,c.lr)(),f=(0,n.Z)(p,2),l=f[0],v=f[1],d=l.query,h=(0,s.TH)();return(0,u.useEffect)((function(){d&&(0,a.pm)(d).then(o)}),[d]),(0,i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=t.currentTarget,r=e.elements.query.value;v(""!==r?{query:r}:{}),e.reset()},children:[(0,i.jsx)("input",{type:"text",name:"query",defaultValue:d||""}),(0,i.jsx)("button",{type:"submit",children:"Search"}),0===r.length&&d?(0,i.jsx)("div",{children:"No results. Please try again."}):(0,i.jsx)("ul",{children:r.map((function(t){return(0,i.jsx)("li",{children:(0,i.jsx)(c.OL,{to:"/movies/".concat(t.id),state:{from:h},children:t.title})},t.id)}))})]})}}}]);
//# sourceMappingURL=740.7d25f048.chunk.js.map