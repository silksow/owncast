(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[203],{84841:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/logs",function(){return r(52736)}])},824:function(e,n,r){"use strict";r.d(n,{Z:function(){return v}});var t=r(85893),i=r(67294),a=r(84485),o=r(20550),u=r(96003),s=r(53731),c=r(58091),l=a.Z.Title;function f(e,n){var r="black";return"warning"===n.level?r="orange":"error"===n.level&&(r="red"),(0,t.jsx)(o.Z,{color:r,children:e})}function d(e){return(0,t.jsx)(s.Z,{children:e})}function v(e){var n=e.logs,r=e.originalPageSize;if(!(null===n||void 0===n?void 0:n.length))return null;var a=(0,i.useState)(r)[0],o=[{title:"Level",dataIndex:"level",key:"level",filters:[{text:"Info",value:"info"},{text:"Warning",value:"warning"},{text:"Error",value:"Error"}],onFilter:function(e,n){return 0===n.level.indexOf(e)},render:f},{title:"Timestamp",dataIndex:"time",key:"time",render:function(e){var n=new Date(e);return(0,c.Z)(n,"pp P")},sorter:function(e,n){return new Date(e.time).getTime()-new Date(n.time).getTime()},sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Message",dataIndex:"message",key:"message",render:d}];return(0,t.jsxs)("div",{className:"logs-section",children:[(0,t.jsx)(l,{children:"Logs"}),(0,t.jsx)(u.Z,{size:"middle",dataSource:n,columns:o,rowKey:function(e){return e.time},pagination:{pageSize:a}})]})}},52736:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return l}});var t=r(34051),i=r.n(t),a=r(85893),o=r(67294),u=r(824),s=r(58827);function c(e,n,r,t,i,a,o){try{var u=e[a](o),s=u.value}catch(c){return void r(c)}u.done?n(s):Promise.resolve(s).then(t,i)}function l(){var e=(0,o.useState)([]),n=e[0],r=e[1],t=function(){var e,n=(e=i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.rQ)(s.sG);case 3:n=e.sent,r(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("==== error",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})),function(){var n=this,r=arguments;return new Promise((function(t,i){var a=e.apply(n,r);function o(e){c(a,t,i,o,u,"next",e)}function u(e){c(a,t,i,o,u,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,o.useEffect)((function(){var e;return setInterval(t,5e3),t(),e=setInterval(t,5e3),function(){clearInterval(e)}}),[]),(0,a.jsx)(u.Z,{logs:n,originalPageSize:20})}}},function(e){e.O(0,[741,3,91,429,774,888,179],(function(){return n=84841,e(e.s=n);var n}));var n=e.O();_N_E=n}]);