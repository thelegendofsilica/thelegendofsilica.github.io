(function(e){function t(t){for(var a,i,c=t[0],s=t[1],u=t[2],m=0,l=[];m<c.length;m++)i=c[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&l.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(l.length)l.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r={app:0},o=[];function c(e){return s.p+"js/"+({"campaign.game-over":"campaign.game-over",campaign:"campaign","game-over":"game-over","new-campaign":"new-campaign","particles.js":"particles.js",menu:"menu",start:"start"}[e]||e)+"."+{"campaign.game-over":"da29e91a",campaign:"5821d9e4","game-over":"844084fc","new-campaign":"ccc6de12","particles.js":"90bfbaac",menu:"78388ee3",start:"d2c249df"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={campaign:1,"game-over":1,"new-campaign":1,menu:1,start:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({"campaign.game-over":"campaign.game-over",campaign:"campaign","game-over":"game-over","new-campaign":"new-campaign","particles.js":"particles.js",menu:"menu",start:"start"}[e]||e)+"."+{"campaign.game-over":"31d6cfe0",campaign:"ce491b72","game-over":"43b4da73","new-campaign":"61c5b953","particles.js":"31d6cfe0",menu:"91b64b02",start:"ed092cf7"}[e]+".css",r=s.p+a,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],m=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(m===a||m===r))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],m=u.getAttribute("data-href");if(m===a||m===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete i[e],f.parentNode.removeChild(f),n(o)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){i[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=o);var u,m=document.createElement("script");m.charset="utf-8",m.timeout=120,s.nc&&m.setAttribute("nonce",s.nc),m.src=c(e);var l=new Error;u=function(t){m.onerror=m.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",l.name="ChunkLoadError",l.type=a,l.request=i,n[1](l)}r[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:m})}),12e4);m.onerror=m.onload=u,document.head.appendChild(m)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],m=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=m;o.push([0,"vuetify","core-js","babel","vuex-persist","vue-loader","vue-router","vue","vuetify-loader","vuex","webpack","normalize.css"]),n()})({0:function(e,t,n){e.exports=n("cd49")},3022:function(e,t,n){"use strict";n("fcca")},"3d3d":function(e,t,n){e.exports=n.p+"img/pouch.f9e9f5ff.svg"},"5c0b":function(e,t,n){"use strict";n("9c0c")},7296:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("d4ec"),i=n("bee2"),r=(n("99af"),n("dbea")),o=function(){function e(t){if(Object(a["a"])(this,e),t.difficulty>4||t.difficulty<0)throw new Error("invalid difficulty: ".concat(t.difficulty));this.characterName=t.characterName,this.difficulty=t.difficulty,this.characterClass=t.characterClass,this.isoStartTime=t.isoStartTime,this.inventory=new r["a"],this.totalHealth=5-this.difficulty,this.currentHealth=this.totalHealth,this.completedQuestIds=new Array,t.completedQuestIds&&(this.completedQuestIds=t.completedQuestIds),void 0!=t.currentHealth&&(this.currentHealth=t.currentHealth),this.balance=2e3-500*this.difficulty,void 0!=t.balance&&(this.balance=t.balance),t.inventory&&(this.inventory=t.inventory),t.balance&&(this.balance=t.balance),t.currentQuestProgress&&(this.currentQuestProgress=t.currentQuestProgress)}return Object(i["a"])(e,[{key:"validate",value:function(){return!(0===this.characterName.length||this.characterName.length>20)&&(!(this.balance<0)&&(-1!==["primate","berserker","shaman"].indexOf(this.characterClass)&&(!(this.difficulty<0||this.difficulty>5)&&(0!==this.isoStartTime.length&&(void 0!==this.inventory&&this.inventory.validate())))))}},{key:"balanceFormatHTML",value:function(){return"".concat(e.balanceNumberFormatter.format(this.balance)," ").concat(e.currencyHTML)}}]),e}();o.balanceNumberFormatter=new Intl.NumberFormat("en",{minimumFractionDigits:2,maximumFractionDigits:2}),o.currencyHTML="mol SiO<sub>2</sub>"},"752d":function(e,t,n){e.exports=n.p+"img/frikandelbroodje.640e2312.png"},"9c0c":function(e,t,n){},c9ec:function(e,t,n){e.exports=n.p+"media/main-theme.89384007.mp3"},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-main",[a("div",{staticClass:"actions",style:{background:e.$vuetify.theme.currentTheme.background}},["Start"!==e.$route.name?a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("i",e._g({staticClass:"mdi btn toggle-music-btn",class:e.musicToggleButtonClass,on:{click:e.toggleMusic}},n))]}}],null,!1,3303639407)},[a("span",[e._v("Toggle music")])]):e._e()],1),a("audio",{ref:"music",attrs:{src:n("c9ec"),loop:""}}),a("router-view"),"Campaign"!==e.$route.name?a("div",{staticClass:"footer text-caption",style:{background:e.$vuetify.theme.currentTheme.background}},[e._v(" Copyright © 2021. All rights reserved. Design and implementation by "),a("a",{attrs:{href:"https://github.com/BenStokmans",target:"_blank"}},[e._v("B. Stokmans")]),e._v(" and "),a("a",{attrs:{href:"https://github.com/cfschilham",target:"_blank"}},[e._v("C.F. Schilham")]),e._v(". ")]):e._e()],1)],1)},r=[],o=(n("b0c0"),n("dbea")),c=n("7296"),s={name:"App",data:function(){return{musicToggleButtonClass:"mdi-volume-high"}},created:function(){this.$router.push("/")},mounted:function(){var e=this;if(this.$store.state.musicMuted&&(this.musicToggleButtonClass="mdi-volume-off"),this.$refs.music.onloadeddata=function(){e.$store.state.musicMuted?e.$refs.music.volume=0:e.$refs.music.volume=.2},this.$store.state.campaign){var t=Object.assign({},this.$store.state.campaign);t.inventory=new o["a"](this.$store.state.campaign.inventory),t.currentQuestProgress&&t.currentQuestProgress.startTime&&(t.currentQuestProgress.startTime=new Date(t.currentQuestProgress.startTime)),this.$store.commit("setCampaign",new c["a"](t))}},methods:{toggleMusic:function(){if(this.$store.commit("toggleMusic"),this.$store.state.musicMuted)return this.$refs.music.volume=0,void(this.musicToggleButtonClass="mdi-volume-off");this.$refs.music.volume=.2,this.musicToggleButtonClass="mdi-volume-high"}},watch:{$route:function(e,t){if("Start"===t.name||"Start"===e.name)return"Start"!==e.name?(this.$refs.music.currentTime=0,void this.$refs.music.play()):void this.$refs.music.pause()}}},u=s,m=(n("5c0b"),n("3022"),n("2877")),l=n("6544"),f=n.n(l),h=n("7496"),d=n("f6c4"),p=n("3a2f"),g=Object(m["a"])(u,i,r,!1,null,"450e34c6",null),v=g.exports;f()(g,{VApp:h["a"],VMain:d["a"],VTooltip:p["a"]});n("d3b7"),n("3ca3"),n("ddb0");var b=n("8c4f");a["a"].use(b["a"]);var y=[{path:"/",name:"Start",component:function(){return Promise.all([n.e("vuetify"),n.e("core-js"),n.e("babel"),n.e("start")]).then(n.bind(null,"d701"))},meta:{title:"Start - The Legend of Silica"}},{path:"/campaign",name:"Campaign",component:function(){return Promise.all([n.e("vuetify"),n.e("core-js"),n.e("babel"),n.e("campaign.game-over"),n.e("campaign")]).then(n.bind(null,"10c7"))},meta:{title:"Campaign - The Legend of Silica"}},{path:"/menu",name:"Menu",component:function(){return Promise.all([n.e("vuetify"),n.e("core-js"),n.e("babel"),n.e("particles.js"),n.e("menu")]).then(n.bind(null,"9a0b"))},meta:{title:"Menu - The Legend of Silica"}},{path:"/new-campaign",name:"NewCampaign",component:function(){return Promise.all([n.e("vuetify"),n.e("core-js"),n.e("babel"),n.e("new-campaign")]).then(n.bind(null,"4366"))},meta:{title:"New campaign - The Legend of Silica"}},{path:"/game-over",name:"GameOver",component:function(){return Promise.all([n.e("vuetify"),n.e("core-js"),n.e("babel"),n.e("campaign.game-over"),n.e("game-over")]).then(n.bind(null,"29bf"))},meta:{title:"Game over - The Legend of Silica"}},{path:"/quest",name:"Quest",component:function(){return Promise.all([n.e("vuetify"),n.e("core-js"),n.e("babel"),n.e("campaign.game-over"),n.e("game-over")]).then(n.bind(null,"2061"))},meta:{title:"Quest - The Legend of Silica"}}],w=new b["a"]({mode:"history",base:"/",routes:y});w.afterEach((function(e,t){a["a"].nextTick((function(){document.title=e.meta.title||"The Legend of Silica"}))}));var T=w,k=n("2f62"),j=n("bfa9");a["a"].use(k["a"]);var S=new j["a"]({storage:localStorage}),C=new k["a"].Store({state:{musicMuted:!1,campaign:void 0},mutations:{toggleMusic:function(e){e.musicMuted=!e.musicMuted},setCampaign:function(e,t){e.campaign=t},decrementHealth:function(e){e.campaign&&"number"===typeof e.campaign.currentHealth&&e.campaign.currentHealth--}},plugins:[S.plugin]}),E=C,P=n("f309");a["a"].use(P["a"]);var $=new P["a"]({theme:{dark:!0,themes:{light:{primary:"#9E2A2B",secondary:"#CC3E40",accent:"#E09F3E",background:"#FFFFFF"},dark:{primary:"#9E2A2B",secondary:"#CC3E40",accent:"#E09F3E",background:"#121212"}}}});a["a"].config.productionTip=!1,new a["a"]({router:T,store:E,vuetify:$,render:function(e){return e(v)}}).$mount("#app")},dbea:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return s}));var a=n("bee2"),i=n("d4ec"),r=(n("b0c0"),n("a4d3"),n("e01a"),n("a434"),n("159b"),n("6062"),n("d3b7"),n("3ca3"),n("ddb0"),function e(t){Object(i["a"])(this,e),this.id=t.id,this.name=t.name,this.description=t.description,this.icon=t.icon,this.sellValue=t.sellValue||-1,this.buyValue=t.buyValue||-1,this.use=t.use,this.secret=t.secret||!1}),o=[new r({id:"0",name:"Frikandelbroodje",description:"A delightful meal. The only true superfood, suitable for consumption at any time, at any place.",icon:n("752d"),sellValue:5e3,buyValue:10,use:function(e){e.currentHealth!==e.totalHealth&&(e.currentHealth++,e.inventory.decrement("0"))},secret:!0}),new r({id:"1",name:"Pouch of silica",description:"A pouch full of silica. Use to get anywhere between 1000 and 100000 silica",icon:n("3d3d"),sellValue:-1,buyValue:1,use:function(e){e.balance+=Math.floor(1e5*Math.random()),e.inventory.decrement("1")}})];function c(e){for(var t=0;t<o.length;t++)if(o[t].id===e)return o[t]}var s=function(){function e(t){Object(i["a"])(this,e),this.items=t?t.items:new Array}return Object(a["a"])(e,[{key:"add",value:function(e,t){if(!(e in o))throw new Error("item id doesn't exist");for(var n=0;n<this.items.length;n++)if(this.items[n].id===e){if(this.items[n].amount+t<0)throw new Error("operation would cause negative amount of items");return this.items[n].amount+=t,void(0===this.items[n].amount&&this.items.splice(n,1))}if(t<0)throw new Error("operation would cause negative amount of items");this.items.push({id:e,amount:t})}},{key:"getItemAmount",value:function(e){if(!(e in o))throw new Error("item id doesn't exist");for(var t=0;t<this.items.length;t++)if(this.items[t].id===e)return this.items[t].amount;return 0}},{key:"hasItem",value:function(e){return this.getItemAmount(e)>0}},{key:"getItems",value:function(){return this.items}},{key:"increment",value:function(e){this.add(e,1)}},{key:"decrement",value:function(e){this.add(e,-1)}},{key:"validate",value:function(){var e=new Array;return this.items.forEach((function(t){e.push(t.id)})),!(new Set(e).size<e.length)&&(this.items.forEach((function(e){if(e.amount<0)return!1})),!0)}}]),e}()},fcca:function(e,t,n){}});