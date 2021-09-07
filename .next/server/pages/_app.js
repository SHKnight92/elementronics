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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/common/withReduxStore.js":
/*!**************************************!*\
  !*** ./src/common/withReduxStore.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return withReduxStor; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../redux/store */ "./src/redux/store.js");
var _jsxFileName = "F:\\Elementronics\\src\\common\\withReduxStore.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const isServer = true;
const __NEXT_REDUX_STORE__ = "__NEXT_REDUX_STORE__";

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(_redux_store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_redux_store__WEBPACK_IMPORTED_MODULE_1__["initializeStore"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

function withReduxStor(App) {
  return class AppWithRedux extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
    static async getInitialProps(appContext) {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      const reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

      appContext.ctx.reduxStore = reduxStore;
      let appProps = {};

      if (typeof App.getInitialProps === "function") {
        appProps = await App.getInitialProps(appContext);
      }

      return _objectSpread(_objectSpread({}, appProps), {}, {
        initialReduxState: reduxStore.getState()
      });
    }

    constructor(props) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return __jsx(App, _extends({}, this.props, {
        reduxStore: this.reduxStore,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 14
        }
      }));
    }

  };
}
;

/***/ }),

/***/ "./src/components/other/Loading.js":
/*!*****************************************!*\
  !*** ./src/components/other/Loading.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loading; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "F:\\Elementronics\\src\\components\\other\\Loading.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Loading() {
  return __jsx("div", {
    className: "loading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Spin"], {
    tip: "Loading...",
    size: "large",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/lib/integration/react */ "redux-persist/lib/integration/react");
/* harmony import */ var redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ "./src/redux/store.js");
/* harmony import */ var _styles_antd_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/antd.less */ "./src/styles/antd.less");
/* harmony import */ var _styles_antd_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_antd_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/styles.scss */ "./src/styles/styles.scss");
/* harmony import */ var _styles_styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_other_Loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/other/Loading */ "./src/components/other/Loading.js");
/* harmony import */ var _common_withReduxStore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/withReduxStore */ "./src/common/withReduxStore.js");
var _jsxFileName = "F:\\Elementronics\\src\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









const App = ({
  Component,
  pageProps,
  reduxStore
}) => {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: reduxStore,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(redux_persist_lib_integration_react__WEBPACK_IMPORTED_MODULE_2__["PersistGate"], {
    loading: __jsx(_components_other_Loading__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 29
      }
    }),
    persistor: _redux_store__WEBPACK_IMPORTED_MODULE_3__["persistor"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_common_withReduxStore__WEBPACK_IMPORTED_MODULE_7__["default"])(App));

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

/***/ "./src/redux/reducers/cartReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/cartReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cartReducer; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _defines__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defines */ "./src/redux/defines.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = [];
function cartReducer(state = initialState, action) {
  const cartItem = state.find(item => item.cartId === action.cartId);
  const cartItemIndex = cartItem && state.indexOf(cartItem);

  switch (action.type) {
    case _defines__WEBPACK_IMPORTED_MODULE_1__["CART"].ADD_TO_CART:
      const pVaration = action.product.variation || action.product.variation && action.product.variation.length > 0;
      const pSize = action.product.size || action.product.size && action.product.size.length > 0;

      if (!pVaration && !pSize) {
        const addedCartItem = state.find(item => item.id === action.product.id);
        const addedCartItemIndex = addedCartItem && state.indexOf(addedCartItem);

        if (!addedCartItem) {
          return [...state, _objectSpread(_objectSpread({}, action.product), {}, {
            cartQuantity: action.quantity || 1,
            cartId: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])()
          })];
        } else {
          return [...state.slice(0, addedCartItemIndex), _objectSpread(_objectSpread({}, addedCartItem), {}, {
            cartQuantity: action.quantity ? addedCartItem.cartQuantity + action.quantity : addedCartItem.cartQuantity + 1
          }), ...state.slice(addedCartItemIndex + 1)];
        }
      } else {
        if (pVaration && !pSize) {
          const addedCartItemColor = state.find(item => item.id === action.product.id && item.selectedColor && item.selectedColor === action.color);
          const addedCartItemColorIndex = addedCartItemColor && state.indexOf(addedCartItemColor);

          if (!action.color || action.color === "none") {
            if (!addedCartItemColor) {
              return [...state, _objectSpread(_objectSpread({}, action.product), {}, {
                selectedColor: "none",
                cartQuantity: action.quantity || 1,
                cartId: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])()
              })];
            } else {
              return [...state.slice(0, addedCartItemColorIndex), _objectSpread(_objectSpread({}, addedCartItemColor), {}, {
                cartQuantity: action.quantity ? addedCartItemColor.cartQuantity + action.quantity : addedCartItemColor.cartQuantity + 1
              }), ...state.slice(addedCartItemColorIndex + 1)];
            }
          } else {
            if (!addedCartItemColor) {
              return [...state, _objectSpread(_objectSpread({}, action.product), {}, {
                cartQuantity: action.quantity || 1,
                selectedColor: action.color,
                cartId: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])()
              })];
            } else {
              return [...state.slice(0, addedCartItemColorIndex), _objectSpread(_objectSpread({}, addedCartItemColor), {}, {
                cartQuantity: action.quantity ? addedCartItemColor.cartQuantity + action.quantity : addedCartItemColor.cartQuantity + 1
              }), ...state.slice(addedCartItemColorIndex + 1)];
            }
          }
        } else if (!pVaration && pSize) {
          const addedCartItemSize = state.find(item => item.id === action.product.id && item.selectedSize && item.selectedSize === action.size);
          const addedCartItemSizeIndex = addedCartItemSize && state.indexOf(addedCartItemSize);

          if (!action.size || action.size === "none") {
            if (!addedCartItemSize) {
              return [...state, _objectSpread(_objectSpread({}, action.product), {}, {
                selectedSize: "none",
                cartQuantity: action.quantity || 1,
                cartId: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])()
              })];
            } else {
              return [...state.slice(0, addedCartItemSizeIndex), _objectSpread(_objectSpread({}, addedCartItemSize), {}, {
                cartQuantity: action.quantity ? addedCartItemSize.cartQuantity + action.quantity : addedCartItemSize.cartQuantity + 1
              }), ...state.slice(addedCartItemSizeIndex + 1)];
            }
          } else {
            if (!addedCartItemSize) {
              return [...state, _objectSpread(_objectSpread({}, action.product), {}, {
                cartQuantity: action.quantity || 1,
                selectedSize: action.size,
                cartId: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])()
              })];
            } else {
              return [...state.slice(0, addedCartItemSizeIndex), _objectSpread(_objectSpread({}, addedCartItemSize), {}, {
                cartQuantity: action.quantity ? addedCartItemSize.cartQuantity + action.quantity : addedCartItemSize.cartQuantity + 1
              }), ...state.slice(addedCartItemSizeIndex + 1)];
            }
          }
        } else if (pVaration && pSize) {
          const addedCartItemSizeColor = state.find(item => item.id === action.product.id && item.selectedSize && item.selectedSize === action.size && item.selectedColor && item.selectedColor === action.color);
          const addedCartItemSizeColorIndex = addedCartItemSizeColor && state.indexOf(addedCartItemSizeColor);

          if ((!action.color || action.color === "none") && (!action.size || action.size === "none")) {
            if (!addedCartItemSizeColor) {
              return [...state, _objectSpread(_objectSpread({}, action.product), {}, {
                selectedColor: "none",
                selectedSize: "none",
                cartQuantity: action.quantity || 1,
                cartId: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])()
              })];
            } else {
              return [...state.slice(0, addedCartItemSizeColorIndex), _objectSpread(_objectSpread({}, addedCartItemSizeColor), {}, {
                cartQuantity: action.quantity ? addedCartItemSizeColor.cartQuantity + action.quantity : addedCartItemSizeColor.cartQuantity + 1
              }), ...state.slice(addedCartItemSizeColorIndex + 1)];
            }
          } else if (action.color && (!action.size || action.size === "none")) {
            if (!addedCartItemSizeColor) {
              return [...state, _objectSpread(_objectSpread({}, action.product), {}, {
                cartQuantity: action.quantity || 1,
                selectedColor: action.color,
                selectedSize: "none",
                cartId: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])()
              })];
            } else {
              return [...state.slice(0, addedCartItemSizeColorIndex), _objectSpread(_objectSpread({}, addedCartItemSizeColor), {}, {
                cartQuantity: action.quantity ? addedCartItemSizeColor.cartQuantity + action.quantity : addedCartItemSizeColor.cartQuantity + 1
              }), ...state.slice(addedCartItemSizeColorIndex + 1)];
            }
          } else if (action.size && (!action.color || action.color === "none")) {
            if (!addedCartItemSizeColor) {
              return [...state, _objectSpread(_objectSpread({}, action.product), {}, {
                cartQuantity: action.quantity || 1,
                selectedColor: "none",
                selectedSize: action.size,
                cartId: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])()
              })];
            } else {
              return [...state.slice(0, addedCartItemSizeColorIndex), _objectSpread(_objectSpread({}, addedCartItemSizeColor), {}, {
                cartQuantity: action.quantity ? addedCartItemSizeColor.cartQuantity + action.quantity : addedCartItemSizeColor.cartQuantity + 1
              }), ...state.slice(addedCartItemSizeColorIndex + 1)];
            }
          } else {
            if (!addedCartItemSizeColor) {
              return [...state, _objectSpread(_objectSpread({}, action.product), {}, {
                cartQuantity: action.quantity || 1,
                selectedColor: action.color,
                selectedSize: action.size,
                cartId: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])()
              })];
            } else {
              return [...state.slice(0, addedCartItemSizeColorIndex), _objectSpread(_objectSpread({}, addedCartItemSizeColor), {}, {
                cartQuantity: action.quantity ? addedCartItemSizeColor.cartQuantity + action.quantity : addedCartItemSizeColor.cartQuantity + 1
              }), ...state.slice(addedCartItemSizeColorIndex + 1)];
            }
          }

          return;
        }
      }

    case _defines__WEBPACK_IMPORTED_MODULE_1__["CART"].REMOVE_FROM_CART:
      return [...state.slice(0, cartItemIndex), ...state.slice(cartItemIndex + 1)];

    case _defines__WEBPACK_IMPORTED_MODULE_1__["CART"].REMOVE_ALL_FROM_CART:
      return [];

    case _defines__WEBPACK_IMPORTED_MODULE_1__["CART"].INCREASE_QUANTITY_CART:
      return [...state.slice(0, cartItemIndex), _objectSpread(_objectSpread({}, cartItem), {}, {
        cartQuantity: cartItem.cartQuantity + 1
      }), ...state.slice(cartItemIndex + 1)];

    case _defines__WEBPACK_IMPORTED_MODULE_1__["CART"].DECREASE_QUANTITY_CART:
      if (cartItem.cartQuantity < 2) {
        return;
      }

      return [...state.slice(0, cartItemIndex), _objectSpread(_objectSpread({}, cartItem), {}, {
        cartQuantity: cartItem.cartQuantity - 1
      }), ...state.slice(cartItemIndex + 1)];

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/reducers/globalReducer.js":
/*!*********************************************!*\
  !*** ./src/redux/reducers/globalReducer.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defines */ "./src/redux/defines.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  language: "en",
  currency: {
    locales: "us-US",
    currency: "USD"
  },
  category: "clothing",
  keyword: ""
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case _defines__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].SET_LANGUAGE:
      return _objectSpread(_objectSpread({}, state), {}, {
        language: action.lang
      });

    case _defines__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].SET_CURRENCY:
      return _objectSpread(_objectSpread({}, state), {}, {
        currency: {
          locales: action.cur === "JPY" ? "jp-JP" : action.cur === "VND" ? "vn-VN" : "en-EN",
          currency: action.cur
        }
      });

    case _defines__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].SET_CATEGORY:
      return _objectSpread(_objectSpread({}, state), {}, {
        category: action.category
      });

    case _defines__WEBPACK_IMPORTED_MODULE_0__["GLOBAL"].SET_SEARCH:
      return _objectSpread(_objectSpread({}, state), {}, {
        keyword: action.keyword
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (globalReducer);

/***/ }),

/***/ "./src/redux/reducers/rootReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/rootReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cartReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartReducer */ "./src/redux/reducers/cartReducer.js");
/* harmony import */ var _globalReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./globalReducer */ "./src/redux/reducers/globalReducer.js");
/* harmony import */ var _wishlistReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wishlistReducer */ "./src/redux/reducers/wishlistReducer.js");
/* harmony import */ var _shopReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shopReducer */ "./src/redux/reducers/shopReducer.js");





const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  cartReducer: _cartReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  globalReducer: _globalReducer__WEBPACK_IMPORTED_MODULE_2__["default"],
  wishlistReducer: _wishlistReducer__WEBPACK_IMPORTED_MODULE_3__["default"],
  shopReducer: _shopReducer__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/redux/reducers/shopReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/shopReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defines */ "./src/redux/defines.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  sort: "default",
  subCategory: ""
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case _defines__WEBPACK_IMPORTED_MODULE_0__["SHOP"].SET_SORT:
      return _objectSpread(_objectSpread({}, state), {}, {
        sort: action.sortType
      });

    case _defines__WEBPACK_IMPORTED_MODULE_0__["SHOP"].SET_SUBCATEGORY:
      return _objectSpread(_objectSpread({}, state), {}, {
        subCategory: action.subCategory
      });

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (shopReducer);

/***/ }),

/***/ "./src/redux/reducers/wishlistReducer.js":
/*!***********************************************!*\
  !*** ./src/redux/reducers/wishlistReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return wishlistReducer; });
/* harmony import */ var _defines__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defines */ "./src/redux/defines.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = [];
function wishlistReducer(state = initialState, action) {
  const wishlistItem = state.find(item => item.id === action.productId);
  const wishlistItemIndex = wishlistItem && state.indexOf(wishlistItem);

  switch (action.type) {
    case _defines__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].ADD_TO_WISHLIST:
      const addedWishlistItem = state.find(item => item.id === action.product.id);
      const addedWishlistItemIndex = addedWishlistItem && state.indexOf(addedWishlistItem);

      if (!addedWishlistItem) {
        return [...state, _objectSpread({}, action.product)];
      }

    case _defines__WEBPACK_IMPORTED_MODULE_0__["WISHLIST"].REMOVE_FROM_WISHLIST:
      return [...state.slice(0, wishlistItemIndex), ...state.slice(wishlistItemIndex + 1)];

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: initializeStore, persistor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistor", function() { return persistor; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ "redux-persist");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/lib/storage */ "redux-persist/lib/storage");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_persist_lib_stateReconciler_autoMergeLevel2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist/lib/stateReconciler/autoMergeLevel2 */ "redux-persist/lib/stateReconciler/autoMergeLevel2");
/* harmony import */ var redux_persist_lib_stateReconciler_autoMergeLevel2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_stateReconciler_autoMergeLevel2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/rootReducer */ "./src/redux/reducers/rootReducer.js");







const persistConfig = {
  key: "root",
  storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default.a,
  stateReconciler: redux_persist_lib_stateReconciler_autoMergeLevel2__WEBPACK_IMPORTED_MODULE_5___default.a,
  blacklist: ["globalReducer", "shopReducer"]
};
const pReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_2__["persistReducer"])(persistConfig, _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_6__["default"]);
const createdStore = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(pReducer, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a)));
const initializeStore = (initialState = {}) => {
  return createdStore;
};
const persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_2__["persistStore"])(createdStore);

/***/ }),

/***/ "./src/styles/antd.less":
/*!******************************!*\
  !*** ./src/styles/antd.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/styles/styles.scss":
/*!********************************!*\
  !*** ./src/styles/styles.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/lib/integration/react":
/*!******************************************************!*\
  !*** external "redux-persist/lib/integration/react" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/integration/react");

/***/ }),

/***/ "redux-persist/lib/stateReconciler/autoMergeLevel2":
/*!********************************************************************!*\
  !*** external "redux-persist/lib/stateReconciler/autoMergeLevel2" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/stateReconciler/autoMergeLevel2");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi93aXRoUmVkdXhTdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9vdGhlci9Mb2FkaW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9kZWZpbmVzLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy9jYXJ0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvZ2xvYmFsUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMvcm9vdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3JlZHVjZXJzL3Nob3BSZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWR1eC9yZWR1Y2Vycy93aXNobGlzdFJlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZHV4L3N0b3JlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvaW50ZWdyYXRpb24vcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1wZXJzaXN0L2xpYi9zdGF0ZVJlY29uY2lsZXIvYXV0b01lcmdlTGV2ZWwyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXVpZFwiIl0sIm5hbWVzIjpbImlzU2VydmVyIiwiX19ORVhUX1JFRFVYX1NUT1JFX18iLCJnZXRPckNyZWF0ZVN0b3JlIiwiaW5pdGlhbFN0YXRlIiwiaW5pdGlhbGl6ZVN0b3JlIiwid2luZG93Iiwid2l0aFJlZHV4U3RvciIsIkFwcCIsIkFwcFdpdGhSZWR1eCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiYXBwQ29udGV4dCIsInJlZHV4U3RvcmUiLCJjdHgiLCJhcHBQcm9wcyIsImluaXRpYWxSZWR1eFN0YXRlIiwiZ2V0U3RhdGUiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwicmVuZGVyIiwiTG9hZGluZyIsInBhZ2VQcm9wcyIsInBlcnNpc3RvciIsIndpdGhSZWR1eFN0b3JlIiwiR0xPQkFMIiwiU0VUX0xBTkdVQUdFIiwiU0VUX0NVUlJFTkNZIiwiU0VUX0NBVEVHT1JZIiwiU0VUX1NFQVJDSCIsIkNBUlQiLCJBRERfVE9fQ0FSVCIsIlJFTU9WRV9GUk9NX0NBUlQiLCJSRU1PVkVfQUxMX0ZST01fQ0FSVCIsIkRFQ1JFQVNFX1FVQU5USVRZX0NBUlQiLCJJTkNSRUFTRV9RVUFOVElUWV9DQVJUIiwiV0lTSExJU1QiLCJBRERfVE9fV0lTSExJU1QiLCJSRU1PVkVfRlJPTV9XSVNITElTVCIsIlNIT1AiLCJTRVRfU09SVCIsIlNFVF9TVUJDQVRFR09SWSIsImNhcnRSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjYXJ0SXRlbSIsImZpbmQiLCJpdGVtIiwiY2FydElkIiwiY2FydEl0ZW1JbmRleCIsImluZGV4T2YiLCJ0eXBlIiwicFZhcmF0aW9uIiwicHJvZHVjdCIsInZhcmlhdGlvbiIsImxlbmd0aCIsInBTaXplIiwic2l6ZSIsImFkZGVkQ2FydEl0ZW0iLCJpZCIsImFkZGVkQ2FydEl0ZW1JbmRleCIsImNhcnRRdWFudGl0eSIsInF1YW50aXR5IiwidXVpZHY0Iiwic2xpY2UiLCJhZGRlZENhcnRJdGVtQ29sb3IiLCJzZWxlY3RlZENvbG9yIiwiY29sb3IiLCJhZGRlZENhcnRJdGVtQ29sb3JJbmRleCIsImFkZGVkQ2FydEl0ZW1TaXplIiwic2VsZWN0ZWRTaXplIiwiYWRkZWRDYXJ0SXRlbVNpemVJbmRleCIsImFkZGVkQ2FydEl0ZW1TaXplQ29sb3IiLCJhZGRlZENhcnRJdGVtU2l6ZUNvbG9ySW5kZXgiLCJsYW5ndWFnZSIsImN1cnJlbmN5IiwibG9jYWxlcyIsImNhdGVnb3J5Iiwia2V5d29yZCIsImdsb2JhbFJlZHVjZXIiLCJsYW5nIiwiY3VyIiwicm9vdFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJ3aXNobGlzdFJlZHVjZXIiLCJzaG9wUmVkdWNlciIsInNvcnQiLCJzdWJDYXRlZ29yeSIsInNvcnRUeXBlIiwid2lzaGxpc3RJdGVtIiwicHJvZHVjdElkIiwid2lzaGxpc3RJdGVtSW5kZXgiLCJhZGRlZFdpc2hsaXN0SXRlbSIsImFkZGVkV2lzaGxpc3RJdGVtSW5kZXgiLCJwZXJzaXN0Q29uZmlnIiwia2V5Iiwic3RvcmFnZSIsInN0YXRlUmVjb25jaWxlciIsImF1dG9NZXJnZUxldmVsMiIsImJsYWNrbGlzdCIsInBSZWR1Y2VyIiwicGVyc2lzdFJlZHVjZXIiLCJjcmVhdGVkU3RvcmUiLCJjcmVhdGVTdG9yZSIsImNvbXBvc2VXaXRoRGV2VG9vbHMiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsInBlcnNpc3RTdG9yZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFn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d0ZBSEc7QUFJcEJDLFdBQVMsRUFBRSxDQUFDLGVBQUQsRUFBa0IsYUFBbEI7QUFKUyxDQUF0QjtBQU9BLE1BQU1DLFFBQVEsR0FBR0Msb0VBQWMsQ0FBQ1AsYUFBRCxFQUFnQlosNkRBQWhCLENBQS9CO0FBQ0EsTUFBTW9CLFlBQVksR0FBR0MseURBQVcsQ0FDOUJILFFBRDhCLEVBRTlCSSxvRkFBbUIsQ0FBQ0MsNkRBQWUsQ0FBQ0Msa0RBQUQsQ0FBaEIsQ0FGVyxDQUFoQztBQUtPLE1BQU10RyxlQUFlLEdBQUcsQ0FBQ0QsWUFBWSxHQUFHLEVBQWhCLEtBQXVCO0FBQ3BELFNBQU9tRyxZQUFQO0FBQ0QsQ0FGTTtBQUdBLE1BQU0vRSxTQUFTLEdBQUdvRixrRUFBWSxDQUFDTCxZQUFELENBQTlCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCUCxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSxnRTs7Ozs7Ozs7Ozs7QUNBQSw4RTs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxpQyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IHsgaW5pdGlhbGl6ZVN0b3JlIH0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XHJcblxyXG5jb25zdCBpc1NlcnZlciA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCI7XHJcbmNvbnN0IF9fTkVYVF9SRURVWF9TVE9SRV9fID0gXCJfX05FWFRfUkVEVVhfU1RPUkVfX1wiO1xyXG5cclxuZnVuY3Rpb24gZ2V0T3JDcmVhdGVTdG9yZShpbml0aWFsU3RhdGUpIHtcclxuICAvLyBBbHdheXMgbWFrZSBhIG5ldyBzdG9yZSBpZiBzZXJ2ZXIsIG90aGVyd2lzZSBzdGF0ZSBpcyBzaGFyZWQgYmV0d2VlbiByZXF1ZXN0c1xyXG4gIGlmIChpc1NlcnZlcikge1xyXG4gICAgcmV0dXJuIGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIHN0b3JlIGlmIHVuYXZhaWxhYmxlIG9uIHRoZSBjbGllbnQgYW5kIHNldCBpdCBvbiB0aGUgd2luZG93IG9iamVjdFxyXG4gIGlmICghd2luZG93W19fTkVYVF9SRURVWF9TVE9SRV9fXSkge1xyXG4gICAgd2luZG93W19fTkVYVF9SRURVWF9TVE9SRV9fXSA9IGluaXRpYWxpemVTdG9yZShpbml0aWFsU3RhdGUpO1xyXG4gIH1cclxuICByZXR1cm4gd2luZG93W19fTkVYVF9SRURVWF9TVE9SRV9fXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJlZHV4U3RvcihBcHApIHtcclxuICByZXR1cm4gY2xhc3MgQXBwV2l0aFJlZHV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCkge1xyXG4gICAgICAvLyBHZXQgb3IgQ3JlYXRlIHRoZSBzdG9yZSB3aXRoIGB1bmRlZmluZWRgIGFzIGluaXRpYWxTdGF0ZVxyXG4gICAgICAvLyBUaGlzIGFsbG93cyB5b3UgdG8gc2V0IGEgY3VzdG9tIGRlZmF1bHQgaW5pdGlhbFN0YXRlXHJcbiAgICAgIGNvbnN0IHJlZHV4U3RvcmUgPSBnZXRPckNyZWF0ZVN0b3JlKCk7XHJcblxyXG4gICAgICAvLyBQcm92aWRlIHRoZSBzdG9yZSB0byBnZXRJbml0aWFsUHJvcHMgb2YgcGFnZXNcclxuICAgICAgYXBwQ29udGV4dC5jdHgucmVkdXhTdG9yZSA9IHJlZHV4U3RvcmU7XHJcblxyXG4gICAgICBsZXQgYXBwUHJvcHMgPSB7fTtcclxuICAgICAgaWYgKHR5cGVvZiBBcHAuZ2V0SW5pdGlhbFByb3BzID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICBhcHBQcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoYXBwQ29udGV4dCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uYXBwUHJvcHMsXHJcbiAgICAgICAgaW5pdGlhbFJlZHV4U3RhdGU6IHJlZHV4U3RvcmUuZ2V0U3RhdGUoKSxcclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgIHRoaXMucmVkdXhTdG9yZSA9IGdldE9yQ3JlYXRlU3RvcmUocHJvcHMuaW5pdGlhbFJlZHV4U3RhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIDxBcHAgey4uLnRoaXMucHJvcHN9IHJlZHV4U3RvcmU9e3RoaXMucmVkdXhTdG9yZX0gLz47XHJcbiAgICB9XHJcbiAgfTtcclxufTtcclxuIiwiaW1wb3J0IHsgU3BpbiB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cclxuICAgICAgPFNwaW4gdGlwPVwiTG9hZGluZy4uLlwiIHNpemU9XCJsYXJnZVwiIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBQZXJzaXN0R2F0ZSB9IGZyb20gXCJyZWR1eC1wZXJzaXN0L2xpYi9pbnRlZ3JhdGlvbi9yZWFjdFwiO1xuXG5pbXBvcnQgeyBwZXJzaXN0b3IsIHN0b3JlIH0gZnJvbSBcIi4uL3JlZHV4L3N0b3JlXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvYW50ZC5sZXNzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGVzLnNjc3NcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL290aGVyL0xvYWRpbmdcIjtcbmltcG9ydCB3aXRoUmVkdXhTdG9yZSBmcm9tIFwiLi4vY29tbW9uL3dpdGhSZWR1eFN0b3JlXCI7XG5cblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJlZHV4U3RvcmUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxQcm92aWRlciBzdG9yZT17cmVkdXhTdG9yZX0+XG4gICAgICA8UGVyc2lzdEdhdGUgbG9hZGluZz17PExvYWRpbmcgLz59IHBlcnNpc3Rvcj17cGVyc2lzdG9yfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9QZXJzaXN0R2F0ZT5cbiAgICA8L1Byb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4U3RvcmUoQXBwKTtcbiIsImV4cG9ydCBjb25zdCBHTE9CQUwgPSB7XHJcbiAgU0VUX0xBTkdVQUdFOiBcIlNFVF9MQU5HVUFHRVwiLFxyXG4gIFNFVF9DVVJSRU5DWTogXCJTRVRfQ1VSUkVOQ1lcIixcclxuICBTRVRfQ0FURUdPUlk6IFwiU0VUX0NBVEVHT1JZXCIsXHJcbiAgU0VUX1NFQVJDSDogXCJTRVRfU0VBUkNIXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQ0FSVCA9IHtcclxuICBBRERfVE9fQ0FSVDogXCJBRERfVE9fQ0FSVFwiLFxyXG4gIFJFTU9WRV9GUk9NX0NBUlQ6IFwiUkVNT1ZFX0ZST01fQ0FSVFwiLFxyXG4gIFJFTU9WRV9BTExfRlJPTV9DQVJUOiBcIlJFTU9WRV9BTExfRlJPTV9DQVJUXCIsXHJcbiAgREVDUkVBU0VfUVVBTlRJVFlfQ0FSVDogXCJERUNSRUFTRV9RVUFOVElUWV9DQVJUXCIsXHJcbiAgSU5DUkVBU0VfUVVBTlRJVFlfQ0FSVDogXCJJTkNSRUFTRV9RVUFOVElUWV9DQVJUXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgV0lTSExJU1QgPSB7XHJcbiAgQUREX1RPX1dJU0hMSVNUOiBcIkFERF9UT19XSVNITElTVFwiLFxyXG4gIFJFTU9WRV9GUk9NX1dJU0hMSVNUOiBcIlJFTU9WRV9GUk9NX1dJU0hMSVNUXCIsXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgU0hPUCA9IHtcclxuICBTRVRfU09SVDogXCJTRVRfU09SVFwiLFxyXG4gIFNFVF9TVUJDQVRFR09SWTogXCJTRVRfU1VCQ0FURUdPUllcIixcclxufTtcclxuIiwiaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcclxuXHJcbmltcG9ydCB7IENBUlQgfSBmcm9tIFwiLi4vZGVmaW5lc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0gW107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXJ0UmVkdWNlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XHJcbiAgY29uc3QgY2FydEl0ZW0gPSBzdGF0ZS5maW5kKChpdGVtKSA9PiBpdGVtLmNhcnRJZCA9PT0gYWN0aW9uLmNhcnRJZCk7XHJcbiAgY29uc3QgY2FydEl0ZW1JbmRleCA9IGNhcnRJdGVtICYmIHN0YXRlLmluZGV4T2YoY2FydEl0ZW0pO1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQ0FSVC5BRERfVE9fQ0FSVDpcclxuICAgICAgY29uc3QgcFZhcmF0aW9uID1cclxuICAgICAgICBhY3Rpb24ucHJvZHVjdC52YXJpYXRpb24gfHxcclxuICAgICAgICAoYWN0aW9uLnByb2R1Y3QudmFyaWF0aW9uICYmIGFjdGlvbi5wcm9kdWN0LnZhcmlhdGlvbi5sZW5ndGggPiAwKTtcclxuICAgICAgY29uc3QgcFNpemUgPVxyXG4gICAgICAgIGFjdGlvbi5wcm9kdWN0LnNpemUgfHxcclxuICAgICAgICAoYWN0aW9uLnByb2R1Y3Quc2l6ZSAmJiBhY3Rpb24ucHJvZHVjdC5zaXplLmxlbmd0aCA+IDApO1xyXG4gICAgICBpZiAoIXBWYXJhdGlvbiAmJiAhcFNpemUpIHtcclxuICAgICAgICBjb25zdCBhZGRlZENhcnRJdGVtID0gc3RhdGUuZmluZChcclxuICAgICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSBhY3Rpb24ucHJvZHVjdC5pZFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgYWRkZWRDYXJ0SXRlbUluZGV4ID1cclxuICAgICAgICAgIGFkZGVkQ2FydEl0ZW0gJiYgc3RhdGUuaW5kZXhPZihhZGRlZENhcnRJdGVtKTtcclxuICAgICAgICBpZiAoIWFkZGVkQ2FydEl0ZW0pIHtcclxuICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLi4uYWN0aW9uLnByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgY2FydFF1YW50aXR5OiBhY3Rpb24ucXVhbnRpdHkgfHwgMSxcclxuICAgICAgICAgICAgICBjYXJ0SWQ6IHV1aWR2NCgpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgLi4uc3RhdGUuc2xpY2UoMCwgYWRkZWRDYXJ0SXRlbUluZGV4KSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC4uLmFkZGVkQ2FydEl0ZW0sXHJcbiAgICAgICAgICAgICAgY2FydFF1YW50aXR5OiBhY3Rpb24ucXVhbnRpdHlcclxuICAgICAgICAgICAgICAgID8gYWRkZWRDYXJ0SXRlbS5jYXJ0UXVhbnRpdHkgKyBhY3Rpb24ucXVhbnRpdHlcclxuICAgICAgICAgICAgICAgIDogYWRkZWRDYXJ0SXRlbS5jYXJ0UXVhbnRpdHkgKyAxLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAuLi5zdGF0ZS5zbGljZShhZGRlZENhcnRJdGVtSW5kZXggKyAxKSxcclxuICAgICAgICAgIF07XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChwVmFyYXRpb24gJiYgIXBTaXplKSB7XHJcbiAgICAgICAgICBjb25zdCBhZGRlZENhcnRJdGVtQ29sb3IgPSBzdGF0ZS5maW5kKFxyXG4gICAgICAgICAgICAoaXRlbSkgPT5cclxuICAgICAgICAgICAgICBpdGVtLmlkID09PSBhY3Rpb24ucHJvZHVjdC5pZCAmJlxyXG4gICAgICAgICAgICAgIGl0ZW0uc2VsZWN0ZWRDb2xvciAmJlxyXG4gICAgICAgICAgICAgIGl0ZW0uc2VsZWN0ZWRDb2xvciA9PT0gYWN0aW9uLmNvbG9yXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgY29uc3QgYWRkZWRDYXJ0SXRlbUNvbG9ySW5kZXggPVxyXG4gICAgICAgICAgICBhZGRlZENhcnRJdGVtQ29sb3IgJiYgc3RhdGUuaW5kZXhPZihhZGRlZENhcnRJdGVtQ29sb3IpO1xyXG4gICAgICAgICAgaWYgKCFhY3Rpb24uY29sb3IgfHwgYWN0aW9uLmNvbG9yID09PSBcIm5vbmVcIikge1xyXG4gICAgICAgICAgICBpZiAoIWFkZGVkQ2FydEl0ZW1Db2xvcikge1xyXG4gICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgLi4uYWN0aW9uLnByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBjYXJ0UXVhbnRpdHk6IGFjdGlvbi5xdWFudGl0eSB8fCAxLFxyXG4gICAgICAgICAgICAgICAgICBjYXJ0SWQ6IHV1aWR2NCgpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZS5zbGljZSgwLCBhZGRlZENhcnRJdGVtQ29sb3JJbmRleCksXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLmFkZGVkQ2FydEl0ZW1Db2xvcixcclxuICAgICAgICAgICAgICAgICAgY2FydFF1YW50aXR5OiBhY3Rpb24ucXVhbnRpdHlcclxuICAgICAgICAgICAgICAgICAgICA/IGFkZGVkQ2FydEl0ZW1Db2xvci5jYXJ0UXVhbnRpdHkgKyBhY3Rpb24ucXVhbnRpdHlcclxuICAgICAgICAgICAgICAgICAgICA6IGFkZGVkQ2FydEl0ZW1Db2xvci5jYXJ0UXVhbnRpdHkgKyAxLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLnNsaWNlKGFkZGVkQ2FydEl0ZW1Db2xvckluZGV4ICsgMSksXHJcbiAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKCFhZGRlZENhcnRJdGVtQ29sb3IpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgICBjYXJ0UXVhbnRpdHk6IGFjdGlvbi5xdWFudGl0eSB8fCAxLFxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yOiBhY3Rpb24uY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgIGNhcnRJZDogdXVpZHY0KCksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLnNsaWNlKDAsIGFkZGVkQ2FydEl0ZW1Db2xvckluZGV4KSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgLi4uYWRkZWRDYXJ0SXRlbUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICBjYXJ0UXVhbnRpdHk6IGFjdGlvbi5xdWFudGl0eVxyXG4gICAgICAgICAgICAgICAgICAgID8gYWRkZWRDYXJ0SXRlbUNvbG9yLmNhcnRRdWFudGl0eSArIGFjdGlvbi5xdWFudGl0eVxyXG4gICAgICAgICAgICAgICAgICAgIDogYWRkZWRDYXJ0SXRlbUNvbG9yLmNhcnRRdWFudGl0eSArIDEsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUuc2xpY2UoYWRkZWRDYXJ0SXRlbUNvbG9ySW5kZXggKyAxKSxcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICghcFZhcmF0aW9uICYmIHBTaXplKSB7XHJcbiAgICAgICAgICBjb25zdCBhZGRlZENhcnRJdGVtU2l6ZSA9IHN0YXRlLmZpbmQoXHJcbiAgICAgICAgICAgIChpdGVtKSA9PlxyXG4gICAgICAgICAgICAgIGl0ZW0uaWQgPT09IGFjdGlvbi5wcm9kdWN0LmlkICYmXHJcbiAgICAgICAgICAgICAgaXRlbS5zZWxlY3RlZFNpemUgJiZcclxuICAgICAgICAgICAgICBpdGVtLnNlbGVjdGVkU2l6ZSA9PT0gYWN0aW9uLnNpemVcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25zdCBhZGRlZENhcnRJdGVtU2l6ZUluZGV4ID1cclxuICAgICAgICAgICAgYWRkZWRDYXJ0SXRlbVNpemUgJiYgc3RhdGUuaW5kZXhPZihhZGRlZENhcnRJdGVtU2l6ZSk7XHJcbiAgICAgICAgICBpZiAoIWFjdGlvbi5zaXplIHx8IGFjdGlvbi5zaXplID09PSBcIm5vbmVcIikge1xyXG4gICAgICAgICAgICBpZiAoIWFkZGVkQ2FydEl0ZW1TaXplKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucHJvZHVjdCxcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTaXplOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgY2FydFF1YW50aXR5OiBhY3Rpb24ucXVhbnRpdHkgfHwgMSxcclxuICAgICAgICAgICAgICAgICAgY2FydElkOiB1dWlkdjQoKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUuc2xpY2UoMCwgYWRkZWRDYXJ0SXRlbVNpemVJbmRleCksXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLmFkZGVkQ2FydEl0ZW1TaXplLFxyXG4gICAgICAgICAgICAgICAgICBjYXJ0UXVhbnRpdHk6IGFjdGlvbi5xdWFudGl0eVxyXG4gICAgICAgICAgICAgICAgICAgID8gYWRkZWRDYXJ0SXRlbVNpemUuY2FydFF1YW50aXR5ICsgYWN0aW9uLnF1YW50aXR5XHJcbiAgICAgICAgICAgICAgICAgICAgOiBhZGRlZENhcnRJdGVtU2l6ZS5jYXJ0UXVhbnRpdHkgKyAxLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLnNsaWNlKGFkZGVkQ2FydEl0ZW1TaXplSW5kZXggKyAxKSxcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIWFkZGVkQ2FydEl0ZW1TaXplKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucHJvZHVjdCxcclxuICAgICAgICAgICAgICAgICAgY2FydFF1YW50aXR5OiBhY3Rpb24ucXVhbnRpdHkgfHwgMSxcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRTaXplOiBhY3Rpb24uc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgY2FydElkOiB1dWlkdjQoKSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUuc2xpY2UoMCwgYWRkZWRDYXJ0SXRlbVNpemVJbmRleCksXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLmFkZGVkQ2FydEl0ZW1TaXplLFxyXG4gICAgICAgICAgICAgICAgICBjYXJ0UXVhbnRpdHk6IGFjdGlvbi5xdWFudGl0eVxyXG4gICAgICAgICAgICAgICAgICAgID8gYWRkZWRDYXJ0SXRlbVNpemUuY2FydFF1YW50aXR5ICsgYWN0aW9uLnF1YW50aXR5XHJcbiAgICAgICAgICAgICAgICAgICAgOiBhZGRlZENhcnRJdGVtU2l6ZS5jYXJ0UXVhbnRpdHkgKyAxLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLnNsaWNlKGFkZGVkQ2FydEl0ZW1TaXplSW5kZXggKyAxKSxcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChwVmFyYXRpb24gJiYgcFNpemUpIHtcclxuICAgICAgICAgIGNvbnN0IGFkZGVkQ2FydEl0ZW1TaXplQ29sb3IgPSBzdGF0ZS5maW5kKFxyXG4gICAgICAgICAgICAoaXRlbSkgPT5cclxuICAgICAgICAgICAgICBpdGVtLmlkID09PSBhY3Rpb24ucHJvZHVjdC5pZCAmJlxyXG4gICAgICAgICAgICAgIGl0ZW0uc2VsZWN0ZWRTaXplICYmXHJcbiAgICAgICAgICAgICAgaXRlbS5zZWxlY3RlZFNpemUgPT09IGFjdGlvbi5zaXplICYmXHJcbiAgICAgICAgICAgICAgaXRlbS5zZWxlY3RlZENvbG9yICYmXHJcbiAgICAgICAgICAgICAgaXRlbS5zZWxlY3RlZENvbG9yID09PSBhY3Rpb24uY29sb3JcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25zdCBhZGRlZENhcnRJdGVtU2l6ZUNvbG9ySW5kZXggPVxyXG4gICAgICAgICAgICBhZGRlZENhcnRJdGVtU2l6ZUNvbG9yICYmIHN0YXRlLmluZGV4T2YoYWRkZWRDYXJ0SXRlbVNpemVDb2xvcik7XHJcbiAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICghYWN0aW9uLmNvbG9yIHx8IGFjdGlvbi5jb2xvciA9PT0gXCJub25lXCIpICYmXHJcbiAgICAgICAgICAgICghYWN0aW9uLnNpemUgfHwgYWN0aW9uLnNpemUgPT09IFwibm9uZVwiKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICghYWRkZWRDYXJ0SXRlbVNpemVDb2xvcikge1xyXG4gICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgLi4uYWN0aW9uLnByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZFNpemU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBjYXJ0UXVhbnRpdHk6IGFjdGlvbi5xdWFudGl0eSB8fCAxLFxyXG4gICAgICAgICAgICAgICAgICBjYXJ0SWQ6IHV1aWR2NCgpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZS5zbGljZSgwLCBhZGRlZENhcnRJdGVtU2l6ZUNvbG9ySW5kZXgpLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAuLi5hZGRlZENhcnRJdGVtU2l6ZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICBjYXJ0UXVhbnRpdHk6IGFjdGlvbi5xdWFudGl0eVxyXG4gICAgICAgICAgICAgICAgICAgID8gYWRkZWRDYXJ0SXRlbVNpemVDb2xvci5jYXJ0UXVhbnRpdHkgKyBhY3Rpb24ucXVhbnRpdHlcclxuICAgICAgICAgICAgICAgICAgICA6IGFkZGVkQ2FydEl0ZW1TaXplQ29sb3IuY2FydFF1YW50aXR5ICsgMSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZS5zbGljZShhZGRlZENhcnRJdGVtU2l6ZUNvbG9ySW5kZXggKyAxKSxcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGFjdGlvbi5jb2xvciAmJiAoIWFjdGlvbi5zaXplIHx8IGFjdGlvbi5zaXplID09PSBcIm5vbmVcIikpIHtcclxuICAgICAgICAgICAgaWYgKCFhZGRlZENhcnRJdGVtU2l6ZUNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAuLi5hY3Rpb24ucHJvZHVjdCxcclxuICAgICAgICAgICAgICAgICAgY2FydFF1YW50aXR5OiBhY3Rpb24ucXVhbnRpdHkgfHwgMSxcclxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRDb2xvcjogYWN0aW9uLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZFNpemU6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBjYXJ0SWQ6IHV1aWR2NCgpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZS5zbGljZSgwLCBhZGRlZENhcnRJdGVtU2l6ZUNvbG9ySW5kZXgpLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAuLi5hZGRlZENhcnRJdGVtU2l6ZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICBjYXJ0UXVhbnRpdHk6IGFjdGlvbi5xdWFudGl0eVxyXG4gICAgICAgICAgICAgICAgICAgID8gYWRkZWRDYXJ0SXRlbVNpemVDb2xvci5jYXJ0UXVhbnRpdHkgKyBhY3Rpb24ucXVhbnRpdHlcclxuICAgICAgICAgICAgICAgICAgICA6IGFkZGVkQ2FydEl0ZW1TaXplQ29sb3IuY2FydFF1YW50aXR5ICsgMSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZS5zbGljZShhZGRlZENhcnRJdGVtU2l6ZUNvbG9ySW5kZXggKyAxKSxcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKFxyXG4gICAgICAgICAgICBhY3Rpb24uc2l6ZSAmJlxyXG4gICAgICAgICAgICAoIWFjdGlvbi5jb2xvciB8fCBhY3Rpb24uY29sb3IgPT09IFwibm9uZVwiKVxyXG4gICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgIGlmICghYWRkZWRDYXJ0SXRlbVNpemVDb2xvcikge1xyXG4gICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgLi4uYWN0aW9uLnByb2R1Y3QsXHJcbiAgICAgICAgICAgICAgICAgIGNhcnRRdWFudGl0eTogYWN0aW9uLnF1YW50aXR5IHx8IDEsXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkQ29sb3I6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZFNpemU6IGFjdGlvbi5zaXplLFxyXG4gICAgICAgICAgICAgICAgICBjYXJ0SWQ6IHV1aWR2NCgpLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZS5zbGljZSgwLCBhZGRlZENhcnRJdGVtU2l6ZUNvbG9ySW5kZXgpLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAuLi5hZGRlZENhcnRJdGVtU2l6ZUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICBjYXJ0UXVhbnRpdHk6IGFjdGlvbi5xdWFudGl0eVxyXG4gICAgICAgICAgICAgICAgICAgID8gYWRkZWRDYXJ0SXRlbVNpemVDb2xvci5jYXJ0UXVhbnRpdHkgKyBhY3Rpb24ucXVhbnRpdHlcclxuICAgICAgICAgICAgICAgICAgICA6IGFkZGVkQ2FydEl0ZW1TaXplQ29sb3IuY2FydFF1YW50aXR5ICsgMSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZS5zbGljZShhZGRlZENhcnRJdGVtU2l6ZUNvbG9ySW5kZXggKyAxKSxcclxuICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIWFkZGVkQ2FydEl0ZW1TaXplQ29sb3IpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLmFjdGlvbi5wcm9kdWN0LFxyXG4gICAgICAgICAgICAgICAgICBjYXJ0UXVhbnRpdHk6IGFjdGlvbi5xdWFudGl0eSB8fCAxLFxyXG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZENvbG9yOiBhY3Rpb24uY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkU2l6ZTogYWN0aW9uLnNpemUsXHJcbiAgICAgICAgICAgICAgICAgIGNhcnRJZDogdXVpZHY0KCksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLnNsaWNlKDAsIGFkZGVkQ2FydEl0ZW1TaXplQ29sb3JJbmRleCksXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIC4uLmFkZGVkQ2FydEl0ZW1TaXplQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgIGNhcnRRdWFudGl0eTogYWN0aW9uLnF1YW50aXR5XHJcbiAgICAgICAgICAgICAgICAgICAgPyBhZGRlZENhcnRJdGVtU2l6ZUNvbG9yLmNhcnRRdWFudGl0eSArIGFjdGlvbi5xdWFudGl0eVxyXG4gICAgICAgICAgICAgICAgICAgIDogYWRkZWRDYXJ0SXRlbVNpemVDb2xvci5jYXJ0UXVhbnRpdHkgKyAxLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLnNsaWNlKGFkZGVkQ2FydEl0ZW1TaXplQ29sb3JJbmRleCArIDEpLFxyXG4gICAgICAgICAgICAgIF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGNhc2UgQ0FSVC5SRU1PVkVfRlJPTV9DQVJUOlxyXG4gICAgICByZXR1cm4gW1xyXG4gICAgICAgIC4uLnN0YXRlLnNsaWNlKDAsIGNhcnRJdGVtSW5kZXgpLFxyXG4gICAgICAgIC4uLnN0YXRlLnNsaWNlKGNhcnRJdGVtSW5kZXggKyAxKSxcclxuICAgICAgXTtcclxuICAgIGNhc2UgQ0FSVC5SRU1PVkVfQUxMX0ZST01fQ0FSVDpcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgY2FzZSBDQVJULklOQ1JFQVNFX1FVQU5USVRZX0NBUlQ6XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgLi4uc3RhdGUuc2xpY2UoMCwgY2FydEl0ZW1JbmRleCksXHJcbiAgICAgICAgeyAuLi5jYXJ0SXRlbSwgY2FydFF1YW50aXR5OiBjYXJ0SXRlbS5jYXJ0UXVhbnRpdHkgKyAxIH0sXHJcbiAgICAgICAgLi4uc3RhdGUuc2xpY2UoY2FydEl0ZW1JbmRleCArIDEpLFxyXG4gICAgICBdO1xyXG4gICAgY2FzZSBDQVJULkRFQ1JFQVNFX1FVQU5USVRZX0NBUlQ6XHJcbiAgICAgIGlmIChjYXJ0SXRlbS5jYXJ0UXVhbnRpdHkgPCAyKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgLi4uc3RhdGUuc2xpY2UoMCwgY2FydEl0ZW1JbmRleCksXHJcbiAgICAgICAgeyAuLi5jYXJ0SXRlbSwgY2FydFF1YW50aXR5OiBjYXJ0SXRlbS5jYXJ0UXVhbnRpdHkgLSAxIH0sXHJcbiAgICAgICAgLi4uc3RhdGUuc2xpY2UoY2FydEl0ZW1JbmRleCArIDEpLFxyXG4gICAgICBdO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBHTE9CQUwgfSBmcm9tIFwiLi4vZGVmaW5lc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGxhbmd1YWdlOiBcImVuXCIsXHJcbiAgY3VycmVuY3k6IHtcclxuICAgIGxvY2FsZXM6IFwidXMtVVNcIixcclxuICAgIGN1cnJlbmN5OiBcIlVTRFwiLFxyXG4gIH0sXHJcbiAgY2F0ZWdvcnk6IFwiY2xvdGhpbmdcIixcclxuICBrZXl3b3JkOiBcIlwiLFxyXG59O1xyXG5cclxuY29uc3QgZ2xvYmFsUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBHTE9CQUwuU0VUX0xBTkdVQUdFOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGxhbmd1YWdlOiBhY3Rpb24ubGFuZyxcclxuICAgICAgfTtcclxuICAgIGNhc2UgR0xPQkFMLlNFVF9DVVJSRU5DWTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBjdXJyZW5jeToge1xyXG4gICAgICAgICAgbG9jYWxlczpcclxuICAgICAgICAgICAgYWN0aW9uLmN1ciA9PT0gXCJKUFlcIlxyXG4gICAgICAgICAgICAgID8gXCJqcC1KUFwiXHJcbiAgICAgICAgICAgICAgOiBhY3Rpb24uY3VyID09PSBcIlZORFwiXHJcbiAgICAgICAgICAgICAgPyBcInZuLVZOXCJcclxuICAgICAgICAgICAgICA6IFwiZW4tRU5cIixcclxuICAgICAgICAgIGN1cnJlbmN5OiBhY3Rpb24uY3VyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEdMT0JBTC5TRVRfQ0FURUdPUlk6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2F0ZWdvcnk6IGFjdGlvbi5jYXRlZ29yeSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgR0xPQkFMLlNFVF9TRUFSQ0g6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAga2V5d29yZDogYWN0aW9uLmtleXdvcmQsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZ2xvYmFsUmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCI7XHJcblxyXG5pbXBvcnQgY2FydFJlZHVjZXIgZnJvbSBcIi4vY2FydFJlZHVjZXJcIjtcclxuaW1wb3J0IGdsb2JhbFJlZHVjZXIgZnJvbSBcIi4vZ2xvYmFsUmVkdWNlclwiO1xyXG5pbXBvcnQgd2lzaGxpc3RSZWR1Y2VyIGZyb20gXCIuL3dpc2hsaXN0UmVkdWNlclwiO1xyXG5pbXBvcnQgc2hvcFJlZHVjZXIgZnJvbSBcIi4vc2hvcFJlZHVjZXJcIjtcclxuXHJcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBjYXJ0UmVkdWNlcixcclxuICBnbG9iYWxSZWR1Y2VyLFxyXG4gIHdpc2hsaXN0UmVkdWNlcixcclxuICBzaG9wUmVkdWNlcixcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgU0hPUCB9IGZyb20gXCIuLi9kZWZpbmVzXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgc29ydDogXCJkZWZhdWx0XCIsXHJcbiAgc3ViQ2F0ZWdvcnk6IFwiXCIsXHJcbn07XHJcblxyXG5jb25zdCBzaG9wUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBTSE9QLlNFVF9TT1JUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHNvcnQ6IGFjdGlvbi5zb3J0VHlwZSxcclxuICAgICAgfTtcclxuICAgIGNhc2UgU0hPUC5TRVRfU1VCQ0FURUdPUlk6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgc3ViQ2F0ZWdvcnk6IGFjdGlvbi5zdWJDYXRlZ29yeSxcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBzdGF0ZTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzaG9wUmVkdWNlcjtcclxuIiwiaW1wb3J0IHsgV0lTSExJU1QgfSBmcm9tIFwiLi4vZGVmaW5lc1wiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0gW107XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXNobGlzdFJlZHVjZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xyXG4gIGNvbnN0IHdpc2hsaXN0SXRlbSA9IHN0YXRlLmZpbmQoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5wcm9kdWN0SWQpO1xyXG4gIGNvbnN0IHdpc2hsaXN0SXRlbUluZGV4ID0gd2lzaGxpc3RJdGVtICYmIHN0YXRlLmluZGV4T2Yod2lzaGxpc3RJdGVtKTtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFdJU0hMSVNULkFERF9UT19XSVNITElTVDpcclxuICAgICAgY29uc3QgYWRkZWRXaXNobGlzdEl0ZW0gPSBzdGF0ZS5maW5kKFxyXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLmlkID09PSBhY3Rpb24ucHJvZHVjdC5pZFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCBhZGRlZFdpc2hsaXN0SXRlbUluZGV4ID1cclxuICAgICAgICBhZGRlZFdpc2hsaXN0SXRlbSAmJiBzdGF0ZS5pbmRleE9mKGFkZGVkV2lzaGxpc3RJdGVtKTtcclxuICAgICAgaWYgKCFhZGRlZFdpc2hsaXN0SXRlbSkge1xyXG4gICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgLi4uYWN0aW9uLnByb2R1Y3QsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF07XHJcbiAgICAgIH1cclxuICAgIGNhc2UgV0lTSExJU1QuUkVNT1ZFX0ZST01fV0lTSExJU1Q6XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgLi4uc3RhdGUuc2xpY2UoMCwgd2lzaGxpc3RJdGVtSW5kZXgpLFxyXG4gICAgICAgIC4uLnN0YXRlLnNsaWNlKHdpc2hsaXN0SXRlbUluZGV4ICsgMSksXHJcbiAgICAgIF07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tIFwicmVkdXhcIjtcclxuaW1wb3J0IHRodW5rIGZyb20gXCJyZWR1eC10aHVua1wiO1xyXG5pbXBvcnQgeyBwZXJzaXN0U3RvcmUsIHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSBcInJlZHV4LXBlcnNpc3RcIjtcclxuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIjtcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIjtcclxuXHJcbmltcG9ydCBhdXRvTWVyZ2VMZXZlbDIgZnJvbSBcInJlZHV4LXBlcnNpc3QvbGliL3N0YXRlUmVjb25jaWxlci9hdXRvTWVyZ2VMZXZlbDJcIjtcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gXCIuL3JlZHVjZXJzL3Jvb3RSZWR1Y2VyXCI7XHJcblxyXG5jb25zdCBwZXJzaXN0Q29uZmlnID0ge1xyXG4gIGtleTogXCJyb290XCIsXHJcbiAgc3RvcmFnZTogc3RvcmFnZSxcclxuICBzdGF0ZVJlY29uY2lsZXI6IGF1dG9NZXJnZUxldmVsMixcclxuICBibGFja2xpc3Q6IFtcImdsb2JhbFJlZHVjZXJcIiwgXCJzaG9wUmVkdWNlclwiXSxcclxufTtcclxuXHJcbmNvbnN0IHBSZWR1Y2VyID0gcGVyc2lzdFJlZHVjZXIocGVyc2lzdENvbmZpZywgcm9vdFJlZHVjZXIpO1xyXG5jb25zdCBjcmVhdGVkU3RvcmUgPSBjcmVhdGVTdG9yZShcclxuICBwUmVkdWNlcixcclxuICBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSh0aHVuaykpXHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdGlhbGl6ZVN0b3JlID0gKGluaXRpYWxTdGF0ZSA9IHt9KSA9PiB7XHJcbiAgcmV0dXJuIGNyZWF0ZWRTdG9yZTtcclxufTtcclxuZXhwb3J0IGNvbnN0IHBlcnNpc3RvciA9IHBlcnNpc3RTdG9yZShjcmVhdGVkU3RvcmUpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1wZXJzaXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL2ludGVncmF0aW9uL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXBlcnNpc3QvbGliL3N0YXRlUmVjb25jaWxlci9hdXRvTWVyZ2VMZXZlbDJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtcGVyc2lzdC9saWIvc3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=