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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar all = function() {\n    _s();\n    var rounter = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]), Text = ref[0], setText = ref[1];\n    var ps = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return C_Users_osaru_Desktop_testtypescript_next_js_ts_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _ctx.next = 2;\n                        return axios__WEBPACK_IMPORTED_MODULE_3___default().get(\"http://localhost:8000/history/all/\".concat(rounter.query.id)).then(function(resp) {\n                            if (resp.status === 200) {\n                                console.log(resp.data);\n                                setText(resp.data);\n                            }\n                        });\n                    case 2:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function ps() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        ps();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"hello\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\osaru\\\\Desktop\\\\testtypescript\\\\next-js-ts\\\\pages\\\\history\\\\all\\\\[id].tsx\",\n        lineNumber: 21,\n        columnNumber: 13\n    }, _this);\n};\n_s(all, \"W3O03luBotH8+33B3tZ3AdTAxmg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (all);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9oaXN0b3J5L2FsbC9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUFpRDtBQUN4QjtBQUNtQjs7QUFFNUMsSUFBTUksR0FBRyxHQUFHLFdBQU07O0lBRWQsSUFBTUMsT0FBTyxHQUFPTCxzREFBUyxFQUFFO0lBQy9CLElBQXlCRSxHQUFpQixHQUFqQkEsK0NBQVEsQ0FBTSxFQUFFLENBQUMsRUFBbkNJLElBQUksR0FBY0osR0FBaUIsR0FBL0IsRUFBR0ssT0FBTyxHQUFJTCxHQUFpQixHQUFyQjtJQUNyQixJQUFNTSxFQUFFO21CQUFHLGtRQUFZOzs7OzsrQkFDYlAsZ0RBQVMsQ0FBQyxvQ0FBbUMsQ0FBbUIsT0FBakJJLE9BQU8sQ0FBQ0ssS0FBSyxDQUFDQyxFQUFFLENBQUUsQ0FBQyxDQUFDQyxJQUFJLENBQUMsU0FBQ0MsSUFBSSxFQUFHOzRCQUNsRixJQUFHQSxJQUFJLENBQUNDLE1BQU0sS0FBSyxHQUFHLEVBQUM7Z0NBQ25CQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsSUFBSSxDQUFDSSxJQUFJLENBQUM7Z0NBQ3RCVixPQUFPLENBQUNNLElBQUksQ0FBQ0ksSUFBSSxDQUFDOzZCQUNyQjt5QkFDSixDQUFDOzs7Ozs7U0FDRDt3QkFQQ1QsRUFBRTs7O09BT0g7SUFDTEwsZ0RBQVMsQ0FBQyxXQUFJO1FBQ1ZLLEVBQUUsRUFBRTtLQUNQLEVBQUMsRUFBRSxDQUFDO0lBQ0wscUJBQ1EsOERBQUNVLEtBQUc7a0JBSytDLE9BRW5EOzs7OzthQUFNLENBQ2I7Q0FDSjtHQXpCS2QsR0FBRzs7UUFFZUosa0RBQVM7OztBQXlCakMsK0RBQWVJLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9oaXN0b3J5L2FsbC9baWRdLnRzeD85ODI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlciwgdXNlUm91dGVyIH0gIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbmltcG9ydCB7IHVzZVN0YXRlICwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnIFxyXG5cclxuY29uc3QgYWxsID0gKCkgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCByb3VudGVyOmFueSA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBbVGV4dCAsIHNldFRleHRdID0gdXNlU3RhdGU8YW55PihbXSlcclxuICAgIGNvbnN0IHBzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGF3YWl0IGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2hpc3RvcnkvYWxsLyR7cm91bnRlci5xdWVyeS5pZH1gKS50aGVuKChyZXNwKT0+e1xyXG4gICAgICAgICAgICBpZihyZXNwLnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3AuZGF0YSlcclxuICAgICAgICAgICAgICAgIHNldFRleHQocmVzcC5kYXRhKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCk9PntcclxuICAgICAgICBwcygpXHJcbiAgICB9LFtdKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPHA+IGlkOntUZXh0LmlkfSZuYnNwOzwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHZhbHVlMTp7VGV4dC52YWx1ZTF9Jm5ic3A7IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHZhbHVlMjp7VGV4dC52YWx1ZTJ9Jm5ic3A7IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IHNpZ246e1RleHQuc2lnbn0mbmJzcDsgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gcmVzdWx0OntUZXh0LnJlc3VsdH0mbmJzcDsgPC9wPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVsbG9cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFsbDtcclxuIl0sIm5hbWVzIjpbInVzZVJvdXRlciIsImF4aW9zIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJhbGwiLCJyb3VudGVyIiwiVGV4dCIsInNldFRleHQiLCJwcyIsImdldCIsInF1ZXJ5IiwiaWQiLCJ0aGVuIiwicmVzcCIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/history/all/[id].tsx\n"));

/***/ })

});