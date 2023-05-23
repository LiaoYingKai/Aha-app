/*! For license information please see 234.91370152.chunk.js.LICENSE.txt */
(self.webpackChunkaha_app=self.webpackChunkaha_app||[]).push([[234],{5557:function(e,r,t){"use strict";t.d(r,{Z:function(){return a}});var n=t(1243);function a(e){var r=n.Z.create();return r.interceptors.request.use((function(e){return e.url="https://avl-frontend-exam.herokuapp.com/api/"+e.url,e}),(function(e){return Promise.reject(e)})),r.interceptors.response.use((function(e){return e.data}),(function(e){return Promise.reject(e)})),r(e)}},9321:function(e,r,t){"use strict";t.d(r,{ZP:function(){return c}});var n=t(1694),a=t.n(n),i=t(184),o={LARGE:"large",SMALL:"small"},u={OUTLINED:"outlined",CONTAINED:"contained"},s=o.LARGE,l=u.CONTAINED;function c(e){var r=e.size,t=void 0===r?s:r,n=e.type,o=void 0===n?l:n,u=e.children,c=e.onClick,f=o===l?"border-[1px] border-solid border-white bg-white text-black hover:bg-transparent hover:text-white":"border-[1px] border-solid border-white bg-transparent text-white hover:bg-white hover:text-black",d=t===s?"w-full max-w-[335px] h-10 rounded text-sm font-bold":"px-2.5 h-8 rounded-[20px] text-xs";return(0,i.jsx)("button",{onClick:c,type:"button",className:a()("flex items-center justify-center",f,d),children:u})}c.ButtonSize=o,c.ButtonType=u},7234:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return L}});var n=t(1122),a=t(7689),i=t(2791),o=t(1413),u=t(9321),s=t(9439),l=t(1933),c=t(5557),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.page,t=void 0===r?1:r,n=e.pageSize,a=void 0===n?10:n;return(0,c.Z)({method:"GET",url:"users/all",params:{page:t,pageSize:a}}).then((function(e){return e}))},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.page,t=void 0===r?1:r,n=e.pageSize,a=void 0===n?10:n;return(0,c.Z)({method:"GET",url:"users/friends",params:{page:t,pageSize:a}}).then((function(e){return e}))},p=t(184),g=(0,i.createContext)(void 0),v={FOLLOWERS:"followers",FOLLOWING:"following"},h=[{label:"Followers",value:v.FOLLOWERS},{label:"Following",value:v.FOLLOWING}];function x(){var e=(0,i.useContext)(g);if(void 0===e)throw new Error("useFollow must be used within a FollowProvider");return e}function m(e){var r=e.children,t=(0,i.useState)(h[0].value),n=(0,s.Z)(t,2),a=n[0],o=n[1],u=(0,l.useInfiniteQuery)(["follower"],(function(e){var r=e.pageParam;return f({page:void 0===r?1:r,pageSize:10})}),{enabled:!1,getNextPageParam:function(e){return e.page+1<=e.totalPages?e.page+1:void 0}}),c=(0,l.useInfiniteQuery)(["following"],(function(e){var r=e.pageParam;return d({page:void 0===r?1:r,pageSize:10})}),{enabled:!1,getNextPageParam:function(e){return e.page+1<=e.totalPages?e.page+1:void 0}}),v=(0,i.useMemo)((function(){return{currentTab:a,setCurrentTab:o,followerQuery:u,followingQuery:c}}),[a,o,u,c]);return(0,p.jsx)(g.Provider,{value:v,children:r})}var b=t(3381),j=t(1822);function w(e){var r=e.avater,t=e.isFollowing,n=e.name,a=e.username;return(0,p.jsxs)("div",{className:"mb-5 flex w-full gap-4",children:[(0,p.jsx)("div",{className:"round h-10 w-10",children:(0,p.jsx)("img",{className:"h-full w-full",src:r,alt:"avatar"})}),(0,p.jsxs)("div",{className:"flex-1",children:[(0,p.jsx)("p",{className:"text-base",children:n}),(0,p.jsxs)("p",{className:"text-sm",children:["@",a]})]}),t?(0,p.jsx)(u.ZP,{size:u.ZP.ButtonSize.SMALL,type:u.ZP.ButtonType.CONTAINED,children:"Following"}):(0,p.jsx)(u.ZP,{size:u.ZP.ButtonSize.SMALL,type:u.ZP.ButtonType.OUTLINED,children:"Follow"})]})}function P(){return(0,p.jsxs)("div",{className:"flex w-full animate-pulse gap-4 mb-5",children:[(0,p.jsx)("div",{className:"h-10 w-10 rounded bg-slate-700"}),(0,p.jsxs)("div",{className:"flex-1",children:[(0,p.jsx)("p",{className:"h-4 w-1/2 rounded bg-slate-700 mb-1"}),(0,p.jsx)("p",{className:"h-4 w-1/4 rounded bg-slate-700"})]})]})}function y(){var e=x().followerQuery,r=(0,i.useMemo)((function(){return(0,j.H)(e.data)}),[e.data]).list,t=(0,i.useMemo)((function(){return(0,b.c)()}),[]);return(0,i.useEffect)((function(){e.remove(),e.refetch()}),[]),e.isError?(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{className:"mb-1.5 text-2xl",children:"Something Error."}),(0,p.jsx)("p",{children:"Please try again later."})]}):(0,p.jsxs)("div",{className:"px-4 pb-5",children:[r.map((function(e){return(0,p.jsx)(w,(0,o.Z)({},e),e.id)})),(e.isLoading||e.isFetchingNextPage)&&t.map((function(e,r){return(0,p.jsx)(P,{},r)})),e.hasNextPage&&(0,p.jsx)("div",{className:"mt-5",children:(0,p.jsx)(u.ZP,{onClick:e.fetchNextPage,children:"More"})})]})}function N(){var e=x().followingQuery,r=(0,i.useMemo)((function(){return(0,j.H)(e.data)}),[e.data]).list,t=(0,i.useMemo)((function(){return(0,b.c)()}),[]);return(0,i.useEffect)((function(){e.remove(),e.refetch()}),[]),e.isError?(0,p.jsxs)("div",{children:[(0,p.jsx)("p",{className:"mb-1.5 text-2xl",children:"Something Error."}),(0,p.jsx)("p",{children:"Please try again later."})]}):(0,p.jsxs)("div",{className:"px-4 pb-5",children:[r.map((function(e){return(0,p.jsx)(w,(0,o.Z)({},e),e.id)})),(e.isLoading||e.isFetchingNextPage)&&t.map((function(e,r){return(0,p.jsx)(P,{},r)})),e.hasNextPage&&(0,p.jsx)("div",{className:"mt-5",children:(0,p.jsx)(u.ZP,{onClick:e.fetchNextPage,children:"More"})})]})}var O=t(1694),S=t.n(O);function k(){var e=x(),r=e.currentTab,t=e.setCurrentTab;return(0,p.jsx)("div",{className:"flex w-full",children:h.map((function(e){return(0,p.jsx)("button",{onClick:function(){t(e.value)},className:S()("mb-8 flex-1 border-b-2 border-solid border-transparent py-3 font-bold",{"border-white":r===e.value,"text-text-gray":r!==e.value}),children:e.label},e.value)}))})}function E(){var e=x().currentTab,r=(0,i.useMemo)((function(){return e===v.FOLLOWERS}),[e]);return(0,p.jsxs)("div",{className:"scroll-hidden hidden h-full w-[375px] overflow-y-scroll bg-light-black pt-5 2xl:block",children:[(0,p.jsx)(k,{}),r?(0,p.jsx)(y,{}):(0,p.jsx)(N,{})]})}function Z(){return(0,p.jsx)(m,{children:(0,p.jsx)(E,{})})}function C(){return(0,p.jsxs)("div",{className:"flex h-full",children:[(0,p.jsx)("div",{className:"h-full w-full flex-1 overflow-y-scroll p-5 pt-0 md:pb-20 md:pt-14",children:(0,p.jsx)(a.j3,{})}),(0,p.jsx)(Z,{})]})}function L(){return(0,p.jsx)(n.O,{children:(0,p.jsx)(C,{})})}},1122:function(e,r,t){"use strict";t.d(r,{O:function(){return h},_:function(){return v}});var n=t(7762),a=t(9439),i=t(2791),o=t(1933),u=t(1087),s=function(e){void 0===e&&(e={});var r=(0,i.useState)(e),t=r[0],n=r[1];return[t,(0,i.useCallback)((function(e){n((function(r){return Object.assign({},r,e instanceof Function?e(r):e)}))}),[])]};function l(e,r,t){void 0===r&&(r=0),void 0===t&&(t=[]);var n=function(e,r){void 0===r&&(r=0);var t=(0,i.useRef)(!1),n=(0,i.useRef)(),a=(0,i.useRef)(e),o=(0,i.useCallback)((function(){return t.current}),[]),u=(0,i.useCallback)((function(){t.current=!1,n.current&&clearTimeout(n.current),n.current=setTimeout((function(){t.current=!0,a.current()}),r)}),[r]),s=(0,i.useCallback)((function(){t.current=null,n.current&&clearTimeout(n.current)}),[]);return(0,i.useEffect)((function(){a.current=e}),[e]),(0,i.useEffect)((function(){return u(),s}),[r]),[o,s,u]}(e,r),a=n[0],o=n[1],u=n[2];return(0,i.useEffect)(u,t),[a,o]}var c=t(5557),f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.page,t=e.pageSize,n=void 0===t?10:t,a=e.keyword,i=void 0===a?"":a;return(0,c.Z)({method:"GET",url:"users/all",params:{page:r,pageSize:n,keyword:i}}).then((function(e){return e}))},d=t(1822),p=t(184),g=(0,i.createContext)(void 0);function v(){var e=(0,i.useContext)(g);if(void 0===e)throw new Error("useHome must be used within a HomeProvider");return e}function h(e){var r=e.children,t=(0,u.lr)(),c=(0,a.Z)(t,1)[0],v=(0,i.useMemo)((function(){var e,r={},t=(0,n.Z)(c.entries());try{for(t.s();!(e=t.n()).done;){var i=e.value,o=(0,a.Z)(i,2),u=o[0],s=o[1];r[u]=s}}catch(l){t.e(l)}finally{t.f()}return r}),[c]),h=v.perPage,x=void 0===h?9:h,m=v.keyword,b=s({keyword:void 0===m?"":m,perPage:x}),j=(0,a.Z)(b,2),w=j[0],P=j[1],y=(0,i.useCallback)((function(e){P({keyword:e})}),[P]),N=(0,i.useCallback)((function(e){P({perPage:e})}),[P]),O=(0,o.useInfiniteQuery)(["result"],(function(e){var r=e.pageParam;return f({page:void 0===r?1:r,pageSize:w.perPage,keyword:w.keyword})}),{enabled:!1,getNextPageParam:function(e){return e.page+1<=e.totalPages?e.page+1:void 0}}),S=O.data,k=O.isLoading,E=O.isError,Z=O.hasNextPage,C=O.isFetchingNextPage,L=O.fetchNextPage,T=O.refetch,z=O.remove,F=(0,i.useMemo)((function(){return(0,d.H)(S)}),[S]),M=F.list,A=F.pages,I=l((function(){z(),T()}),500,[w]),D=(0,a.Z)(I,1)[0],R=(0,i.useMemo)((function(){return{isReady:D(),data:M,pages:A,isLoading:k,isFetchingNextPage:C,isError:E,searchParams:w,handleChangeKeyword:y,handleChangePerPage:N,hasNextPage:Z,fetchNextPage:L}}),[D,M,A,k,C,E,w,y,N,Z,L]);return(0,p.jsx)(g.Provider,{value:R,children:r})}},3381:function(e,r,t){"use strict";t.d(r,{c:function(){return n}});var n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return Number.isInteger(e)?new Array(e).fill(!0):[]}},1822:function(e,r,t){"use strict";t.d(r,{H:function(){return a}});var n=t(3433),a=function(e){var r,t={list:[],pages:{total:0,totalPages:0,page:0,pageSize:0}};return e?(t.list=null===e||void 0===e||null===(r=e.pages)||void 0===r?void 0:r.reduce((function(e,r){return e.push.apply(e,(0,n.Z)(r.data)),e}),[]),t.pages={total:e.pages[0].total,totalPages:e.pages[0].totalPages,page:e.pages[0].page,pageSize:e.pages[0].pageSize},t):t}},1694:function(e,r){var t;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var i=typeof t;if("string"===i||"number"===i)e.push(t);else if(Array.isArray(t)){if(t.length){var o=a.apply(null,t);o&&e.push(o)}}else if("object"===i){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var u in t)n.call(t,u)&&t[u]&&e.push(u)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(t=function(){return a}.apply(r,[]))||(e.exports=t)}()},1413:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var n=t(4942);function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}}}]);
//# sourceMappingURL=234.91370152.chunk.js.map