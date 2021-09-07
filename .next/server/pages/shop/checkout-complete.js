module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/shop/checkout-complete.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
/**
* Detects whether a given url is from the same origin as the current page (browser only).
*/


function isLocal(url) {
  const locationOrigin = (0, _utils.getLocationOrigin)();
  const resolved = new URL(url, locationOrigin);
  return resolved.origin === locationOrigin;
}

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function linkClicked(e, router, href, as, replace, shallow, scroll) {
  const {
    nodeName,
    target
  } = e.currentTarget;

  if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
    // ignore click for new tab / new window behavior
    return;
  }

  if (!isLocal(href)) {
    // ignore click if it's outside our scope (e.g. https://google.com)
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const resolvedHref = (0, _router2.resolveHref)(pathname, props.href);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router2.resolveHref)(pathname, props.as) : resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router2.addBasePath)(as);
  } // Add the ending slash to the paths. So, we can serve the
  // "<page>/index.html" directly.


  if (false) {}

  return _react.default.cloneElement(child, childProps);
}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _searchParamsToUrlQuery = __webpack_require__(/*! ./utils/search-params-to-url-query */ "./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addBasePath(path) {
  return basePath ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(basePath) : basePath + path : path;
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  const finalUrl = new URL(urlAsString, base);
  finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname); // if the origin didn't change, it means we received a relative href

  return finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

function tryParseRelativeUrl(url) {
  try {
    return (0, _parseRelativeUrl.parseRelativeUrl)(url);
  } catch (err) {
    if (true) {
      throw new Error(`Invalid href passed to router: ${url} https://err.sh/vercel/next.js/invalid-href-passed`);
    }

    return null;
  }
}

const manualScrollRestoration =  false && false;

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      const {
        url,
        as,
        options,
        __N
      } = e.state;

      if (!__N) {
        // this history state wasn't created by next.js so it can be ignored
        return;
      }

      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      this.change('replaceState', url, as, options);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly for the SSR page.


    if (false) {}

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    const cleanedAs = delBasePath(as);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as);
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      Router.events.emit('hashChangeComplete', as);
      return true;
    }

    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return false;
    let {
      pathname,
      searchParams
    } = parsed;
    const query = (0, _searchParamsToUrlQuery.searchParamsToUrlQuery)(searchParams); // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options;

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const {
        pathname: asPathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(cleanedAs);
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

      if (!routeMatch) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`);
        }
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      const {
        error
      } = routeInfo;
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo);

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      const {
        page: Component
      } = await this.fetchComponent('/_error');
      const routeInfo = {
        Component,
        err,
        error: err
      };

      try {
        routeInfo.props = await this.getInitialProps(Component, {
          err,
          pathname,
          query
        });
      } catch (gipErr) {
        console.error('Error in error page `getInitialProps`: ', gipErr);
        routeInfo.props = {};
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), as, __N_SSG);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    const parsed = tryParseRelativeUrl(url);
    if (!parsed) return;
    const {
      pathname
    } = parsed; // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var _querystring = __webpack_require__(/*! querystring */ "querystring"); // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    // query = '' + new URLSearchParams(query);
    query = (0, _querystring.encode)(query);
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
const DUMMY_BASE = new URL('http://n');
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected.
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin) {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    searchParams,
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/search-params-to-url-query.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./src/common/WithHeaderScroll.js":
/*!****************************************!*\
  !*** ./src/common/WithHeaderScroll.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithHeaderScroll; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Elementronics\\src\\common\\WithHeaderScroll.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


function WithHeaderScroll(WrappedComponent) {
  return function (props) {
    const headerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
    const {
      0: scroll,
      1: setScroll
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
    const {
      0: isHeaderFixed,
      1: setIsHeaderFixed
    } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
      if (scroll >= headerRef.current.offsetHeight) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    }, [scroll]);

    function handleScroll() {
      setScroll(window.scrollY);
    }

    return __jsx("div", {
      ref: headerRef,
      className: `header-scroll-wrapper ${isHeaderFixed ? "fixed" : ""}`,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }, __jsx(WrappedComponent, _extends({}, props, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    })));
  };
}

/***/ }),

/***/ "./src/common/defines.js":
/*!*******************************!*\
  !*** ./src/common/defines.js ***!
  \*******************************/
/*! exports provided: SHOP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP", function() { return SHOP; });
const SHOP = {
  category: [{
    name: "clothing",
    sub: [{
      name: "accessories",
      iconClass: "icon-accessories"
    }, {
      name: "pants",
      iconClass: "icon-pant"
    }, {
      name: "shorts",
      iconClass: "icon-short"
    }, {
      name: "jacket",
      iconClass: "icon-jacket"
    }, {
      name: "dress",
      iconClass: "icon-dress"
    }, {
      name: "suits",
      iconClass: "icon-suit"
    }, {
      name: "shirt",
      iconClass: "icon-shirt"
    }]
  }, {
    name: "fruits",
    sub: [{
      name: "vegatables",
      iconClass: "icon-vegetable"
    }, {
      name: "fruits",
      iconClass: "icon-fruit"
    }, {
      name: "nut",
      iconClass: "icon-nut"
    }, {
      name: "mushroom",
      iconClass: "icon-mushroom"
    }]
  }, {
    name: "electronic",
    sub: [{
      name: "air conditioning",
      iconClass: "icon-air-conditioning"
    }, {
      name: "phone",
      iconClass: "icon-phone"
    }, {
      name: "tv",
      iconClass: "icon-desktop"
    }, {
      name: "speaker",
      iconClass: "icon-speaker"
    }, {
      name: "fridge",
      iconClass: "icon-fridge"
    }, {
      name: "fan",
      iconClass: "icon-fan"
    }]
  }, {
    name: "furniture",
    sub: [{
      name: "table",
      iconClass: "icon-table"
    }, {
      name: "chair",
      iconClass: "icon-chair"
    }, {
      name: "cabinet",
      iconClass: "icon-cabinet"
    }, {
      name: "lamp",
      iconClass: "icon-lamp"
    }, {
      name: "bed",
      iconClass: "icon-bed"
    }]
  }, {
    name: "comestic",
    sub: [{
      name: "lipstick",
      iconClass: "icon-lipstick"
    }, {
      name: "powder",
      iconClass: "icon-powder"
    }, {
      name: "perfume",
      iconClass: "icon-perfurm"
    }, {
      name: "nail polish",
      iconClass: "icon-nail"
    }, {
      name: "mascara",
      iconClass: "icon-mascara"
    }]
  }]
};

/***/ }),

/***/ "./src/common/shopUtils.js":
/*!*********************************!*\
  !*** ./src/common/shopUtils.js ***!
  \*********************************/
/*! exports provided: getProductsByCategory, getProductsBySlug, getAllValuesOfKey, getAllSubCategories, getProductsBySort, getProductsByFilter, getProductsBySearch, getTotalProductInCart, calculateTotalPrice, checkProductInCart, checkAvaiableQuantityToAdd, checkProductInWishlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsByCategory", function() { return getProductsByCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsBySlug", function() { return getProductsBySlug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllValuesOfKey", function() { return getAllValuesOfKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSubCategories", function() { return getAllSubCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsBySort", function() { return getProductsBySort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsByFilter", function() { return getProductsByFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductsBySearch", function() { return getProductsBySearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalProductInCart", function() { return getTotalProductInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTotalPrice", function() { return calculateTotalPrice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkProductInCart", function() { return checkProductInCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAvaiableQuantityToAdd", function() { return checkAvaiableQuantityToAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkProductInWishlist", function() { return checkProductInWishlist; });
//Products
const getProductsByCategory = (arr, category) => {
  return category ? arr.filter(item => item.category.toLowerCase() === category.toLowerCase()) : arr;
};
const getProductsBySlug = (arr, slug) => {
  return slug && typeof slug === "string" ? arr.find(p => p.slug.toLowerCase() === slug.toLowerCase()) : arr;
};
const getAllValuesOfKey = (arr, key) => {
  if (key && typeof key === "string") {
    let subCategory = [];

    for (let i = 0; i < arr.length; i++) {
      if (!subCategory.includes(arr[i][key])) {
        subCategory.push(arr[i][key]);
      }
    }

    return subCategory.length > 0 ? subCategory : null;
  } else {
    return null;
  }
};
const getAllSubCategories = (arr, category) => {
  if (category && typeof category === "string") {
    let products = getProducts(arr, category);
    let subCategoriesArr = getAllValuesOfKey(products, "subCategory");
    return subCategoriesArr !== null ? subCategoriesArr : null;
  } else {
    return null;
  }
};
const getProductsBySort = (products, type) => {
  function sortWithCondition(arr, value, reverse = false) {
    let num = reverse ? -1 : 1;
    return arr.sort((a, b) => {
      if (a[value] < b[value]) {
        return -1 * num;
      }

      if (a[value] > b[value]) {
        return 1 * num;
      }

      return 0;
    });
  }

  if (type === "az") {
    return sortWithCondition(products, "name");
  } else if (type === "za") {
    return sortWithCondition(products, "name", true);
  } else if (type === "lowHigh") {
    return sortWithCondition(products, "price");
  } else if (type === "highLow") {
    return sortWithCondition(products, "price", true);
  } else {
    return products;
  }
};
const getProductsByFilter = (products, sortType, subCategory) => {
  let filteredProduct = subCategory ? products.filter(product => product.subCategory.toLowerCase() === subCategory.toLowerCase()) : products;
  return getProductsBySort(filteredProduct, sortType);
};
const getProductsBySearch = (products, keyword) => {
  return keyword && keyword !== "" ? products.filter(product => product.name.toLowerCase().includes(keyword.toLowerCase())) : products;
}; //Cart

const getTotalProductInCart = arr => {
  return arr ? arr.reduce((total, item) => total + item.cartQuantity, 0) : 0;
};
const calculateTotalPrice = arr => {
  let total = 0;
  arr.forEach(item => {
    if (item.discount) {
      total += item.cartQuantity ? (item.price - item.discount) * item.cartQuantity : item.price - item.discount;
    } else {
      total += item.cartQuantity ? item.price * item.cartQuantity : item.price;
    }
  });
  return total;
};
const checkProductInCart = (cartArr, pid) => {
  return pid ? cartArr.find(item => item.id === pid) : null;
};
const checkAvaiableQuantityToAdd = (arr, product) => {
  const productsInCart = arr.filter(item => item.id === product.id);

  if (productsInCart && productsInCart.length > 0) {
    const totalProductQuantityInCart = productsInCart.length > 0 && productsInCart.reduce((total, item) => total + item.cartQuantity, 0);
    let avaiable = product.quantity - totalProductQuantityInCart;
    return avaiable < 1 ? 0 : avaiable;
  } else {
    product.quantity;
  }
}; //Wishlist

const checkProductInWishlist = (wishlistArr, pid) => {
  return pid ? wishlistArr.find(item => item.id === pid) : null;
};

/***/ }),

/***/ "./src/common/useDebound.js":
/*!**********************************!*\
  !*** ./src/common/useDebound.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useDebounce; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDebounce(value, delay) {
  const {
    0: debouncedValue,
    1: setDebouncedValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(value);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);
  return debouncedValue;
}

/***/ }),

/***/ "./src/common/utils.js":
/*!*****************************!*\
  !*** ./src/common/utils.js ***!
  \*****************************/
/*! exports provided: formatCurrency, capitalizeFirstLetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatCurrency", function() { return formatCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return capitalizeFirstLetter; });
const formatCurrency = (price, locales = "us-US", currency = "USD") => {
  return new Intl.NumberFormat(locales, {
    style: "currency",
    currency: currency
  }).format(price);
}; // export const translateString = (string, language, API_key) => {
//   if (!API_key) {
//     return string;
//   } else {
//     let traslatedString;
//     return translate("Hello world", {
//       to: language,
//       key: API_key,
//     })
//       .then((res) => (traslatedString = res))
//       .catch((err) => console.log(err));
//   }
// };

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

/***/ }),

/***/ "./src/components/cart/CartSidebar.js":
/*!********************************************!*\
  !*** ./src/components/cart/CartSidebar.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CartSidebarItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CartSidebarItem */ "./src/components/cart/CartSidebarItem.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
var _jsxFileName = "F:\\Elementronics\\src\\components\\cart\\CartSidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








function CartSidebar() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useDispatch"])();
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.cartReducer);
  const globalState = Object(react_redux__WEBPACK_IMPORTED_MODULE_0__["useSelector"])(state => state.globalReducer);
  const {
    currency,
    locales
  } = globalState.currency;
  return cartState.length === 0 ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    description: "No products in cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }) : __jsx("div", {
    className: "cart-sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "cart-sidebar-products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, cartState.map((item, index) => __jsx(_CartSidebarItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: index,
    data: item,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "cart-sidebar-total",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Total:", " ", __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_6__["formatCurrency"])(Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_5__["calculateTotalPrice"])(cartState), locales, currency))), __jsx("div", {
    className: "cart-sidebar-total__buttons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "primary",
    shape: "round",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "" + "/shop/checkout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 15
    }
  }, "Checkout"))))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_3___default.a.memo(CartSidebar));

/***/ }),

/***/ "./src/components/cart/CartSidebarItem.js":
/*!************************************************!*\
  !*** ./src/components/cart/CartSidebarItem.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _controls_QuantitySelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../controls/QuantitySelector */ "./src/components/controls/QuantitySelector.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
var _jsxFileName = "F:\\Elementronics\\src\\components\\cart\\CartSidebarItem.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function CartSidebarItem({
  data
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: quantity,
    1: setQuantity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(data.cartQuantity);
  const globalState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.globalReducer);
  const {
    currency,
    locales
  } = globalState.currency;

  const onRemoveProductFromCart = e => {
    e.preventDefault();
    showModal();
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = e => {
    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__["removeFromCart"])(data.cartId));
    setVisible(false);
    return antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("Product removed from cart");
  };

  const handleCancel = e => {
    setVisible(false);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "cart-sidebar-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "cart-sidebar-item__image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: data.thumbImage[0],
    alt: "Product image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "cart-sidebar-item__content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + `/product/[slug]`,
    as: "" + `/product/${data.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, data.name)), __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])((data.price - data.discount) * data.cartQuantity, locales, currency) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_4__["formatCurrency"])(data.price * data.cartQuantity, locales, currency)), __jsx(_controls_QuantitySelector__WEBPACK_IMPORTED_MODULE_5__["default"], {
    size: "small",
    defaultValue: data.cartQuantity,
    min: 1,
    max: data.quantity,
    onDecrease: () => dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__["decreaseQuantityCart"])(data.cartId)),
    onIncrease: () => dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__["increaseQuantityCart"])(data.cartId)),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "cart-sidebar-item__close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "#",
    onClick: onRemoveProductFromCart,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "icon_close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  })))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: "Cofirm this action",
    visible: visible,
    onOk: handleOk,
    onCancel: handleCancel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, "Are your sure to remove product from cart ?")));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(CartSidebarItem));

/***/ }),

/***/ "./src/components/controls/QuantitySelector.js":
/*!*****************************************************!*\
  !*** ./src/components/controls/QuantitySelector.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\Elementronics\\src\\components\\controls\\QuantitySelector.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function QuantitySelector({
  min,
  max,
  defaultValue,
  onChange,
  size,
  noRound,
  className,
  onDecrease,
  onIncrease
}) {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    onChange && onChange(value);
  }, [value]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValue(defaultValue);
  }, [defaultValue]);
  const decreaseValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (min && value <= min) {
      return;
    } else {
      if (value <= 1) {
        return;
      }

      onDecrease && onDecrease();
      setValue(value - 1);
    }
  }, [value]);
  const increaseValue = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => {
    if (value >= max) {
      return;
    }

    onIncrease && onIncrease();
    setValue(value + 1);
  }, [value]);
  return __jsx("div", {
    className: `quantity-selector ${classnames__WEBPACK_IMPORTED_MODULE_2___default()(className)} -${classnames__WEBPACK_IMPORTED_MODULE_2___default()(size)} -${classnames__WEBPACK_IMPORTED_MODULE_2___default()({
      "no-round": noRound
    })}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "quantity-selector-controller",
    type: "link",
    disabled: value <= min || value <= 1,
    onClick: decreaseValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, "-"), __jsx("div", {
    className: "quantity-selector-number",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, value), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "quantity-selector-controller",
    type: "link",
    disabled: value >= max,
    onClick: increaseValue,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, "+"));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(QuantitySelector));

/***/ }),

/***/ "./src/components/footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elements_FooterSubcribe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/FooterSubcribe */ "./src/components/footer/elements/FooterSubcribe.js");
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/footer-links.json */ "./src/data/footer-links.json");
var _data_footer_links_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/footer-links.json */ "./src/data/footer-links.json", 1);
var _jsxFileName = "F:\\Elementronics\\src\\components\\footer\\Footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Footer({
  containerType
}) {
  return __jsx("div", {
    className: "footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "footer-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: containerType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    justify: "center",
    gutter: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    span: "24",
    sm: 12,
    lg: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "footer-top-item -col-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    span: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 19
    }
  }, __jsx("h5", {
    className: "footer-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 19
    }
  }, "Contact Us"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 19
    }
  }, "House #8, Road #14,"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, "Dhanmondi, Dhaka-1209. "), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, "Email: support@elementronics.com"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, "phone: +8801711-223344"), __jsx("h5", {
    className: "footer-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, "Get in touch"))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    span: "24",
    sm: 12,
    lg: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "footer-top-item -col-two",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: 30,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    span: 24,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 19
    }
  }, __jsx("h5", {
    className: "footer-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, "Menu"), __jsx("ul", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, _data_footer_links_json__WEBPACK_IMPORTED_MODULE_5__.information.map((item, index) => __jsx("li", {
    key: index,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 27
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 29
    }
  }, item.name))))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    className: "gutter-row",
    span: "24",
    sm: 18,
    lg: 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "footer-top-item -col-three",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 15
    }
  }, __jsx("h5", {
    className: "footer-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, "Subscribe Us"), __jsx(_elements_FooterSubcribe__WEBPACK_IMPORTED_MODULE_3__["default"], {
    url: "https://jster.us7.list-manage.com/subscribe/post?u=ed40c0084a0c5ba31b3365d65&id=ec6f32bf5e",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }), __jsx("h5", {
    className: "footer-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, "Our payment methods"), __jsx("img", {
    src: "" + "/assets/images/footer/payment.png",
    alt: "Payment methods",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  })))))), __jsx("div", {
    className: "footer-bottom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    type: containerType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, "Copyright \xA9 ", `${new Date().getFullYear()}`, " Elementronics.com. All rights reserved"))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Footer));

/***/ }),

/***/ "./src/components/footer/elements/FooterSubcribe.js":
/*!**********************************************************!*\
  !*** ./src/components/footer/elements/FooterSubcribe.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FooterSubcribe; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-mailchimp-subscribe */ "react-mailchimp-subscribe");
/* harmony import */ var react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "F:\\Elementronics\\src\\components\\footer\\elements\\FooterSubcribe.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CustomForm = react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(({
  status,
  message,
  onValidated
}) => {
  const onFinish = value => {
    console.log("Success:", value);
    value && onValidated({
      EMAIL: value.email
    });
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    name: "basic",
    initialValues: {
      remember: true
    },
    onFinish: onFinish,
    onFinishFailed: onFinishFailed,
    className: "footer-subcribe__form",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    noStyle: true,
    name: "email",
    rules: [{
      type: "email",
      message: "The input is not valid E-mail!"
    }, {
      required: true,
      message: "Please input your E-mail!"
    }],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    placeholder: "Your email",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Form"].Item, {
    noStyle: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "link",
    htmlType: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "SUBSCRIBE"))), status === "sending" && __jsx("div", {
    style: {
      color: "white"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 32
    }
  }, "sending..."), status === "error" && __jsx("div", {
    style: {
      color: "red"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), status === "success" && __jsx("div", {
    style: {
      color: "green"
    },
    dangerouslySetInnerHTML: {
      __html: message
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }
  }));
});
function FooterSubcribe({
  url
}) {
  return __jsx(react_mailchimp_subscribe__WEBPACK_IMPORTED_MODULE_1___default.a, {
    url: url,
    render: ({
      subscribe,
      status,
      message
    }) => __jsx(CustomForm, {
      status: status,
      message: message,
      onValidated: formData => subscribe(formData),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 9
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 5
    }
  });
}

/***/ }),

/***/ "./src/components/header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/header/Header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _elements_BottomNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements/BottomNav */ "./src/components/header/elements/BottomNav.js");
/* harmony import */ var _elements_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elements/Menu */ "./src/components/header/elements/Menu.js");
/* harmony import */ var _elements_TopNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elements/TopNav */ "./src/components/header/elements/TopNav.js");
var _jsxFileName = "F:\\Elementronics\\src\\components\\header\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Header({
  containerType,
  headerStyle
}) {
  const renderStyleClass = type => {
    switch (type) {
      case "two":
        return "-style-two";

      default:
        return "default";
    }
  };

  return __jsx("div", {
    className: `header-one ${renderStyleClass(headerStyle)}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, __jsx(_elements_TopNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
    containerType: containerType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }), __jsx(_elements_Menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    containerType: containerType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }), __jsx(_elements_BottomNav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    containerType: containerType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Header));

/***/ }),

/***/ "./src/components/header/elements/BottomNav.js":
/*!*****************************************************!*\
  !*** ./src/components/header/elements/BottomNav.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Category */ "./src/components/header/elements/Category.js");
var _jsxFileName = "F:\\Elementronics\\src\\components\\header\\elements\\BottomNav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function BottomNav({
  containerType
}) {
  return __jsx("div", {
    className: "bottom-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: containerType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "bottom-nav-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(_Category__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "bottom-nav-links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "bottom-nav-links__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "" + "/delivary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "Delevary"))), __jsx("div", {
    className: "bottom-nav-links__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "" + "/help",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "Help")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(BottomNav));

/***/ }),

/***/ "./src/components/header/elements/Category.js":
/*!****************************************************!*\
  !*** ./src/components/header/elements/Category.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/defines */ "./src/common/defines.js");
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/actions/shopActions */ "./src/redux/actions/shopActions.js");
var _jsxFileName = "F:\\Elementronics\\src\\components\\header\\elements\\Category.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Category = () => {
  const {
    Option
  } = antd__WEBPACK_IMPORTED_MODULE_2__["Select"];
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const globalState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.globalReducer);
  const shopState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.shopReducer);
  const subCategory = _common_defines__WEBPACK_IMPORTED_MODULE_3__["SHOP"].category.find(item => item.name.toLowerCase() === globalState.category.toLowerCase());

  const onChooseSubCategory = data => {
    if (!data || data === "all") {
      return dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_4__["setSubCategory"])(""));
    }

    return dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_4__["setSubCategory"])(data));
  };

  const handleChange = value => {
    onChooseSubCategory(value);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Select"], {
    defaultValue: "all",
    onChange: handleChange,
    value: shopState.subCategory === "" ? "all" : shopState.subCategory,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx(Option, {
    value: "all",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "icon_document_alt",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), "All Category"), subCategory && subCategory.sub.map((item, index) => __jsx(Option, {
    key: index,
    value: item.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, " ", __jsx("i", {
    className: item.iconClass,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }), item.name)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Category);

/***/ }),

/***/ "./src/components/header/elements/Menu.js":
/*!************************************************!*\
  !*** ./src/components/header/elements/Menu.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_product_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../data/product.json */ "./src/data/product.json");
var _data_product_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../data/product.json */ "./src/data/product.json", 1);
/* harmony import */ var _cart_CartSidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../cart/CartSidebar */ "./src/components/cart/CartSidebar.js");
/* harmony import */ var _MenuSidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./MenuSidebar */ "./src/components/header/elements/MenuSidebar.js");
/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SearchBar */ "./src/components/header/elements/SearchBar.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
var _jsxFileName = "F:\\Elementronics\\src\\components\\header\\elements\\Menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








 // import WishlistSidebar from "../../wishlist/WishlistSidebar";






function Menu({
  containerType
}) {
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.cartReducer); // const wishlistState = useSelector((state) => state.wishlistReducer);

  const {
    0: cartSidebarOpen,
    1: setCartSidebarOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: menuSidebarOpen,
    1: setMenuSidebarOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); // const [wishlistSidebarOpen, setWishlistSidebarOpen] = useState(false);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
    type: containerType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "menu-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx("a", {
    href: "#",
    className: "menu-sidebar-opener",
    onClick: e => {
      e.preventDefault();
      setMenuSidebarOpen(true);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  })), __jsx("div", {
    className: "menu-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("h3", {
    style: {
      color: "#ffffff"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 19
    }
  }, "Elementronics")))), __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    fillData: _data_product_json__WEBPACK_IMPORTED_MODULE_7__,
    placeholder: "What are you looking for ?",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "menu-functions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "menu-function-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlineHome"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "menu-function-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + "/shop/checkout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }, __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_6__["RiMessageLine"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "menu-function-item",
    onClick: () => setCartSidebarOpen(true),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlineShoppingCart"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_11__["getTotalProductInCart"])(cartState))), __jsx("div", {
    className: "menu-function-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + "/shop/checkout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 17
    }
  }, __jsx(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlineUser"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 19
    }
  }))))))), __jsx("div", {
    className: "menu-mobile-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx(_SearchBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    fillData: _data_product_json__WEBPACK_IMPORTED_MODULE_7__,
    placeholder: "Searching...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    placement: "right",
    title: `Shopping cart (${Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_11__["getTotalProductInCart"])(cartState)})`,
    closable: true,
    onClose: () => setCartSidebarOpen(false),
    closeIcon: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 13
      }
    }, "Close"), " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["CloseOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 26
      }
    })),
    visible: cartSidebarOpen,
    width: 445,
    className: "menu-side",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }, __jsx(_cart_CartSidebar__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  })), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Drawer"], {
    placement: "right",
    closable: true,
    title: " ",
    onClose: () => setMenuSidebarOpen(false),
    closeIcon: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 13
      }
    }, "Close"), " ", __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["CloseOutlined"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 26
      }
    })),
    visible: menuSidebarOpen,
    width: 350,
    className: "menu-side",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }, __jsx(_MenuSidebar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Menu));

/***/ }),

/***/ "./src/components/header/elements/MenuSidebar.js":
/*!*******************************************************!*\
  !*** ./src/components/header/elements/MenuSidebar.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../redux/actions/globalActions */ "./src/redux/actions/globalActions.js");
var _jsxFileName = "F:\\Elementronics\\src\\components\\header\\elements\\MenuSidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function MenuSidebar() {
  const {
    SubMenu
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Menu"];
  const {
    Option
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const globalState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.globalReducer);

  const onSelectLanguage = value => {
    dispatch(Object(_redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_4__["setGlobalLanguage"])(value));
  };

  const onSelectCurrency = value => {
    dispatch(Object(_redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_4__["setGlobalCurrency"])(value));
  };

  return __jsx("div", {
    className: "menu-sidebar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    mode: "inline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(SubMenu, {
    key: "sub1",
    title: "Homepages",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, "Homepage 1"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/homepage2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, "Homepage 2"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/homepage3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "Homepage 3"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/homepage4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 15
    }
  }, "Homepage 4")))), __jsx(SubMenu, {
    key: "sub2",
    title: "Shop",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx(SubMenu, {
    key: "sub2-1",
    title: "Shop detail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/shop/product-detail/product-detail-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, "Product Detail 1"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/shop/product-detail/product-detail-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, "Product Detail 2"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "7",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/shop/product-detail/product-detail-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 17
    }
  }, "Product Detail 3")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "8",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/shop/checkout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 15
    }
  }, "Checkout"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "9",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "/shop/checkout-complete",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 15
    }
  }, "Checkout Complete")))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "10",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, "Help"))), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    key: "11",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "" + "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, "Offer")))), __jsx("div", {
    className: "menu-sidebar-selects",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: globalState.language,
    style: {
      width: 120
    },
    bordered: false,
    onChange: onSelectLanguage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }
  }, __jsx(Option, {
    value: "en",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, "English"), __jsx(Option, {
    value: "jp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 11
    }
  }, "Japanese"), __jsx(Option, {
    value: "vi",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 11
    }
  }, "Vietnamese")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    defaultValue: globalState.currency.currency,
    style: {
      width: 150
    },
    bordered: false,
    onChange: onSelectCurrency,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 9
    }
  }, __jsx(Option, {
    value: "USD",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, "USD - Dollar"), __jsx(Option, {
    value: "JPY",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, "JPY - Yen"), __jsx(Option, {
    value: "VND",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, "VND - Vietnam dong"))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(MenuSidebar));

/***/ }),

/***/ "./src/components/header/elements/SearchBar.js":
/*!*****************************************************!*\
  !*** ./src/components/header/elements/SearchBar.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_defines__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/defines */ "./src/common/defines.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/actions/globalActions */ "./src/redux/actions/globalActions.js");
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../redux/actions/shopActions */ "./src/redux/actions/shopActions.js");
/* harmony import */ var _common_useDebound__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/useDebound */ "./src/common/useDebound.js");
var _jsxFileName = "F:\\Elementronics\\src\\components\\header\\elements\\SearchBar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function SearchBarMobile({
  fillData,
  placeholder
}) {
  const {
    Option
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");
  const {
    0: showDropdownOptions,
    1: setShowDropdownOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const globalState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.globalReducer);
  const deboundValue = Object(_common_useDebound__WEBPACK_IMPORTED_MODULE_8__["default"])(search, 300);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    dispatch(Object(_redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_6__["setGlobalSearch"])(deboundValue));
  }, [deboundValue]);

  const renderAutoFillItem = () => {
    let product = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_5__["getProductsByCategory"])(fillData, globalState.category);
    return product.map(item => ({
      value: item.name
    }));
  };

  const onSelectCateory = value => {
    dispatch(Object(_redux_actions_globalActions__WEBPACK_IMPORTED_MODULE_6__["setGlobalCategory"])(value));
    dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_7__["setSubCategory"])(""));
  };

  const openDropdownOption = value => {
    setShowDropdownOptions(true);
    setSearch(value);
  };

  const closeDropdownOption = () => {
    setShowDropdownOptions(false);
  };

  const onSelectOption = (value, option) => {
    setSearch(value);
    closeDropdownOption();
  };

  const onSearch = () => {
    if (!search || search === "") {
      router.push("/");
    } else {
      router.push({
        pathname: "/",
        query: {
          q: search
        }
      });
    }
  };

  return __jsx("div", {
    className: "menu-search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "menu-search__form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    className: "menu-search__form-select",
    defaultValue: globalState.category,
    style: {
      width: 150
    },
    onChange: onSelectCateory,
    value: globalState.category,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, _common_defines__WEBPACK_IMPORTED_MODULE_4__["SHOP"].category.map((item, index) => __jsx(Option, {
    key: index,
    value: item.name,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, item.name))), __jsx("div", {
    className: "menu-search__form-input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["AutoComplete"], {
    allowClear: true,
    backfill: true,
    open: showDropdownOptions,
    onSearch: openDropdownOption,
    onBlur: closeDropdownOption,
    onSelect: onSelectOption,
    options: renderAutoFillItem(),
    placeholder: placeholder,
    filterOption: (inputValue, option) => option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: onSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }, __jsx("i", {
    className: "icon_search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SearchBarMobile));

/***/ }),

/***/ "./src/components/header/elements/TopNav.js":
/*!**************************************************!*\
  !*** ./src/components/header/elements/TopNav.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../other/Container */ "./src/components/other/Container.js");
var _jsxFileName = "F:\\Elementronics\\src\\components\\header\\elements\\TopNav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
// import { Select } from "antd";
 // import { useSelector, useDispatch } from "react-redux";

 // import {
//   setGlobalLanguage,
//   setGlobalCurrency,
// } from "../../../redux/actions/globalActions";



function TopNav({
  containerType
}) {
  // const { Option } = Select;
  // const dispatch = useDispatch();
  // const globalState = useSelector((state) => state.globalReducer);
  // const onSelectLanguage = (value) => {
  //   dispatch(setGlobalLanguage(value));
  // };
  // const onSelectCurrency = (value) => {
  //   dispatch(setGlobalCurrency(value));
  // };
  return __jsx("div", {
    className: "top-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: containerType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "top-nav-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "top-nav-links",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "top-nav-links__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "" + "/#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon_phone",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }), " +8801711-223344"))), __jsx("div", {
    className: "top-nav-links__item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_0___default.a, {
    href: "" + "/#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon_mail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }), "support@elementronics.com")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(TopNav));

/***/ }),

/***/ "./src/components/layouts/LayoutOne.js":
/*!*********************************************!*\
  !*** ./src/components/layouts/LayoutOne.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header/Header */ "./src/components/header/Header.js");
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../footer/Footer */ "./src/components/footer/Footer.js");
/* harmony import */ var _common_WithHeaderScroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/WithHeaderScroll */ "./src/common/WithHeaderScroll.js");
/* harmony import */ var _subpages_SubpagesSidebar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subpages/SubpagesSidebar */ "./src/components/subpages/SubpagesSidebar.js");
var _jsxFileName = "F:\\Elementronics\\src\\components\\layouts\\LayoutOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const ScrollHeader = Object(_common_WithHeaderScroll__WEBPACK_IMPORTED_MODULE_6__["default"])(_header_Header__WEBPACK_IMPORTED_MODULE_4__["default"]);

function LayoutOne({
  title,
  headerStyle,
  containerType,
  children,
  clearSpaceTop
}) {
  antd__WEBPACK_IMPORTED_MODULE_2__["message"].config({
    maxCount: 3,
    duration: 1
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, title)), __jsx(ScrollHeader, {
    headerStyle: headerStyle,
    containerType: containerType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: `content ${classnames__WEBPACK_IMPORTED_MODULE_3___default()({
      "clear-top": clearSpaceTop
    })}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, children), __jsx(_footer_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    containerType: containerType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["BackTop"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }), __jsx(_subpages_SubpagesSidebar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(LayoutOne));

/***/ }),

/***/ "./src/components/other/Container.js":
/*!*******************************************!*\
  !*** ./src/components/other/Container.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Container; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Elementronics\\src\\components\\other\\Container.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Container({
  type,
  children
}) {
  const renderContainerType = type => {
    switch (type) {
      case "fluid":
        return "container-fluid";

      default:
        return "container";
    }
  };

  return __jsx("div", {
    className: renderContainerType(type),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 10
    }
  }, children);
}

/***/ }),

/***/ "./src/components/subpages/SubpagesSidebar.js":
/*!****************************************************!*\
  !*** ./src/components/subpages/SubpagesSidebar.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubpagesSidebar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "F:\\Elementronics\\src\\components\\subpages\\SubpagesSidebar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function SubpagesSidebar() {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  });
}

/***/ }),

/***/ "./src/data/footer-links.json":
/*!************************************!*\
  !*** ./src/data/footer-links.json ***!
  \************************************/
/*! exports provided: information, account, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"information\":[{\"name\":\"About Us\",\"src\":\"/about\"},{\"name\":\"Contact Us\",\"src\":\"/contact\"},{\"name\":\"Testmonials\",\"src\":\"/contact\"},{\"name\":\"Terms & Conditions\",\"src\":\"/contact\"},{\"name\":\"Affiliate Program\",\"src\":\"/contact\"}],\"account\":[{\"name\":\"Orders\",\"src\":\"/contact\"},{\"name\":\"Downloads\",\"src\":\"/contact\"},{\"name\":\"Addresses\",\"src\":\"/contact\"},{\"name\":\"Account details\",\"src\":\"/contact\"},{\"name\":\"Logout\",\"src\":\"/contact\"}]}");

/***/ }),

/***/ "./src/data/product.json":
/*!*******************************!*\
  !*** ./src/data/product.json ***!
  \*******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"id\":\"1\",\"category\":\"clothing\",\"subCategory\":\"coat\",\"name\":\"Jack & Jones Men's T-Shirt\",\"rate\":4,\"reviewCount\":10,\"price\":59.99,\"discount\":20,\"new\":true,\"quantity\":8,\"sex\":\"men\",\"size\":[{\"name\":\"XXL\"},{\"name\":\"XL\"},{\"name\":\"L\"}],\"thumbImage\":[\"/assets/images/products/clothes/1.png\",\"/assets/images/products/clothes/2.png\"],\"images\":[\"/assets/images/products/clothes/1.png\",\"/assets/images/products/clothes/2.png\",\"/assets/images/products/clothes/3.png\",\"/assets/images/products/clothes/4.png\"],\"description\":\"\",\"slug\":\"jack-jones-mens-t-shirt-1\"},{\"id\":\"2\",\"category\":\"clothing\",\"subCategory\":\"coat\",\"name\":\"Fold Over Collar Plain Blazers\",\"rate\":5,\"price\":84,\"quantity\":6,\"isNew\":true,\"sex\":\"men\",\"variation\":[{\"color\":\"red\",\"colorCode\":\"#8B0000\"},{\"color\":\"blue\",\"colorCode\":\"#4169E1\"}],\"thumbImage\":[\"/assets/images/products/clothes/2.png\",\"/assets/images/products/clothes/3.png\"],\"images\":[\"/assets/images/products/clothes/2.png\",\"/assets/images/products/clothes/3.png\",\"/assets/images/products/clothes/4.png\",\"/assets/images/products/clothes/5.png\"],\"description\":\"\",\"slug\":\"fold-over-collar-plain-blazers-2\"},{\"id\":\"3\",\"category\":\"clothing\",\"subCategory\":\"shirt\",\"name\":\"Ivory Check Longline Tunic Shirt\",\"rate\":5,\"price\":69,\"quantity\":12,\"sex\":\"men\",\"size\":[{\"name\":\"XXL\"},{\"name\":\"XL\"},{\"name\":\"L\"}],\"variation\":[{\"color\":\"red\",\"colorCode\":\"#8B0000\"},{\"color\":\"blue\",\"colorCode\":\"#4169E1\"}],\"thumbImage\":[\"/assets/images/products/clothes/3.png\",\"/assets/images/products/clothes/4.png\"],\"images\":[\"/assets/images/products/clothes/3.png\",\"/assets/images/products/clothes/4.png\",\"/assets/images/products/clothes/5.png\",\"/assets/images/products/clothes/6.png\"],\"description\":\"\",\"slug\":\"ivory-check-longline-tunic-shirt-3\"},{\"id\":\"4\",\"category\":\"clothing\",\"subCategory\":\"pants\",\"name\":\"Vero Moda Coco Wide Pant\",\"rate\":3,\"price\":36,\"quantity\":4,\"sex\":\"men\",\"thumbImage\":[\"/assets/images/products/clothes/5.png\",\"/assets/images/products/clothes/6.png\"],\"images\":[\"/assets/images/products/clothes/5.png\",\"/assets/images/products/clothes/6.png\",\"/assets/images/products/clothes/7.png\",\"/assets/images/products/clothes/8.png\"],\"description\":\"\",\"slug\":\"vero-moda-coco-wide-pant-4\"},{\"id\":\"5\",\"category\":\"clothing\",\"subCategory\":\"suits\",\"name\":\"Boxy Cardigan\",\"rate\":4,\"price\":72,\"discount\":13,\"quantity\":9,\"sex\":\"women\",\"thumbImage\":[\"/assets/images/products/clothes/7.png\",\"/assets/images/products/clothes/8.png\"],\"images\":[\"/assets/images/products/clothes/7.png\",\"/assets/images/products/clothes/8.png\",\"/assets/images/products/clothes/9.png\",\"/assets/images/products/clothes/10.png\"],\"description\":\"\",\"slug\":\"boxy-cardigan-5\"},{\"id\":\"6\",\"category\":\"clothing\",\"subCategory\":\"dress\",\"name\":\"New now committed brothers & sisters\",\"rate\":5,\"price\":69,\"quantity\":9,\"sex\":\"women\",\"thumbImage\":[\"/assets/images/products/clothes/8.png\",\"/assets/images/products/clothes/9.png\"],\"images\":[\"/assets/images/products/clothes/8.png\",\"/assets/images/products/clothes/9.png\",\"/assets/images/products/clothes/10.png\",\"/assets/images/products/clothes/11.png\"],\"description\":\"\",\"slug\":\"new-now-committed-brothers-sisters-6\"},{\"id\":\"7\",\"category\":\"clothing\",\"subCategory\":\"shorts\",\"name\":\"Scotch Soda Skim Jeans\",\"rate\":5,\"price\":29,\"isNew\":true,\"quantity\":0,\"sex\":\"women\",\"thumbImage\":[\"/assets/images/products/clothes/9.png\",\"/assets/images/products/clothes/10.png\"],\"images\":[\"/assets/images/products/clothes/9.png\",\"/assets/images/products/clothes/10.png\",\"/assets/images/products/clothes/11.png\",\"/assets/images/products/clothes/12.png\"],\"description\":\"\",\"slug\":\"scotch-soda-skim-jeans-7\"},{\"id\":\"8\",\"category\":\"clothing\",\"subCategory\":\"dress\",\"name\":\"Champion dress\",\"rate\":4,\"price\":35,\"quantity\":16,\"sex\":\"men\",\"thumbImage\":[\"/assets/images/products/clothes/10.png\",\"/assets/images/products/clothes/11.png\"],\"images\":[\"/assets/images/products/clothes/10.png\",\"/assets/images/products/clothes/11.png\",\"/assets/images/products/clothes/12.png\",\"/assets/images/products/clothes/13.png\"],\"description\":\"\",\"slug\":\"champion-dress-8\"},{\"id\":\"9\",\"category\":\"clothing\",\"subCategory\":\"suits\",\"name\":\"Solid Notch Lapel Single Button Long Sleeve Blazer\",\"rate\":5,\"price\":75,\"quantity\":6,\"sex\":\"men\",\"thumbImage\":[\"/assets/images/products/clothes/11.png\",\"/assets/images/products/clothes/12.png\"],\"images\":[\"/assets/images/products/clothes/11.png\",\"/assets/images/products/clothes/12.png\",\"/assets/images/products/clothes/13.png\",\"/assets/images/products/clothes/14.png\"],\"description\":\"\",\"slug\":\"solid-notch-lapel-single-button-long-sleeve-blazer-9\"},{\"id\":\"10\",\"category\":\"clothing\",\"subCategory\":\"shirt\",\"name\":\"Levi'S Western Denim Shirt\",\"rate\":5,\"price\":37,\"quantity\":25,\"sex\":\"men\",\"thumbImage\":[\"/assets/images/products/clothes/12.png\",\"/assets/images/products/clothes/13.png\"],\"images\":[\"/assets/images/products/clothes/12.png\",\"/assets/images/products/clothes/13.png\",\"/assets/images/products/clothes/14.png\",\"/assets/images/products/clothes/15.png\"],\"description\":\"\",\"slug\":\"levis-western-denim-shirt-10\"},{\"id\":\"11\",\"category\":\"clothing\",\"subCategory\":\"jacket\",\"name\":\"Loap Infery Kids Winter Jacket\",\"rate\":5,\"price\":37,\"quantity\":25,\"sex\":\"men\",\"thumbImage\":[\"/assets/images/products/clothes/13.png\",\"/assets/images/products/clothes/14.png\"],\"images\":[\"/assets/images/products/clothes/13.png\",\"/assets/images/products/clothes/14.png\",\"/assets/images/products/clothes/15.png\",\"/assets/images/products/clothes/16.png\"],\"description\":\"\",\"slug\":\"loap-infery-kids-winter-jacket-11\"},{\"id\":\"12\",\"category\":\"clothing\",\"subCategory\":\"pants\",\"name\":\"Richtan Hero\",\"rate\":4,\"price\":22,\"quantity\":30,\"isNew\":true,\"sex\":\"men\",\"thumbImage\":[\"/assets/images/products/clothes/14.png\",\"/assets/images/products/clothes/15.png\"],\"images\":[\"/assets/images/products/clothes/14.png\",\"/assets/images/products/clothes/15.png\",\"/assets/images/products/clothes/16.png\",\"/assets/images/products/clothes/17.png\"],\"description\":\"\",\"slug\":\"richtan-hero-12\"},{\"id\":\"13\",\"category\":\"clothing\",\"subCategory\":\"suits\",\"name\":\"David Jones\",\"rate\":5,\"price\":78,\"quantity\":3,\"sex\":\"men\",\"thumbImage\":[\"/assets/images/products/clothes/15.png\",\"/assets/images/products/clothes/16.png\"],\"images\":[\"/assets/images/products/clothes/15.png\",\"/assets/images/products/clothes/16.png\",\"/assets/images/products/clothes/17.png\",\"/assets/images/products/clothes/18.png\"],\"description\":\"\",\"slug\":\"david-jones-13\"},{\"id\":\"14\",\"category\":\"clothing\",\"subCategory\":\"dress\",\"name\":\"Basic Hollow Out Flared Midi Skirt\",\"rate\":3,\"price\":22,\"quantity\":18,\"sex\":\"men\",\"thumbImage\":[\"/assets/images/products/clothes/16.png\",\"/assets/images/products/clothes/17.png\"],\"images\":[\"/assets/images/products/clothes/16.png\",\"/assets/images/products/clothes/17.png\",\"/assets/images/products/clothes/18.png\",\"/assets/images/products/clothes/19.png\"],\"description\":\"\",\"slug\":\"basic-hollow-out-flared-midi-skirt-14\"},{\"id\":\"15\",\"category\":\"clothing\",\"subCategory\":\"shorts\",\"name\":\"Plain Midi Flared Skirts\",\"rate\":3,\"price\":22,\"quantity\":18,\"discount\":4,\"sex\":\"men\",\"thumbImage\":[\"/assets/images/products/clothes/17.png\",\"/assets/images/products/clothes/18.png\"],\"images\":[\"/assets/images/products/clothes/17.png\",\"/assets/images/products/clothes/18.png\",\"/assets/images/products/clothes/19.png\",\"/assets/images/products/clothes/20.png\"],\"description\":\"\",\"slug\":\"plain-midi-flared-skirts-15\"},{\"id\":\"16\",\"category\":\"clothing\",\"subCategory\":\"shirt\",\"name\":\"Lapel Zips Plain Long Sleeve Jackets\",\"rate\":5,\"price\":36,\"quantity\":6,\"sex\":\"men\",\"thumbImage\":[\"/assets/images/products/clothes/18.png\",\"/assets/images/products/clothes/19.png\"],\"images\":[\"/assets/images/products/clothes/18.png\",\"/assets/images/products/clothes/19.png\",\"/assets/images/products/clothes/20.png\",\"/assets/images/products/clothes/1.png\"],\"description\":\"\",\"slug\":\"lapel-zips-plain-long-sleeve-jackets-16\"},{\"id\":\"17\",\"category\":\"fruits\",\"subCategory\":\"vegatables\",\"name\":\"Onion\",\"rate\":5,\"price\":12,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/fruits/1.png\",\"/assets/images/products/fruits/2.png\"],\"images\":[\"/assets/images/products/fruits/1.png\",\"/assets/images/products/fruits/2.png\",\"/assets/images/products/fruits/3.png\",\"/assets/images/products/fruits/4.png\"],\"description\":\"\",\"slug\":\"onion-17\"},{\"id\":\"18\",\"category\":\"fruits\",\"subCategory\":\"vegatables\",\"name\":\"Samba onion\",\"rate\":5,\"price\":12,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/fruits/2.png\",\"/assets/images/products/fruits/3.png\"],\"images\":[\"/assets/images/products/fruits/2.png\",\"/assets/images/products/fruits/3.png\",\"/assets/images/products/fruits/4.png\",\"/assets/images/products/fruits/5.png\"],\"description\":\"\",\"slug\":\"samba-onion-18\"},{\"id\":\"19\",\"category\":\"fruits\",\"subCategory\":\"vegatables\",\"name\":\"tomato\",\"rate\":4,\"price\":8,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/fruits/3.png\",\"/assets/images/products/fruits/4.png\"],\"images\":[\"/assets/images/products/fruits/3.png\",\"/assets/images/products/fruits/4.png\",\"/assets/images/products/fruits/5.png\",\"/assets/images/products/fruits/6.png\"],\"description\":\"\",\"slug\":\"tomato-19\"},{\"id\":\"20\",\"category\":\"fruits\",\"subCategory\":\"fruits\",\"name\":\"potatoes\",\"rate\":5,\"price\":12,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/fruits/4.png\",\"/assets/images/products/fruits/5.png\"],\"images\":[\"/assets/images/products/fruits/4.png\",\"/assets/images/products/fruits/5.png\",\"/assets/images/products/fruits/6.png\",\"/assets/images/products/fruits/7.png\"],\"description\":\"\",\"slug\":\"potatoes-20\"},{\"id\":\"21\",\"category\":\"fruits\",\"subCategory\":\"vegatables\",\"name\":\"lady finger\",\"rate\":3,\"price\":6,\"quantity\":15,\"thumbImage\":[\"/assets/images/products/fruits/5.png\",\"/assets/images/products/fruits/6.png\"],\"images\":[\"/assets/images/products/fruits/5.png\",\"/assets/images/products/fruits/6.png\",\"/assets/images/products/fruits/7.png\",\"/assets/images/products/fruits/8.png\"],\"description\":\"\",\"slug\":\"lady-finger-21\"},{\"id\":\"22\",\"category\":\"fruits\",\"subCategory\":\"vegatables\",\"name\":\"gingerbone\",\"rate\":4,\"price\":10,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/fruits/6.png\",\"/assets/images/products/fruits/7.png\"],\"images\":[\"/assets/images/products/fruits/6.png\",\"/assets/images/products/fruits/7.png\",\"/assets/images/products/fruits/8.png\",\"/assets/images/products/fruits/9.png\"],\"description\":\"\",\"slug\":\"gingerbone-22\"},{\"id\":\"23\",\"category\":\"fruits\",\"subCategory\":\"fruits\",\"name\":\"lemon\",\"rate\":5,\"price\":5,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/fruits/7.png\",\"/assets/images/products/fruits/8.png\"],\"images\":[\"/assets/images/products/fruits/7.png\",\"/assets/images/products/fruits/8.png\",\"/assets/images/products/fruits/9.png\",\"/assets/images/products/fruits/10.png\"],\"description\":\"\",\"slug\":\"lemon-23\"},{\"id\":\"24\",\"category\":\"fruits\",\"subCategory\":\"fruits\",\"name\":\"pear\",\"rate\":4,\"price\":10,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/fruits/8.png\",\"/assets/images/products/fruits/9.png\"],\"images\":[\"/assets/images/products/fruits/8.png\",\"/assets/images/products/fruits/9.png\",\"/assets/images/products/fruits/10.png\",\"/assets/images/products/fruits/11.png\"],\"description\":\"\",\"slug\":\"pear-24\"},{\"id\":\"25\",\"category\":\"fruits\",\"subCategory\":\"vegatables\",\"name\":\"Green capsicum\",\"rate\":5,\"price\":13,\"quantity\":9,\"thumbImage\":[\"/assets/images/products/fruits/9.png\",\"/assets/images/products/fruits/10.png\"],\"images\":[\"/assets/images/products/fruits/9.png\",\"/assets/images/products/fruits/10.png\",\"/assets/images/products/fruits/11.png\",\"/assets/images/products/fruits/12.png\"],\"description\":\"\",\"slug\":\"green-capsicum-25\"},{\"id\":\"26\",\"category\":\"fruits\",\"subCategory\":\"vegatables\",\"name\":\"Garlic\",\"rate\":5,\"price\":5,\"quantity\":26,\"thumbImage\":[\"/assets/images/products/fruits/10.png\",\"/assets/images/products/fruits/11.png\"],\"images\":[\"/assets/images/products/fruits/10.png\",\"/assets/images/products/fruits/11.png\",\"/assets/images/products/fruits/12.png\",\"/assets/images/products/fruits/12.png\"],\"description\":\"\",\"slug\":\"garlic-26\"},{\"id\":\"27\",\"category\":\"fruits\",\"subCategory\":\"nut\",\"name\":\"coconut\",\"rate\":5,\"price\":20,\"quantity\":30,\"thumbImage\":[\"/assets/images/products/fruits/11.png\",\"/assets/images/products/fruits/12.png\"],\"images\":[\"/assets/images/products/fruits/11.png\",\"/assets/images/products/fruits/12.png\",\"/assets/images/products/fruits/13.png\",\"/assets/images/products/fruits/14.png\"],\"description\":\"\",\"slug\":\"coconut-27\"},{\"id\":\"28\",\"category\":\"fruits\",\"subCategory\":\"fruits\",\"name\":\"Watermelon\",\"rate\":4,\"price\":22,\"discount\":2,\"quantity\":17,\"thumbImage\":[\"/assets/images/products/fruits/12.png\",\"/assets/images/products/fruits/13.png\"],\"images\":[\"/assets/images/products/fruits/12.png\",\"/assets/images/products/fruits/13.png\",\"/assets/images/products/fruits/14.png\",\"/assets/images/products/fruits/15.png\"],\"description\":\"\",\"slug\":\"watermelon-28\"},{\"id\":\"29\",\"category\":\"fruits\",\"subCategory\":\"vegatables\",\"name\":\"bitter melon\",\"rate\":4,\"price\":11,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/fruits/13.png\",\"/assets/images/products/fruits/14.png\"],\"images\":[\"/assets/images/products/fruits/13.png\",\"/assets/images/products/fruits/14.png\",\"/assets/images/products/fruits/15.png\",\"/assets/images/products/fruits/16.png\"],\"description\":\"\",\"slug\":\"bitter-melon-29\"},{\"id\":\"30\",\"category\":\"fruits\",\"subCategory\":\"fruits\",\"name\":\"Mango\",\"rate\":5,\"price\":26,\"discount\":5,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/fruits/14.png\",\"/assets/images/products/fruits/15.png\"],\"images\":[\"/assets/images/products/fruits/14.png\",\"/assets/images/products/fruits/15.png\",\"/assets/images/products/fruits/16.png\",\"/assets/images/products/fruits/17.png\"],\"description\":\"\",\"slug\":\"mango-30\"},{\"id\":\"31\",\"category\":\"fruits\",\"subCategory\":\"fruits\",\"name\":\"Pomegranate\",\"rate\":4,\"price\":11,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/fruits/15.png\",\"/assets/images/products/fruits/16.png\"],\"images\":[\"/assets/images/products/fruits/15.png\",\"/assets/images/products/fruits/16.png\",\"/assets/images/products/fruits/17.png\",\"/assets/images/products/fruits/18.png\"],\"description\":\"\",\"slug\":\"pomegranate-31\"},{\"id\":\"32\",\"category\":\"fruits\",\"subCategory\":\"vegatables\",\"name\":\"Cabbage\",\"rate\":3,\"price\":16,\"quantity\":20,\"thumbImage\":[\"/assets/images/products/fruits/16.png\",\"/assets/images/products/fruits/17.png\"],\"images\":[\"/assets/images/products/fruits/16.png\",\"/assets/images/products/fruits/17.png\",\"/assets/images/products/fruits/18.png\",\"/assets/images/products/fruits/19.png\"],\"description\":\"\",\"slug\":\"cabbage-32\"},{\"id\":\"33\",\"category\":\"fruits\",\"subCategory\":\"fruits\",\"name\":\"Orange\",\"rate\":5,\"price\":13,\"isNew\":true,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/fruits/17.png\",\"/assets/images/products/fruits/18.png\"],\"images\":[\"/assets/images/products/fruits/17.png\",\"/assets/images/products/fruits/18.png\",\"/assets/images/products/fruits/19.png\",\"/assets/images/products/fruits/20.png\"],\"description\":\"\",\"slug\":\"pomegranate-31\"},{\"id\":\"34\",\"category\":\"fruits\",\"subCategory\":\"vegatables\",\"name\":\"Cauliflower\",\"rate\":4,\"price\":23,\"quantity\":8,\"thumbImage\":[\"/assets/images/products/fruits/18.png\",\"/assets/images/products/fruits/19.png\"],\"images\":[\"/assets/images/products/fruits/18.png\",\"/assets/images/products/fruits/19.png\",\"/assets/images/products/fruits/20.png\",\"/assets/images/products/fruits/1.png\"],\"description\":\"\",\"slug\":\"cauliflower-34\"},{\"id\":\"35\",\"category\":\"electronic\",\"subCategory\":\"fridge\",\"name\":\"Panasonic Inverter\",\"rate\":4,\"price\":356,\"quantity\":8,\"thumbImage\":[\"/assets/images/products/electronic/1.png\",\"/assets/images/products/electronic/2.png\"],\"images\":[\"/assets/images/products/electronic/1.png\",\"/assets/images/products/electronic/2.png\",\"/assets/images/products/electronic/3.png\",\"/assets/images/products/electronic/4.png\"],\"description\":\"\",\"slug\":\"panasonic-inverter-35\"},{\"id\":\"36\",\"category\":\"electronic\",\"subCategory\":\"tv\",\"name\":\"LG Smart Tv 4k 55 inch\",\"rate\":4,\"price\":399,\"discount\":50,\"quantity\":8,\"thumbImage\":[\"/assets/images/products/electronic/2.png\",\"/assets/images/products/electronic/3.png\"],\"images\":[\"/assets/images/products/electronic/2.png\",\"/assets/images/products/electronic/3.png\",\"/assets/images/products/electronic/4.png\",\"/assets/images/products/electronic/5.png\"],\"description\":\"\",\"slug\":\"lg-smart-tv-4k-55-inch-36\"},{\"id\":\"37\",\"category\":\"electronic\",\"subCategory\":\"tv\",\"name\":\"Samsung Smart Tv 4K 55 inch\",\"rate\":5,\"price\":599,\"quantity\":10,\"thumbImage\":[\"/assets/images/products/electronic/3.png\",\"/assets/images/products/electronic/4.png\"],\"images\":[\"/assets/images/products/electronic/3.png\",\"/assets/images/products/electronic/4.png\",\"/assets/images/products/electronic/5.png\",\"/assets/images/products/electronic/6.png\"],\"description\":\"\",\"slug\":\"samsung-smart-tv-4k-55-inch-37\"},{\"id\":\"38\",\"category\":\"electronic\",\"subCategory\":\"phone\",\"name\":\"Apple iphone 11 pro max\",\"rate\":4,\"price\":356,\"quantity\":8,\"thumbImage\":[\"/assets/images/products/electronic/4.png\",\"/assets/images/products/electronic/5.png\"],\"images\":[\"/assets/images/products/electronic/4.png\",\"/assets/images/products/electronic/5.png\",\"/assets/images/products/electronic/6.png\",\"/assets/images/products/electronic/7.png\"],\"description\":\"\",\"slug\":\"apple-iphone-11-pro-max-38\"},{\"id\":\"39\",\"category\":\"electronic\",\"subCategory\":\"phone\",\"name\":\"Apple iphone 6s\",\"rate\":5,\"price\":299,\"quantity\":13,\"thumbImage\":[\"/assets/images/products/electronic/5.png\",\"/assets/images/products/electronic/6.png\"],\"images\":[\"/assets/images/products/electronic/5.png\",\"/assets/images/products/electronic/6.png\",\"/assets/images/products/electronic/7.png\",\"/assets/images/products/electronic/8.png\"],\"description\":\"\",\"slug\":\"apple-iphone-6s-39\"},{\"id\":\"40\",\"category\":\"electronic\",\"subCategory\":\"fridge\",\"name\":\"Bosch 7 kg Fully-Automatic Front Loading Washing Machine\",\"rate\":4,\"price\":799,\"isNew\":true,\"quantity\":12,\"thumbImage\":[\"/assets/images/products/electronic/6.png\",\"/assets/images/products/electronic/7.png\"],\"images\":[\"/assets/images/products/electronic/6.png\",\"/assets/images/products/electronic/7.png\",\"/assets/images/products/electronic/8.png\",\"/assets/images/products/electronic/9.png\"],\"description\":\"\",\"slug\":\"bosch-7-kg-fully-automatic-front-loading-washing-machine-40\"},{\"id\":\"41\",\"category\":\"electronic\",\"subCategory\":\"air conditioning\",\"name\":\"Split Wall Mounted Air Conditioner 12000 Btu With Led\",\"rate\":3,\"price\":459,\"quantity\":8,\"thumbImage\":[\"/assets/images/products/electronic/7.png\",\"/assets/images/products/electronic/8.png\"],\"images\":[\"/assets/images/products/electronic/7.png\",\"/assets/images/products/electronic/8.png\",\"/assets/images/products/electronic/9.png\",\"/assets/images/products/electronic/10.png\"],\"description\":\"\",\"slug\":\"split-wall-mounted-air-conditioner-12000-btu-with-led-41\"},{\"id\":\"42\",\"category\":\"electronic\",\"subCategory\":\"fan\",\"name\":\"Challenge Black Oscillating Desk Fan\",\"rate\":5,\"price\":199,\"quantity\":13,\"thumbImage\":[\"/assets/images/products/electronic/8.png\",\"/assets/images/products/electronic/9.png\"],\"images\":[\"/assets/images/products/electronic/8.png\",\"/assets/images/products/electronic/9.png\",\"/assets/images/products/electronic/10.png\",\"/assets/images/products/electronic/11.png\"],\"description\":\"\",\"slug\":\"challenge-black-oscillating-desk-fan-42\"},{\"id\":\"43\",\"category\":\"electronic\",\"subCategory\":\"fan\",\"name\":\"Lasko Adjustable-Height 16\",\"rate\":3,\"price\":215,\"quantity\":8,\"thumbImage\":[\"/assets/images/products/electronic/9.png\",\"/assets/images/products/electronic/10.png\"],\"images\":[\"/assets/images/products/electronic/9.png\",\"/assets/images/products/electronic/10.png\",\"/assets/images/products/electronic/11.png\",\"/assets/images/products/electronic/12.png\"],\"description\":\"\",\"slug\":\"lasko-adjustable-height-16-43\"},{\"id\":\"44\",\"category\":\"electronic\",\"subCategory\":\"speaker\",\"name\":\"JBL Link Music Bluetooth Speaker\",\"rate\":5,\"price\":239,\"quantity\":4,\"thumbImage\":[\"/assets/images/products/electronic/10.png\",\"/assets/images/products/electronic/11.png\"],\"images\":[\"/assets/images/products/electronic/10.png\",\"/assets/images/products/electronic/11.png\",\"/assets/images/products/electronic/12.png\",\"/assets/images/products/electronic/13.png\"],\"description\":\"\",\"slug\":\"jbl-link-music-bluetooth-speaker-44\"},{\"id\":\"45\",\"category\":\"electronic\",\"subCategory\":\"speaker\",\"name\":\"Sony High Power XB60 Portable Bluetooth Speaker\",\"rate\":5,\"price\":199,\"quantity\":23,\"thumbImage\":[\"/assets/images/products/electronic/11.png\",\"/assets/images/products/electronic/12.png\"],\"images\":[\"/assets/images/products/electronic/11.png\",\"/assets/images/products/electronic/12.png\",\"/assets/images/products/electronic/13.png\",\"/assets/images/products/electronic/14.png\"],\"description\":\"\",\"slug\":\"sony-high-power-xb60-portable-bluetooth-speaker-45\"},{\"id\":\"46\",\"category\":\"electronic\",\"subCategory\":\"speaker\",\"name\":\"Sony Wireless Headphones WH-CH510\",\"rate\":4,\"price\":267,\"quantity\":17,\"thumbImage\":[\"/assets/images/products/electronic/12.png\",\"/assets/images/products/electronic/13.png\"],\"images\":[\"/assets/images/products/electronic/14.png\",\"/assets/images/products/electronic/15.png\",\"/assets/images/products/electronic/16.png\",\"/assets/images/products/electronic/17.png\"],\"description\":\"\",\"slug\":\"sony-wireless-headphones-wh-ch510\"},{\"id\":\"47\",\"category\":\"electronic\",\"subCategory\":\"speaker\",\"name\":\"Wired Exclusive Smart Design Sony Headphones\",\"rate\":5,\"price\":145,\"quantity\":11,\"isNew\":true,\"thumbImage\":[\"/assets/images/products/electronic/13.png\",\"/assets/images/products/electronic/14.png\"],\"images\":[\"/assets/images/products/electronic/13.png\",\"/assets/images/products/electronic/14.png\",\"/assets/images/products/electronic/15.png\",\"/assets/images/products/electronic/16.png\"],\"description\":\"\",\"slug\":\"wired-exclusive-smart-design-sony-headphones-47\"},{\"id\":\"48\",\"category\":\"electronic\",\"subCategory\":\"fridge\",\"name\":\"Playstation 4 pro edition\",\"rate\":5,\"price\":365,\"quantity\":8,\"thumbImage\":[\"/assets/images/products/electronic/14.png\",\"/assets/images/products/electronic/15.png\"],\"images\":[\"/assets/images/products/electronic/14.png\",\"/assets/images/products/electronic/15.png\",\"/assets/images/products/electronic/16.png\",\"/assets/images/products/electronic/17.png\"],\"description\":\"\",\"slug\":\"playstation-4-pro-edition-48\"},{\"id\":\"49\",\"category\":\"electronic\",\"subCategory\":\"speaker\",\"name\":\"Sony High Power XB60 Portable Bluetooth Speaker\",\"rate\":5,\"price\":199,\"quantity\":23,\"thumbImage\":[\"/assets/images/products/electronic/15.png\",\"/assets/images/products/electronic/16.png\"],\"images\":[\"/assets/images/products/electronic/15.png\",\"/assets/images/products/electronic/16.png\",\"/assets/images/products/electronic/17.png\",\"/assets/images/products/electronic/18.png\"],\"description\":\"\",\"slug\":\"sony-high-power-xb60-portable-bluetooth-speaker-45\"},{\"id\":\"50\",\"category\":\"electronic\",\"subCategory\":\"speaker\",\"name\":\"Nintendo Switch Lite Turquoise\",\"rate\":5,\"price\":229,\"quantity\":16,\"discount\":15,\"thumbImage\":[\"/assets/images/products/electronic/16.png\",\"/assets/images/products/electronic/17.png\"],\"images\":[\"/assets/images/products/electronic/16.png\",\"/assets/images/products/electronic/17.png\",\"/assets/images/products/electronic/18.png\",\"/assets/images/products/electronic/19.png\"],\"description\":\"\",\"slug\":\"nintendo-switch-lite-turquoise-50\"},{\"id\":\"51\",\"category\":\"electronic\",\"subCategory\":\"phone\",\"name\":\"Eureka PowerSpeed Bagless Upright Vacuum Cleaner\",\"rate\":4,\"price\":399,\"quantity\":4,\"thumbImage\":[\"/assets/images/products/electronic/17.png\",\"/assets/images/products/electronic/18.png\"],\"images\":[\"/assets/images/products/electronic/17.png\",\"/assets/images/products/electronic/18.png\",\"/assets/images/products/electronic/19.png\",\"/assets/images/products/electronic/20.png\"],\"description\":\"\",\"slug\":\"eureka-powerspeed-bagless-upright-vacuum-cleaner\"},{\"id\":\"52\",\"category\":\"electronic\",\"subCategory\":\"speaker\",\"name\":\"sailing smart robot vacuum cleaner powerful\",\"rate\":5,\"price\":199,\"quantity\":23,\"thumbImage\":[\"/assets/images/products/electronic/18.png\",\"/assets/images/products/electronic/19.png\"],\"images\":[\"/assets/images/products/electronic/18.png\",\"/assets/images/products/electronic/19.png\",\"/assets/images/products/electronic/20.png\",\"/assets/images/products/electronic/21png\"],\"description\":\"\",\"slug\":\"sailing-smart-robot-vacuum-cleaner-powerful-52\"},{\"id\":\"53\",\"category\":\"electronic\",\"subCategory\":\"tv\",\"name\":\"Winterhalter Undercounter Dishwasher\",\"rate\":4,\"price\":699,\"isNew\":true,\"quantity\":8,\"thumbImage\":[\"/assets/images/products/electronic/19.png\",\"/assets/images/products/electronic/20.png\"],\"images\":[\"/assets/images/products/electronic/19.png\",\"/assets/images/products/electronic/20.png\",\"/assets/images/products/electronic/1.png\",\"/assets/images/products/electronic/2.png\"],\"description\":\"\",\"slug\":\"winterhalter-undercounter-dishwasher-53\"},{\"id\":\"54\",\"category\":\"furniture\",\"subCategory\":\"chair\",\"name\":\"Afteroom Dining Chair\",\"rate\":5,\"price\":389,\"quantity\":10,\"thumbImage\":[\"/assets/images/products/furniture/1.png\",\"/assets/images/products/furniture/2.png\"],\"images\":[\"/assets/images/products/furniture/1.png\",\"/assets/images/products/furniture/2.png\",\"/assets/images/products/furniture/3.png\",\"/assets/images/products/furniture/4.png\"],\"description\":\"\",\"slug\":\"afteroom-dining-chair-54\"},{\"id\":\"55\",\"category\":\"furniture\",\"subCategory\":\"chair\",\"name\":\"Affordances Side Table\",\"rate\":5,\"price\":299,\"discount\":10,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/furniture/2.png\",\"/assets/images/products/furniture/3.png\"],\"images\":[\"/assets/images/products/furniture/2.png\",\"/assets/images/products/furniture/3.png\",\"/assets/images/products/furniture/4.png\",\"/assets/images/products/furniture/5.png\"],\"description\":\"\",\"slug\":\"affordances-side-table-55\"},{\"id\":\"56\",\"category\":\"furniture\",\"subCategory\":\"chair\",\"name\":\"Armchair 811\",\"rate\":5,\"price\":276,\"quantity\":2,\"thumbImage\":[\"/assets/images/products/furniture/3.png\",\"/assets/images/products/furniture/4.png\"],\"images\":[\"/assets/images/products/furniture/3.png\",\"/assets/images/products/furniture/4.png\",\"/assets/images/products/furniture/5.png\",\"/assets/images/products/furniture/6.png\"],\"description\":\"\",\"slug\":\"armchair-811-56\"},{\"id\":\"57\",\"category\":\"furniture\",\"subCategory\":\"chair\",\"name\":\"Bird Stool\",\"rate\":4,\"price\":99,\"quantity\":40,\"thumbImage\":[\"/assets/images/products/furniture/4.png\",\"/assets/images/products/furniture/5.png\"],\"images\":[\"/assets/images/products/furniture/4.png\",\"/assets/images/products/furniture/5.png\",\"/assets/images/products/furniture/6.png\",\"/assets/images/products/furniture/7.png\"],\"description\":\"\",\"slug\":\"bird-stool-57\"},{\"id\":\"58\",\"category\":\"furniture\",\"subCategory\":\"table\",\"name\":\"64 Bench\",\"rate\":5,\"price\":457,\"quantity\":3,\"isNew\":true,\"thumbImage\":[\"/assets/images/products/furniture/5.png\",\"/assets/images/products/furniture/6.png\"],\"images\":[\"/assets/images/products/furniture/5.png\",\"/assets/images/products/furniture/6.png\",\"/assets/images/products/furniture/7.png\",\"/assets/images/products/furniture/8.png\"],\"description\":\"\",\"slug\":\"64-bench-58\"},{\"id\":\"59\",\"category\":\"furniture\",\"subCategory\":\"table\",\"name\":\"August Stool\",\"rate\":3,\"price\":129,\"quantity\":13,\"thumbImage\":[\"/assets/images/products/furniture/6.png\",\"/assets/images/products/furniture/7.png\"],\"images\":[\"/assets/images/products/furniture/6.png\",\"/assets/images/products/furniture/7.png\",\"/assets/images/products/furniture/8.png\",\"/assets/images/products/furniture/9.png\"],\"description\":\"\",\"slug\":\"august-stool-59\"},{\"id\":\"60\",\"category\":\"furniture\",\"subCategory\":\"chair\",\"name\":\"Aurea Coffee Table\",\"rate\":4,\"price\":155,\"quantity\":14,\"thumbImage\":[\"/assets/images/products/furniture/7.png\",\"/assets/images/products/furniture/8.png\"],\"images\":[\"/assets/images/products/furniture/7.png\",\"/assets/images/products/furniture/8.png\",\"/assets/images/products/furniture/9.png\",\"/assets/images/products/furniture/10.png\"],\"description\":\"\",\"slug\":\"aurea-coffee-table-60\"},{\"id\":\"61\",\"category\":\"furniture\",\"subCategory\":\"chair\",\"name\":\"BM62 Armchair\",\"rate\":5,\"price\":369,\"quantity\":29,\"thumbImage\":[\"/assets/images/products/furniture/8.png\",\"/assets/images/products/furniture/9.png\"],\"images\":[\"/assets/images/products/furniture/8.png\",\"/assets/images/products/furniture/9.png\",\"/assets/images/products/furniture/10.png\",\"/assets/images/products/furniture/11.png\"],\"description\":\"\",\"slug\":\"bm62-armchair-57\"},{\"id\":\"62\",\"category\":\"furniture\",\"subCategory\":\"cabinet\",\"name\":\"Carabottino Cabinet\",\"rate\":5,\"price\":4209,\"quantity\":5,\"isNew\":true,\"thumbImage\":[\"/assets/images/products/furniture/9.png\",\"/assets/images/products/furniture/10.png\"],\"images\":[\"/assets/images/products/furniture/9.png\",\"/assets/images/products/furniture/10.png\",\"/assets/images/products/furniture/11.png\",\"/assets/images/products/furniture/12.png\"],\"description\":\"\",\"slug\":\"carabottino-cabinet-62\"},{\"id\":\"63\",\"category\":\"furniture\",\"subCategory\":\"bed\",\"name\":\"Covent Sofa Narrow, 3 Seater\",\"rate\":5,\"price\":625,\"quantity\":8,\"thumbImage\":[\"/assets/images/products/furniture/10.png\",\"/assets/images/products/furniture/11.png\"],\"images\":[\"/assets/images/products/furniture/10.png\",\"/assets/images/products/furniture/11.png\",\"/assets/images/products/furniture/12.png\",\"/assets/images/products/furniture/13.png\"],\"description\":\"\",\"slug\":\"covent-sofa-narrow-3-seater-63\"},{\"id\":\"64\",\"category\":\"furniture\",\"subCategory\":\"bed\",\"name\":\"Clerici Lounge Chair\",\"rate\":5,\"price\":625,\"quantity\":8,\"thumbImage\":[\"/assets/images/products/furniture/11.png\",\"/assets/images/products/furniture/12.png\"],\"images\":[\"/assets/images/products/furniture/11.png\",\"/assets/images/products/furniture/12.png\",\"/assets/images/products/furniture/13.png\",\"/assets/images/products/furniture/14.png\"],\"description\":\"\",\"slug\":\"clerici-lounge-chair-64\"},{\"id\":\"65\",\"category\":\"furniture\",\"subCategory\":\"chair\",\"name\":\"Coast Table Square\",\"rate\":3,\"price\":459,\"discount\":15,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/furniture/12.png\",\"/assets/images/products/furniture/13.png\"],\"images\":[\"/assets/images/products/furniture/12.png\",\"/assets/images/products/furniture/13.png\",\"/assets/images/products/furniture/14.png\",\"/assets/images/products/furniture/15.png\"],\"description\":\"\",\"slug\":\"coast-table-square-65\"},{\"id\":\"66\",\"category\":\"furniture\",\"subCategory\":\"bed\",\"name\":\"Cugino\",\"rate\":5,\"price\":149,\"quantity\":26,\"thumbImage\":[\"/assets/images/products/furniture/13.png\",\"/assets/images/products/furniture/14.png\"],\"images\":[\"/assets/images/products/furniture/13.png\",\"/assets/images/products/furniture/14.png\",\"/assets/images/products/furniture/15.png\",\"/assets/images/products/furniture/16.png\"],\"description\":\"\",\"slug\":\"cugino-66\"},{\"id\":\"67\",\"category\":\"furniture\",\"subCategory\":\"bed\",\"name\":\"DL1 Tangram Low Side Table\",\"rate\":5,\"price\":479,\"quantity\":9,\"thumbImage\":[\"/assets/images/products/furniture/14.png\",\"/assets/images/products/furniture/15.png\"],\"images\":[\"/assets/images/products/furniture/16.png\",\"/assets/images/products/furniture/17.png\",\"/assets/images/products/furniture/18.png\",\"/assets/images/products/furniture/19.png\"],\"description\":\"\",\"slug\":\"dl1-tangram-low-side-table-66\"},{\"id\":\"68\",\"category\":\"furniture\",\"subCategory\":\"cabinet\",\"name\":\"Champ Stool\",\"rate\":5,\"price\":149,\"isNew\":true,\"quantity\":26,\"thumbImage\":[\"/assets/images/products/furniture/15.png\",\"/assets/images/products/furniture/16.png\"],\"images\":[\"/assets/images/products/furniture/15.png\",\"/assets/images/products/furniture/16.png\",\"/assets/images/products/furniture/17.png\",\"/assets/images/products/furniture/18.png\"],\"description\":\"\",\"slug\":\"champ-stool-68\"},{\"id\":\"69\",\"category\":\"furniture\",\"subCategory\":\"cabinet\",\"name\":\"Circle Mirror\",\"rate\":4,\"price\":129,\"quantity\":26,\"thumbImage\":[\"/assets/images/products/furniture/16.png\",\"/assets/images/products/furniture/17.png\"],\"images\":[\"/assets/images/products/furniture/16.png\",\"/assets/images/products/furniture/17.png\",\"/assets/images/products/furniture/18.png\",\"/assets/images/products/furniture/19.png\"],\"description\":\"\",\"slug\":\"circle-mirror-69\"},{\"id\":\"70\",\"category\":\"furniture\",\"subCategory\":\"lamp\",\"name\":\"Carrie\",\"rate\":5,\"price\":49,\"quantity\":8,\"thumbImage\":[\"/assets/images/products/furniture/17.png\",\"/assets/images/products/furniture/18.png\"],\"images\":[\"/assets/images/products/furniture/17.png\",\"/assets/images/products/furniture/18.png\",\"/assets/images/products/furniture/19.png\",\"/assets/images/products/furniture/20.png\"],\"description\":\"\",\"slug\":\"carrie-70\"},{\"id\":\"71\",\"category\":\"comestic\",\"subCategory\":\"lipstick\",\"name\":\"The expert mascaraa\",\"rate\":4,\"price\":35,\"new\":true,\"quantity\":0,\"variation\":[{\"color\":\"red\",\"colorCode\":\"#8B0000\"},{\"color\":\"blue\",\"colorCode\":\"#4169E1\"}],\"thumbImage\":[\"/assets/images/products/comestic/1.png\",\"/assets/images/products/comestic/2.png\"],\"images\":[\"/assets/images/products/comestic/1.png\",\"/assets/images/products/comestic/2.png\",\"/assets/images/products/comestic/3.png\",\"/assets/images/products/comestic/4.png\"],\"description\":\"\",\"slug\":\"the-expert-mascaraa-71\"},{\"id\":\"72\",\"category\":\"comestic\",\"subCategory\":\"lipstick\",\"name\":\"Velvet Melon High Intensity\",\"rate\":5,\"price\":38,\"quantity\":12,\"thumbImage\":[\"/assets/images/products/comestic/2.png\",\"/assets/images/products/comestic/3.png\"],\"images\":[\"/assets/images/products/comestic/2.png\",\"/assets/images/products/comestic/3.png\",\"/assets/images/products/comestic/4.png\",\"/assets/images/products/comestic/5.png\"],\"description\":\"\",\"slug\":\"velvet-melon-high-intensity-72\"},{\"id\":\"73\",\"category\":\"comestic\",\"subCategory\":\"lipstick\",\"name\":\"Leather shopper bag\",\"rate\":4,\"price\":35,\"discount\":5,\"quantity\":3,\"thumbImage\":[\"/assets/images/products/comestic/3.png\",\"/assets/images/products/comestic/4.png\"],\"images\":[\"/assets/images/products/comestic/3.png\",\"/assets/images/products/comestic/4.png\",\"/assets/images/products/comestic/5.png\",\"/assets/images/products/comestic/6.png\"],\"description\":\"\",\"slug\":\"leather-shopper-bag-73\"},{\"id\":\"74\",\"category\":\"comestic\",\"subCategory\":\"powder\",\"name\":\"Luxe jewel lipstick\",\"rate\":5,\"price\":38,\"quantity\":12,\"thumbImage\":[\"/assets/images/products/comestic/4.png\",\"/assets/images/products/comestic/5.png\"],\"images\":[\"/assets/images/products/comestic/4.png\",\"/assets/images/products/comestic/5.png\",\"/assets/images/products/comestic/6.png\",\"/assets/images/products/comestic/7.png\"],\"description\":\"\",\"slug\":\"luxe-jewel-lipstick-74\"},{\"id\":\"75\",\"category\":\"comestic\",\"subCategory\":\"powder\",\"name\":\"Penpoint seamless beauty\",\"rate\":5,\"price\":40,\"quantity\":12,\"isNew\":true,\"thumbImage\":[\"/assets/images/products/comestic/5.png\",\"/assets/images/products/comestic/6.png\"],\"images\":[\"/assets/images/products/comestic/5.png\",\"/assets/images/products/comestic/6.png\",\"/assets/images/products/comestic/7.png\",\"/assets/images/products/comestic/8.png\"],\"description\":\"\",\"slug\":\"penpoint-seamless-beauty-75\"},{\"id\":\"76\",\"category\":\"comestic\",\"subCategory\":\"powder\",\"name\":\"The Sneaky lips\",\"rate\":5,\"price\":38,\"quantity\":12,\"thumbImage\":[\"/assets/images/products/comestic/7.png\",\"/assets/images/products/comestic/8.png\"],\"images\":[\"/assets/images/products/comestic/6.png\",\"/assets/images/products/comestic/7.png\",\"/assets/images/products/comestic/8.png\",\"/assets/images/products/comestic/9.png\"],\"description\":\"\",\"slug\":\"the-sneaky-lips-76\"},{\"id\":\"77\",\"category\":\"comestic\",\"subCategory\":\"perfume\",\"name\":\"White Facial Cream\",\"rate\":4,\"price\":38,\"quantity\":12,\"thumbImage\":[\"/assets/images/products/comestic/8.png\",\"/assets/images/products/comestic/9.png\"],\"images\":[\"/assets/images/products/comestic/8.png\",\"/assets/images/products/comestic/9.png\",\"/assets/images/products/comestic/10.png\",\"/assets/images/products/comestic/11.png\"],\"description\":\"\",\"slug\":\"white-facial-cream-77\"},{\"id\":\"78\",\"category\":\"comestic\",\"subCategory\":\"perfume\",\"name\":\"Orange Massage Cream\",\"rate\":4,\"price\":55,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/comestic/9.png\",\"/assets/images/products/comestic/10.png\"],\"images\":[\"/assets/images/products/comestic/9.png\",\"/assets/images/products/comestic/10.png\",\"/assets/images/products/comestic/11.png\",\"/assets/images/products/comestic/12.png\"],\"description\":\"\",\"slug\":\"orange-massage-cream-78\"},{\"id\":\"79\",\"category\":\"comestic\",\"subCategory\":\"perfume\",\"name\":\"Valinta Fairness Massage Cream\",\"rate\":4,\"price\":27,\"discount\":3,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/comestic/10.png\",\"/assets/images/products/comestic/11.png\"],\"images\":[\"/assets/images/products/comestic/10.png\",\"/assets/images/products/comestic/11.png\",\"/assets/images/products/comestic/12.png\",\"/assets/images/products/comestic/13.png\"],\"description\":\"\",\"slug\":\"valinta-fairness-massage-cream-79\"},{\"id\":\"80\",\"category\":\"comestic\",\"subCategory\":\"nail polish\",\"name\":\"Massage Cream Cucumber\",\"rate\":4,\"price\":16,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/comestic/11.png\",\"/assets/images/products/comestic/12.png\"],\"images\":[\"/assets/images/products/comestic/10.png\",\"/assets/images/products/comestic/11.png\",\"/assets/images/products/comestic/12.png\",\"/assets/images/products/comestic/13.png\"],\"description\":\"\",\"slug\":\"massage-cream-cucumber-80\"},{\"id\":\"81\",\"category\":\"comestic\",\"subCategory\":\"nail polish\",\"name\":\"Matte Walnut & Bamboo Scrub\",\"rate\":4,\"price\":32,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/comestic/12.png\",\"/assets/images/products/comestic/13.png\"],\"images\":[\"/assets/images/products/comestic/12.png\",\"/assets/images/products/comestic/13.png\",\"/assets/images/products/comestic/14.png\",\"/assets/images/products/comestic/15.png\"],\"description\":\"\",\"slug\":\"matte-walnut-&-bamboo-scrub-81\"},{\"id\":\"82\",\"category\":\"comestic\",\"subCategory\":\"mascara\",\"name\":\"Castor Oil BP\",\"rate\":4,\"price\":24,\"quantity\":6,\"thumbImage\":[\"/assets/images/products/comestic/13.png\",\"/assets/images/products/comestic/14.png\"],\"images\":[\"/assets/images/products/comestic/13.png\",\"/assets/images/products/comestic/14.png\",\"/assets/images/products/comestic/1.png\",\"/assets/images/products/comestic/2.png\"],\"description\":\"\",\"slug\":\"castor-oil-bp-82\"},{\"id\":\"83\",\"category\":\"comestic\",\"subCategory\":\"mascara\",\"name\":\"Metallic Cap Cosmetic\",\"rate\":5,\"price\":44,\"brand\":\"kenzo\",\"code\":\"PM 03\",\"point\":17,\"quantity\":1,\"thumbImage\":[\"/assets/images/products/comestic/14.png\",\"/assets/images/products/comestic/15.png\"],\"images\":[\"/assets/images/products/comestic/14.png\",\"/assets/images/products/comestic/15.png\",\"/assets/images/products/comestic/16.png\",\"/assets/images/products/comestic/17.png\"],\"description\":\"\",\"slug\":\"metallic-cap-cosmetic-83\"},{\"id\":\"84\",\"category\":\"comestic\",\"subCategory\":\"mascara\",\"name\":\"Photo Match Concealer\",\"rate\":5,\"price\":39,\"quantity\":1,\"thumbImage\":[\"/assets/images/products/comestic/15.png\",\"/assets/images/products/comestic/16.png\"],\"images\":[\"/assets/images/products/comestic/15.png\",\"/assets/images/products/comestic/16.png\",\"/assets/images/products/comestic/17.png\",\"/assets/images/products/comestic/18.png\"],\"description\":\"\",\"slug\":\"photo-match-concealer-84\"},{\"id\":\"85\",\"category\":\"comestic\",\"subCategory\":\"nail polish\",\"name\":\"Matte Mousse Foundation\",\"rate\":5,\"price\":46,\"quantity\":1,\"thumbImage\":[\"/assets/images/products/comestic/16.png\",\"/assets/images/products/comestic/17.png\"],\"images\":[\"/assets/images/products/comestic/16.png\",\"/assets/images/products/comestic/17.png\",\"/assets/images/products/comestic/18.png\",\"/assets/images/products/comestic/19.png\"],\"description\":\"\",\"slug\":\"matte-mousse-foundation-85\"},{\"id\":\"86\",\"category\":\"comestic\",\"subCategory\":\"perfume\",\"name\":\"White Sandal Beauty\",\"rate\":5,\"price\":67,\"quantity\":1,\"thumbImage\":[\"/assets/images/products/comestic/17.png\",\"/assets/images/products/comestic/18.png\"],\"images\":[\"/assets/images/products/comestic/17.png\",\"/assets/images/products/comestic/18.png\",\"/assets/images/products/comestic/19.png\",\"/assets/images/products/comestic/20.png\"],\"description\":\"\",\"slug\":\"white-sandal-beauty-86\"}]");

/***/ }),

/***/ "./src/pages/shop/checkout-complete.js":
/*!*********************************************!*\
  !*** ./src/pages/shop/checkout-complete.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkoutComplete; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_layouts_LayoutOne__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/layouts/LayoutOne */ "./src/components/layouts/LayoutOne.js");
/* harmony import */ var _components_other_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/other/Container */ "./src/components/other/Container.js");
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
var _jsxFileName = "F:\\Elementronics\\src\\pages\\shop\\checkout-complete.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function checkoutComplete() {
  return __jsx(_components_layouts_LayoutOne__WEBPACK_IMPORTED_MODULE_7__["default"], {
    title: "Checkout completed",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(_components_other_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "checkout-complete",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "checkout-complete-summary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, "Congratulation! You\u2019ve completed payment."), __jsx("div", {
    className: "checkout-complete-summary__table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "checkout-complete-summary__table-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "Order Number"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, "120")), __jsx("div", {
    className: "checkout-complete-summary__table-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, "Date"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, `${new Date().toLocaleString()}`)), __jsx("div", {
    className: "checkout-complete-summary__table-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, "Total"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_9__["formatCurrency"])(200))), __jsx("div", {
    className: "checkout-complete-summary__table-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "Payment methods"), __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "Check payment")))), __jsx("div", {
    className: "checkout-complete-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, "Order Details"), __jsx("table", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 19
    }
  }, "Product"), __jsx("th", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 19
    }
  }, "Price"))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 15
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }, "Stay-Matte Sheer Pressed x 1"), __jsx("td", {
    className: "bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 19
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_9__["formatCurrency"])(100))), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 19
    }
  }, "Subtotal"), __jsx("td", {
    className: "bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_9__["formatCurrency"])(100))), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  }, "Shipping"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 19
    }
  }, "Free ship")), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }, "Payment Method"), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 19
    }
  }, "Check Payments")), __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 19
    }
  }, "Total"), __jsx("td", {
    className: "bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_9__["formatCurrency"])(100)))))))));
}

/***/ }),

/***/ "./src/redux/actions/cartActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/cartActions.js ***!
  \******************************************/
/*! exports provided: addToCart, removeFromCart, removeAllFromCart, decreaseQuantityCart, increaseQuantityCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToCart", function() { return addToCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromCart", function() { return removeFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeAllFromCart", function() { return removeAllFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decreaseQuantityCart", function() { return decreaseQuantityCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "increaseQuantityCart", function() { return increaseQuantityCart; });
/* harmony import */ var _defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defines */ "./src/redux/defines.js");

const addToCart = (product, quantity, color, size) => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["CART"].ADD_TO_CART,
  product,
  quantity,
  color,
  size
});
const removeFromCart = cartId => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["CART"].REMOVE_FROM_CART,
  cartId
});
const removeAllFromCart = () => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["CART"].REMOVE_ALL_FROM_CART
});
const decreaseQuantityCart = cartId => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["CART"].DECREASE_QUANTITY_CART,
  cartId
});
const increaseQuantityCart = cartId => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["CART"].INCREASE_QUANTITY_CART,
  cartId
});

/***/ }),

/***/ "./src/redux/actions/globalActions.js":
/*!********************************************!*\
  !*** ./src/redux/actions/globalActions.js ***!
  \********************************************/
/*! exports provided: setGlobalLanguage, setGlobalCurrency, setGlobalCategory, setGlobalSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalLanguage", function() { return setGlobalLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalCurrency", function() { return setGlobalCurrency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalCategory", function() { return setGlobalCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setGlobalSearch", function() { return setGlobalSearch; });
/* harmony import */ var _defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defines */ "./src/redux/defines.js");

const setGlobalLanguage = lang => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].SET_LANGUAGE,
  lang
});
const setGlobalCurrency = cur => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].SET_CURRENCY,
  cur
});
const setGlobalCategory = category => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].SET_CATEGORY,
  category
});
const setGlobalSearch = keyword => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].SET_SEARCH,
  keyword
});

/***/ }),

/***/ "./src/redux/actions/shopActions.js":
/*!******************************************!*\
  !*** ./src/redux/actions/shopActions.js ***!
  \******************************************/
/*! exports provided: setSort, setSubCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSort", function() { return setSort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSubCategory", function() { return setSubCategory; });
/* harmony import */ var _defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defines */ "./src/redux/defines.js");

const setSort = sortType => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["SHOP"].SET_SORT,
  sortType
});
const setSubCategory = subCategory => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["SHOP"].SET_SUBCATEGORY,
  subCategory
});

/***/ }),

/***/ "./src/redux/defines.js":
/*!******************************!*\
  !*** ./src/redux/defines.js ***!
  \******************************/
/*! exports provided: GLOBAL, CART, WISHLIST, SHOP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GLOBAL", function() { return GLOBAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CART", function() { return CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WISHLIST", function() { return WISHLIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOP", function() { return SHOP; });
const GLOBAL = {
  SET_LANGUAGE: "SET_LANGUAGE",
  SET_CURRENCY: "SET_CURRENCY",
  SET_CATEGORY: "SET_CATEGORY",
  SET_SEARCH: "SET_SEARCH"
};
const CART = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  REMOVE_ALL_FROM_CART: "REMOVE_ALL_FROM_CART",
  DECREASE_QUANTITY_CART: "DECREASE_QUANTITY_CART",
  INCREASE_QUANTITY_CART: "INCREASE_QUANTITY_CART"
};
const WISHLIST = {
  ADD_TO_WISHLIST: "ADD_TO_WISHLIST",
  REMOVE_FROM_WISHLIST: "REMOVE_FROM_WISHLIST"
};
const SHOP = {
  SET_SORT: "SET_SORT",
  SET_SUBCATEGORY: "SET_SUBCATEGORY"
};

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/ri":
/*!*********************************!*\
  !*** external "react-icons/ri" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ri");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-mailchimp-subscribe":
/*!********************************************!*\
  !*** external "react-mailchimp-subscribe" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-mailchimp-subscribe");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9zZWFyY2gtcGFyYW1zLXRvLXVybC1xdWVyeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9XaXRoSGVhZGVyU2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGVmaW5lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3Nob3BVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3VzZURlYm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJ0L0NhcnRTaWRlYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcnQvQ2FydFNpZGViYXJJdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbnRyb2xzL1F1YW50aXR5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZWxlbWVudHMvRm9vdGVyU3ViY3JpYmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvZWxlbWVudHMvQm90dG9tTmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9DYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvZWxlbWVudHMvTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvZWxlbWVudHMvTWVudVNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2VsZW1lbnRzL1NlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvZWxlbWVudHMvVG9wTmF2LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dHMvTGF5b3V0T25lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL290aGVyL0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdWJwYWdlcy9TdWJwYWdlc1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3Nob3AvY2hlY2tvdXQtY29tcGxldGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvZ2xvYmFsQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy9zaG9wQWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvZGVmaW5lcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlcy1leGFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5c3RyaW5nXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9haVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL3JpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYWlsY2hpbXAtc3Vic2NyaWJlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIl0sIm5hbWVzIjpbImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImUiLCJub2RlTmFtZSIsInRhcmdldCIsImlzTG9jYWwiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInByb3BzIiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRIcmVmIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJwcm9jZXNzIiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJ2YWx1ZSIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50IiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsInVybCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwidXBkYXRlIiwibW9kIiwiZGF0YSIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsIm9wdGlvbnMiLCJwcmVwYXJlVXJsQXMiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYXJzZWQiLCJ0cnlQYXJzZVJlbGF0aXZlVXJsIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJlcnJvciIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsIm9wdGlvbmFsIiwicmVwZWF0Iiwia2V5Iiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwic2VnbWVudCIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiU3RyaW5nIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsImlzTmFOIiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4Iiwic2VhcmNoUGFyYW1zIiwiQXJyYXkiLCJ1c2VkIiwicmVzdWx0IiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiV2l0aEhlYWRlclNjcm9sbCIsIldyYXBwZWRDb21wb25lbnQiLCJoZWFkZXJSZWYiLCJ1c2VSZWYiLCJzZXRTY3JvbGwiLCJ1c2VTdGF0ZSIsImlzSGVhZGVyRml4ZWQiLCJzZXRJc0hlYWRlckZpeGVkIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdXJyZW50Iiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsWSIsIlNIT1AiLCJjYXRlZ29yeSIsImljb25DbGFzcyIsImdldFByb2R1Y3RzQnlDYXRlZ29yeSIsImFyciIsImZpbHRlciIsIml0ZW0iLCJ0b0xvd2VyQ2FzZSIsImdldFByb2R1Y3RzQnlTbHVnIiwic2x1ZyIsImZpbmQiLCJnZXRBbGxWYWx1ZXNPZktleSIsInN1YkNhdGVnb3J5IiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJnZXRBbGxTdWJDYXRlZ29yaWVzIiwicHJvZHVjdHMiLCJnZXRQcm9kdWN0cyIsInN1YkNhdGVnb3JpZXNBcnIiLCJnZXRQcm9kdWN0c0J5U29ydCIsInR5cGUiLCJzb3J0V2l0aENvbmRpdGlvbiIsInJldmVyc2UiLCJudW0iLCJzb3J0IiwiYSIsImIiLCJnZXRQcm9kdWN0c0J5RmlsdGVyIiwic29ydFR5cGUiLCJmaWx0ZXJlZFByb2R1Y3QiLCJwcm9kdWN0IiwiZ2V0UHJvZHVjdHNCeVNlYXJjaCIsImtleXdvcmQiLCJnZXRUb3RhbFByb2R1Y3RJbkNhcnQiLCJyZWR1Y2UiLCJ0b3RhbCIsImNhcnRRdWFudGl0eSIsImNhbGN1bGF0ZVRvdGFsUHJpY2UiLCJmb3JFYWNoIiwiZGlzY291bnQiLCJwcmljZSIsImNoZWNrUHJvZHVjdEluQ2FydCIsImNhcnRBcnIiLCJwaWQiLCJpZCIsImNoZWNrQXZhaWFibGVRdWFudGl0eVRvQWRkIiwicHJvZHVjdHNJbkNhcnQiLCJ0b3RhbFByb2R1Y3RRdWFudGl0eUluQ2FydCIsImF2YWlhYmxlIiwicXVhbnRpdHkiLCJjaGVja1Byb2R1Y3RJbldpc2hsaXN0Iiwid2lzaGxpc3RBcnIiLCJ1c2VEZWJvdW5jZSIsImRlbGF5IiwiZGVib3VuY2VkVmFsdWUiLCJzZXREZWJvdW5jZWRWYWx1ZSIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJmb3JtYXRDdXJyZW5jeSIsImxvY2FsZXMiLCJjdXJyZW5jeSIsIkludGwiLCJOdW1iZXJGb3JtYXQiLCJzdHlsZSIsImZvcm1hdCIsImNhcGl0YWxpemVGaXJzdExldHRlciIsInN0cmluZyIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJDYXJ0U2lkZWJhciIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJjYXJ0U3RhdGUiLCJ1c2VTZWxlY3RvciIsInN0YXRlIiwiY2FydFJlZHVjZXIiLCJnbG9iYWxTdGF0ZSIsImdsb2JhbFJlZHVjZXIiLCJtYXAiLCJpbmRleCIsIm1lbW8iLCJDYXJ0U2lkZWJhckl0ZW0iLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInNldFF1YW50aXR5Iiwib25SZW1vdmVQcm9kdWN0RnJvbUNhcnQiLCJwcmV2ZW50RGVmYXVsdCIsInNob3dNb2RhbCIsImhhbmRsZU9rIiwicmVtb3ZlRnJvbUNhcnQiLCJjYXJ0SWQiLCJoYW5kbGVDYW5jZWwiLCJ0aHVtYkltYWdlIiwiZGVjcmVhc2VRdWFudGl0eUNhcnQiLCJpbmNyZWFzZVF1YW50aXR5Q2FydCIsIlF1YW50aXR5U2VsZWN0b3IiLCJtaW4iLCJtYXgiLCJkZWZhdWx0VmFsdWUiLCJvbkNoYW5nZSIsInNpemUiLCJub1JvdW5kIiwiY2xhc3NOYW1lIiwib25EZWNyZWFzZSIsIm9uSW5jcmVhc2UiLCJzZXRWYWx1ZSIsImRlY3JlYXNlVmFsdWUiLCJ1c2VDYWxsYmFjayIsImluY3JlYXNlVmFsdWUiLCJjbGFzc05hbWVzIiwiRm9vdGVyIiwiY29udGFpbmVyVHlwZSIsImxpbmtzIiwiaW5mb3JtYXRpb24iLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJDdXN0b21Gb3JtIiwic3RhdHVzIiwib25WYWxpZGF0ZWQiLCJvbkZpbmlzaCIsImxvZyIsIkVNQUlMIiwiZW1haWwiLCJvbkZpbmlzaEZhaWxlZCIsImVycm9ySW5mbyIsInJlbWVtYmVyIiwicmVxdWlyZWQiLCJjb2xvciIsIl9faHRtbCIsIkZvb3RlclN1YmNyaWJlIiwic3Vic2NyaWJlIiwiZm9ybURhdGEiLCJIZWFkZXIiLCJoZWFkZXJTdHlsZSIsInJlbmRlclN0eWxlQ2xhc3MiLCJCb3R0b21OYXYiLCJDYXRlZ29yeSIsIk9wdGlvbiIsIlNlbGVjdCIsInNob3BTdGF0ZSIsInNob3BSZWR1Y2VyIiwib25DaG9vc2VTdWJDYXRlZ29yeSIsInNldFN1YkNhdGVnb3J5IiwiaGFuZGxlQ2hhbmdlIiwiTWVudSIsImNhcnRTaWRlYmFyT3BlbiIsInNldENhcnRTaWRlYmFyT3BlbiIsIm1lbnVTaWRlYmFyT3BlbiIsInNldE1lbnVTaWRlYmFyT3BlbiIsInByb2R1Y3RzRGF0YSIsIk1lbnVTaWRlYmFyIiwiU3ViTWVudSIsIm9uU2VsZWN0TGFuZ3VhZ2UiLCJzZXRHbG9iYWxMYW5ndWFnZSIsIm9uU2VsZWN0Q3VycmVuY3kiLCJzZXRHbG9iYWxDdXJyZW5jeSIsImxhbmd1YWdlIiwid2lkdGgiLCJTZWFyY2hCYXJNb2JpbGUiLCJmaWxsRGF0YSIsInBsYWNlaG9sZGVyIiwidXNlUm91dGVyIiwic2V0U2VhcmNoIiwic2hvd0Ryb3Bkb3duT3B0aW9ucyIsInNldFNob3dEcm9wZG93bk9wdGlvbnMiLCJkZWJvdW5kVmFsdWUiLCJzZXRHbG9iYWxTZWFyY2giLCJyZW5kZXJBdXRvRmlsbEl0ZW0iLCJvblNlbGVjdENhdGVvcnkiLCJzZXRHbG9iYWxDYXRlZ29yeSIsIm9wZW5Ecm9wZG93bk9wdGlvbiIsImNsb3NlRHJvcGRvd25PcHRpb24iLCJvblNlbGVjdE9wdGlvbiIsIm9wdGlvbiIsIm9uU2VhcmNoIiwicSIsImlucHV0VmFsdWUiLCJpbmRleE9mIiwiVG9wTmF2IiwiU2Nyb2xsSGVhZGVyIiwiTGF5b3V0T25lIiwidGl0bGUiLCJjbGVhclNwYWNlVG9wIiwiY29uZmlnIiwibWF4Q291bnQiLCJkdXJhdGlvbiIsIkNvbnRhaW5lciIsInJlbmRlckNvbnRhaW5lclR5cGUiLCJTdWJwYWdlc1NpZGViYXIiLCJjaGVja291dENvbXBsZXRlIiwidG9Mb2NhbGVTdHJpbmciLCJhZGRUb0NhcnQiLCJDQVJUIiwiQUREX1RPX0NBUlQiLCJSRU1PVkVfRlJPTV9DQVJUIiwicmVtb3ZlQWxsRnJvbUNhcnQiLCJSRU1PVkVfQUxMX0ZST01fQ0FSVCIsIkRFQ1JFQVNFX1FVQU5USVRZX0NBUlQiLCJJTkNSRUFTRV9RVUFOVElUWV9DQVJUIiwibGFuZyIsIkdMT0JBTCIsIlNFVF9MQU5HVUFHRSIsImN1ciIsIlNFVF9DVVJSRU5DWSIsIlNFVF9DQVRFR09SWSIsIlNFVF9TRUFSQ0giLCJzZXRTb3J0IiwiU0VUX1NPUlQiLCJTRVRfU1VCQ0FURUdPUlkiLCJXSVNITElTVCIsIkFERF9UT19XSVNITElTVCIsIlJFTU9WRV9GUk9NX1dJU0hMSVNUIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FB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RixFQUtFO0FBQUssYUFBUyxFQUFDLHVDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUssR0FBRSxJQUFJM0UsSUFBSixHQUFXNEUsY0FBWCxFQUE0QixFQUFuQyxDQUZGLENBTEYsRUFTRTtBQUFLLGFBQVMsRUFBQyx1Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJckksb0VBQWMsQ0FBQyxHQUFELENBQWxCLENBRkYsQ0FURixFQWFFO0FBQUssYUFBUyxFQUFDLHVDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixDQWJGLENBRkYsQ0FERixFQXNCRTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixDQURGLENBREYsRUFRRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREYsRUFFRTtBQUFJLGFBQVMsRUFBQyxNQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0JBLG9FQUFjLENBQUMsR0FBRCxDQUFwQyxDQUZGLENBREYsRUFLRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQkEsb0VBQWMsQ0FBQyxHQUFELENBQXBDLENBRkYsQ0FMRixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixDQVRGLEVBYUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZGLENBYkYsRUFpQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFO0FBQUksYUFBUyxFQUFDLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFzQkEsb0VBQWMsQ0FBQyxHQUFELENBQXBDLENBRkYsQ0FqQkYsQ0FSRixDQUZGLENBdEJGLENBREYsQ0FERixDQURGO0FBK0RELEM7Ozs7Ozs7Ozs7OztBQzNFRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTXNJLFNBQVMsR0FBRyxDQUFDbEssT0FBRCxFQUFVbUIsUUFBVixFQUFvQitFLEtBQXBCLEVBQTJCM0IsSUFBM0IsTUFBcUM7QUFDNURqRixNQUFJLEVBQUU2Syw2Q0FBSSxDQUFDQyxXQURpRDtBQUU1RHBLLFNBRjREO0FBRzVEbUIsVUFINEQ7QUFJNUQrRSxPQUo0RDtBQUs1RDNCO0FBTDRELENBQXJDLENBQWxCO0FBUUEsTUFBTVgsY0FBYyxHQUFJQyxNQUFELEtBQWE7QUFDekN2RSxNQUFJLEVBQUU2Syw2Q0FBSSxDQUFDRSxnQkFEOEI7QUFFekN4RztBQUZ5QyxDQUFiLENBQXZCO0FBS0EsTUFBTXlHLGlCQUFpQixHQUFHLE9BQU87QUFDdENoTCxNQUFJLEVBQUU2Syw2Q0FBSSxDQUFDSTtBQUQyQixDQUFQLENBQTFCO0FBSUEsTUFBTXZHLG9CQUFvQixHQUFJSCxNQUFELEtBQWE7QUFDL0N2RSxNQUFJLEVBQUU2Syw2Q0FBSSxDQUFDSyxzQkFEb0M7QUFFL0MzRztBQUYrQyxDQUFiLENBQTdCO0FBS0EsTUFBTUksb0JBQW9CLEdBQUlKLE1BQUQsS0FBYTtBQUMvQ3ZFLE1BQUksRUFBRTZLLDZDQUFJLENBQUNNLHNCQURvQztBQUUvQzVHO0FBRitDLENBQWIsQ0FBN0IsQzs7Ozs7Ozs7Ozs7O0FDeEJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTStELGlCQUFpQixHQUFJOEMsSUFBRCxLQUFXO0FBQzFDcEwsTUFBSSxFQUFFcUwsK0NBQU0sQ0FBQ0MsWUFENkI7QUFFMUNGO0FBRjBDLENBQVgsQ0FBMUI7QUFLQSxNQUFNNUMsaUJBQWlCLEdBQUkrQyxHQUFELEtBQVU7QUFDekN2TCxNQUFJLEVBQUVxTCwrQ0FBTSxDQUFDRyxZQUQ0QjtBQUV6Q0Q7QUFGeUMsQ0FBVixDQUExQjtBQUtBLE1BQU1qQyxpQkFBaUIsR0FBSXpLLFFBQUQsS0FBZTtBQUM5Q21CLE1BQUksRUFBRXFMLCtDQUFNLENBQUNJLFlBRGlDO0FBRTlDNU07QUFGOEMsQ0FBZixDQUExQjtBQUtBLE1BQU1zSyxlQUFlLEdBQUl2SSxPQUFELEtBQWM7QUFDM0NaLE1BQUksRUFBRXFMLCtDQUFNLENBQUNLLFVBRDhCO0FBRTNDOUs7QUFGMkMsQ0FBZCxDQUF4QixDOzs7Ozs7Ozs7Ozs7QUNqQlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU0rSyxPQUFPLEdBQUluTCxRQUFELEtBQWU7QUFDcENSLE1BQUksRUFBRXBCLDZDQUFJLENBQUNnTixRQUR5QjtBQUVwQ3BMO0FBRm9DLENBQWYsQ0FBaEI7QUFLQSxNQUFNbUgsY0FBYyxHQUFJbkksV0FBRCxLQUFrQjtBQUM5Q1EsTUFBSSxFQUFFcEIsNkNBQUksQ0FBQ2lOLGVBRG1DO0FBRTlDck07QUFGOEMsQ0FBbEIsQ0FBdkIsQzs7Ozs7Ozs7Ozs7O0FDUFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU02TCxNQUFNLEdBQUc7QUFDcEJDLGNBQVksRUFBRSxjQURNO0FBRXBCRSxjQUFZLEVBQUUsY0FGTTtBQUdwQkMsY0FBWSxFQUFFLGNBSE07QUFJcEJDLFlBQVUsRUFBRTtBQUpRLENBQWY7QUFPQSxNQUFNYixJQUFJLEdBQUc7QUFDbEJDLGFBQVcsRUFBRSxhQURLO0FBRWxCQyxrQkFBZ0IsRUFBRSxrQkFGQTtBQUdsQkUsc0JBQW9CLEVBQUUsc0JBSEo7QUFJbEJDLHdCQUFzQixFQUFFLHdCQUpOO0FBS2xCQyx3QkFBc0IsRUFBRTtBQUxOLENBQWI7QUFRQSxNQUFNVyxRQUFRLEdBQUc7QUFDdEJDLGlCQUFlLEVBQUUsaUJBREs7QUFFdEJDLHNCQUFvQixFQUFFO0FBRkEsQ0FBakI7QUFLQSxNQUFNcE4sSUFBSSxHQUFHO0FBQ2xCZ04sVUFBUSxFQUFFLFVBRFE7QUFFbEJDLGlCQUFlLEVBQUU7QUFGQyxDQUFiLEM7Ozs7Ozs7Ozs7O0FDcEJQLDhDOzs7Ozs7Ozs7OztBQ0FBLGlDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHdDIiwiZmlsZSI6InBhZ2VzL3Nob3AvY2hlY2tvdXQtY29tcGxldGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wYWdlcy9zaG9wL2NoZWNrb3V0LWNvbXBsZXRlLmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zLCBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBleGVjT25jZSwgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoLCByZXNvbHZlSHJlZiB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyBmcm9tIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBwYWdlIChicm93c2VyIG9ubHkpLlxuICovXG5mdW5jdGlvbiBpc0xvY2FsKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW5cbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICBpZiAoXG4gICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgIGUubWV0YUtleSB8fFxuICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIGNoaWxkRWxtICYmIGNoaWxkRWxtLnRhZ05hbWUpIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICBpZiAoXG4gICAgICBjaGlsZFByb3BzLmhyZWYgJiZcbiAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgKSB7XG4gICAgICBjaGlsZFByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChjaGlsZFByb3BzLmhyZWYpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvc2VhcmNoLXBhcmFtcy10by11cmwtcXVlcnknXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQge1xuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGJhc2VQYXRoXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICA6IGZpbmFsVXJsLmhyZWZcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmZ1bmN0aW9uIHRyeVBhcnNlUmVsYXRpdmVVcmwoXG4gIHVybDogc3RyaW5nXG4pOiBudWxsIHwgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4ge1xuICB0cnkge1xuICAgIHJldHVybiBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIF9fTiB9ID0gZS5zdGF0ZVxuICAgIGlmICghX19OKSB7XG4gICAgICAvLyB0aGlzIGhpc3Rvcnkgc3RhdGUgd2Fzbid0IGNyZWF0ZWQgYnkgbmV4dC5qcyBzbyBpdCBjYW4gYmUgaWdub3JlZFxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxCYXNlUGF0aChhcylcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVybiBmYWxzZVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcylcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwoY2xlYW5lZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8ob3B0aW9ucy5fTl9YLCBvcHRpb25zLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciwgZXJyb3I6IGVyciB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgICAgIChyZXMpID0+XG4gICAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgICB9IGFzIFJvdXRlSW5mbylcbiAgICAgICAgICApXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm5cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGVuY29kZSBhcyBlbmNvZGVRdWVyeXN0cmluZyB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIC8vIHF1ZXJ5ID0gJycgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5KTtcbiAgICBxdWVyeSA9IGVuY29kZVF1ZXJ5c3RyaW5nKHF1ZXJ5KVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoJ2h0dHA6Ly9uJylcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBmaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaXRoSGVhZGVyU2Nyb2xsKFdyYXBwZWRDb21wb25lbnQpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICBjb25zdCBoZWFkZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbc2Nyb2xsLCBzZXRTY3JvbGxdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbaXNIZWFkZXJGaXhlZCwgc2V0SXNIZWFkZXJGaXhlZF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoc2Nyb2xsID49IGhlYWRlclJlZi5jdXJyZW50Lm9mZnNldEhlaWdodCkge1xyXG4gICAgICAgIHNldElzSGVhZGVyRml4ZWQodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SXNIZWFkZXJGaXhlZChmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0sIFtzY3JvbGxdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKSB7XHJcbiAgICAgIHNldFNjcm9sbCh3aW5kb3cuc2Nyb2xsWSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIHJlZj17aGVhZGVyUmVmfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YGhlYWRlci1zY3JvbGwtd3JhcHBlciAke2lzSGVhZGVyRml4ZWQgPyBcImZpeGVkXCIgOiBcIlwifWB9XHJcbiAgICAgID5cclxuICAgICAgICA8V3JhcHBlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBTSE9QID0ge1xyXG4gIGNhdGVnb3J5OiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiY2xvdGhpbmdcIixcclxuICAgICAgc3ViOiBbXHJcbiAgICAgICAgeyBuYW1lOiBcImFjY2Vzc29yaWVzXCIsIGljb25DbGFzczogXCJpY29uLWFjY2Vzc29yaWVzXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwicGFudHNcIiwgaWNvbkNsYXNzOiBcImljb24tcGFudFwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcInNob3J0c1wiLCBpY29uQ2xhc3M6IFwiaWNvbi1zaG9ydFwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImphY2tldFwiLCBpY29uQ2xhc3M6IFwiaWNvbi1qYWNrZXRcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJkcmVzc1wiLCBpY29uQ2xhc3M6IFwiaWNvbi1kcmVzc1wiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcInN1aXRzXCIsIGljb25DbGFzczogXCJpY29uLXN1aXRcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJzaGlydFwiLCBpY29uQ2xhc3M6IFwiaWNvbi1zaGlydFwiIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImZydWl0c1wiLFxyXG4gICAgICBzdWI6IFtcclxuICAgICAgICB7IG5hbWU6IFwidmVnYXRhYmxlc1wiLCBpY29uQ2xhc3M6IFwiaWNvbi12ZWdldGFibGVcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJmcnVpdHNcIiwgaWNvbkNsYXNzOiBcImljb24tZnJ1aXRcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJudXRcIiwgaWNvbkNsYXNzOiBcImljb24tbnV0XCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwibXVzaHJvb21cIiwgaWNvbkNsYXNzOiBcImljb24tbXVzaHJvb21cIiB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJlbGVjdHJvbmljXCIsXHJcbiAgICAgIHN1YjogW1xyXG4gICAgICAgIHsgbmFtZTogXCJhaXIgY29uZGl0aW9uaW5nXCIsIGljb25DbGFzczogXCJpY29uLWFpci1jb25kaXRpb25pbmdcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJwaG9uZVwiLCBpY29uQ2xhc3M6IFwiaWNvbi1waG9uZVwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcInR2XCIsIGljb25DbGFzczogXCJpY29uLWRlc2t0b3BcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJzcGVha2VyXCIsIGljb25DbGFzczogXCJpY29uLXNwZWFrZXJcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJmcmlkZ2VcIiwgaWNvbkNsYXNzOiBcImljb24tZnJpZGdlXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiZmFuXCIsIGljb25DbGFzczogXCJpY29uLWZhblwiIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImZ1cm5pdHVyZVwiLFxyXG4gICAgICBzdWI6IFtcclxuICAgICAgICB7IG5hbWU6IFwidGFibGVcIiwgaWNvbkNsYXNzOiBcImljb24tdGFibGVcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJjaGFpclwiLCBpY29uQ2xhc3M6IFwiaWNvbi1jaGFpclwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImNhYmluZXRcIiwgaWNvbkNsYXNzOiBcImljb24tY2FiaW5ldFwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImxhbXBcIiwgaWNvbkNsYXNzOiBcImljb24tbGFtcFwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImJlZFwiLCBpY29uQ2xhc3M6IFwiaWNvbi1iZWRcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJjb21lc3RpY1wiLFxyXG4gICAgICBzdWI6IFtcclxuICAgICAgICB7IG5hbWU6IFwibGlwc3RpY2tcIiwgaWNvbkNsYXNzOiBcImljb24tbGlwc3RpY2tcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJwb3dkZXJcIiwgaWNvbkNsYXNzOiBcImljb24tcG93ZGVyXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwicGVyZnVtZVwiLCBpY29uQ2xhc3M6IFwiaWNvbi1wZXJmdXJtXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwibmFpbCBwb2xpc2hcIiwgaWNvbkNsYXNzOiBcImljb24tbmFpbFwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIm1hc2NhcmFcIiwgaWNvbkNsYXNzOiBcImljb24tbWFzY2FyYVwiIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcbiIsIi8vUHJvZHVjdHNcclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzQnlDYXRlZ29yeSA9IChhcnIsIGNhdGVnb3J5KSA9PiB7XHJcbiAgcmV0dXJuIGNhdGVnb3J5XHJcbiAgICA/IGFyci5maWx0ZXIoXHJcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSA9PT0gY2F0ZWdvcnkudG9Mb3dlckNhc2UoKVxyXG4gICAgICApXHJcbiAgICA6IGFycjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c0J5U2x1ZyA9IChhcnIsIHNsdWcpID0+IHtcclxuICByZXR1cm4gc2x1ZyAmJiB0eXBlb2Ygc2x1ZyA9PT0gXCJzdHJpbmdcIlxyXG4gICAgPyBhcnIuZmluZCgocCkgPT4gcC5zbHVnLnRvTG93ZXJDYXNlKCkgPT09IHNsdWcudG9Mb3dlckNhc2UoKSlcclxuICAgIDogYXJyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbFZhbHVlc09mS2V5ID0gKGFyciwga2V5KSA9PiB7XHJcbiAgaWYgKGtleSAmJiB0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICBsZXQgc3ViQ2F0ZWdvcnkgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghc3ViQ2F0ZWdvcnkuaW5jbHVkZXMoYXJyW2ldW2tleV0pKSB7XHJcbiAgICAgICAgc3ViQ2F0ZWdvcnkucHVzaChhcnJbaV1ba2V5XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdWJDYXRlZ29yeS5sZW5ndGggPiAwID8gc3ViQ2F0ZWdvcnkgOiBudWxsO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsU3ViQ2F0ZWdvcmllcyA9IChhcnIsIGNhdGVnb3J5KSA9PiB7XHJcbiAgaWYgKGNhdGVnb3J5ICYmIHR5cGVvZiBjYXRlZ29yeSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgbGV0IHByb2R1Y3RzID0gZ2V0UHJvZHVjdHMoYXJyLCBjYXRlZ29yeSk7XHJcbiAgICBsZXQgc3ViQ2F0ZWdvcmllc0FyciA9IGdldEFsbFZhbHVlc09mS2V5KHByb2R1Y3RzLCBcInN1YkNhdGVnb3J5XCIpO1xyXG4gICAgcmV0dXJuIHN1YkNhdGVnb3JpZXNBcnIgIT09IG51bGwgPyBzdWJDYXRlZ29yaWVzQXJyIDogbnVsbDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzQnlTb3J0ID0gKHByb2R1Y3RzLCB0eXBlKSA9PiB7XHJcbiAgZnVuY3Rpb24gc29ydFdpdGhDb25kaXRpb24oYXJyLCB2YWx1ZSwgcmV2ZXJzZSA9IGZhbHNlKSB7XHJcbiAgICBsZXQgbnVtID0gcmV2ZXJzZSA/IC0xIDogMTtcclxuICAgIHJldHVybiBhcnIuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICBpZiAoYVt2YWx1ZV0gPCBiW3ZhbHVlXSkge1xyXG4gICAgICAgIHJldHVybiAtMSAqIG51bTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYVt2YWx1ZV0gPiBiW3ZhbHVlXSkge1xyXG4gICAgICAgIHJldHVybiAxICogbnVtO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmICh0eXBlID09PSBcImF6XCIpIHtcclxuICAgIHJldHVybiBzb3J0V2l0aENvbmRpdGlvbihwcm9kdWN0cywgXCJuYW1lXCIpO1xyXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ6YVwiKSB7XHJcbiAgICByZXR1cm4gc29ydFdpdGhDb25kaXRpb24ocHJvZHVjdHMsIFwibmFtZVwiLCB0cnVlKTtcclxuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwibG93SGlnaFwiKSB7XHJcbiAgICByZXR1cm4gc29ydFdpdGhDb25kaXRpb24ocHJvZHVjdHMsIFwicHJpY2VcIik7XHJcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImhpZ2hMb3dcIikge1xyXG4gICAgcmV0dXJuIHNvcnRXaXRoQ29uZGl0aW9uKHByb2R1Y3RzLCBcInByaWNlXCIsIHRydWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gcHJvZHVjdHM7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzQnlGaWx0ZXIgPSAocHJvZHVjdHMsIHNvcnRUeXBlLCBzdWJDYXRlZ29yeSkgPT4ge1xyXG4gIGxldCBmaWx0ZXJlZFByb2R1Y3QgPSBzdWJDYXRlZ29yeVxyXG4gICAgPyBwcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgKHByb2R1Y3QpID0+XHJcbiAgICAgICAgICBwcm9kdWN0LnN1YkNhdGVnb3J5LnRvTG93ZXJDYXNlKCkgPT09IHN1YkNhdGVnb3J5LnRvTG93ZXJDYXNlKClcclxuICAgICAgKVxyXG4gICAgOiBwcm9kdWN0cztcclxuICByZXR1cm4gZ2V0UHJvZHVjdHNCeVNvcnQoZmlsdGVyZWRQcm9kdWN0LCBzb3J0VHlwZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNCeVNlYXJjaCA9IChwcm9kdWN0cywga2V5d29yZCkgPT4ge1xyXG4gIHJldHVybiBrZXl3b3JkICYmIGtleXdvcmQgIT09IFwiXCJcclxuICAgID8gcHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PlxyXG4gICAgICAgIHByb2R1Y3QubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGtleXdvcmQudG9Mb3dlckNhc2UoKSlcclxuICAgICAgKVxyXG4gICAgOiBwcm9kdWN0cztcclxufTtcclxuXHJcbi8vQ2FydFxyXG5leHBvcnQgY29uc3QgZ2V0VG90YWxQcm9kdWN0SW5DYXJ0ID0gKGFycikgPT4ge1xyXG4gIHJldHVybiBhcnIgPyBhcnIucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT4gdG90YWwgKyBpdGVtLmNhcnRRdWFudGl0eSwgMCkgOiAwO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVRvdGFsUHJpY2UgPSAoYXJyKSA9PiB7XHJcbiAgbGV0IHRvdGFsID0gMDtcclxuICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaWYgKGl0ZW0uZGlzY291bnQpIHtcclxuICAgICAgdG90YWwgKz0gaXRlbS5jYXJ0UXVhbnRpdHlcclxuICAgICAgICA/IChpdGVtLnByaWNlIC0gaXRlbS5kaXNjb3VudCkgKiBpdGVtLmNhcnRRdWFudGl0eVxyXG4gICAgICAgIDogaXRlbS5wcmljZSAtIGl0ZW0uZGlzY291bnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b3RhbCArPSBpdGVtLmNhcnRRdWFudGl0eSA/IGl0ZW0ucHJpY2UgKiBpdGVtLmNhcnRRdWFudGl0eSA6IGl0ZW0ucHJpY2U7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHRvdGFsO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrUHJvZHVjdEluQ2FydCA9IChjYXJ0QXJyLCBwaWQpID0+IHtcclxuICByZXR1cm4gcGlkID8gY2FydEFyci5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwaWQpIDogbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0F2YWlhYmxlUXVhbnRpdHlUb0FkZCA9IChhcnIsIHByb2R1Y3QpID0+IHtcclxuICBjb25zdCBwcm9kdWN0c0luQ2FydCA9IGFyci5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQpO1xyXG4gIGlmIChwcm9kdWN0c0luQ2FydCAmJiBwcm9kdWN0c0luQ2FydC5sZW5ndGggPiAwKSB7XHJcbiAgICBjb25zdCB0b3RhbFByb2R1Y3RRdWFudGl0eUluQ2FydCA9XHJcbiAgICAgIHByb2R1Y3RzSW5DYXJ0Lmxlbmd0aCA+IDAgJiZcclxuICAgICAgcHJvZHVjdHNJbkNhcnQucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT4gdG90YWwgKyBpdGVtLmNhcnRRdWFudGl0eSwgMCk7XHJcbiAgICBsZXQgYXZhaWFibGUgPSBwcm9kdWN0LnF1YW50aXR5IC0gdG90YWxQcm9kdWN0UXVhbnRpdHlJbkNhcnQ7XHJcbiAgICByZXR1cm4gYXZhaWFibGUgPCAxID8gMCA6IGF2YWlhYmxlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwcm9kdWN0LnF1YW50aXR5O1xyXG4gIH1cclxufTtcclxuXHJcbi8vV2lzaGxpc3RcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja1Byb2R1Y3RJbldpc2hsaXN0ID0gKHdpc2hsaXN0QXJyLCBwaWQpID0+IHtcclxuICByZXR1cm4gcGlkID8gd2lzaGxpc3RBcnIuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcGlkKSA6IG51bGw7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VEZWJvdW5jZSh2YWx1ZSwgZGVsYXkpIHtcclxuICBjb25zdCBbZGVib3VuY2VkVmFsdWUsIHNldERlYm91bmNlZFZhbHVlXSA9IHVzZVN0YXRlKHZhbHVlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXREZWJvdW5jZWRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB9LCBkZWxheSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhclRpbWVvdXQoaGFuZGxlcik7XHJcbiAgICB9O1xyXG4gIH0sIFt2YWx1ZV0pO1xyXG4gIHJldHVybiBkZWJvdW5jZWRWYWx1ZTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgZm9ybWF0Q3VycmVuY3kgPSAocHJpY2UsIGxvY2FsZXMgPSBcInVzLVVTXCIsIGN1cnJlbmN5ID0gXCJVU0RcIikgPT4ge1xyXG4gIHJldHVybiBuZXcgSW50bC5OdW1iZXJGb3JtYXQobG9jYWxlcywge1xyXG4gICAgc3R5bGU6IFwiY3VycmVuY3lcIixcclxuICAgIGN1cnJlbmN5OiBjdXJyZW5jeSxcclxuICB9KS5mb3JtYXQocHJpY2UpO1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IHRyYW5zbGF0ZVN0cmluZyA9IChzdHJpbmcsIGxhbmd1YWdlLCBBUElfa2V5KSA9PiB7XHJcbi8vICAgaWYgKCFBUElfa2V5KSB7XHJcbi8vICAgICByZXR1cm4gc3RyaW5nO1xyXG4vLyAgIH0gZWxzZSB7XHJcbi8vICAgICBsZXQgdHJhc2xhdGVkU3RyaW5nO1xyXG4vLyAgICAgcmV0dXJuIHRyYW5zbGF0ZShcIkhlbGxvIHdvcmxkXCIsIHtcclxuLy8gICAgICAgdG86IGxhbmd1YWdlLFxyXG4vLyAgICAgICBrZXk6IEFQSV9rZXksXHJcbi8vICAgICB9KVxyXG4vLyAgICAgICAudGhlbigocmVzKSA9PiAodHJhc2xhdGVkU3RyaW5nID0gcmVzKSlcclxuLy8gICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4vLyAgIH1cclxuLy8gfTtcclxuXHJcbmV4cG9ydCBjb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAoc3RyaW5nKSA9PiB7XHJcbiAgcmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcclxufTtcclxuIiwiaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IEVtcHR5LCBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBDYXJ0U2lkZWJhckl0ZW0gZnJvbSBcIi4vQ2FydFNpZGViYXJJdGVtXCI7XHJcbmltcG9ydCB7IGNhbGN1bGF0ZVRvdGFsUHJpY2UgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3Nob3BVdGlsc1wiO1xyXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbHNcIjtcclxuXHJcbmZ1bmN0aW9uIENhcnRTaWRlYmFyKCkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyKTtcclxuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsUmVkdWNlcik7XHJcbiAgY29uc3QgeyBjdXJyZW5jeSwgbG9jYWxlcyB9ID0gZ2xvYmFsU3RhdGUuY3VycmVuY3k7XHJcbiAgcmV0dXJuIGNhcnRTdGF0ZS5sZW5ndGggPT09IDAgPyAoXHJcbiAgICA8RW1wdHkgZGVzY3JpcHRpb249XCJObyBwcm9kdWN0cyBpbiBjYXJ0XCIgLz5cclxuICApIDogKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXNpZGViYXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXNpZGViYXItcHJvZHVjdHNcIj5cclxuICAgICAgICB7Y2FydFN0YXRlLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxDYXJ0U2lkZWJhckl0ZW0ga2V5PXtpbmRleH0gZGF0YT17aXRlbX0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1zaWRlYmFyLXRvdGFsXCI+XHJcbiAgICAgICAgPGg1PlxyXG4gICAgICAgICAgVG90YWw6e1wiIFwifVxyXG4gICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgIHtmb3JtYXRDdXJyZW5jeShjYWxjdWxhdGVUb3RhbFByaWNlKGNhcnRTdGF0ZSksIGxvY2FsZXMsIGN1cnJlbmN5KX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2g1PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1zaWRlYmFyLXRvdGFsX19idXR0b25zXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc2hhcGU9XCJyb3VuZFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC9jaGVja291dFwifT5cclxuICAgICAgICAgICAgICA8YT5DaGVja291dDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhDYXJ0U2lkZWJhcik7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IE1vZGFsLCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcblxyXG5pbXBvcnQgeyBmb3JtYXRDdXJyZW5jeSB9IGZyb20gXCIuLi8uLi9jb21tb24vdXRpbHNcIjtcclxuaW1wb3J0IFF1YW50aXR5U2VsZWN0b3IgZnJvbSBcIi4uL2NvbnRyb2xzL1F1YW50aXR5U2VsZWN0b3JcIjtcclxuaW1wb3J0IHtcclxuICByZW1vdmVGcm9tQ2FydCxcclxuICBkZWNyZWFzZVF1YW50aXR5Q2FydCxcclxuICBpbmNyZWFzZVF1YW50aXR5Q2FydCxcclxufSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gQ2FydFNpZGViYXJJdGVtKHsgZGF0YSB9KSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKGRhdGEuY2FydFF1YW50aXR5KTtcclxuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsUmVkdWNlcik7XHJcbiAgY29uc3QgeyBjdXJyZW5jeSwgbG9jYWxlcyB9ID0gZ2xvYmFsU3RhdGUuY3VycmVuY3k7XHJcbiAgY29uc3Qgb25SZW1vdmVQcm9kdWN0RnJvbUNhcnQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2hvd01vZGFsKCk7XHJcbiAgfTtcclxuICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRWaXNpYmxlKHRydWUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9rID0gKGUpID0+IHtcclxuICAgIGRpc3BhdGNoKHJlbW92ZUZyb21DYXJ0KGRhdGEuY2FydElkKSk7XHJcbiAgICBzZXRWaXNpYmxlKGZhbHNlKTtcclxuICAgIHJldHVybiBtZXNzYWdlLmVycm9yKFwiUHJvZHVjdCByZW1vdmVkIGZyb20gY2FydFwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoZSkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXNpZGViYXItaXRlbVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1zaWRlYmFyLWl0ZW1fX2ltYWdlXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz17ZGF0YS50aHVtYkltYWdlWzBdfSBhbHQ9XCJQcm9kdWN0IGltYWdlXCIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtc2lkZWJhci1pdGVtX19jb250ZW50XCI+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XHJcbiAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhPntkYXRhLm5hbWV9PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICB7ZGF0YS5kaXNjb3VudFxyXG4gICAgICAgICAgICAgID8gZm9ybWF0Q3VycmVuY3koXHJcbiAgICAgICAgICAgICAgICAgIChkYXRhLnByaWNlIC0gZGF0YS5kaXNjb3VudCkgKiBkYXRhLmNhcnRRdWFudGl0eSxcclxuICAgICAgICAgICAgICAgICAgbG9jYWxlcyxcclxuICAgICAgICAgICAgICAgICAgY3VycmVuY3lcclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICA6IGZvcm1hdEN1cnJlbmN5KFxyXG4gICAgICAgICAgICAgICAgICBkYXRhLnByaWNlICogZGF0YS5jYXJ0UXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICAgIGxvY2FsZXMsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbmN5XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9oNT5cclxuICAgICAgICAgIDxRdWFudGl0eVNlbGVjdG9yXHJcbiAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17ZGF0YS5jYXJ0UXVhbnRpdHl9XHJcbiAgICAgICAgICAgIG1pbj17MX1cclxuICAgICAgICAgICAgbWF4PXtkYXRhLnF1YW50aXR5fVxyXG4gICAgICAgICAgICBvbkRlY3JlYXNlPXsoKSA9PiBkaXNwYXRjaChkZWNyZWFzZVF1YW50aXR5Q2FydChkYXRhLmNhcnRJZCkpfVxyXG4gICAgICAgICAgICBvbkluY3JlYXNlPXsoKSA9PiBkaXNwYXRjaChpbmNyZWFzZVF1YW50aXR5Q2FydChkYXRhLmNhcnRJZCkpfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtc2lkZWJhci1pdGVtX19jbG9zZVwiPlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtvblJlbW92ZVByb2R1Y3RGcm9tQ2FydH0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25fY2xvc2VcIiAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPE1vZGFsXHJcbiAgICAgICAgdGl0bGU9XCJDb2Zpcm0gdGhpcyBhY3Rpb25cIlxyXG4gICAgICAgIHZpc2libGU9e3Zpc2libGV9XHJcbiAgICAgICAgb25Paz17aGFuZGxlT2t9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH1cclxuICAgICAgPlxyXG4gICAgICAgIDxwPkFyZSB5b3VyIHN1cmUgdG8gcmVtb3ZlIHByb2R1Y3QgZnJvbSBjYXJ0ID88L3A+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKENhcnRTaWRlYmFySXRlbSk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuZnVuY3Rpb24gUXVhbnRpdHlTZWxlY3Rvcih7XHJcbiAgbWluLFxyXG4gIG1heCxcclxuICBkZWZhdWx0VmFsdWUsXHJcbiAgb25DaGFuZ2UsXHJcbiAgc2l6ZSxcclxuICBub1JvdW5kLFxyXG4gIGNsYXNzTmFtZSxcclxuICBvbkRlY3JlYXNlLFxyXG4gIG9uSW5jcmVhc2UsXHJcbn0pIHtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBvbkNoYW5nZSAmJiBvbkNoYW5nZSh2YWx1ZSk7XHJcbiAgfSwgW3ZhbHVlXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFZhbHVlKGRlZmF1bHRWYWx1ZSk7XHJcbiAgfSwgW2RlZmF1bHRWYWx1ZV0pO1xyXG4gIGNvbnN0IGRlY3JlYXNlVmFsdWUgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICBpZiAobWluICYmIHZhbHVlIDw9IG1pbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodmFsdWUgPD0gMSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBvbkRlY3JlYXNlICYmIG9uRGVjcmVhc2UoKTtcclxuICAgICAgc2V0VmFsdWUodmFsdWUgLSAxKTtcclxuICAgIH1cclxuICB9LCBbdmFsdWVdKTtcclxuICBjb25zdCBpbmNyZWFzZVZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKHZhbHVlID49IG1heCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBvbkluY3JlYXNlICYmIG9uSW5jcmVhc2UoKTtcclxuICAgIHNldFZhbHVlKHZhbHVlICsgMSk7XHJcbiAgfSwgW3ZhbHVlXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXZcclxuICAgICAgY2xhc3NOYW1lPXtgcXVhbnRpdHktc2VsZWN0b3IgJHtjbGFzc05hbWVzKGNsYXNzTmFtZSl9IC0ke2NsYXNzTmFtZXMoXHJcbiAgICAgICAgc2l6ZVxyXG4gICAgICApfSAtJHtjbGFzc05hbWVzKHsgXCJuby1yb3VuZFwiOiBub1JvdW5kIH0pfWB9XHJcbiAgICA+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJxdWFudGl0eS1zZWxlY3Rvci1jb250cm9sbGVyXCJcclxuICAgICAgICB0eXBlPVwibGlua1wiXHJcbiAgICAgICAgZGlzYWJsZWQ9e3ZhbHVlIDw9IG1pbiB8fCB2YWx1ZSA8PSAxfVxyXG4gICAgICAgIG9uQ2xpY2s9e2RlY3JlYXNlVmFsdWV9XHJcbiAgICAgID5cclxuICAgICAgICAtXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInF1YW50aXR5LXNlbGVjdG9yLW51bWJlclwiPnt2YWx1ZX08L2Rpdj5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGNsYXNzTmFtZT1cInF1YW50aXR5LXNlbGVjdG9yLWNvbnRyb2xsZXJcIlxyXG4gICAgICAgIHR5cGU9XCJsaW5rXCJcclxuICAgICAgICBkaXNhYmxlZD17dmFsdWUgPj0gbWF4fVxyXG4gICAgICAgIG9uQ2xpY2s9e2luY3JlYXNlVmFsdWV9XHJcbiAgICAgID5cclxuICAgICAgICArXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhRdWFudGl0eVNlbGVjdG9yKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCBGb290ZXJTdWJjcmliZSBmcm9tIFwiLi9lbGVtZW50cy9Gb290ZXJTdWJjcmliZVwiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi9vdGhlci9Db250YWluZXJcIjtcclxuaW1wb3J0IGxpbmtzIGZyb20gXCIuLi8uLi9kYXRhL2Zvb3Rlci1saW5rcy5qc29uXCI7XHJcblxyXG5mdW5jdGlvbiBGb290ZXIoeyBjb250YWluZXJUeXBlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItdG9wXCI+XHJcbiAgICAgICAgPENvbnRhaW5lciB0eXBlPXtjb250YWluZXJUeXBlfT5cclxuICAgICAgICAgIDxSb3cganVzdGlmeT1cImNlbnRlclwiIGd1dHRlcj17MzB9PlxyXG4gICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJndXR0ZXItcm93XCIgc3Bhbj1cIjI0XCIgc209ezEyfSBsZz17OH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItdG9wLWl0ZW0gLWNvbC1vbmVcIj5cclxuICAgICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXszMH0+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZ3V0dGVyLXJvd1wiIHNwYW49ezI0fT5cclxuICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvb3Rlci10aXRsZVwiPkNvbnRhY3QgVXM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8cD5Ib3VzZSAjOCwgUm9hZCAjMTQsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkRoYW5tb25kaSwgRGhha2EtMTIwOS4gPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkVtYWlsOiBzdXBwb3J0QGVsZW1lbnRyb25pY3MuY29tPC9wPiBcclxuICAgICAgICAgICAgICAgICAgICA8cD5waG9uZTogKzg4MDE3MTEtMjIzMzQ0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb290ZXItdGl0bGVcIj5HZXQgaW4gdG91Y2g8L2g1PlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPENvbCBjbGFzc05hbWU9XCJndXR0ZXItcm93XCIgc3Bhbj1cIjI0XCIgc209ezEyfSBsZz17OH0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItdG9wLWl0ZW0gLWNvbC10d29cIj5cclxuICAgICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXszMH0+XHJcbiAgICAgICAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZ3V0dGVyLXJvd1wiIHNwYW49ezI0fT5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9vdGVyLXRpdGxlXCI+TWVudTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAge2xpbmtzLmluZm9ybWF0aW9uLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57aXRlbS5uYW1lfTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0NvbD5cclxuXHJcbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZ3V0dGVyLXJvd1wiIHNwYW49XCIyNFwiIHNtPXsxOH0gbGc9ezh9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXRvcC1pdGVtIC1jb2wtdGhyZWVcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb290ZXItdGl0bGVcIj5TdWJzY3JpYmUgVXM8L2g1PlxyXG4gICAgICAgICAgICAgICAgPEZvb3RlclN1YmNyaWJlIHVybD1cImh0dHBzOi8vanN0ZXIudXM3Lmxpc3QtbWFuYWdlLmNvbS9zdWJzY3JpYmUvcG9zdD91PWVkNDBjMDA4NGEwYzViYTMxYjMzNjVkNjUmaWQ9ZWM2ZjMyYmY1ZVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9vdGVyLXRpdGxlXCI+T3VyIHBheW1lbnQgbWV0aG9kczwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2Fzc2V0cy9pbWFnZXMvZm9vdGVyL3BheW1lbnQucG5nXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJQYXltZW50IG1ldGhvZHNcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWJvdHRvbVwiPlxyXG4gICAgICAgIDxDb250YWluZXIgdHlwZT17Y29udGFpbmVyVHlwZX0+XHJcbiAgICAgICAgICA8cD5Db3B5cmlnaHQgwqkge2Ake25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX1gfSBFbGVtZW50cm9uaWNzLmNvbS4gQWxsIHJpZ2h0cyByZXNlcnZlZDwvcD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEZvb3Rlcik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE1haWxjaGltcFN1YnNjcmliZSBmcm9tIFwicmVhY3QtbWFpbGNoaW1wLXN1YnNjcmliZVwiO1xyXG5pbXBvcnQgeyBGb3JtLCBJbnB1dCwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmNvbnN0IEN1c3RvbUZvcm0gPSBSZWFjdC5tZW1vKCh7IHN0YXR1cywgbWVzc2FnZSwgb25WYWxpZGF0ZWQgfSkgPT4ge1xyXG4gIGNvbnN0IG9uRmluaXNoID0gKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3M6XCIsIHZhbHVlKTtcclxuICAgIHZhbHVlICYmXHJcbiAgICAgIG9uVmFsaWRhdGVkKHtcclxuICAgICAgICBFTUFJTDogdmFsdWUuZW1haWwsXHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG9uRmluaXNoRmFpbGVkID0gKGVycm9ySW5mbykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJGYWlsZWQ6XCIsIGVycm9ySW5mbyk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxGb3JtXHJcbiAgICAgICAgbmFtZT1cImJhc2ljXCJcclxuICAgICAgICBpbml0aWFsVmFsdWVzPXt7XHJcbiAgICAgICAgICByZW1lbWJlcjogdHJ1ZSxcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9uRmluaXNoPXtvbkZpbmlzaH1cclxuICAgICAgICBvbkZpbmlzaEZhaWxlZD17b25GaW5pc2hGYWlsZWR9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyLXN1YmNyaWJlX19mb3JtXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICAgIG5vU3R5bGU9e3RydWV9XHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgcnVsZXM9e1tcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBcIlRoZSBpbnB1dCBpcyBub3QgdmFsaWQgRS1tYWlsIVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJQbGVhc2UgaW5wdXQgeW91ciBFLW1haWwhXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWxcIiAvPlxyXG4gICAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgICAgIDxGb3JtLkl0ZW0gbm9TdHlsZT17dHJ1ZX0+XHJcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJsaW5rXCIgaHRtbFR5cGU9XCJzdWJtaXRcIj5cclxuICAgICAgICAgICAgU1VCU0NSSUJFXHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgPC9Gb3JtPlxyXG4gICAgICB7c3RhdHVzID09PSBcInNlbmRpbmdcIiAmJiA8ZGl2IHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+c2VuZGluZy4uLjwvZGl2Pn1cclxuICAgICAge3N0YXR1cyA9PT0gXCJlcnJvclwiICYmIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fVxyXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBtZXNzYWdlIH19XHJcbiAgICAgICAgLz5cclxuICAgICAgKX1cclxuICAgICAge3N0YXR1cyA9PT0gXCJzdWNjZXNzXCIgJiYgKFxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcImdyZWVuXCIgfX1cclxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWVzc2FnZSB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIDxiciAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXJTdWJjcmliZSh7IHVybCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNYWlsY2hpbXBTdWJzY3JpYmVcclxuICAgICAgdXJsPXt1cmx9XHJcbiAgICAgIHJlbmRlcj17KHsgc3Vic2NyaWJlLCBzdGF0dXMsIG1lc3NhZ2UgfSkgPT4gKFxyXG4gICAgICAgIDxDdXN0b21Gb3JtXHJcbiAgICAgICAgICBzdGF0dXM9e3N0YXR1c31cclxuICAgICAgICAgIG1lc3NhZ2U9e21lc3NhZ2V9XHJcbiAgICAgICAgICBvblZhbGlkYXRlZD17KGZvcm1EYXRhKSA9PiBzdWJzY3JpYmUoZm9ybURhdGEpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQm90dG9tTmF2IGZyb20gXCIuL2VsZW1lbnRzL0JvdHRvbU5hdlwiO1xyXG5cclxuaW1wb3J0IE1lbnUgZnJvbSBcIi4vZWxlbWVudHMvTWVudVwiO1xyXG5pbXBvcnQgVG9wTmF2IGZyb20gXCIuL2VsZW1lbnRzL1RvcE5hdlwiO1xyXG5cclxuZnVuY3Rpb24gSGVhZGVyKHsgY29udGFpbmVyVHlwZSwgaGVhZGVyU3R5bGUgfSkge1xyXG4gIGNvbnN0IHJlbmRlclN0eWxlQ2xhc3MgPSAodHlwZSkgPT4ge1xyXG4gICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJ0d29cIjpcclxuICAgICAgICByZXR1cm4gXCItc3R5bGUtdHdvXCI7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFwiZGVmYXVsdFwiO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtgaGVhZGVyLW9uZSAke3JlbmRlclN0eWxlQ2xhc3MoaGVhZGVyU3R5bGUpfWB9PlxyXG4gICAgICA8VG9wTmF2IGNvbnRhaW5lclR5cGU9e2NvbnRhaW5lclR5cGV9IC8+XHJcbiAgICAgIDxNZW51IGNvbnRhaW5lclR5cGU9e2NvbnRhaW5lclR5cGV9IC8+XHJcbiAgICAgIDxCb3R0b21OYXYgY29udGFpbmVyVHlwZT17Y29udGFpbmVyVHlwZX0vPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhIZWFkZXIpO1xyXG4iLCJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL290aGVyL0NvbnRhaW5lclwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vQ2F0ZWdvcnlcIjtcclxuXHJcbmZ1bmN0aW9uIEJvdHRvbU5hdih7IGNvbnRhaW5lclR5cGUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1uYXZcIj5cclxuICAgICAgPENvbnRhaW5lciB0eXBlPXtjb250YWluZXJUeXBlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1uYXYtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8Q2F0ZWdvcnkgLz5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm90dG9tLW5hdi1saW5rc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1uYXYtbGlua3NfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvZGVsaXZhcnlcIn0+XHJcbiAgICAgICAgICAgICAgICA8YT5EZWxldmFyeTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1uYXYtbGlua3NfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvaGVscFwifT5cclxuICAgICAgICAgICAgICAgIDxhPkhlbHA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQm90dG9tTmF2KTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmltcG9ydCB7IFNIT1AgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RlZmluZXNcIjtcclxuaW1wb3J0IHsgc2V0U3ViQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9zaG9wQWN0aW9uc1wiO1xyXG5cclxuY29uc3QgQ2F0ZWdvcnkgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgZ2xvYmFsU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmdsb2JhbFJlZHVjZXIpO1xyXG4gIGNvbnN0IHNob3BTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuc2hvcFJlZHVjZXIpO1xyXG5cclxuICBjb25zdCBzdWJDYXRlZ29yeSA9IFNIT1AuY2F0ZWdvcnkuZmluZChcclxuICAgIChpdGVtKSA9PiBpdGVtLm5hbWUudG9Mb3dlckNhc2UoKSA9PT0gZ2xvYmFsU3RhdGUuY2F0ZWdvcnkudG9Mb3dlckNhc2UoKVxyXG4gICk7XHJcbiAgY29uc3Qgb25DaG9vc2VTdWJDYXRlZ29yeSA9IChkYXRhKSA9PiB7XHJcbiAgICBpZiAoIWRhdGEgfHwgZGF0YSA9PT0gXCJhbGxcIikge1xyXG4gICAgICByZXR1cm4gZGlzcGF0Y2goc2V0U3ViQ2F0ZWdvcnkoXCJcIikpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRpc3BhdGNoKHNldFN1YkNhdGVnb3J5KGRhdGEpKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgb25DaG9vc2VTdWJDYXRlZ29yeSh2YWx1ZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9XCJhbGxcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgIHZhbHVlPXtzaG9wU3RhdGUuc3ViQ2F0ZWdvcnkgPT09IFwiXCIgPyBcImFsbFwiIDogc2hvcFN0YXRlLnN1YkNhdGVnb3J5fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJhbGxcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9kb2N1bWVudF9hbHRcIiAvPlxyXG4gICAgICAgICAgICBBbGwgQ2F0ZWdvcnlcclxuICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAge3N1YkNhdGVnb3J5ICYmXHJcbiAgICAgICAgICAgIHN1YkNhdGVnb3J5LnN1Yi5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPE9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17aXRlbS5uYW1lfT5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17aXRlbS5pY29uQ2xhc3N9IC8+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IEJ1dHRvbiwgRHJhd2VyIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IENsb3NlT3V0bGluZWQgfSBmcm9tIFwiQGFudC1kZXNpZ24vaWNvbnNcIjtcclxuaW1wb3J0IHtcclxuICBBaU91dGxpbmVVc2VyLFxyXG4gIEFpT3V0bGluZUhvbWUsXHJcbiAgQWlPdXRsaW5lU2hvcHBpbmdDYXJ0LFxyXG59IGZyb20gXCJyZWFjdC1pY29ucy9haVwiO1xyXG5pbXBvcnQgeyBSaU1lc3NhZ2VMaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XHJcblxyXG5pbXBvcnQgcHJvZHVjdHNEYXRhIGZyb20gXCIuLi8uLi8uLi9kYXRhL3Byb2R1Y3QuanNvblwiO1xyXG5pbXBvcnQgQ2FydFNpZGViYXIgZnJvbSBcIi4uLy4uL2NhcnQvQ2FydFNpZGViYXJcIjtcclxuLy8gaW1wb3J0IFdpc2hsaXN0U2lkZWJhciBmcm9tIFwiLi4vLi4vd2lzaGxpc3QvV2lzaGxpc3RTaWRlYmFyXCI7XHJcbmltcG9ydCBNZW51U2lkZWJhciBmcm9tIFwiLi9NZW51U2lkZWJhclwiO1xyXG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL1NlYXJjaEJhclwiO1xyXG5pbXBvcnQgeyBnZXRUb3RhbFByb2R1Y3RJbkNhcnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3Nob3BVdGlsc1wiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcclxuXHJcbmZ1bmN0aW9uIE1lbnUoeyBjb250YWluZXJUeXBlIH0pIHtcclxuICBjb25zdCBjYXJ0U3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnRSZWR1Y2VyKTtcclxuICAvLyBjb25zdCB3aXNobGlzdFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS53aXNobGlzdFJlZHVjZXIpO1xyXG4gIGNvbnN0IFtjYXJ0U2lkZWJhck9wZW4sIHNldENhcnRTaWRlYmFyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW21lbnVTaWRlYmFyT3Blbiwgc2V0TWVudVNpZGViYXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAvLyBjb25zdCBbd2lzaGxpc3RTaWRlYmFyT3Blbiwgc2V0V2lzaGxpc3RTaWRlYmFyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgIDxDb250YWluZXIgdHlwZT17Y29udGFpbmVyVHlwZX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LXNpZGViYXItb3BlbmVyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgc2V0TWVudVNpZGViYXJPcGVuKHRydWUpO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtbG9nb1wiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9cIn0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPGgzIHN0eWxlPXt7IGNvbG9yOiBcIiNmZmZmZmZcIiB9fT5FbGVtZW50cm9uaWNzPC9oMz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiTG9nb1wiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2E+ICovfVxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxTZWFyY2hCYXJcclxuICAgICAgICAgICAgICBmaWxsRGF0YT17cHJvZHVjdHNEYXRhfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiV2hhdCBhcmUgeW91IGxvb2tpbmcgZm9yID9cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtZnVuY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgey8qIDxCdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YT5Kb2luIG5vdzwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgey8qIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtZnVuY3Rpb24taXRlbVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRXaXNobGlzdFNpZGViYXJPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICtcclxuICAgICAgICAgICAgICAgICAgICBcIi9hc3NldHMvaW1hZ2VzL2hlYWRlci9tZW51LXdpc2hsaXN0LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57d2lzaGxpc3RTdGF0ZS5sZW5ndGh9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtZnVuY3Rpb24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL1wifT5cclxuICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZUhvbWUgLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtZnVuY3Rpb24taXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3AvY2hlY2tvdXRcIn0+XHJcbiAgICAgICAgICAgICAgICAgIDxSaU1lc3NhZ2VMaW5lIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudS1mdW5jdGlvbi1pdGVtXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldENhcnRTaWRlYmFyT3Blbih0cnVlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QWlPdXRsaW5lU2hvcHBpbmdDYXJ0IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPXtcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICtcclxuICAgICAgICAgICAgICAgICAgICBcIi9hc3NldHMvaW1hZ2VzL2hlYWRlci9tZW51LWJhZy5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgIDxzcGFuPntnZXRUb3RhbFByb2R1Y3RJbkNhcnQoY2FydFN0YXRlKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWZ1bmN0aW9uLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL2NoZWNrb3V0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lVXNlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LW1vYmlsZS1zZWFyY2hcIj5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPFNlYXJjaEJhciBmaWxsRGF0YT17cHJvZHVjdHNEYXRhfSBwbGFjZWhvbGRlcj1cIlNlYXJjaGluZy4uLlwiIC8+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogPERyYXdlclxyXG4gICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcclxuICAgICAgICB0aXRsZT17YFdpc2hsaXN0ICgke3dpc2hsaXN0U3RhdGUubGVuZ3RofSlgfVxyXG4gICAgICAgIGNsb3NhYmxlPXt0cnVlfVxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldFdpc2hsaXN0U2lkZWJhck9wZW4oZmFsc2UpfVxyXG4gICAgICAgIGNsb3NlSWNvbj17XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8cD5DbG9zZTwvcD4gPENsb3NlT3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgICB2aXNpYmxlPXt3aXNobGlzdFNpZGViYXJPcGVufVxyXG4gICAgICAgIHdpZHRoPXs0NDV9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWVudS1zaWRlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxXaXNobGlzdFNpZGViYXIgLz5cclxuICAgICAgPC9EcmF3ZXI+ICovfVxyXG4gICAgICA8RHJhd2VyXHJcbiAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxyXG4gICAgICAgIHRpdGxlPXtgU2hvcHBpbmcgY2FydCAoJHtnZXRUb3RhbFByb2R1Y3RJbkNhcnQoY2FydFN0YXRlKX0pYH1cclxuICAgICAgICBjbG9zYWJsZT17dHJ1ZX1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRDYXJ0U2lkZWJhck9wZW4oZmFsc2UpfVxyXG4gICAgICAgIGNsb3NlSWNvbj17XHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8cD5DbG9zZTwvcD4gPENsb3NlT3V0bGluZWQgLz5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgIH1cclxuICAgICAgICB2aXNpYmxlPXtjYXJ0U2lkZWJhck9wZW59XHJcbiAgICAgICAgd2lkdGg9ezQ0NX1cclxuICAgICAgICBjbGFzc05hbWU9XCJtZW51LXNpZGVcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPENhcnRTaWRlYmFyIC8+XHJcbiAgICAgIDwvRHJhd2VyPlxyXG4gICAgICA8RHJhd2VyXHJcbiAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxyXG4gICAgICAgIGNsb3NhYmxlPXt0cnVlfVxyXG4gICAgICAgIHRpdGxlPVwiIFwiXHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0TWVudVNpZGViYXJPcGVuKGZhbHNlKX1cclxuICAgICAgICBjbG9zZUljb249e1xyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPHA+Q2xvc2U8L3A+IDxDbG9zZU91dGxpbmVkIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICAgICAgdmlzaWJsZT17bWVudVNpZGViYXJPcGVufVxyXG4gICAgICAgIHdpZHRoPXszNTB9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWVudS1zaWRlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxNZW51U2lkZWJhciAvPlxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oTWVudSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTWVudSwgU2VsZWN0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgc2V0R2xvYmFsTGFuZ3VhZ2UsXHJcbiAgc2V0R2xvYmFsQ3VycmVuY3ksXHJcbn0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvZ2xvYmFsQWN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gTWVudVNpZGViYXIoKSB7XHJcbiAgY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xyXG4gIGNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGdsb2JhbFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5nbG9iYWxSZWR1Y2VyKTtcclxuICBjb25zdCBvblNlbGVjdExhbmd1YWdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRHbG9iYWxMYW5ndWFnZSh2YWx1ZSkpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25TZWxlY3RDdXJyZW5jeSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0R2xvYmFsQ3VycmVuY3kodmFsdWUpKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtc2lkZWJhclwiPlxyXG4gICAgICA8TWVudSBtb2RlPVwiaW5saW5lXCI+XHJcbiAgICAgICAgPFN1Yk1lbnUga2V5PVwic3ViMVwiIHRpdGxlPVwiSG9tZXBhZ2VzXCI+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjFcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL1wifT5cclxuICAgICAgICAgICAgICA8YT5Ib21lcGFnZSAxPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMlwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvaG9tZXBhZ2UyXCJ9PlxyXG4gICAgICAgICAgICAgIDxhPkhvbWVwYWdlIDI8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIzXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9ob21lcGFnZTNcIn0+XHJcbiAgICAgICAgICAgICAgPGE+SG9tZXBhZ2UgMzwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjRcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2hvbWVwYWdlNFwifT5cclxuICAgICAgICAgICAgICA8YT5Ib21lcGFnZSA0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICA8L1N1Yk1lbnU+XHJcbiAgICAgICAgPFN1Yk1lbnUga2V5PVwic3ViMlwiIHRpdGxlPVwiU2hvcFwiPlxyXG4gICAgICAgICAgPFN1Yk1lbnUga2V5PVwic3ViMi0xXCIgdGl0bGU9XCJTaG9wIGRldGFpbFwiPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjVcIj5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj17XHJcbiAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgK1xyXG4gICAgICAgICAgICAgICAgICBcIi9zaG9wL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLTFcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhPlByb2R1Y3QgRGV0YWlsIDE8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI2XCI+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e1xyXG4gICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICtcclxuICAgICAgICAgICAgICAgICAgXCIvc2hvcC9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC0yXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YT5Qcm9kdWN0IERldGFpbCAyPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiN1wiPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArXHJcbiAgICAgICAgICAgICAgICAgIFwiL3Nob3AvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwtM1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGE+UHJvZHVjdCBEZXRhaWwgMzwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI4XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL2NoZWNrb3V0XCJ9PlxyXG4gICAgICAgICAgICAgIDxhPkNoZWNrb3V0PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiOVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC9jaGVja291dC1jb21wbGV0ZVwifT5cclxuICAgICAgICAgICAgICA8YT5DaGVja291dCBDb21wbGV0ZTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMTBcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIiNcIn0+XHJcbiAgICAgICAgICAgIDxhPkhlbHA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIxMVwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiI1wifT5cclxuICAgICAgICAgICAgPGE+T2ZmZXI8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgIDwvTWVudT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXNpZGViYXItc2VsZWN0c1wiPlxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Z2xvYmFsU3RhdGUubGFuZ3VhZ2V9XHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTIwIH19XHJcbiAgICAgICAgICBib3JkZXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RMYW5ndWFnZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiZW5cIj5FbmdsaXNoPC9PcHRpb24+XHJcbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwianBcIj5KYXBhbmVzZTwvT3B0aW9uPlxyXG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInZpXCI+VmlldG5hbWVzZTwvT3B0aW9uPlxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Z2xvYmFsU3RhdGUuY3VycmVuY3kuY3VycmVuY3l9XHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTUwIH19XHJcbiAgICAgICAgICBib3JkZXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RDdXJyZW5jeX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiVVNEXCI+VVNEIC0gRG9sbGFyPC9PcHRpb24+XHJcbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiSlBZXCI+SlBZIC0gWWVuPC9PcHRpb24+XHJcbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiVk5EXCI+Vk5EIC0gVmlldG5hbSBkb25nPC9PcHRpb24+XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhNZW51U2lkZWJhcik7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNlbGVjdCwgQnV0dG9uLCBBdXRvQ29tcGxldGUgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcblxyXG5pbXBvcnQgeyBTSE9QIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kZWZpbmVzXCI7XHJcbmltcG9ydCB7IGdldFByb2R1Y3RzQnlDYXRlZ29yeSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vc2hvcFV0aWxzXCI7XHJcbmltcG9ydCB7XHJcbiAgc2V0R2xvYmFsQ2F0ZWdvcnksXHJcbiAgc2V0R2xvYmFsU2VhcmNoLFxyXG59IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2dsb2JhbEFjdGlvbnNcIjtcclxuaW1wb3J0IHsgc2V0U3ViQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9zaG9wQWN0aW9uc1wiO1xyXG5pbXBvcnQgdXNlRGVib3VuY2UgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91c2VEZWJvdW5kXCI7XHJcblxyXG5mdW5jdGlvbiBTZWFyY2hCYXJNb2JpbGUoeyBmaWxsRGF0YSwgcGxhY2Vob2xkZXIgfSkge1xyXG4gIGNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2hvd0Ryb3Bkb3duT3B0aW9ucywgc2V0U2hvd0Ryb3Bkb3duT3B0aW9uc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZ2xvYmFsU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmdsb2JhbFJlZHVjZXIpO1xyXG4gIGNvbnN0IGRlYm91bmRWYWx1ZSA9IHVzZURlYm91bmNlKHNlYXJjaCwgMzAwKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0R2xvYmFsU2VhcmNoKGRlYm91bmRWYWx1ZSkpO1xyXG4gIH0sIFtkZWJvdW5kVmFsdWVdKTtcclxuICBjb25zdCByZW5kZXJBdXRvRmlsbEl0ZW0gPSAoKSA9PiB7XHJcbiAgICBsZXQgcHJvZHVjdCA9IGdldFByb2R1Y3RzQnlDYXRlZ29yeShmaWxsRGF0YSwgZ2xvYmFsU3RhdGUuY2F0ZWdvcnkpO1xyXG4gICAgcmV0dXJuIHByb2R1Y3QubWFwKChpdGVtKSA9PiAoe1xyXG4gICAgICB2YWx1ZTogaXRlbS5uYW1lLFxyXG4gICAgfSkpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25TZWxlY3RDYXRlb3J5ID0gKHZhbHVlKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRHbG9iYWxDYXRlZ29yeSh2YWx1ZSkpO1xyXG4gICAgZGlzcGF0Y2goc2V0U3ViQ2F0ZWdvcnkoXCJcIikpO1xyXG4gIH07XHJcbiAgY29uc3Qgb3BlbkRyb3Bkb3duT3B0aW9uID0gKHZhbHVlKSA9PiB7XHJcbiAgICBzZXRTaG93RHJvcGRvd25PcHRpb25zKHRydWUpO1xyXG4gICAgc2V0U2VhcmNoKHZhbHVlKTtcclxuICB9O1xyXG4gIGNvbnN0IGNsb3NlRHJvcGRvd25PcHRpb24gPSAoKSA9PiB7XHJcbiAgICBzZXRTaG93RHJvcGRvd25PcHRpb25zKGZhbHNlKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uU2VsZWN0T3B0aW9uID0gKHZhbHVlLCBvcHRpb24pID0+IHtcclxuICAgIHNldFNlYXJjaCh2YWx1ZSk7XHJcbiAgICBjbG9zZURyb3Bkb3duT3B0aW9uKCk7XHJcbiAgfTtcclxuICBjb25zdCBvblNlYXJjaCA9ICgpID0+IHtcclxuICAgIGlmICghc2VhcmNoIHx8IHNlYXJjaCA9PT0gXCJcIikge1xyXG4gICAgICByb3V0ZXIucHVzaChcIi9cIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgcGF0aG5hbWU6IFwiL1wiLFxyXG4gICAgICAgIHF1ZXJ5OiB7IHE6IHNlYXJjaCB9LFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtc2VhcmNoXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1zZWFyY2hfX2Zvcm1cIj5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LXNlYXJjaF9fZm9ybS1zZWxlY3RcIlxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtnbG9iYWxTdGF0ZS5jYXRlZ29yeX1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxNTAgfX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdENhdGVvcnl9XHJcbiAgICAgICAgICB2YWx1ZT17Z2xvYmFsU3RhdGUuY2F0ZWdvcnl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1NIT1AuY2F0ZWdvcnkubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8T3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtpdGVtLm5hbWV9PlxyXG4gICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgIDwvT3B0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXNlYXJjaF9fZm9ybS1pbnB1dFwiPlxyXG4gICAgICAgICAgPEF1dG9Db21wbGV0ZVxyXG4gICAgICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgICAgIGJhY2tmaWxsPXt0cnVlfVxyXG4gICAgICAgICAgICBvcGVuPXtzaG93RHJvcGRvd25PcHRpb25zfVxyXG4gICAgICAgICAgICBvblNlYXJjaD17b3BlbkRyb3Bkb3duT3B0aW9ufVxyXG4gICAgICAgICAgICBvbkJsdXI9e2Nsb3NlRHJvcGRvd25PcHRpb259XHJcbiAgICAgICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdE9wdGlvbn1cclxuICAgICAgICAgICAgb3B0aW9ucz17cmVuZGVyQXV0b0ZpbGxJdGVtKCl9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cclxuICAgICAgICAgICAgZmlsdGVyT3B0aW9uPXsoaW5wdXRWYWx1ZSwgb3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgIG9wdGlvbi52YWx1ZS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoaW5wdXRWYWx1ZS50b1VwcGVyQ2FzZSgpKSAhPT1cclxuICAgICAgICAgICAgICAtMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtvblNlYXJjaH0+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25fc2VhcmNoXCIgLz5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2VhcmNoQmFyTW9iaWxlKTtcclxuIiwiLy8gaW1wb3J0IHsgU2VsZWN0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vLyBpbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gaW1wb3J0IHtcclxuLy8gICBzZXRHbG9iYWxMYW5ndWFnZSxcclxuLy8gICBzZXRHbG9iYWxDdXJyZW5jeSxcclxuLy8gfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9nbG9iYWxBY3Rpb25zXCI7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSBcIi4uLy4uL290aGVyL0NvbnRhaW5lclwiO1xyXG5cclxuZnVuY3Rpb24gVG9wTmF2KHsgY29udGFpbmVyVHlwZSB9KSB7XHJcbiAgLy8gY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuICAvLyBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgLy8gY29uc3QgZ2xvYmFsU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmdsb2JhbFJlZHVjZXIpO1xyXG4gIC8vIGNvbnN0IG9uU2VsZWN0TGFuZ3VhZ2UgPSAodmFsdWUpID0+IHtcclxuICAvLyAgIGRpc3BhdGNoKHNldEdsb2JhbExhbmd1YWdlKHZhbHVlKSk7XHJcbiAgLy8gfTtcclxuICAvLyBjb25zdCBvblNlbGVjdEN1cnJlbmN5ID0gKHZhbHVlKSA9PiB7XHJcbiAgLy8gICBkaXNwYXRjaChzZXRHbG9iYWxDdXJyZW5jeSh2YWx1ZSkpO1xyXG4gIC8vIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdlwiPlxyXG4gICAgICA8Q29udGFpbmVyIHR5cGU9e2NvbnRhaW5lclR5cGV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdi13cmFwcGVyXCI+XHJcbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LXNlbGVjdHNcIj5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Z2xvYmFsU3RhdGUubGFuZ3VhZ2V9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDkwIH19XHJcbiAgICAgICAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtvblNlbGVjdExhbmd1YWdlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImVuXCI+RW5nbGlzaDwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJqcFwiPkphcGFuZXNlPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cInZpXCI+VmlldG5hbWVzZTwvT3B0aW9uPlxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Z2xvYmFsU3RhdGUuY3VycmVuY3kuY3VycmVuY3l9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDEyMCB9fVxyXG4gICAgICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RDdXJyZW5jeX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJVU0RcIj5VU0QgLSBEb2xsYXI8L09wdGlvbj5cclxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiSlBZXCI+SlBZIC0gWWVuPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlZORFwiPlZORCAtIFZpZXRuYW0gZG9uZzwvT3B0aW9uPlxyXG4gICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdi1saW5rc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1uYXYtbGlua3NfX2l0ZW1cIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvI1wifT5cclxuICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uX3Bob25lXCIgLz4gKzg4MDE3MTEtMjIzMzQ0XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LWxpbmtzX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiLyNcIn0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9tYWlsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgc3VwcG9ydEBlbGVtZW50cm9uaWNzLmNvbVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFRvcE5hdik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyBCYWNrVG9wLCBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2hlYWRlci9IZWFkZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vZm9vdGVyL0Zvb3RlclwiO1xyXG5pbXBvcnQgV2l0aEhlYWRlclNjcm9sbCBmcm9tIFwiLi4vLi4vY29tbW9uL1dpdGhIZWFkZXJTY3JvbGxcIjtcclxuaW1wb3J0IFN1YnBhZ2VzU2lkZWJhciBmcm9tIFwiLi4vc3VicGFnZXMvU3VicGFnZXNTaWRlYmFyXCI7XHJcblxyXG5jb25zdCBTY3JvbGxIZWFkZXIgPSBXaXRoSGVhZGVyU2Nyb2xsKEhlYWRlcik7XHJcblxyXG5mdW5jdGlvbiBMYXlvdXRPbmUoe1xyXG4gIHRpdGxlLFxyXG4gIGhlYWRlclN0eWxlLFxyXG4gIGNvbnRhaW5lclR5cGUsXHJcbiAgY2hpbGRyZW4sXHJcbiAgY2xlYXJTcGFjZVRvcCxcclxufSkge1xyXG4gIG1lc3NhZ2UuY29uZmlnKHtcclxuICAgIG1heENvdW50OiAzLFxyXG4gICAgZHVyYXRpb246IDEsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8U2Nyb2xsSGVhZGVyIGhlYWRlclN0eWxlPXtoZWFkZXJTdHlsZX0gY29udGFpbmVyVHlwZT17Y29udGFpbmVyVHlwZX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb250ZW50ICR7Y2xhc3NOYW1lcyh7IFwiY2xlYXItdG9wXCI6IGNsZWFyU3BhY2VUb3AgfSl9YH0+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPEZvb3RlciBjb250YWluZXJUeXBlPXtjb250YWluZXJUeXBlfSAvPlxyXG4gICAgICA8QmFja1RvcCAvPlxyXG4gICAgICA8U3VicGFnZXNTaWRlYmFyIC8+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKExheW91dE9uZSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhaW5lcih7IHR5cGUsIGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCByZW5kZXJDb250YWluZXJUeXBlID0gKHR5cGUpID0+IHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIFwiZmx1aWRcIjpcclxuICAgICAgICByZXR1cm4gXCJjb250YWluZXItZmx1aWRcIjtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gXCJjb250YWluZXJcIjtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17cmVuZGVyQ29udGFpbmVyVHlwZSh0eXBlKX0+e2NoaWxkcmVufTwvZGl2PjtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJwYWdlc1NpZGViYXIoKSB7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2Lz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IEZvcm0sIElucHV0LCBCdXR0b24sIENoZWNrYm94LCBSb3csIENvbCwgU2VsZWN0IH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCBMYXlvdXRPbmUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0cy9MYXlvdXRPbmVcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9vdGhlci9Db250YWluZXJcIjtcclxuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3kgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja291dENvbXBsZXRlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0T25lIHRpdGxlPVwiQ2hlY2tvdXQgY29tcGxldGVkXCI+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dC1jb21wbGV0ZVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dC1jb21wbGV0ZS1zdW1tYXJ5XCI+XHJcbiAgICAgICAgICAgIDxoMz5Db25ncmF0dWxhdGlvbiEgWW914oCZdmUgY29tcGxldGVkIHBheW1lbnQuPC9oMz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dC1jb21wbGV0ZS1zdW1tYXJ5X190YWJsZVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXQtY29tcGxldGUtc3VtbWFyeV9fdGFibGUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGg1Pk9yZGVyIE51bWJlcjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8cD4xMjA8L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGVja291dC1jb21wbGV0ZS1zdW1tYXJ5X190YWJsZS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8aDU+RGF0ZTwvaDU+XHJcbiAgICAgICAgICAgICAgICA8cD57YCR7bmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygpfWB9PC9wPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXQtY29tcGxldGUtc3VtbWFyeV9fdGFibGUtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPGg1PlRvdGFsPC9oNT5cclxuICAgICAgICAgICAgICAgIDxwPntmb3JtYXRDdXJyZW5jeSgyMDApfTwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrb3V0LWNvbXBsZXRlLXN1bW1hcnlfX3RhYmxlLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxoNT5QYXltZW50IG1ldGhvZHM8L2g1PlxyXG4gICAgICAgICAgICAgICAgPHA+Q2hlY2sgcGF5bWVudDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tvdXQtY29tcGxldGUtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICA8aDM+T3JkZXIgRGV0YWlsczwvaDM+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0aD5Qcm9kdWN0PC90aD5cclxuICAgICAgICAgICAgICAgICAgPHRoPlByaWNlPC90aD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90aGVhZD5cclxuXHJcbiAgICAgICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgICAgICA8dGQ+U3RheS1NYXR0ZSBTaGVlciBQcmVzc2VkIHggMTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib2xkXCI+e2Zvcm1hdEN1cnJlbmN5KDEwMCl9PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5TdWJ0b3RhbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib2xkXCI+e2Zvcm1hdEN1cnJlbmN5KDEwMCl9PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5TaGlwcGluZzwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5GcmVlIHNoaXA8L3RkPlxyXG4gICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgPHRkPlBheW1lbnQgTWV0aG9kPC90ZD5cclxuICAgICAgICAgICAgICAgICAgPHRkPkNoZWNrIFBheW1lbnRzPC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZD5Ub3RhbDwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJib2xkXCI+e2Zvcm1hdEN1cnJlbmN5KDEwMCl9PC90ZD5cclxuICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvTGF5b3V0T25lPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IHsgQ0FSVCB9IGZyb20gXCIuLi9kZWZpbmVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVG9DYXJ0ID0gKHByb2R1Y3QsIHF1YW50aXR5LCBjb2xvciwgc2l6ZSkgPT4gKHtcclxuICB0eXBlOiBDQVJULkFERF9UT19DQVJULFxyXG4gIHByb2R1Y3QsXHJcbiAgcXVhbnRpdHksXHJcbiAgY29sb3IsXHJcbiAgc2l6ZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlRnJvbUNhcnQgPSAoY2FydElkKSA9PiAoe1xyXG4gIHR5cGU6IENBUlQuUkVNT1ZFX0ZST01fQ0FSVCxcclxuICBjYXJ0SWQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUFsbEZyb21DYXJ0ID0gKCkgPT4gKHtcclxuICB0eXBlOiBDQVJULlJFTU9WRV9BTExfRlJPTV9DQVJULFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBkZWNyZWFzZVF1YW50aXR5Q2FydCA9IChjYXJ0SWQpID0+ICh7XHJcbiAgdHlwZTogQ0FSVC5ERUNSRUFTRV9RVUFOVElUWV9DQVJULFxyXG4gIGNhcnRJZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgaW5jcmVhc2VRdWFudGl0eUNhcnQgPSAoY2FydElkKSA9PiAoe1xyXG4gIHR5cGU6IENBUlQuSU5DUkVBU0VfUVVBTlRJVFlfQ0FSVCxcclxuICBjYXJ0SWQsXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBHTE9CQUwgfSBmcm9tIFwiLi4vZGVmaW5lc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEdsb2JhbExhbmd1YWdlID0gKGxhbmcpID0+ICh7XHJcbiAgdHlwZTogR0xPQkFMLlNFVF9MQU5HVUFHRSxcclxuICBsYW5nLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRHbG9iYWxDdXJyZW5jeSA9IChjdXIpID0+ICh7XHJcbiAgdHlwZTogR0xPQkFMLlNFVF9DVVJSRU5DWSxcclxuICBjdXIsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEdsb2JhbENhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiAoe1xyXG4gIHR5cGU6IEdMT0JBTC5TRVRfQ0FURUdPUlksXHJcbiAgY2F0ZWdvcnksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEdsb2JhbFNlYXJjaCA9IChrZXl3b3JkKSA9PiAoe1xyXG4gIHR5cGU6IEdMT0JBTC5TRVRfU0VBUkNILFxyXG4gIGtleXdvcmQsXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBTSE9QIH0gZnJvbSBcIi4uL2RlZmluZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRTb3J0ID0gKHNvcnRUeXBlKSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuU0VUX1NPUlQsXHJcbiAgc29ydFR5cGUsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFN1YkNhdGVnb3J5ID0gKHN1YkNhdGVnb3J5KSA9PiAoe1xyXG4gIHR5cGU6IFNIT1AuU0VUX1NVQkNBVEVHT1JZLFxyXG4gIHN1YkNhdGVnb3J5LFxyXG59KTtcclxuIiwiZXhwb3J0IGNvbnN0IEdMT0JBTCA9IHtcclxuICBTRVRfTEFOR1VBR0U6IFwiU0VUX0xBTkdVQUdFXCIsXHJcbiAgU0VUX0NVUlJFTkNZOiBcIlNFVF9DVVJSRU5DWVwiLFxyXG4gIFNFVF9DQVRFR09SWTogXCJTRVRfQ0FURUdPUllcIixcclxuICBTRVRfU0VBUkNIOiBcIlNFVF9TRUFSQ0hcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBDQVJUID0ge1xyXG4gIEFERF9UT19DQVJUOiBcIkFERF9UT19DQVJUXCIsXHJcbiAgUkVNT1ZFX0ZST01fQ0FSVDogXCJSRU1PVkVfRlJPTV9DQVJUXCIsXHJcbiAgUkVNT1ZFX0FMTF9GUk9NX0NBUlQ6IFwiUkVNT1ZFX0FMTF9GUk9NX0NBUlRcIixcclxuICBERUNSRUFTRV9RVUFOVElUWV9DQVJUOiBcIkRFQ1JFQVNFX1FVQU5USVRZX0NBUlRcIixcclxuICBJTkNSRUFTRV9RVUFOVElUWV9DQVJUOiBcIklOQ1JFQVNFX1FVQU5USVRZX0NBUlRcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBXSVNITElTVCA9IHtcclxuICBBRERfVE9fV0lTSExJU1Q6IFwiQUREX1RPX1dJU0hMSVNUXCIsXHJcbiAgUkVNT1ZFX0ZST01fV0lTSExJU1Q6IFwiUkVNT1ZFX0ZST01fV0lTSExJU1RcIixcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTSE9QID0ge1xyXG4gIFNFVF9TT1JUOiBcIlNFVF9TT1JUXCIsXHJcbiAgU0VUX1NVQkNBVEVHT1JZOiBcIlNFVF9TVUJDQVRFR09SWVwiLFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYW50LWRlc2lnbi9pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxdWVyeXN0cmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9haVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9yaVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tYWlsY2hpbXAtc3Vic2NyaWJlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=