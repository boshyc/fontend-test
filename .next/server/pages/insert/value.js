"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/insert/value";
exports.ids = ["pages/insert/value"];
exports.modules = {

/***/ "./pages/insert/value/index.tsx":
/*!**************************************!*\
  !*** ./pages/insert/value/index.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst post = async (value1, value2)=>{\n    axios__WEBPACK_IMPORTED_MODULE_1___default().post(\"http://localhost:8000/api/plus\", {\n        \"value1\": value1,\n        \"value2\": value2\n    });\n};\nconst index = ()=>{\n    const { 0: value1 , 1: setValue1  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"0\");\n    const { 0: value2 , 1: setValue2  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"0\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                method: \"post\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"value1\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\insert\\\\value\\\\index.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                name: \"value1\",\n                                value: value1,\n                                onChange: (e)=>setValue1(e.currentTarget.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\insert\\\\value\\\\index.tsx\",\n                                lineNumber: 19,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\insert\\\\value\\\\index.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                children: \"value2\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\insert\\\\value\\\\index.tsx\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                name: \"value2\",\n                                value: value2,\n                                onChange: (e)=>setValue2(e.currentTarget.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\insert\\\\value\\\\index.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\insert\\\\value\\\\index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: parseInt(value1) + parseInt(value2) ? parseInt(value1) + parseInt(value2) : value1 || value2\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\insert\\\\value\\\\index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\insert\\\\value\\\\index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\insert\\\\value\\\\index.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>post(value1, value2),\n                children: \"save\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\insert\\\\value\\\\index.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\insert\\\\value\\\\index.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbnNlcnQvdmFsdWUvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUNPO0FBRWpDLE1BQU1FLElBQUksR0FBRyxPQUFPQyxNQUFVLEVBQUNDLE1BQVUsR0FBSztJQUMxQ0osaURBQVUsQ0FBQyxnQ0FBZ0MsRUFBRTtRQUN6QyxRQUFRLEVBQUNHLE1BQU07UUFDZixRQUFRLEVBQUNDLE1BQU07S0FDbEIsQ0FBQztDQUNMO0FBRUQsTUFBTUMsS0FBSyxHQUFHLElBQUs7SUFDZixNQUFNLEtBQUNGLE1BQU0sTUFBR0csU0FBUyxNQUFJTCwrQ0FBUSxDQUFDLEdBQUcsQ0FBQztJQUMxQyxNQUFNLEtBQUNHLE1BQU0sTUFBR0csU0FBUyxNQUFJTiwrQ0FBUSxDQUFDLEdBQUcsQ0FBQztJQUMxQyxxQkFDSSw4REFBQ08sS0FBRzs7MEJBQ0EsOERBQUNDLE1BQUk7Z0JBQUNDLE1BQU0sRUFBQyxNQUFNOztrQ0FDZiw4REFBQ0YsS0FBRzs7MENBQ0EsOERBQUNHLE9BQUs7MENBQUMsUUFBTTs7Ozs7eUNBQVE7MENBQ3JCLDhEQUFDQyxPQUFLO2dDQUNGQyxJQUFJLEVBQUMsUUFBUTtnQ0FDYkMsS0FBSyxFQUFFWCxNQUFNO2dDQUNiWSxRQUFRLEVBQUUsQ0FBQ0MsQ0FBSyxHQUFLVixTQUFTLENBQUNVLENBQUMsQ0FBQ0MsYUFBYSxDQUFDSCxLQUFLLENBQUM7Ozs7O3lDQUVqRDs7Ozs7O2lDQUNOO2tDQUNOLDhEQUFDTixLQUFHOzswQ0FDQSw4REFBQ0csT0FBSzswQ0FBQyxRQUFNOzs7Ozt5Q0FBUTswQ0FDckIsOERBQUNDLE9BQUs7Z0NBQ0ZDLElBQUksRUFBQyxRQUFRO2dDQUNiQyxLQUFLLEVBQUVWLE1BQU07Z0NBQ2JXLFFBQVEsRUFBRSxDQUFDQyxDQUFLLEdBQUtULFNBQVMsQ0FBQ1MsQ0FBQyxDQUFDQyxhQUFhLENBQUNILEtBQUssQ0FBQzs7Ozs7eUNBRWpEOzs7Ozs7aUNBQ047a0NBQ04sOERBQUNOLEtBQUc7a0NBQ0EsNEVBQUNHLE9BQUs7c0NBRUYsUUFBUyxDQUFDUixNQUFNLENBQUMsR0FBQ2UsUUFBUSxDQUFDZCxNQUFNLENBQUMsR0FBR2MsUUFBUSxDQUFDZixNQUFNLENBQUMsR0FBQ2UsUUFBUSxDQUFDZCxNQUFNLENBQUMsR0FBRUQsTUFBTSxJQUFFQyxNQUFNOzs7OztxQ0FFbEY7Ozs7O2lDQUNOOzs7Ozs7eUJBQ0g7MEJBQ1AsOERBQUNlLFFBQU07Z0JBQUNDLE9BQU8sRUFBRSxJQUFNbEIsSUFBSSxDQUFDQyxNQUFNLEVBQUNDLE1BQU0sQ0FBQzswQkFBRSxNQUFJOzs7Ozt5QkFBUzs7Ozs7O2lCQUN2RCxDQUNUO0NBQ0o7QUFFRCxpRUFBZUMsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1qcy10cy8uL3BhZ2VzL2luc2VydC92YWx1ZS9pbmRleC50c3g/ZjJiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBwb3N0ID0gYXN5bmMgKHZhbHVlMTphbnksdmFsdWUyOmFueSkgPT4ge1xyXG4gICAgYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wbHVzJywge1xyXG4gICAgICAgIFwidmFsdWUxXCI6dmFsdWUxLFxyXG4gICAgICAgIFwidmFsdWUyXCI6dmFsdWUyXHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBpbmRleCA9ICgpID0+e1xyXG4gICAgY29uc3QgW3ZhbHVlMSAsIHNldFZhbHVlMV0gPSB1c2VTdGF0ZSgnMCcpXHJcbiAgICBjb25zdCBbdmFsdWUyICwgc2V0VmFsdWUyXSA9IHVzZVN0YXRlKCcwJylcclxuICAgIHJldHVybiggICAgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwicG9zdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnZhbHVlMTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidmFsdWUxXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZTF9ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOmFueSkgPT4gc2V0VmFsdWUxKGUuY3VycmVudFRhcmdldC52YWx1ZSl9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2lucHV0PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+dmFsdWUyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ2YWx1ZTJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlMn0gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGU6YW55KSA9PiBzZXRWYWx1ZTIoZS5jdXJyZW50VGFyZ2V0LnZhbHVlKX0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvaW5wdXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAocGFyc2VJbnQodmFsdWUxKStwYXJzZUludCh2YWx1ZTIpKT8ocGFyc2VJbnQodmFsdWUxKStwYXJzZUludCh2YWx1ZTIpKTp2YWx1ZTF8fHZhbHVlMlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHBvc3QodmFsdWUxLHZhbHVlMil9PnNhdmU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7Il0sIm5hbWVzIjpbImF4aW9zIiwidXNlU3RhdGUiLCJwb3N0IiwidmFsdWUxIiwidmFsdWUyIiwiaW5kZXgiLCJzZXRWYWx1ZTEiLCJzZXRWYWx1ZTIiLCJkaXYiLCJmb3JtIiwibWV0aG9kIiwibGFiZWwiLCJpbnB1dCIsIm5hbWUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJwYXJzZUludCIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/insert/value/index.tsx\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/insert/value/index.tsx"));
module.exports = __webpack_exports__;

})();