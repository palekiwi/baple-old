webpackJsonp([0x8ba3bb7369ad],{214:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),i=n(70),r=n(226),l=function(e){var t=(e.title,e.to),n=e.img;return a.createElement(r.Logo,null,a.createElement(i.default,{to:t},a.createElement(r.Image,{sizes:n.childImageSharp.sizes})))};t.default=l},215:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),i=n(227),r=function(e){var t=e.children;return a.createElement(i.Panes,null,a.Children.map(t,function(e,t){return a.createElement(i.Pane,{key:t},e)}))};t.default=r},222:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),i=n(224),r=n(223),l=function(e){var t=e.welcome,n=e.icons;return a.createElement("div",null,a.createElement(i.default,{content:t}),a.createElement(r.default,{content:n}))};t.default=l},223:function(e,t,n){"use strict";var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=n(134),l=n(133),o=n(214),u=n(135),c=n(80),d=function(e){var t=e.content;return i.createElement(r.default,null,i.createElement(c.Section,null,i.createElement(u.Title2,null,t.title),i.createElement(l.default,null,t.items.map(function(e,t){return i.createElement(o.default,a({key:t},e))}))))};t.default=d},224:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),i=n(215),r=n(134),l=n(80),o=n(135),u=n(228),c=n(225),d=function(e){var t=e.content;return a.createElement(r.default,null,a.createElement(i.default,null,a.createElement(c.ImageFH,{sizes:t.img.childImageSharp.sizes}),a.createElement(l.SectionCentered,null,a.createElement(c.Logo,{sizes:t.logo.childImageSharp.sizes}),a.createElement(o.Title1,null,t.title),a.createElement(u.Subtitle1,null,t.subtitle1),a.createElement(u.Subtitle1,null,t.subtitle2))))};t.default=d},134:function(e,t,n){"use strict";function a(e,t){return e.raw=t,e}var i=a(["\n  margin: 0 auto;\n\n  @media "," {\n    max-width: ",";\n    width: auto;\n  }\n\n  @media "," {\n    max-width: ",";\n    width: auto;\n  }\n\n  @media "," {\n    max-width: ",";\n    width: auto;\n  }\n"],["\n  margin: 0 auto;\n\n  @media "," {\n    max-width: ",";\n    width: auto;\n  }\n\n  @media "," {\n    max-width: ",";\n    width: auto;\n  }\n\n  @media "," {\n    max-width: ",";\n    width: auto;\n  }\n"]);Object.defineProperty(t,"__esModule",{value:!0});var r=n(9),l=n(16),o=r.default.div(i,l.device.desktop,l.widths.desktop,l.device.widescreen,l.widths.widescreen,l.device.fullhd,l.widths.fullhd);t.default=o},225:function(e,t,n){"use strict";function a(e,t){return e.raw=t,e}var i=a(["\n  max-width: 100%;\n  height: 300px;\n  @media "," {\n    height: auto;\n  }\n"],["\n  max-width: 100%;\n  height: 300px;\n  @media "," {\n    height: auto;\n  }\n"]),r=a(["\n  max-width: 100%;\n  height: 300px;\n  @media "," {\n    min-height: calc(100vh - 64px);\n  }\n"],["\n  max-width: 100%;\n  height: 300px;\n  @media "," {\n    min-height: calc(100vh - 64px);\n  }\n"]),l=a(["\n  margin: 0 auto;\n  max-width: 100px;\n  height: auto;\n"],["\n  margin: 0 auto;\n  max-width: 100px;\n  height: auto;\n"]);Object.defineProperty(t,"__esModule",{value:!0});var o=n(9),u=n(69),c=n(16);t.Image=o.default(u.default)(i,c.device.tablet),t.ImageFH=o.default(u.default)(r,c.device.tablet),t.Logo=o.default(u.default)(l)},226:function(e,t,n){"use strict";function a(e,t){return e.raw=t,e}var i=a(["\n  padding: 10px;\n  width: 150px;\n  max-width: 150px;\n"],["\n  padding: 10px;\n  width: 150px;\n  max-width: 150px;\n"]),r=a(["\n"],["\n"]);Object.defineProperty(t,"__esModule",{value:!0});var l=n(9),o=n(69);t.Logo=l.default.div(i),t.Image=l.default(o.default)(r)},227:function(e,t,n){"use strict";function a(e,t){return e.raw=t,e}var i=a(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: no-wrap;\n  @media "," {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n"],["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: no-wrap;\n  @media "," {\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n"]),r=a(["\n  flex: 1 0 100%;\n  display: flex;\n  & > div {\n    flex: 1 0 auto;\n  }\n  @media "," {\n    flex: 1 1 50%;\n  }\n"],["\n  flex: 1 0 100%;\n  display: flex;\n  & > div {\n    flex: 1 0 auto;\n  }\n  @media "," {\n    flex: 1 1 50%;\n  }\n"]);Object.defineProperty(t,"__esModule",{value:!0});var l=n(9),o=n(16);t.Panes=l.default.div(i,o.device.tablet),t.Pane=l.default.div(r,o.device.tablet)},228:function(e,t,n){"use strict";function a(e,t){return e.raw=t,e}var i=a(["\n  text-align: center;\n  font-weight: 300;\n"],["\n  text-align: center;\n  font-weight: 300;\n"]);Object.defineProperty(t,"__esModule",{value:!0});var r=n(9);t.Subtitle1=r.default.h3(i)},135:function(e,t,n){"use strict";function a(e,t){return e.raw=t,e}var i=a(["\n  margin: 0.5em;\n  text-align: center;\n  text-transform: uppercase;\n"],["\n  margin: 0.5em;\n  text-align: center;\n  text-transform: uppercase;\n"]);Object.defineProperty(t,"__esModule",{value:!0});var r=n(9);t.Title1=r.default.h1(i),t.Title2=r.default.h3(i)},237:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),o=n(222),u=function(e){function t(){return a(this,t),i(this,e.apply(this,arguments))}return r(t,e),t.prototype.render=function(){var e=this.props.data.plasticYaml;return l.createElement(o.default,{lang:"en",welcome:e.welcome,icons:e.icons})},t}(l.Component);t.default=u,t.query="** extracted graphql fragment **"},16:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.colors={base:"hsl(195, 92%, 38%)",accent:"hsl(33, 86%, 67%)",white:"hsl(0, 0%, 100%)",black:"hsl(0, 0%, 10%)",gray:"hsl(0, 0%, 90%)"},t.fonts={sansSerif:'-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif',serif:'Georgia, "Times New Roman", Times, serif',monospace:'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace, monospace'};var n=64,a={tablet:"769px",desktop:960+2*n+"px",widescreen:1152+2*n+"px",fullhd:1344+2*n+"px"};t.device={tablet:"(min-width: "+a.tablet+")",desktop:"(min-width: "+a.desktop+")",widescreen:"(min-width: "+a.widescreen+")",fullhd:"(min-width: "+a.fullhd+")"},t.widths={desktop:960-2*n+"px",widescreen:1152-2*n+"px",fullhd:1344-2*n+"px"},t.heights={header:64}}});
//# sourceMappingURL=component---src-pages-en-plastic-index-tsx-2f8ca5b00b1396c5ed3f.js.map