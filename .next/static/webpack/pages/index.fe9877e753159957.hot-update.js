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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Progress; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Progress_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Progress.module.css */ \"./src/pages/components/progress/Progress.module.css\");\n/* harmony import */ var _Progress_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Progress_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _circleProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circleProgress */ \"./src/pages/components/progress/circleProgress.js\");\n/* harmony import */ var _utils_UseGetWindowSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/UseGetWindowSize */ \"./src/pages/components/utils/UseGetWindowSize.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _progressItems__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./progressItems */ \"./src/pages/components/progress/progressItems.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Progress() {\n    var _indicate_, _puissance_;\n    _s();\n    const size = (0,_utils_UseGetWindowSize__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL = \"http://localhost:5050\";\n    const [indicateur, setIndicateur] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        fetch(\"\".concat(PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL, \"/indicateur\")).then((response)=>response.json()).then((data)=>{\n            console.log(\"hedhi idata\", data);\n            setPuissance(data);\n        }).catch((error)=>console.log(error));\n    }, []);\n    const indicateurCarbone = parseFloat((_indicate_ = indicate[0]) === null || _indicate_ === void 0 ? void 0 : _indicate_.puissanceAllemande);\n    const puissanceChinois = parseFloat((_puissance_ = puissance[0]) === null || _puissance_ === void 0 ? void 0 : _puissance_.puissanceChinoise);\n    if (size.width < 1000) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Progress_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_Progress_module_css__WEBPACK_IMPORTED_MODULE_6___default().first_title_mobile),\n                    children: \"Offrir de meilleurs r\\xe9sultats \\xe0 nos clients\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Progress_module_css__WEBPACK_IMPORTED_MODULE_6___default().counter_container_mobile),\n                    children: _progressItems__WEBPACK_IMPORTED_MODULE_5__.items.map((element, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_circleProgress__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            id: element.id,\n                            title: element.title,\n                            number: element.number,\n                            image: element.image\n                        }, key, false, {\n                            fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n                            lineNumber: 28,\n                            columnNumber: 36\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n                    lineNumber: 27,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n            lineNumber: 25,\n            columnNumber: 9\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Progress_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_Progress_module_css__WEBPACK_IMPORTED_MODULE_6___default().first_title),\n                children: \"Offrir de meilleurs r\\xe9sultats \\xe0 nos clients\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Progress_module_css__WEBPACK_IMPORTED_MODULE_6___default().counter_container),\n                children: _progressItems__WEBPACK_IMPORTED_MODULE_5__.items.map((element, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_circleProgress__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        id: element.id,\n                        title: element.title,\n                        number: element.number,\n                        image: element.image\n                    }, key, false, {\n                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n                        lineNumber: 39,\n                        columnNumber: 36\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n        lineNumber: 36,\n        columnNumber: 7\n    }, this);\n}\n_s(Progress, \"Yb6ulLe9Zb8njCjW23sGJabzMXY=\");\n_c = Progress;\nvar _c;\n$RefreshReg$(_c, \"Progress\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9wcm9ncmVzcy9Qcm9ncmVzcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNHO0FBQ1c7QUFDakI7QUFDWTtBQUNaO0FBQ3pCLFNBQVNRLFdBQVc7UUFjSUMsWUFDREM7O0lBZHBDLE1BQU1DLE9BQU9ULG1FQUFnQkE7SUFDN0IsTUFBTVUseUNBQXlDO0lBQy9DLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHViwrQ0FBUUEsQ0FBQyxFQUFFO0lBRS9DQyxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pVLE1BQU0sR0FBMEMsT0FBdkNILHdDQUF1QyxnQkFDM0NJLElBQUksQ0FBQyxDQUFDQyxXQUFhQSxTQUFTQyxJQUFJLElBQ2hDRixJQUFJLENBQUMsQ0FBQ0csT0FBUztZQUNaQyxRQUFRQyxHQUFHLENBQUMsZUFBZUY7WUFDM0JHLGFBQWFIO1FBQ2pCLEdBQ0NJLEtBQUssQ0FBQyxDQUFDQyxRQUFVSixRQUFRQyxHQUFHLENBQUNHO0lBQ3RDLEdBQUcsRUFBRTtJQUNMLE1BQU1DLG9CQUFvQkMsV0FBV2pCLENBQUFBLGFBQUFBLFFBQVEsQ0FBQyxFQUFFLGNBQVhBLHdCQUFBQSxLQUFBQSxJQUFBQSxXQUFha0Isa0JBQWtCO0lBQ3BFLE1BQU1DLG1CQUFtQkYsV0FBV2hCLENBQUFBLGNBQUFBLFNBQVMsQ0FBQyxFQUFFLGNBQVpBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFjbUIsaUJBQWlCO0lBQ25FLElBQUlsQixLQUFLbUIsS0FBSyxHQUFFLE1BQU07UUFDcEIscUJBQ0ksOERBQUNDO1lBQUlDLFdBQVdoQyx1RUFBZ0I7OzhCQUNsQyw4REFBQ2tDO29CQUFHRixXQUFXaEMsZ0ZBQXlCOzhCQUFHOzs7Ozs7OEJBQzNDLDhEQUFDK0I7b0JBQUlDLFdBQVdoQyxzRkFBK0I7OEJBQzlDTyxxREFBUyxDQUFDLENBQUMrQixTQUFTQyxvQkFBUSw4REFBQ3RDLHVEQUFjQTs0QkFBV3VDLElBQUlGLFFBQVFFLEVBQUU7NEJBQUVDLE9BQU9ILFFBQVFHLEtBQUs7NEJBQUVDLFFBQVFKLFFBQVFJLE1BQU07NEJBQUVDLE9BQU9MLFFBQVFLLEtBQUs7MkJBQXZGSjs7Ozs7Ozs7Ozs7Ozs7OztJQUt0RCxDQUFDO0lBRUMscUJBQ0UsOERBQUNSO1FBQUlDLFdBQVdoQyx1RUFBZ0I7OzBCQUNoQyw4REFBQ2tDO2dCQUFHRixXQUFXaEMseUVBQWtCOzBCQUFHOzs7Ozs7MEJBQ3BDLDhEQUFDK0I7Z0JBQUlDLFdBQVdoQywrRUFBd0I7MEJBQ3ZDTyxxREFBUyxDQUFDLENBQUMrQixTQUFTQyxvQkFBUSw4REFBQ3RDLHVEQUFjQTt3QkFBV3VDLElBQUlGLFFBQVFFLEVBQUU7d0JBQUVDLE9BQU9ILFFBQVFHLEtBQUs7d0JBQUVDLFFBQVFKLFFBQVFJLE1BQU07d0JBQUVDLE9BQU9MLFFBQVFLLEtBQUs7dUJBQXZGSjs7Ozs7Ozs7Ozs7Ozs7OztBQUt0RCxDQUFDO0dBckNxQi9CO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9jb21wb25lbnRzL3Byb2dyZXNzL1Byb2dyZXNzLmpzPzQ4NmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9Qcm9ncmVzcy5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBDaXJjbGVQcm9ncmVzcyBmcm9tIFwiLi9jaXJjbGVQcm9ncmVzc1wiO1xyXG5pbXBvcnQgVXNlR2V0V2luZG93U2l6ZSBmcm9tIFwiLi4vdXRpbHMvVXNlR2V0V2luZG93U2l6ZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IGl0ZW1zIH0gZnJvbSBcIi4vcHJvZ3Jlc3NJdGVtc1wiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9ncmVzcygpIHtcclxuICBjb25zdCBzaXplID0gVXNlR2V0V2luZG93U2l6ZSgpO1xyXG4gIGNvbnN0IFBST1RPQ09MX0FORF9IT1NUX05BTUVfUEFSVF9PRl9USEVfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjUwNTBcIjtcclxuICBjb25zdCBbaW5kaWNhdGV1ciwgc2V0SW5kaWNhdGV1cl0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGZldGNoKGAke1BST1RPQ09MX0FORF9IT1NUX05BTUVfUEFSVF9PRl9USEVfVVJMfS9pbmRpY2F0ZXVyYClcclxuICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhlZGhpIGlkYXRhXCIsIGRhdGEpO1xyXG4gICAgICAgICAgICAgIHNldFB1aXNzYW5jZShkYXRhKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBpbmRpY2F0ZXVyQ2FyYm9uZSA9IHBhcnNlRmxvYXQoaW5kaWNhdGVbMF0/LnB1aXNzYW5jZUFsbGVtYW5kZSk7XHJcbiAgY29uc3QgcHVpc3NhbmNlQ2hpbm9pcyA9IHBhcnNlRmxvYXQocHVpc3NhbmNlWzBdPy5wdWlzc2FuY2VDaGlub2lzZSk7XHJcbiAgaWYgKHNpemUud2lkdGggPDEwMDApIHtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5maXJzdF90aXRsZV9tb2JpbGV9ID5PZmZyaXIgZGUgbWVpbGxldXJzIHLDqXN1bHRhdHMgw6Agbm9zIGNsaWVudHM8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZXJfY29udGFpbmVyX21vYmlsZX0+ICAgXHJcbiAgICAgIHtpdGVtcy5tYXAoKGVsZW1lbnQsIGtleSkgPT4gPENpcmNsZVByb2dyZXNzIGtleT17a2V5fSBpZD17ZWxlbWVudC5pZH0gdGl0bGU9e2VsZW1lbnQudGl0bGV9IG51bWJlcj17ZWxlbWVudC5udW1iZXJ9IGltYWdlPXtlbGVtZW50LmltYWdlfSAvPil9XHJcbiAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuZmlyc3RfdGl0bGV9ID5PZmZyaXIgZGUgbWVpbGxldXJzIHLDqXN1bHRhdHMgw6Agbm9zIGNsaWVudHM8L2gxPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvdW50ZXJfY29udGFpbmVyfT4gICBcclxuICAgICAge2l0ZW1zLm1hcCgoZWxlbWVudCwga2V5KSA9PiA8Q2lyY2xlUHJvZ3Jlc3Mga2V5PXtrZXl9IGlkPXtlbGVtZW50LmlkfSB0aXRsZT17ZWxlbWVudC50aXRsZX0gbnVtYmVyPXtlbGVtZW50Lm51bWJlcn0gaW1hZ2U9e2VsZW1lbnQuaW1hZ2V9IC8+KX1cclxuICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH0iXSwibmFtZXMiOlsic3R5bGVzIiwiQ2lyY2xlUHJvZ3Jlc3MiLCJVc2VHZXRXaW5kb3dTaXplIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJpdGVtcyIsIlByb2dyZXNzIiwiaW5kaWNhdGUiLCJwdWlzc2FuY2UiLCJzaXplIiwiUFJPVE9DT0xfQU5EX0hPU1RfTkFNRV9QQVJUX09GX1RIRV9VUkwiLCJpbmRpY2F0ZXVyIiwic2V0SW5kaWNhdGV1ciIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic2V0UHVpc3NhbmNlIiwiY2F0Y2giLCJlcnJvciIsImluZGljYXRldXJDYXJib25lIiwicGFyc2VGbG9hdCIsInB1aXNzYW5jZUFsbGVtYW5kZSIsInB1aXNzYW5jZUNoaW5vaXMiLCJwdWlzc2FuY2VDaGlub2lzZSIsIndpZHRoIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJmaXJzdF90aXRsZV9tb2JpbGUiLCJjb3VudGVyX2NvbnRhaW5lcl9tb2JpbGUiLCJtYXAiLCJlbGVtZW50Iiwia2V5IiwiaWQiLCJ0aXRsZSIsIm51bWJlciIsImltYWdlIiwiZmlyc3RfdGl0bGUiLCJjb3VudGVyX2NvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/components/progress/Progress.js\n"));

/***/ })

});