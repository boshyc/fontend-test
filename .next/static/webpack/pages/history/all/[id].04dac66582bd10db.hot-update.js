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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar all = function() {\n    _s();\n    var rounter = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), Text = ref[0], setText = ref[1];\n    var ps = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {\n            return C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"http://localhost:8000/history/all/\".concat(id)).then(function(resp) {\n                            if (resp.status === 200) {\n                                setText(resp.data);\n                            }\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function ps(id) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        console.log(rounter.query.id);\n        ps(9);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: [\n                    \" id:\",\n                    Text.id,\n                    \"\\xa0\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\[id].tsx\",\n                lineNumber: 22,\n                columnNumber: 25\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: [\n                    \" value1:\",\n                    Text.value1,\n                    \"\\xa0 \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\[id].tsx\",\n                lineNumber: 23,\n                columnNumber: 25\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: [\n                    \" value2:\",\n                    Text.value2,\n                    \"\\xa0 \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\[id].tsx\",\n                lineNumber: 24,\n                columnNumber: 25\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: [\n                    \" sign:\",\n                    Text.sign,\n                    \"\\xa0 \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\[id].tsx\",\n                lineNumber: 25,\n                columnNumber: 25\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: [\n                    \" result:\",\n                    Text.result,\n                    \"\\xa0 \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\[id].tsx\",\n                lineNumber: 26,\n                columnNumber: 25\n            }, _this),\n            \"hello\"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\[id].tsx\",\n        lineNumber: 21,\n        columnNumber: 13\n    }, _this);\n};\n_s(all, \"W3O03luBotH8+33B3tZ3AdTAxmg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (all);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9oaXN0b3J5L2FsbC9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUFpRDtBQUN4QjtBQUNtQjs7QUFFNUMsSUFBTUksR0FBRyxHQUFHLFdBQU07O0lBRWQsSUFBTUMsT0FBTyxHQUFHTCxzREFBUyxFQUFFO0lBQzNCLElBQXlCRSxHQUFpQixHQUFqQkEsK0NBQVEsQ0FBTSxFQUFFLENBQUMsRUFBbkNJLElBQUksR0FBY0osR0FBaUIsR0FBL0IsRUFBR0ssT0FBTyxHQUFJTCxHQUFpQixHQUFyQjtJQUNyQixJQUFNTSxFQUFFO21CQUFHLGdRQUFPQyxFQUFNLEVBQUs7Ozs7OytCQUNuQlIsZ0RBQVMsQ0FBQyxvQ0FBbUMsQ0FBSyxPQUFIUSxFQUFFLENBQUUsQ0FBQyxDQUFDRSxJQUFJLENBQUMsU0FBQ0MsSUFBSSxFQUFHOzRCQUNwRSxJQUFHQSxJQUFJLENBQUNDLE1BQU0sS0FBSyxHQUFHLEVBQUM7Z0NBQ25CTixPQUFPLENBQUNLLElBQUksQ0FBQ0UsSUFBSSxDQUFDOzZCQUNyQjt5QkFDSixDQUFDOzs7Ozs7U0FDRDt3QkFOQ04sRUFBRSxDQUFVQyxFQUFNOzs7T0FNbkI7SUFDTE4sZ0RBQVMsQ0FBQyxXQUFJO1FBQ1ZZLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWCxPQUFPLENBQUNZLEtBQUssQ0FBQ1IsRUFBRSxDQUFDO1FBQzdCRCxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQ1IsRUFBQyxFQUFFLENBQUM7SUFDTCxxQkFDUSw4REFBQ1UsS0FBRzs7MEJBQ1EsOERBQUNDLEdBQUM7O29CQUFDLE1BQUk7b0JBQUNiLElBQUksQ0FBQ0csRUFBRTtvQkFBQyxNQUFNOzs7Ozs7cUJBQUk7MEJBQzFCLDhEQUFDVSxHQUFDOztvQkFBQyxVQUFRO29CQUFDYixJQUFJLENBQUNjLE1BQU07b0JBQUMsT0FBTzs7Ozs7O3FCQUFJOzBCQUNuQyw4REFBQ0QsR0FBQzs7b0JBQUMsVUFBUTtvQkFBQ2IsSUFBSSxDQUFDZSxNQUFNO29CQUFDLE9BQU87Ozs7OztxQkFBSTswQkFDbkMsOERBQUNGLEdBQUM7O29CQUFDLFFBQU07b0JBQUNiLElBQUksQ0FBQ2dCLElBQUk7b0JBQUMsT0FBTzs7Ozs7O3FCQUFJOzBCQUMvQiw4REFBQ0gsR0FBQzs7b0JBQUMsVUFBUTtvQkFBQ2IsSUFBSSxDQUFDaUIsTUFBTTtvQkFBQyxPQUFPOzs7Ozs7cUJBQUk7WUFBQSxPQUUvQzs7Ozs7O2FBQU0sQ0FDYjtDQUNKO0dBekJLbkIsR0FBRzs7UUFFV0osa0RBQVM7OztBQXlCN0IsK0RBQWVJLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9oaXN0b3J5L2FsbC9baWRdLnRzeD85ODI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciwgdXNlUm91dGVyIH0gIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlICwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnIFxyXG5cclxuY29uc3QgYWxsID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCByb3VudGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IFtUZXh0ICwgc2V0VGV4dF0gPSB1c2VTdGF0ZTxhbnk+KFtdKVxyXG4gICAgY29uc3QgcHMgPSBhc3luYyAoaWQ6YW55KSA9PiB7XHJcbiAgICAgICAgYXdhaXQgYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjgwMDAvaGlzdG9yeS9hbGwvJHtpZH1gKS50aGVuKChyZXNwKT0+e1xyXG4gICAgICAgICAgICBpZihyZXNwLnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgICAgIHNldFRleHQocmVzcC5kYXRhKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZyhyb3VudGVyLnF1ZXJ5LmlkKVxyXG4gICAgICAgIHBzKDkpXHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gaWQ6e1RleHQuaWR9Jm5ic3A7PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gdmFsdWUxOntUZXh0LnZhbHVlMX0mbmJzcDsgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gdmFsdWUyOntUZXh0LnZhbHVlMn0mbmJzcDsgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gc2lnbjp7VGV4dC5zaWdufSZuYnNwOyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPiByZXN1bHQ6e1RleHQucmVzdWx0fSZuYnNwOyA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbGxvXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhbGw7XHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJheGlvcyIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYWxsIiwicm91bnRlciIsIlRleHQiLCJzZXRUZXh0IiwicHMiLCJpZCIsImdldCIsInRoZW4iLCJyZXNwIiwic3RhdHVzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsImRpdiIsInAiLCJ2YWx1ZTEiLCJ2YWx1ZTIiLCJzaWduIiwicmVzdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/history/all/[id].tsx\n"));

/***/ })

});