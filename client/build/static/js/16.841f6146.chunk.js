(this["webpackJsonpdoc-match"]=this["webpackJsonpdoc-match"]||[]).push([[16],{122:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(65);function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Object(r.a)(e,t)}},123:function(e,t,n){"use strict";function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}n.d(t,"a",(function(){return i}));var c=n(32),a=n(63);function i(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=r(e);if(t){var o=r(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return function(e,t){if(t&&("object"===Object(c.a)(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Object(a.a)(e)}(this,n)}}},127:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.MetaContext=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0));function c(e){return c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}function s(e,t){return s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},s(e,t)}var l=(0,r.createContext)({});t.MetaContext=l;var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),i(this,o(t).apply(this,arguments))}var n,c,u;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,(c=[{key:"render",value:function(){return r.default.createElement(l.Provider,{value:{extract:this.props.extract}},r.Children.only(this.props.children))}}])&&a(n.prototype,c),u&&a(n,u),t}(r.Component),d=u;t.default=d},128:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=(r=n(64))&&r.__esModule?r:{default:r},i=n(134),o=n(127);function s(e){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==s(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}var p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,d(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&a.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var n=c.default.createElement("div",{className:"react-head-temp"},t);a.default.render(n,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var n=e.temporaryElement.querySelector(".react-head-temp");if(null!==n){var r=Array.prototype.slice.call(n.children),c=document.head,a=c.innerHTML;(r=(r=r.filter((function(e){return-1===a.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var n=(0,i.getDuplicateTitle)();n&&(0,i.removeChild)(c,n)}else if(e.id){var r=(0,i.getDuplicateElementById)(e);r&&(0,i.removeChild)(c,r)}else if("meta"===t){var a=(0,i.getDuplicateMeta)(e);a&&(0,i.removeChild)(c,a)}else if("link"===t&&"canonical"===e.rel){var o=(0,i.getDuplicateCanonical)(e);o&&(0,i.removeChild)(c,o)}})),(0,i.appendChild)(document.head,r)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&l(n.prototype,r),o&&l(n,o),t}(c.Component);!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(p,"contextType",o.MetaContext);var f=p;t.default=f,e.exports=t.default},130:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var r=i(n(127)),c=i(n(128)),a=i(n(135));function i(e){return e&&e.__esModule?e:{default:e}}var o=c.default;t.default=o},132:function(e,t,n){"use strict";var r=n(28),c=n(29),a=n(122),i=n(123),o=n(0),s=n(33),l=n(2),u=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(l.jsxs)("div",{className:"sigma_subheader style-5 bg-gray",children:[Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("div",{className:"sigma_subheader-inner",children:Object(l.jsx)("h1",{children:this.props.breadcrumb.pagename})}),Object(l.jsxs)("ol",{className:"breadcrumb",children:[Object(l.jsx)("li",{className:"breadcrumb-item",children:Object(l.jsx)(s.b,{to:"/",className:"btn-link",children:"Home"})}),Object(l.jsx)("li",{className:"breadcrumb-item active","aria-current":"page",children:this.props.breadcrumb.pagename})]})]}),Object(l.jsx)("img",{src:"/Doc-Match/assets/img/subheader-br.png",className:"br",alt:"subheader"}),Object(l.jsx)("img",{src:"/Doc-Match/assets/img/subheader-bl.png",className:"bl",alt:"subheader"}),Object(l.jsx)("img",{src:"/Doc-Match/assets/img/subheader-tr.png",className:"tr",alt:"subheader"})]})}}]),n}(o.Component);t.a=u},134:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,n=null,r=[],i=[];return e.forEach((function(e){var c=e.type,a=e.props;"title"===c?t=e:"link"===c&&"canonical"===a.rel?n=e:"meta"===c?r.push(e):i.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};a.forEach((function(e){t[e]=[]}));for(var n=[],r=function(r){var i=e[r],o=i.props.id;(o?!t.id[o]:0===c.filter((function(e){var n=i.props[e],r=t[e][n];return r&&!r.props.id})).length)&&(n.unshift(i),a.forEach((function(e){var n=i.props[e];n&&(t[e][n]=i)})))},i=e.length-1;i>=0;i--)r(i);return n}(r)),[n],i)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateElementById=function(e){var t=e.id;return t&&document.head.querySelector("#".concat(t))},t.getDuplicateMeta=function(e){var t=document.head;return r.reduce((function(n,r){var c,a=e.getAttribute(r);return a?n.concat((c=t.querySelectorAll("[".concat(r,' = "').concat(a,'"]')),(c=Array.prototype.slice.call(c||[])).filter((function(e){return!e.id})))):n}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=document.createDocumentFragment(),r=0,c=t.length;r<c;r++)n.appendChild(t[r]);e.appendChild(n)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=0,r=t.length;n<r;n++)e.removeChild(t[n])};var r=["property","name","itemprop"],c=r.concat(["itemProp"]),a=c.concat(["id"])},135:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=(r=n(128))&&r.__esModule?r:{default:r};function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},l(e)}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}var d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,l(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(r=[{key:"render",value:function(){return c.default.createElement(a.default,null,c.default.createElement("title",null,this.props.title))}}])&&o(n.prototype,r),i&&o(n,i),t}(c.Component),b=d;t.default=b,e.exports=t.default},205:function(e,t,n){"use strict";var r=n(28),c=n(29),a=n(63),i=n(122),o=n(123),s=n(0),l=n(33),u=n(11),d=n(146),b=n(133),p=n(162),f=n(137),j=n(2),m=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).state={searchText:""},c.handleSubmit=c.handleSubmit.bind(Object(a.a)(c)),c.onChange=c.onChange.bind(Object(a.a)(c)),c}return Object(c.a)(n,[{key:"onChange",value:function(e){this.setState({searchText:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),""!==this.state.searchText&&this.props.history.push("/blog/search/"+this.state.searchText)}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"sidebar",children:[Object(j.jsx)("div",{className:"widget widget-search",children:Object(j.jsx)("form",{onSubmit:this.handleSubmit,method:"GET",children:Object(j.jsxs)("div",{className:"input-group",children:[Object(j.jsx)("input",{type:"text",placeholder:"Search",name:"searchText",value:this.state.searchText,onChange:this.onChange,required:!0}),Object(j.jsx)("div",{className:"input-group-append",children:Object(j.jsx)("button",{type:"submit",children:Object(j.jsx)("i",{className:"fal fa-search mr-0"})})})]})})}),Object(j.jsxs)("div",{className:"widget widget-categories",children:[Object(j.jsx)("h5",{className:"widget-title",children:"Categories"}),Object(j.jsx)("ul",{children:b.map((function(e,t){return Object(j.jsx)("li",{children:Object(j.jsxs)(l.b,{to:"/blog/cat/"+e.id,children:[e.title," ",Object(j.jsx)("span",{children:e.count})]})},t)}))})]}),Object(j.jsxs)("div",{className:"widget widget-sigma-recent-posts",children:[Object(j.jsx)("h5",{className:"widget-title",children:"Recent Post"}),Object(p.c)().map((function(e,t){return Object(j.jsxs)("div",{className:"sigma_recent-post",children:[Object(j.jsxs)(l.b,{to:"/blog-details/"+e.id,className:"recent-post-image",children:[Object(j.jsx)("img",{src:"/Doc-Match/"+e.image[0],alt:e.title}),Object(j.jsx)("span",{children:e.reviews.length})]}),Object(j.jsxs)("div",{className:"recent-post-descr",children:[Object(j.jsx)("h6",{children:Object(j.jsx)(l.b,{to:"/blog-details/"+e.id,children:e.title})}),Object(j.jsxs)(l.b,{to:"/blog-details/"+e.id,className:"date",children:[Object(j.jsx)("i",{className:"far fa-clock mr-2"}),e.postdate]})]})]},t)}))]}),Object(j.jsxs)("div",{className:"widget widget-newsletter",children:[Object(j.jsx)("h5",{className:"widget-title",children:"Join Newsletter"}),Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{type:"email",name:"email",placeholder:"Enter your email"}),Object(j.jsx)("button",{type:"button",className:"btn-block mt-4",children:"Subscribe"})]})]}),Object(j.jsxs)("div",{className:"widget widget-sigma-recent-posts style-3",children:[Object(j.jsx)("h5",{className:"widget-title",children:"Recent Post"}),Object(p.c)().map((function(e,t){return Object(j.jsxs)("div",{className:"sigma_recent-post",children:[Object(j.jsx)("div",{className:"sigma_post-categories",children:Object(f.b)(e.category).slice(0,2).map((function(e,t){return Object(j.jsx)(l.b,{to:"/blog/cat/"+e.id,children:e.title},t)}))}),Object(j.jsxs)("div",{className:"recent-post-descr",children:[Object(j.jsx)("h6",{children:Object(j.jsx)(l.b,{to:"/blog-details/"+e.id,children:e.title})}),Object(f.a)(e.author).map((function(t,n){return Object(j.jsxs)("div",{className:"author-info d-flex align-items-center",children:[Object(j.jsx)("span",{children:Object(f.c)(t.name)}),Object(j.jsxs)("div",{children:[Object(j.jsx)(l.b,{to:"/blog/author/"+t.id,className:"author-name",children:t.name}),Object(j.jsx)(l.b,{to:"/blog-details/"+e.id,className:"date",children:e.postdate})]})]},n)}))]})]},t)}))]}),Object(j.jsxs)("div",{className:"widget tagcloud",children:[Object(j.jsx)("h5",{className:"widget-title",children:"Popular Tags"}),d.map((function(e,t){return Object(j.jsx)(l.b,{to:"/blog/tag/"+e.id,children:e.title},t)}))]})]})}}]),n}(s.Component);t.a=Object(u.h)(m)},537:function(e,t,n){"use strict";n.r(t);var r=n(28),c=n(29),a=n(122),i=n(123),o=n(0),s=n(130),l=n.n(s),u=n(131),d=n(132),b=n(138),p=n(63),f=n(33),j=n(162),m=n(137),h=n(205),O=n(2),y=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(e){var c;return Object(r.a)(this,n),(c=t.call(this,e)).openSocialPopup=c.openSocialPopup.bind(Object(p.a)(c)),c}return Object(c.a)(n,[{key:"openSocialPopup",value:function(e){window.open(e.link,"MsgWindow","width=600,height=600")}},{key:"render",value:function(){var e=this,t=this.props.detailId,n=Object(j.a)(t);return Object(O.jsx)("div",{className:"sidebar-style-8",children:Object(O.jsx)("div",{className:"section pb-0 sigma_post-details style-6",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-lg-8",children:Object(O.jsxs)("div",{className:"sigma_post-details-inner",children:[Object(O.jsxs)("div",{className:"entry-content",children:[Object(O.jsx)("img",{src:"/Doc-Match/"+n.image[0],alt:n.title,className:"w-100"}),Object(O.jsxs)("div",{className:"sigma_post-details-meta",children:[Object(m.a)(n.author).map((function(e,t){return Object(O.jsxs)("span",{children:[" ",Object(O.jsx)("i",{className:"far fa-user"})," By",e.name]},t)})),Object(O.jsxs)("span",{children:[" ",Object(O.jsx)("i",{className:"far fa-calendar-alt"})," ",n.postdate]})]}),Object(O.jsx)("h2",{className:"entry-title",children:n.title}),Object(O.jsx)("div",{dangerouslySetInnerHTML:{__html:n.htmltext}})]}),Object(O.jsx)("hr",{}),Object(O.jsx)("div",{className:"sigma_post-details-meta",children:Object(O.jsxs)("div",{className:"sigma_post-details-meta-item sigma_post-share",children:[Object(O.jsx)("h5",{className:"mb-0",children:"Share:"}),Object(O.jsx)("ul",{className:"sigma_sm ml-4",children:Object(m.d)(n.title).map((function(t,n){return Object(O.jsx)("li",{children:Object(O.jsx)(f.b,{to:"#",onClick:function(r){return e.openSocialPopup(t,n)},children:Object(O.jsx)("i",{className:t.iconClass})})},n)}))})]})}),Object(O.jsxs)("div",{className:"section pb-0",children:[Object(O.jsx)("h3",{children:"Comments"}),Object(O.jsx)("div",{className:"comments-list",children:n.reviews.map((function(e,t){return Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{className:"comment-item",children:[Object(m.a)(e.user).map((function(e,t){return Object(O.jsx)("img",{src:"/Doc-Match/"+e.image,alt:e.name},t)})),Object(m.a)(e.user).map((function(t,n){return Object(O.jsxs)("div",{className:"comment-body",children:[Object(O.jsx)("h5",{children:t.name}),Object(O.jsxs)("span",{className:"date",children:[" ",e.commentdate]}),Object(O.jsx)("p",{children:e.comment}),Object(O.jsx)(f.b,{to:"#",className:"btn-link",children:" Reply "})]},n)}))]}),e.replies.map((function(e,t){return Object(O.jsxs)("li",{className:"comment-item",children:[Object(m.a)(e.user).map((function(e,t){return Object(O.jsx)("img",{src:"/Doc-Match/"+e.image,alt:e.name},t)})),Object(m.a)(e.user).map((function(t,n){return Object(O.jsxs)("div",{className:"comment-body",children:[Object(O.jsx)("h5",{children:t.name}),Object(O.jsxs)("span",{className:"date",children:[" ",e.commentdate]}),Object(O.jsx)("p",{children:e.comment}),Object(O.jsx)(f.b,{to:"#",className:"btn-link",children:" Reply "})]},n)}))]},t)}))]},t)}))})]}),Object(O.jsxs)("div",{className:"section",children:[Object(O.jsx)("h3",{children:"Leave a Reply"}),Object(O.jsx)("div",{className:"comment-form",children:Object(O.jsx)("form",{children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsx)("div",{className:"col-lg-6",children:Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("input",{type:"text",placeholder:"Your Name",className:"form-control",name:"fname",required:!0})})}),Object(O.jsx)("div",{className:"col-lg-6",children:Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("input",{type:"email",placeholder:"Your E-mail",className:"form-control",name:"email",required:!0})})}),Object(O.jsxs)("div",{className:"col-12",children:[Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("textarea",{className:"form-control",placeholder:"Enter Comment here",name:"comment",rows:7,required:!0})}),Object(O.jsx)("button",{type:"submit",className:"sigma_btn-custom",name:"button",children:"Post Comment"})]})]})})})]})]})}),Object(O.jsx)("div",{className:"col-lg-4",children:Object(O.jsx)(h.a,{})})]})})})})}}]),n}(o.Component),v="Blog Details",x=function(e){Object(a.a)(n,e);var t=Object(i.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return Object(O.jsxs)(o.Fragment,{children:[Object(O.jsxs)(l.a,{children:[Object(O.jsxs)("title",{children:["Doc-Match | ",v]}),Object(O.jsx)("meta",{name:"description",content:"#"})]}),Object(O.jsx)(u.a,{}),Object(O.jsx)(d.a,{breadcrumb:{pagename:v}}),Object(O.jsx)(y,{detailId:this.props.match.params.id}),Object(O.jsx)(b.a,{})]})}}]),n}(o.Component);t.default=x}}]);
//# sourceMappingURL=16.841f6146.chunk.js.map