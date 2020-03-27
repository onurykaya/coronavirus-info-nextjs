webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/item.js":
/*!****************************!*\
  !*** ./components/item.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\onur.yerlikaya\\Desktop\\Example\\covid19-app-next\\components\\item.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var StyledTableCell = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function (theme) {
  return {
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  };
})(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_4__["default"]);
var StyledTableRow = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["withStyles"])(function (theme) {
  return {
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background["default"]
      }
    }
  };
})(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__["default"]);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  table: {
    minWidth: 700
  }
});

var CasesInfo = function CasesInfo(_ref) {
  var data = _ref.data;
  var classes = useStyles();
  console.log(data);
  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    maxWidth: "md",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classes.table,
    "aria-label": "customized table",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx(StyledTableCell, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 25
    }
  }, "Coronavirus G\xFCncel D\xFCnya Rakamlar\u0131"), __jsx(StyledTableCell, {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, "Cases"), __jsx(StyledTableCell, {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  }, "Deaths"), __jsx(StyledTableCell, {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, "Recovered"), __jsx(StyledTableCell, {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  }, "Active Cases"), __jsx(StyledTableCell, {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 25
    }
  }, "Today Cases"), __jsx(StyledTableCell, {
    align: "right",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, "Today Deaths"))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, data.map(function (row) {
    return __jsx(StyledTableRow, {
      key: row.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 25
      }
    }, __jsx(StyledTableCell, {
      component: "th",
      scope: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 29
      }
    }, __jsx("img", {
      style: {
        height: '20px',
        weight: '20'
      },
      src: row.countryInfo.flag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 33
      }
    }), " ", row.country), __jsx(StyledTableCell, {
      align: "right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 29
      }
    }, row.cases), __jsx(StyledTableCell, {
      align: "right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 29
      }
    }, row.deaths), __jsx(StyledTableCell, {
      align: "right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 29
      }
    }, row.recovered), __jsx(StyledTableCell, {
      align: "right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 29
      }
    }, row.active), __jsx(StyledTableCell, {
      align: "right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 29
      }
    }, row.todayCases), __jsx(StyledTableCell, {
      align: "right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 29
      }
    }, row.todayDeaths));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (CasesInfo);

/***/ })

})
//# sourceMappingURL=index.js.b6ea8cb248cccfc18e7b.hot-update.js.map