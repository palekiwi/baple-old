webpackJsonp([67393725367651],{212:function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}function i(e,n){return e.raw=n,e}var l=i(["\n  width: 80px;\n"],["\n  width: 80px;\n"]),c=i(["\n  color: ",";\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n"],["\n  color: ",";\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n"]),s=i(["\n  margin: 1%;\n  padding: 1em;\n  cursor: pointer;\n  position: relative;\n  border-radius: 4px;\n  background: rgba(255,255,255,0.9);\n  display: flex;\n  flex-basis: 30%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  @media "," {\n  }\n"],["\n  margin: 1%;\n  padding: 1em;\n  cursor: pointer;\n  position: relative;\n  border-radius: 4px;\n  background: rgba(255,255,255,0.9);\n  display: flex;\n  flex-basis: 30%;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  @media "," {\n  }\n"]),u=i(["\n  position: relative;\n  background: black;\n  min-height: calc(100vh - 64px);\n  display: flex;\n  align-items: center;\n"],["\n  position: relative;\n  background: black;\n  min-height: calc(100vh - 64px);\n  display: flex;\n  align-items: center;\n"]),p=i(["\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  overflow: hidden;\n"],["\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  overflow: hidden;\n"]),f=i(["\n  background: rgba(0,0,0,0.8);\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n"],["\n  background: rgba(0,0,0,0.8);\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n"]),d=i(["\n  display: flex;\n  flex-flow: row wrap;\n  margin: 0 auto;\n  width: 80%;\n  justify-content: center;\n"],["\n  display: flex;\n  flex-flow: row wrap;\n  margin: 0 auto;\n  width: 80%;\n  justify-content: center;\n"]);Object.defineProperty(n,"__esModule",{value:!0});var b=t(1),h=t(9),g=t(18),m=t(69),y=t(56),w="white",v=h.default(m.default)(l),x=(h.default.h3(c,w),h.default(y.default)(s,g.device.tablet)),k=function(e){var n=e.lang,t=e.home,o=(e.label,e.logo);return b.createElement(x,{home:t,lang:n},b.createElement(v,{sizes:o.sizes}))},j=h.default.div(u),E=h.default.div(p),_=h.default.div(f),O=h.default.div(d),P={},C=function(e){function n(){o(this,n);var t=r(this,e.apply(this,arguments));return t.state=P,t}return a(n,e),n.prototype.render=function(){var e=this;return console.log(this.props.background),b.createElement(j,null,b.createElement(E,null,b.createElement(m.default,{sizes:this.props.background.sizes}),b.createElement(_,null)),b.createElement(O,null,this.props.sections.map(function(n,t){return b.createElement(k,{key:t,label:n.label,home:n.home,logo:n.logo.childImageSharp,lang:e.props.lang})})))},n}(b.Component);n.default=C},213:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(212);n.default=o.default},56:function(e,n,t){"use strict";function o(e,n){return e.raw=n,e}var r=o(["\n  text-decoration: none;\n"],["\n  text-decoration: none;\n"]);Object.defineProperty(n,"__esModule",{value:!0});var a=t(1),i=t(9),l=t(70),c=function(e){var n=e.className,t=e.lang,o=e.to,r=e.children,i=e.onClick;return a.createElement(l.default,{className:n,onClick:i,to:"/"+t+o},r)},s=i.default(c)(r);n.default=s},236:function(e,n,t){"use strict";function o(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function a(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),l=t(213),c=function(e){function n(){return o(this,n),r(this,e.apply(this,arguments))}return a(n,e),n.prototype.render=function(){this.props.data;return console.log(this.props.data.background),i.createElement(l.default,{sections:this.props.data.pagesYaml.navigation.en,background:this.props.data.background,lang:"en"})},n}(i.Component);n.default=c,n.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-en-index-tsx-39e07d1261fa3fbdd94e.js.map