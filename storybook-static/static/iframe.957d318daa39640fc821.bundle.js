(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{476:function(t,o){function n(t){return Promise.resolve().then(function(){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=476},547:function(t,o,n){n(242),n(548),n(549),t.exports=n(612)},549:function(t,o,n){"use strict";n.r(o),function(t){var o=n(143),e=n(607);Object(o.configure)(function(){e.keys().forEach(function(t){return e(t)})},t)}.call(this,n(328)(t))},607:function(t,o,n){var e={"./index.stories.ts":608};function r(t){var o=i(t);return n(o)}function i(t){var o=e[t];if(!(o+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return o}r.keys=function(){return Object.keys(e)},r.resolve=i,t.exports=r,r.id=607},608:function(t,o,n){"use strict";n.r(o),function(t){var o=n(143),e=n(466),r=n(199),i=n(227),c=n(145);Object(o.storiesOf)("Welcome",t).add("to Storybook",function(){return{component:c.Welcome,props:{}}}),Object(o.storiesOf)("Button",t).add("with text",function(){return{component:c.Button,props:{text:"Hello Button"}}}).add("with some emoji",Object(e.withNotes)({text:"My notes on a button with emojis"})(function(){return{component:c.Button,props:{text:"😀 😎 👍 💯"}}})).add("with some emoji and action",Object(e.withNotes)({text:"My notes on a button with emojis"})(function(){return{component:c.Button,props:{text:"😀 😎 👍 💯",onClick:Object(r.action)("This was clicked OMG")}}})),Object(o.storiesOf)("Another Button",t).add("button with link to another story",function(){return{component:c.Button,props:{text:"Go to Welcome Story",onClick:Object(i.linkTo)("Welcome")}}})}.call(this,n(328)(t))},612:function(t,o,n){var e=n(613);"string"==typeof e&&(e=[[t.i,e,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(614)(e,r);e.locals&&(t.exports=e.locals)},613:function(t,o){t.exports=[[t.i,"/* You can add global styles to this file, and also import other style files */\n","",""]]}},[[547,2,4]]]);
//# sourceMappingURL=iframe.957d318daa39640fc821.bundle.js.map