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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SecondPageArticle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/secondPage.module.scss */ \"./src/styles/secondPage.module.scss\");\n/* harmony import */ var _styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Navbar/Navbar */ \"./src/pages/components/Navbar/Navbar.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Footer */ \"./src/pages/components/Footer.js\");\n/* harmony import */ var _components_ArticlePage_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/ArticlePage/item */ \"./src/pages/components/ArticlePage/item.js\");\n/* harmony import */ var _components_partenariat_partenariat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/partenariat/partenariat */ \"./src/pages/components/partenariat/partenariat.js\");\n/* harmony import */ var _components_imageArticle_imageArticle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/imageArticle/imageArticle */ \"./src/pages/components/imageArticle/imageArticle.js\");\n/* harmony import */ var react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-bootstrap/Carousel */ \"./node_modules/react-bootstrap/esm/Carousel.js\");\n\nvar _s = $RefreshSig$();\n\n\n// import styles from '../styles/Home.module.css'\n\n\n\n\n\n\n\n\n\nconst imgg1 = /* asset import */ new __webpack_require__.U(__webpack_require__(/*! ../../public/assets/IMG_blog1.jpg */ \"./public/assets/IMG_blog1.jpg\"));\nfunction SecondPageArticle(id, content, title, description, images) {\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    var id1 = router.query.id;\n    console;\n    const [article, setArticle] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetch(PROTOCOLANDHOSTNAMEPARTOFTHEURL + \"articles/\".concat(id)).then((response)=>response.json()).then((data)=>{\n            setArticle(data);\n            console.log(article);\n        }).catch((error)=>console.log(error));\n    }, []);\n    console.log(article);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_10___default().flex_container_page),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_10___default().article),\n                        children: router.query.content\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_10___default().image1),\n                        src: router.query.image\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    article ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"jsx-ec7d71210d467bd8\" + \" \" + \"card-title\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"jsx-ec7d71210d467bd8\",\n                                children: article.titre\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, this),\n                            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                id: \"ec7d71210d467bd8\",\n                                children: \".card-title.jsx-ec7d71210d467bd8{font-size:2rem;text-align:center;padding:10px}\"\n                            }, void 0, false, void 0, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n                    article ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                        fade: true,\n                        className: \"activeCarroussel\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_11__[\"default\"].Item, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: (_styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_10___default().imageCarroussel),\n                                    src: article.image,\n                                    alt: \"First slide\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_11__[\"default\"].Item, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: (_styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_10___default().imageCarroussel),\n                                    src: article.image1,\n                                    alt: \" sec slide\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap_Carousel__WEBPACK_IMPORTED_MODULE_11__[\"default\"].Item, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    className: (_styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_10___default().imageCarroussel),\n                                    src: article.image2,\n                                    alt: \"First slide\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n                    article ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"jsx-f3d71e280878a750\" + \" \" + \"card-content\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-f3d71e280878a750\",\n                                    children: article.content\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 15\n                                }, this),\n                                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    id: \"f3d71e280878a750\",\n                                    children: \".card-content.jsx-f3d71e280878a750{font-size:2rem;text-align:center;padding:10px}\"\n                                }, void 0, false, void 0, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                            lineNumber: 118,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                        lineNumber: 117,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_10___default().btnR),\n                        onClick: ()=>{\n                            router.back();\n                        },\n                        children: [\n                            \" \",\n                            \"Retour\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                        lineNumber: 132,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(SecondPageArticle, \"800bu3VJP7zfKr23+lsQ2zXNTVU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = SecondPageArticle;\nvar _c;\n$RefreshReg$(_c, \"SecondPageArticle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2Vjb25kcGFnZWFydGljbGUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDN0IsaURBQWlEO0FBQ0s7QUFDVjtBQUNKO0FBRVE7QUFDUDtBQUNhO0FBQ1M7QUFDRztBQUNsQjtBQUVoRCxNQUFNVyxRQUFRLDJJQUE2RDtBQUM1RCxTQUFTRyxrQkFBa0JDLEVBQUUsRUFBQ0MsT0FBTyxFQUFDQyxLQUFLLEVBQUNDLFdBQVcsRUFBQ0MsTUFBTSxFQUFFOztJQUM3RSxNQUFNQyxTQUFTaEIsc0RBQVNBO0lBQ3hCLElBQUlpQixNQUFNRCxPQUFPRSxLQUFLLENBQUNQLEVBQUU7SUFDM0JRO0lBQ0UsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUd0QiwrQ0FBUUE7SUFJdENELGdEQUFTQSxDQUFDLElBQU07UUFDZHdCLE1BQU1DLGtDQUFrQyxZQUFlLE9BQUhaLEtBQy9DYSxJQUFJLENBQUMsQ0FBQ0MsV0FBYUEsU0FBU0MsSUFBSSxJQUNoQ0YsSUFBSSxDQUFDLENBQUNHLE9BQVM7WUFDWk4sV0FBV007WUFDWFIsUUFBUVMsR0FBRyxDQUFDUjtRQUNoQixHQUNDUyxLQUFLLENBQUMsQ0FBQ0MsUUFBVVgsUUFBUVMsR0FBRyxDQUFDRTtJQUN0QyxHQUFHLEVBQUU7SUFDTFgsUUFBUVMsR0FBRyxDQUFDUjtJQUVWLHFCQUNFLDhEQUFDVzs7MEJBQ0MsOERBQUNuQyxrREFBSUE7O2tDQUNILDhEQUFDaUI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ21CO3dCQUFLQyxNQUFLO3dCQUFjckIsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ29CO3dCQUFLQyxNQUFLO3dCQUFXckIsU0FBUTs7Ozs7O2tDQUM5Qiw4REFBQ3NCO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDbkMsaUVBQU1BOzs7OzswQkFFUCw4REFBQzhCO2dCQUFJTSxXQUFXeEMsNEZBQTBCOztrQ0FFeEMsOERBQUNrQzt3QkFBSU0sV0FBV3hDLGdGQUFjO2tDQUFHbUIsT0FBT0UsS0FBSyxDQUFDTixPQUFPOzs7Ozs7a0NBQ3JELDhEQUFDMkI7d0JBQUlGLFdBQVd4QywrRUFBYTt3QkFBRTRDLEtBQUt6QixPQUFPRSxLQUFLLENBQUN3QixLQUFLOzs7Ozs7b0JBR3JEdEIsd0JBQ0MsOERBQUNXO2tFQUFjOzswQ0FDYiw4REFBQ1k7OzBDQUFJdkIsUUFBUXdCLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs2Q0FVcEIsNklBQ0Q7b0JBQ0F4Qix3QkFDQyw4REFBQ2QsaUVBQVFBO3dCQUFDdUMsSUFBSTt3QkFBQ1IsV0FBVTs7MENBQ3ZCLDhEQUFDL0Isc0VBQWE7MENBQ1osNEVBQUNpQztvQ0FDQ0YsV0FBV3hDLHdGQUFzQjtvQ0FDakM0QyxLQUFLckIsUUFBUXNCLEtBQUs7b0NBQ2xCTSxLQUFJOzs7Ozs7Ozs7OzswQ0FHUiw4REFBQzFDLHNFQUFhOzBDQUNaLDRFQUFDaUM7b0NBQ0NGLFdBQVd4Qyx3RkFBc0I7b0NBQ2pDNEMsS0FBS3JCLFFBQVFvQixNQUFNO29DQUNuQlEsS0FBSTs7Ozs7Ozs7Ozs7MENBR1IsOERBQUMxQyxzRUFBYTswQ0FDWiw0RUFBQ2lDO29DQUNDRixXQUFXeEMsd0ZBQXNCO29DQUNqQzRDLEtBQUtyQixRQUFRNkIsTUFBTTtvQ0FDbkJELEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7NkNBOEJWLDZJQUNEO29CQUNBNUIsd0JBQ0MsOERBQUNXO3dCQUFJTSxXQUFVO2tDQUNiLDRFQUFDTjtzRUFBYzs7OENBQ2IsOERBQUNtQjs7OENBQUc5QixRQUFRUixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2Q0FXdkIsNklBQ0Q7a0NBQ0QsOERBQUN1Qzt3QkFDQ2QsV0FBV3hDLDZFQUFXO3dCQUN0QndELFNBQVMsSUFBTTs0QkFDYnJDLE9BQU9zQyxJQUFJO3dCQUNiOzs0QkFFQzs0QkFBSTs7Ozs7Ozs7Ozs7OzswQkFJVCw4REFBQ3BELDBEQUFNQTs7Ozs7Ozs7Ozs7QUFHYixDQUFDO0dBbEl1QlE7O1FBQ1BWLGtEQUFTQTs7O0tBREZVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zZWNvbmRwYWdlYXJ0aWNsZS5qc3g/NDFlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3NlY29uZFBhZ2UubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4vY29tcG9uZW50cy9Gb290ZXJcIjtcclxuaW1wb3J0IHsgaXRlbXMgfSBmcm9tIFwiLi9jb21wb25lbnRzL0FydGljbGVQYWdlL2l0ZW1cIjtcclxuaW1wb3J0IFBhcnRlbmFyaWF0IGZyb20gXCIuL2NvbXBvbmVudHMvcGFydGVuYXJpYXQvcGFydGVuYXJpYXRcIjtcclxuaW1wb3J0IEltYWdlQXJ0aWNsZSBmcm9tIFwiLi9jb21wb25lbnRzL2ltYWdlQXJ0aWNsZS9pbWFnZUFydGljbGVcIjtcclxuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1ib290c3RyYXAvQ2Fyb3VzZWxcIjtcclxuXHJcbmNvbnN0IGltZ2cxID0gbmV3IFVSTChcIi4uLy4uL3B1YmxpYy9hc3NldHMvSU1HX2Jsb2cxLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWNvbmRQYWdlQXJ0aWNsZShpZCxjb250ZW50LHRpdGxlLGRlc2NyaXB0aW9uLGltYWdlcykge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIHZhciBpZDEgPSByb3V0ZXIucXVlcnkuaWQ7XHJcbmNvbnNvbGVcclxuICBjb25zdCBbYXJ0aWNsZSwgc2V0QXJ0aWNsZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIFxyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoKFBST1RPQ09MQU5ESE9TVE5BTUVQQVJUT0ZUSEVVUkwgKyBgYXJ0aWNsZXMvJHtpZH1gKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHNldEFydGljbGUoZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGFydGljbGUpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxufSwgW10pO1xyXG5jb25zb2xlLmxvZyhhcnRpY2xlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TmF2YmFyIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhfY29udGFpbmVyX3BhZ2V9PlxyXG4gICAgICAgIHsvKiA8aDIgY2xhc3NOYW1lPXtzdHlsZXMudGl0cmV9PnthcnRpY2xlLnRpdHJlfTwvaDI+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXJ0aWNsZX0+e3JvdXRlci5xdWVyeS5jb250ZW50fTwvZGl2PlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2UxfSBzcmM9e3JvdXRlci5xdWVyeS5pbWFnZX0gLz5cclxuXHJcbiAgICAgICAgey8qICA8aDE+e2l0ZW1zW3BhcnNlSW50KGlkMSldLmlkfTwvaDE+ICovfVxyXG4gICAgICAgIHthcnRpY2xlID8gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxoMz57YXJ0aWNsZS50aXRyZX08L2gzPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2FydGljbGUgPyAoXHJcbiAgICAgICAgICA8Q2Fyb3VzZWwgZmFkZSBjbGFzc05hbWU9XCJhY3RpdmVDYXJyb3Vzc2VsXCI+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlQ2Fycm91c3NlbH1cclxuICAgICAgICAgICAgICAgIHNyYz17YXJ0aWNsZS5pbWFnZX1cclxuICAgICAgICAgICAgICAgIGFsdD1cIkZpcnN0IHNsaWRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlQ2Fycm91c3NlbH1cclxuICAgICAgICAgICAgICAgIHNyYz17YXJ0aWNsZS5pbWFnZTF9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCIgc2VjIHNsaWRlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtPlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltYWdlQ2Fycm91c3NlbH1cclxuICAgICAgICAgICAgICAgIHNyYz17YXJ0aWNsZS5pbWFnZTJ9XHJcbiAgICAgICAgICAgICAgICBhbHQ9XCJGaXJzdCBzbGlkZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9DYXJvdXNlbC5JdGVtPlxyXG5cclxuICAgICAgICAgICAgey8qIDxhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1wcmV2XCJcclxuICAgICAgICAgICAgICBocmVmPVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIlxyXG4gICAgICAgICAgICAgIHJvbGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgIGRhdGEtc2xpZGU9XCJwcmV2XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiXHJcbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPlByZXZpb3VzPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2E+ICovfVxyXG4gICAgICAgICAgICB7LyogPGFcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcm91c2VsLWNvbnRyb2wtbmV4dFwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI2Nhcm91c2VsRXhhbXBsZUluZGljYXRvcnNcIlxyXG4gICAgICAgICAgICAgICAgcm9sZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBkYXRhLXNsaWRlPVwibmV4dFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2Fyb3VzZWwtY29udHJvbC1uZXh0LWljb25cIlxyXG4gICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5OZXh0PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT4gKi99XHJcbiAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAge2FydGljbGUgPyAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8cD57YXJ0aWNsZS5jb250ZW50fTwvcD5cclxuICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PjwvPlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnRuUn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgcm91dGVyLmJhY2soKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgUmV0b3VyXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJOYXZiYXIiLCJGb290ZXIiLCJpdGVtcyIsIlBhcnRlbmFyaWF0IiwiSW1hZ2VBcnRpY2xlIiwiQ2Fyb3VzZWwiLCJpbWdnMSIsIlVSTCIsInVybCIsIlNlY29uZFBhZ2VBcnRpY2xlIiwiaWQiLCJjb250ZW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlcyIsInJvdXRlciIsImlkMSIsInF1ZXJ5IiwiY29uc29sZSIsImFydGljbGUiLCJzZXRBcnRpY2xlIiwiZmV0Y2giLCJQUk9UT0NPTEFOREhPU1ROQU1FUEFSVE9GVEhFVVJMIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJsb2ciLCJjYXRjaCIsImVycm9yIiwiZGl2IiwibWV0YSIsIm5hbWUiLCJsaW5rIiwicmVsIiwiaHJlZiIsImNsYXNzTmFtZSIsImZsZXhfY29udGFpbmVyX3BhZ2UiLCJpbWciLCJpbWFnZTEiLCJzcmMiLCJpbWFnZSIsImgzIiwidGl0cmUiLCJmYWRlIiwiSXRlbSIsImltYWdlQ2Fycm91c3NlbCIsImFsdCIsImltYWdlMiIsInAiLCJidXR0b24iLCJidG5SIiwib25DbGljayIsImJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/secondpagearticle.jsx\n"));

/***/ })

});