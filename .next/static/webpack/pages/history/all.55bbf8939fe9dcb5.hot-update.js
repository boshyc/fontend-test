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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar all = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), Text = ref[0], setText = ref[1];\n    var ps = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        console.log(\"a1\");\n                        _ctx.next = 3;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"http://localhost:8000/history/all/1\").then(function(resp) {\n                            if (resp.status === 200) {\n                                console.log(\"aaa\");\n                            } else {\n                                console.log(\"bbbb\");\n                            }\n                        });\n                    case 3:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function ps() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        ps();\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: [\n                    \"hello \",\n                    Text.length,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\index.tsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, _this),\n            Text.map(function(post) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"post \",\n                        post.id\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\index.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 38\n                }, _this1);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\index.tsx\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, _this);\n};\n_s(all, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (all);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9oaXN0b3J5L2FsbC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQXlCO0FBQ21COztBQUU1QyxJQUFNRyxHQUFHLEdBQUcsV0FBTTs7O0lBQ2QsSUFBeUJGLEdBQWlCLEdBQWpCQSwrQ0FBUSxDQUFNLEVBQUUsQ0FBQyxFQUFuQ0csSUFBSSxHQUFjSCxHQUFpQixHQUEvQixFQUFHSSxPQUFPLEdBQUlKLEdBQWlCLEdBQXJCO0lBQ3JCLElBQU1LLEVBQUU7bUJBQUcsa1FBQVk7Ozs7d0JBQ25CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxJQUFJLENBQUM7OytCQUNYUixnREFBUyxDQUFDLHFDQUFxQyxDQUFDLENBQUNVLElBQUksQ0FBQ0MsU0FBQUEsSUFBSSxFQUFJOzRCQUNoRSxJQUFJQSxJQUFJLENBQUNDLE1BQU0sS0FBSyxHQUFHLEVBQUM7Z0NBQ3BCTCxPQUFPLENBQUNDLEdBQUcsQ0FBQyxLQUFLLENBQUM7NkJBQ3JCLE1BQ0c7Z0NBQ0FELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQzs2QkFDdEI7eUJBQ0osQ0FBQzs7Ozs7O1NBQ0Q7d0JBVkNGLEVBQUU7OztPQVVIO0lBQ0xKLGdEQUFTLENBQUMsV0FBSTtRQUNWSSxFQUFFLEVBQUU7S0FDUCxDQUFDO0lBQ0YscUJBQ0ksOERBQUNPLEtBQUc7OzBCQUNBLDhEQUFDQyxJQUFFOztvQkFBQyxRQUFNO29CQUFDVixJQUFJLENBQUNXLE1BQU07b0JBQUMsR0FBQzs7Ozs7O3FCQUFLO1lBQzVCWCxJQUFJLENBQUNZLEdBQUcsQ0FBQyxTQUFDQyxJQUFTO3FDQUFLLDhEQUFDSCxJQUFFOzt3QkFBQyxPQUFLO3dCQUFDRyxJQUFJLENBQUNDLEVBQUU7Ozs7OzswQkFBTTthQUFBLENBQUU7Ozs7OzthQUNoRCxDQUNUO0NBQ0o7R0F0QktmLEdBQUc7QUF3QlQsK0RBQWVBLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9oaXN0b3J5L2FsbC9pbmRleC50c3g/MGQwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlICwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnIFxyXG5cclxuY29uc3QgYWxsID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW1RleHQgLCBzZXRUZXh0XSA9IHVzZVN0YXRlPGFueT4oW10pXHJcbiAgICBjb25zdCBwcyA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYTEnKVxyXG4gICAgICAgIGF3YWl0IGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2hpc3RvcnkvYWxsLzEnKS50aGVuKHJlc3AgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcC5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnYWFhJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2JiYmInKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBwcygpXHJcbiAgICB9KVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5oZWxsbyB7VGV4dC5sZW5ndGh9IDwvaDE+IFxyXG4gICAgICAgICAgICB7VGV4dC5tYXAoKHBvc3Q6IGFueSkgPT4gPGgxPnBvc3Qge3Bvc3QuaWR9PC9oMT4gKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWxsOyJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYWxsIiwiVGV4dCIsInNldFRleHQiLCJwcyIsImNvbnNvbGUiLCJsb2ciLCJnZXQiLCJ0aGVuIiwicmVzcCIsInN0YXR1cyIsImRpdiIsImgxIiwibGVuZ3RoIiwibWFwIiwicG9zdCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/history/all/index.tsx\n"));

/***/ })

});