"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/history/all/[id]",{

/***/ "./pages/history/all/[id].tsx":
/*!************************************!*\
  !*** ./pages/history/all/[id].tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\nvar all = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), Text = ref[0], setText = ref[1];\n    var ps = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            return C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"http://localhost:8000/history/all/\".concat(id)).then(function(resp) {\n                            if (resp.status === 200) {\n                                setText(resp.data);\n                            }\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function ps(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (router.isReady) return;\n        console.log(router.query.id);\n        ps(9);\n    }, [\n        router.isReady\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: [\n                    \" id:\",\n                    Text.id,\n                    \"\\xa0\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\[id].tsx\",\n                lineNumber: 23,\n                columnNumber: 25\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: [\n                    \" value1:\",\n                    Text.value1,\n                    \"\\xa0 \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\[id].tsx\",\n                lineNumber: 24,\n                columnNumber: 25\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: [\n                    \" value2:\",\n                    Text.value2,\n                    \"\\xa0 \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\[id].tsx\",\n                lineNumber: 25,\n                columnNumber: 25\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: [\n                    \" sign:\",\n                    Text.sign,\n                    \"\\xa0 \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\[id].tsx\",\n                lineNumber: 26,\n                columnNumber: 25\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: [\n                    \" result:\",\n                    Text.result,\n                    \"\\xa0 \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\[id].tsx\",\n                lineNumber: 27,\n                columnNumber: 25\n            }, _this),\n            \"hello\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\[id].tsx\",\n        lineNumber: 22,\n        columnNumber: 13\n    }, _this);\n};\n_s(all, \"Hi2RJgcOCJHNFGixyOoPRNMzVvU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\nvar index = function() {\n    _s1();\n    var rounter = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n        children: [\n            \"hello my name is \",\n            rounter.query.id\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\[id].tsx\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, _this);\n};\n_s1(index, \"FlyGiTURTtRv5I4OTrRXtobW/sA=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (all);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9oaXN0b3J5L2FsbC9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUFpRDtBQUN4QjtBQUNtQjs7QUFFNUMsSUFBTUksR0FBRyxHQUFHLFdBQU07O0lBRWQsSUFBTUMsTUFBTSxHQUFHTCxzREFBUyxFQUFFO0lBQzFCLElBQXlCRSxHQUFpQixHQUFqQkEsK0NBQVEsQ0FBTSxFQUFFLENBQUMsRUFBbkNJLElBQUksR0FBY0osR0FBaUIsR0FBL0IsRUFBR0ssT0FBTyxHQUFJTCxHQUFpQixHQUFyQjtJQUNyQixJQUFNTSxFQUFFO21CQUFHLGdRQUFPQyxFQUFNLEVBQUs7Ozs7OytCQUNuQlIsZ0RBQVMsQ0FBQyxvQ0FBbUMsQ0FBSyxPQUFIUSxFQUFFLENBQUUsQ0FBQyxDQUFDRSxJQUFJLENBQUMsU0FBQ0MsSUFBSSxFQUFHOzRCQUNwRSxJQUFHQSxJQUFJLENBQUNDLE1BQU0sS0FBSyxHQUFHLEVBQUM7Z0NBQ25CTixPQUFPLENBQUNLLElBQUksQ0FBQ0UsSUFBSSxDQUFDOzZCQUNyQjt5QkFDSixDQUFDOzs7Ozs7U0FDRDt3QkFOQ04sRUFBRSxDQUFVQyxFQUFNOzs7T0FNbkI7SUFDTE4sZ0RBQVMsQ0FBQyxXQUFJO1FBQ1YsSUFBR0UsTUFBTSxDQUFDVSxPQUFPLEVBQUUsT0FBTztRQUMxQkMsT0FBTyxDQUFDQyxHQUFHLENBQUNaLE1BQU0sQ0FBQ2EsS0FBSyxDQUFDVCxFQUFFLENBQUM7UUFDNUJELEVBQUUsQ0FBQyxDQUFDLENBQUM7S0FDUixFQUFDO1FBQUNILE1BQU0sQ0FBQ1UsT0FBTztLQUFDLENBQUM7SUFDbkIscUJBQ1EsOERBQUNJLEtBQUc7OzBCQUNRLDhEQUFDQyxHQUFDOztvQkFBQyxNQUFJO29CQUFDZCxJQUFJLENBQUNHLEVBQUU7b0JBQUMsTUFBTTs7Ozs7O3FCQUFJOzBCQUMxQiw4REFBQ1csR0FBQzs7b0JBQUMsVUFBUTtvQkFBQ2QsSUFBSSxDQUFDZSxNQUFNO29CQUFDLE9BQU87Ozs7OztxQkFBSTswQkFDbkMsOERBQUNELEdBQUM7O29CQUFDLFVBQVE7b0JBQUNkLElBQUksQ0FBQ2dCLE1BQU07b0JBQUMsT0FBTzs7Ozs7O3FCQUFJOzBCQUNuQyw4REFBQ0YsR0FBQzs7b0JBQUMsUUFBTTtvQkFBQ2QsSUFBSSxDQUFDaUIsSUFBSTtvQkFBQyxPQUFPOzs7Ozs7cUJBQUk7MEJBQy9CLDhEQUFDSCxHQUFDOztvQkFBQyxVQUFRO29CQUFDZCxJQUFJLENBQUNrQixNQUFNO29CQUFDLE9BQU87Ozs7OztxQkFBSTtZQUFBLE9BRS9DOzs7Ozs7YUFBTSxDQUNiO0NBQ0o7R0ExQktwQixHQUFHOztRQUVVSixrREFBUzs7O0FBMEI1QixJQUFNeUIsS0FBSyxHQUFHLFdBQUs7O0lBQ2YsSUFBTUMsT0FBTyxHQUFHMUIsc0RBQVMsRUFBRTtJQUMzQixxQkFDSSw4REFBQ29CLEdBQUM7O1lBQUMsbUJBQWlCO1lBQUNNLE9BQU8sQ0FBQ1IsS0FBSyxDQUFDVCxFQUFFOzs7Ozs7YUFBSyxDQUM3QztDQUNKO0lBTEtnQixLQUFLOztRQUNTekIsa0RBQVM7OztBQVE3QiwrREFBZUksR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hpc3RvcnkvYWxsL1tpZF0udHN4Pzk4MjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyLCB1c2VSb3V0ZXIgfSAgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuaW1wb3J0IHsgdXNlU3RhdGUgLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCcgXHJcblxyXG5jb25zdCBhbGwgPSAoKSA9PiB7XHJcbiAgICBcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBbVGV4dCAsIHNldFRleHRdID0gdXNlU3RhdGU8YW55PihbXSlcclxuICAgIGNvbnN0IHBzID0gYXN5bmMgKGlkOmFueSkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2hpc3RvcnkvYWxsLyR7aWR9YCkudGhlbigocmVzcCk9PntcclxuICAgICAgICAgICAgaWYocmVzcC5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICBzZXRUZXh0KHJlc3AuZGF0YSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYocm91dGVyLmlzUmVhZHkpIHJldHVybjtcclxuICAgICAgICBjb25zb2xlLmxvZyhyb3V0ZXIucXVlcnkuaWQpXHJcbiAgICAgICAgcHMoOSlcclxuICAgIH0sW3JvdXRlci5pc1JlYWR5XSlcclxuICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IGlkOntUZXh0LmlkfSZuYnNwOzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHZhbHVlMTp7VGV4dC52YWx1ZTF9Jm5ic3A7IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHZhbHVlMjp7VGV4dC52YWx1ZTJ9Jm5ic3A7IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHNpZ246e1RleHQuc2lnbn0mbmJzcDsgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gcmVzdWx0OntUZXh0LnJlc3VsdH0mbmJzcDsgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxsb1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuY29uc3QgaW5kZXggPSAoKSA9PntcclxuICAgIGNvbnN0IHJvdW50ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxwPmhlbGxvIG15IG5hbWUgaXMge3JvdW50ZXIucXVlcnkuaWR9PC9wPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFsbDtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhbGwiLCJyb3V0ZXIiLCJUZXh0Iiwic2V0VGV4dCIsInBzIiwiaWQiLCJnZXQiLCJ0aGVuIiwicmVzcCIsInN0YXR1cyIsImRhdGEiLCJpc1JlYWR5IiwiY29uc29sZSIsImxvZyIsInF1ZXJ5IiwiZGl2IiwicCIsInZhbHVlMSIsInZhbHVlMiIsInNpZ24iLCJyZXN1bHQiLCJpbmRleCIsInJvdW50ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/history/all/[id].tsx\n"));

/***/ })

});