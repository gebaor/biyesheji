(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpinxinxi/add-or-update"],{"0678":function(t,e,n){"use strict";(function(t){n("6cdc");r(n("dda7"));var e=r(n("565d"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("255a")["createPage"])},3599:function(t,e,n){"use strict";(function(t){function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function i(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */i=function(){return e};var t,e={},n=Object.prototype,a=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},u="function"==typeof Symbol?Symbol:{},s=u.iterator||"@@iterator",c=u.asyncIterator||"@@asyncIterator",l=u.toStringTag||"@@toStringTag";function h(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{h({},"")}catch(t){h=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),u=new P(r||[]);return o(a,"_invoke",{value:O(t,n,u)}),a}function p(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var m="suspendedStart",g="suspendedYield",d="executing",y="completed",v={};function b(){}function x(){}function k(){}var w={};h(w,s,(function(){return this}));var F=Object.getPrototypeOf,S=F&&F(F(T([])));S&&S!==n&&a.call(S,s)&&(w=S);var $=k.prototype=b.prototype=Object.create(w);function L(t){["next","throw","return"].forEach((function(e){h(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(i,o,u,s){var c=p(t[i],t,o);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==r(h)&&a.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,u,s)}),(function(t){n("throw",t,u,s)})):e.resolve(h).then((function(t){l.value=t,u(l)}),(function(t){return n("throw",t,u,s)}))}s(c.arg)}var i;o(this,"_invoke",{value:function(t,r){function a(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(a,a):a()}})}function O(e,n,r){var i=m;return function(a,o){if(i===d)throw new Error("Generator is already running");if(i===y){if("throw"===a)throw o;return{value:t,done:!0}}for(r.method=a,r.arg=o;;){var u=r.delegate;if(u){var s=_(u,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(i===m)throw i=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);i=d;var c=p(e,n,r);if("normal"===c.type){if(i=r.done?y:g,c.arg===v)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(i=y,r.method="throw",r.arg=c.arg)}}}function _(e,n){var r=n.method,i=e.iterator[r];if(i===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,_(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),v;var a=p(i,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var o=a.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(e){if(e||""===e){var n=e[s];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function n(){for(;++i<e.length;)if(a.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return o.next=o}}throw new TypeError(r(e)+" is not iterable")}return x.prototype=k,o($,"constructor",{value:k,configurable:!0}),o(k,"constructor",{value:x,configurable:!0}),x.displayName=h(k,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===x||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,h(t,l,"GeneratorFunction")),t.prototype=Object.create($),t},e.awrap=function(t){return{__await:t}},L(E.prototype),h(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,i,a){void 0===a&&(a=Promise);var o=new E(f(t,n,r,i),a);return e.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},L($),h($,l,"Generator"),h($,s,(function(){return this})),h($,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=T,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(N),!e)for(var n in this)"t"===n.charAt(0)&&a.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function r(r,i){return u.type="throw",u.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],u=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=a.call(o,"catchLoc"),c=a.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&a.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;N(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:T(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),v}},e}function a(t,e,n,r,i,a,o){try{var u=t[a](o),s=u.value}catch(c){return void n(c)}u.done?e(s):Promise.resolve(s).then(r,i)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function u(t){a(o,r,i,u,s,"next",t)}function s(t){a(o,r,i,u,s,"throw",t)}u(void 0)}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("e2b1"))}.bind(null,n)).catch(n.oe)};e.default={data:function(){return{cross:"",ruleForm:{shangpinmingcheng:"",shangpinfenlei:"",tupian:"",guige:"",chandi:"",shangpinxiangqing:"",onelimittimes:"-1",alllimittimes:"-1",price:""},shangpinfenleiOptions:[],shangpinfenleiIndex:0,user:{},ro:{shangpinmingcheng:!1,shangpinfenlei:!1,tupian:!1,guige:!1,chandi:!1,shangpinxiangqing:!1,onelimittimes:!1,alllimittimes:!1,clicktime:!1,clicknum:!1,price:!1}}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(){var e=o(i().mark((function e(n){var r,a,o,u;return i().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.getStorageSync("nowTable"),e.next=3,this.$api.session(r);case 3:return a=e.sent,this.user=a.data,e.next=7,this.$api.option("shangpinfenlei","shangpinfenlei",{});case 7:if(a=e.sent,this.shangpinfenleiOptions=a.data,this.ruleForm.userid=t.getStorageSync("userid"),n.refid&&(this.ruleForm.refid=n.refid,this.ruleForm.nickname=t.getStorageSync("nickname")),!n.id){e.next=17;break}return this.ruleForm.id=n.id,e.next=15,this.$api.info("shangpinxinxi",this.ruleForm.id);case 15:a=e.sent,this.ruleForm=a.data;case 17:if(this.cross=n.cross,!n.cross){e.next=69;break}o=t.getStorageSync("crossObj"),e.t0=i().keys(o);case 21:if((e.t1=e.t0()).done){e.next=69;break}if(u=e.t1.value,"shangpinmingcheng"!=u){e.next=27;break}return this.ruleForm.shangpinmingcheng=o[u],this.ro.shangpinmingcheng=!0,e.abrupt("continue",21);case 27:if("shangpinfenlei"!=u){e.next=31;break}return this.ruleForm.shangpinfenlei=o[u],this.ro.shangpinfenlei=!0,e.abrupt("continue",21);case 31:if("tupian"!=u){e.next=35;break}return this.ruleForm.tupian=o[u],this.ro.tupian=!0,e.abrupt("continue",21);case 35:if("guige"!=u){e.next=39;break}return this.ruleForm.guige=o[u],this.ro.guige=!0,e.abrupt("continue",21);case 39:if("chandi"!=u){e.next=43;break}return this.ruleForm.chandi=o[u],this.ro.chandi=!0,e.abrupt("continue",21);case 43:if("shangpinxiangqing"!=u){e.next=47;break}return this.ruleForm.shangpinxiangqing=o[u],this.ro.shangpinxiangqing=!0,e.abrupt("continue",21);case 47:if("onelimittimes"!=u){e.next=51;break}return this.ruleForm.onelimittimes=o[u],this.ro.onelimittimes=!0,e.abrupt("continue",21);case 51:if("alllimittimes"!=u){e.next=55;break}return this.ruleForm.alllimittimes=o[u],this.ro.alllimittimes=!0,e.abrupt("continue",21);case 55:if("clicktime"!=u){e.next=59;break}return this.ruleForm.clicktime=o[u],this.ro.clicktime=!0,e.abrupt("continue",21);case 59:if("clicknum"!=u){e.next=63;break}return this.ruleForm.clicknum=o[u],this.ro.clicknum=!0,e.abrupt("continue",21);case 63:if("price"!=u){e.next=67;break}return this.ruleForm.price=o[u],this.ro.price=!0,e.abrupt("continue",21);case 67:e.next=21;break;case 69:this.styleChange();case 70:case"end":return e.stop()}}),e,this)})));function n(t){return e.apply(this,arguments)}return n}(),methods:{styleChange:function(){this.$nextTick((function(){}))},clicktimeConfirm:function(t){console.log(t),this.ruleForm.clicktime=t.result,this.$forceUpdate()},shangpinfenleiChange:function(t){this.shangpinfenleiIndex=t.target.value,this.ruleForm.shangpinfenlei=this.shangpinfenleiOptions[this.shangpinfenleiIndex]},tupianTap:function(){var t=this;this.$api.upload((function(e){t.ruleForm.tupian="upload/"+e.file,t.$forceUpdate(),t.$nextTick((function(){t.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=o(i().mark((function e(){var n,r,a,o,u,s,c,l,h,f;return i().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.shangpinmingcheng){e.next=3;break}return this.$utils.msg("地摊名称不能为空"),e.abrupt("return");case 3:if(this.ruleForm.shangpinfenlei){e.next=6;break}return this.$utils.msg("地摊分类不能为空"),e.abrupt("return");case 6:if(!this.ruleForm.onelimittimes||this.$validate.isIntNumer(this.ruleForm.onelimittimes)){e.next=9;break}return this.$utils.msg("单限应输入整数"),e.abrupt("return");case 9:if(!this.ruleForm.alllimittimes||this.$validate.isIntNumer(this.ruleForm.alllimittimes)){e.next=12;break}return this.$utils.msg("库存应输入整数"),e.abrupt("return");case 12:if(!this.ruleForm.clicknum||this.$validate.isIntNumer(this.ruleForm.clicknum)){e.next=15;break}return this.$utils.msg("点击次数应输入整数"),e.abrupt("return");case 15:if(this.ruleForm.price){e.next=18;break}return this.$utils.msg("价格不能为空"),e.abrupt("return");case 18:if(!this.ruleForm.price||this.$validate.isNumber(this.ruleForm.price)){e.next=21;break}return this.$utils.msg("价格应输入数字"),e.abrupt("return");case 21:if(!this.cross){e.next=37;break}if(u=t.getStorageSync("statusColumnName"),s=t.getStorageSync("statusColumnValue"),""==u){e.next=37;break}if(n||(n=t.getStorageSync("crossObj")),u.startsWith("[")){e.next=33;break}for(c in n)c==u&&(n[c]=s);return l=t.getStorageSync("crossTable"),e.next=31,this.$api.update("".concat(l),n);case 31:e.next=37;break;case 33:r=Number(t.getStorageSync("userid")),a=n["id"],o=t.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 37:if(!a||!r){e.next=59;break}return this.ruleForm.crossuserid=r,this.ruleForm.crossrefid=a,h={page:1,limit:10,crossuserid:r,crossrefid:a},e.next=43,this.$api.list("shangpinxinxi",h);case 43:if(f=e.sent,!(f.data.total>=o)){e.next=49;break}return this.$utils.msg(t.getStorageSync("tips")),e.abrupt("return",!1);case 49:if(!this.ruleForm.id){e.next=54;break}return e.next=52,this.$api.update("shangpinxinxi",this.ruleForm);case 52:e.next=56;break;case 54:return e.next=56,this.$api.add("shangpinxinxi",this.ruleForm);case 56:this.$utils.msgBack("提交成功");case 57:e.next=67;break;case 59:if(!this.ruleForm.id){e.next=64;break}return e.next=62,this.$api.update("shangpinxinxi",this.ruleForm);case 62:e.next=66;break;case 64:return e.next=66,this.$api.add("shangpinxinxi",this.ruleForm);case 66:this.$utils.msgBack("提交成功");case 67:case"end":return e.stop()}}),e,this)})));function n(){return e.apply(this,arguments)}return n}(),optionsChange:function(t){this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},getDate:function(t){var e=new Date,n=e.getFullYear(),r=e.getMonth()+1,i=e.getDate();return"start"===t?n-=60:"end"===t&&(n+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(n,"-").concat(r,"-").concat(i)},toggleTab:function(t){this.$refs[t].show()}}}}).call(this,n("255a")["default"])},"565d":function(t,e,n){"use strict";n.r(e);var r=n("64ad"),i=n("f9f4");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("a6d0");var o,u=n("7702"),s=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"8fdbe14a",null,!1,r["a"],o);e["default"]=s.exports},"64ad":function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"e2b1"))}},i=function(){var t=this,e=t.$createElement;t._self._c},a=[]},"865a":function(t,e,n){},a6d0:function(t,e,n){"use strict";var r=n("865a"),i=n.n(r);i.a},f9f4:function(t,e,n){"use strict";n.r(e);var r=n("3599"),i=n.n(r);for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a}},[["0678","common/runtime","common/vendor"]]]);