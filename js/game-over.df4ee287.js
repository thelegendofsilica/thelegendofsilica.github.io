(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game-over","campaign.new-campaign"],{"010f":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return u}));var i=n("262e"),a=n("2caf"),r=n("d4ec"),s=n("bee2"),o=(n("a4d3"),n("e01a"),function(){function e(t,n){var i;Object(r["a"])(this,e),this.type=n,this.title=t.title,this.description=t.description,this.id=t.id,this.prerequisites=[],null!==(i=t.prerequisites)&&void 0!==i&&i.length&&(this.prerequisites=t.prerequisites),this.secret=!1,void 0!=t.secret&&(this.secret=t.secret),this.baseDuration=t.baseDuration,this.baseReward=t.baseReward,this.image=t.image,this.onStart=t.onStart}return Object(s["a"])(e,[{key:"finalReward",value:function(e){var t=this.baseReward+(4-e.difficulty)*this.baseReward*.2;return"berserker"===e.characterClass&&(t*=1.4),"shaman"===e.characterClass&&(t*=.65),t}},{key:"finalDuration",value:function(e){var t=this.baseDuration*Math.pow(.9,e.difficulty);return"berserker"===e.characterClass&&(t*=.6),t}},{key:"fulfillsPrerequisites",value:function(e){for(var t=0;t<this.prerequisites.length;t++)if(!this.prerequisites[t].isFulfilled(e))return!1;return!0}}],[{key:"formatDuration",value:function(e){var t=Math.floor(e/6e4),n=Math.round((e-6e4*t)/1e3);return n>9?t+":"+n:t+":0"+n}}]),e}()),c=function(e){Object(i["a"])(n,e);var t=Object(a["a"])(n);function n(e){var i;return Object(r["a"])(this,n),i=t.call(this,e,"open"),i.question=e.question,i.elaboration=e.elaboration,i.answer=e.answer,i.selfGraded=e.selfGraded,i}return n}(o),l=function(e){Object(i["a"])(n,e);var t=Object(a["a"])(n);function n(e){var i;return Object(r["a"])(this,n),i=t.call(this,e,"multi"),i.question=e.question,i.answer=e.answer,i.incorrectAnswers=e.incorrectAnswers,i.options=i.incorrectAnswers,i.options.push(i.answer),e.randomiseOrder&&(i.options=i.options.sort((function(){return Math.random()-.5}))),i}return n}(o),d=[new l({id:"0",title:"Starter quest",description:"",question:"In welke 2 vormen komt silica voor?",answer:"Kwarts en opaal",incorrectAnswers:["Phylliet en leisteen","Basalt en graniet","Helleflint en amfiboliet"],randomiseOrder:!0,baseDuration:6e4,baseReward:20}),new l({id:"1",title:"Silica op micro niveau",description:"",question:"Welke letter behoort tot opaal?",answer:"B",incorrectAnswers:["A"],prerequisites:[{title:"Bezit een microscoop",secret:!1,isFulfilled:function(e){return e.inventory.hasItem("1")}}],baseDuration:1e5,baseReward:500,image:n("8fdc")}),new l({id:"2",title:"Silica tekenen",description:"",question:"Teken de structuurformule van silicium met zuurstof op papier en beredeneer de ruimtelijke bouw.",answer:"Tetraëder",incorrectAnswers:["Plat vlak","Lineair"],randomiseOrder:!0,baseDuration:3e5,baseReward:200}),new c({id:"3",title:"Fytolieten",description:"",question:"Wat is de functie van fytolieten?",elaboration:"Beschrijf de functie van fytolieten in planten en geef ook aan hoe de vorm kan verschillen.",answer:"Fytolieten zijn biomineralen die een plant stugger en harder maken. \nOok vormen ze zich aan de omgeving waarin ze zich bevinden waardoor de vorm per plantensoort kan verschillen.",selfGraded:!0,baseDuration:18e4,baseReward:400}),new c({id:"4",title:"Diatomeeënen in de Silicakringloop",description:"",question:"Leg uit welke rol diatomeeën in de silicakringloop spelen.",answer:"Diatomeeën maken van opaal in het water een skelet wat als ze doodgaan weer oplost en wordt hergebruikt of op de zeebodem blijft. ",selfGraded:!0,baseDuration:18e4,baseReward:300}),new c({id:"5",title:"De rol van de Grand Canyon",description:"Een erg GROTE rol :)",question:"Leg uit hoe de grand canyon rivier een belangrijke rol heeft gespeelt in de silicakringloop.",answer:"Een belangrijk onderdeel van de kringloop is verwering van steen op het land en deze rivier heeft over de koers van miljoenen jaren de grand canyon uit steen gesneden.",selfGraded:!0,prerequisites:[{title:"Een vliegtuig ticket",secret:!1,isFulfilled:function(e){return e.inventory.hasItem("2")}}],baseDuration:18e4,baseReward:350,onStart:function(e){e.inventory.decrement("2")}}),new c({id:"6",title:"Iew er zitten fytolieten onder mijn schoen",description:"Waar komen die nou vandaan?",question:"Waarom is het zeer waarschijnlijk dat je in de herfst fytolieten onder je schoenen kunt vinden?",answer:"Omdat de bladeren en naalden van bomen in de herfst loslaten en deze worden afgebroken door bacteriën blijven de fytolieten liggen.",selfGraded:!0,baseDuration:12e4,baseReward:325,prerequisites:[{title:"Een borstel",secret:!1,isFulfilled:function(e){return e.inventory.hasItem("5")}}]}),new c({id:"7",title:"Biologen ook altijd",description:"Speciaal voor meneer Soetens",question:"Waarom zou meneer Soetens de nieuwe silicakringloop leuker vinden om te bestuderen?",answer:"Omdat in de oude kringloop “dood” was en geen biologische processen bevatte.",selfGraded:!0,baseDuration:12e4,baseReward:275}),new c({id:"8",title:"Wie heeft er gelijk",description:"Een titanenstrijd van een vraag",question:"Mevrouw Fallet zegt als geoloog dat stenen de belangrijkste rol vervullen in de nieuwe silicakringloop. \nMeneer Soetens echter als bioloog is van mening dat er in de biologische kringloop meer silica omgaat. \nWie heeft er gelijk?",answer:"Meneer Soetens heeft gelijk, in de biologische kringloop wordt geschat 10 keer zoveel silica te zijn.",selfGraded:!0,baseDuration:12e4,baseReward:500}),new c({id:"9",title:"Silica in bomen?",description:"Eindelijk een rekenvraag",question:"Er is een gigantische boom aangetroffen in het midden van het regenwoud met 0,5 Tmol silica erin. \nDe begraving tijd is 150 Mmol wat is de verblijftijd van deze boom?",answer:"500.000 / 150 ≈ 3333 jaar",selfGraded:!0,prerequisites:[{title:"Een bijl",secret:!1,isFulfilled:function(e){return e.inventory.hasItem("3")}}],baseDuration:3e5,baseReward:120}),new l({id:"10",title:"De reiziger",description:"",question:"Zou iemand die veel van rondreizen houd liever silica zijn in de nieuw of de oude silicakringloop?",answer:"De oude kringloop",incorrectAnswers:["De nieuwe kringloop"],randomiseOrder:!0,baseDuration:6e4,prerequisites:[{title:"Een kompas",secret:!1,isFulfilled:function(e){return e.inventory.hasItem("4")}}],baseReward:100}),new l({id:"11",title:"BIF's",description:"",question:"Waar bestaan BIF's uit?",answer:"Allemaal",incorrectAnswers:["Magnetite = Fe3O4","Hematite = Fe2O3","Siderite = Fe(CO)2)","Silicate minerals like chert (SiO2)","Geen van allen"],baseDuration:6e4,baseReward:100}),new l({id:"12",title:"Hoe zien BIF's er uit",description:"Niemand weet het",question:"Waar zie je een BIF?",answer:"C",incorrectAnswers:["A","B"],baseDuration:6e4,baseReward:320,image:n("6ad1")}),new l({id:"13",title:"BIF steen",description:"Stenen",question:"Wat voor soort steen is een BIF?",answer:"Sedimentair gesteente",incorrectAnswers:["Metamorfisch gesteente","Stollingsgesteente"],randomiseOrder:!0,baseDuration:6e4,baseReward:125}),new l({id:"14",title:"Silica en BIF's",description:"",question:"Welke rol speelt silica in BIF's?",answer:"Silica vormt de kaart van BIF's",incorrectAnswers:["Silica heeft samen met aluminium een korte affaire gehad en daardoor zijn BIF's ontstaan.","Silica buigt ijzer om BIF's te vormen"],randomiseOrder:!0,baseDuration:8e4,baseReward:215}),new l({id:"15",title:"Klimaatverandering goed?",description:"",question:"Waarom is voor planten een verhoogde concentratie CO2 niet per se erg?",answer:"Meer voedsel yummy",incorrectAnswers:["Een verhoogde CO2-concentratie brengt silica naar boven uit de grond waardoor planten harder worden.","CO2 reageert in zeer kleine met SO2 tot een zeer vruchtbare ondergrond voor planten."],randomiseOrder:!0,baseDuration:1e5,baseReward:225}),new c({id:"16",title:"Huh, hoe heette je ook alweer?",description:"",question:"Waar halen de C3 en C4 fotosynthese systemen hun naam vandaan?",answer:"Deze namen komen van het aantal koolstof dat ontstaat.",selfGraded:!0,baseDuration:1e5,baseReward:215}),new c({id:"17",title:"Nog steeds onduidelijk",description:"",question:"Geef 2 mogelijke redenen waarom de dominante vorm van fotosynthese overging van C3 naar C4 en weerleg deze redenen ook.",answer:"Reden 1 is dat de CO2 concentratie afnam waardoor C4 fotosynthese gunstiger was voor de planten echter is er geen bewijs gevonden voor een afname in CO2 maar wel voor een constante waarde.\nReden 2 is dat de moesson sterker werd wat gunstig zou zijn voor C4 grassen, maar in de amerika’s zijn helemaal geen moessons en ook hier zijn C4 grassen geëvolueerd.\n",selfGraded:!0,baseDuration:18e4,baseReward:150}),new l({id:"18",title:"Grassen zijn supersnel",description:"",question:"Waarom zijn grassen toen ze eenmaal geëvolueerd waren zo snel verspreid?",answer:"Omdat grassen veel sneller nieuw gevormde grond kunnen begroeien.",incorrectAnswers:["Omdat eikels van een boom maar een bepaalde afstand kunnen vallen.","Omdat grassen in veel slechtere omstandigheden kunnen groeien."],randomiseOrder:!0,baseDuration:8e4,baseReward:130})];function u(e){for(var t=0;t<d.length;t++)if(d[t].id===e)return d[t]}},"0e79":function(e,t,n){e.exports=n.p+"img/heart-color.acf65f2f.svg"},2061:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.campaign?i("div",{staticClass:"quest"},[i("v-navigation-drawer",{style:{background:e.$vuetify.theme.currentTheme.background},attrs:{permanent:""}},[i("v-list-item",[i("v-list-item-content",[i("div",{staticClass:"character-information"},[i("div",[i("div",{staticClass:"name text-subtitle-2"},[e._v(" "+e._s(e.campaign.characterName)+" ")]),i("div",{staticClass:"name text-caption",domProps:{innerHTML:e._s(e.campaign.balanceFormatHTML())}}),i("div",{staticClass:"health"},e._l(e.campaign.totalHealth,(function(t){return i("div",{key:t,staticClass:"heart"},[e.campaign.currentHealth>=t?i("img",{attrs:{src:n("0e79"),alt:"heart"}}):i("img",{staticStyle:{opacity:"35%"},attrs:{src:n("fbe8"),alt:"no heart"}})])})),0)]),"primate"===e.campaign.characterClass?i("img",{staticClass:"class-icon",attrs:{src:n("ffdb"),alt:"primate"}}):e._e(),"berserker"===e.campaign.characterClass?i("img",{staticClass:"class-icon",attrs:{src:n("a9d9"),alt:"berserker"}}):e._e(),"shaman"===e.campaign.characterClass?i("img",{staticClass:"class-icon",attrs:{src:n("c46e"),alt:"shaman"}}):e._e()])])],1),i("v-divider"),i("v-list-item",[i("v-list-item-content",[i("div",{staticClass:"character-information"},[i("div",[i("div",{staticClass:"name text-subtitle-2"},[e._v("Tijd resterend: "+e._s(e.formatDuration(e.remainingDuration)))])])])])],1),i("v-divider"),i("v-list-item",[i("v-list-item-content",[i("div",{staticClass:"text-overline"},[e._v("Inventaris")]),0===e.campaign.inventory.getItems().length?i("div",{staticClass:"text-caption text--secondary"},[e._v(" Uw inventaris is leeg ")]):e._e(),i("div",{staticClass:"inventory"},e._l(e.campaign.inventory.getItems(),(function(t,n){return i("v-menu",{key:n,attrs:{"offset-y":"","open-on-hover":""},scopedSlots:e._u([{key:"activator",fn:function(n){var a=n.on,r=n.attrs;return[i("div",e._g(e._b({staticClass:"item",on:{click:function(n){e.getItem(t.id).emit(e.campaign)}}},"div",r,!1),a),[i("img",{attrs:{src:e.getItem(t.id).icon}}),i("div",{staticClass:"amount text-caption",style:{background:e.$vuetify.theme.currentTheme.background}},[e._v(" "+e._s(t.amount)+" ")])])]}}],null,!0)},[i("v-card",{attrs:{"max-width":"300px"}},[i("v-card-title",[e._v(e._s(e.getItem(t.id).name)+" ("+e._s(t.amount)+")")]),i("v-card-subtitle",[e._v(e._s(e.getItem(t.id).description))]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{text:"",disabled:!e.getItem(t.id).canUse(e.campaign)},on:{click:function(n){return e.use(t.id)}}},[e._v("Gebruiken")])],1)],1)],1)})),1)])],1),i("v-list-item",{staticClass:"end-quest"},[i("v-list-item-content",[i("v-btn",{on:{click:function(t){e.confirmEndQuestDialog=!0}}},[e._v(" Quest beëindigen ")])],1)],1)],1),i("div",{staticClass:"quest-content"},[i("div",{staticClass:"text-h5 title"},[e._v(e._s(e.quest.title))]),i("div",{staticClass:"text-body-1 question"},[e._v(e._s(e.quest.question))]),"multi"===e.quest.type?i("v-radio-group",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}},e._l(e.quest.options,(function(e,t){return i("v-radio",{key:t,attrs:{label:e,value:e}})})),1):e._e(),"open"===e.quest.type?i("div",[i("div",{staticClass:"text-body-1 text--secondary elaboration"},[e._v(e._s(e.quest.elaboration))]),i("v-textarea",{staticClass:"textarea",attrs:{disabled:e.submitted,solo:"",name:"input-7-4",label:"Typ hier uw antwoord..."},model:{value:e.answerText,callback:function(t){e.answerText=t},expression:"answerText"}})],1):e._e(),void 0!==e.quest.image?i("v-flex",{staticStyle:{"margin-left":"50%"},attrs:{xs12:"",sm6:"","offset-sm3":""}},[i("v-card",[i("v-img",{attrs:{src:e.quest.image,"aspect-ratio":"2.75"}})],1)],1):e._e(),i("v-btn",{staticClass:"submit-btn",attrs:{disabled:!e.canSubmit(),color:"primary"},on:{click:e.submit}},[e._v("Doorgaan")])],1)],1):e._e(),i("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:e.incorrectAnswerDialog,callback:function(t){e.incorrectAnswerDialog=t},expression:"incorrectAnswerDialog"}},[i("v-card",[i("v-card-title",[e._v("Helaas, dat was niet het juiste antwoord")]),i("v-card-text",[e._v("U bent één leven verloren. Het juiste antwoord was: "+e._s(e.quest.answer)+" ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{text:""},on:{click:function(t){return e.$router.push("/campaign")}}},[e._v("Quest beëindigen")])],1)],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:e.correctAnswerDialog,callback:function(t){e.correctAnswerDialog=t},expression:"correctAnswerDialog"}},[i("v-card",[i("v-card-title",[e._v("Correct!")]),i("v-card-text",[e._v(" Uw antwoord was correct. U heeft een beloning van "+e._s(e.balanceNumberFormatter.format(e.quest.finalReward(e.campaign)))+" "),i("span",{domProps:{innerHTML:e._s(e.currencyHTML)}}),e._v(" ontvangen. ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{text:""},on:{click:function(t){return e.$router.push("/campaign")}}},[e._v("Quest beëindigen")])],1)],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:e.selfGradeDialog,callback:function(t){e.selfGradeDialog=t},expression:"selfGradeDialog"}},[i("v-card",[i("v-card-title",[e._v("Antwoord nakijken")]),i("v-card-text",[i("div",[i("strong",[e._v("Uw antwoord")])]),i("div",[e._v(e._s(e.answerText))]),i("br"),i("div",[i("strong",[e._v("Juiste antwoord")])]),i("div",[e._v(e._s(e.quest.answer))])]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{text:""},on:{click:function(){e.failQuest(),e.$router.push("/campaign")}}},[e._v("Onjuist")]),i("v-btn",{attrs:{text:""},on:{click:function(){e.completeQuest(),e.$router.push("/campaign")}}},[e._v("Juist")])],1)],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:e.confirmEndQuestDialog,callback:function(t){e.confirmEndQuestDialog=t},expression:"confirmEndQuestDialog"}},[i("v-card",[i("v-card-title",[e._v("Weet u het zeker?")]),i("v-card-text",[e._v("Als u de quest nu beëindigt, verliest u een leven.")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{text:""},on:{click:function(t){e.confirmEndQuestDialog=!1}}},[e._v("Annuleren")]),i("v-btn",{attrs:{text:""},on:{click:function(){e.failQuest(),e.$router.push("/campaign")}}},[e._v("Beëindigen")])],1)],1)],1),i("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:e.outOfTimeDialog,callback:function(t){e.outOfTimeDialog=t},expression:"outOfTimeDialog"}},[i("v-card",[i("v-card-title",[e._v("De tijd is op!")]),i("v-card-text",[e._v("U bent één leven verloren omdat u niet op tijd heeft geantwoord. Het juiste antwoord was: "+e._s(e.quest.answer)+" ")]),i("v-card-actions",[i("v-spacer"),i("v-btn",{attrs:{text:""},on:{click:function(t){return e.$router.push("/campaign")}}},[e._v("Quest beëindigen")])],1)],1)],1)],1)},a=[],r=n("010f"),s=n("7296"),o=n("dbea"),c={name:"Quest",data:function(){return{campaign:void 0,quest:void 0,startTime:void 0,remainingDuration:void 0,remainingDurationPolling:void 0,getItem:o["b"],formatDuration:r["a"].formatDuration,balanceNumberFormatter:s["a"].balanceNumberFormatter,currencyHTML:s["a"].currencyHTML,selected:void 0,submitted:!1,answerText:"",correctAnswerDialog:!1,incorrectAnswerDialog:!1,selfGradeDialog:!1,confirmEndQuestDialog:!1,outOfTimeDialog:!1}},methods:{completeQuest:function(){this.campaign.balance+=this.quest.finalReward(this.campaign),this.campaign.completedQuestIds.push(this.quest.id),clearInterval(this.remainingDurationPolling)},failQuest:function(){this.campaign.currentHealth--,clearInterval(this.remainingDurationPolling)},canSubmit:function(){return!this.submitted&&("multi"===this.quest.type&&void 0!=this.selected||"open"===this.quest.type&&this.answerText.length>0)},submit:function(){return this.submitted=!0,"multi"===this.quest.type?this.selected===this.quest.answer?(this.correctAnswerDialog=!0,void this.completeQuest()):(this.incorrectAnswerDialog=!0,void this.failQuest()):this.quest.selfGraded?(clearInterval(this.remainingDurationPolling),void(this.selfGradeDialog=!0)):this.answerText===this.quest.answer?(this.correctAnswerDialog=!0,void this.completeQuest()):(this.incorrectAnswerDialog=!0,void this.failQuest())},use:function(e){this.campaign.inventory.hasItem(e)&&(this.campaign.inventory.decrement(e),Object(o["b"])(e).use(this.campaign))}},created:function(){var e=this;""===this.$store.state.campaign.currentQuestProgress.id&&this.$router.push("/campaign"),this.$store.state.campaign.validate||this.$router.push("/campaign"),this.campaign=this.$store.state.campaign,this.quest=Object(r["b"])(this.$store.state.campaign.currentQuestProgress.id),this.startTime=this.$store.state.campaign.currentQuestProgress.startTime;var t=this.quest.finalDuration(this.campaign);this.remainingDurationPolling=setInterval((function(){e.remainingDuration=Math.floor(t-((new Date).getTime()-e.startTime.getTime())),e.remainingDuration<=0&&(clearInterval(e.remainingDurationPolling),e.failQuest(),e.outOfTimeDialog=!0)}),100)},beforeDestroy:function(){this.campaign.currentQuestProgress={id:"",startTime:new Date(0)},clearInterval(this.remainingDurationPolling)},watch:{campaign:{handler:function(){this.$store.commit("setCampaign",this.campaign)},deep:!0}}},l=c,d=(n("cb96"),n("2877")),u=n("6544"),m=n.n(u),v=n("8336"),g=n("b0af"),p=n("99d9"),f=n("169a"),b=n("ce7e"),h=n("0e8f"),w=n("adda"),k=n("da13"),D=n("5d23"),_=n("e449"),y=n("f774"),x=n("67b6"),q=n("43a6"),j=n("2fa4"),C=n("a844"),O=Object(d["a"])(l,i,a,!1,null,"ab54d2ea",null);t["default"]=O.exports;m()(O,{VBtn:v["a"],VCard:g["a"],VCardActions:p["a"],VCardSubtitle:p["b"],VCardText:p["c"],VCardTitle:p["d"],VDialog:f["a"],VDivider:b["a"],VFlex:h["a"],VImg:w["a"],VListItem:k["a"],VListItemContent:D["a"],VMenu:_["a"],VNavigationDrawer:y["a"],VRadio:x["a"],VRadioGroup:q["a"],VSpacer:j["a"],VTextarea:C["a"]})},"29bf":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Particles"),n("div",{staticClass:"game-over",style:{background:e.$vuetify.theme.currentTheme.background}},[n("div",{staticClass:"text-h5"},[e._v("Game over")]),n("br"),n("v-btn",{staticClass:"button",on:{click:function(t){return e.$router.push("/menu")}}},[e._v("Terug naar menu")])],1)],1)},a=[],r=n("43c7"),s={name:"GameOver",components:{Particles:r["a"]}},o=s,c=(n("921e"),n("2877")),l=n("6544"),d=n.n(l),u=n("8336"),m=Object(c["a"])(o,i,a,!1,null,"12e8060c",null);t["default"]=m.exports;d()(m,{VBtn:u["a"]})},"43c7":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"particles"}})},a=[],r=(n("572f"),{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#9e2a2b"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:3},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:.3,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:.5,direction:"top",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:1e3,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"bubble"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:539.4605394605394,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}),s={name:"Particles",mounted:function(){window.particlesJS("particles",r)}},o=s,c=(n("edfd"),n("2877")),l=Object(c["a"])(o,i,a,!1,null,"1fc32052",null);t["a"]=l.exports},"592d":function(e,t,n){},"6ad1":function(e,t,n){e.exports=n.p+"img/question12.5a6ce9b4.png"},"8fdc":function(e,t,n){e.exports=n.p+"img/question1.532d3b09.png"},"921e":function(e,t,n){"use strict";n("e835")},a9d9:function(e,t,n){e.exports=n.p+"img/berserker.1ec7c721.svg"},b81c:function(e,t,n){},c46e:function(e,t,n){e.exports=n.p+"img/shaman.626584fa.svg"},cb96:function(e,t,n){"use strict";n("592d")},e835:function(e,t,n){},edfd:function(e,t,n){"use strict";n("b81c")},fbe8:function(e,t,n){e.exports=n.p+"img/heart.01284649.svg"},ffdb:function(e,t,n){e.exports=n.p+"img/primate.00132bf5.svg"}}]);