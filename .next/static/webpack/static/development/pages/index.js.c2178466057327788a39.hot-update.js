webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/item */ "./components/item.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\onur.yerlikaya\\Desktop\\Example\\covid19-app-next\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var HomePage = function HomePage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      data = _useState[0],
      setData = _useState[1];

  ;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fetch("https://corona.lmao.ninja/all").then(function (data) {
      return data.json();
    }).then(function (cor) {
      setData([cor]);
    })["catch"](function (error) {
      console.log(error);
    });
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, data.map(function (item) {
    return __jsx(_components_item__WEBPACK_IMPORTED_MODULE_1__["default"], {
      data: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 28
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ })

})
//# sourceMappingURL=index.js.c2178466057327788a39.hot-update.js.map