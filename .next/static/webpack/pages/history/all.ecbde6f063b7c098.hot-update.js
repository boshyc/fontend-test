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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar all = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]), Text = ref[0], setText = ref[1];\n    var ps = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var ref, data, status;\n            return C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"http://localhost:8000/history/all\");\n                    case 2:\n                        ref = _ctx.sent;\n                        data = ref.data;\n                        status = ref.status;\n                        console.log(data);\n                    case 6:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function ps() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        ps();\n        console.log(\"xxxx\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: [\n                    \"hello \",\n                    Text.length,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\index.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, _this),\n            Text.map(function(post) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    children: [\n                        \"post \",\n                        post.id,\n                        \" ++ \",\n                        post.title\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\index.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 38\n                }, _this1);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\index.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, _this);\n};\n_s(all, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n/* harmony default export */ __webpack_exports__[\"default\"] = (all);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9oaXN0b3J5L2FsbC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0FBQXlCO0FBQ21COztBQUU1QyxJQUFNRyxHQUFHLEdBQUcsV0FBTTs7O0lBQ2QsSUFBeUJGLEdBQWlCLEdBQWpCQSwrQ0FBUSxDQUFNLEVBQUUsQ0FBQyxFQUFuQ0csSUFBSSxHQUFjSCxHQUFpQixHQUEvQixFQUFHSSxPQUFPLEdBQUlKLEdBQWlCLEdBQXJCO0lBQ3JCLElBQU1LLEVBQUU7bUJBQUcsa1FBQVk7Z0JBQ0ksR0FBb0QsRUFBcEVDLElBQUksRUFBRUMsTUFBTTs7Ozs7K0JBQVVSLGdEQUFTLENBQUMsbUNBQW1DLENBQUM7O3dCQUFwRCxHQUFvRDt3QkFBcEVPLElBQUksR0FBWSxHQUFvRCxDQUFwRUEsSUFBSTt3QkFBRUMsTUFBTSxHQUFJLEdBQW9ELENBQTlEQSxNQUFNO3dCQUNuQkUsT0FBTyxDQUFDQyxHQUFHLENBQUNKLElBQUksQ0FBQzs7Ozs7O1NBQ2hCO3dCQUhDRCxFQUFFOzs7T0FHSDtJQUVMSixnREFBUyxDQUFDLFdBQU07UUFDWkksRUFBRSxFQUFFO1FBQ0pJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLE1BQU0sQ0FBQztLQUN0QixFQUFDLEVBQUUsQ0FBQztJQUNMLHFCQUNJLDhEQUFDQyxLQUFHOzswQkFDQSw4REFBQ0MsSUFBRTs7b0JBQUMsUUFBTTtvQkFBQ1QsSUFBSSxDQUFDVSxNQUFNO29CQUFDLEdBQUM7Ozs7OztxQkFBSztZQUM1QlYsSUFBSSxDQUFDVyxHQUFHLENBQUMsU0FBQ0MsSUFBUztxQ0FBSyw4REFBQ0gsSUFBRTs7d0JBQUMsT0FBSzt3QkFBQ0csSUFBSSxDQUFDQyxFQUFFO3dCQUFDLE1BQUk7d0JBQUNELElBQUksQ0FBQ0UsS0FBSzs7Ozs7OzBCQUFNO2FBQUEsQ0FBRTs7Ozs7O2FBQ2hFLENBQ1Q7Q0FDSjtHQWpCS2YsR0FBRztBQW1CVCwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hpc3RvcnkvYWxsL2luZGV4LnRzeD8wZDBmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlU3RhdGUgLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCcgXHJcblxyXG5jb25zdCBhbGwgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbVGV4dCAsIHNldFRleHRdID0gdXNlU3RhdGU8YW55PihbXSlcclxuICAgIGNvbnN0IHBzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHtkYXRhLCBzdGF0dXN9ID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjgwMDAvaGlzdG9yeS9hbGwnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgcHMoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCd4eHh4JylcclxuICAgIH0sW10pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPmhlbGxvIHtUZXh0Lmxlbmd0aH0gPC9oMT4gXHJcbiAgICAgICAgICAgIHtUZXh0Lm1hcCgocG9zdDogYW55KSA9PiA8aDE+cG9zdCB7cG9zdC5pZH0gKysge3Bvc3QudGl0bGV9PC9oMT4gKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWxsOyJdLCJuYW1lcyI6WyJheGlvcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYWxsIiwiVGV4dCIsInNldFRleHQiLCJwcyIsImRhdGEiLCJzdGF0dXMiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaDEiLCJsZW5ndGgiLCJtYXAiLCJwb3N0IiwiaWQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/history/all/index.tsx\n"));

/***/ })

});