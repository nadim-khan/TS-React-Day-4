!function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=React},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),u=n(2),o=n(3);u.render(r.createElement(o.default,{userType:"admin",username:"h4x0r"}),document.getElementById("example"))},function(e,t){e.exports=ReactDOM},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0),u=n(4);t.default=({userType:e,username:t})=>r.createElement("div",{className:"App"},r.createElement("p",null,"Hi, ",t||"Mysterious Entity",", your user type is ",t?e:"irrelevant because I do not know you","."),r.createElement("hr",null),r.createElement("div",null,r.createElement(u.default,{countBy:3})))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=n(0);class u extends r.Component{constructor(){super(...arguments),this.state={count:0},this.increase=()=>{const e=this.props.countBy,t=this.state.count+e;this.setState({count:t})}}render(){return r.createElement("div",null,r.createElement("p",null,"My Favoute Number ",this.state.count),r.createElement("button",{onClick:this.increase},"Increase by ",this.props.countBy))}}u.defaultProps={countBy:1},t.default=u}]);
//# sourceMappingURL=main.js.map