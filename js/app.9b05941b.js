(function(e){function A(A){for(var t,a,r=A[0],i=A[1],c=A[2],l=0,u=[];l<r.length;l++)a=r[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&u.push(o[a][0]),o[a]=0;for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t]);s&&s(A);while(u.length)u.shift()();return n.push.apply(n,c||[]),V()}function V(){for(var e,A=0;A<n.length;A++){for(var V=n[A],t=!0,r=1;r<V.length;r++){var i=V[r];0!==o[i]&&(t=!1)}t&&(n.splice(A--,1),e=a(a.s=V[0]))}return e}var t={},o={app:0},n=[];function a(A){if(t[A])return t[A].exports;var V=t[A]={i:A,l:!1,exports:{}};return e[A].call(V.exports,V,V.exports,a),V.l=!0,V.exports}a.m=e,a.c=t,a.d=function(e,A,V){a.o(e,A)||Object.defineProperty(e,A,{enumerable:!0,get:V})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,A){if(1&A&&(e=a(e)),8&A)return e;if(4&A&&"object"===typeof e&&e&&e.__esModule)return e;var V=Object.create(null);if(a.r(V),Object.defineProperty(V,"default",{enumerable:!0,value:e}),2&A&&"string"!=typeof e)for(var t in e)a.d(V,t,function(A){return e[A]}.bind(null,t));return V},a.n=function(e){var A=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(A,"a",A),A},a.o=function(e,A){return Object.prototype.hasOwnProperty.call(e,A)},a.p="/Simon-game/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],i=r.push.bind(r);r.push=A,r=r.slice();for(var c=0;c<r.length;c++)A(r[c]);var s=i;n.push([0,"chunk-vendors"]),V()})({0:function(e,A,V){e.exports=V("56d7")},"248a":function(e,A,V){"use strict";V("8822")},"289d":function(e,A,V){e.exports=V.p+"media/1piano-do.3eb79639.mp3"},"2cb8":function(e,A,V){"use strict";V("ae82")},"396a":function(e,A,V){"use strict";V("d869")},"488d":function(e,A,V){e.exports=V.p+"media/4piano-fa.e0e913a6.mp3"},"493b":function(e,A){e.exports="data:audio/mpeg;base64,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/XQ0F5IZ02SDoNlsXoeUtnOLbFEXPeZyydac5R4ySMgFRpZijAjMEkby8yvS9fsyJVr8bzaHFxIkF0O9NftowAAG2uAwICBf/96y9dX//f////tv7e/+/9W/b9vovRv//r/+1nnrkVMjMzVFIgmgHTwRdQIlAAyUDA5pbQ+V2HSjkOppxxr7OYFZdMwI9A0xjAbYgFQApwAAiFgGTFHBs6HHAs4sYN3CGhlg4GKSBhfQhAwCRMcZoXCkLmUQw2JlEvmlNNkqDmK5eeyLMkhNWWmbIoLdkGRQW7XuzKX+hbbdKr2UdmzXPrUgaVCgAAUC0UAADf//p//Tr////Sn////97//p/2////////uSZEwAA8VDVcViQAIyTXidoIgAW60vPvm9gABsgCODACAA///pbb89r0MikIjvGBqdRZ1ETgQAAAAAAAADhnMGRtyGYweHciRtAUcKNGGGgsPrDm7rAjBAgGLsJPmMhgqFFwVUzGQAyVyMGBDeZAGGJhxAb2jiVQZ8VmDQJEvGpRYFPTERBQUyUOL1DSuCQoaMDHhMlDkdDBwctGXoL5EIit1nLdV2gIcCCYcB1TszTtTe0+DjVmuSFsinTCVUGGs+aekMvGM3PjsPOSzGGX/k8itdaQuloUGu9ZjcFVuxavjjrs1jqzOSiP3pTupUqy6bpN3Zmr//VjjWZuig/v///8thqJz3////0s1dd/pU3/u6f////////+v2f//+XMfA6H/F1pN//hYSf/jzygAAYAAAImCEhz0feHViByqpZUsyg6zqBqru2XRcFL1IlLD5DUjhVONqVDYZyqGAhyqLqBdAIRxJEekhJ0sr1Wq2NBTqGoay0Yk891bf9rWrr+2/mvrX4tv1/9t+sF7aJQVBUGgaiUFn/lg5wad8SgqCo//7kmQ5D/OLLctnYeAAMMAYjeAIAIAAAaQAAAAgAAA0gAAABOt21ttt0CYKwoDQlBUFQVOlQViXxYGj3EQNA0e1A19YK1/EQNf/lf//5Y9wa//+CtVMQU1FMy45OS4zVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU="},"56d7":function(e,A,V){"use strict";V.r(A);V("e260"),V("e6cf"),V("cca6"),V("a79d");var t=V("7a23"),o={class:"main"},n=Object(t["d"])("h1",{class:"game-title"},"Simon game",-1);function a(e,A,V,a,r,i){var c=Object(t["l"])("Simon");return Object(t["h"])(),Object(t["c"])("div",o,[n,Object(t["f"])(c)])}var r={class:"wrapper"};function i(e,A,V,o,n,a){var i=Object(t["l"])("Playfield"),c=Object(t["l"])("Settings");return Object(t["h"])(),Object(t["c"])("div",r,[Object(t["f"])(i,{opacityToggle:n.opacityToggle,score:n.score,onSendPlayerMove:a.playerMove},null,8,["opacityToggle","score","onSendPlayerMove"]),Object(t["f"])(c,{boardInfo:n.boardInfo,isGameStarted:n.isGameStarted,score:n.score,bestScore:n.bestScore,timeDelay:n.timeDelay,currentTimeDelay:n.currentTimeDelay,onSendCurrentLevel:a.chooseLevel,onSendToggleGameState:a.toggleGameState},null,8,["boardInfo","isGameStarted","score","bestScore","timeDelay","currentTimeDelay","onSendCurrentLevel","onSendToggleGameState"])])}V("d3b7"),V("159b"),V("a15b");var c=function(e){return Object(t["j"])("data-v-476e48f6"),e=e(),Object(t["i"])(),e},s={class:"option-wrapper"},l={class:"info-bar"},u={class:"info"},d={class:"info"},p=Object(t["e"])("Best score: "),g={class:"current-info"},b={class:"game-settings"},y=c((function(){return Object(t["d"])("div",{class:"info"},"Select difficulty:",-1)})),f={class:"game-levels"},v=["onClick"];function m(e,A,V,o,n,a){var r=this;return Object(t["h"])(),Object(t["c"])("div",s,[Object(t["d"])("div",l,[Object(t["d"])("span",u,Object(t["m"])(V.boardInfo),1),Object(t["d"])("span",d,[p,Object(t["d"])("span",g,Object(t["m"])(V.bestScore),1)]),Object(t["d"])("div",b,[y,Object(t["d"])("div",f,[(Object(t["h"])(!0),Object(t["c"])(t["a"],null,Object(t["k"])(V.timeDelay,(function(e,A,V){return Object(t["h"])(),Object(t["c"])("div",{key:V,class:Object(t["g"])(["game-level",{active:r.currentTimeDelay==r.timeDelay[A]}]),onClick:function(e){return a.sendCurrentLevel(A)}},Object(t["m"])(A.toUpperCase()),11,v)})),128))])])]),Object(t["d"])("button",{class:"btn-game",onClick:A[0]||(A[0]=function(){return a.sendToggleGameState&&a.sendToggleGameState.apply(a,arguments)})},Object(t["m"])(this.isGameStarted?"Stop":"Start"),1)])}V("a9e3");var h={props:{boardInfo:{type:String,required:!0},isGameStarted:{type:Boolean,required:!0},bestScore:{type:Number,required:!0},timeDelay:{type:Object,required:!0},currentTimeDelay:{type:Number,required:!0}},methods:{sendCurrentLevel:function(e){this.$emit("sendCurrentLevel",e)},sendToggleGameState:function(){this.$emit("sendToggleGameState")}}},j=(V("248a"),V("6b0d")),O=V.n(j);const I=O()(h,[["render",m],["__scopeId","data-v-476e48f6"]]);var C=I,M={class:"main"},S={class:"field-wrapper"},G={class:"score"},U={class:"field-wrapper"};function D(e,A,V,o,n,a){return Object(t["h"])(),Object(t["c"])("div",M,[Object(t["d"])("div",S,[Object(t["d"])("div",{onClick:A[0]||(A[0]=function(e){return a.sendPlayerMove("green")}),class:Object(t["g"])(["block",{opacity:V.opacityToggle.green}]),style:{background:"green","border-radius":"300px 20px 20px 20px"}},null,2),Object(t["d"])("div",{onClick:A[1]||(A[1]=function(e){return a.sendPlayerMove("blue")}),class:Object(t["g"])(["block",{opacity:V.opacityToggle.blue}]),style:{background:"blue","border-radius":"20px 300px 20px 20px"}},null,2)]),Object(t["d"])("div",G,Object(t["m"])(V.score),1),Object(t["d"])("div",U,[Object(t["d"])("div",{onClick:A[2]||(A[2]=function(e){return a.sendPlayerMove("red")}),class:Object(t["g"])(["block",{opacity:V.opacityToggle.red}]),style:{background:"red","border-radius":"20px 20px 20px 300px"}},null,2),Object(t["d"])("div",{onClick:A[3]||(A[3]=function(e){return a.sendPlayerMove("yellow")}),class:Object(t["g"])(["block",{opacity:V.opacityToggle.yellow}]),style:{background:"yellow","border-radius":"20px 20px 300px 20px"}},null,2)])])}var k={props:{opacityToggle:{type:Object,required:!0},score:{type:Number}},methods:{sendPlayerMove:function(e){this.$emit("sendPlayerMove",e)}}};V("b8b7");const w=O()(k,[["render",D],["__scopeId","data-v-be149570"]]);var Q=w,B={components:{Playfield:Q,Settings:C},data:function(){return{opacityToggle:{green:!1,blue:!1,red:!1,yellow:!1},isGameStarted:!1,playerMoves:[],aiMoves:[],isClickable:!0,score:0,bestScore:0,boardInfo:"Press start",nextColor:{1:"green",2:"blue",3:"red",4:"yellow"},timeDelay:{easy:1100,normal:700,hard:300},currentTimeDelay:700}},methods:{toggleGameState:function(){this.isGameStarted=!this.isGameStarted,this.playerMoves.length=0,this.aiMoves.length=0,this.score=0,this.boardInfo="Press start",this.isGameStarted&&(this.boardInfo="Follow the steps",this.aiMove())},chooseLevel:function(e){this.isGameStarted||(this.currentTimeDelay=this.timeDelay[e])},playerMove:function(e){var A=this;this.isClickable&&(this.playSounds(e),this.opacityToggle[e]=!0,this.playerMoves.push(e),setTimeout((function(){A.opacityToggle[e]=!1}),250))},aiMove:function(){var e=this;this.isClickable=!1,setTimeout((function(){var A=Math.round(.5+4*Math.random());e.aiMoves.push(e.nextColor[A]),e.aiMoves.forEach((function(A,V){setTimeout((function(){e.opacityToggle[A]=!0,e.playSounds(A),setTimeout((function(){e.opacityToggle[A]=!1}),.6*e.currentTimeDelay)}),e.currentTimeDelay*(V+1))})),setTimeout((function(){e.isClickable=!0}),e.currentTimeDelay*e.aiMoves.length+500)}),300)},playSounds:function(e){var A;switch(e){case"green":A=new Audio(V("289d")),A.play();break;case"blue":A=new Audio(V("9535")),A.play();break;case"red":A=new Audio(V("eacf")),A.play();break;case"yellow":A=new Audio(V("488d")),A.play();break;case"fail":A=new Audio(V("493b")),A.play()}}},watch:{playerMoves:{handler:function(){var e=this;this.playerMoves.join(", ")==this.aiMoves.join(", ")&&this.playerMoves.length==this.aiMoves.length&&0!==this.playerMoves.length&&(this.playerMoves.length=0,this.score+=1,this.aiMove()),this.playerMoves.forEach((function(A,V){e.isGameStarted&&A!==e.aiMoves[V]&&(e.toggleGameState(),e.playSounds("fail"),e.boardInfo="Game over")}))},deep:!0},score:{handler:function(e){e>this.bestScore&&(this.bestScore=e)}}}};V("396a");const E=O()(B,[["render",i],["__scopeId","data-v-0f8ee2fe"]]);var T=E,Y={name:"App",components:{Simon:T}};V("2cb8");const x=O()(Y,[["render",a]]);var P=x;Object(t["b"])(P).mount("#app")},"65ae":function(e,A,V){},8822:function(e,A,V){},9535:function(e,A,V){e.exports=V.p+"media/2piano-re.d0b20d30.mp3"},ae82:function(e,A,V){},b8b7:function(e,A,V){"use strict";V("65ae")},d869:function(e,A,V){},eacf:function(e,A,V){e.exports=V.p+"media/3piano-mi.9ba52677.mp3"}});
//# sourceMappingURL=app.9b05941b.js.map