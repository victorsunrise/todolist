webpackJsonp([2],[,,,,function(t,e,n){"use strict";function i(t){n(15)}var o={name:"item",props:{item:{type:Object}},methods:{checked:function(t){this.$store.dispatch("DONE_ITEM",{item:t})},deleted:function(t){this.$store.dispatch("DELETE_ITEM",{item:t})}}},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"todoitem"},[n("div",{staticClass:"todoitem-block"},[n("div",{staticClass:"todoitem-block__header"},[n("input",{staticClass:"checkbox",attrs:{type:"checkbox"},on:{change:function(e){t.checked(t.item)}}}),n("div",{staticClass:"todoitem-block__header-label"},["new"===t.item.type?n("span",[t._v(t._s(t.item.letter))]):t._e(),"done"===t.item.type?n("strike",{staticClass:"done"},[t._v(t._s(t.item.letter))]):t._e()],1)]),n("div",{staticClass:"todoitem-block__footer"},[n("div",{staticClass:"todoitem-block__footer-status"},[n("label",[t._v("STATUS: ")]),"new"===t.item.type?n("span",{staticClass:"info"},[t._v(t._s(t.item.type))]):t._e(),"done"===t.item.type?n("span",{staticClass:"done"},[t._v(t._s(t.item.type))]):t._e()]),n("div",[n("button",{staticClass:"btn",on:{click:function(e){t.deleted(t.item)}}},[t._v("X")])])])])])},r=[],a={render:s,staticRenderFns:r},c=a,u=n(1),m=i,d=u(o,c,!1,m,null,null);e.b=d.exports},function(t,e,n){"use strict";function i(t){n(16)}var o=(n(3),{name:"headers",methods:{submit:function(t){this.$store.dispatch("NEW_ITEM",{item:this.$refs.todoinput.value}),this.$refs.todoinput.value=""}}}),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"headers"},[n("label",{staticClass:"headers__label"},[t._v(" Enter your todo: ")]),n("input",{ref:"todoinput",staticClass:"header__input",attrs:{maxlength:"100"},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.submit(e)}}})])},r=[],a={render:s,staticRenderFns:r},c=a,u=n(1),m=i,d=u(o,c,!1,m,null,null);e.b=d.exports},function(t,e,n){"use strict";function i(t){n(12)}function o(){return new E.a.Store({state:{item:[]},actions:v,mutations:h,getters:T})}function s(){return new b.a({mode:"history",routes:[{path:"/",component:y},{path:"/",redirect:"/"}]})}Object.defineProperty(e,"__esModule",{value:!0});var r={};n.d(r,"Item",function(){return k.Item}),n.d(r,"Headers",function(){return C.Headers});var a=n(0),c=(n(10),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("router-view",{staticClass:"view"})],1)],1)}),u=[],m={render:c,staticRenderFns:u},d=m,l=n(1),_=i,f=l(null,d,!1,_,null,null),p=f.exports,E=n(3),v={NEW_ITEM:function(t,e){var n=t.commit;t.state;n("SET_NEW_ITEM",{item:e.item})},DONE_ITEM:function(t,e){var n=t.commit;t.state;n("SET_DONE_ITEM",{item:e.item})},DELETE_ITEM:function(t,e){var n=t.commit;t.state;n("SET_DELETE_ITEM",{item:e.item})}},h={SET_ACTIVE_TYPE:function(t,e){var n=e.type;t.activeType=n},SET_LIST:function(t,e){var n=e.type,i=e.ids;t.lists[n]=i},SET_ITEMS:function(t,e){e.items.forEach(function(e){e&&a.a.set(t.items,e.id,e)})},SET_USER:function(t,e){var n=e.id,i=e.user;a.a.set(t.users,n,i||!1)},SET_NEW_ITEM:function(t,e){var n=e.item,i=void 0;0===t.item.length?i=0:t.item.length>0&&(i=t.item[t.item.length-1].id+1);var o={type:"new",letter:n,id:i};t&&t.item?t.item.push(o):(t.item=[],t.item.push(o))},SET_DONE_ITEM:function(t,e){var n=e.item;"new"===t.item[t.item.indexOf(n)].type?t.item[t.item.indexOf(n)].type="done":t.item[t.item.indexOf(n)].type="new"},SET_DELETE_ITEM:function(t,e){var n=e.item;t.item.splice(t.item.indexOf(n),1)}},T={getListTodo:function(t){return t.item}};a.a.use(E.a);var b=n(14);a.a.use(b.a);var y=function(){return n.e(0).then(n.bind(null,22))},I=n(17),k=n(4),C=n(5);a.a.mixin({beforeRouteUpdate:function(t,e,n){var i=this.$options.asyncData;i?i({store:this.$store,route:t}).then(n).catch(n):n()}});var S=function(){var t=o(),e=s();return Object(I.sync)(t,e),{app:new a.a({components:r,router:e,store:t,render:function(t){return t(p)}}),router:e,store:t,components:r}}(),w=S.app,M=S.router,g=S.store;window.__INITIAL_STATE__&&g.replaceState(window.__INITIAL_STATE__),M.onReady(function(){M.beforeResolve(function(t,e,n){var i=M.getMatchedComponents(t),o=M.getMatchedComponents(e),s=!1,r=i.filter(function(t,e){return s||(s=o[e]!==t)}),a=r.map(function(t){return t.asyncData}).filter(function(t){return t});if(!a.length)return n();Promise.all(a.map(function(e){return e({store:g,route:t})})).then(function(){n()}).catch(n)}),w.$mount("#app")}),"https:"===location.protocol&&navigator.serviceWorker&&navigator.serviceWorker.register("/service-worker.js")},,,,,,function(t,e){},,,function(t,e){},function(t,e){}],[6]);