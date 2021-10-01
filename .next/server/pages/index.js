"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Music/MusicScore.js":
/*!****************************************!*\
  !*** ./components/Music/MusicScore.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_abc2svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-abc2svg */ "react-abc2svg");
/* harmony import */ var react_abc2svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_abc2svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Sherwin\\Desktop\\TheGitStuff\\Sonatina-Alpha\\components\\Music\\MusicScore.js";




class MusicScore extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [" test score 1", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react_abc2svg__WEBPACK_IMPORTED_MODULE_1___default()), {
        abcNotation: `%abc-2.2\n%%pagewidth 14cm\n%%bgcolor beige\n%%topspace 0\n%%composerspace 0\n%%leftmargin 0.8cm\n%%rightmargin 0.8cm\n%%fullsvg 1\n\nX:1\nT:Example\nM:4/4\nC:Trad.\nK:G\n|:Gccc dedB|dedB dedB|c2ec B2dB|c2A2 A2BA|`,
        showErrors: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, this), "test score 2", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((react_abc2svg__WEBPACK_IMPORTED_MODULE_1___default()), {
        abcNotation: `
%abc-2.2
%%pagewidth 14cm
%%bgcolor white
%%topspace 0
%%composerspace 0
%%leftmargin 0.8cm
%%rightmargin 0.8cm
%%fullsvg 2

X:1
T:J'ai du bon tabac
C:Trad.
M:2/4
L:1/8
Q:1/4=120
K:C
CDEC|D2DE|F2F2|E2E2|CDEC|D2DE|F2G2|C4:|
G2GF|E2DE|F2G2|F2E2|G2GF|E2DE|F2G2|D4|
CDEC|D2DE|F2F2|E2E2|CDEC|D2DE|F2G2|C4||
                `,
        showErrors: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 16
    }, this);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MusicScore);

/***/ }),

/***/ "./components/Music/index.js":
/*!***********************************!*\
  !*** ./components/Music/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MusicScore": () => (/* reexport safe */ _MusicScore__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _MusicScore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MusicScore */ "./components/Music/MusicScore.js");



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Music__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Music */ "./components/Music/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Sherwin\\Desktop\\TheGitStuff\\Sonatina-Alpha\\pages\\index.js";




class Index extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  componentDidMount() {}

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        children: " This is my website "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Music__WEBPACK_IMPORTED_MODULE_1__.MusicScore, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 10
    }, this);
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-abc2svg":
/*!********************************!*\
  !*** external "react-abc2svg" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("react-abc2svg");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBRUEsTUFBTUUsVUFBTixTQUF5QkYsNENBQXpCLENBQW1DO0FBQy9CRyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNmLFVBQU1BLEtBQU47QUFDSDs7QUFDREMsRUFBQUEsTUFBTSxHQUFHO0FBQ0wsd0JBQU87QUFBQSwrQ0FDSCw4REFBQyxzREFBRDtBQUNJLG1CQUFXLEVBQ04sdU5BRlQ7QUFJSSxrQkFBVTtBQUpkO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERywrQkFRSCw4REFBQyxzREFBRDtBQUNJLG1CQUFXLEVBQUc7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFyQlk7QUFzQkksa0JBQVU7QUF0QmQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVJHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFQO0FBaUNIOztBQXRDOEI7O0FBeUNuQyxpRUFBZUgsVUFBZjs7Ozs7Ozs7Ozs7Ozs7O0FDNUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBOzs7QUFFQSxNQUFNSSxLQUFOLFNBQW9CTiw0Q0FBcEIsQ0FBOEI7QUFDMUJPLEVBQUFBLGlCQUFpQixHQUFHLENBQ25COztBQUVKRixFQUFBQSxNQUFNLEdBQUc7QUFDUix3QkFBTztBQUFBLDhCQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREgsZUFFRyw4REFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVA7QUFJQTs7QUFUNEI7O0FBWTlCLGlFQUFlQyxLQUFmOzs7Ozs7Ozs7O0FDZkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29uYXRpbmEtYWxwaGEvLi9jb21wb25lbnRzL011c2ljL011c2ljU2NvcmUuanMiLCJ3ZWJwYWNrOi8vc29uYXRpbmEtYWxwaGEvLi9jb21wb25lbnRzL011c2ljL2luZGV4LmpzIiwid2VicGFjazovL3NvbmF0aW5hLWFscGhhLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc29uYXRpbmEtYWxwaGEvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3NvbmF0aW5hLWFscGhhL2V4dGVybmFsIFwicmVhY3QtYWJjMnN2Z1wiIiwid2VicGFjazovL3NvbmF0aW5hLWFscGhhL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQWJjMlN2ZyBmcm9tICdyZWFjdC1hYmMyc3ZnJ1xyXG5cclxuY2xhc3MgTXVzaWNTY29yZSBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgIH1cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gPGRpdj4gdGVzdCBzY29yZSAxXHJcbiAgICAgICAgICAgIDxBYmMyU3ZnXHJcbiAgICAgICAgICAgICAgICBhYmNOb3RhdGlvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgYCVhYmMtMi4yXFxuJSVwYWdld2lkdGggMTRjbVxcbiUlYmdjb2xvciBiZWlnZVxcbiUldG9wc3BhY2UgMFxcbiUlY29tcG9zZXJzcGFjZSAwXFxuJSVsZWZ0bWFyZ2luIDAuOGNtXFxuJSVyaWdodG1hcmdpbiAwLjhjbVxcbiUlZnVsbHN2ZyAxXFxuXFxuWDoxXFxuVDpFeGFtcGxlXFxuTTo0LzRcXG5DOlRyYWQuXFxuSzpHXFxufDpHY2NjIGRlZEJ8ZGVkQiBkZWRCfGMyZWMgQjJkQnxjMkEyIEEyQkF8YFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2hvd0Vycm9yc1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICB0ZXN0IHNjb3JlIDJcclxuICAgICAgICAgICAgPEFiYzJTdmdcclxuICAgICAgICAgICAgICAgIGFiY05vdGF0aW9uPXtgXHJcbiVhYmMtMi4yXHJcbiUlcGFnZXdpZHRoIDE0Y21cclxuJSViZ2NvbG9yIHdoaXRlXHJcbiUldG9wc3BhY2UgMFxyXG4lJWNvbXBvc2Vyc3BhY2UgMFxyXG4lJWxlZnRtYXJnaW4gMC44Y21cclxuJSVyaWdodG1hcmdpbiAwLjhjbVxyXG4lJWZ1bGxzdmcgMlxyXG5cclxuWDoxXHJcblQ6SidhaSBkdSBib24gdGFiYWNcclxuQzpUcmFkLlxyXG5NOjIvNFxyXG5MOjEvOFxyXG5ROjEvND0xMjBcclxuSzpDXHJcbkNERUN8RDJERXxGMkYyfEUyRTJ8Q0RFQ3xEMkRFfEYyRzJ8QzQ6fFxyXG5HMkdGfEUyREV8RjJHMnxGMkUyfEcyR0Z8RTJERXxGMkcyfEQ0fFxyXG5DREVDfEQyREV8RjJGMnxFMkUyfENERUN8RDJERXxGMkcyfEM0fHxcclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICBzaG93RXJyb3JzXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE11c2ljU2NvcmVcclxuIiwiaW1wb3J0IE11c2ljU2NvcmUgZnJvbSAnLi9NdXNpY1Njb3JlJ1xyXG5cclxuZXhwb3J0IHtcclxuXHRNdXNpY1Njb3JlXHJcbn1cclxuIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge011c2ljU2NvcmV9IGZyb20gJy4uL2NvbXBvbmVudHMvTXVzaWMnXHJcblxyXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0cmV0dXJuIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+IFRoaXMgaXMgbXkgd2Vic2l0ZSA8L2Rpdj5cclxuICAgICAgICAgICAgPE11c2ljU2NvcmUvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYWJjMnN2Z1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkFiYzJTdmciLCJNdXNpY1Njb3JlIiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInJlbmRlciIsIkluZGV4IiwiY29tcG9uZW50RGlkTW91bnQiXSwic291cmNlUm9vdCI6IiJ9