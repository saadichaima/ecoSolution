"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/secondpagearticle",{

/***/ "./src/pages/secondpagearticle.jsx":
/*!*****************************************!*\
  !*** ./src/pages/secondpagearticle.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SecondPageArticle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/secondPage.module.scss */ \"./src/styles/secondPage.module.scss\");\n/* harmony import */ var _styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Navbar/Navbar */ \"./src/pages/components/Navbar/Navbar.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Footer */ \"./src/pages/components/Footer.js\");\n/* harmony import */ var _components_partenariat_partenariat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/partenariat/partenariat */ \"./src/pages/components/partenariat/partenariat.js\");\n/* harmony import */ var _components_imageArticle_imageArticle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/imageArticle/imageArticle */ \"./src/pages/components/imageArticle/imageArticle.js\");\n\nvar _s = $RefreshSig$();\n\n// import styles from '../styles/Home.module.css'\n\n\n\n\n\n\n\nconst imgg1 = /* asset import */ new __webpack_require__.U(__webpack_require__(/*! ../../public/assets/IMG_blog1.jpg */ \"./public/assets/IMG_blog1.jpg\"));\nfunction SecondPageArticle(param) {\n    let { data  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL = \"http://localhost:5050\";\n    const [article, setArticle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"\".concat(PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL, \"/article/\").concat(data.id)).then((response)=>response.json()).then((data)=>{\n            console.log(\"hedhi idata\", data);\n            setArticle(data);\n        }).catch((error)=>console.log(error));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>console.log(\"hedha article\", article), [\n        article\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/home/achref/Document/projects/melkart/ecoSolution/src/pages/secondpagearticle.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/achref/Document/projects/melkart/ecoSolution/src/pages/secondpagearticle.jsx\",\n                        lineNumber: 30,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/achref/Document/projects/melkart/ecoSolution/src/pages/secondpagearticle.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/achref/Document/projects/melkart/ecoSolution/src/pages/secondpagearticle.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/achref/Document/projects/melkart/ecoSolution/src/pages/secondpagearticle.jsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/achref/Document/projects/melkart/ecoSolution/src/pages/secondpagearticle.jsx\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default().flex_container_page),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default().titre),\n                        children: article.titre\n                    }, void 0, false, {\n                        fileName: \"/home/achref/Document/projects/melkart/ecoSolution/src/pages/secondpagearticle.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 18\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default().article),\n                        children: article.contenu\n                    }, void 0, false, {\n                        fileName: \"/home/achref/Document/projects/melkart/ecoSolution/src/pages/secondpagearticle.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"\".concat(PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL, \"/imagesArticle/\")\n                    }, void 0, false, {\n                        fileName: \"/home/achref/Document/projects/melkart/ecoSolution/src/pages/secondpagearticle.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default().btnR),\n                        onClick: ()=>{\n                            router.back();\n                        },\n                        children: [\n                            \" \",\n                            \"Retour\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/achref/Document/projects/melkart/ecoSolution/src/pages/secondpagearticle.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/achref/Document/projects/melkart/ecoSolution/src/pages/secondpagearticle.jsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/achref/Document/projects/melkart/ecoSolution/src/pages/secondpagearticle.jsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/achref/Document/projects/melkart/ecoSolution/src/pages/secondpagearticle.jsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_s(SecondPageArticle, \"Nt8olb9Kll2sqFgkr1DZyUq2K/k=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SecondPageArticle;\nSecondPageArticle.getInitialProps = async (param)=>{\n    let { query  } = param;\n    const data = query;\n    return {\n        data\n    };\n};\nvar _c;\n$RefreshReg$(_c, \"SecondPageArticle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2Vjb25kcGFnZWFydGljbGUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQzdCLGlEQUFpRDtBQUNLO0FBQ1Y7QUFDSjtBQUNRO0FBQ1A7QUFDc0I7QUFDRztBQUNsRSxNQUFNUyxRQUFRLDJJQUE2RDtBQUM1RCxTQUFTRyxrQkFBa0IsS0FBTSxFQUFFO1FBQVIsRUFBQ0MsS0FBSSxFQUFDLEdBQU47O0lBQ3RDLE1BQU1DLFNBQVNWLHNEQUFTQTtJQUN4QixNQUFNVyx5Q0FBeUM7SUFDL0MsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDLEVBQUU7SUFFekNELGdEQUFTQSxDQUFDLElBQU07UUFDWmdCLE1BQU0sR0FBcURMLE9BQWxERSx3Q0FBdUMsYUFBbUIsT0FBUkYsS0FBS00sRUFBRSxHQUM3REMsSUFBSSxDQUFDQyxDQUFBQSxXQUFZQSxTQUFTQyxJQUFJLElBQzlCRixJQUFJLENBQUNQLENBQUFBLE9BQVE7WUFDVlUsUUFBUUMsR0FBRyxDQUFDLGVBQWVYO1lBQzNCSSxXQUFXSjtRQUNmLEdBQUdZLEtBQUssQ0FBQ0MsQ0FBQUEsUUFBU0gsUUFBUUMsR0FBRyxDQUFDRTtJQUV0QyxHQUFHLEVBQUU7SUFDVHhCLGdEQUFTQSxDQUFDLElBQUlxQixRQUFRQyxHQUFHLENBQUMsaUJBQWlCUixVQUFTO1FBQUNBO0tBQVE7SUFDekQscUJBQ0ksOERBQUNXOzswQkFDRyw4REFBQzNCLGtEQUFJQTs7a0NBQ0QsOERBQUM0QjtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRTFCLDhEQUFDN0IsaUVBQU1BOzs7OzswQkFFUCw4REFBQ3NCO2dCQUFJUSxXQUFXbEMsMkZBQTBCOztrQ0FFckMsOERBQUNvQzt3QkFBR0YsV0FBV2xDLDZFQUFZO2tDQUFHZSxRQUFRc0IsS0FBSzs7Ozs7O2tDQUNwRCw4REFBQ1g7d0JBQUlRLFdBQVdsQywrRUFBYztrQ0FBR2UsUUFBUXVCLE9BQU87Ozs7OztrQ0FDaEQsOERBQUNDO3dCQUFLQyxLQUFLLEdBQTBDLE9BQXZDMUIsd0NBQXVDOzs7Ozs7a0NBSTdDLDhEQUFDMkI7d0JBQ0dQLFdBQVdsQyw0RUFBVzt3QkFDdEIyQyxTQUFTLElBQU07NEJBQ1g5QixPQUFPK0IsSUFBSTt3QkFDZjs7NEJBQ0M7NEJBQUk7Ozs7Ozs7Ozs7Ozs7MEJBSWIsOERBQUN2QywwREFBTUE7Ozs7Ozs7Ozs7O0FBR25CLENBQUM7R0E3Q3VCTTs7UUFDTFIsa0RBQVNBOzs7S0FESlE7QUE4Q3hCQSxrQkFBa0JrQyxlQUFlLEdBQUcsZUFBcUI7UUFBZCxFQUFFQyxNQUFLLEVBQUU7SUFDaEQsTUFBTWxDLE9BQU9rQztJQUViLE9BQU87UUFBRWxDO0lBQUs7QUFDbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NlY29uZHBhZ2VhcnRpY2xlLmpzeD80MWVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9zZWNvbmRQYWdlLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgUGFydGVuYXJpYXQgZnJvbSBcIi4vY29tcG9uZW50cy9wYXJ0ZW5hcmlhdC9wYXJ0ZW5hcmlhdFwiO1xuaW1wb3J0IEltYWdlQXJ0aWNsZSBmcm9tIFwiLi9jb21wb25lbnRzL2ltYWdlQXJ0aWNsZS9pbWFnZUFydGljbGVcIjtcbmNvbnN0IGltZ2cxID0gbmV3IFVSTChcIi4uLy4uL3B1YmxpYy9hc3NldHMvSU1HX2Jsb2cxLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Vjb25kUGFnZUFydGljbGUoe2RhdGF9KSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gICAgY29uc3QgUFJPVE9DT0xfQU5EX0hPU1RfTkFNRV9QQVJUX09GX1RIRV9VUkwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDUwJ1xuICAgIGNvbnN0IFthcnRpY2xlLCBzZXRBcnRpY2xlXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKGAke1BST1RPQ09MX0FORF9IT1NUX05BTUVfUEFSVF9PRl9USEVfVVJMfS9hcnRpY2xlLyR7ZGF0YS5pZH1gKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hlZGhpIGlkYXRhJywgZGF0YSk7XG4gICAgICAgICAgICAgICAgc2V0QXJ0aWNsZShkYXRhKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG5cbiAgICB9LCBbXSk7XG51c2VFZmZlY3QoKCk9PmNvbnNvbGUubG9nKCdoZWRoYSBhcnRpY2xlJywgYXJ0aWNsZSksW2FydGljbGVdKTtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPE5hdmJhciAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhfY29udGFpbmVyX3BhZ2V9PlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0cmV9PnthcnRpY2xlLnRpdHJlfTwvaDI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0+e2FydGljbGUuY29udGVudX08L2Rpdj5cbiAgICAgICAgPGltZyAgc3JjPXtgJHtQUk9UT0NPTF9BTkRfSE9TVF9OQU1FX1BBUlRfT0ZfVEhFX1VSTH0vaW1hZ2VzQXJ0aWNsZS9gfSAvPiBcbiAgICAgICAgey8qIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2UxfSBzcmM9e2Ake1BST1RPQ09MX0FORF9IT1NUX05BTUVfUEFSVF9PRl9USEVfVVJMfS9pbWFnZXNBcnRpY2xlLyR7YXJ0aWNsZT8uaW1hZ2VzWzBdfWB9IC8+ICAqL31cbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idG5SfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZXIuYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgICAgICBSZXRvdXJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuU2Vjb25kUGFnZUFydGljbGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBxdWVyeTtcblxuICAgIHJldHVybiB7IGRhdGEgfTtcbn07XG5cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJOYXZiYXIiLCJGb290ZXIiLCJQYXJ0ZW5hcmlhdCIsIkltYWdlQXJ0aWNsZSIsImltZ2cxIiwiVVJMIiwidXJsIiwiU2Vjb25kUGFnZUFydGljbGUiLCJkYXRhIiwicm91dGVyIiwiUFJPVE9DT0xfQU5EX0hPU1RfTkFNRV9QQVJUX09GX1RIRV9VUkwiLCJhcnRpY2xlIiwic2V0QXJ0aWNsZSIsImZldGNoIiwiaWQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiY2xhc3NOYW1lIiwiZmxleF9jb250YWluZXJfcGFnZSIsImgyIiwidGl0cmUiLCJjb250ZW51IiwiaW1nIiwic3JjIiwiYnV0dG9uIiwiYnRuUiIsIm9uQ2xpY2siLCJiYWNrIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/secondpagearticle.jsx\n"));

/***/ })

});