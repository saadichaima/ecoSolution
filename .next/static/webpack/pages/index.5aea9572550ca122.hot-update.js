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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Progress; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Progress_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Progress.module.css */ \"./src/pages/components/progress/Progress.module.css\");\n/* harmony import */ var _Progress_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Progress_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _circleProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./circleProgress */ \"./src/pages/components/progress/circleProgress.js\");\n/* harmony import */ var _utils_UseGetWindowSize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/UseGetWindowSize */ \"./src/pages/components/utils/UseGetWindowSize.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst img1 = /* asset import */ new __webpack_require__.U(__webpack_require__(/*! ../../../../public/assets/CO2.png */ \"./public/assets/CO2.png\"));\nconst img2 = /* asset import */ new __webpack_require__.U(__webpack_require__(/*! ../../../../public/assets/puissance.png */ \"./public/assets/puissance.png\"));\nconst img3 = /* asset import */ new __webpack_require__.U(__webpack_require__(/*! ../../../../public/assets/PROJ.png */ \"./public/assets/PROJ.png\"));\nconst img4 = /* asset import */ new __webpack_require__.U(__webpack_require__(/*! ../../../../public/assets/panneau-solaire.png */ \"./public/assets/panneau-solaire.png\"));\nconst img5 = /* asset import */ new __webpack_require__.U(__webpack_require__(/*! ../../../../public/assets/productif.png */ \"./public/assets/productif.png\"));\nfunction Progress() {\n    var _indicateur_, _indicateur_1, _indicateur_2;\n    _s();\n    const size = (0,_utils_UseGetWindowSize__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL = \"http://localhost:5050\";\n    const [indicateur, setIndicateur] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        fetch(\"\".concat(PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL, \"/indicateur\")).then((response)=>response.json()).then((data)=>{\n            console.log(\"hedhi idata\", data);\n            setPuissance(data);\n        }).catch((error)=>console.log(error));\n    }, []);\n    const indicateurCarbone = parseFloat((_indicateur_ = indicateur[0]) === null || _indicateur_ === void 0 ? void 0 : _indicateur_.indicateurCarbone);\n    const indicateurPuissance = parseFloat((_indicateur_1 = indicateur[0]) === null || _indicateur_1 === void 0 ? void 0 : _indicateur_1.indicateurPuissance);\n    const indicateurNombreDeProjet = parseFloat((_indicateur_2 = indicateur[0]) === null || _indicateur_2 === void 0 ? void 0 : _indicateur_2.indicateurNombreDeProjet);\n    const items = [\n        {\n            id: \"1\",\n            title: \"Indicateur carbone CO2\",\n            number: indicateurCarbone,\n            image: img1\n        },\n        {\n            id: \"2\",\n            title: \"Puissance install\\xe9e en KWC\",\n            number: indicateurPuissance,\n            image: img4\n        },\n        {\n            id: \"3\",\n            title: \"Nombre des Projets\",\n            number: indicateurNombreDeProjet,\n            image: img5\n        }\n    ];\n    if (size.width < 1000) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_Progress_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_Progress_module_css__WEBPACK_IMPORTED_MODULE_5___default().first_title_mobile),\n                    children: \"Offrir de meilleurs r\\xe9sultats \\xe0 nos clients\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n                    lineNumber: 61,\n                    columnNumber: 7\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_Progress_module_css__WEBPACK_IMPORTED_MODULE_5___default().counter_container_mobile),\n                    children: items.map((element, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_circleProgress__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            id: element.id,\n                            title: element.title,\n                            number: element.number,\n                            image: element.image\n                        }, key, false, {\n                            fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n                            lineNumber: 63,\n                            columnNumber: 36\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n                    lineNumber: 62,\n                    columnNumber: 7\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n            lineNumber: 60,\n            columnNumber: 9\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Progress_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_Progress_module_css__WEBPACK_IMPORTED_MODULE_5___default().first_title),\n                children: \"Offrir de meilleurs r\\xe9sultats \\xe0 nos clients\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_Progress_module_css__WEBPACK_IMPORTED_MODULE_5___default().counter_container),\n                children: items.map((element, key)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_circleProgress__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        id: element.id,\n                        title: element.title,\n                        number: element.number,\n                        image: element.image\n                    }, key, false, {\n                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n                        lineNumber: 74,\n                        columnNumber: 36\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution-chaima\\\\src\\\\pages\\\\components\\\\progress\\\\Progress.js\",\n        lineNumber: 71,\n        columnNumber: 7\n    }, this);\n}\n_s(Progress, \"Yb6ulLe9Zb8njCjW23sGJabzMXY=\");\n_c = Progress;\nvar _c;\n$RefreshReg$(_c, \"Progress\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvY29tcG9uZW50cy9wcm9ncmVzcy9Qcm9ncmVzcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDO0FBQ0c7QUFDVztBQUNqQjtBQUNZO0FBQ3BELE1BQU1PLE9BQU8scUlBQTZEO0FBQzFFLE1BQU1HLE9BQU8saUpBQW1FO0FBQ2hGLE1BQU1DLE9BQU8sdUlBQThEO0FBQzNFLE1BQU1DLE9BQU8sNkpBRU07QUFFakIsTUFBTUMsT0FBTyxpSkFBbUU7QUFFbkUsU0FBU0MsV0FBVztRQWNJQyxjQUNHQSxlQUNLQTs7SUFmN0MsTUFBTUMsT0FBT2QsbUVBQWdCQTtJQUM3QixNQUFNZSx5Q0FBeUM7SUFDL0MsTUFBTSxDQUFDRixZQUFZRyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFDLEVBQUU7SUFFL0NDLGdEQUFTQSxDQUFDLElBQU07UUFDWmMsTUFBTSxHQUEwQyxPQUF2Q0Ysd0NBQXVDLGdCQUMzQ0csSUFBSSxDQUFDLENBQUNDLFdBQWFBLFNBQVNDLElBQUksSUFDaENGLElBQUksQ0FBQyxDQUFDRyxPQUFTO1lBQ1pDLFFBQVFDLEdBQUcsQ0FBQyxlQUFlRjtZQUMzQkcsYUFBYUg7UUFDakIsR0FDQ0ksS0FBSyxDQUFDLENBQUNDLFFBQVVKLFFBQVFDLEdBQUcsQ0FBQ0c7SUFDdEMsR0FBRyxFQUFFO0lBQ0wsTUFBTUMsb0JBQW9CQyxXQUFXZixDQUFBQSxlQUFBQSxVQUFVLENBQUMsRUFBRSxjQUFiQSwwQkFBQUEsS0FBQUEsSUFBQUEsYUFBZWMsaUJBQWlCO0lBQ3JFLE1BQU9FLHNCQUFzQkQsV0FBV2YsQ0FBQUEsZ0JBQUFBLFVBQVUsQ0FBQyxFQUFFLGNBQWJBLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlZ0IsbUJBQW1CO0lBQzFFLE1BQU9DLDJCQUEyQkYsV0FBV2YsQ0FBQUEsZ0JBQUFBLFVBQVUsQ0FBQyxFQUFFLGNBQWJBLDJCQUFBQSxLQUFBQSxJQUFBQSxjQUFlaUIsd0JBQXdCO0lBQ3BGLE1BQU1DLFFBQVE7UUFFWjtZQUNJQyxJQUFJO1lBQ0pDLE9BQU87WUFDUEMsUUFBUVA7WUFDUlEsT0FBTTlCO1FBQ1Y7UUFDQTtZQUNJMkIsSUFBSTtZQUNKQyxPQUFPO1lBQ1BDLFFBQVFMO1lBQ1JNLE9BQU16QjtRQUVWO1FBQ0E7WUFDSXNCLElBQUk7WUFDSkMsT0FBTztZQUNQQyxRQUFRSjtZQUNSSyxPQUFNeEI7UUFFVjtLQUlIO0lBQ0MsSUFBSUcsS0FBS3NCLEtBQUssR0FBRSxNQUFNO1FBQ3BCLHFCQUNJLDhEQUFDQztZQUFJQyxXQUFXeEMsdUVBQWdCOzs4QkFDbEMsOERBQUMwQztvQkFBR0YsV0FBV3hDLGdGQUF5Qjs4QkFBRzs7Ozs7OzhCQUMzQyw4REFBQ3VDO29CQUFJQyxXQUFXeEMsc0ZBQStCOzhCQUM5Q2lDLE1BQU1ZLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxvQkFBUSw4REFBQzlDLHVEQUFjQTs0QkFBV2lDLElBQUlZLFFBQVFaLEVBQUU7NEJBQUVDLE9BQU9XLFFBQVFYLEtBQUs7NEJBQUVDLFFBQVFVLFFBQVFWLE1BQU07NEJBQUVDLE9BQU9TLFFBQVFULEtBQUs7MkJBQXZGVTs7Ozs7Ozs7Ozs7Ozs7OztJQUt0RCxDQUFDO0lBRUMscUJBQ0UsOERBQUNSO1FBQUlDLFdBQVd4Qyx1RUFBZ0I7OzBCQUNoQyw4REFBQzBDO2dCQUFHRixXQUFXeEMseUVBQWtCOzBCQUFHOzs7Ozs7MEJBQ3BDLDhEQUFDdUM7Z0JBQUlDLFdBQVd4QywrRUFBd0I7MEJBQ3ZDaUMsTUFBTVksR0FBRyxDQUFDLENBQUNDLFNBQVNDLG9CQUFRLDhEQUFDOUMsdURBQWNBO3dCQUFXaUMsSUFBSVksUUFBUVosRUFBRTt3QkFBRUMsT0FBT1csUUFBUVgsS0FBSzt3QkFBRUMsUUFBUVUsUUFBUVYsTUFBTTt3QkFBRUMsT0FBT1MsUUFBUVQsS0FBSzt1QkFBdkZVOzs7Ozs7Ozs7Ozs7Ozs7O0FBS3RELENBQUM7R0FoRXFCakM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2NvbXBvbmVudHMvcHJvZ3Jlc3MvUHJvZ3Jlc3MuanM/NDg2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL1Byb2dyZXNzLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IENpcmNsZVByb2dyZXNzIGZyb20gXCIuL2NpcmNsZVByb2dyZXNzXCI7XHJcbmltcG9ydCBVc2VHZXRXaW5kb3dTaXplIGZyb20gXCIuLi91dGlscy9Vc2VHZXRXaW5kb3dTaXplXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgaW1nMSA9IG5ldyBVUkwoXCIuLi8uLi8uLi8uLi9wdWJsaWMvYXNzZXRzL0NPMi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcclxuY29uc3QgaW1nMiA9IG5ldyBVUkwoXCIuLi8uLi8uLi8uLi9wdWJsaWMvYXNzZXRzL3B1aXNzYW5jZS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcclxuY29uc3QgaW1nMyA9IG5ldyBVUkwoXCIuLi8uLi8uLi8uLi9wdWJsaWMvYXNzZXRzL1BST0oucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XHJcbmNvbnN0IGltZzQgPSBuZXcgVVJMKFxyXG4gICAgXCIuLi8uLi8uLi8uLi9wdWJsaWMvYXNzZXRzL3Bhbm5lYXUtc29sYWlyZS5wbmdcIixcclxuICAgIGltcG9ydC5tZXRhLnVybFxyXG4gICk7XHJcbiAgY29uc3QgaW1nNSA9IG5ldyBVUkwoXCIuLi8uLi8uLi8uLi9wdWJsaWMvYXNzZXRzL3Byb2R1Y3RpZi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2dyZXNzKCkge1xyXG4gIGNvbnN0IHNpemUgPSBVc2VHZXRXaW5kb3dTaXplKCk7XHJcbiAgY29uc3QgUFJPVE9DT0xfQU5EX0hPU1RfTkFNRV9QQVJUX09GX1RIRV9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MFwiO1xyXG4gIGNvbnN0IFtpbmRpY2F0ZXVyLCBzZXRJbmRpY2F0ZXVyXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgZmV0Y2goYCR7UFJPVE9DT0xfQU5EX0hPU1RfTkFNRV9QQVJUX09GX1RIRV9VUkx9L2luZGljYXRldXJgKVxyXG4gICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGVkaGkgaWRhdGFcIiwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgc2V0UHVpc3NhbmNlKGRhdGEpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IGluZGljYXRldXJDYXJib25lID0gcGFyc2VGbG9hdChpbmRpY2F0ZXVyWzBdPy5pbmRpY2F0ZXVyQ2FyYm9uZSk7XHJcbiAgY29uc3QgIGluZGljYXRldXJQdWlzc2FuY2UgPSBwYXJzZUZsb2F0KGluZGljYXRldXJbMF0/LmluZGljYXRldXJQdWlzc2FuY2UpO1xyXG4gIGNvbnN0ICBpbmRpY2F0ZXVyTm9tYnJlRGVQcm9qZXQgPSBwYXJzZUZsb2F0KGluZGljYXRldXJbMF0/LmluZGljYXRldXJOb21icmVEZVByb2pldCk7XHJcbiAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICBcclxuICAgIHtcclxuICAgICAgICBpZDogXCIxXCIsXHJcbiAgICAgICAgdGl0bGU6ICdJbmRpY2F0ZXVyIGNhcmJvbmUgQ08yJyxcclxuICAgICAgICBudW1iZXI6IGluZGljYXRldXJDYXJib25lLFxyXG4gICAgICAgIGltYWdlOmltZzEsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIjJcIixcclxuICAgICAgICB0aXRsZTogJ1B1aXNzYW5jZSBpbnN0YWxsw6llIGVuIEtXQycsXHJcbiAgICAgICAgbnVtYmVyOiBpbmRpY2F0ZXVyUHVpc3NhbmNlLFxyXG4gICAgICAgIGltYWdlOmltZzQsXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCIzXCIsXHJcbiAgICAgICAgdGl0bGU6ICdOb21icmUgZGVzIFByb2pldHMnLFxyXG4gICAgICAgIG51bWJlcjogaW5kaWNhdGV1ck5vbWJyZURlUHJvamV0LFxyXG4gICAgICAgIGltYWdlOmltZzUsXHJcblxyXG4gICAgfSxcclxuXHJcblxyXG5cclxuXVxyXG4gIGlmIChzaXplLndpZHRoIDwxMDAwKSB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuZmlyc3RfdGl0bGVfbW9iaWxlfSA+T2ZmcmlyIGRlIG1laWxsZXVycyByw6lzdWx0YXRzIMOgIG5vcyBjbGllbnRzPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGVyX2NvbnRhaW5lcl9tb2JpbGV9PiAgIFxyXG4gICAgICB7aXRlbXMubWFwKChlbGVtZW50LCBrZXkpID0+IDxDaXJjbGVQcm9ncmVzcyBrZXk9e2tleX0gaWQ9e2VsZW1lbnQuaWR9IHRpdGxlPXtlbGVtZW50LnRpdGxlfSBudW1iZXI9e2VsZW1lbnQubnVtYmVyfSBpbWFnZT17ZWxlbWVudC5pbWFnZX0gLz4pfVxyXG4gICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmZpcnN0X3RpdGxlfSA+T2ZmcmlyIGRlIG1laWxsZXVycyByw6lzdWx0YXRzIMOgIG5vcyBjbGllbnRzPC9oMT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudGVyX2NvbnRhaW5lcn0+ICAgXHJcbiAgICAgIHtpdGVtcy5tYXAoKGVsZW1lbnQsIGtleSkgPT4gPENpcmNsZVByb2dyZXNzIGtleT17a2V5fSBpZD17ZWxlbWVudC5pZH0gdGl0bGU9e2VsZW1lbnQudGl0bGV9IG51bWJlcj17ZWxlbWVudC5udW1iZXJ9IGltYWdlPXtlbGVtZW50LmltYWdlfSAvPil9XHJcbiAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9Il0sIm5hbWVzIjpbInN0eWxlcyIsIkNpcmNsZVByb2dyZXNzIiwiVXNlR2V0V2luZG93U2l6ZSIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiaW1nMSIsIlVSTCIsInVybCIsImltZzIiLCJpbWczIiwiaW1nNCIsImltZzUiLCJQcm9ncmVzcyIsImluZGljYXRldXIiLCJzaXplIiwiUFJPVE9DT0xfQU5EX0hPU1RfTkFNRV9QQVJUX09GX1RIRV9VUkwiLCJzZXRJbmRpY2F0ZXVyIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJzZXRQdWlzc2FuY2UiLCJjYXRjaCIsImVycm9yIiwiaW5kaWNhdGV1ckNhcmJvbmUiLCJwYXJzZUZsb2F0IiwiaW5kaWNhdGV1clB1aXNzYW5jZSIsImluZGljYXRldXJOb21icmVEZVByb2pldCIsIml0ZW1zIiwiaWQiLCJ0aXRsZSIsIm51bWJlciIsImltYWdlIiwid2lkdGgiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMSIsImZpcnN0X3RpdGxlX21vYmlsZSIsImNvdW50ZXJfY29udGFpbmVyX21vYmlsZSIsIm1hcCIsImVsZW1lbnQiLCJrZXkiLCJmaXJzdF90aXRsZSIsImNvdW50ZXJfY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/components/progress/Progress.js\n"));

/***/ })

});