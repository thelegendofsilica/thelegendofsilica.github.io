(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["campaign"],{"0e79":function(t,a,e){t.exports=e.p+"img/heart-color.acf65f2f.svg"},"10c7":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[t.campaign?i("div",{staticClass:"campaign"},[i("v-navigation-drawer",{style:{background:t.$vuetify.theme.currentTheme.background},attrs:{permanent:""}},[i("v-list-item",[i("v-list-item-content",[i("div",{staticClass:"character-information"},[i("div",[i("div",{staticClass:"name text-subtitle-2"},[t._v(" "+t._s(t.campaign.characterName)+" ")]),i("div",{staticClass:"name text-caption",domProps:{innerHTML:t._s(t.campaign.balanceFormatHTML())}}),i("div",{staticClass:"health"},t._l(t.campaign.totalHealth,(function(a){return i("div",{key:a,staticClass:"heart"},[t.campaign.currentHealth>=a?i("img",{attrs:{src:e("0e79"),alt:"heart"}}):i("img",{staticStyle:{opacity:"35%"},attrs:{src:e("fbe8"),alt:"no heart"}})])})),0)]),"primate"===t.campaign.characterClass?i("img",{staticClass:"class-icon",attrs:{src:e("ffdb"),alt:"primate"}}):t._e(),"berserker"===t.campaign.characterClass?i("img",{staticClass:"class-icon",attrs:{src:e("a9d9"),alt:"berserker"}}):t._e(),"shaman"===t.campaign.characterClass?i("img",{staticClass:"class-icon",attrs:{src:e("c46e"),alt:"shaman"}}):t._e()])])],1),i("v-divider"),i("v-list-item",[i("v-list-item-content",[i("div",{staticClass:"text-overline"},[t._v("Inventaris")]),0===t.campaign.inventory.getItems().length?i("div",{staticClass:"text-caption text--secondary"},[t._v(" Jouw invtaris is leeg ")]):t._e(),i("div",{staticClass:"inventory"},t._l(t.campaign.inventory.getItems(),(function(a,e){return i("v-menu",{key:e,attrs:{"offset-y":"","open-on-hover":""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,n=e.attrs;return[i("div",t._g(t._b({staticClass:"item",on:{click:function(e){t.getItem(a.id).emit(t.campaign)}}},"div",n,!1),s),[i("img",{attrs:{src:t.getItem(a.id).icon}}),i("div",{staticClass:"amount text-caption",style:{background:t.$vuetify.theme.currentTheme.background}},[t._v(" "+t._s(a.amount)+" ")])])]}}],null,!0)},[i("v-card",{attrs:{"max-width":"300px"}},[i("v-card-title",[t._v(t._s(t.getItem(a.id).name)+" ("+t._s(a.amount)+")")]),i("v-card-subtitle",[t._v(t._s(t.getItem(a.id).description))]),i("v-divider"),void 0!==t.getItem(a.id).use?i("v-card-subtitle",[t._v("Klik om te gebruiken")]):t._e()],1)],1)})),1)])],1),i("v-list-item",{staticClass:"back-to-menu"},[i("v-list-item-content",[i("v-btn",{on:{click:function(a){return t.$router.push("/menu")}}},[t._v(" Terug naar menu ")])],1)],1)],1),i("div",{staticClass:"main"},[i("div",{staticClass:"quests"},[i("div",{staticClass:"text-h5 title"},[t._v("Quests")]),i("div",{staticClass:"quest-cards"},t._l(t.quests,(function(a,e){return i("v-card",{key:e,staticClass:"quest",attrs:{disabled:!a.fulfillsPrerequisites(t.campaign)||t.campaign.completedQuestIds.indexOf(a.id)>-1},on:{click:function(e){return t.startQuest(a.id)}}},[i("v-card-title",[t.campaign.completedQuestIds.indexOf(a.id)>-1?i("i",{staticClass:"mdi mdi-check success--text"}):t._e(),i("span",[t._v(t._s(a.title))]),a.fulfillsPrerequisites(t.campaign)?t._e():i("i",{staticClass:"mdi mdi-lock"})]),i("v-card-subtitle",[t._v(t._s(a.description))]),i("v-card-text",[a.prerequisites.length?i("span",{staticClass:"text--primary"},[i("strong",[t._v("Benodigdheden")])]):i("p",[t._v("Geen benodigdheden")]),t._l(a.prerequisites,(function(a,e){return i("div",{key:e,staticClass:"prerequisite"},[a.isFulfilled(t.campaign)?i("i",{staticClass:"mdi mdi-check success--text"}):i("i",{staticClass:"mdi mdi-close error--text"}),i("span",{staticClass:"text--primary"},[t._v(t._s(a.title))])])}))],2),i("v-card-actions",[i("div",{staticClass:"text--primary reward",domProps:{innerHTML:t._s(a.rewardFormatHTML())}}),i("v-spacer"),i("v-btn",{attrs:{text:""}},[t._v(t._s(t.campaign.completedQuestIds.indexOf(a.id)>-1?"Al voltooid":"Starten"))])],1)],1)})),1)]),i("div",{staticClass:"shop"},[i("div",{staticClass:"text-h5 title"},[t._v("Winkel")]),i("div",{staticClass:"item-cards"},t._l(t.shopItems,(function(a,e){return i("div",{key:e,staticClass:"item"},[i("img",{attrs:{src:a.icon}}),i("div",{staticClass:"name"},[i("strong",[t._v(t._s(a.name))])]),i("div",{staticClass:"value text--secondary text-caption"},[t._v(" Kopen: "+t._s(-1!==a.buyValue?a.buyValue:"N/A")+" Verkopen: "+t._s(-1!==a.sellValue?a.sellValue:"N/A")+" ")]),i("div",{staticClass:"description text--secondary"},[t._v(t._s(a.description))]),i("div",{staticClass:"actions"},[i("v-btn",{attrs:{text:"",disabled:-1===a.sellValue||!t.campaign.inventory.hasItem(a.id)},on:{click:function(e){return t.sell(a.id)}}},[t._v("Verkopen")]),i("v-btn",{attrs:{text:"",disabled:-1===a.buyValue||t.campaign.balance<a.buyValue},on:{click:function(e){return t.buy(a.id)}}},[t._v("Kopen")])],1)])})),0)])])],1):t._e(),i("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.didNotFindCampaignDialog,callback:function(a){t.didNotFindCampaignDialog=a},expression:"didNotFindCampaignDialog"}},[i("v-card",[i("v-card-title",[t._v("Kon campagne niet vinden")]),i("v-card-text",[t._v(" Dit kan te wijten zijn aan een fout of aan een poging om rechtstreeks toegang te krijgen tot dit eindpunt. ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{text:""},on:{click:function(a){return t.$router.push("/menu")}}},[t._v("Terug naar menu")])],1)],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.invalidCampaignDialog,callback:function(a){t.invalidCampaignDialog=a},expression:"invalidCampaignDialog"}},[i("v-card",[i("v-card-title",[t._v("Er is iets mis gegaan")]),i("v-card-text",[t._v(" Er is een fout opgetreden bij het herstellen van de voortgang van uw vorige campagne. Dit kan zijn veroorzaakt door een bug of door gegevensbeschadiging. ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{text:""},on:{click:function(a){return t.$router.push("/menu")}}},[t._v("Terug to menu")])],1)],1)],1)],1)},s=[],n=e("dbea"),c=e("a181"),r={name:"Campaign",data:function(){return{campaign:void 0,didNotFindCampaignDialog:!1,invalidCampaignDialog:!1,quests:c["b"],getItem:n["b"]}},computed:{characterClassIconFill:function(){return this.$vuetify.theme.dark?"#ffffff":"#000000"},shopItems:function(){for(var t=[],a=0;a<n["c"].length;a++)n["c"][a].secret||-1===n["c"][a].buyValue&&-1===n["c"][a].sellValue||t.push(n["c"][a]);return t}},methods:{buy:function(t){-1===Object(n["b"])(t).buyValue||Object(n["b"])(t).buyValue>this.campaign.balance||(this.campaign.inventory.increment(t),this.campaign.balance-=Object(n["b"])(t).buyValue)},sell:function(t){this.campaign.inventory.hasItem(t)&&(this.campaign.inventory.decrement(t),this.campaign.balance+=Object(n["b"])(t).sellValue)},startQuest:function(t){this.campaign.currentQuestProgress={id:t,startTime:new Date},this.$router.push("/quest")}},created:function(){var t=this;this.$store.state.campaign?this.$store.state.campaign.validate?(this.campaign=this.$store.state.campaign,this.campaign.validate()?(this.campaign.completedQuestIds.length===c["b"].length&&this.$router.push("/game-completed"),""!==this.campaign.currentQuestProgress.id&&this.$router.push("/quest"),this.$nextTick((function(){document.title="".concat(t.campaign.characterName," | Campaign - The Legend of Silica")})),window.frikandelbroodje=function(a){t.campaign.inventory.add("0",a)}):this.invalidCampaignDialog=!0):this.invalidCampaignDialog=!0:this.didNotFindCampaignDialog=!0},watch:{campaign:{handler:function(){if(0===this.campaign.currentHealth)return this.$router.push("/game-over"),void this.$store.commit("setCampaign",void 0);this.$store.commit("setCampaign",this.campaign)},deep:!0}}},o=r,l=(e("d931"),e("2877")),d=e("6544"),u=e.n(d),m=e("8336"),v=e("b0af"),g=e("99d9"),p=e("169a"),h=e("ce7e"),f=e("da13"),b=e("5d23"),C=e("e449"),_=e("f774"),x=e("2fa4"),k=Object(l["a"])(o,i,s,!1,null,"628d31be",null);a["default"]=k.exports;u()(k,{VBtn:m["a"],VCard:v["a"],VCardActions:g["a"],VCardSubtitle:g["b"],VCardText:g["c"],VCardTitle:g["d"],VDialog:p["a"],VDivider:h["a"],VListItem:f["a"],VListItemContent:b["a"],VMenu:C["a"],VNavigationDrawer:_["a"],VSpacer:x["a"]})},a9d9:function(t,a,e){t.exports=e.p+"img/berserker.1ec7c721.svg"},c46e:function(t,a,e){t.exports=e.p+"img/shaman.626584fa.svg"},d931:function(t,a,e){"use strict";e("ed61")},ed61:function(t,a,e){},fbe8:function(t,a,e){t.exports=e.p+"img/heart.01284649.svg"},ffdb:function(t,a,e){t.exports=e.p+"img/primate.00132bf5.svg"}}]);