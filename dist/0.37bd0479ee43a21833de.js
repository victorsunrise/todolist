webpackJsonp([0],{20:function(e,t,s){var i=s(21);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);s(19)("fcb2bf54",i,!0)},21:function(e,t,s){t=e.exports=s(18)(void 0),t.push([e.i,".compare{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.compare,.compare-results{display:-webkit-box;display:-ms-flexbox;display:flex}.compare-results{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.compare-results__block{background-color:#fff;margin-right:150px;-webkit-box-shadow:0 0 10px rgba(0,0,0,.5);box-shadow:0 0 10px rgba(0,0,0,.5);width:370px;height:670px;border-radius:10px}.compare .winner{color:red;font-size:18pt;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:50px;margin-left:-150px}",""])},22:function(e,t,s){"use strict";function i(e){s(20)}Object.defineProperty(t,"__esModule",{value:!0});var r=s(4),n=s(5),o={name:"all",components:{Item:r.b,Headers:n.b},mounted:function(){this.$store.dispatch("MOUNT_ITEM")},computed:{list:function(){return this.$store.getters.getList},winner:function(){return this.$store.getters.getWinner?this.$store.getters.getWinner:null}}},a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"compare"},[s("div",{staticClass:"compare-results"},[s("div",{staticClass:"compare-results__block"},[s("headers",{attrs:{id:0}}),e._l(e.list,function(t,i){return 0==t.mysuperid?s("item",{key:i,attrs:{item:t,id:0}}):e._e()})],2),s("div",{staticClass:"compare-results__block"},[s("headers",{attrs:{id:1}}),e._l(e.list,function(t,i){return 1==t.mysuperid?s("item",{key:i,attrs:{item:t,id:1}}):e._e()})],2)]),s("span",{staticClass:"winner"},[e._v(e._s(e.winner))])])},c=[],l={render:a,staticRenderFns:c},p=l,d=s(1),u=i,f=d(o,p,!1,u,null,null);t.default=f.exports}});