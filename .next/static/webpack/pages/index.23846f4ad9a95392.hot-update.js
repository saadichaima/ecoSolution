"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/components/progress/Progress.js":
/*!***************************************************!*\
  !*** ./src/pages/components/progress/Progress.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Progress; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Progress_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Progress.module.css */ \"./src/pages/components/progress/Progress.module.css\");\n/* harmony import */ var _Progress_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Progress_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _circleProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circleProgress */ \"./src/pages/components/progress/circleProgress.js\");\n/* harmony import */ var _utils_UseGetWindowSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/UseGetWindowSize */ \"./src/pages/components/utils/UseGetWindowSize.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _progressItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./progressItems */ \"./src/pages/components/progress/progressItems.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Progress() {\n    _s();\n    const size = (0,_utils_UseGetWindowSize__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL = \"http://localhost:5050\";\n    const [indicateur, setIndicateur] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        fetch(\"\".concat(PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL, \"/puissance\")).then((response)=>response.json()).then((data)=>{\n            console.log(\"hedhi idata\", data);\n            setPuissance(data);\n        }).catch((error)=>console.log(error));\n    }, []);\n    if (size.width < 1000) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Progress_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_Progress_module_css__WEBPACK_IMPORTED_MODULE_6___default().first_title_mobile),\n                    children: \"Offrir de meilleurs r\\xe9sultats \\xe0 nos clients\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Progress_module_css__WEBPACK_IMPORTED_MODULE_6___default().counter_container_mobile),\n                    children: _progressItems__WEBPACK_IMPORTED_MODULE_5__.items.map((element, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_circleProgress__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            id: element.id,\n                            title: element.title,\n                            number: element.number,\n                            image: element.image\n                        }, key, false, {\n                            fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n                            lineNumber: 26,\n                            columnNumber: 36\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Progress_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_Progress_module_css__WEBPACK_IMPORTED_MODULE_6___default().first_title),\n                children: \"Offrir de meilleurs r\\xe9sultats \\xe0 nos clients\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Progress_module_css__WEBPACK_IMPORTED_MODULE_6___default().counter_container),\n                children: _progressItems__WEBPACK_IMPORTED_MODULE_5__.items.map((element, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_circleProgress__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        id: element.id,\n                        title: element.title,\n                        number: element.number,\n                        image: element.image\n                    }, key, false, {\n                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n                        lineNumber: 37,\n                        columnNumber: 36\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n        lineNumber: 34,\n        columnNumber: 7\n    }, this);\n}\n_s(Progress, \"Yb6ulLe9Zb8njCjW23sGJabzMXY=\");\n_c = Progress;\nvar _c;\n$RefreshReg$(_c, \"Progress\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9wcm9ncmVzcy9Qcm9ncmVzcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNHO0FBQ1c7QUFDakI7QUFDWTtBQUNaO0FBQ3pCLFNBQVNRLFdBQVc7O0lBQ2pDLE1BQU1DLE9BQU9QLG1FQUFnQkE7SUFDN0IsTUFBTVEseUNBQXlDO0lBQy9DLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRS9DQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pRLE1BQU0sR0FBMEMsT0FBdkNILHdDQUF1QyxlQUMzQ0ksSUFBSSxDQUFDLENBQUNDLFdBQWFBLFNBQVNDLElBQUksSUFDaENGLElBQUksQ0FBQyxDQUFDRyxPQUFTO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQyxlQUFlRjtZQUMzQkcsYUFBYUg7UUFDakIsR0FDQ0ksS0FBSyxDQUFDLENBQUNDLFFBQVVKLFFBQVFDLEdBQUcsQ0FBQ0c7SUFDdEMsR0FBRyxFQUFFO0lBQ0wsSUFBSWIsS0FBS2MsS0FBSyxHQUFFLE1BQU07UUFDcEIscUJBQ0ksOERBQUNDO1lBQUlDLFdBQVd6Qix1RUFBZ0I7OzhCQUNsQyw4REFBQzJCO29CQUFHRixXQUFXekIsZ0ZBQXlCOzhCQUFHOzs7Ozs7OEJBQzNDLDhEQUFDd0I7b0JBQUlDLFdBQVd6QixzRkFBK0I7OEJBQzlDTyxxREFBUyxDQUFDLENBQUN3QixTQUFTQyxvQkFBUSw4REFBQy9CLHVEQUFjQTs0QkFBV2dDLElBQUlGLFFBQVFFLEVBQUU7NEJBQUVDLE9BQU9ILFFBQVFHLEtBQUs7NEJBQUVDLFFBQVFKLFFBQVFJLE1BQU07NEJBQUVDLE9BQU9MLFFBQVFLLEtBQUs7MkJBQXZGSjs7Ozs7Ozs7Ozs7Ozs7OztJQUt0RCxDQUFDO0lBRUMscUJBQ0UsOERBQUNSO1FBQUlDLFdBQVd6Qix1RUFBZ0I7OzBCQUNoQyw4REFBQzJCO2dCQUFHRixXQUFXekIseUVBQWtCOzBCQUFHOzs7Ozs7MEJBQ3BDLDhEQUFDd0I7Z0JBQUlDLFdBQVd6QiwrRUFBd0I7MEJBQ3ZDTyxxREFBUyxDQUFDLENBQUN3QixTQUFTQyxvQkFBUSw4REFBQy9CLHVEQUFjQTt3QkFBV2dDLElBQUlGLFFBQVFFLEVBQUU7d0JBQUVDLE9BQU9ILFFBQVFHLEtBQUs7d0JBQUVDLFFBQVFKLFFBQVFJLE1BQU07d0JBQUVDLE9BQU9MLFFBQVFLLEtBQUs7dUJBQXZGSjs7Ozs7Ozs7Ozs7Ozs7OztBQUt0RCxDQUFDO0dBbkNxQnhCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jb21wb25lbnRzL3Byb2dyZXNzL1Byb2dyZXNzLmpzPzQ4NmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Qcm9ncmVzcy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBDaXJjbGVQcm9ncmVzcyBmcm9tIFwiLi9jaXJjbGVQcm9ncmVzc1wiO1xyXG5pbXBvcnQgVXNlR2V0V2luZG93U2l6ZSBmcm9tIFwiLi4vdXRpbHMvVXNlR2V0V2luZG93U2l6ZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSBcIi4vcHJvZ3Jlc3NJdGVtc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9ncmVzcygpIHtcclxuICBjb25zdCBzaXplID0gVXNlR2V0V2luZG93U2l6ZSgpO1xyXG4gIGNvbnN0IFBST1RPQ09MX0FORF9IT1NUX05BTUVfUEFSVF9PRl9USEVfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjUwNTBcIjtcclxuICBjb25zdCBbaW5kaWNhdGV1ciwgc2V0SW5kaWNhdGV1cl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGZldGNoKGAke1BST1RPQ09MX0FORF9IT1NUX05BTUVfUEFSVF9PRl9USEVfVVJMfS9wdWlzc2FuY2VgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVkaGkgaWRhdGFcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgc2V0UHVpc3NhbmNlKGRhdGEpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfSwgW10pO1xyXG4gIGlmIChzaXplLndpZHRoIDwxMDAwKSB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuZmlyc3RfdGl0bGVfbW9iaWxlfSA+T2ZmcmlyIGRlIG1laWxsZXVycyByw6lzdWx0YXRzIMOgIG5vcyBjbGllbnRzPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGVyX2NvbnRhaW5lcl9tb2JpbGV9PiAgIFxyXG4gICAgICB7aXRlbXMubWFwKChlbGVtZW50LCBrZXkpID0+IDxDaXJjbGVQcm9ncmVzcyBrZXk9e2tleX0gaWQ9e2VsZW1lbnQuaWR9IHRpdGxlPXtlbGVtZW50LnRpdGxlfSBudW1iZXI9e2VsZW1lbnQubnVtYmVyfSBpbWFnZT17ZWxlbWVudC5pbWFnZX0gLz4pfVxyXG4gICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmZpcnN0X3RpdGxlfSA+T2ZmcmlyIGRlIG1laWxsZXVycyByw6lzdWx0YXRzIMOgIG5vcyBjbGllbnRzPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGVyX2NvbnRhaW5lcn0+ICAgXHJcbiAgICAgIHtpdGVtcy5tYXAoKGVsZW1lbnQsIGtleSkgPT4gPENpcmNsZVByb2dyZXNzIGtleT17a2V5fSBpZD17ZWxlbWVudC5pZH0gdGl0bGU9e2VsZW1lbnQudGl0bGV9IG51bWJlcj17ZWxlbWVudC5udW1iZXJ9IGltYWdlPXtlbGVtZW50LmltYWdlfSAvPil9XHJcbiAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9Il0sIm5hbWVzIjpbInN0eWxlcyIsIkNpcmNsZVByb2dyZXNzIiwiVXNlR2V0V2luZG93U2l6ZSIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiaXRlbXMiLCJQcm9ncmVzcyIsInNpemUiLCJQUk9UT0NPTF9BTkRfSE9TVF9OQU1FX1BBUlRfT0ZfVEhFX1VSTCIsImluZGljYXRldXIiLCJzZXRJbmRpY2F0ZXVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRQdWlzc2FuY2UiLCJjYXRjaCIsImVycm9yIiwid2lkdGgiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMSIsImZpcnN0X3RpdGxlX21vYmlsZSIsImNvdW50ZXJfY29udGFpbmVyX21vYmlsZSIsIm1hcCIsImVsZW1lbnQiLCJrZXkiLCJpZCIsInRpdGxlIiwibnVtYmVyIiwiaW1hZ2UiLCJmaXJzdF90aXRsZSIsImNvdW50ZXJfY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/progress/Progress.js\n"));

/***/ })

});