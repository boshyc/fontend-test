"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/history/all",{

/***/ "./pages/history/all/index.tsx":
/*!*************************************!*\
  !*** ./pages/history/all/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar all = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), Text = ref[0], setText = ref[1];\n    var ps = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(\"a1\");\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"http://localhost:8000/history/all\").then(function(resp) {\n                            if (resp.status === 200) {\n                                console.log(resp.data);\n                                setText(resp.data);\n                            }\n                        });\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function ps() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        ps();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: Text.map(function(post) {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                        children: post.id\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\index.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 25\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                        children: post.value1\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 25\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                        children: post.value2\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 25\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                        children: post.sign\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 25\n                    }, _this1),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"td\", {\n                        children: post.result\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 25\n                    }, _this1)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\index.tsx\",\n                lineNumber: 21,\n                columnNumber: 21\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\index.tsx\",\n        lineNumber: 19,\n        columnNumber: 9\n    }, _this);\n};\n_s(all, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (all);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9oaXN0b3J5L2FsbC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQXlCO0FBQ21COztBQUU1QyxJQUFNRyxHQUFHLEdBQUcsV0FBTTs7O0lBQ2QsSUFBeUJGLEdBQWlCLEdBQWpCQSwrQ0FBUSxDQUFNLEVBQUUsQ0FBQyxFQUFuQ0csSUFBSSxHQUFjSCxHQUFpQixHQUEvQixFQUFHSSxPQUFPLEdBQUlKLEdBQWlCLEdBQXJCO0lBQ3JCLElBQU1LLEVBQUU7bUJBQUcsa1FBQVk7Ozs7d0JBQ25CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUM7OytCQUNYUixnREFBUyxDQUFDLG1DQUFtQyxDQUFDLENBQUNVLElBQUksQ0FBQyxTQUFDQyxJQUFJLEVBQUc7NEJBQzlELElBQUdBLElBQUksQ0FBQ0MsTUFBTSxLQUFLLEdBQUcsRUFBQztnQ0FDbkJMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxJQUFJLENBQUNFLElBQUksQ0FBQztnQ0FDdEJSLE9BQU8sQ0FBQ00sSUFBSSxDQUFDRSxJQUFJLENBQUM7NkJBQ3JCO3lCQUNKLENBQUM7Ozs7OztTQUNEO3dCQVJDUCxFQUFFOzs7T0FRSDtJQUNMSixnREFBUyxDQUFDLFdBQUk7UUFDVkksRUFBRSxFQUFFO0tBQ1AsRUFBQyxFQUFFLENBQUM7SUFDTCxxQkFDSSw4REFBQ1EsS0FBRztrQkFDS1YsSUFBSSxDQUFDVyxHQUFHLENBQUMsU0FBQ0MsSUFBUTtpQ0FDZiw4REFBQ0MsSUFBRTs7a0NBQ0MsOERBQUNDLElBQUU7a0NBQUVGLElBQUksQ0FBQ0csRUFBRTs7Ozs7OEJBQU07a0NBQ2xCLDhEQUFDRCxJQUFFO2tDQUFFRixJQUFJLENBQUNJLE1BQU07Ozs7OzhCQUFNO2tDQUN0Qiw4REFBQ0YsSUFBRTtrQ0FBRUYsSUFBSSxDQUFDSyxNQUFNOzs7Ozs4QkFBTTtrQ0FDdEIsOERBQUNILElBQUU7a0NBQUVGLElBQUksQ0FBQ00sSUFBSTs7Ozs7OEJBQU07a0NBQ3BCLDhEQUFDSixJQUFFO2tDQUFFRixJQUFJLENBQUNPLE1BQU07Ozs7OzhCQUFNOzs7Ozs7c0JBQ3JCO1NBQUEsQ0FDUjs7Ozs7YUFDSCxDQUNUO0NBQ0o7R0EzQktwQixHQUFHO0FBNkJULCtEQUFlQSxHQUFHLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaGlzdG9yeS9hbGwvaW5kZXgudHN4PzBkMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSAsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JyBcclxuXHJcbmNvbnN0IGFsbCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtUZXh0ICwgc2V0VGV4dF0gPSB1c2VTdGF0ZTxhbnk+KFtdKVxyXG4gICAgY29uc3QgcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2ExJylcclxuICAgICAgICBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9oaXN0b3J5L2FsbCcpLnRoZW4oKHJlc3ApPT57XHJcbiAgICAgICAgICAgIGlmKHJlc3Auc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcC5kYXRhKVxyXG4gICAgICAgICAgICAgICAgc2V0VGV4dChyZXNwLmRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHBzKClcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtUZXh0Lm1hcCgocG9zdDphbnkpID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwb3N0LmlkfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57cG9zdC52YWx1ZTF9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntwb3N0LnZhbHVlMn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Bvc3Quc2lnbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3Bvc3QucmVzdWx0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFsbDsiXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImFsbCIsIlRleHQiLCJzZXRUZXh0IiwicHMiLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwidGhlbiIsInJlc3AiLCJzdGF0dXMiLCJkYXRhIiwiZGl2IiwibWFwIiwicG9zdCIsInRyIiwidGQiLCJpZCIsInZhbHVlMSIsInZhbHVlMiIsInNpZ24iLCJyZXN1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/history/all/index.tsx\n"));

/***/ })

});