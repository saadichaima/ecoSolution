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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SecondPageArticle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/secondPage.module.scss */ \"./src/styles/secondPage.module.scss\");\n/* harmony import */ var _styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Navbar/Navbar */ \"./src/pages/components/Navbar/Navbar.jsx\");\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Footer */ \"./src/pages/components/Footer.js\");\n/* harmony import */ var _components_partenariat_partenariat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/partenariat/partenariat */ \"./src/pages/components/partenariat/partenariat.js\");\n/* harmony import */ var _components_imageArticle_imageArticle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/imageArticle/imageArticle */ \"./src/pages/components/imageArticle/imageArticle.js\");\n\nvar _s = $RefreshSig$();\n\n// import styles from '../styles/Home.module.css'\n\n\n\n\n\n\n\nconst imgg1 = /* asset import */ new __webpack_require__.U(__webpack_require__(/*! ../../public/assets/IMG_blog1.jpg */ \"./public/assets/IMG_blog1.jpg\"));\nfunction SecondPageArticle(param) {\n    let { data  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL = \"http://localhost:5050\";\n    const [article, setArticle] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetch(\"\".concat(PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL, \"/article/\").concat(data.id)).then((response)=>response.json()).then((data)=>{\n            console.log(\"hedhi idata\", data);\n            setArticle(data);\n        }).catch((error)=>console.log(error));\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _article_images;\n        console.log(\"hedha article\", article);\n        console.log(\"hetha taille imta3 tableau images\", article === null || article === void 0 ? void 0 : (_article_images = article.images) === null || _article_images === void 0 ? void 0 : _article_images.length);\n    }, [\n        article\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navbar_Navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default().flex_container_page),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default().titre),\n                        children: article.titre\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 18\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default().article),\n                        children: article.contenu\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        className: (_styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default().image1),\n                        src: \"\".concat(PROTOCOL_AND_HOST_NAME_PART_OF_THE_URL, \"/imagesArticle/\").concat(Array.isArray(article === null || article === void 0 ? void 0 : article.images) ? article.images[0] : article.images)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default().flex_container_page),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: (_styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default().titre),\n                                children: article.titre\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"row justify-content-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" col-sm-12 col-md-6\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \" col-sm-12 col-md-6\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default().article),\n                                            children: article.contenu\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 9\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                                        lineNumber: 76,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 5\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_secondPage_module_scss__WEBPACK_IMPORTED_MODULE_8___default().btnR),\n                                onClick: ()=>{\n                                    router.back();\n                                },\n                                children: [\n                                    \" \",\n                                    \"Retour\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                                lineNumber: 82,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                        lineNumber: 91,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n                lineNumber: 39,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Chaima\\\\Desktop\\\\ecoSolution\\\\src\\\\pages\\\\secondpagearticle.jsx\",\n        lineNumber: 30,\n        columnNumber: 9\n    }, this);\n}\n_s(SecondPageArticle, \"Nt8olb9Kll2sqFgkr1DZyUq2K/k=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SecondPageArticle;\nSecondPageArticle.getInitialProps = async (param)=>{\n    let { query  } = param;\n    const data = query;\n    return {\n        data\n    };\n}; /*import Head from \"next/head\";\r\n// import styles from '../styles/Home.module.css'\r\nimport styles from \"../styles/secondPage.module.scss\";\r\nimport { useEffect } from \"react\";\r\nimport { useRouter } from \"next/router\";\r\nimport Navbar from \"./components/Navbar/Navbar\";\r\nimport Footer from \"./components/Footer\";\r\nimport items from \"./items\";\r\n\r\nimport { Carousel } from \"react-responsive-carousel\";\r\nimport \"react-responsive-carousel/lib/styles/carousel.min.css\";\r\nconst breakPoints = [{ width: 1, itemsToShow: 1 }];\r\n\r\n\r\nconst items = [\r\n  {\r\n      id: \"1\",\r\n      title: 'Article1 : Energie renouvelable en Tunisie',\r\n      content: 'Le gouvernement tunisien encourage la population à utiliser les énergies renouvelables depuis 2014.Ils ont également investi dans de nouvelles centrales éoliennes et photovoltaïques. Ils prévoient également d&#39;accroître leur dépendance aux énergies renouvelables pour lutter contre le changement climatique. C&#39;est une bonne nouvelle pour l&#39;environnement, mais c&#39;est aussi une bonne nouvelle pour l&#39;économie du pays.',\r\n      image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png\"\r\n  },\r\n  {\r\n      id: \"2\",\r\n      title: 'Article 2 : Energie photovoltaïque : Avantages et inconvénients :',\r\n      content: ' Energie photovoltaïque en Tunisie: quelles sont les avantages et inconvénients.  Lorsque l&#39;on parle de l&#39;énergie photovoltaïque, on pense d&#39;abord à l&#39;énergie solaire. Malheureusement, l&#39;énergie solaire ne représente que 3,2% de l&#39;énergie produite en Tunisie. L&#39;énergie photovoltaïque représente donc la grande majorité de l&#39;énergie solaire. Cette énergie est produite par des panneaux photovoltaïques fixés sur un toit ou sur un terrain.',\r\n      image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png\"\r\n\r\n  },\r\n]\r\nimport Partenariat from \"./components/partenariat/partenariat\";\r\nimport ImageArticle from \"./components/imageArticle/imageArticle\";\r\nconst imgg1 = new URL(\"../../public/assets/IMG_blog1.jpg\", import.meta.url);\r\nexport default function SecondPageArticle(id) {\r\n  const router = useRouter();\r\n  var id1 = router.query.id;\r\n  var myObject = items.find((item) => item.id == id1);\r\n  console.log(myObject);\r\n\r\n  useEffect(() => {\r\n    //use id to get article Data from back\r\n  }, []);\r\n  return (\r\n    <div>\r\n      <Head>\r\n       <title>{myObject.title}</title>\r\n        <meta name=\"description\" content=\"Generated by create next app\" />\r\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\r\n        <link rel=\"icon\" href=\"/favicon.ico\" />\r\n      </Head>\r\n      <Navbar />\r\n\r\n      <div className={styles.flex_container_page}>\r\n    \r\n      <h2 className={styles.titre}>\r\n          {myObject.title}\r\n      </h2>\r\n\r\n      <div className=\"row justify-content-center\">\r\n          <div className=\" col-sm-12 col-md-6\">\r\n          <Carousel className=\"carousel\" breakPoints={breakPoints} autoPlay>\r\n              <div>\r\n                <img className=\"cards-blog1\"\r\n                  src={myObject.image}\r\n                  alt=\"Article image\"\r\n                />\r\n              </div>\r\n              <div>\r\n                <img className=\"cards-blog1\"\r\n                  src={myObject.image}\r\n                  alt=\"Article image\"\r\n                />\r\n              </div>\r\n              <div>\r\n                <img className=\"cards-blog1\"\r\n                  src={myObject.image}\r\n                  alt=\"Article image\"\r\n                />\r\n              </div>\r\n          </Carousel> \r\n          </div>\r\n          \r\n          <div className=\" col-sm-12 col-md-6\">\r\n          <p className={styles.article}>\r\n                {myObject.content}\r\n            </p>      \r\n          </div>\r\n      </div>\r\n        <button\r\n          className={styles.btnR}\r\n          onClick={() => {\r\n            router.back();\r\n          }}>\r\n          {\" \"}\r\n          Retour\r\n        </button>\r\n      </div>\r\n      <Partenariat />\r\n      <Footer />\r\n    </div>\r\n  );\r\n}\r\n */ \nvar _c;\n$RefreshReg$(_c, \"SecondPageArticle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLGVBQXFCO1FBQWQsRUFBRUMsTUFBSyxFQUFFO0lBQ2hELE1BQU14QyxPQUFPd0M7SUFFYixPQUFPO1FBQUV4QztJQUFLO0FBQ2xCLEdBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBcUdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9zZWNvbmRwYWdlYXJ0aWNsZS5qc3g/NDFlYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3NlY29uZFBhZ2UubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9jb21wb25lbnRzL05hdmJhci9OYXZiYXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL0Zvb3RlclwiO1xyXG5pbXBvcnQgUGFydGVuYXJpYXQgZnJvbSBcIi4vY29tcG9uZW50cy9wYXJ0ZW5hcmlhdC9wYXJ0ZW5hcmlhdFwiO1xyXG5pbXBvcnQgSW1hZ2VBcnRpY2xlIGZyb20gXCIuL2NvbXBvbmVudHMvaW1hZ2VBcnRpY2xlL2ltYWdlQXJ0aWNsZVwiO1xyXG5jb25zdCBpbWdnMSA9IG5ldyBVUkwoXCIuLi8uLi9wdWJsaWMvYXNzZXRzL0lNR19ibG9nMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2Vjb25kUGFnZUFydGljbGUoe2RhdGF9KSB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFBST1RPQ09MX0FORF9IT1NUX05BTUVfUEFSVF9PRl9USEVfVVJMID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTA1MCdcclxuICAgIGNvbnN0IFthcnRpY2xlLCBzZXRBcnRpY2xlXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKGAke1BST1RPQ09MX0FORF9IT1NUX05BTUVfUEFSVF9PRl9USEVfVVJMfS9hcnRpY2xlLyR7ZGF0YS5pZH1gKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2hlZGhpIGlkYXRhJywgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICBzZXRBcnRpY2xlKGRhdGEpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG5cclxuICAgIH0sIFtdKTtcclxudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2hlZGhhIGFydGljbGUnLCBhcnRpY2xlKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoZXRoYSB0YWlsbGUgaW10YTMgdGFibGVhdSBpbWFnZXMnLCBhcnRpY2xlPy5pbWFnZXM/Lmxlbmd0aClcclxuICAgIH0sW2FydGljbGVdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPE5hdmJhciAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4X2NvbnRhaW5lcl9wYWdlfT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRyZX0+e2FydGljbGUudGl0cmV9PC9oMj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGV9PnthcnRpY2xlLmNvbnRlbnV9PC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGltZyAgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2UxfSBzcmM9e2Ake1BST1RPQ09MX0FORF9IT1NUX05BTUVfUEFSVF9PRl9USEVfVVJMfS9pbWFnZXNBcnRpY2xlLyR7QXJyYXkuaXNBcnJheShhcnRpY2xlPy5pbWFnZXMpPyBhcnRpY2xlLmltYWdlc1swXTphcnRpY2xlLmltYWdlc31gfSAvPiBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mbGV4X2NvbnRhaW5lcl9wYWdlfT5cclxuICAgIFxyXG4gICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLnRpdHJlfT5cclxuICAgIHthcnRpY2xlLnRpdHJlfVxyXG4gICAgPC9oMj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgY29sLXNtLTEyIGNvbC1tZC02XCI+XHJcbiAgICAgICAgey8qIDxDYXJvdXNlbCBjbGFzc05hbWU9XCJjYXJvdXNlbFwiIGJyZWFrUG9pbnRzPXticmVha1BvaW50c30gYXV0b1BsYXk+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkcy1ibG9nMVwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e215T2JqZWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiQXJ0aWNsZSBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkcy1ibG9nMVwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e215T2JqZWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiQXJ0aWNsZSBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkcy1ibG9nMVwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e215T2JqZWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgYWx0PVwiQXJ0aWNsZSBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9DYXJvdXNlbD4gICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGNvbC1zbS0xMiBjb2wtbWQtNlwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGV9PlxyXG4gICAgICAgIHthcnRpY2xlLmNvbnRlbnV9XHJcbiAgICAgICAgICA8L3A+ICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idG5SfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGVyLmJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgUmV0b3VyXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxGb290ZXIgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuU2Vjb25kUGFnZUFydGljbGUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgcXVlcnkgfSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHF1ZXJ5O1xyXG5cclxuICAgIHJldHVybiB7IGRhdGEgfTtcclxufTtcclxuXHJcblxyXG5cclxuLyppbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL3NlY29uZFBhZ2UubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gXCIuL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL2NvbXBvbmVudHMvRm9vdGVyXCI7XHJcbmltcG9ydCBpdGVtcyBmcm9tIFwiLi9pdGVtc1wiO1xyXG5cclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbFwiO1xyXG5pbXBvcnQgXCJyZWFjdC1yZXNwb25zaXZlLWNhcm91c2VsL2xpYi9zdHlsZXMvY2Fyb3VzZWwubWluLmNzc1wiO1xyXG5jb25zdCBicmVha1BvaW50cyA9IFt7IHdpZHRoOiAxLCBpdGVtc1RvU2hvdzogMSB9XTtcclxuXHJcblxyXG5jb25zdCBpdGVtcyA9IFtcclxuICB7XHJcbiAgICAgIGlkOiBcIjFcIixcclxuICAgICAgdGl0bGU6ICdBcnRpY2xlMcKgOiBFbmVyZ2llIHJlbm91dmVsYWJsZSBlbiBUdW5pc2llJyxcclxuICAgICAgY29udGVudDogJ0xlIGdvdXZlcm5lbWVudCB0dW5pc2llbiBlbmNvdXJhZ2UgbGEgcG9wdWxhdGlvbiDDoCB1dGlsaXNlciBsZXMgw6luZXJnaWVzIHJlbm91dmVsYWJsZXMgZGVwdWlzIDIwMTQuSWxzIG9udCDDqWdhbGVtZW50IGludmVzdGkgZGFucyBkZSBub3V2ZWxsZXMgY2VudHJhbGVzIMOpb2xpZW5uZXMgZXQgcGhvdG92b2x0YcOvcXVlcy4gSWxzIHByw6l2b2llbnQgw6lnYWxlbWVudCBkJiMzOTthY2Nyb8OudHJlIGxldXIgZMOpcGVuZGFuY2UgYXV4IMOpbmVyZ2llcyByZW5vdXZlbGFibGVzIHBvdXIgbHV0dGVyIGNvbnRyZSBsZSBjaGFuZ2VtZW50IGNsaW1hdGlxdWUuIEMmIzM5O2VzdCB1bmUgYm9ubmUgbm91dmVsbGUgcG91ciBsJiMzOTtlbnZpcm9ubmVtZW50LCBtYWlzIGMmIzM5O2VzdCBhdXNzaSB1bmUgYm9ubmUgbm91dmVsbGUgcG91ciBsJiMzOTvDqWNvbm9taWUgZHUgcGF5cy4nLFxyXG4gICAgICBpbWFnZTogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2IvYjYvSW1hZ2VfY3JlYXRlZF93aXRoX2FfbW9iaWxlX3Bob25lLnBuZy8xMjAwcHgtSW1hZ2VfY3JlYXRlZF93aXRoX2FfbW9iaWxlX3Bob25lLnBuZ1wiXHJcbiAgfSxcclxuICB7XHJcbiAgICAgIGlkOiBcIjJcIixcclxuICAgICAgdGl0bGU6ICdBcnRpY2xlIDLCoDogRW5lcmdpZSBwaG90b3ZvbHRhw69xdWXCoDogQXZhbnRhZ2VzIGV0IGluY29udsOpbmllbnRzwqA6JyxcclxuICAgICAgY29udGVudDogJyBFbmVyZ2llIHBob3Rvdm9sdGHDr3F1ZSBlbiBUdW5pc2llOiBxdWVsbGVzIHNvbnQgbGVzIGF2YW50YWdlcyBldCBpbmNvbnbDqW5pZW50cy4gIExvcnNxdWUgbCYjMzk7b24gcGFybGUgZGUgbCYjMzk7w6luZXJnaWUgcGhvdG92b2x0YcOvcXVlLCBvbiBwZW5zZSBkJiMzOTthYm9yZCDDoCBsJiMzOTvDqW5lcmdpZSBzb2xhaXJlLiBNYWxoZXVyZXVzZW1lbnQsIGwmIzM5O8OpbmVyZ2llIHNvbGFpcmUgbmUgcmVwcsOpc2VudGUgcXVlIDMsMiUgZGUgbCYjMzk7w6luZXJnaWUgcHJvZHVpdGUgZW4gVHVuaXNpZS4gTCYjMzk7w6luZXJnaWUgcGhvdG92b2x0YcOvcXVlIHJlcHLDqXNlbnRlIGRvbmMgbGEgZ3JhbmRlIG1ham9yaXTDqSBkZSBsJiMzOTvDqW5lcmdpZSBzb2xhaXJlLiBDZXR0ZSDDqW5lcmdpZSBlc3QgcHJvZHVpdGUgcGFyIGRlcyBwYW5uZWF1eCBwaG90b3ZvbHRhw69xdWVzIGZpeMOpcyBzdXIgdW4gdG9pdCBvdSBzdXIgdW4gdGVycmFpbi4nLFxyXG4gICAgICBpbWFnZTogXCJodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2IvYjYvSW1hZ2VfY3JlYXRlZF93aXRoX2FfbW9iaWxlX3Bob25lLnBuZy8xMjAwcHgtSW1hZ2VfY3JlYXRlZF93aXRoX2FfbW9iaWxlX3Bob25lLnBuZ1wiXHJcblxyXG4gIH0sXHJcbl1cclxuaW1wb3J0IFBhcnRlbmFyaWF0IGZyb20gXCIuL2NvbXBvbmVudHMvcGFydGVuYXJpYXQvcGFydGVuYXJpYXRcIjtcclxuaW1wb3J0IEltYWdlQXJ0aWNsZSBmcm9tIFwiLi9jb21wb25lbnRzL2ltYWdlQXJ0aWNsZS9pbWFnZUFydGljbGVcIjtcclxuY29uc3QgaW1nZzEgPSBuZXcgVVJMKFwiLi4vLi4vcHVibGljL2Fzc2V0cy9JTUdfYmxvZzEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY29uZFBhZ2VBcnRpY2xlKGlkKSB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgdmFyIGlkMSA9IHJvdXRlci5xdWVyeS5pZDtcclxuICB2YXIgbXlPYmplY3QgPSBpdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLmlkID09IGlkMSk7XHJcbiAgY29uc29sZS5sb2cobXlPYmplY3QpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy91c2UgaWQgdG8gZ2V0IGFydGljbGUgRGF0YSBmcm9tIGJhY2tcclxuICB9LCBbXSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgPHRpdGxlPntteU9iamVjdC50aXRsZX08L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8TmF2YmFyIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZsZXhfY29udGFpbmVyX3BhZ2V9PlxyXG4gICAgXHJcbiAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRyZX0+XHJcbiAgICAgICAgICB7bXlPYmplY3QudGl0bGV9XHJcbiAgICAgIDwvaDI+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjb2wtc20tMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgIDxDYXJvdXNlbCBjbGFzc05hbWU9XCJjYXJvdXNlbFwiIGJyZWFrUG9pbnRzPXticmVha1BvaW50c30gYXV0b1BsYXk+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZHMtYmxvZzFcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e215T2JqZWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJBcnRpY2xlIGltYWdlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZHMtYmxvZzFcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e215T2JqZWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJBcnRpY2xlIGltYWdlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiY2FyZHMtYmxvZzFcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e215T2JqZWN0LmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJBcnRpY2xlIGltYWdlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0Nhcm91c2VsPiBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBjb2wtc20tMTIgY29sLW1kLTZcIj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmFydGljbGV9PlxyXG4gICAgICAgICAgICAgICAge215T2JqZWN0LmNvbnRlbnR9XHJcbiAgICAgICAgICAgIDwvcD4gICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5idG5SfVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICByb3V0ZXIuYmFjaygpO1xyXG4gICAgICAgICAgfX0+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICBSZXRvdXJcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxQYXJ0ZW5hcmlhdCAvPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiAqL1xyXG5cclxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIk5hdmJhciIsIkZvb3RlciIsIlBhcnRlbmFyaWF0IiwiSW1hZ2VBcnRpY2xlIiwiaW1nZzEiLCJVUkwiLCJ1cmwiLCJTZWNvbmRQYWdlQXJ0aWNsZSIsImRhdGEiLCJyb3V0ZXIiLCJQUk9UT0NPTF9BTkRfSE9TVF9OQU1FX1BBUlRfT0ZfVEhFX1VSTCIsImFydGljbGUiLCJzZXRBcnRpY2xlIiwiZmV0Y2giLCJpZCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImltYWdlcyIsImxlbmd0aCIsImRpdiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJjbGFzc05hbWUiLCJmbGV4X2NvbnRhaW5lcl9wYWdlIiwiaDIiLCJ0aXRyZSIsImNvbnRlbnUiLCJpbWciLCJpbWFnZTEiLCJzcmMiLCJBcnJheSIsImlzQXJyYXkiLCJwIiwiYnV0dG9uIiwiYnRuUiIsIm9uQ2xpY2siLCJiYWNrIiwiZ2V0SW5pdGlhbFByb3BzIiwicXVlcnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/secondpagearticle.jsx\n"));

/***/ })

});