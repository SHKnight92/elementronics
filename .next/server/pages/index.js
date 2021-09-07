module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
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

/***/ "./src/common/useProductData.js":
/*!**************************************!*\
  !*** ./src/common/useProductData.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useProductData; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shopUtils */ "./src/common/shopUtils.js");


function useProductData(productData, category, query) {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(productData);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const product = query ? Object(_shopUtils__WEBPACK_IMPORTED_MODULE_1__["getProductsBySearch"])(Object(_shopUtils__WEBPACK_IMPORTED_MODULE_1__["getProductsByCategory"])(productData, category), query) : Object(_shopUtils__WEBPACK_IMPORTED_MODULE_1__["getProductsByCategory"])(productData, category);
    setData(product);
    setData(product);
  }, [category, query]);
  return data;
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

/***/ "./src/components/product/Product.js":
/*!*******************************************!*\
  !*** ./src/components/product/Product.js ***!
  \*******************************************/
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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../redux/actions/wishlistActions */ "./src/redux/actions/wishlistActions.js");
/* harmony import */ var _shop_ShopQuickView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shop/ShopQuickView */ "./src/components/shop/ShopQuickView.js");
var _jsxFileName = "F:\\Elementronics\\src\\components\\product\\Product.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function Product({
  data,
  productStyle
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: visible,
    1: setVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: imageLoading,
    1: setImageLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const globalState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.globalReducer);
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.cartReducer);
  const wishlistState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.wishlistReducer);
  const productInWishlist = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_6__["checkProductInWishlist"])(wishlistState, data.id);
  const avaiableQuantity = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_6__["checkAvaiableQuantityToAdd"])(cartState, data);
  const {
    currency,
    locales
  } = globalState.currency;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setImageLoading(true);
  }, [globalState.category]);

  const renderProductType = () => {
    if (data.discount && !data.isNew) {
      return __jsx("p", {
        className: "product-type -sale",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 14
        }
      }, "Sale");
    } else if (data.isNew && !data.discount) {
      return __jsx("p", {
        className: "product-type -new",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 14
        }
      }, "New");
    } else if (data.isNew && data.discount) {
      return __jsx("p", {
        className: "product-type -new",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 14
        }
      }, "New");
    } else {
      return null;
    }
  };

  console.log(avaiableQuantity);

  const onAddToCart = data => {
    if (avaiableQuantity === 0) {
      return;
    }

    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_7__["addToCart"])(data, 1, "none", "none"));
    antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product added to cart successfully");
  };

  const onAddToWishlist = data => {
    if (productInWishlist) {
      dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_8__["removeFromWishlist"])(data.id));
      return antd__WEBPACK_IMPORTED_MODULE_2__["message"].error("Product removed from wishlist");
    } else {
      dispatch(Object(_redux_actions_wishlistActions__WEBPACK_IMPORTED_MODULE_8__["addToWishlist"])(data));
      return antd__WEBPACK_IMPORTED_MODULE_2__["message"].success("Product added to wishlist successfully");
    }
  };

  const renderStyleClass = () => {
    const avaialeStyles = ["one", "two", "three"];

    if (avaialeStyles.includes(productStyle)) {
      if (!productStyle || productStyle === "one") {
        return "-style-one";
      } else {
        return "-style-" + productStyle;
      }
    } else {
      return "-style-one";
    }
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = e => {
    setVisible(false);
  };

  const handleImageLoaded = () => {
    setImageLoading(false);
  };

  return data ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: `product ${renderStyleClass()}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "product-image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + `/product/[slug]`,
    as: "" + `/product/${data.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      loading: imageLoading
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, data.thumbImage && data.thumbImage.map((item, index) => __jsx("img", {
    onLoad: handleImageLoaded,
    key: index,
    src: item,
    alt: "Product image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 19
    }
  })))), imageLoading && __jsx("div", {
    className: "product-image-loading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Spin"], {
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 15
    }
  })), renderProductType(), productStyle === "two" ? __jsx("div", {
    className: "product-button-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "Quick view",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: showModal,
    type: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon_search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: productInWishlist ? "Remove from wishlist" : "Add to wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: `product-atw ${classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      active: productInWishlist
    })}`,
    type: "text",
    onClick: () => onAddToWishlist(data),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon_heart_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "Add to cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    disabled: avaiableQuantity === 0,
    type: "text",
    onClick: () => onAddToCart(data),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon_bag_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 19
    }
  })))) : null, !productStyle || productStyle === "one" ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "left",
    title: productInWishlist ? "Remove from wishlist" : "Add to wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    className: `product-atw ${classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      active: productInWishlist
    })}`,
    type: "text",
    shape: "circle",
    onClick: () => onAddToWishlist(data),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon_heart_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 19
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: showModal,
    className: "product-qv",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 15
    }
  }, "Quick view")) : null), __jsx("div", {
    className: "product-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "" + `/product/[slug]`,
    as: "" + `/product/${data.slug}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 11
    }
  }, __jsx("a", {
    className: "product-name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }
  }, data.name)), __jsx("div", {
    className: "product-rate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 11
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Rate"], {
    defaultValue: data.rate,
    disabled: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }), __jsx("span", {
    className: "product-rate-quantity",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }
  }, "(", data.rate, ")")), __jsx("div", {
    className: "product-content__footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "product-content__footer-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 13
    }
  }, __jsx("h5", {
    className: "product-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 15
    }
  }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(data.price - data.discount, locales, currency) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(data.price, locales, currency)), data.discount && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 17
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(data.price, locales, currency))), !productStyle || productStyle === "one" ? __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    title: "Add to cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    disabled: avaiableQuantity === 0,
    className: "product-atc",
    type: "text",
    shape: "circle",
    onClick: () => onAddToCart(data),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "icon_bag_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 19
    }
  }))) : null), productStyle === "three" ? __jsx("div", {
    className: "product-button-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "product-button-group__wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 15
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "top",
    title: "Quick view",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: showModal,
    shape: "circle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "icon_search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 21
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "top",
    title: productInWishlist ? "Remove from wishlist" : "Add to wishlist",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    shape: "circle",
    className: `product-atw ${classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      active: productInWishlist
    })}`,
    onClick: () => onAddToWishlist(data),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "icon_heart_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 21
    }
  }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Tooltip"], {
    placement: "top",
    title: "Add to cart",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    disabled: avaiableQuantity === 0,
    shape: "circle",
    onClick: () => onAddToCart(data),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 19
    }
  }, __jsx("i", {
    className: "icon_bag_alt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 21
    }
  }))))) : null)), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    footer: null,
    afterClose: handleCancel,
    onCancel: handleCancel,
    visible: visible,
    width: 850,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 7
    }
  }, __jsx(_shop_ShopQuickView__WEBPACK_IMPORTED_MODULE_9__["default"], {
    setModalVisible: setVisible,
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 9
    }
  }))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Skeleton"], {
    active: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257,
      columnNumber: 5
    }
  });
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(Product));

/***/ }),

/***/ "./src/components/productDetail/productDetailContent/ProductDetailContentOne.js":
/*!**************************************************************************************!*\
  !*** ./src/components/productDetail/productDetailContent/ProductDetailContentOne.js ***!
  \**************************************************************************************/
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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/utils */ "./src/common/utils.js");
/* harmony import */ var _redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../redux/actions/cartActions */ "./src/redux/actions/cartActions.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/shopUtils */ "./src/common/shopUtils.js");
/* harmony import */ var _controls_QuantitySelector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../controls/QuantitySelector */ "./src/components/controls/QuantitySelector.js");
var _jsxFileName = "F:\\Elementronics\\src\\components\\productDetail\\productDetailContent\\ProductDetailContentOne.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // import Countdown, { zeroPad } from "react-countdown";






 // import ProductGuaranteed from "../elements/ProductGuaranteed";

function ProductDetailContentOne({
  data,
  onAddedToCart,
  hideGuaranteed,
  quantityControllerNoRound,
  showCountdown
}) {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useDispatch"])();
  const {
    0: quantity,
    1: setQuantity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: currentColor,
    1: setCurrentColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("none");
  const {
    0: currentSize,
    1: setCurrentSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("none");
  const globalState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.globalReducer);
  const cartState = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["useSelector"])(state => state.cartReducer);
  const avaiableQuantity = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_7__["checkAvaiableQuantityToAdd"])(cartState, data);
  const {
    currency,
    locales
  } = globalState.currency;

  const onAddProductToCart = data => {
    if (avaiableQuantity === 0) {
      return;
    }

    dispatch(Object(_redux_actions_cartActions__WEBPACK_IMPORTED_MODULE_6__["addToCart"])(data, quantity, currentColor, currentSize));
    onAddedToCart && onAddedToCart();
    antd__WEBPACK_IMPORTED_MODULE_1__["message"].success("Product added to cart successfully");
  }; // const onChooseSize = (e) => {
  //   setCurrentSize(e.target.value);
  // };
  // const onChooseColor = (e) => {
  //   setCurrentColor(e.target.value);
  // };


  return __jsx("div", {
    className: "product-detail-content-one",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, data.name), __jsx("div", {
    className: "product-detail-content-one-rate",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Rate"], {
    disabled: true,
    defaultValue: data.rate,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }), __jsx("span", {
    className: "product-detail-content-one-review-count",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, "- ", data.rate, " Reviews")), __jsx("div", {
    className: "product-detail-content-one-price",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, data.discount ? Object(_common_utils__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(data.price - data.discount, locales, currency) : Object(_common_utils__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(data.price, locales, currency)), data.discount && __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, Object(_common_utils__WEBPACK_IMPORTED_MODULE_5__["formatCurrency"])(data.price, locales, currency))), __jsx("p", {
    className: "product-detail-content-one-description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi illo possimus quae tenetur. Porro aliquam quaerat dolorum pariatur molestias commodi ipsa"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"], {
    className: "product-detail-breadcrumb",
    separator: ">",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, "Home"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 9
    }
  }, "Product"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, data.category), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, data.subCategory), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Breadcrumb"].Item, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, data.name)), __jsx("div", {
    className: "product-detail-content-one-actions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 7
    }
  }, __jsx(_controls_QuantitySelector__WEBPACK_IMPORTED_MODULE_8__["default"], {
    noRound: quantityControllerNoRound,
    defaultValue: 1,
    onChange: val => setQuantity(val),
    size: "big",
    max: Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_7__["checkAvaiableQuantityToAdd"])(cartState, data),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 9
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: `product-detail-content-one-atc ${classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      disabled: avaiableQuantity === 0
    })}`,
    type: "link",
    danger: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 10
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "" + "/shop/checkout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 11
    }
  }, "Buy now")), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: () => onAddProductToCart(data),
    disabled: avaiableQuantity === 0,
    className: `product-detail-content-one-atc ${classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      disabled: avaiableQuantity === 0
    })}`,
    type: "link",
    danger: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 9
    }
  }, "Add to cart"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: `product-detail-content-one-atc ${classnames__WEBPACK_IMPORTED_MODULE_4___default()({
      disabled: avaiableQuantity === 0
    })}`,
    type: "link",
    danger: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "" + "/shop/checkout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  }, "Wishlist"))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ProductDetailContentOne));

/***/ }),

/***/ "./src/components/shop/Banners.js":
/*!****************************************!*\
  !*** ./src/components/shop/Banners.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-material-ui-carousel */ "react-material-ui-carousel");
/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_slider_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/slider.json */ "./src/data/slider.json");
var _data_slider_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/slider.json */ "./src/data/slider.json", 1);
var _jsxFileName = "F:\\Elementronics\\src\\components\\shop\\Banners.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const useStyle = Object(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])({
  container: {
    width: "auto",
    marginBottom: "25px"
  },
  image: {
    width: "100%",
    height: 280
  }
});

const Banners = () => {
  const classes = useStyle();
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
    autoPlay: true,
    animation: "fade",
    indicators: false,
    navButtonsAlwaysVisible: true,
    cycleNavigation: true,
    className: classes.container,
    StylesProvider: true,
    navButtonsProps: {
      style: {
        color: "#ffffff",
        backgroundColor: "#00000050",
        borderRadius: 0,
        margin: 0,
        width: 50,
        margin: "0px 10px"
      }
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, _data_slider_json__WEBPACK_IMPORTED_MODULE_3__[0].images.map(image => __jsx("img", {
    src: image,
    className: classes.image,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Banners);

/***/ }),

/***/ "./src/components/shop/LatestProducts.js":
/*!***********************************************!*\
  !*** ./src/components/shop/LatestProducts.js ***!
  \***********************************************/
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
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _product_Product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product/Product */ "./src/components/product/Product.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/shopUtils */ "./src/common/shopUtils.js");
var _jsxFileName = "F:\\Elementronics\\src\\components\\shop\\LatestProducts.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const productsContainer = {
  marginBottom: "35px",
  borderBottom: "2px solid #ddd",
  paddingBottom: "20px"
};
const arrowStyle = {
  display: "flex",
  alignItems: "center"
};
const arrowSpan = {
  color: "#0a0a2150",
  cursor: "pointer",
  padding: "5px"
};
const arrow = {
  fontSize: "35px"
};

function SampleNextArrow({
  onClick
}) {
  return __jsx("div", {
    style: arrowStyle,
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx("span", {
    style: arrowSpan,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_5__["RiArrowRightCircleLine"], {
    style: arrow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  })));
}

function SamplePrevArrow({
  onClick
}) {
  return __jsx("div", {
    style: arrowStyle,
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, __jsx("span", {
    style: arrowSpan,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_5__["RiArrowLeftCircleLine"], {
    style: arrow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  })));
}

function LatestProducts({
  productResponsive,
  fiveColumn,
  data,
  productPerPage,
  productStyle
}) {
  const shopState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.shopReducer);
  const globalState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.globalReducer);
  const {
    0: currentData,
    1: setCurrentData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: offset,
    1: setOffset
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let filteredProduct = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_7__["getProductsByFilter"])([...data], shopState.sort, shopState.subCategory);
    setCurrentData(filteredProduct);
    setOffset(0);
  }, [shopState, data]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setPage(1);
  }, [globalState]);

  const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 9
        }
      }, __jsx("i", {
        className: "fal fa-angle-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }
      }));
    }

    if (type === "next") {
      return __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 9
        }
      }, __jsx("i", {
        className: "fal fa-angle-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }
      }));
    }

    return originalElement;
  };

  const onChangeOffset = (page, pageSize) => {
    let offset = (page - 1) * pageSize;
    setPage(page);
    setOffset(offset);
  };

  const settings = {
    nextArrow: __jsx(SampleNextArrow, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 16
      }
    }),
    prevArrow: __jsx(SamplePrevArrow, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 16
      }
    }),
    rtl: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 920,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }]
  };
  const {
    0: sortProducts,
    1: setSortProducts
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const productHandle = () => {
    const toggleProduct = sortProducts ? "" : "#long";
    setSortProducts(toggleProduct);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "shop-content__header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "shop-content__header-showing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }, "Latest Products")), __jsx("div", {
    className: "shop-content__header-filter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: productHandle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 11
    }
  }, "View All"))), !sortProducts ? __jsx("div", {
    className: "shop-content__product",
    style: productsContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 9
    }
  }, !currentData ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    description: "No products in this category",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, currentData.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "shop-related-products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 19
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({}, settings, {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 21
    }
  }), currentData.slice(0, 8).map((product, index) => __jsx("div", _extends({
    className: "slider-item",
    key: index
  }, productResponsive, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 25
    }
  }), __jsx(_product_Product__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: product,
    productStyle: productStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 27
    }
  })))))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 17
    }
  }))) : __jsx("div", {
    className: "shop-content__product",
    id: "long",
    style: productsContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 9
    }
  }, !currentData ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    description: "No products in this category",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 13
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, currentData.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [{
      xs: 5,
      sm: 5,
      xl: 15,
      xxl: 30
    }, 30],
    style: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-evenly"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 19
    }
  }, currentData.slice(offset, offset + productPerPage).map((product, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], _extends({
    key: index,
    className: "five-col"
  }, productResponsive, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 25
    }
  }), __jsx(_product_Product__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: product,
    productStyle: productStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 27
    }
  })))), currentData.length >= productPerPage && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Pagination"], {
    classNames: "shop-content__product-pagination",
    defaultCurrent: 1,
    current: page,
    total: currentData.length,
    pageSize: productPerPage,
    itemRender: itemRender,
    onChange: (page, pageSize) => onChangeOffset(page, pageSize),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 21
    }
  })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 17
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (LatestProducts);

/***/ }),

/***/ "./src/components/shop/ShopContent.js":
/*!********************************************!*\
  !*** ./src/components/shop/ShopContent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ShopContentHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopContentHeader */ "./src/components/shop/ShopContentHeader.js");
/* harmony import */ var _LatestProducts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LatestProducts */ "./src/components/shop/LatestProducts.js");
/* harmony import */ var _TrandingProducts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TrandingProducts */ "./src/components/shop/TrandingProducts.js");
var _jsxFileName = "F:\\Elementronics\\src\\components\\shop\\ShopContent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function ShopContent({
  fiveColumn,
  productResponsive,
  data,
  productPerPage,
  productStyle
}) {
  return __jsx("div", {
    className: "shop-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx(_ShopContentHeader__WEBPACK_IMPORTED_MODULE_1__["default"], {
    productPerPage: productPerPage,
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx(_LatestProducts__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "product-container",
    productStyle: productStyle,
    fiveColumn: fiveColumn,
    productResponsive: productResponsive,
    data: data,
    productPerPage: productPerPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }), __jsx(_TrandingProducts__WEBPACK_IMPORTED_MODULE_3__["default"], {
    productStyle: productStyle,
    fiveColumn: fiveColumn,
    productResponsive: productResponsive,
    data: data,
    productPerPage: productPerPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 5
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ShopContent));

/***/ }),

/***/ "./src/components/shop/ShopContentHeader.js":
/*!**************************************************!*\
  !*** ./src/components/shop/ShopContentHeader.js ***!
  \**************************************************/
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
/* harmony import */ var _redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/actions/shopActions */ "./src/redux/actions/shopActions.js");
var _jsxFileName = "F:\\Elementronics\\src\\components\\shop\\ShopContentHeader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ShopContentHeader({
  data,
  productPerPage
}) {
  const {
    Option
  } = antd__WEBPACK_IMPORTED_MODULE_1__["Select"];
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useDispatch"])();
  const shopState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.shopReducer);

  const handleChange = value => {
    dispatch(Object(_redux_actions_shopActions__WEBPACK_IMPORTED_MODULE_3__["setSort"])(value));
  };

  return __jsx("div", {
    className: "shop-content__header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "shop-content__header-showing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "shop-content__header-filter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, "Filter by:"), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Select"], {
    className: "shop-content__header-filter__select",
    defaultValue: shopState.sort,
    style: {
      width: 250 / 16 + "em"
    },
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx(Option, {
    value: "default",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Default"), __jsx(Option, {
    value: "lowHigh",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, "Price: Low to High"), __jsx(Option, {
    value: "highLow",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 11
    }
  }, "Price: High to Low"), __jsx(Option, {
    value: "az",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, "A to Z"), __jsx(Option, {
    value: "za",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "Z to A"))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ShopContentHeader));

/***/ }),

/***/ "./src/components/shop/ShopLayout.js":
/*!*******************************************!*\
  !*** ./src/components/shop/ShopLayout.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ShopContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ShopContent */ "./src/components/shop/ShopContent.js");
/* harmony import */ var _other_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../other/Container */ "./src/components/other/Container.js");
var _jsxFileName = "F:\\Elementronics\\src\\components\\shop\\ShopLayout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // import { Row, Col } from "antd";
// import ShopSidebar from "./ShopSidebar";

 // import ShopQuickView from "./ShopQuickView";



function ShopLayout({
  // shopSidebarResponsive,
  // shopContentResponsive,
  productResponsive,
  fiveColumn,
  data,
  productPerPage,
  productStyle,
  containerType
}) {
  return __jsx("div", {
    className: "shop-layout",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_other_Container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    type: containerType,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(_ShopContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    productStyle: productStyle,
    productPerPage: productPerPage,
    fiveColumn: fiveColumn,
    productResponsive: productResponsive,
    data: data,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ShopLayout));

/***/ }),

/***/ "./src/components/shop/ShopQuickView.js":
/*!**********************************************!*\
  !*** ./src/components/shop/ShopQuickView.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _productDetail_productDetailContent_ProductDetailContentOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../productDetail/productDetailContent/ProductDetailContentOne */ "./src/components/productDetail/productDetailContent/ProductDetailContentOne.js");
var _jsxFileName = "F:\\Elementronics\\src\\components\\shop\\ShopQuickView.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }






function ShopQuickView({
  data,
  setModalVisible
}) {
  const slider1Settings = {
    arrows: false
  };
  const slider2Settings = {
    arrows: false,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0px",
    focusOnSelect: true,
    responsive: [{
      breakpoint: 992,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 3
      }
    }]
  };
  const {
    0: nav1,
    1: setNav1
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: nav2,
    1: setNav2
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();

  const onAddedToCart = () => {
    setModalVisible(false);
  };

  return __jsx("div", {
    className: "shop-qv",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Row"], {
    align: "middle",
    gutter: 50,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "gutter-row",
    span: 24,
    sm: 24,
    md: 10,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "shop-qv__slide",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "shop-qv__slide-big",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    asNavFor: nav2,
    ref: c => setNav1(c)
  }, slider1Settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }), data && data.images.map((img, index) => __jsx("div", {
    key: index,
    className: "slider-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: img,
    alt: "Product image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 23
    }
  }))))), __jsx("div", {
    className: "shop-qv__slide-small",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    asNavFor: nav1,
    ref: c => setNav2(c)
  }, slider2Settings, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 15
    }
  }), data && data.images.map((img, index) => __jsx("div", {
    key: index,
    className: "slider-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }, __jsx("img", {
    src: img,
    alt: "Product image",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 23
    }
  }))))))), __jsx(antd__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    className: "gutter-row",
    span: 24,
    sm: 24,
    md: 14,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx(_productDetail_productDetailContent_ProductDetailContentOne__WEBPACK_IMPORTED_MODULE_3__["default"], {
    data: data,
    hideGuaranteed: true,
    onAddedToCart: onAddedToCart,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(ShopQuickView));

/***/ }),

/***/ "./src/components/shop/TrandingProducts.js":
/*!*************************************************!*\
  !*** ./src/components/shop/TrandingProducts.js ***!
  \*************************************************/
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
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _product_Product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../product/Product */ "./src/components/product/Product.js");
/* harmony import */ var _common_shopUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/shopUtils */ "./src/common/shopUtils.js");
var _jsxFileName = "F:\\Elementronics\\src\\components\\shop\\TrandingProducts.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const productsContainer = {
  marginBottom: "35px",
  borderBottom: "2px solid #ddd",
  paddingBottom: "20px"
};
const arrowStyle = {
  display: "flex",
  alignItems: "center"
};
const arrowSpan = {
  color: "#0a0a2150",
  cursor: "pointer",
  padding: "5px"
};
const arrow = {
  fontSize: "35px"
};

function SampleNextArrow({
  onClick
}) {
  return __jsx("div", {
    style: arrowStyle,
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("span", {
    style: arrowSpan,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_5__["RiArrowRightCircleLine"], {
    style: arrow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })));
}

function SamplePrevArrow({
  onClick
}) {
  return __jsx("div", {
    style: arrowStyle,
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("span", {
    style: arrowSpan,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, __jsx(react_icons_ri__WEBPACK_IMPORTED_MODULE_5__["RiArrowLeftCircleLine"], {
    style: arrow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  })));
}

function TrandingPoducts({
  productResponsive,
  fiveColumn,
  data,
  productPerPage,
  productStyle
}) {
  const shopState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.shopReducer);
  const globalState = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.globalReducer);
  const {
    0: currentData,
    1: setCurrentData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  const {
    0: page,
    1: setPage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: offset,
    1: setOffset
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let filteredProduct = Object(_common_shopUtils__WEBPACK_IMPORTED_MODULE_7__["getProductsByFilter"])([...data], shopState.sort, shopState.subCategory);
    setCurrentData(filteredProduct);
    setOffset(0);
  }, [shopState, data]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setPage(1);
  }, [globalState]);

  const itemRender = (current, type, originalElement) => {
    if (type === "prev") {
      return __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 9
        }
      }, __jsx("i", {
        className: "fal fa-angle-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }
      }));
    }

    if (type === "next") {
      return __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 9
        }
      }, __jsx("i", {
        className: "fal fa-angle-right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 11
        }
      }));
    }

    return originalElement;
  };

  const onChangeOffset = (page, pageSize) => {
    let offset = (page - 1) * pageSize;
    setPage(page);
    setOffset(offset);
  };

  const settings = {
    nextArrow: __jsx(SampleNextArrow, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 16
      }
    }),
    prevArrow: __jsx(SamplePrevArrow, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 16
      }
    }),
    rtl: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    // autoplay: true,
    // autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 920,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 576,
      settings: {
        slidesToShow: 1
      }
    }]
  };
  const {
    0: sortProducts,
    1: setSortProducts
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("");

  const productHandle = () => {
    const toggleProduct = sortProducts ? "" : "#long";
    setSortProducts(toggleProduct);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "shop-content__header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "shop-content__header-showing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 9
    }
  }, __jsx("h4", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 11
    }
  }, "Tranding Products")), __jsx("div", {
    className: "shop-content__header-filter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: productHandle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, "View All"))), !sortProducts ? __jsx("div", {
    className: "shop-content__product",
    style: productsContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 8
    }
  }, !currentData ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    description: "No products in this category",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, currentData.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "shop-related-products",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 15
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_3___default.a, _extends({}, settings, {
    style: {
      display: "flex"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 17
    }
  }), currentData.slice(0, 8).map((product, index) => __jsx("div", _extends({
    className: "slider-item",
    key: index
  }, productResponsive, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 21
    }
  }), __jsx(_product_Product__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: product,
    productStyle: productStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 23
    }
  })))))) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 13
    }
  }))) : __jsx("div", {
    className: "shop-content__product",
    style: productsContainer,
    id: "long",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 7
    }
  }, !currentData ? __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    description: "No products in this category",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, currentData.length > 0 ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    gutter: [{
      xs: 5,
      sm: 5,
      xl: 15,
      xxl: 30
    }, 30],
    style: {
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "space-evenly"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 15
    }
  }, currentData.slice(offset, offset + productPerPage).map((product, index) => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Col"], _extends({
    key: index,
    className: "five-col"
  }, productResponsive, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 21
    }
  }), __jsx(_product_Product__WEBPACK_IMPORTED_MODULE_6__["default"], {
    data: product,
    productStyle: productStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 23
    }
  })))), currentData.length >= productPerPage && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Pagination"], {
    classNames: "shop-content__product-pagination",
    defaultCurrent: 1,
    current: page,
    total: currentData.length,
    pageSize: productPerPage,
    itemRender: itemRender,
    onChange: (page, pageSize) => onChangeOffset(page, pageSize),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  })) : __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Empty"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 13
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (TrandingPoducts);

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

/***/ "./src/data/slider.json":
/*!******************************!*\
  !*** ./src/data/slider.json ***!
  \******************************/
/*! exports provided: 0, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"images\":[\"/assets/images/banners/banner1.png\",\"/assets/images/banners/banner2.png\"]}]");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_layouts_LayoutOne__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layouts/LayoutOne */ "./src/components/layouts/LayoutOne.js");
/* harmony import */ var _components_shop_ShopLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/shop/ShopLayout */ "./src/components/shop/ShopLayout.js");
/* harmony import */ var _data_product_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/product.json */ "./src/data/product.json");
var _data_product_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/product.json */ "./src/data/product.json", 1);
/* harmony import */ var _common_useProductData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/useProductData */ "./src/common/useProductData.js");
/* harmony import */ var _components_shop_Banners__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/shop/Banners */ "./src/components/shop/Banners.js");
var _jsxFileName = "F:\\Elementronics\\src\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







function Home() {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const globalState = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.globalReducer);
  const data = Object(_common_useProductData__WEBPACK_IMPORTED_MODULE_6__["default"])(_data_product_json__WEBPACK_IMPORTED_MODULE_5__, globalState.category, router.query.q);
  return __jsx(_components_layouts_LayoutOne__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Home",
    headerStyle: "two",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(_components_shop_Banners__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), __jsx(_components_shop_ShopLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    shopContentResponsive: {
      xs: 24,
      lg: 20
    },
    productResponsive: {
      xs: 12,
      sm: 8,
      md: 6,
      xxl: 5
    },
    productPerPage: 10,
    data: [...data],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }));
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

/***/ "./src/redux/actions/wishlistActions.js":
/*!**********************************************!*\
  !*** ./src/redux/actions/wishlistActions.js ***!
  \**********************************************/
/*! exports provided: addToWishlist, removeFromWishlist */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addToWishlist", function() { return addToWishlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFromWishlist", function() { return removeFromWishlist; });
/* harmony import */ var _defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defines */ "./src/redux/defines.js");

const addToWishlist = product => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].ADD_TO_WISHLIST,
  product
});
const removeFromWishlist = productId => ({
  type: _defines__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].REMOVE_FROM_WISHLIST,
  productId
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

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

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

/***/ "react-material-ui-carousel":
/*!*********************************************!*\
  !*** external "react-material-ui-carousel" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-material-ui-carousel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9zZWFyY2gtcGFyYW1zLXRvLXVybC1xdWVyeS50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9XaXRoSGVhZGVyU2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGVmaW5lcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3Nob3BVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3VzZURlYm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi91c2VQcm9kdWN0RGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcnQvQ2FydFNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FydC9DYXJ0U2lkZWJhckl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29udHJvbHMvUXVhbnRpdHlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9lbGVtZW50cy9Gb290ZXJTdWJjcmliZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9Cb3R0b21OYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2VsZW1lbnRzL0NhdGVnb3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9NZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9NZW51U2lkZWJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvZWxlbWVudHMvU2VhcmNoQmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9lbGVtZW50cy9Ub3BOYXYuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0cy9MYXlvdXRPbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvb3RoZXIvQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Byb2R1Y3QvUHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9wcm9kdWN0RGV0YWlsL3Byb2R1Y3REZXRhaWxDb250ZW50L1Byb2R1Y3REZXRhaWxDb250ZW50T25lLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Nob3AvQmFubmVycy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaG9wL0xhdGVzdFByb2R1Y3RzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Nob3AvU2hvcENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hvcC9TaG9wQ29udGVudEhlYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zaG9wL1Nob3BMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2hvcC9TaG9wUXVpY2tWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Nob3AvVHJhbmRpbmdQcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdWJwYWdlcy9TdWJwYWdlc1NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2NhcnRBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9hY3Rpb25zL2dsb2JhbEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvc2hvcEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L2FjdGlvbnMvd2lzaGxpc3RBY3Rpb25zLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9kZWZpbmVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhbnQtZGVzaWduL2ljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWVyeXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9yaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbWFpbGNoaW1wLXN1YnNjcmliZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LW1hdGVyaWFsLXVpLWNhcm91c2VsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIl0sIm5hbWVzIjpbImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImUiLCJub2RlTmFtZSIsInRhcmdldCIsImlzTG9jYWwiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInByb3BzIiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRIcmVmIiwiY2hpbGRFbG0iLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJwcm9jZXNzIiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJ2YWx1ZSIsInBhdGgiLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50IiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsInVybCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwidXBkYXRlIiwibW9kIiwiZGF0YSIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsIm9wdGlvbnMiLCJwcmVwYXJlVXJsQXMiLCJTVCIsInBlcmZvcm1hbmNlIiwiY2xlYW5lZEFzIiwiZGVsQmFzZVBhdGgiLCJwYXJzZWQiLCJ0cnlQYXJzZVJlbGF0aXZlVXJsIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInBhZ2UiLCJlcnJvciIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaG9zdG5hbWUiLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsIm9wdGlvbmFsIiwicmVwZWF0Iiwia2V5Iiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwic2VnbWVudCIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwiU3RyaW5nIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsImlzTmFOIiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4Iiwic2VhcmNoUGFyYW1zIiwiQXJyYXkiLCJ1c2VkIiwicmVzdWx0IiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiV2l0aEhlYWRlclNjcm9sbCIsIldyYXBwZWRDb21wb25lbnQiLCJoZWFkZXJSZWYiLCJ1c2VSZWYiLCJzZXRTY3JvbGwiLCJ1c2VTdGF0ZSIsImlzSGVhZGVyRml4ZWQiLCJzZXRJc0hlYWRlckZpeGVkIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVNjcm9sbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjdXJyZW50Iiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsWSIsIlNIT1AiLCJjYXRlZ29yeSIsImljb25DbGFzcyIsImdldFByb2R1Y3RzQnlDYXRlZ29yeSIsImFyciIsImZpbHRlciIsIml0ZW0iLCJ0b0xvd2VyQ2FzZSIsImdldFByb2R1Y3RzQnlTbHVnIiwic2x1ZyIsImZpbmQiLCJnZXRBbGxWYWx1ZXNPZktleSIsInN1YkNhdGVnb3J5IiwibGVuZ3RoIiwiaW5jbHVkZXMiLCJnZXRBbGxTdWJDYXRlZ29yaWVzIiwicHJvZHVjdHMiLCJnZXRQcm9kdWN0cyIsInN1YkNhdGVnb3JpZXNBcnIiLCJnZXRQcm9kdWN0c0J5U29ydCIsInR5cGUiLCJzb3J0V2l0aENvbmRpdGlvbiIsInJldmVyc2UiLCJudW0iLCJzb3J0IiwiYSIsImIiLCJnZXRQcm9kdWN0c0J5RmlsdGVyIiwic29ydFR5cGUiLCJmaWx0ZXJlZFByb2R1Y3QiLCJwcm9kdWN0IiwiZ2V0UHJvZHVjdHNCeVNlYXJjaCIsImtleXdvcmQiLCJnZXRUb3RhbFByb2R1Y3RJbkNhcnQiLCJyZWR1Y2UiLCJ0b3RhbCIsImNhcnRRdWFudGl0eSIsImNhbGN1bGF0ZVRvdGFsUHJpY2UiLCJmb3JFYWNoIiwiZGlzY291bnQiLCJwcmljZSIsImNoZWNrUHJvZHVjdEluQ2FydCIsImNhcnRBcnIiLCJwaWQiLCJpZCIsImNoZWNrQXZhaWFibGVRdWFudGl0eVRvQWRkIiwicHJvZHVjdHNJbkNhcnQiLCJ0b3RhbFByb2R1Y3RRdWFudGl0eUluQ2FydCIsImF2YWlhYmxlIiwicXVhbnRpdHkiLCJjaGVja1Byb2R1Y3RJbldpc2hsaXN0Iiwid2lzaGxpc3RBcnIiLCJ1c2VEZWJvdW5jZSIsImRlbGF5IiwiZGVib3VuY2VkVmFsdWUiLCJzZXREZWJvdW5jZWRWYWx1ZSIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJ1c2VQcm9kdWN0RGF0YSIsInByb2R1Y3REYXRhIiwic2V0RGF0YSIsImZvcm1hdEN1cnJlbmN5IiwibG9jYWxlcyIsImN1cnJlbmN5IiwiSW50bCIsIk51bWJlckZvcm1hdCIsInN0eWxlIiwiZm9ybWF0IiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwic3RyaW5nIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsIkNhcnRTaWRlYmFyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsImNhcnRTdGF0ZSIsInVzZVNlbGVjdG9yIiwic3RhdGUiLCJjYXJ0UmVkdWNlciIsImdsb2JhbFN0YXRlIiwiZ2xvYmFsUmVkdWNlciIsIm1hcCIsImluZGV4IiwibWVtbyIsIkNhcnRTaWRlYmFySXRlbSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwic2V0UXVhbnRpdHkiLCJvblJlbW92ZVByb2R1Y3RGcm9tQ2FydCIsInByZXZlbnREZWZhdWx0Iiwic2hvd01vZGFsIiwiaGFuZGxlT2siLCJyZW1vdmVGcm9tQ2FydCIsImNhcnRJZCIsImhhbmRsZUNhbmNlbCIsInRodW1iSW1hZ2UiLCJkZWNyZWFzZVF1YW50aXR5Q2FydCIsImluY3JlYXNlUXVhbnRpdHlDYXJ0IiwiUXVhbnRpdHlTZWxlY3RvciIsIm1pbiIsIm1heCIsImRlZmF1bHRWYWx1ZSIsIm9uQ2hhbmdlIiwic2l6ZSIsIm5vUm91bmQiLCJjbGFzc05hbWUiLCJvbkRlY3JlYXNlIiwib25JbmNyZWFzZSIsInNldFZhbHVlIiwiZGVjcmVhc2VWYWx1ZSIsInVzZUNhbGxiYWNrIiwiaW5jcmVhc2VWYWx1ZSIsImNsYXNzTmFtZXMiLCJGb290ZXIiLCJjb250YWluZXJUeXBlIiwibGlua3MiLCJpbmZvcm1hdGlvbiIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIkN1c3RvbUZvcm0iLCJzdGF0dXMiLCJvblZhbGlkYXRlZCIsIm9uRmluaXNoIiwibG9nIiwiRU1BSUwiLCJlbWFpbCIsIm9uRmluaXNoRmFpbGVkIiwiZXJyb3JJbmZvIiwicmVtZW1iZXIiLCJyZXF1aXJlZCIsImNvbG9yIiwiX19odG1sIiwiRm9vdGVyU3ViY3JpYmUiLCJzdWJzY3JpYmUiLCJmb3JtRGF0YSIsIkhlYWRlciIsImhlYWRlclN0eWxlIiwicmVuZGVyU3R5bGVDbGFzcyIsIkJvdHRvbU5hdiIsIkNhdGVnb3J5IiwiT3B0aW9uIiwiU2VsZWN0Iiwic2hvcFN0YXRlIiwic2hvcFJlZHVjZXIiLCJvbkNob29zZVN1YkNhdGVnb3J5Iiwic2V0U3ViQ2F0ZWdvcnkiLCJoYW5kbGVDaGFuZ2UiLCJNZW51IiwiY2FydFNpZGViYXJPcGVuIiwic2V0Q2FydFNpZGViYXJPcGVuIiwibWVudVNpZGViYXJPcGVuIiwic2V0TWVudVNpZGViYXJPcGVuIiwicHJvZHVjdHNEYXRhIiwiTWVudVNpZGViYXIiLCJTdWJNZW51Iiwib25TZWxlY3RMYW5ndWFnZSIsInNldEdsb2JhbExhbmd1YWdlIiwib25TZWxlY3RDdXJyZW5jeSIsInNldEdsb2JhbEN1cnJlbmN5IiwibGFuZ3VhZ2UiLCJ3aWR0aCIsIlNlYXJjaEJhck1vYmlsZSIsImZpbGxEYXRhIiwicGxhY2Vob2xkZXIiLCJ1c2VSb3V0ZXIiLCJzZXRTZWFyY2giLCJzaG93RHJvcGRvd25PcHRpb25zIiwic2V0U2hvd0Ryb3Bkb3duT3B0aW9ucyIsImRlYm91bmRWYWx1ZSIsInNldEdsb2JhbFNlYXJjaCIsInJlbmRlckF1dG9GaWxsSXRlbSIsIm9uU2VsZWN0Q2F0ZW9yeSIsInNldEdsb2JhbENhdGVnb3J5Iiwib3BlbkRyb3Bkb3duT3B0aW9uIiwiY2xvc2VEcm9wZG93bk9wdGlvbiIsIm9uU2VsZWN0T3B0aW9uIiwib3B0aW9uIiwib25TZWFyY2giLCJxIiwiaW5wdXRWYWx1ZSIsImluZGV4T2YiLCJUb3BOYXYiLCJTY3JvbGxIZWFkZXIiLCJMYXlvdXRPbmUiLCJ0aXRsZSIsImNsZWFyU3BhY2VUb3AiLCJjb25maWciLCJtYXhDb3VudCIsImR1cmF0aW9uIiwiQ29udGFpbmVyIiwicmVuZGVyQ29udGFpbmVyVHlwZSIsIlByb2R1Y3QiLCJwcm9kdWN0U3R5bGUiLCJpbWFnZUxvYWRpbmciLCJzZXRJbWFnZUxvYWRpbmciLCJ3aXNobGlzdFN0YXRlIiwid2lzaGxpc3RSZWR1Y2VyIiwicHJvZHVjdEluV2lzaGxpc3QiLCJhdmFpYWJsZVF1YW50aXR5IiwicmVuZGVyUHJvZHVjdFR5cGUiLCJpc05ldyIsIm9uQWRkVG9DYXJ0IiwiYWRkVG9DYXJ0Iiwib25BZGRUb1dpc2hsaXN0IiwicmVtb3ZlRnJvbVdpc2hsaXN0IiwiYWRkVG9XaXNobGlzdCIsImF2YWlhbGVTdHlsZXMiLCJoYW5kbGVJbWFnZUxvYWRlZCIsImxvYWRpbmciLCJhY3RpdmUiLCJyYXRlIiwiUHJvZHVjdERldGFpbENvbnRlbnRPbmUiLCJvbkFkZGVkVG9DYXJ0IiwiaGlkZUd1YXJhbnRlZWQiLCJxdWFudGl0eUNvbnRyb2xsZXJOb1JvdW5kIiwic2hvd0NvdW50ZG93biIsImN1cnJlbnRDb2xvciIsInNldEN1cnJlbnRDb2xvciIsImN1cnJlbnRTaXplIiwic2V0Q3VycmVudFNpemUiLCJvbkFkZFByb2R1Y3RUb0NhcnQiLCJ2YWwiLCJkaXNhYmxlZCIsInVzZVN0eWxlIiwibWFrZVN0eWxlcyIsImNvbnRhaW5lciIsIm1hcmdpbkJvdHRvbSIsImltYWdlIiwiaGVpZ2h0IiwiQmFubmVycyIsImNsYXNzZXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJiYW5uZXJEYXRhIiwiaW1hZ2VzIiwicHJvZHVjdHNDb250YWluZXIiLCJib3JkZXJCb3R0b20iLCJwYWRkaW5nQm90dG9tIiwiYXJyb3dTdHlsZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiYXJyb3dTcGFuIiwiY3Vyc29yIiwicGFkZGluZyIsImFycm93IiwiZm9udFNpemUiLCJTYW1wbGVOZXh0QXJyb3ciLCJTYW1wbGVQcmV2QXJyb3ciLCJMYXRlc3RQcm9kdWN0cyIsInByb2R1Y3RSZXNwb25zaXZlIiwiZml2ZUNvbHVtbiIsInByb2R1Y3RQZXJQYWdlIiwiY3VycmVudERhdGEiLCJzZXRDdXJyZW50RGF0YSIsInNldFBhZ2UiLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJpdGVtUmVuZGVyIiwib3JpZ2luYWxFbGVtZW50Iiwib25DaGFuZ2VPZmZzZXQiLCJwYWdlU2l6ZSIsInNldHRpbmdzIiwibmV4dEFycm93IiwicHJldkFycm93IiwicnRsIiwiYXJyb3dzIiwiaW5maW5pdGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic29ydFByb2R1Y3RzIiwic2V0U29ydFByb2R1Y3RzIiwicHJvZHVjdEhhbmRsZSIsInRvZ2dsZVByb2R1Y3QiLCJ4cyIsInNtIiwieGwiLCJ4eGwiLCJmbGV4RmxvdyIsImp1c3RpZnlDb250ZW50IiwiU2hvcENvbnRlbnQiLCJTaG9wQ29udGVudEhlYWRlciIsInNldFNvcnQiLCJTaG9wTGF5b3V0IiwiU2hvcFF1aWNrVmlldyIsInNldE1vZGFsVmlzaWJsZSIsInNsaWRlcjFTZXR0aW5ncyIsInNsaWRlcjJTZXR0aW5ncyIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwiZm9jdXNPblNlbGVjdCIsIm5hdjEiLCJzZXROYXYxIiwibmF2MiIsInNldE5hdjIiLCJjIiwiaW1nIiwiVHJhbmRpbmdQb2R1Y3RzIiwiU3VicGFnZXNTaWRlYmFyIiwiSG9tZSIsImxnIiwibWQiLCJDQVJUIiwiQUREX1RPX0NBUlQiLCJSRU1PVkVfRlJPTV9DQVJUIiwicmVtb3ZlQWxsRnJvbUNhcnQiLCJSRU1PVkVfQUxMX0ZST01fQ0FSVCIsIkRFQ1JFQVNFX1FVQU5USVRZX0NBUlQiLCJJTkNSRUFTRV9RVUFOVElUWV9DQVJUIiwibGFuZyIsIkdMT0JBTCIsIlNFVF9MQU5HVUFHRSIsImN1ciIsIlNFVF9DVVJSRU5DWSIsIlNFVF9DQVRFR09SWSIsIlNFVF9TRUFSQ0giLCJTRVRfU09SVCIsIlNFVF9TVUJDQVRFR09SWSIsIldJU0hMSVNUIiwiQUREX1RPX1dJU0hMSVNUIiwicHJvZHVjdElkIiwiUkVNT1ZFX0ZST01fV0lTSExJU1QiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3hGQSx3RTs7Ozs7Ozs7Ozs7QUNBQSwrRDs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdDOzs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQywwRUFBbUI7O0FBRXpDO0FBQ0E7QUFDQTs7QUFF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RCxDQUFoQixDQUEzQixDOzs7Ozs7Ozs7Ozs7QUNQUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sTUFBTVYsTUFBTSxHQUFHO0FBQ3BCQyxjQUFZLEVBQUUsY0FETTtBQUVwQkUsY0FBWSxFQUFFLGNBRk07QUFHcEJDLGNBQVksRUFBRSxjQUhNO0FBSXBCQyxZQUFVLEVBQUU7QUFKUSxDQUFmO0FBT0EsTUFBTWIsSUFBSSxHQUFHO0FBQ2xCQyxhQUFXLEVBQUUsYUFESztBQUVsQkMsa0JBQWdCLEVBQUUsa0JBRkE7QUFHbEJFLHNCQUFvQixFQUFFLHNCQUhKO0FBSWxCQyx3QkFBc0IsRUFBRSx3QkFKTjtBQUtsQkMsd0JBQXNCLEVBQUU7QUFMTixDQUFiO0FBUUEsTUFBTVUsUUFBUSxHQUFHO0FBQ3RCQyxpQkFBZSxFQUFFLGlCQURLO0FBRXRCRSxzQkFBb0IsRUFBRTtBQUZBLENBQWpCO0FBS0EsTUFBTXBVLElBQUksR0FBRztBQUNsQitULFVBQVEsRUFBRSxVQURRO0FBRWxCQyxpQkFBZSxFQUFFO0FBRkMsQ0FBYixDOzs7Ozs7Ozs7OztBQ3BCUCw4Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx1RDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zLCBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBleGVjT25jZSwgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoLCByZXNvbHZlSHJlZiB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyBmcm9tIHRoZSBzYW1lIG9yaWdpbiBhcyB0aGUgY3VycmVudCBwYWdlIChicm93c2VyIG9ubHkpLlxuICovXG5mdW5jdGlvbiBpc0xvY2FsKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW5cbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG59XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW5cbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICBpZiAoXG4gICAgbm9kZU5hbWUgPT09ICdBJyAmJlxuICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgIGUubWV0YUtleSB8fFxuICAgICAgZS5jdHJsS2V5IHx8XG4gICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGlmIGl0J3Mgb3V0c2lkZSBvdXIgc2NvcGUgKGUuZy4gaHR0cHM6Ly9nb29nbGUuY29tKVxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdyB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hcyA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcykgOiByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChwICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIGNoaWxkRWxtICYmIGNoaWxkRWxtLnRhZ05hbWUpIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoYXMpXG4gIH1cblxuICAvLyBBZGQgdGhlIGVuZGluZyBzbGFzaCB0byB0aGUgcGF0aHMuIFNvLCB3ZSBjYW4gc2VydmUgdGhlXG4gIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICBpZiAoXG4gICAgICBjaGlsZFByb3BzLmhyZWYgJiZcbiAgICAgIHR5cGVvZiBfX05FWFRfREFUQV9fICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgKSB7XG4gICAgICBjaGlsZFByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChjaGlsZFByb3BzLmhyZWYpXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvc2VhcmNoLXBhcmFtcy10by11cmwtcXVlcnknXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQge1xuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGJhc2VQYXRoXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goYmFzZVBhdGgpXG4gICAgICA6IGJhc2VQYXRoICsgcGF0aFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKGN1cnJlbnRQYXRoOiBzdHJpbmcsIGhyZWY6IFVybCk6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgcmV0dXJuIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICA6IGZpbmFsVXJsLmhyZWZcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmZ1bmN0aW9uIHRyeVBhcnNlUmVsYXRpdmVVcmwoXG4gIHVybDogc3RyaW5nXG4pOiBudWxsIHwgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4ge1xuICB0cnkge1xuICAgIHJldHVybiBwYXJzZVJlbGF0aXZlVXJsKHVybClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxufVxuXG50eXBlIENvbXBvbmVudFJlcyA9IHsgcGFnZTogQ29tcG9uZW50VHlwZTsgbW9kOiBhbnkgfVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxudHlwZSBSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IGFueVxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBSb3V0ZUluZm8sIEFwcD86IENvbXBvbmVudFR5cGUpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBhbnkpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICA7KGVyciBhcyBhbnkpLmNvZGUgPSAnUEFHRV9MT0FEX0VSUk9SJ1xuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IENvbXBvbmVudFR5cGVcbiAgICAgIHdyYXBBcHA6IChBcHA6IENvbXBvbmVudFR5cGUpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQGRlcHJlY2F0ZWQgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgZXZlbiB0aG91Z2ggaXQncyBhIHByaXZhdGUgbWV0aG9kLlxuICBzdGF0aWMgX3Jld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIHJldHVybiByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmwpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB1cmxcbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBpZiAoIWUuc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIF9fTiB9ID0gZS5zdGF0ZVxuICAgIGlmICghX19OKSB7XG4gICAgICAvLyB0aGlzIGhpc3Rvcnkgc3RhdGUgd2Fzbid0IGNyZWF0ZWQgYnkgbmV4dC5qcyBzbyBpdCBjYW4gYmUgaWdub3JlZFxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBhbnlcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkgZm9yIHRoZSBTU1IgcGFnZS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgYXMgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChhcylcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxCYXNlUGF0aChhcylcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIW9wdGlvbnMuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIGNvbnN0IHBhcnNlZCA9IHRyeVBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgaWYgKCFwYXJzZWQpIHJldHVybiBmYWxzZVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gcGFyc2VkXG4gICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcylcblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwoY2xlYW5lZEFzKVxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbmNvbXBhdGlibGUtaHJlZi1hc2BcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8ob3B0aW9ucy5fTl9YLCBvcHRpb25zLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciwgZXJyb3I6IGVyciB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgIGVycixcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgfSBhcyBhbnkpXG4gICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgICAgIChyZXMpID0+XG4gICAgICAgICAgICAgICh7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgICAgICB9IGFzIFJvdXRlSW5mbylcbiAgICAgICAgICApXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBwYXJzZWQgPSB0cnlQYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGlmICghcGFyc2VkKSByZXR1cm5cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBhc1BhdGgpLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGVuY29kZSBhcyBlbmNvZGVRdWVyeXN0cmluZyB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIC8vIHF1ZXJ5ID0gJycgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5KTtcbiAgICBxdWVyeSA9IGVuY29kZVF1ZXJ5c3RyaW5nKHF1ZXJ5KVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoJ2h0dHA6Ly9uJylcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IGFueVxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGludGVyZmFjZS1uYW1lXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBmaWxlczogc3RyaW5nW11cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXaXRoSGVhZGVyU2Nyb2xsKFdyYXBwZWRDb21wb25lbnQpIHtcclxuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICBjb25zdCBoZWFkZXJSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgICBjb25zdCBbc2Nyb2xsLCBzZXRTY3JvbGxdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbaXNIZWFkZXJGaXhlZCwgc2V0SXNIZWFkZXJGaXhlZF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgICAgfTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBpZiAoc2Nyb2xsID49IGhlYWRlclJlZi5jdXJyZW50Lm9mZnNldEhlaWdodCkge1xyXG4gICAgICAgIHNldElzSGVhZGVyRml4ZWQodHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0SXNIZWFkZXJGaXhlZChmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgIH0sIFtzY3JvbGxdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKSB7XHJcbiAgICAgIHNldFNjcm9sbCh3aW5kb3cuc2Nyb2xsWSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdlxyXG4gICAgICAgIHJlZj17aGVhZGVyUmVmfVxyXG4gICAgICAgIGNsYXNzTmFtZT17YGhlYWRlci1zY3JvbGwtd3JhcHBlciAke2lzSGVhZGVyRml4ZWQgPyBcImZpeGVkXCIgOiBcIlwifWB9XHJcbiAgICAgID5cclxuICAgICAgICA8V3JhcHBlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9O1xyXG59XHJcbiIsImV4cG9ydCBjb25zdCBTSE9QID0ge1xyXG4gIGNhdGVnb3J5OiBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IFwiY2xvdGhpbmdcIixcclxuICAgICAgc3ViOiBbXHJcbiAgICAgICAgeyBuYW1lOiBcImFjY2Vzc29yaWVzXCIsIGljb25DbGFzczogXCJpY29uLWFjY2Vzc29yaWVzXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwicGFudHNcIiwgaWNvbkNsYXNzOiBcImljb24tcGFudFwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcInNob3J0c1wiLCBpY29uQ2xhc3M6IFwiaWNvbi1zaG9ydFwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImphY2tldFwiLCBpY29uQ2xhc3M6IFwiaWNvbi1qYWNrZXRcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJkcmVzc1wiLCBpY29uQ2xhc3M6IFwiaWNvbi1kcmVzc1wiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcInN1aXRzXCIsIGljb25DbGFzczogXCJpY29uLXN1aXRcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJzaGlydFwiLCBpY29uQ2xhc3M6IFwiaWNvbi1zaGlydFwiIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImZydWl0c1wiLFxyXG4gICAgICBzdWI6IFtcclxuICAgICAgICB7IG5hbWU6IFwidmVnYXRhYmxlc1wiLCBpY29uQ2xhc3M6IFwiaWNvbi12ZWdldGFibGVcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJmcnVpdHNcIiwgaWNvbkNsYXNzOiBcImljb24tZnJ1aXRcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJudXRcIiwgaWNvbkNsYXNzOiBcImljb24tbnV0XCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwibXVzaHJvb21cIiwgaWNvbkNsYXNzOiBcImljb24tbXVzaHJvb21cIiB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJlbGVjdHJvbmljXCIsXHJcbiAgICAgIHN1YjogW1xyXG4gICAgICAgIHsgbmFtZTogXCJhaXIgY29uZGl0aW9uaW5nXCIsIGljb25DbGFzczogXCJpY29uLWFpci1jb25kaXRpb25pbmdcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJwaG9uZVwiLCBpY29uQ2xhc3M6IFwiaWNvbi1waG9uZVwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcInR2XCIsIGljb25DbGFzczogXCJpY29uLWRlc2t0b3BcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJzcGVha2VyXCIsIGljb25DbGFzczogXCJpY29uLXNwZWFrZXJcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJmcmlkZ2VcIiwgaWNvbkNsYXNzOiBcImljb24tZnJpZGdlXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwiZmFuXCIsIGljb25DbGFzczogXCJpY29uLWZhblwiIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBcImZ1cm5pdHVyZVwiLFxyXG4gICAgICBzdWI6IFtcclxuICAgICAgICB7IG5hbWU6IFwidGFibGVcIiwgaWNvbkNsYXNzOiBcImljb24tdGFibGVcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJjaGFpclwiLCBpY29uQ2xhc3M6IFwiaWNvbi1jaGFpclwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImNhYmluZXRcIiwgaWNvbkNsYXNzOiBcImljb24tY2FiaW5ldFwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImxhbXBcIiwgaWNvbkNsYXNzOiBcImljb24tbGFtcFwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcImJlZFwiLCBpY29uQ2xhc3M6IFwiaWNvbi1iZWRcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogXCJjb21lc3RpY1wiLFxyXG4gICAgICBzdWI6IFtcclxuICAgICAgICB7IG5hbWU6IFwibGlwc3RpY2tcIiwgaWNvbkNsYXNzOiBcImljb24tbGlwc3RpY2tcIiB9LFxyXG4gICAgICAgIHsgbmFtZTogXCJwb3dkZXJcIiwgaWNvbkNsYXNzOiBcImljb24tcG93ZGVyXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwicGVyZnVtZVwiLCBpY29uQ2xhc3M6IFwiaWNvbi1wZXJmdXJtXCIgfSxcclxuICAgICAgICB7IG5hbWU6IFwibmFpbCBwb2xpc2hcIiwgaWNvbkNsYXNzOiBcImljb24tbmFpbFwiIH0sXHJcbiAgICAgICAgeyBuYW1lOiBcIm1hc2NhcmFcIiwgaWNvbkNsYXNzOiBcImljb24tbWFzY2FyYVwiIH0sXHJcbiAgICAgIF0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcbiIsIi8vUHJvZHVjdHNcclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzQnlDYXRlZ29yeSA9IChhcnIsIGNhdGVnb3J5KSA9PiB7XHJcbiAgcmV0dXJuIGNhdGVnb3J5XHJcbiAgICA/IGFyci5maWx0ZXIoXHJcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0uY2F0ZWdvcnkudG9Mb3dlckNhc2UoKSA9PT0gY2F0ZWdvcnkudG9Mb3dlckNhc2UoKVxyXG4gICAgICApXHJcbiAgICA6IGFycjtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQcm9kdWN0c0J5U2x1ZyA9IChhcnIsIHNsdWcpID0+IHtcclxuICByZXR1cm4gc2x1ZyAmJiB0eXBlb2Ygc2x1ZyA9PT0gXCJzdHJpbmdcIlxyXG4gICAgPyBhcnIuZmluZCgocCkgPT4gcC5zbHVnLnRvTG93ZXJDYXNlKCkgPT09IHNsdWcudG9Mb3dlckNhc2UoKSlcclxuICAgIDogYXJyO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbFZhbHVlc09mS2V5ID0gKGFyciwga2V5KSA9PiB7XHJcbiAgaWYgKGtleSAmJiB0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICBsZXQgc3ViQ2F0ZWdvcnkgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmICghc3ViQ2F0ZWdvcnkuaW5jbHVkZXMoYXJyW2ldW2tleV0pKSB7XHJcbiAgICAgICAgc3ViQ2F0ZWdvcnkucHVzaChhcnJbaV1ba2V5XSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzdWJDYXRlZ29yeS5sZW5ndGggPiAwID8gc3ViQ2F0ZWdvcnkgOiBudWxsO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0QWxsU3ViQ2F0ZWdvcmllcyA9IChhcnIsIGNhdGVnb3J5KSA9PiB7XHJcbiAgaWYgKGNhdGVnb3J5ICYmIHR5cGVvZiBjYXRlZ29yeSA9PT0gXCJzdHJpbmdcIikge1xyXG4gICAgbGV0IHByb2R1Y3RzID0gZ2V0UHJvZHVjdHMoYXJyLCBjYXRlZ29yeSk7XHJcbiAgICBsZXQgc3ViQ2F0ZWdvcmllc0FyciA9IGdldEFsbFZhbHVlc09mS2V5KHByb2R1Y3RzLCBcInN1YkNhdGVnb3J5XCIpO1xyXG4gICAgcmV0dXJuIHN1YkNhdGVnb3JpZXNBcnIgIT09IG51bGwgPyBzdWJDYXRlZ29yaWVzQXJyIDogbnVsbDtcclxuICB9IGVsc2Uge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzQnlTb3J0ID0gKHByb2R1Y3RzLCB0eXBlKSA9PiB7XHJcbiAgZnVuY3Rpb24gc29ydFdpdGhDb25kaXRpb24oYXJyLCB2YWx1ZSwgcmV2ZXJzZSA9IGZhbHNlKSB7XHJcbiAgICBsZXQgbnVtID0gcmV2ZXJzZSA/IC0xIDogMTtcclxuICAgIHJldHVybiBhcnIuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICBpZiAoYVt2YWx1ZV0gPCBiW3ZhbHVlXSkge1xyXG4gICAgICAgIHJldHVybiAtMSAqIG51bTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoYVt2YWx1ZV0gPiBiW3ZhbHVlXSkge1xyXG4gICAgICAgIHJldHVybiAxICogbnVtO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGlmICh0eXBlID09PSBcImF6XCIpIHtcclxuICAgIHJldHVybiBzb3J0V2l0aENvbmRpdGlvbihwcm9kdWN0cywgXCJuYW1lXCIpO1xyXG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJ6YVwiKSB7XHJcbiAgICByZXR1cm4gc29ydFdpdGhDb25kaXRpb24ocHJvZHVjdHMsIFwibmFtZVwiLCB0cnVlKTtcclxuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwibG93SGlnaFwiKSB7XHJcbiAgICByZXR1cm4gc29ydFdpdGhDb25kaXRpb24ocHJvZHVjdHMsIFwicHJpY2VcIik7XHJcbiAgfSBlbHNlIGlmICh0eXBlID09PSBcImhpZ2hMb3dcIikge1xyXG4gICAgcmV0dXJuIHNvcnRXaXRoQ29uZGl0aW9uKHByb2R1Y3RzLCBcInByaWNlXCIsIHRydWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXR1cm4gcHJvZHVjdHM7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFByb2R1Y3RzQnlGaWx0ZXIgPSAocHJvZHVjdHMsIHNvcnRUeXBlLCBzdWJDYXRlZ29yeSkgPT4ge1xyXG4gIGxldCBmaWx0ZXJlZFByb2R1Y3QgPSBzdWJDYXRlZ29yeVxyXG4gICAgPyBwcm9kdWN0cy5maWx0ZXIoXHJcbiAgICAgICAgKHByb2R1Y3QpID0+XHJcbiAgICAgICAgICBwcm9kdWN0LnN1YkNhdGVnb3J5LnRvTG93ZXJDYXNlKCkgPT09IHN1YkNhdGVnb3J5LnRvTG93ZXJDYXNlKClcclxuICAgICAgKVxyXG4gICAgOiBwcm9kdWN0cztcclxuICByZXR1cm4gZ2V0UHJvZHVjdHNCeVNvcnQoZmlsdGVyZWRQcm9kdWN0LCBzb3J0VHlwZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0UHJvZHVjdHNCeVNlYXJjaCA9IChwcm9kdWN0cywga2V5d29yZCkgPT4ge1xyXG4gIHJldHVybiBrZXl3b3JkICYmIGtleXdvcmQgIT09IFwiXCJcclxuICAgID8gcHJvZHVjdHMuZmlsdGVyKChwcm9kdWN0KSA9PlxyXG4gICAgICAgIHByb2R1Y3QubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGtleXdvcmQudG9Mb3dlckNhc2UoKSlcclxuICAgICAgKVxyXG4gICAgOiBwcm9kdWN0cztcclxufTtcclxuXHJcbi8vQ2FydFxyXG5leHBvcnQgY29uc3QgZ2V0VG90YWxQcm9kdWN0SW5DYXJ0ID0gKGFycikgPT4ge1xyXG4gIHJldHVybiBhcnIgPyBhcnIucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT4gdG90YWwgKyBpdGVtLmNhcnRRdWFudGl0eSwgMCkgOiAwO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVRvdGFsUHJpY2UgPSAoYXJyKSA9PiB7XHJcbiAgbGV0IHRvdGFsID0gMDtcclxuICBhcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaWYgKGl0ZW0uZGlzY291bnQpIHtcclxuICAgICAgdG90YWwgKz0gaXRlbS5jYXJ0UXVhbnRpdHlcclxuICAgICAgICA/IChpdGVtLnByaWNlIC0gaXRlbS5kaXNjb3VudCkgKiBpdGVtLmNhcnRRdWFudGl0eVxyXG4gICAgICAgIDogaXRlbS5wcmljZSAtIGl0ZW0uZGlzY291bnQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0b3RhbCArPSBpdGVtLmNhcnRRdWFudGl0eSA/IGl0ZW0ucHJpY2UgKiBpdGVtLmNhcnRRdWFudGl0eSA6IGl0ZW0ucHJpY2U7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgcmV0dXJuIHRvdGFsO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGNoZWNrUHJvZHVjdEluQ2FydCA9IChjYXJ0QXJyLCBwaWQpID0+IHtcclxuICByZXR1cm4gcGlkID8gY2FydEFyci5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09PSBwaWQpIDogbnVsbDtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja0F2YWlhYmxlUXVhbnRpdHlUb0FkZCA9IChhcnIsIHByb2R1Y3QpID0+IHtcclxuICBjb25zdCBwcm9kdWN0c0luQ2FydCA9IGFyci5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQpO1xyXG4gIGlmIChwcm9kdWN0c0luQ2FydCAmJiBwcm9kdWN0c0luQ2FydC5sZW5ndGggPiAwKSB7XHJcbiAgICBjb25zdCB0b3RhbFByb2R1Y3RRdWFudGl0eUluQ2FydCA9XHJcbiAgICAgIHByb2R1Y3RzSW5DYXJ0Lmxlbmd0aCA+IDAgJiZcclxuICAgICAgcHJvZHVjdHNJbkNhcnQucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT4gdG90YWwgKyBpdGVtLmNhcnRRdWFudGl0eSwgMCk7XHJcbiAgICBsZXQgYXZhaWFibGUgPSBwcm9kdWN0LnF1YW50aXR5IC0gdG90YWxQcm9kdWN0UXVhbnRpdHlJbkNhcnQ7XHJcbiAgICByZXR1cm4gYXZhaWFibGUgPCAxID8gMCA6IGF2YWlhYmxlO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwcm9kdWN0LnF1YW50aXR5O1xyXG4gIH1cclxufTtcclxuXHJcbi8vV2lzaGxpc3RcclxuXHJcbmV4cG9ydCBjb25zdCBjaGVja1Byb2R1Y3RJbldpc2hsaXN0ID0gKHdpc2hsaXN0QXJyLCBwaWQpID0+IHtcclxuICByZXR1cm4gcGlkID8gd2lzaGxpc3RBcnIuZmluZCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gcGlkKSA6IG51bGw7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VEZWJvdW5jZSh2YWx1ZSwgZGVsYXkpIHtcclxuICBjb25zdCBbZGVib3VuY2VkVmFsdWUsIHNldERlYm91bmNlZFZhbHVlXSA9IHVzZVN0YXRlKHZhbHVlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXREZWJvdW5jZWRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB9LCBkZWxheSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjbGVhclRpbWVvdXQoaGFuZGxlcik7XHJcbiAgICB9O1xyXG4gIH0sIFt2YWx1ZV0pO1xyXG4gIHJldHVybiBkZWJvdW5jZWRWYWx1ZTtcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBnZXRQcm9kdWN0c0J5Q2F0ZWdvcnksIGdldFByb2R1Y3RzQnlTZWFyY2ggfSBmcm9tIFwiLi9zaG9wVXRpbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVByb2R1Y3REYXRhKHByb2R1Y3REYXRhLCBjYXRlZ29yeSwgcXVlcnkpIHtcclxuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShwcm9kdWN0RGF0YSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gcXVlcnlcclxuICAgICAgPyBnZXRQcm9kdWN0c0J5U2VhcmNoKGdldFByb2R1Y3RzQnlDYXRlZ29yeShwcm9kdWN0RGF0YSwgY2F0ZWdvcnkpLCBxdWVyeSlcclxuICAgICAgOiBnZXRQcm9kdWN0c0J5Q2F0ZWdvcnkocHJvZHVjdERhdGEsIGNhdGVnb3J5KTtcclxuICAgIHNldERhdGEocHJvZHVjdCk7XHJcbiAgICBzZXREYXRhKHByb2R1Y3QpO1xyXG4gIH0sIFtjYXRlZ29yeSwgcXVlcnldKTtcclxuXHJcbiAgcmV0dXJuIGRhdGE7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGZvcm1hdEN1cnJlbmN5ID0gKHByaWNlLCBsb2NhbGVzID0gXCJ1cy1VU1wiLCBjdXJyZW5jeSA9IFwiVVNEXCIpID0+IHtcclxuICByZXR1cm4gbmV3IEludGwuTnVtYmVyRm9ybWF0KGxvY2FsZXMsIHtcclxuICAgIHN0eWxlOiBcImN1cnJlbmN5XCIsXHJcbiAgICBjdXJyZW5jeTogY3VycmVuY3ksXHJcbiAgfSkuZm9ybWF0KHByaWNlKTtcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCB0cmFuc2xhdGVTdHJpbmcgPSAoc3RyaW5nLCBsYW5ndWFnZSwgQVBJX2tleSkgPT4ge1xyXG4vLyAgIGlmICghQVBJX2tleSkge1xyXG4vLyAgICAgcmV0dXJuIHN0cmluZztcclxuLy8gICB9IGVsc2Uge1xyXG4vLyAgICAgbGV0IHRyYXNsYXRlZFN0cmluZztcclxuLy8gICAgIHJldHVybiB0cmFuc2xhdGUoXCJIZWxsbyB3b3JsZFwiLCB7XHJcbi8vICAgICAgIHRvOiBsYW5ndWFnZSxcclxuLy8gICAgICAga2V5OiBBUElfa2V5LFxyXG4vLyAgICAgfSlcclxuLy8gICAgICAgLnRoZW4oKHJlcykgPT4gKHRyYXNsYXRlZFN0cmluZyA9IHJlcykpXHJcbi8vICAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxuLy8gICB9XHJcbi8vIH07XHJcblxyXG5leHBvcnQgY29uc3QgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyID0gKHN0cmluZykgPT4ge1xyXG4gIHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XHJcbn07XHJcbiIsImltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBFbXB0eSwgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQ2FydFNpZGViYXJJdGVtIGZyb20gXCIuL0NhcnRTaWRlYmFySXRlbVwiO1xyXG5pbXBvcnQgeyBjYWxjdWxhdGVUb3RhbFByaWNlIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zaG9wVXRpbHNcIjtcclxuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3kgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3V0aWxzXCI7XHJcblxyXG5mdW5jdGlvbiBDYXJ0U2lkZWJhcigpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgY2FydFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XHJcbiAgY29uc3QgZ2xvYmFsU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmdsb2JhbFJlZHVjZXIpO1xyXG4gIGNvbnN0IHsgY3VycmVuY3ksIGxvY2FsZXMgfSA9IGdsb2JhbFN0YXRlLmN1cnJlbmN5O1xyXG4gIHJldHVybiBjYXJ0U3RhdGUubGVuZ3RoID09PSAwID8gKFxyXG4gICAgPEVtcHR5IGRlc2NyaXB0aW9uPVwiTm8gcHJvZHVjdHMgaW4gY2FydFwiIC8+XHJcbiAgKSA6IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1zaWRlYmFyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1zaWRlYmFyLXByb2R1Y3RzXCI+XHJcbiAgICAgICAge2NhcnRTdGF0ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Q2FydFNpZGViYXJJdGVtIGtleT17aW5kZXh9IGRhdGE9e2l0ZW19IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtc2lkZWJhci10b3RhbFwiPlxyXG4gICAgICAgIDxoNT5cclxuICAgICAgICAgIFRvdGFsOntcIiBcIn1cclxuICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICB7Zm9ybWF0Q3VycmVuY3koY2FsY3VsYXRlVG90YWxQcmljZShjYXJ0U3RhdGUpLCBsb2NhbGVzLCBjdXJyZW5jeSl9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9oNT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtc2lkZWJhci10b3RhbF9fYnV0dG9uc1wiPlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNoYXBlPVwicm91bmRcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3AvY2hlY2tvdXRcIn0+XHJcbiAgICAgICAgICAgICAgPGE+Q2hlY2tvdXQ8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oQ2FydFNpZGViYXIpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBNb2RhbCwgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5cclxuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3kgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCBRdWFudGl0eVNlbGVjdG9yIGZyb20gXCIuLi9jb250cm9scy9RdWFudGl0eVNlbGVjdG9yXCI7XHJcbmltcG9ydCB7XHJcbiAgcmVtb3ZlRnJvbUNhcnQsXHJcbiAgZGVjcmVhc2VRdWFudGl0eUNhcnQsXHJcbiAgaW5jcmVhc2VRdWFudGl0eUNhcnQsXHJcbn0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvY2FydEFjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIENhcnRTaWRlYmFySXRlbSh7IGRhdGEgfSkge1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3F1YW50aXR5LCBzZXRRdWFudGl0eV0gPSB1c2VTdGF0ZShkYXRhLmNhcnRRdWFudGl0eSk7XHJcbiAgY29uc3QgZ2xvYmFsU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmdsb2JhbFJlZHVjZXIpO1xyXG4gIGNvbnN0IHsgY3VycmVuY3ksIGxvY2FsZXMgfSA9IGdsb2JhbFN0YXRlLmN1cnJlbmN5O1xyXG4gIGNvbnN0IG9uUmVtb3ZlUHJvZHVjdEZyb21DYXJ0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNob3dNb2RhbCgpO1xyXG4gIH07XHJcbiAgY29uc3Qgc2hvd01vZGFsID0gKCkgPT4ge1xyXG4gICAgc2V0VmlzaWJsZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVPayA9IChlKSA9PiB7XHJcbiAgICBkaXNwYXRjaChyZW1vdmVGcm9tQ2FydChkYXRhLmNhcnRJZCkpO1xyXG4gICAgc2V0VmlzaWJsZShmYWxzZSk7XHJcbiAgICByZXR1cm4gbWVzc2FnZS5lcnJvcihcIlByb2R1Y3QgcmVtb3ZlZCBmcm9tIGNhcnRcIik7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKGUpID0+IHtcclxuICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FydC1zaWRlYmFyLWl0ZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcnQtc2lkZWJhci1pdGVtX19pbWFnZVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9e2RhdGEudGh1bWJJbWFnZVswXX0gYWx0PVwiUHJvZHVjdCBpbWFnZVwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXNpZGViYXItaXRlbV9fY29udGVudFwiPlxyXG4gICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC9bc2x1Z11gfVxyXG4gICAgICAgICAgICBhcz17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIGAvcHJvZHVjdC8ke2RhdGEuc2x1Z31gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8YT57ZGF0YS5uYW1lfTwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAge2RhdGEuZGlzY291bnRcclxuICAgICAgICAgICAgICA/IGZvcm1hdEN1cnJlbmN5KFxyXG4gICAgICAgICAgICAgICAgICAoZGF0YS5wcmljZSAtIGRhdGEuZGlzY291bnQpICogZGF0YS5jYXJ0UXVhbnRpdHksXHJcbiAgICAgICAgICAgICAgICAgIGxvY2FsZXMsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnJlbmN5XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgOiBmb3JtYXRDdXJyZW5jeShcclxuICAgICAgICAgICAgICAgICAgZGF0YS5wcmljZSAqIGRhdGEuY2FydFF1YW50aXR5LFxyXG4gICAgICAgICAgICAgICAgICBsb2NhbGVzLFxyXG4gICAgICAgICAgICAgICAgICBjdXJyZW5jeVxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICA8UXVhbnRpdHlTZWxlY3RvclxyXG4gICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2RhdGEuY2FydFF1YW50aXR5fVxyXG4gICAgICAgICAgICBtaW49ezF9XHJcbiAgICAgICAgICAgIG1heD17ZGF0YS5xdWFudGl0eX1cclxuICAgICAgICAgICAgb25EZWNyZWFzZT17KCkgPT4gZGlzcGF0Y2goZGVjcmVhc2VRdWFudGl0eUNhcnQoZGF0YS5jYXJ0SWQpKX1cclxuICAgICAgICAgICAgb25JbmNyZWFzZT17KCkgPT4gZGlzcGF0Y2goaW5jcmVhc2VRdWFudGl0eUNhcnQoZGF0YS5jYXJ0SWQpKX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJ0LXNpZGViYXItaXRlbV9fY2xvc2VcIj5cclxuICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17b25SZW1vdmVQcm9kdWN0RnJvbUNhcnR9PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uX2Nsb3NlXCIgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIHRpdGxlPVwiQ29maXJtIHRoaXMgYWN0aW9uXCJcclxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgIG9uT2s9e2hhbmRsZU9rfVxyXG4gICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XHJcbiAgICAgID5cclxuICAgICAgICA8cD5BcmUgeW91ciBzdXJlIHRvIHJlbW92ZSBwcm9kdWN0IGZyb20gY2FydCA/PC9wPlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhDYXJ0U2lkZWJhckl0ZW0pO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmZ1bmN0aW9uIFF1YW50aXR5U2VsZWN0b3Ioe1xyXG4gIG1pbixcclxuICBtYXgsXHJcbiAgZGVmYXVsdFZhbHVlLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIHNpemUsXHJcbiAgbm9Sb3VuZCxcclxuICBjbGFzc05hbWUsXHJcbiAgb25EZWNyZWFzZSxcclxuICBvbkluY3JlYXNlLFxyXG59KSB7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZSgxKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgb25DaGFuZ2UgJiYgb25DaGFuZ2UodmFsdWUpO1xyXG4gIH0sIFt2YWx1ZV0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRWYWx1ZShkZWZhdWx0VmFsdWUpO1xyXG4gIH0sIFtkZWZhdWx0VmFsdWVdKTtcclxuICBjb25zdCBkZWNyZWFzZVZhbHVlID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xyXG4gICAgaWYgKG1pbiAmJiB2YWx1ZSA8PSBtaW4pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHZhbHVlIDw9IDEpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgb25EZWNyZWFzZSAmJiBvbkRlY3JlYXNlKCk7XHJcbiAgICAgIHNldFZhbHVlKHZhbHVlIC0gMSk7XHJcbiAgICB9XHJcbiAgfSwgW3ZhbHVlXSk7XHJcbiAgY29uc3QgaW5jcmVhc2VWYWx1ZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcclxuICAgIGlmICh2YWx1ZSA+PSBtYXgpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgb25JbmNyZWFzZSAmJiBvbkluY3JlYXNlKCk7XHJcbiAgICBzZXRWYWx1ZSh2YWx1ZSArIDEpO1xyXG4gIH0sIFt2YWx1ZV0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17YHF1YW50aXR5LXNlbGVjdG9yICR7Y2xhc3NOYW1lcyhjbGFzc05hbWUpfSAtJHtjbGFzc05hbWVzKFxyXG4gICAgICAgIHNpemVcclxuICAgICAgKX0gLSR7Y2xhc3NOYW1lcyh7IFwibm8tcm91bmRcIjogbm9Sb3VuZCB9KX1gfVxyXG4gICAgPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY2xhc3NOYW1lPVwicXVhbnRpdHktc2VsZWN0b3ItY29udHJvbGxlclwiXHJcbiAgICAgICAgdHlwZT1cImxpbmtcIlxyXG4gICAgICAgIGRpc2FibGVkPXt2YWx1ZSA8PSBtaW4gfHwgdmFsdWUgPD0gMX1cclxuICAgICAgICBvbkNsaWNrPXtkZWNyZWFzZVZhbHVlfVxyXG4gICAgICA+XHJcbiAgICAgICAgLVxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWFudGl0eS1zZWxlY3Rvci1udW1iZXJcIj57dmFsdWV9PC9kaXY+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjbGFzc05hbWU9XCJxdWFudGl0eS1zZWxlY3Rvci1jb250cm9sbGVyXCJcclxuICAgICAgICB0eXBlPVwibGlua1wiXHJcbiAgICAgICAgZGlzYWJsZWQ9e3ZhbHVlID49IG1heH1cclxuICAgICAgICBvbkNsaWNrPXtpbmNyZWFzZVZhbHVlfVxyXG4gICAgICA+XHJcbiAgICAgICAgK1xyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUXVhbnRpdHlTZWxlY3Rvcik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgUm93LCBDb2wgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgRm9vdGVyU3ViY3JpYmUgZnJvbSBcIi4vZWxlbWVudHMvRm9vdGVyU3ViY3JpYmVcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vb3RoZXIvQ29udGFpbmVyXCI7XHJcbmltcG9ydCBsaW5rcyBmcm9tIFwiLi4vLi4vZGF0YS9mb290ZXItbGlua3MuanNvblwiO1xyXG5cclxuZnVuY3Rpb24gRm9vdGVyKHsgY29udGFpbmVyVHlwZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXRvcFwiPlxyXG4gICAgICAgIDxDb250YWluZXIgdHlwZT17Y29udGFpbmVyVHlwZX0+XHJcbiAgICAgICAgICA8Um93IGp1c3RpZnk9XCJjZW50ZXJcIiBndXR0ZXI9ezMwfT5cclxuICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZ3V0dGVyLXJvd1wiIHNwYW49XCIyNFwiIHNtPXsxMn0gbGc9ezh9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXRvcC1pdGVtIC1jb2wtb25lXCI+XHJcbiAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17MzB9PlxyXG4gICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImd1dHRlci1yb3dcIiBzcGFuPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJmb290ZXItdGl0bGVcIj5Db250YWN0IFVzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgPHA+SG91c2UgIzgsIFJvYWQgIzE0LDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5EaGFubW9uZGksIERoYWthLTEyMDkuIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5FbWFpbDogc3VwcG9ydEBlbGVtZW50cm9uaWNzLmNvbTwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPHA+cGhvbmU6ICs4ODAxNzExLTIyMzM0NDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9vdGVyLXRpdGxlXCI+R2V0IGluIHRvdWNoPC9oNT5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZ3V0dGVyLXJvd1wiIHNwYW49XCIyNFwiIHNtPXsxMn0gbGc9ezh9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXRvcC1pdGVtIC1jb2wtdHdvXCI+XHJcbiAgICAgICAgICAgICAgICA8Um93IGd1dHRlcj17MzB9PlxyXG4gICAgICAgICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImd1dHRlci1yb3dcIiBzcGFuPXsyNH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvb3Rlci10aXRsZVwiPk1lbnU8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgIHtsaW5rcy5pbmZvcm1hdGlvbi5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e2l0ZW0ubmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2w+XHJcblxyXG4gICAgICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImd1dHRlci1yb3dcIiBzcGFuPVwiMjRcIiBzbT17MTh9IGxnPXs4fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci10b3AtaXRlbSAtY29sLXRocmVlXCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiZm9vdGVyLXRpdGxlXCI+U3Vic2NyaWJlIFVzPC9oNT5cclxuICAgICAgICAgICAgICAgIDxGb290ZXJTdWJjcmliZSB1cmw9XCJodHRwczovL2pzdGVyLnVzNy5saXN0LW1hbmFnZS5jb20vc3Vic2NyaWJlL3Bvc3Q/dT1lZDQwYzAwODRhMGM1YmEzMWIzMzY1ZDY1JmlkPWVjNmYzMmJmNWVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImZvb3Rlci10aXRsZVwiPk91ciBwYXltZW50IG1ldGhvZHM8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9hc3NldHMvaW1hZ2VzL2Zvb3Rlci9wYXltZW50LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgYWx0PVwiUGF5bWVudCBtZXRob2RzXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sPlxyXG4gICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1ib3R0b21cIj5cclxuICAgICAgICA8Q29udGFpbmVyIHR5cGU9e2NvbnRhaW5lclR5cGV9PlxyXG4gICAgICAgICAgPHA+Q29weXJpZ2h0IMKpIHtgJHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9YH0gRWxlbWVudHJvbmljcy5jb20uIEFsbCByaWdodHMgcmVzZXJ2ZWQ8L3A+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhGb290ZXIpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNYWlsY2hpbXBTdWJzY3JpYmUgZnJvbSBcInJlYWN0LW1haWxjaGltcC1zdWJzY3JpYmVcIjtcclxuaW1wb3J0IHsgRm9ybSwgSW5wdXQsIEJ1dHRvbiB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5jb25zdCBDdXN0b21Gb3JtID0gUmVhY3QubWVtbygoeyBzdGF0dXMsIG1lc3NhZ2UsIG9uVmFsaWRhdGVkIH0pID0+IHtcclxuICBjb25zdCBvbkZpbmlzaCA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJTdWNjZXNzOlwiLCB2YWx1ZSk7XHJcbiAgICB2YWx1ZSAmJlxyXG4gICAgICBvblZhbGlkYXRlZCh7XHJcbiAgICAgICAgRU1BSUw6IHZhbHVlLmVtYWlsLFxyXG4gICAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBvbkZpbmlzaEZhaWxlZCA9IChlcnJvckluZm8pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiRmFpbGVkOlwiLCBlcnJvckluZm8pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Rm9ybVxyXG4gICAgICAgIG5hbWU9XCJiYXNpY1wiXHJcbiAgICAgICAgaW5pdGlhbFZhbHVlcz17e1xyXG4gICAgICAgICAgcmVtZW1iZXI6IHRydWUsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvbkZpbmlzaD17b25GaW5pc2h9XHJcbiAgICAgICAgb25GaW5pc2hGYWlsZWQ9e29uRmluaXNoRmFpbGVkfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZvb3Rlci1zdWJjcmliZV9fZm9ybVwiXHJcbiAgICAgID5cclxuICAgICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgICBub1N0eWxlPXt0cnVlfVxyXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgIHJ1bGVzPXtbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0eXBlOiBcImVtYWlsXCIsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogXCJUaGUgaW5wdXQgaXMgbm90IHZhbGlkIEUtbWFpbCFcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUGxlYXNlIGlucHV0IHlvdXIgRS1tYWlsIVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCIgLz5cclxuICAgICAgICA8L0Zvcm0uSXRlbT5cclxuICAgICAgICA8Rm9ybS5JdGVtIG5vU3R5bGU9e3RydWV9PlxyXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwibGlua1wiIGh0bWxUeXBlPVwic3VibWl0XCI+XHJcbiAgICAgICAgICAgIFNVQlNDUklCRVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9Gb3JtLkl0ZW0+XHJcbiAgICAgIDwvRm9ybT5cclxuICAgICAge3N0YXR1cyA9PT0gXCJzZW5kaW5nXCIgJiYgPGRpdiBzdHlsZT17eyBjb2xvcjogXCJ3aGl0ZVwiIH19PnNlbmRpbmcuLi48L2Rpdj59XHJcbiAgICAgIHtzdGF0dXMgPT09IFwiZXJyb3JcIiAmJiAoXHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX1cclxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWVzc2FnZSB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzdGF0dXMgPT09IFwic3VjY2Vzc1wiICYmIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCJncmVlblwiIH19XHJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG1lc3NhZ2UgfX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgICA8YnIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyU3ViY3JpYmUoeyB1cmwgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWFpbGNoaW1wU3Vic2NyaWJlXHJcbiAgICAgIHVybD17dXJsfVxyXG4gICAgICByZW5kZXI9eyh7IHN1YnNjcmliZSwgc3RhdHVzLCBtZXNzYWdlIH0pID0+IChcclxuICAgICAgICA8Q3VzdG9tRm9ybVxyXG4gICAgICAgICAgc3RhdHVzPXtzdGF0dXN9XHJcbiAgICAgICAgICBtZXNzYWdlPXttZXNzYWdlfVxyXG4gICAgICAgICAgb25WYWxpZGF0ZWQ9eyhmb3JtRGF0YSkgPT4gc3Vic2NyaWJlKGZvcm1EYXRhKX1cclxuICAgICAgICAvPlxyXG4gICAgICApfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJvdHRvbU5hdiBmcm9tIFwiLi9lbGVtZW50cy9Cb3R0b21OYXZcIjtcclxuXHJcbmltcG9ydCBNZW51IGZyb20gXCIuL2VsZW1lbnRzL01lbnVcIjtcclxuaW1wb3J0IFRvcE5hdiBmcm9tIFwiLi9lbGVtZW50cy9Ub3BOYXZcIjtcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7IGNvbnRhaW5lclR5cGUsIGhlYWRlclN0eWxlIH0pIHtcclxuICBjb25zdCByZW5kZXJTdHlsZUNsYXNzID0gKHR5cGUpID0+IHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlIFwidHdvXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiLXN0eWxlLXR3b1wiO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiBcImRlZmF1bHRcIjtcclxuICAgIH1cclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGhlYWRlci1vbmUgJHtyZW5kZXJTdHlsZUNsYXNzKGhlYWRlclN0eWxlKX1gfT5cclxuICAgICAgPFRvcE5hdiBjb250YWluZXJUeXBlPXtjb250YWluZXJUeXBlfSAvPlxyXG4gICAgICA8TWVudSBjb250YWluZXJUeXBlPXtjb250YWluZXJUeXBlfSAvPlxyXG4gICAgICA8Qm90dG9tTmF2IGNvbnRhaW5lclR5cGU9e2NvbnRhaW5lclR5cGV9Lz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oSGVhZGVyKTtcclxuIiwiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuL0NhdGVnb3J5XCI7XHJcblxyXG5mdW5jdGlvbiBCb3R0b21OYXYoeyBjb250YWluZXJUeXBlIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tbmF2XCI+XHJcbiAgICAgIDxDb250YWluZXIgdHlwZT17Y29udGFpbmVyVHlwZX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tbmF2LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPENhdGVnb3J5IC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbS1uYXYtbGlua3NcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tbmF2LWxpbmtzX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2RlbGl2YXJ5XCJ9PlxyXG4gICAgICAgICAgICAgICAgPGE+RGVsZXZhcnk8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tbmF2LWxpbmtzX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2hlbHBcIn0+XHJcbiAgICAgICAgICAgICAgICA8YT5IZWxwPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKEJvdHRvbU5hdik7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IFNlbGVjdCB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgeyBTSE9QIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kZWZpbmVzXCI7XHJcbmltcG9ydCB7IHNldFN1YkNhdGVnb3J5IH0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvc2hvcEFjdGlvbnNcIjtcclxuXHJcbmNvbnN0IENhdGVnb3J5ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IGdsb2JhbFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5nbG9iYWxSZWR1Y2VyKTtcclxuICBjb25zdCBzaG9wU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3BSZWR1Y2VyKTtcclxuXHJcbiAgY29uc3Qgc3ViQ2F0ZWdvcnkgPSBTSE9QLmNhdGVnb3J5LmZpbmQoXHJcbiAgICAoaXRlbSkgPT4gaXRlbS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09IGdsb2JhbFN0YXRlLmNhdGVnb3J5LnRvTG93ZXJDYXNlKClcclxuICApO1xyXG4gIGNvbnN0IG9uQ2hvb3NlU3ViQ2F0ZWdvcnkgPSAoZGF0YSkgPT4ge1xyXG4gICAgaWYgKCFkYXRhIHx8IGRhdGEgPT09IFwiYWxsXCIpIHtcclxuICAgICAgcmV0dXJuIGRpc3BhdGNoKHNldFN1YkNhdGVnb3J5KFwiXCIpKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkaXNwYXRjaChzZXRTdWJDYXRlZ29yeShkYXRhKSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsdWUpID0+IHtcclxuICAgIG9uQ2hvb3NlU3ViQ2F0ZWdvcnkodmFsdWUpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPVwiYWxsXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICB2YWx1ZT17c2hvcFN0YXRlLnN1YkNhdGVnb3J5ID09PSBcIlwiID8gXCJhbGxcIiA6IHNob3BTdGF0ZS5zdWJDYXRlZ29yeX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiYWxsXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25fZG9jdW1lbnRfYWx0XCIgLz5cclxuICAgICAgICAgICAgQWxsIENhdGVnb3J5XHJcbiAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgIHtzdWJDYXRlZ29yeSAmJlxyXG4gICAgICAgICAgICBzdWJDYXRlZ29yeS5zdWIubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxPcHRpb24ga2V5PXtpbmRleH0gdmFsdWU9e2l0ZW0ubmFtZX0+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9e2l0ZW0uaWNvbkNsYXNzfSAvPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBCdXR0b24sIERyYXdlciB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBDbG9zZU91dGxpbmVkIH0gZnJvbSBcIkBhbnQtZGVzaWduL2ljb25zXCI7XHJcbmltcG9ydCB7XHJcbiAgQWlPdXRsaW5lVXNlcixcclxuICBBaU91dGxpbmVIb21lLFxyXG4gIEFpT3V0bGluZVNob3BwaW5nQ2FydCxcclxufSBmcm9tIFwicmVhY3QtaWNvbnMvYWlcIjtcclxuaW1wb3J0IHsgUmlNZXNzYWdlTGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiO1xyXG5cclxuaW1wb3J0IHByb2R1Y3RzRGF0YSBmcm9tIFwiLi4vLi4vLi4vZGF0YS9wcm9kdWN0Lmpzb25cIjtcclxuaW1wb3J0IENhcnRTaWRlYmFyIGZyb20gXCIuLi8uLi9jYXJ0L0NhcnRTaWRlYmFyXCI7XHJcbi8vIGltcG9ydCBXaXNobGlzdFNpZGViYXIgZnJvbSBcIi4uLy4uL3dpc2hsaXN0L1dpc2hsaXN0U2lkZWJhclwiO1xyXG5pbXBvcnQgTWVudVNpZGViYXIgZnJvbSBcIi4vTWVudVNpZGViYXJcIjtcclxuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi9TZWFyY2hCYXJcIjtcclxuaW1wb3J0IHsgZ2V0VG90YWxQcm9kdWN0SW5DYXJ0IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9zaG9wVXRpbHNcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vLi4vb3RoZXIvQ29udGFpbmVyXCI7XHJcblxyXG5mdW5jdGlvbiBNZW51KHsgY29udGFpbmVyVHlwZSB9KSB7XHJcbiAgY29uc3QgY2FydFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XHJcbiAgLy8gY29uc3Qgd2lzaGxpc3RTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUud2lzaGxpc3RSZWR1Y2VyKTtcclxuICBjb25zdCBbY2FydFNpZGViYXJPcGVuLCBzZXRDYXJ0U2lkZWJhck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFttZW51U2lkZWJhck9wZW4sIHNldE1lbnVTaWRlYmFyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgLy8gY29uc3QgW3dpc2hsaXN0U2lkZWJhck9wZW4sIHNldFdpc2hsaXN0U2lkZWJhck9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICA8Q29udGFpbmVyIHR5cGU9e2NvbnRhaW5lclR5cGV9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWVudS1zaWRlYmFyLW9wZW5lclwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIHNldE1lbnVTaWRlYmFyT3Blbih0cnVlKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWxvZ29cIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBzdHlsZT17eyBjb2xvcjogXCIjZmZmZmZmXCIgfX0+RWxlbWVudHJvbmljczwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG4gICAgICAgICAgICAgICAgey8qIDxhPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ29cIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9hPiAqL31cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8U2VhcmNoQmFyXHJcbiAgICAgICAgICAgICAgZmlsbERhdGE9e3Byb2R1Y3RzRGF0YX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgYXJlIHlvdSBsb29raW5nIGZvciA/XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWZ1bmN0aW9uc1wiPlxyXG4gICAgICAgICAgICAgIHsvKiA8QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgPGE+Sm9pbiBub3c8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICAgICAgICAgIHsvKiA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtZW51LWZ1bmN0aW9uLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0V2lzaGxpc3RTaWRlYmFyT3Blbih0cnVlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIvYXNzZXRzL2ltYWdlcy9oZWFkZXIvbWVudS13aXNobGlzdC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3dpc2hsaXN0U3RhdGUubGVuZ3RofTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWZ1bmN0aW9uLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9cIn0+XHJcbiAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVIb21lIC8+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LWZ1bmN0aW9uLWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9zaG9wL2NoZWNrb3V0XCJ9PlxyXG4gICAgICAgICAgICAgICAgICA8UmlNZXNzYWdlTGluZSAvPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtZnVuY3Rpb24taXRlbVwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRDYXJ0U2lkZWJhck9wZW4odHJ1ZSl9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPEFpT3V0bGluZVNob3BwaW5nQ2FydCAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIvYXNzZXRzL2ltYWdlcy9oZWFkZXIvbWVudS1iYWcucG5nXCJcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57Z2V0VG90YWxQcm9kdWN0SW5DYXJ0KGNhcnRTdGF0ZSl9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1mdW5jdGlvbi1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC9jaGVja291dFwifT5cclxuICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZVVzZXIgLz5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1tb2JpbGUtc2VhcmNoXCI+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxTZWFyY2hCYXIgZmlsbERhdGE9e3Byb2R1Y3RzRGF0YX0gcGxhY2Vob2xkZXI9XCJTZWFyY2hpbmcuLi5cIiAvPlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgey8qIDxEcmF3ZXJcclxuICAgICAgICBwbGFjZW1lbnQ9XCJyaWdodFwiXHJcbiAgICAgICAgdGl0bGU9e2BXaXNobGlzdCAoJHt3aXNobGlzdFN0YXRlLmxlbmd0aH0pYH1cclxuICAgICAgICBjbG9zYWJsZT17dHJ1ZX1cclxuICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRXaXNobGlzdFNpZGViYXJPcGVuKGZhbHNlKX1cclxuICAgICAgICBjbG9zZUljb249e1xyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPHA+Q2xvc2U8L3A+IDxDbG9zZU91dGxpbmVkIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICAgICAgdmlzaWJsZT17d2lzaGxpc3RTaWRlYmFyT3Blbn1cclxuICAgICAgICB3aWR0aD17NDQ1fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtc2lkZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8V2lzaGxpc3RTaWRlYmFyIC8+XHJcbiAgICAgIDwvRHJhd2VyPiAqL31cclxuICAgICAgPERyYXdlclxyXG4gICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcclxuICAgICAgICB0aXRsZT17YFNob3BwaW5nIGNhcnQgKCR7Z2V0VG90YWxQcm9kdWN0SW5DYXJ0KGNhcnRTdGF0ZSl9KWB9XHJcbiAgICAgICAgY2xvc2FibGU9e3RydWV9XHJcbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0Q2FydFNpZGViYXJPcGVuKGZhbHNlKX1cclxuICAgICAgICBjbG9zZUljb249e1xyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPHA+Q2xvc2U8L3A+IDxDbG9zZU91dGxpbmVkIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICB9XHJcbiAgICAgICAgdmlzaWJsZT17Y2FydFNpZGViYXJPcGVufVxyXG4gICAgICAgIHdpZHRoPXs0NDV9XHJcbiAgICAgICAgY2xhc3NOYW1lPVwibWVudS1zaWRlXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxDYXJ0U2lkZWJhciAvPlxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgICAgPERyYXdlclxyXG4gICAgICAgIHBsYWNlbWVudD1cInJpZ2h0XCJcclxuICAgICAgICBjbG9zYWJsZT17dHJ1ZX1cclxuICAgICAgICB0aXRsZT1cIiBcIlxyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE1lbnVTaWRlYmFyT3BlbihmYWxzZSl9XHJcbiAgICAgICAgY2xvc2VJY29uPXtcclxuICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxwPkNsb3NlPC9wPiA8Q2xvc2VPdXRsaW5lZCAvPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZpc2libGU9e21lbnVTaWRlYmFyT3Blbn1cclxuICAgICAgICB3aWR0aD17MzUwfVxyXG4gICAgICAgIGNsYXNzTmFtZT1cIm1lbnUtc2lkZVwiXHJcbiAgICAgID5cclxuICAgICAgICA8TWVudVNpZGViYXIgLz5cclxuICAgICAgPC9EcmF3ZXI+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKE1lbnUpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1lbnUsIFNlbGVjdCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIHNldEdsb2JhbExhbmd1YWdlLFxyXG4gIHNldEdsb2JhbEN1cnJlbmN5LFxyXG59IGZyb20gXCIuLi8uLi8uLi9yZWR1eC9hY3Rpb25zL2dsb2JhbEFjdGlvbnNcIjtcclxuXHJcbmZ1bmN0aW9uIE1lbnVTaWRlYmFyKCkge1xyXG4gIGNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcclxuICBjb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsUmVkdWNlcik7XHJcbiAgY29uc3Qgb25TZWxlY3RMYW5ndWFnZSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0R2xvYmFsTGFuZ3VhZ2UodmFsdWUpKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uU2VsZWN0Q3VycmVuY3kgPSAodmFsdWUpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldEdsb2JhbEN1cnJlbmN5KHZhbHVlKSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXNpZGViYXJcIj5cclxuICAgICAgPE1lbnUgbW9kZT1cImlubGluZVwiPlxyXG4gICAgICAgIDxTdWJNZW51IGtleT1cInN1YjFcIiB0aXRsZT1cIkhvbWVwYWdlc1wiPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCIxXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9cIn0+XHJcbiAgICAgICAgICAgICAgPGE+SG9tZXBhZ2UgMTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjJcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL2hvbWVwYWdlMlwifT5cclxuICAgICAgICAgICAgICA8YT5Ib21lcGFnZSAyPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiM1wiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvaG9tZXBhZ2UzXCJ9PlxyXG4gICAgICAgICAgICAgIDxhPkhvbWVwYWdlIDM8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI0XCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi9ob21lcGFnZTRcIn0+XHJcbiAgICAgICAgICAgICAgPGE+SG9tZXBhZ2UgNDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPC9TdWJNZW51PlxyXG4gICAgICAgIDxTdWJNZW51IGtleT1cInN1YjJcIiB0aXRsZT1cIlNob3BcIj5cclxuICAgICAgICAgIDxTdWJNZW51IGtleT1cInN1YjItMVwiIHRpdGxlPVwiU2hvcCBkZXRhaWxcIj5cclxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCI1XCI+XHJcbiAgICAgICAgICAgICAgPExpbmtcclxuICAgICAgICAgICAgICAgIGhyZWY9e1xyXG4gICAgICAgICAgICAgICAgICBwcm9jZXNzLmVudi5QVUJMSUNfVVJMICtcclxuICAgICAgICAgICAgICAgICAgXCIvc2hvcC9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC0xXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YT5Qcm9kdWN0IERldGFpbCAxPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiNlwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rXHJcbiAgICAgICAgICAgICAgICBocmVmPXtcclxuICAgICAgICAgICAgICAgICAgcHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArXHJcbiAgICAgICAgICAgICAgICAgIFwiL3Nob3AvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwtMlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGE+UHJvZHVjdCBEZXRhaWwgMjwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjdcIj5cclxuICAgICAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICAgICAgaHJlZj17XHJcbiAgICAgICAgICAgICAgICAgIHByb2Nlc3MuZW52LlBVQkxJQ19VUkwgK1xyXG4gICAgICAgICAgICAgICAgICBcIi9zaG9wL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLTNcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhPlByb2R1Y3QgRGV0YWlsIDM8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L01lbnUuSXRlbT5cclxuICAgICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiOFwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC9jaGVja291dFwifT5cclxuICAgICAgICAgICAgICA8YT5DaGVja291dDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIjlcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3AvY2hlY2tvdXQtY29tcGxldGVcIn0+XHJcbiAgICAgICAgICAgICAgPGE+Q2hlY2tvdXQgQ29tcGxldGU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDwvU3ViTWVudT5cclxuICAgICAgICA8TWVudS5JdGVtIGtleT1cIjEwXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIjXCJ9PlxyXG4gICAgICAgICAgICA8YT5IZWxwPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwiMTFcIj5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIiNcIn0+XHJcbiAgICAgICAgICAgIDxhPk9mZmVyPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICA8L01lbnU+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1zaWRlYmFyLXNlbGVjdHNcIj5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2dsb2JhbFN0YXRlLmxhbmd1YWdlfVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDEyMCB9fVxyXG4gICAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0TGFuZ3VhZ2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImVuXCI+RW5nbGlzaDwvT3B0aW9uPlxyXG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImpwXCI+SmFwYW5lc2U8L09wdGlvbj5cclxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJ2aVwiPlZpZXRuYW1lc2U8L09wdGlvbj5cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICBkZWZhdWx0VmFsdWU9e2dsb2JhbFN0YXRlLmN1cnJlbmN5LmN1cnJlbmN5fVxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDE1MCB9fVxyXG4gICAgICAgICAgYm9yZGVyZWQ9e2ZhbHNlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0Q3VycmVuY3l9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlVTRFwiPlVTRCAtIERvbGxhcjwvT3B0aW9uPlxyXG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkpQWVwiPkpQWSAtIFllbjwvT3B0aW9uPlxyXG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIlZORFwiPlZORCAtIFZpZXRuYW0gZG9uZzwvT3B0aW9uPlxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oTWVudVNpZGViYXIpO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTZWxlY3QsIEJ1dHRvbiwgQXV0b0NvbXBsZXRlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgU0hPUCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZGVmaW5lc1wiO1xyXG5pbXBvcnQgeyBnZXRQcm9kdWN0c0J5Q2F0ZWdvcnkgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3Nob3BVdGlsc1wiO1xyXG5pbXBvcnQge1xyXG4gIHNldEdsb2JhbENhdGVnb3J5LFxyXG4gIHNldEdsb2JhbFNlYXJjaCxcclxufSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9nbG9iYWxBY3Rpb25zXCI7XHJcbmltcG9ydCB7IHNldFN1YkNhdGVnb3J5IH0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvc2hvcEFjdGlvbnNcIjtcclxuaW1wb3J0IHVzZURlYm91bmNlIGZyb20gXCIuLi8uLi8uLi9jb21tb24vdXNlRGVib3VuZFwiO1xyXG5cclxuZnVuY3Rpb24gU2VhcmNoQmFyTW9iaWxlKHsgZmlsbERhdGEsIHBsYWNlaG9sZGVyIH0pIHtcclxuICBjb25zdCB7IE9wdGlvbiB9ID0gU2VsZWN0O1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Nob3dEcm9wZG93bk9wdGlvbnMsIHNldFNob3dEcm9wZG93bk9wdGlvbnNdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGdsb2JhbFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5nbG9iYWxSZWR1Y2VyKTtcclxuICBjb25zdCBkZWJvdW5kVmFsdWUgPSB1c2VEZWJvdW5jZShzZWFyY2gsIDMwMCk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGRpc3BhdGNoKHNldEdsb2JhbFNlYXJjaChkZWJvdW5kVmFsdWUpKTtcclxuICB9LCBbZGVib3VuZFZhbHVlXSk7XHJcbiAgY29uc3QgcmVuZGVyQXV0b0ZpbGxJdGVtID0gKCkgPT4ge1xyXG4gICAgbGV0IHByb2R1Y3QgPSBnZXRQcm9kdWN0c0J5Q2F0ZWdvcnkoZmlsbERhdGEsIGdsb2JhbFN0YXRlLmNhdGVnb3J5KTtcclxuICAgIHJldHVybiBwcm9kdWN0Lm1hcCgoaXRlbSkgPT4gKHtcclxuICAgICAgdmFsdWU6IGl0ZW0ubmFtZSxcclxuICAgIH0pKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uU2VsZWN0Q2F0ZW9yeSA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0R2xvYmFsQ2F0ZWdvcnkodmFsdWUpKTtcclxuICAgIGRpc3BhdGNoKHNldFN1YkNhdGVnb3J5KFwiXCIpKTtcclxuICB9O1xyXG4gIGNvbnN0IG9wZW5Ecm9wZG93bk9wdGlvbiA9ICh2YWx1ZSkgPT4ge1xyXG4gICAgc2V0U2hvd0Ryb3Bkb3duT3B0aW9ucyh0cnVlKTtcclxuICAgIHNldFNlYXJjaCh2YWx1ZSk7XHJcbiAgfTtcclxuICBjb25zdCBjbG9zZURyb3Bkb3duT3B0aW9uID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd0Ryb3Bkb3duT3B0aW9ucyhmYWxzZSk7XHJcbiAgfTtcclxuICBjb25zdCBvblNlbGVjdE9wdGlvbiA9ICh2YWx1ZSwgb3B0aW9uKSA9PiB7XHJcbiAgICBzZXRTZWFyY2godmFsdWUpO1xyXG4gICAgY2xvc2VEcm9wZG93bk9wdGlvbigpO1xyXG4gIH07XHJcbiAgY29uc3Qgb25TZWFyY2ggPSAoKSA9PiB7XHJcbiAgICBpZiAoIXNlYXJjaCB8fCBzZWFyY2ggPT09IFwiXCIpIHtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcm91dGVyLnB1c2goe1xyXG4gICAgICAgIHBhdGhuYW1lOiBcIi9cIixcclxuICAgICAgICBxdWVyeTogeyBxOiBzZWFyY2ggfSxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZW51LXNlYXJjaFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnUtc2VhcmNoX19mb3JtXCI+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibWVudS1zZWFyY2hfX2Zvcm0tc2VsZWN0XCJcclxuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17Z2xvYmFsU3RhdGUuY2F0ZWdvcnl9XHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogMTUwIH19XHJcbiAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RDYXRlb3J5fVxyXG4gICAgICAgICAgdmFsdWU9e2dsb2JhbFN0YXRlLmNhdGVnb3J5fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtTSE9QLmNhdGVnb3J5Lm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPE9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17aXRlbS5uYW1lfT5cclxuICAgICAgICAgICAgICB7aXRlbS5uYW1lfVxyXG4gICAgICAgICAgICA8L09wdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudS1zZWFyY2hfX2Zvcm0taW5wdXRcIj5cclxuICAgICAgICAgIDxBdXRvQ29tcGxldGVcclxuICAgICAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgICAgICBiYWNrZmlsbD17dHJ1ZX1cclxuICAgICAgICAgICAgb3Blbj17c2hvd0Ryb3Bkb3duT3B0aW9uc31cclxuICAgICAgICAgICAgb25TZWFyY2g9e29wZW5Ecm9wZG93bk9wdGlvbn1cclxuICAgICAgICAgICAgb25CbHVyPXtjbG9zZURyb3Bkb3duT3B0aW9ufVxyXG4gICAgICAgICAgICBvblNlbGVjdD17b25TZWxlY3RPcHRpb259XHJcbiAgICAgICAgICAgIG9wdGlvbnM9e3JlbmRlckF1dG9GaWxsSXRlbSgpfVxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgICAgICAgIGZpbHRlck9wdGlvbj17KGlucHV0VmFsdWUsIG9wdGlvbikgPT5cclxuICAgICAgICAgICAgICBvcHRpb24udmFsdWUudG9VcHBlckNhc2UoKS5pbmRleE9mKGlucHV0VmFsdWUudG9VcHBlckNhc2UoKSkgIT09XHJcbiAgICAgICAgICAgICAgLTFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17b25TZWFyY2h9PlxyXG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uX3NlYXJjaFwiIC8+XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNlYXJjaEJhck1vYmlsZSk7XHJcbiIsIi8vIGltcG9ydCB7IFNlbGVjdCB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy8gaW1wb3J0IHsgdXNlU2VsZWN0b3IsIHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIGltcG9ydCB7XHJcbi8vICAgc2V0R2xvYmFsTGFuZ3VhZ2UsXHJcbi8vICAgc2V0R2xvYmFsQ3VycmVuY3ksXHJcbi8vIH0gZnJvbSBcIi4uLy4uLy4uL3JlZHV4L2FjdGlvbnMvZ2xvYmFsQWN0aW9uc1wiO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gXCIuLi8uLi9vdGhlci9Db250YWluZXJcIjtcclxuXHJcbmZ1bmN0aW9uIFRvcE5hdih7IGNvbnRhaW5lclR5cGUgfSkge1xyXG4gIC8vIGNvbnN0IHsgT3B0aW9uIH0gPSBTZWxlY3Q7XHJcbiAgLy8gY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIC8vIGNvbnN0IGdsb2JhbFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5nbG9iYWxSZWR1Y2VyKTtcclxuICAvLyBjb25zdCBvblNlbGVjdExhbmd1YWdlID0gKHZhbHVlKSA9PiB7XHJcbiAgLy8gICBkaXNwYXRjaChzZXRHbG9iYWxMYW5ndWFnZSh2YWx1ZSkpO1xyXG4gIC8vIH07XHJcbiAgLy8gY29uc3Qgb25TZWxlY3RDdXJyZW5jeSA9ICh2YWx1ZSkgPT4ge1xyXG4gIC8vICAgZGlzcGF0Y2goc2V0R2xvYmFsQ3VycmVuY3kodmFsdWUpKTtcclxuICAvLyB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1uYXZcIj5cclxuICAgICAgPENvbnRhaW5lciB0eXBlPXtjb250YWluZXJUeXBlfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1uYXYtd3JhcHBlclwiPlxyXG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdi1zZWxlY3RzXCI+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2dsb2JhbFN0YXRlLmxhbmd1YWdlfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA5MCB9fVxyXG4gICAgICAgICAgICAgIGJvcmRlcmVkPXtmYWxzZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17b25TZWxlY3RMYW5ndWFnZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJlblwiPkVuZ2xpc2g8L09wdGlvbj5cclxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwianBcIj5KYXBhbmVzZTwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJ2aVwiPlZpZXRuYW1lc2U8L09wdGlvbj5cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e2dsb2JhbFN0YXRlLmN1cnJlbmN5LmN1cnJlbmN5fVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAxMjAgfX1cclxuICAgICAgICAgICAgICBib3JkZXJlZD17ZmFsc2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e29uU2VsZWN0Q3VycmVuY3l9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiVVNEXCI+VVNEIC0gRG9sbGFyPC9PcHRpb24+XHJcbiAgICAgICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cIkpQWVwiPkpQWSAtIFllbjwvT3B0aW9uPlxyXG4gICAgICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJWTkRcIj5WTkQgLSBWaWV0bmFtIGRvbmc8L09wdGlvbj5cclxuICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1uYXYtbGlua3NcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3AtbmF2LWxpbmtzX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiLyNcIn0+XHJcbiAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9waG9uZVwiIC8+ICs4ODAxNzExLTIyMzM0NFxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdi1saW5rc19faXRlbVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e3Byb2Nlc3MuZW52LlBVQkxJQ19VUkwgKyBcIi8jXCJ9PlxyXG4gICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25fbWFpbFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIHN1cHBvcnRAZWxlbWVudHJvbmljcy5jb21cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhUb3BOYXYpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgQmFja1RvcCwgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9oZWFkZXIvSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2Zvb3Rlci9Gb290ZXJcIjtcclxuaW1wb3J0IFdpdGhIZWFkZXJTY3JvbGwgZnJvbSBcIi4uLy4uL2NvbW1vbi9XaXRoSGVhZGVyU2Nyb2xsXCI7XHJcbmltcG9ydCBTdWJwYWdlc1NpZGViYXIgZnJvbSBcIi4uL3N1YnBhZ2VzL1N1YnBhZ2VzU2lkZWJhclwiO1xyXG5cclxuY29uc3QgU2Nyb2xsSGVhZGVyID0gV2l0aEhlYWRlclNjcm9sbChIZWFkZXIpO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0T25lKHtcclxuICB0aXRsZSxcclxuICBoZWFkZXJTdHlsZSxcclxuICBjb250YWluZXJUeXBlLFxyXG4gIGNoaWxkcmVuLFxyXG4gIGNsZWFyU3BhY2VUb3AsXHJcbn0pIHtcclxuICBtZXNzYWdlLmNvbmZpZyh7XHJcbiAgICBtYXhDb3VudDogMyxcclxuICAgIGR1cmF0aW9uOiAxLFxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPFNjcm9sbEhlYWRlciBoZWFkZXJTdHlsZT17aGVhZGVyU3R5bGV9IGNvbnRhaW5lclR5cGU9e2NvbnRhaW5lclR5cGV9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29udGVudCAke2NsYXNzTmFtZXMoeyBcImNsZWFyLXRvcFwiOiBjbGVhclNwYWNlVG9wIH0pfWB9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxGb290ZXIgY29udGFpbmVyVHlwZT17Y29udGFpbmVyVHlwZX0gLz5cclxuICAgICAgPEJhY2tUb3AgLz5cclxuICAgICAgPFN1YnBhZ2VzU2lkZWJhciAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhMYXlvdXRPbmUpO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWluZXIoeyB0eXBlLCBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgcmVuZGVyQ29udGFpbmVyVHlwZSA9ICh0eXBlKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgY2FzZSBcImZsdWlkXCI6XHJcbiAgICAgICAgcmV0dXJuIFwiY29udGFpbmVyLWZsdWlkXCI7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgcmV0dXJuIFwiY29udGFpbmVyXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3JlbmRlckNvbnRhaW5lclR5cGUodHlwZSl9PntjaGlsZHJlbn08L2Rpdj47XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBSYXRlLCBCdXR0b24sIFRvb2x0aXAsIFNrZWxldG9uLCBtZXNzYWdlLCBNb2RhbCwgU3BpbiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IHVzZVNlbGVjdG9yLCB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5cclxuaW1wb3J0IHsgZm9ybWF0Q3VycmVuY3kgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3V0aWxzXCI7XHJcbmltcG9ydCB7XHJcbiAgY2hlY2tQcm9kdWN0SW5XaXNobGlzdCxcclxuICBjaGVja0F2YWlhYmxlUXVhbnRpdHlUb0FkZCxcclxufSBmcm9tIFwiLi4vLi4vY29tbW9uL3Nob3BVdGlsc1wiO1xyXG5pbXBvcnQgeyBhZGRUb0NhcnQgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xyXG5pbXBvcnQge1xyXG4gIGFkZFRvV2lzaGxpc3QsXHJcbiAgcmVtb3ZlRnJvbVdpc2hsaXN0LFxyXG59IGZyb20gXCIuLi8uLi9yZWR1eC9hY3Rpb25zL3dpc2hsaXN0QWN0aW9uc1wiO1xyXG5pbXBvcnQgU2hvcFF1aWNrVmlldyBmcm9tIFwiLi4vc2hvcC9TaG9wUXVpY2tWaWV3XCI7XHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0KHsgZGF0YSwgcHJvZHVjdFN0eWxlIH0pIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtpbWFnZUxvYWRpbmcsIHNldEltYWdlTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsUmVkdWNlcik7XHJcbiAgY29uc3QgY2FydFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XHJcbiAgY29uc3Qgd2lzaGxpc3RTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUud2lzaGxpc3RSZWR1Y2VyKTtcclxuICBjb25zdCBwcm9kdWN0SW5XaXNobGlzdCA9IGNoZWNrUHJvZHVjdEluV2lzaGxpc3Qod2lzaGxpc3RTdGF0ZSwgZGF0YS5pZCk7XHJcbiAgY29uc3QgYXZhaWFibGVRdWFudGl0eSA9IGNoZWNrQXZhaWFibGVRdWFudGl0eVRvQWRkKGNhcnRTdGF0ZSwgZGF0YSk7XHJcbiAgY29uc3QgeyBjdXJyZW5jeSwgbG9jYWxlcyB9ID0gZ2xvYmFsU3RhdGUuY3VycmVuY3k7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEltYWdlTG9hZGluZyh0cnVlKTtcclxuICB9LCBbZ2xvYmFsU3RhdGUuY2F0ZWdvcnldKTtcclxuICBjb25zdCByZW5kZXJQcm9kdWN0VHlwZSA9ICgpID0+IHtcclxuICAgIGlmIChkYXRhLmRpc2NvdW50ICYmICFkYXRhLmlzTmV3KSB7XHJcbiAgICAgIHJldHVybiA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LXR5cGUgLXNhbGVcIj5TYWxlPC9wPjtcclxuICAgIH0gZWxzZSBpZiAoZGF0YS5pc05ldyAmJiAhZGF0YS5kaXNjb3VudCkge1xyXG4gICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPVwicHJvZHVjdC10eXBlIC1uZXdcIj5OZXc8L3A+O1xyXG4gICAgfSBlbHNlIGlmIChkYXRhLmlzTmV3ICYmIGRhdGEuZGlzY291bnQpIHtcclxuICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtdHlwZSAtbmV3XCI+TmV3PC9wPjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc29sZS5sb2coYXZhaWFibGVRdWFudGl0eSk7XHJcbiAgY29uc3Qgb25BZGRUb0NhcnQgPSAoZGF0YSkgPT4ge1xyXG4gICAgaWYgKGF2YWlhYmxlUXVhbnRpdHkgPT09IDApIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZGlzcGF0Y2goYWRkVG9DYXJ0KGRhdGEsIDEsIFwibm9uZVwiLCBcIm5vbmVcIikpO1xyXG4gICAgbWVzc2FnZS5zdWNjZXNzKFwiUHJvZHVjdCBhZGRlZCB0byBjYXJ0IHN1Y2Nlc3NmdWxseVwiKTtcclxuICB9O1xyXG4gIGNvbnN0IG9uQWRkVG9XaXNobGlzdCA9IChkYXRhKSA9PiB7XHJcbiAgICBpZiAocHJvZHVjdEluV2lzaGxpc3QpIHtcclxuICAgICAgZGlzcGF0Y2gocmVtb3ZlRnJvbVdpc2hsaXN0KGRhdGEuaWQpKTtcclxuICAgICAgcmV0dXJuIG1lc3NhZ2UuZXJyb3IoXCJQcm9kdWN0IHJlbW92ZWQgZnJvbSB3aXNobGlzdFwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRpc3BhdGNoKGFkZFRvV2lzaGxpc3QoZGF0YSkpO1xyXG4gICAgICByZXR1cm4gbWVzc2FnZS5zdWNjZXNzKFwiUHJvZHVjdCBhZGRlZCB0byB3aXNobGlzdCBzdWNjZXNzZnVsbHlcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCByZW5kZXJTdHlsZUNsYXNzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYXZhaWFsZVN0eWxlcyA9IFtcIm9uZVwiLCBcInR3b1wiLCBcInRocmVlXCJdO1xyXG4gICAgaWYgKGF2YWlhbGVTdHlsZXMuaW5jbHVkZXMocHJvZHVjdFN0eWxlKSkge1xyXG4gICAgICBpZiAoIXByb2R1Y3RTdHlsZSB8fCBwcm9kdWN0U3R5bGUgPT09IFwib25lXCIpIHtcclxuICAgICAgICByZXR1cm4gXCItc3R5bGUtb25lXCI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFwiLXN0eWxlLVwiICsgcHJvZHVjdFN0eWxlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gXCItc3R5bGUtb25lXCI7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBzaG93TW9kYWwgPSAoKSA9PiB7XHJcbiAgICBzZXRWaXNpYmxlKHRydWUpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKGUpID0+IHtcclxuICAgIHNldFZpc2libGUoZmFsc2UpO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlSW1hZ2VMb2FkZWQgPSAoKSA9PiB7XHJcbiAgICBzZXRJbWFnZUxvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcbiAgcmV0dXJuIGRhdGEgPyAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YHByb2R1Y3QgJHtyZW5kZXJTdHlsZUNsYXNzKCl9YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWltYWdlXCI+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XHJcbiAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyh7IGxvYWRpbmc6IGltYWdlTG9hZGluZyB9KX0+XHJcbiAgICAgICAgICAgICAge2RhdGEudGh1bWJJbWFnZSAmJlxyXG4gICAgICAgICAgICAgICAgZGF0YS50aHVtYkltYWdlLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZD17aGFuZGxlSW1hZ2VMb2FkZWR9XHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiUHJvZHVjdCBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAge2ltYWdlTG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1pbWFnZS1sb2FkaW5nXCI+XHJcbiAgICAgICAgICAgICAgPFNwaW4gc2l6ZT1cImxhcmdlXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAge3JlbmRlclByb2R1Y3RUeXBlKCl9XHJcbiAgICAgICAgICB7cHJvZHVjdFN0eWxlID09PSBcInR3b1wiID8gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtYnV0dG9uLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXAgdGl0bGU9XCJRdWljayB2aWV3XCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Nob3dNb2RhbH0gdHlwZT1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9zZWFyY2hcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwXHJcbiAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgIHByb2R1Y3RJbldpc2hsaXN0ID8gXCJSZW1vdmUgZnJvbSB3aXNobGlzdFwiIDogXCJBZGQgdG8gd2lzaGxpc3RcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHJvZHVjdC1hdHcgJHtjbGFzc05hbWVzKHtcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IHByb2R1Y3RJbldpc2hsaXN0LFxyXG4gICAgICAgICAgICAgICAgICB9KX1gfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9XaXNobGlzdChkYXRhKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9oZWFydF9hbHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgIDxUb29sdGlwIHRpdGxlPVwiQWRkIHRvIGNhcnRcIj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2F2YWlhYmxlUXVhbnRpdHkgPT09IDB9XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NhcnQoZGF0YSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25fYmFnX2FsdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICB7IXByb2R1Y3RTdHlsZSB8fCBwcm9kdWN0U3R5bGUgPT09IFwib25lXCIgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICBwcm9kdWN0SW5XaXNobGlzdCA/IFwiUmVtb3ZlIGZyb20gd2lzaGxpc3RcIiA6IFwiQWRkIHRvIHdpc2hsaXN0XCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHByb2R1Y3QtYXR3ICR7Y2xhc3NOYW1lcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBwcm9kdWN0SW5XaXNobGlzdCxcclxuICAgICAgICAgICAgICAgICAgfSl9YH1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICBzaGFwZT1cImNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9XaXNobGlzdChkYXRhKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9oZWFydF9hbHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG5cclxuICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Nob3dNb2RhbH0gY2xhc3NOYW1lPVwicHJvZHVjdC1xdlwiPlxyXG4gICAgICAgICAgICAgICAgUXVpY2sgdmlld1xyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb250ZW50XCI+XHJcbiAgICAgICAgICA8TGlua1xyXG4gICAgICAgICAgICBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0L1tzbHVnXWB9XHJcbiAgICAgICAgICAgIGFzPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgYC9wcm9kdWN0LyR7ZGF0YS5zbHVnfWB9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInByb2R1Y3QtbmFtZVwiPntkYXRhLm5hbWV9PC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LXJhdGVcIj5cclxuICAgICAgICAgICAgPFJhdGUgZGVmYXVsdFZhbHVlPXtkYXRhLnJhdGV9IGRpc2FibGVkIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtcmF0ZS1xdWFudGl0eVwiPih7ZGF0YS5yYXRlfSk8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb250ZW50X19mb290ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRlbnRfX2Zvb3Rlci1wcmljZVwiPlxyXG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJwcm9kdWN0LXByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5kaXNjb3VudFxyXG4gICAgICAgICAgICAgICAgICA/IGZvcm1hdEN1cnJlbmN5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgZGF0YS5wcmljZSAtIGRhdGEuZGlzY291bnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBsb2NhbGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVuY3lcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgIDogZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSwgbG9jYWxlcywgY3VycmVuY3kpfVxyXG4gICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAge2RhdGEuZGlzY291bnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e2Zvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UsIGxvY2FsZXMsIGN1cnJlbmN5KX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHshcHJvZHVjdFN0eWxlIHx8IHByb2R1Y3RTdHlsZSA9PT0gXCJvbmVcIiA/IChcclxuICAgICAgICAgICAgICA8VG9vbHRpcCB0aXRsZT1cIkFkZCB0byBjYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthdmFpYWJsZVF1YW50aXR5ID09PSAwfVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcm9kdWN0LWF0Y1wiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgc2hhcGU9XCJjaXJjbGVcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFRvQ2FydChkYXRhKX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiaWNvbl9iYWdfYWx0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtwcm9kdWN0U3R5bGUgPT09IFwidGhyZWVcIiA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWJ1dHRvbi1ncm91cFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1idXR0b24tZ3JvdXBfX3dyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxUb29sdGlwIHBsYWNlbWVudD1cInRvcFwiIHRpdGxlPVwiUXVpY2sgdmlld1wiPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Nob3dNb2RhbH0gc2hhcGU9XCJjaXJjbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uX3NlYXJjaFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9Ub29sdGlwPlxyXG4gICAgICAgICAgICAgICAgPFRvb2x0aXBcclxuICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCJcclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RJbldpc2hsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiUmVtb3ZlIGZyb20gd2lzaGxpc3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIkFkZCB0byB3aXNobGlzdFwiXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHNoYXBlPVwiY2lyY2xlXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9kdWN0LWF0dyAke2NsYXNzTmFtZXMoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBwcm9kdWN0SW5XaXNobGlzdCxcclxuICAgICAgICAgICAgICAgICAgICB9KX1gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQWRkVG9XaXNobGlzdChkYXRhKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImljb25faGVhcnRfYWx0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJ0b3BcIiB0aXRsZT1cIkFkZCB0byBjYXJ0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YXZhaWFibGVRdWFudGl0eSA9PT0gMH1cclxuICAgICAgICAgICAgICAgICAgICBzaGFwZT1cImNpcmNsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25BZGRUb0NhcnQoZGF0YSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJpY29uX2JhZ19hbHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvVG9vbHRpcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxNb2RhbFxyXG4gICAgICAgIGZvb3Rlcj17bnVsbH1cclxuICAgICAgICBhZnRlckNsb3NlPXtoYW5kbGVDYW5jZWx9XHJcbiAgICAgICAgb25DYW5jZWw9e2hhbmRsZUNhbmNlbH1cclxuICAgICAgICB2aXNpYmxlPXt2aXNpYmxlfVxyXG4gICAgICAgIHdpZHRoPXs4NTB9XHJcbiAgICAgID5cclxuICAgICAgICA8U2hvcFF1aWNrVmlldyBzZXRNb2RhbFZpc2libGU9e3NldFZpc2libGV9IGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApIDogKFxyXG4gICAgPFNrZWxldG9uIGFjdGl2ZSAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oUHJvZHVjdCk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSYXRlLCBCdXR0b24sIFJhZGlvLCBQcm9ncmVzcywgbWVzc2FnZSwgQnJlYWRjcnVtYiB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuLy8gaW1wb3J0IENvdW50ZG93biwgeyB6ZXJvUGFkIH0gZnJvbSBcInJlYWN0LWNvdW50ZG93blwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuXHJcbmltcG9ydCB7IGZvcm1hdEN1cnJlbmN5IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi91dGlsc1wiO1xyXG5pbXBvcnQgeyBhZGRUb0NhcnQgfSBmcm9tIFwiLi4vLi4vLi4vcmVkdXgvYWN0aW9ucy9jYXJ0QWN0aW9uc1wiO1xyXG5pbXBvcnQgeyBjaGVja0F2YWlhYmxlUXVhbnRpdHlUb0FkZCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vc2hvcFV0aWxzXCI7XHJcbmltcG9ydCBRdWFudGl0eVNlbGVjdG9yIGZyb20gXCIuLi8uLi9jb250cm9scy9RdWFudGl0eVNlbGVjdG9yXCI7XHJcbi8vIGltcG9ydCBQcm9kdWN0R3VhcmFudGVlZCBmcm9tIFwiLi4vZWxlbWVudHMvUHJvZHVjdEd1YXJhbnRlZWRcIjtcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3REZXRhaWxDb250ZW50T25lKHtcclxuICBkYXRhLFxyXG4gIG9uQWRkZWRUb0NhcnQsXHJcbiAgaGlkZUd1YXJhbnRlZWQsXHJcbiAgcXVhbnRpdHlDb250cm9sbGVyTm9Sb3VuZCxcclxuICBzaG93Q291bnRkb3duLFxyXG59KSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtxdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2N1cnJlbnRDb2xvciwgc2V0Q3VycmVudENvbG9yXSA9IHVzZVN0YXRlKFwibm9uZVwiKTtcclxuICBjb25zdCBbY3VycmVudFNpemUsIHNldEN1cnJlbnRTaXplXSA9IHVzZVN0YXRlKFwibm9uZVwiKTtcclxuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsUmVkdWNlcik7XHJcbiAgY29uc3QgY2FydFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5jYXJ0UmVkdWNlcik7XHJcbiAgY29uc3QgYXZhaWFibGVRdWFudGl0eSA9IGNoZWNrQXZhaWFibGVRdWFudGl0eVRvQWRkKGNhcnRTdGF0ZSwgZGF0YSk7XHJcbiAgY29uc3QgeyBjdXJyZW5jeSwgbG9jYWxlcyB9ID0gZ2xvYmFsU3RhdGUuY3VycmVuY3k7XHJcbiAgY29uc3Qgb25BZGRQcm9kdWN0VG9DYXJ0ID0gKGRhdGEpID0+IHtcclxuICAgIGlmIChhdmFpYWJsZVF1YW50aXR5ID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGRpc3BhdGNoKGFkZFRvQ2FydChkYXRhLCBxdWFudGl0eSwgY3VycmVudENvbG9yLCBjdXJyZW50U2l6ZSkpO1xyXG4gICAgb25BZGRlZFRvQ2FydCAmJiBvbkFkZGVkVG9DYXJ0KCk7XHJcbiAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJQcm9kdWN0IGFkZGVkIHRvIGNhcnQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gIH07XHJcbiAgLy8gY29uc3Qgb25DaG9vc2VTaXplID0gKGUpID0+IHtcclxuICAvLyAgIHNldEN1cnJlbnRTaXplKGUudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9O1xyXG4gIC8vIGNvbnN0IG9uQ2hvb3NlQ29sb3IgPSAoZSkgPT4ge1xyXG4gIC8vICAgc2V0Q3VycmVudENvbG9yKGUudGFyZ2V0LnZhbHVlKTtcclxuICAvLyB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnQtb25lXCI+XHJcbiAgICAgIDxoMz57ZGF0YS5uYW1lfTwvaDM+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudC1vbmUtcmF0ZVwiPlxyXG4gICAgICAgIDxSYXRlIGRpc2FibGVkIGRlZmF1bHRWYWx1ZT17ZGF0YS5yYXRlfSAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnQtb25lLXJldmlldy1jb3VudFwiPlxyXG4gICAgICAgICAgLSB7ZGF0YS5yYXRlfSBSZXZpZXdzXHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50LW9uZS1wcmljZVwiPlxyXG4gICAgICAgIDxoNT5cclxuICAgICAgICAgIHtkYXRhLmRpc2NvdW50XHJcbiAgICAgICAgICAgID8gZm9ybWF0Q3VycmVuY3koZGF0YS5wcmljZSAtIGRhdGEuZGlzY291bnQsIGxvY2FsZXMsIGN1cnJlbmN5KVxyXG4gICAgICAgICAgICA6IGZvcm1hdEN1cnJlbmN5KGRhdGEucHJpY2UsIGxvY2FsZXMsIGN1cnJlbmN5KX1cclxuICAgICAgICA8L2g1PlxyXG4gICAgICAgIHtkYXRhLmRpc2NvdW50ICYmIChcclxuICAgICAgICAgIDxzcGFuPntmb3JtYXRDdXJyZW5jeShkYXRhLnByaWNlLCBsb2NhbGVzLCBjdXJyZW5jeSl9PC9zcGFuPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50LW9uZS1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEV4Y2VwdHVyaSBpbGxvXHJcbiAgICAgICAgcG9zc2ltdXMgcXVhZSB0ZW5ldHVyLiBQb3JybyBhbGlxdWFtIHF1YWVyYXQgZG9sb3J1bSBwYXJpYXR1ciBtb2xlc3RpYXNcclxuICAgICAgICBjb21tb2RpIGlwc2FcclxuICAgICAgPC9wPlxyXG4gICAgICA8QnJlYWRjcnVtYiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1icmVhZGNydW1iXCIgc2VwYXJhdG9yPVwiPlwiPlxyXG4gICAgICAgIDxCcmVhZGNydW1iLkl0ZW0+SG9tZTwvQnJlYWRjcnVtYi5JdGVtPlxyXG4gICAgICAgIDxCcmVhZGNydW1iLkl0ZW0+UHJvZHVjdDwvQnJlYWRjcnVtYi5JdGVtPlxyXG4gICAgICAgIDxCcmVhZGNydW1iLkl0ZW0+e2RhdGEuY2F0ZWdvcnl9PC9CcmVhZGNydW1iLkl0ZW0+XHJcbiAgICAgICAgPEJyZWFkY3J1bWIuSXRlbT57ZGF0YS5zdWJDYXRlZ29yeX08L0JyZWFkY3J1bWIuSXRlbT5cclxuICAgICAgICA8QnJlYWRjcnVtYi5JdGVtPntkYXRhLm5hbWV9PC9CcmVhZGNydW1iLkl0ZW0+XHJcbiAgICAgIDwvQnJlYWRjcnVtYj5cclxuICAgICAgey8qIHtzaG93Q291bnRkb3duICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50LW9uZS1jb3VudGRvd25cIj5cclxuICAgICAgICAgICAgPGgzPkh1cnJ5IFVwICEgU2FsZXMgZW5kIGluIDo8L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtZGV0YWlsLWNvbnRlbnQtb25lLWNvdW50ZG93bl9faXRlbXNcIj5cclxuICAgICAgICAgICAgICA8Q291bnRkb3duXHJcbiAgICAgICAgICAgICAgICBkYXRlPXtEYXRlLm5vdygpICsgMTAwMDAwMDAwfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyZXI9eyh7IGRheXMsIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBjb21wbGV0ZWQgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudC1vbmUtY291bnRkb3duX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt6ZXJvUGFkKGRheXMpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ZGF5czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50LW9uZS1jb3VudGRvd25fX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3plcm9QYWQoaG91cnMpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+aG91cnM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudC1vbmUtY291bnRkb3duX19pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2Pnt6ZXJvUGFkKG1pbnV0ZXMpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+bWluczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50LW9uZS1jb3VudGRvd25fX2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+e3plcm9QYWQoc2Vjb25kcyl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5zZWNzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudC1vbmUtY291bnRkb3duX19zb2xkXCI+XHJcbiAgICAgICAgICAgICAgPFByb2dyZXNzIHBlcmNlbnQ9ezUwfSBzaG93SW5mbz17ZmFsc2V9IC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2xkLWRhdGFcIj5cclxuICAgICAgICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgICAgICAgQWxyZWFkeSBTb2xkOlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj4yMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgICAgICAgIFRvdGFsOlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj4yMDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9ICovfVxyXG4gICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWRldGFpbC1jb250ZW50LW9uZS12YXJpYXRpb25cIj5cclxuICAgICAgICB7ZGF0YS5zaXplICYmIChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmFyaWF0aW9uLWl0ZW0gLXNpemVcIj5cclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICA8cD5TaXplOjwvcD5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgb25DaGFuZ2U9e29uQ2hvb3NlU2l6ZX0gZGVmYXVsdFZhbHVlPVwiYVwiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEuc2l6ZS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b24ga2V5PXtpbmRleH0gdmFsdWU9e2l0ZW0ubmFtZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9SYWRpby5CdXR0b24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L1JhZGlvLkdyb3VwPlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtkYXRhLnZhcmlhdGlvbiAmJiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZhcmlhdGlvbi1pdGVtIC1jb2xvclwiPlxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxwPkNvbG9yOjwvcD5cclxuICAgICAgICAgICAgICA8UmFkaW8uR3JvdXAgb25DaGFuZ2U9e29uQ2hvb3NlQ29sb3J9IGRlZmF1bHRWYWx1ZT1cImFcIj5cclxuICAgICAgICAgICAgICAgIHtkYXRhLnZhcmlhdGlvbi5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxSYWRpby5CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLmNvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogaXRlbS5jb2xvckNvZGUgfX1cclxuICAgICAgICAgICAgICAgICAgPjwvUmFkaW8uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9SYWRpby5Hcm91cD5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1kZXRhaWwtY29udGVudC1vbmUtYWN0aW9uc1wiPlxyXG4gICAgICAgIDxRdWFudGl0eVNlbGVjdG9yXHJcbiAgICAgICAgICBub1JvdW5kPXtxdWFudGl0eUNvbnRyb2xsZXJOb1JvdW5kfVxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXsxfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyh2YWwpID0+IHNldFF1YW50aXR5KHZhbCl9XHJcbiAgICAgICAgICBzaXplPVwiYmlnXCJcclxuICAgICAgICAgIG1heD17Y2hlY2tBdmFpYWJsZVF1YW50aXR5VG9BZGQoY2FydFN0YXRlLCBkYXRhKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2Bwcm9kdWN0LWRldGFpbC1jb250ZW50LW9uZS1hdGMgJHtjbGFzc05hbWVzKHtcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IGF2YWlhYmxlUXVhbnRpdHkgPT09IDAsXHJcbiAgICAgICAgICB9KX1gfVxyXG4gICAgICAgICAgdHlwZT1cImxpbmtcIlxyXG4gICAgICAgICAgZGFuZ2VyXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17cHJvY2Vzcy5lbnYuUFVCTElDX1VSTCArIFwiL3Nob3AvY2hlY2tvdXRcIn0+QnV5IG5vdzwvTGluaz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkFkZFByb2R1Y3RUb0NhcnQoZGF0YSl9XHJcbiAgICAgICAgICBkaXNhYmxlZD17YXZhaWFibGVRdWFudGl0eSA9PT0gMH1cclxuICAgICAgICAgIGNsYXNzTmFtZT17YHByb2R1Y3QtZGV0YWlsLWNvbnRlbnQtb25lLWF0YyAke2NsYXNzTmFtZXMoe1xyXG4gICAgICAgICAgICBkaXNhYmxlZDogYXZhaWFibGVRdWFudGl0eSA9PT0gMCxcclxuICAgICAgICAgIH0pfWB9XHJcbiAgICAgICAgICB0eXBlPVwibGlua1wiXHJcbiAgICAgICAgICBkYW5nZXJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBBZGQgdG8gY2FydFxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIGNsYXNzTmFtZT17YHByb2R1Y3QtZGV0YWlsLWNvbnRlbnQtb25lLWF0YyAke2NsYXNzTmFtZXMoe1xyXG4gICAgICAgICAgICBkaXNhYmxlZDogYXZhaWFibGVRdWFudGl0eSA9PT0gMCxcclxuICAgICAgICAgIH0pfWB9XHJcbiAgICAgICAgICB0eXBlPVwibGlua1wiXHJcbiAgICAgICAgICBkYW5nZXJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtwcm9jZXNzLmVudi5QVUJMSUNfVVJMICsgXCIvc2hvcC9jaGVja291dFwifT5XaXNobGlzdDwvTGluaz5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiB7IWhpZGVHdWFyYW50ZWVkICYmIDxQcm9kdWN0R3VhcmFudGVlZCAvPn0gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFByb2R1Y3REZXRhaWxDb250ZW50T25lKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LW1hdGVyaWFsLXVpLWNhcm91c2VsXCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IGJhbm5lckRhdGEgZnJvbSBcIi4uLy4uL2RhdGEvc2xpZGVyLmpzb25cIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlID0gbWFrZVN0eWxlcyh7XHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICB3aWR0aDogXCJhdXRvXCIsXHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMjVweFwiXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgd2lkdGg6IFwiMTAwJVwiLFxyXG5cclxuICAgIGhlaWdodDogMjgwLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgQmFubmVycyA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGUoKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPENhcm91c2VsXHJcbiAgICAgICAgYXV0b1BsYXk9e3RydWV9XHJcbiAgICAgICAgYW5pbWF0aW9uPVwiZmFkZVwiXHJcbiAgICAgICAgaW5kaWNhdG9ycz17ZmFsc2V9XHJcbiAgICAgICAgbmF2QnV0dG9uc0Fsd2F5c1Zpc2libGU9e3RydWV9XHJcbiAgICAgICAgY3ljbGVOYXZpZ2F0aW9uPXt0cnVlfVxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9XHJcbiAgICAgICAgU3R5bGVzUHJvdmlkZXJcclxuICAgICAgICBuYXZCdXR0b25zUHJvcHM9e3tcclxuICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZmZmZcIixcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDAwMDA1MFwiLFxyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgd2lkdGg6IDUwLFxyXG4gICAgICAgICAgICBtYXJnaW46XCIwcHggMTBweFwiXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7YmFubmVyRGF0YVswXS5pbWFnZXMubWFwKChpbWFnZSkgPT4gKFxyXG4gICAgICAgICAgPGltZyBzcmM9e2ltYWdlfSBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFubmVycztcclxuIiwiaW1wb3J0IHsgQnV0dG9uLCBSb3csIENvbCwgRW1wdHksIFBhZ2luYXRpb24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xyXG5pbXBvcnQgeyBSaUFycm93TGVmdENpcmNsZUxpbmUsIFJpQXJyb3dSaWdodENpcmNsZUxpbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIjtcclxuXHJcbmltcG9ydCBQcm9kdWN0IGZyb20gXCIuLi9wcm9kdWN0L1Byb2R1Y3RcIjtcclxuaW1wb3J0IHtcclxuICBnZXRQcm9kdWN0c0J5RmlsdGVyLFxyXG4gIGdldFByb2R1Y3RzQnlTZWFyY2gsXHJcbn0gZnJvbSBcIi4uLy4uL2NvbW1vbi9zaG9wVXRpbHNcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgcHJvZHVjdHNDb250YWluZXIgPXtcclxuICBtYXJnaW5Cb3R0b206XCIzNXB4XCIsXHJcbiAgYm9yZGVyQm90dG9tOlwiMnB4IHNvbGlkICNkZGRcIixcclxuICBwYWRkaW5nQm90dG9tOlwiMjBweFwiXHJcbn1cclxuY29uc3QgYXJyb3dTdHlsZSA9IHtcclxuICBkaXNwbGF5OiBcImZsZXhcIixcclxuICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG59O1xyXG5jb25zdCBhcnJvd1NwYW4gPSB7XHJcbiAgY29sb3I6IFwiIzBhMGEyMTUwXCIsXHJcbiAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICBwYWRkaW5nOiBcIjVweFwiLFxyXG59O1xyXG5jb25zdCBhcnJvdyA9IHtcclxuICBmb250U2l6ZTogXCIzNXB4XCIsXHJcbn07XHJcblxyXG5mdW5jdGlvbiBTYW1wbGVOZXh0QXJyb3coeyBvbkNsaWNrIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17YXJyb3dTdHlsZX0gb25DbGljaz17b25DbGlja30+XHJcbiAgICAgIDxzcGFuIHN0eWxlPXthcnJvd1NwYW59PlxyXG4gICAgICAgIDxSaUFycm93UmlnaHRDaXJjbGVMaW5lIHN0eWxlPXthcnJvd30gLz5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU2FtcGxlUHJldkFycm93KHsgb25DbGljayB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e2Fycm93U3R5bGV9IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICA8c3BhbiBzdHlsZT17YXJyb3dTcGFufT5cclxuICAgICAgICA8UmlBcnJvd0xlZnRDaXJjbGVMaW5lIHN0eWxlPXthcnJvd30gLz5cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTGF0ZXN0UHJvZHVjdHMoe1xyXG4gIHByb2R1Y3RSZXNwb25zaXZlLFxyXG4gIGZpdmVDb2x1bW4sXHJcbiAgZGF0YSxcclxuICBwcm9kdWN0UGVyUGFnZSxcclxuICBwcm9kdWN0U3R5bGUsXHJcbn0pIHtcclxuICBjb25zdCBzaG9wU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3BSZWR1Y2VyKTtcclxuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsUmVkdWNlcik7XHJcbiAgY29uc3QgW2N1cnJlbnREYXRhLCBzZXRDdXJyZW50RGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZSgwKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGZpbHRlcmVkUHJvZHVjdCA9IGdldFByb2R1Y3RzQnlGaWx0ZXIoXHJcbiAgICAgIFsuLi5kYXRhXSxcclxuICAgICAgc2hvcFN0YXRlLnNvcnQsXHJcbiAgICAgIHNob3BTdGF0ZS5zdWJDYXRlZ29yeVxyXG4gICAgKTtcclxuICAgIHNldEN1cnJlbnREYXRhKGZpbHRlcmVkUHJvZHVjdCk7XHJcbiAgICBzZXRPZmZzZXQoMCk7XHJcbiAgfSwgW3Nob3BTdGF0ZSwgZGF0YV0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRQYWdlKDEpO1xyXG4gIH0sIFtnbG9iYWxTdGF0ZV0pO1xyXG4gIGNvbnN0IGl0ZW1SZW5kZXIgPSAoY3VycmVudCwgdHlwZSwgb3JpZ2luYWxFbGVtZW50KSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJwcmV2XCIpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhbCBmYS1hbmdsZS1sZWZ0XCIgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gXCJuZXh0XCIpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhbCBmYS1hbmdsZS1yaWdodFwiIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9yaWdpbmFsRWxlbWVudDtcclxuICB9O1xyXG4gIGNvbnN0IG9uQ2hhbmdlT2Zmc2V0ID0gKHBhZ2UsIHBhZ2VTaXplKSA9PiB7XHJcbiAgICBsZXQgb2Zmc2V0ID0gKHBhZ2UgLSAxKSAqIHBhZ2VTaXplO1xyXG4gICAgc2V0UGFnZShwYWdlKTtcclxuICAgIHNldE9mZnNldChvZmZzZXQpO1xyXG4gIH07XHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBuZXh0QXJyb3c6IDxTYW1wbGVOZXh0QXJyb3cgLz4sXHJcbiAgICBwcmV2QXJyb3c6IDxTYW1wbGVQcmV2QXJyb3cgLz4sXHJcbiAgICBydGw6IHRydWUsXHJcbiAgICBhcnJvd3M6IHRydWUsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICAvLyBhdXRvcGxheTogdHJ1ZSxcclxuICAgIC8vIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA5MjAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcbiAgY29uc3QgW3NvcnRQcm9kdWN0cywgc2V0U29ydFByb2R1Y3RzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHByb2R1Y3RIYW5kbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2dnbGVQcm9kdWN0ID0gc29ydFByb2R1Y3RzID8gXCJcIiA6IFwiI2xvbmdcIjtcclxuICAgIHNldFNvcnRQcm9kdWN0cyh0b2dnbGVQcm9kdWN0KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY29udGVudF9faGVhZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNvbnRlbnRfX2hlYWRlci1zaG93aW5nXCI+XHJcbiAgICAgICAgICA8aDQ+TGF0ZXN0IFByb2R1Y3RzPC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY29udGVudF9faGVhZGVyLWZpbHRlclwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtwcm9kdWN0SGFuZGxlfT5WaWV3IEFsbDwvQnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHshc29ydFByb2R1Y3RzID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jb250ZW50X19wcm9kdWN0XCIgc3R5bGU9e3Byb2R1Y3RzQ29udGFpbmVyfT5cclxuICAgICAgICAgIHshY3VycmVudERhdGEgPyAoXHJcbiAgICAgICAgICAgIDxFbXB0eSBkZXNjcmlwdGlvbj1cIk5vIHByb2R1Y3RzIGluIHRoaXMgY2F0ZWdvcnlcIiAvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICB7Y3VycmVudERhdGEubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1yZWxhdGVkLXByb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge2N1cnJlbnREYXRhLnNsaWNlKDAsIDgpLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNsaWRlci1pdGVtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm9kdWN0UmVzcG9uc2l2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0IGRhdGE9e3Byb2R1Y3R9IHByb2R1Y3RTdHlsZT17cHJvZHVjdFN0eWxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8RW1wdHkgLz5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNvbnRlbnRfX3Byb2R1Y3RcIiBpZD1cImxvbmdcIiBzdHlsZT17cHJvZHVjdHNDb250YWluZXJ9PlxyXG4gICAgICAgICAgeyFjdXJyZW50RGF0YSA/IChcclxuICAgICAgICAgICAgPEVtcHR5IGRlc2NyaXB0aW9uPVwiTm8gcHJvZHVjdHMgaW4gdGhpcyBjYXRlZ29yeVwiIC8+XHJcbiAgICAgICAgICApIDogKCBcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICB7Y3VycmVudERhdGEubGVuZ3RoID4gMCA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbeyB4czogNSwgc206IDUsIHhsOiAxNSwgeHhsOiAzMCB9LCAzMF19IHN0eWxlPXt7ZGlzcGxheTpcImZsZXhcIixmbGV4RmxvdzpcInJvdyB3cmFwXCIsIGp1c3RpZnlDb250ZW50Olwic3BhY2UtZXZlbmx5XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudERhdGFcclxuICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShvZmZzZXQsIG9mZnNldCArIHByb2R1Y3RQZXJQYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZml2ZS1jb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm9kdWN0UmVzcG9uc2l2ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0IGRhdGE9e3Byb2R1Y3R9IHByb2R1Y3RTdHlsZT17cHJvZHVjdFN0eWxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1Jvdz5cclxuICAgICAgICAgICAgICAgICAge2N1cnJlbnREYXRhLmxlbmd0aCA+PSBwcm9kdWN0UGVyUGFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFBhZ2luYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZXM9XCJzaG9wLWNvbnRlbnRfX3Byb2R1Y3QtcGFnaW5hdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q3VycmVudD17MX1cclxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ9e3BhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0b3RhbD17Y3VycmVudERhdGEubGVuZ3RofVxyXG4gICAgICAgICAgICAgICAgICAgICAgcGFnZVNpemU9e3Byb2R1Y3RQZXJQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbVJlbmRlcj17aXRlbVJlbmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsocGFnZSwgcGFnZVNpemUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlT2Zmc2V0KHBhZ2UsIHBhZ2VTaXplKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPEVtcHR5IC8+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF0ZXN0UHJvZHVjdHM7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNob3BDb250ZW50SGVhZGVyIGZyb20gXCIuL1Nob3BDb250ZW50SGVhZGVyXCI7XHJcbmltcG9ydCBMYXRlc3RQcm9kdWN0cyBmcm9tIFwiLi9MYXRlc3RQcm9kdWN0c1wiO1xyXG5pbXBvcnQgVHJhbmRpbmdQb2R1Y3RzIGZyb20gXCIuL1RyYW5kaW5nUHJvZHVjdHNcIjtcclxuXHJcbmZ1bmN0aW9uIFNob3BDb250ZW50KHtcclxuICBmaXZlQ29sdW1uLFxyXG4gIHByb2R1Y3RSZXNwb25zaXZlLFxyXG4gIGRhdGEsXHJcbiAgcHJvZHVjdFBlclBhZ2UsXHJcbiAgcHJvZHVjdFN0eWxlLFxyXG59KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jb250ZW50XCI+XHJcbiAgICAgIDxTaG9wQ29udGVudEhlYWRlciBwcm9kdWN0UGVyUGFnZT17cHJvZHVjdFBlclBhZ2V9IGRhdGE9e2RhdGF9IC8+XHJcbiAgICAgIDxMYXRlc3RQcm9kdWN0cyBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRhaW5lclwiXHJcbiAgICAgICAgcHJvZHVjdFN0eWxlPXtwcm9kdWN0U3R5bGV9XHJcbiAgICAgICAgZml2ZUNvbHVtbj17Zml2ZUNvbHVtbn1cclxuICAgICAgICBwcm9kdWN0UmVzcG9uc2l2ZT17cHJvZHVjdFJlc3BvbnNpdmV9XHJcbiAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICBwcm9kdWN0UGVyUGFnZT17cHJvZHVjdFBlclBhZ2V9XHJcbiAgICAgIC8+XHJcbiAgICA8VHJhbmRpbmdQb2R1Y3RzXHJcbiAgICBwcm9kdWN0U3R5bGU9e3Byb2R1Y3RTdHlsZX1cclxuICAgIGZpdmVDb2x1bW49e2ZpdmVDb2x1bW59XHJcbiAgICBwcm9kdWN0UmVzcG9uc2l2ZT17cHJvZHVjdFJlc3BvbnNpdmV9XHJcbiAgICBkYXRhPXtkYXRhfVxyXG4gICAgcHJvZHVjdFBlclBhZ2U9e3Byb2R1Y3RQZXJQYWdlfVxyXG4gICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2hvcENvbnRlbnQpO1xyXG4iLCJpbXBvcnQgeyBTZWxlY3QgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuXHJcbmltcG9ydCB7IHNldFNvcnQgfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy9zaG9wQWN0aW9uc1wiO1xyXG5cclxuZnVuY3Rpb24gU2hvcENvbnRlbnRIZWFkZXIoeyBkYXRhLCBwcm9kdWN0UGVyUGFnZSB9KSB7XHJcbiAgY29uc3QgeyBPcHRpb24gfSA9IFNlbGVjdDtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3Qgc2hvcFN0YXRlID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5zaG9wUmVkdWNlcik7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBkaXNwYXRjaChzZXRTb3J0KHZhbHVlKSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNvbnRlbnRfX2hlYWRlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY29udGVudF9faGVhZGVyLXNob3dpbmdcIj5cclxuICAgICAgICB7LyogPGg0PlxyXG4gICAgICAgICAgTGF0ZXN0IFByb2R1Y3RzXHJcbiAgICAgICAgPC9oND4gKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY29udGVudF9faGVhZGVyLWZpbHRlclwiPlxyXG4gICAgICAgIDxwPkZpbHRlciBieTo8L3A+XHJcbiAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2hvcC1jb250ZW50X19oZWFkZXItZmlsdGVyX19zZWxlY3RcIlxyXG4gICAgICAgICAgZGVmYXVsdFZhbHVlPXtzaG9wU3RhdGUuc29ydH1cclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAyNTAgLyAxNiArIFwiZW1cIiB9fVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiZGVmYXVsdFwiPkRlZmF1bHQ8L09wdGlvbj5cclxuICAgICAgICAgIDxPcHRpb24gdmFsdWU9XCJsb3dIaWdoXCI+UHJpY2U6IExvdyB0byBIaWdoPC9PcHRpb24+XHJcbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiaGlnaExvd1wiPlByaWNlOiBIaWdoIHRvIExvdzwvT3B0aW9uPlxyXG4gICAgICAgICAgPE9wdGlvbiB2YWx1ZT1cImF6XCI+QSB0byBaPC9PcHRpb24+XHJcbiAgICAgICAgICA8T3B0aW9uIHZhbHVlPVwiemFcIj5aIHRvIEE8L09wdGlvbj5cclxuICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWFjdC5tZW1vKFNob3BDb250ZW50SGVhZGVyKTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG4vLyBpbXBvcnQgU2hvcFNpZGViYXIgZnJvbSBcIi4vU2hvcFNpZGViYXJcIjtcclxuaW1wb3J0IFNob3BDb250ZW50IGZyb20gXCIuL1Nob3BDb250ZW50XCI7XHJcbi8vIGltcG9ydCBTaG9wUXVpY2tWaWV3IGZyb20gXCIuL1Nob3BRdWlja1ZpZXdcIjtcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tIFwiLi4vb3RoZXIvQ29udGFpbmVyXCI7XHJcblxyXG5mdW5jdGlvbiBTaG9wTGF5b3V0KHtcclxuICAvLyBzaG9wU2lkZWJhclJlc3BvbnNpdmUsXHJcbiAgLy8gc2hvcENvbnRlbnRSZXNwb25zaXZlLFxyXG4gIHByb2R1Y3RSZXNwb25zaXZlLFxyXG4gIGZpdmVDb2x1bW4sXHJcbiAgZGF0YSxcclxuICBwcm9kdWN0UGVyUGFnZSxcclxuICBwcm9kdWN0U3R5bGUsXHJcbiAgY29udGFpbmVyVHlwZSxcclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtbGF5b3V0XCI+XHJcbiAgICAgIDxDb250YWluZXIgdHlwZT17Y29udGFpbmVyVHlwZX0+XHJcbiAgICAgICAgey8qIDxSb3c+ICovfVxyXG4gICAgICAgICAgey8qIDxDb2wgY2xhc3NOYW1lPVwiZ3V0dGVyLXJvd1wiIHsuLi5zaG9wU2lkZWJhclJlc3BvbnNpdmV9PlxyXG4gICAgICAgICAgICA8U2hvcFNpZGViYXIgLz5cclxuICAgICAgICAgIDwvQ29sPiAqL31cclxuICAgICAgICAgIHsvKiA8Q29sIGNsYXNzTmFtZT1cImd1dHRlci1yb3dcIiB7Li4uc2hvcENvbnRlbnRSZXNwb25zaXZlfT4gKi99XHJcbiAgICAgICAgICAgIDxTaG9wQ29udGVudFxyXG4gICAgICAgICAgICAgIHByb2R1Y3RTdHlsZT17cHJvZHVjdFN0eWxlfVxyXG4gICAgICAgICAgICAgIHByb2R1Y3RQZXJQYWdlPXtwcm9kdWN0UGVyUGFnZX1cclxuICAgICAgICAgICAgICBmaXZlQ29sdW1uPXtmaXZlQ29sdW1ufVxyXG4gICAgICAgICAgICAgIHByb2R1Y3RSZXNwb25zaXZlPXtwcm9kdWN0UmVzcG9uc2l2ZX1cclxuICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgey8qIDwvQ29sPiAqL31cclxuICAgICAgICB7LyogPC9Sb3c+ICovfVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oU2hvcExheW91dCk7XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1zbGlja1wiO1xyXG5pbXBvcnQgeyBSb3csIENvbCB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5pbXBvcnQgUHJvZHVjdERldGFpbENvbnRlbnRPbmUgZnJvbSBcIi4uL3Byb2R1Y3REZXRhaWwvcHJvZHVjdERldGFpbENvbnRlbnQvUHJvZHVjdERldGFpbENvbnRlbnRPbmVcIjtcclxuXHJcbmZ1bmN0aW9uIFNob3BRdWlja1ZpZXcoeyBkYXRhLCBzZXRNb2RhbFZpc2libGUgfSkge1xyXG4gIGNvbnN0IHNsaWRlcjFTZXR0aW5ncyA9IHtcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgfTtcclxuICBjb25zdCBzbGlkZXIyU2V0dGluZ3MgPSB7XHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgIGNlbnRlclBhZGRpbmc6IFwiMHB4XCIsXHJcbiAgICBmb2N1c09uU2VsZWN0OiB0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogOTkyLFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNTc2LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfTtcclxuICBjb25zdCBbbmF2MSwgc2V0TmF2MV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtuYXYyLCBzZXROYXYyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3Qgb25BZGRlZFRvQ2FydCA9ICgpID0+IHtcclxuICAgIHNldE1vZGFsVmlzaWJsZShmYWxzZSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXF2XCI+XHJcbiAgICAgIDxSb3cgYWxpZ249XCJtaWRkbGVcIiBndXR0ZXI9ezUwfT5cclxuICAgICAgICA8Q29sIGNsYXNzTmFtZT1cImd1dHRlci1yb3dcIiBzcGFuPXsyNH0gc209ezI0fSBtZD17MTB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXF2X19zbGlkZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtcXZfX3NsaWRlLWJpZ1wiPlxyXG4gICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yPXtuYXYyfVxyXG4gICAgICAgICAgICAgICAgcmVmPXsoYykgPT4gc2V0TmF2MShjKX1cclxuICAgICAgICAgICAgICAgIHsuLi5zbGlkZXIxU2V0dGluZ3N9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2RhdGEgJiZcclxuICAgICAgICAgICAgICAgICAgZGF0YS5pbWFnZXMubWFwKChpbWcsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJzbGlkZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiUHJvZHVjdCBpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXF2X19zbGlkZS1zbWFsbFwiPlxyXG4gICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yPXtuYXYxfVxyXG4gICAgICAgICAgICAgICAgcmVmPXsoYykgPT4gc2V0TmF2MihjKX1cclxuICAgICAgICAgICAgICAgIHsuLi5zbGlkZXIyU2V0dGluZ3N9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2RhdGEgJiZcclxuICAgICAgICAgICAgICAgICAgZGF0YS5pbWFnZXMubWFwKChpbWcsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJzbGlkZXItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiUHJvZHVjdCBpbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ29sPlxyXG4gICAgICAgIDxDb2wgY2xhc3NOYW1lPVwiZ3V0dGVyLXJvd1wiIHNwYW49ezI0fSBzbT17MjR9IG1kPXsxNH0+XHJcbiAgICAgICAgICA8UHJvZHVjdERldGFpbENvbnRlbnRPbmVcclxuICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgaGlkZUd1YXJhbnRlZWRcclxuICAgICAgICAgICAgb25BZGRlZFRvQ2FydD17b25BZGRlZFRvQ2FydH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9Db2w+XHJcbiAgICAgIDwvUm93PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVhY3QubWVtbyhTaG9wUXVpY2tWaWV3KTtcclxuIiwiaW1wb3J0IHsgQnV0dG9uLCBSb3csIENvbCwgRW1wdHksIFBhZ2luYXRpb24gIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3Qtc2xpY2tcIjtcclxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcclxuaW1wb3J0IHsgUmlBcnJvd0xlZnRDaXJjbGVMaW5lLCBSaUFycm93UmlnaHRDaXJjbGVMaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCI7XHJcblxyXG5pbXBvcnQgUHJvZHVjdCBmcm9tIFwiLi4vcHJvZHVjdC9Qcm9kdWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgZ2V0UHJvZHVjdHNCeUZpbHRlcixcclxuICBnZXRQcm9kdWN0c0J5U2VhcmNoLFxyXG59IGZyb20gXCIuLi8uLi9jb21tb24vc2hvcFV0aWxzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcblxyXG5jb25zdCBwcm9kdWN0c0NvbnRhaW5lciA9e1xyXG4gIG1hcmdpbkJvdHRvbTpcIjM1cHhcIixcclxuICBib3JkZXJCb3R0b206XCIycHggc29saWQgI2RkZFwiLFxyXG4gIHBhZGRpbmdCb3R0b206XCIyMHB4XCJcclxufVxyXG5jb25zdCBhcnJvd1N0eWxlID0ge1xyXG4gIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbn07XHJcbmNvbnN0IGFycm93U3BhbiA9IHtcclxuICBjb2xvcjogXCIjMGEwYTIxNTBcIixcclxuICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gIHBhZGRpbmc6IFwiNXB4XCIsXHJcbn07XHJcbmNvbnN0IGFycm93ID0ge1xyXG4gIGZvbnRTaXplOiBcIjM1cHhcIixcclxufTtcclxuXHJcbmZ1bmN0aW9uIFNhbXBsZU5leHRBcnJvdyh7IG9uQ2xpY2sgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHN0eWxlPXthcnJvd1N0eWxlfSBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgPHNwYW4gc3R5bGU9e2Fycm93U3Bhbn0+XHJcbiAgICAgICAgPFJpQXJyb3dSaWdodENpcmNsZUxpbmUgc3R5bGU9e2Fycm93fSAvPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTYW1wbGVQcmV2QXJyb3coeyBvbkNsaWNrIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17YXJyb3dTdHlsZX0gb25DbGljaz17b25DbGlja30+XHJcbiAgICAgIDxzcGFuIHN0eWxlPXthcnJvd1NwYW59PlxyXG4gICAgICAgIDxSaUFycm93TGVmdENpcmNsZUxpbmUgc3R5bGU9e2Fycm93fSAvPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUcmFuZGluZ1BvZHVjdHMoe1xyXG4gIHByb2R1Y3RSZXNwb25zaXZlLFxyXG4gIGZpdmVDb2x1bW4sXHJcbiAgZGF0YSxcclxuICBwcm9kdWN0UGVyUGFnZSxcclxuICBwcm9kdWN0U3R5bGUsXHJcbn0pIHtcclxuICBjb25zdCBzaG9wU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnNob3BSZWR1Y2VyKTtcclxuICBjb25zdCBnbG9iYWxTdGF0ZSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuZ2xvYmFsUmVkdWNlcik7XHJcbiAgY29uc3QgW2N1cnJlbnREYXRhLCBzZXRDdXJyZW50RGF0YV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtvZmZzZXQsIHNldE9mZnNldF0gPSB1c2VTdGF0ZSgwKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGZpbHRlcmVkUHJvZHVjdCA9IGdldFByb2R1Y3RzQnlGaWx0ZXIoXHJcbiAgICAgIFsuLi5kYXRhXSxcclxuICAgICAgc2hvcFN0YXRlLnNvcnQsXHJcbiAgICAgIHNob3BTdGF0ZS5zdWJDYXRlZ29yeVxyXG4gICAgKTtcclxuICAgIHNldEN1cnJlbnREYXRhKGZpbHRlcmVkUHJvZHVjdCk7XHJcbiAgICBzZXRPZmZzZXQoMCk7XHJcbiAgfSwgW3Nob3BTdGF0ZSwgZGF0YV0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRQYWdlKDEpO1xyXG4gIH0sIFtnbG9iYWxTdGF0ZV0pO1xyXG4gIGNvbnN0IGl0ZW1SZW5kZXIgPSAoY3VycmVudCwgdHlwZSwgb3JpZ2luYWxFbGVtZW50KSA9PiB7XHJcbiAgICBpZiAodHlwZSA9PT0gXCJwcmV2XCIpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhbCBmYS1hbmdsZS1sZWZ0XCIgLz5cclxuICAgICAgICA8L2E+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gXCJuZXh0XCIpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8YT5cclxuICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhbCBmYS1hbmdsZS1yaWdodFwiIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9yaWdpbmFsRWxlbWVudDtcclxuICB9O1xyXG4gIGNvbnN0IG9uQ2hhbmdlT2Zmc2V0ID0gKHBhZ2UsIHBhZ2VTaXplKSA9PiB7XHJcbiAgICBsZXQgb2Zmc2V0ID0gKHBhZ2UgLSAxKSAqIHBhZ2VTaXplO1xyXG4gICAgc2V0UGFnZShwYWdlKTtcclxuICAgIHNldE9mZnNldChvZmZzZXQpO1xyXG4gIH07XHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBuZXh0QXJyb3c6IDxTYW1wbGVOZXh0QXJyb3cgLz4sXHJcbiAgICBwcmV2QXJyb3c6IDxTYW1wbGVQcmV2QXJyb3cgLz4sXHJcbiAgICBydGw6IHRydWUsXHJcbiAgICBhcnJvd3M6IHRydWUsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICAvLyBhdXRvcGxheTogdHJ1ZSxcclxuICAgIC8vIGF1dG9wbGF5U3BlZWQ6IDIwMDAsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBicmVha3BvaW50OiA5MjAsXHJcbiAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGJyZWFrcG9pbnQ6IDU3NixcclxuICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH07XHJcbiAgY29uc3QgW3NvcnRQcm9kdWN0cywgc2V0U29ydFByb2R1Y3RzXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHByb2R1Y3RIYW5kbGUgPSAoKSA9PiB7XHJcbiAgICBjb25zdCB0b2dnbGVQcm9kdWN0ID0gc29ydFByb2R1Y3RzID8gXCJcIiA6IFwiI2xvbmdcIjtcclxuICAgIHNldFNvcnRQcm9kdWN0cyh0b2dnbGVQcm9kdWN0KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY29udGVudF9faGVhZGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNvbnRlbnRfX2hlYWRlci1zaG93aW5nXCI+XHJcbiAgICAgICAgICA8aDQ+VHJhbmRpbmcgUHJvZHVjdHM8L2g0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1jb250ZW50X19oZWFkZXItZmlsdGVyXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Byb2R1Y3RIYW5kbGV9PlZpZXcgQWxsPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgeyFzb3J0UHJvZHVjdHMgP1xyXG4gICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWNvbnRlbnRfX3Byb2R1Y3RcIiBzdHlsZT17cHJvZHVjdHNDb250YWluZXJ9PlxyXG4gICAgeyFjdXJyZW50RGF0YSA/IChcclxuICAgICAgICA8RW1wdHkgZGVzY3JpcHRpb249XCJObyBwcm9kdWN0cyBpbiB0aGlzIGNhdGVnb3J5XCIgLz5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2N1cnJlbnREYXRhLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLXJlbGF0ZWQtcHJvZHVjdHNcIj5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfSBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge2N1cnJlbnREYXRhLnNsaWNlKDAsIDgpLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbGlkZXItaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgey4uLnByb2R1Y3RSZXNwb25zaXZlfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0IGRhdGE9e3Byb2R1Y3R9IHByb2R1Y3RTdHlsZT17cHJvZHVjdFN0eWxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxFbXB0eSAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PiA6IFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtY29udGVudF9fcHJvZHVjdFwiIHN0eWxlPXtwcm9kdWN0c0NvbnRhaW5lcn0gaWQ9XCJsb25nXCI+XHJcbiAgICAgIHshY3VycmVudERhdGEgPyAoXHJcbiAgICAgICAgPEVtcHR5IGRlc2NyaXB0aW9uPVwiTm8gcHJvZHVjdHMgaW4gdGhpcyBjYXRlZ29yeVwiIC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtjdXJyZW50RGF0YS5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxSb3cgZ3V0dGVyPXtbeyB4czogNSwgc206IDUsIHhsOiAxNSwgeHhsOiAzMCB9LCAzMF19ICBzdHlsZT17e2Rpc3BsYXk6XCJmbGV4XCIsZmxleEZsb3c6XCJyb3cgd3JhcFwiLCBqdXN0aWZ5Q29udGVudDpcInNwYWNlLWV2ZW5seVwifX0+XHJcbiAgICAgICAgICAgICAgICB7Y3VycmVudERhdGFcclxuICAgICAgICAgICAgICAgICAgLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgcHJvZHVjdFBlclBhZ2UpXHJcbiAgICAgICAgICAgICAgICAgIC5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPENvbFxyXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZpdmUtY29sXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHsuLi5wcm9kdWN0UmVzcG9uc2l2ZX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8UHJvZHVjdCBkYXRhPXtwcm9kdWN0fSBwcm9kdWN0U3R5bGU9e3Byb2R1Y3RTdHlsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9Sb3c+XHJcbiAgICAgICAgICAgICAge2N1cnJlbnREYXRhLmxlbmd0aCA+PSBwcm9kdWN0UGVyUGFnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWVzPVwic2hvcC1jb250ZW50X19wcm9kdWN0LXBhZ2luYXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0Q3VycmVudD17MX1cclxuICAgICAgICAgICAgICAgICAgY3VycmVudD17cGFnZX1cclxuICAgICAgICAgICAgICAgICAgdG90YWw9e2N1cnJlbnREYXRhLmxlbmd0aH1cclxuICAgICAgICAgICAgICAgICAgcGFnZVNpemU9e3Byb2R1Y3RQZXJQYWdlfVxyXG4gICAgICAgICAgICAgICAgICBpdGVtUmVuZGVyPXtpdGVtUmVuZGVyfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHBhZ2UsIHBhZ2VTaXplKSA9PiBvbkNoYW5nZU9mZnNldChwYWdlLCBwYWdlU2l6ZSl9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgPEVtcHR5IC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+fVxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRyYW5kaW5nUG9kdWN0cztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VicGFnZXNTaWRlYmFyKCkge1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdi8+XHJcbiAgKTtcclxufVxyXG4iLCJpbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmltcG9ydCBMYXlvdXRPbmUgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9MYXlvdXRPbmVcIjtcbmltcG9ydCBTaG9wTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL3Nob3AvU2hvcExheW91dFwiO1xuaW1wb3J0IHByb2R1Y3REYXRhIGZyb20gXCIuLi9kYXRhL3Byb2R1Y3QuanNvblwiO1xuaW1wb3J0IHVzZVByb2R1Y3REYXRhIGZyb20gXCIuLi9jb21tb24vdXNlUHJvZHVjdERhdGFcIjtcbmltcG9ydCBCYW5uZXJzIGZyb20gXCIuLi9jb21wb25lbnRzL3Nob3AvQmFubmVyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgZ2xvYmFsU3RhdGUgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmdsb2JhbFJlZHVjZXIpO1xuICBjb25zdCBkYXRhID0gdXNlUHJvZHVjdERhdGEoXG4gICAgcHJvZHVjdERhdGEsXG4gICAgZ2xvYmFsU3RhdGUuY2F0ZWdvcnksXG4gICAgcm91dGVyLnF1ZXJ5LnFcbiAgKTtcbiAgXG4gIHJldHVybiAoXG4gICAgPExheW91dE9uZSB0aXRsZT1cIkhvbWVcIiAgaGVhZGVyU3R5bGU9XCJ0d29cIj5cbiAgICAgIDxCYW5uZXJzIC8+XG4gICAgICA8U2hvcExheW91dFxuICAgICAgICBzaG9wQ29udGVudFJlc3BvbnNpdmU9e3sgeHM6IDI0LCBsZzogMjAgfX1cbiAgICAgICAgcHJvZHVjdFJlc3BvbnNpdmU9e3sgeHM6IDEyLCBzbTogOCwgbWQ6IDYsIHh4bDogNSB9fVxuICAgICAgICBwcm9kdWN0UGVyUGFnZT17MTB9XG4gICAgICAgIGRhdGE9e1suLi5kYXRhXX1cbiAgICAgIC8+XG4gICAgPC9MYXlvdXRPbmU+XG4gICk7XG59XG4iLCJpbXBvcnQgeyBDQVJUIH0gZnJvbSBcIi4uL2RlZmluZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRUb0NhcnQgPSAocHJvZHVjdCwgcXVhbnRpdHksIGNvbG9yLCBzaXplKSA9PiAoe1xyXG4gIHR5cGU6IENBUlQuQUREX1RPX0NBUlQsXHJcbiAgcHJvZHVjdCxcclxuICBxdWFudGl0eSxcclxuICBjb2xvcixcclxuICBzaXplLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChjYXJ0SWQpID0+ICh7XHJcbiAgdHlwZTogQ0FSVC5SRU1PVkVfRlJPTV9DQVJULFxyXG4gIGNhcnRJZCxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQWxsRnJvbUNhcnQgPSAoKSA9PiAoe1xyXG4gIHR5cGU6IENBUlQuUkVNT1ZFX0FMTF9GUk9NX0NBUlQsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlY3JlYXNlUXVhbnRpdHlDYXJ0ID0gKGNhcnRJZCkgPT4gKHtcclxuICB0eXBlOiBDQVJULkRFQ1JFQVNFX1FVQU5USVRZX0NBUlQsXHJcbiAgY2FydElkLFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbmNyZWFzZVF1YW50aXR5Q2FydCA9IChjYXJ0SWQpID0+ICh7XHJcbiAgdHlwZTogQ0FSVC5JTkNSRUFTRV9RVUFOVElUWV9DQVJULFxyXG4gIGNhcnRJZCxcclxufSk7XHJcbiIsImltcG9ydCB7IEdMT0JBTCB9IGZyb20gXCIuLi9kZWZpbmVzXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0R2xvYmFsTGFuZ3VhZ2UgPSAobGFuZykgPT4gKHtcclxuICB0eXBlOiBHTE9CQUwuU0VUX0xBTkdVQUdFLFxyXG4gIGxhbmcsXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldEdsb2JhbEN1cnJlbmN5ID0gKGN1cikgPT4gKHtcclxuICB0eXBlOiBHTE9CQUwuU0VUX0NVUlJFTkNZLFxyXG4gIGN1cixcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0R2xvYmFsQ2F0ZWdvcnkgPSAoY2F0ZWdvcnkpID0+ICh7XHJcbiAgdHlwZTogR0xPQkFMLlNFVF9DQVRFR09SWSxcclxuICBjYXRlZ29yeSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0R2xvYmFsU2VhcmNoID0gKGtleXdvcmQpID0+ICh7XHJcbiAgdHlwZTogR0xPQkFMLlNFVF9TRUFSQ0gsXHJcbiAga2V5d29yZCxcclxufSk7XHJcbiIsImltcG9ydCB7IFNIT1AgfSBmcm9tIFwiLi4vZGVmaW5lc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNldFNvcnQgPSAoc29ydFR5cGUpID0+ICh7XHJcbiAgdHlwZTogU0hPUC5TRVRfU09SVCxcclxuICBzb3J0VHlwZSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0U3ViQ2F0ZWdvcnkgPSAoc3ViQ2F0ZWdvcnkpID0+ICh7XHJcbiAgdHlwZTogU0hPUC5TRVRfU1VCQ0FURUdPUlksXHJcbiAgc3ViQ2F0ZWdvcnksXHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBXSVNITElTVCB9IGZyb20gXCIuLi9kZWZpbmVzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkVG9XaXNobGlzdCA9IChwcm9kdWN0KSA9PiAoe1xyXG4gIHR5cGU6IFdJU0hMSVNULkFERF9UT19XSVNITElTVCxcclxuICBwcm9kdWN0LFxyXG59KTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW1vdmVGcm9tV2lzaGxpc3QgPSAocHJvZHVjdElkKSA9PiAoe1xyXG4gIHR5cGU6IFdJU0hMSVNULlJFTU9WRV9GUk9NX1dJU0hMSVNULFxyXG4gIHByb2R1Y3RJZCxcclxufSk7XHJcbiIsImV4cG9ydCBjb25zdCBHTE9CQUwgPSB7XHJcbiAgU0VUX0xBTkdVQUdFOiBcIlNFVF9MQU5HVUFHRVwiLFxyXG4gIFNFVF9DVVJSRU5DWTogXCJTRVRfQ1VSUkVOQ1lcIixcclxuICBTRVRfQ0FURUdPUlk6IFwiU0VUX0NBVEVHT1JZXCIsXHJcbiAgU0VUX1NFQVJDSDogXCJTRVRfU0VBUkNIXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ0FSVCA9IHtcclxuICBBRERfVE9fQ0FSVDogXCJBRERfVE9fQ0FSVFwiLFxyXG4gIFJFTU9WRV9GUk9NX0NBUlQ6IFwiUkVNT1ZFX0ZST01fQ0FSVFwiLFxyXG4gIFJFTU9WRV9BTExfRlJPTV9DQVJUOiBcIlJFTU9WRV9BTExfRlJPTV9DQVJUXCIsXHJcbiAgREVDUkVBU0VfUVVBTlRJVFlfQ0FSVDogXCJERUNSRUFTRV9RVUFOVElUWV9DQVJUXCIsXHJcbiAgSU5DUkVBU0VfUVVBTlRJVFlfQ0FSVDogXCJJTkNSRUFTRV9RVUFOVElUWV9DQVJUXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgV0lTSExJU1QgPSB7XHJcbiAgQUREX1RPX1dJU0hMSVNUOiBcIkFERF9UT19XSVNITElTVFwiLFxyXG4gIFJFTU9WRV9GUk9NX1dJU0hMSVNUOiBcIlJFTU9WRV9GUk9NX1dJU0hMSVNUXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU0hPUCA9IHtcclxuICBTRVRfU09SVDogXCJTRVRfU09SVFwiLFxyXG4gIFNFVF9TVUJDQVRFR09SWTogXCJTRVRfU1VCQ0FURUdPUllcIixcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFudC1kZXNpZ24vaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwcm9wLXR5cGVzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXMtZXhhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicXVlcnlzdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvcmlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFpbGNoaW1wLXN1YnNjcmliZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tYXRlcmlhbC11aS1jYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlja1wiKTsiXSwic291cmNlUm9vdCI6IiJ9