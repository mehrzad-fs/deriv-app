(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{564:function(e,r,t){"use strict";var n=t(6),o=t.n(n),i=t(0),a=t.n(i);r.a=function(e){var r=e.className,t=e.is_invisible,n=e.theme,i=e.id;return a.a.createElement("div",{id:i,className:o()("barspinner","barspinner--".concat(n||"dark"),{invisible:t},r)},Array.from(new Array(5)).map((function(e,r){return a.a.createElement("div",{key:r,className:"barspinner__rect barspinner__rect--".concat(r+1," rect").concat(r+1)})})))}},565:function(e,r,t){"use strict";var n=t(2),o=t.n(n),i=t(0),a=t.n(i),c=t(61),s=t.n(c),u=t(30),f=t(23),p=t(17);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,r){return!r||"object"!==l(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,r){return(m=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}var _=function(e){function r(){var e,t;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=b(this,(e=h(r)).call.apply(e,[this].concat(o)))).onClickButton=function(){t.props.error.link?window.open(Object(u.urlFor)(t.props.error.link,void 0,void 0,!0)):"function"==typeof t.props.error.onClickButton&&t.props.error.onClickButton(),t.props.setErrorMessage("")},t}var t,n,o;return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&m(e,r)}(r,e),t=r,(n=[{key:"render",value:function(){return a.a.createElement("div",{className:"cashier__wrapper"},a.a.createElement(f.a,{icon:"IconCashierError",className:"cashier-error__icon"}),Array.isArray(this.props.error.message)?this.props.error.message.map((function(e,r){return a.a.createElement("p",{className:"cashier-error__text",key:r},e)})):a.a.createElement("p",{className:"cashier-error__text"},this.props.error.message),this.props.error.button_text&&a.a.createElement(s.a,{className:"btn--secondary--default cashier-error__button",has_effect:!0,text:this.props.error.button_text,onClick:this.onClickButton}))}}])&&y(t.prototype,n),o&&y(t,o),r}(a.a.Component);_.propTypes={error:o.a.object,setErrorMessage:o.a.func},r.a=Object(p.b)((function(e){return{setErrorMessage:e.modules.cashier.setErrorMessage}}))(_)},571:function(e,r,t){"use strict";var n=t(2),o=t.n(n),i=t(0),a=t.n(i),c=t(156),s=t(564);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function p(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,r){return!r||"object"!==u(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,r){return(b=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}var h=function(e){function r(){return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),l(this,y(r).apply(this,arguments))}var t,n,o;return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&b(e,r)}(r,e),t=r,(n=[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.is_loading&&a.a.createElement(s.a,null),this.props.iframe_url&&a.a.createElement(c.Scrollbars,{autoHeight:!0,autoHide:!0,autoHeightMax:550,renderTrackHorizontal:function(e){return a.a.createElement("div",f({},e,{className:"track-horizontal",style:{display:"none"}}))},renderThumbHorizontal:function(e){return a.a.createElement("div",f({},e,{className:"thumb-horizontal",style:{display:"none"}}))}},a.a.createElement("iframe",{className:"cashier__content",height:this.props.iframe_height,src:this.props.iframe_url,frameBorder:"0",scrolling:"auto"})))}}])&&p(t.prototype,n),o&&p(t,o),r}(a.a.Component);h.propTypes={className:o.a.string,iframe_height:o.a.oneOfType([o.a.number,o.a.string]),iframe_url:o.a.string,is_loading:o.a.bool},r.a=h},624:function(e,r,t){"use strict";t.r(r);var n=t(2),o=t.n(n),i=t(0),a=t.n(i),c=t(17),s=t(565),u=t(571);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,r){return!r||"object"!==f(r)&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,r){return(b=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}var h=function(e){function r(){return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),l(this,y(r).apply(this,arguments))}var t,n,o;return function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&b(e,r)}(r,e),t=r,(n=[{key:"componentDidMount",value:function(){this.props.setActiveTab(this.props.container),this.props.onMount()}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.error.message?a.a.createElement(s.a,{error:this.props.error}):a.a.createElement(u.a,{iframe_height:this.props.iframe_height,iframe_url:this.props.iframe_url,is_loading:this.props.is_loading}))}}])&&p(t.prototype,n),o&&p(t,o),r}(a.a.Component);h.propTypes={container:o.a.string,error:o.a.object,iframe_height:o.a.oneOfType([o.a.number,o.a.string]),iframe_url:o.a.string,is_loading:o.a.bool,onMount:o.a.func,setActiveTab:o.a.func},r.default=Object(c.b)((function(e){var r=e.modules;return{container:r.cashier.config.deposit.container,error:r.cashier.config.deposit.error,iframe_height:r.cashier.config.deposit.iframe_height,iframe_url:r.cashier.config.deposit.iframe_url,is_loading:r.cashier.is_loading,onMount:r.cashier.onMount,setActiveTab:r.cashier.setActiveTab}}))(h)}}]);
//# sourceMappingURL=4.0387a497780f89c6f20d.js.map