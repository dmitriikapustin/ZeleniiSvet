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

/***/ "./src/components/WeWork/WeWork.jsx":
/*!******************************************!*\
  !*** ./src/components/WeWork/WeWork.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WeWork; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_svg_1_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/svg/1.svg */ \"./src/assets/svg/1.svg\");\n/* harmony import */ var _assets_svg_2_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/svg/2.svg */ \"./src/assets/svg/2.svg\");\n/* harmony import */ var _assets_svg_3_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/svg/3.svg */ \"./src/assets/svg/3.svg\");\n/* harmony import */ var _assets_svg_4_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/svg/4.svg */ \"./src/assets/svg/4.svg\");\n/* harmony import */ var _assets_svg_5_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/svg/5.svg */ \"./src/assets/svg/5.svg\");\n/* harmony import */ var _assets_svg_6_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/svg/6.svg */ \"./src/assets/svg/6.svg\");\n/* harmony import */ var _assets_svg_7_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/svg/7.svg */ \"./src/assets/svg/7.svg\");\n/* harmony import */ var _animationC_ScrollCardsAnimation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../animationC/ScrollCardsAnimation */ \"./src/components/animationC/ScrollCardsAnimation.jsx\");\n/* harmony import */ var _animationC_ScrollAnimation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../animationC/ScrollAnimation */ \"./src/components/animationC/ScrollAnimation.jsx\");\n/* harmony import */ var _WeWorkCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./WeWorkCard */ \"./src/components/WeWork/WeWorkCard.jsx\");\n\n\n\n\n\n\n\n\n\n\n\nconst mock = [\n    {\n        icon: _assets_svg_1_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"].src,\n        title: \"Потребительский кредит\",\n        text: [\n            \"Понадобились деньги для важных покупок в семью или на личные нужды, а накоплений нет. Мы поможем получить потребительский кредит в банке.\"\n        ]\n    },\n    {\n        icon: _assets_svg_3_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"].src,\n        title: \"Реинансирование\",\n        text: [\n            \"Если у вас есть кредит, но условия не устраивают, то эта услуга для вас. Мы заменим старый заём на новый, ещё и с выгодой для вас.\"\n        ]\n    },\n    {\n        icon: _assets_svg_5_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"].src,\n        title: \"Ипотека\",\n        text: [\n            \"Группа Компаний \\xabЗеленый свет\\xbb создана, чтобы оказывать качественные финансовые услуги.\",\n            \"Группа Компаний \\xabЗеленый свет\\xbb создана, чтобы оказывать качественные финансовые услуги.\"\n        ]\n    },\n    {\n        icon: _assets_svg_7_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"].src,\n        title: \"Кредит под залог недвижимости\",\n        text: [\n            \"Группа Компаний \\xabЗеленый свет\\xbb создана, чтобы оказывать качественные финансовые услуги.\",\n            \"Группа Компаний \\xabЗеленый свет\\xbb создана, чтобы оказывать качественные финансовые услуги.\"\n        ]\n    },\n    {\n        icon: _assets_svg_2_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"].src,\n        title: \"Кредит под залог автомобиля\",\n        text: [\n            \"Случаются разные ситуации, когда вам срочно нужна крупная сумма. Мы с пониманием к этому относимся и помогаем получить самый выгодный кредит с хорошими условиями.\"\n        ]\n    },\n    {\n        icon: _assets_svg_4_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"].src,\n        title: \"Кредит для юр лиц\",\n        text: [\n            \"Группа Компаний \\xabЗеленый свет\\xbb создана, чтобы оказывать качественные финансовые услуги.\",\n            \"Группа Компаний \\xabЗеленый свет\\xbb создана, чтобы оказывать качественные финансовые услуги.\"\n        ]\n    },\n    {\n        icon: _assets_svg_6_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"].src,\n        title: \"Лизинг\",\n        text: [\n            \"Группа Компаний \\xabЗеленый свет\\xbb создана, чтобы оказывать качественные финансовые услуги.\",\n            \"Группа Компаний \\xabЗеленый свет\\xbb создана, чтобы оказывать качественные финансовые услуги.\"\n        ]\n    },\n    {\n        icon: _assets_svg_7_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"].src,\n        title: \"Мы поможем решить вашу проблему\",\n        text: [\n            \"Группа Компаний \\xabЗеленый свет\\xbb создана, чтобы оказывать качественные финансовые услуги.\"\n        ]\n    }\n];\nfunction WeWork() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"work\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animationC_ScrollAnimation__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    delay: 0,\n                    triggerOnce: false,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"work__title font-5-light\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: \"Работаем\"\n                            }, void 0, false, {\n                                fileName: \"/Users/artemsimonov/Desktop/brokerage/src/components/WeWork/WeWork.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 62\n                            }, this),\n                            \" с физическими и юридическими лицами\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/artemsimonov/Desktop/brokerage/src/components/WeWork/WeWork.jsx\",\n                        lineNumber: 64,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/artemsimonov/Desktop/brokerage/src/components/WeWork/WeWork.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animationC_ScrollAnimation__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                    delay: 0,\n                    triggerOnce: false,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"work__text\",\n                        children: [\n                            \"Группа Компаний \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                children: \"\\xabЗеленый свет\\xbb\"\n                            }, void 0, false, {\n                                fileName: \"/Users/artemsimonov/Desktop/brokerage/src/components/WeWork/WeWork.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 41\n                            }, this),\n                            \" создана, чтобы оказывать качественные финансовые услуги.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/artemsimonov/Desktop/brokerage/src/components/WeWork/WeWork.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/artemsimonov/Desktop/brokerage/src/components/WeWork/WeWork.jsx\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_animationC_ScrollCardsAnimation__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                    className: \"work__cards\",\n                    children: mock.map((m, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_WeWorkCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                            ...m,\n                            isGreen: i === 7\n                        }, i, false, {\n                            fileName: \"/Users/artemsimonov/Desktop/brokerage/src/components/WeWork/WeWork.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 41\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/artemsimonov/Desktop/brokerage/src/components/WeWork/WeWork.jsx\",\n                    lineNumber: 72,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/artemsimonov/Desktop/brokerage/src/components/WeWork/WeWork.jsx\",\n            lineNumber: 62,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/artemsimonov/Desktop/brokerage/src/components/WeWork/WeWork.jsx\",\n        lineNumber: 61,\n        columnNumber: 9\n    }, this);\n}\n_c = WeWork;\nvar _c;\n$RefreshReg$(_c, \"WeWork\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XZVdvcmsvV2VXb3JrLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUUyQjtBQUNWO0FBRXRCO0FBRXJDLE1BQU1VLE9BQU87SUFDVDtRQUNJQyxNQUFNWCw2REFBUztRQUNmYSxPQUFPO1FBQ1BDLE1BQU07WUFBQztTQUE0STtJQUN2SjtJQUNBO1FBQ0lILE1BQU1ULDZEQUFTO1FBQ2ZXLE9BQU87UUFDUEMsTUFBTTtZQUFDO1NBQXFJO0lBQ2hKO0lBQ0E7UUFDSUgsTUFBTVAsNkRBQVM7UUFDZlMsT0FBTztRQUNQQyxNQUFNO1lBQUM7WUFBMkY7U0FBMEY7SUFDaE07SUFDQTtRQUNJSCxNQUFNTCw2REFBUztRQUNmTyxPQUFPO1FBQ1BDLE1BQU07WUFBQztZQUEyRjtTQUEwRjtJQUNoTTtJQUNBO1FBQ0lILE1BQU1WLDZEQUFTO1FBQ2ZZLE9BQU87UUFDUEMsTUFBTTtZQUFDO1NBQXFLO0lBQ2hMO0lBQ0E7UUFDSUgsTUFBTVIsNkRBQVM7UUFDZlUsT0FBTztRQUNQQyxNQUFNO1lBQUM7WUFBMkY7U0FBMEY7SUFDaE07SUFDQTtRQUNJSCxNQUFNTiw2REFBUztRQUNmUSxPQUFPO1FBQ1BDLE1BQU07WUFBQztZQUEyRjtTQUEwRjtJQUNoTTtJQUNBO1FBQ0lILE1BQU1MLDZEQUFTO1FBQ2ZPLE9BQU87UUFDUEMsTUFBTTtZQUFDO1NBQTBGO0lBQ3JHO0NBQ0g7QUFJYyxTQUFTQyxTQUFRO0lBQzVCLHFCQUNJLDhEQUFDQztRQUFRQyxXQUFVO2tCQUNmLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDWCw4REFBQ1QsbUVBQWVBO29CQUFDVyxPQUFPO29CQUFHQyxhQUFhLEtBQUs7OEJBQ3pDLDRFQUFDQzt3QkFBR0osV0FBVTs7MENBQTJCLDhEQUFDSzswQ0FBRTs7Ozs7OzRCQUFZOzs7Ozs7Ozs7Ozs7OEJBRTVELDhEQUFDZCxtRUFBZUE7b0JBQUNXLE9BQU87b0JBQUdDLGFBQWEsS0FBSzs4QkFDekMsNEVBQUNHO3dCQUFFTixXQUFVOzs0QkFBYTswQ0FDTiw4REFBQ0s7MENBQUU7Ozs7Ozs0QkFBa0I7Ozs7Ozs7Ozs7Ozs4QkFJN0MsOERBQUNmLHdFQUFvQkE7b0JBQ2pCVSxXQUFXOzhCQUVWUCxLQUFLYyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0Msa0JBQU0sOERBQUNqQixvREFBVUE7NEJBQVUsR0FBR2dCLENBQUM7NEJBQUVFLFNBQVNELE1BQU07MkJBQXpCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXpELENBQUM7S0F4QnVCWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9XZVdvcmsvV2VXb3JrLmpzeD85ZGYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpY29uMSBmcm9tICcuLi8uLi9hc3NldHMvc3ZnLzEuc3ZnJ1xuaW1wb3J0IGljb24yIGZyb20gJy4uLy4uL2Fzc2V0cy9zdmcvMi5zdmcnXG5pbXBvcnQgaWNvbjMgZnJvbSAnLi4vLi4vYXNzZXRzL3N2Zy8zLnN2ZydcbmltcG9ydCBpY29uNCBmcm9tICcuLi8uLi9hc3NldHMvc3ZnLzQuc3ZnJ1xuaW1wb3J0IGljb241IGZyb20gJy4uLy4uL2Fzc2V0cy9zdmcvNS5zdmcnXG5pbXBvcnQgaWNvbjYgZnJvbSAnLi4vLi4vYXNzZXRzL3N2Zy82LnN2ZydcbmltcG9ydCBpY29uNyBmcm9tICcuLi8uLi9hc3NldHMvc3ZnLzcuc3ZnJ1xuXG5pbXBvcnQgU2Nyb2xsQ2FyZHNBbmltYXRpb24gZnJvbSAnLi4vYW5pbWF0aW9uQy9TY3JvbGxDYXJkc0FuaW1hdGlvbidcbmltcG9ydCBTY3JvbGxBbmltYXRpb24gZnJvbSAnLi4vYW5pbWF0aW9uQy9TY3JvbGxBbmltYXRpb24nXG5cbmltcG9ydCBXZVdvcmtDYXJkIGZyb20gJy4vV2VXb3JrQ2FyZCdcblxuY29uc3QgbW9jayA9IFtcbiAgICB7XG4gICAgICAgIGljb246IGljb24xLnNyYyxcbiAgICAgICAgdGl0bGU6ICfQn9C+0YLRgNC10LHQuNGC0LXQu9GM0YHQutC40Lkg0LrRgNC10LTQuNGCJyxcbiAgICAgICAgdGV4dDogWyfQn9C+0L3QsNC00L7QsdC40LvQuNGB0Ywg0LTQtdC90YzQs9C4INC00LvRjyDQstCw0LbQvdGL0YUg0L/QvtC60YPQv9C+0Log0LIg0YHQtdC80YzRjiDQuNC70Lgg0L3QsCDQu9C40YfQvdGL0LUg0L3Rg9C20LTRiywg0LAg0L3QsNC60L7Qv9C70LXQvdC40Lkg0L3QtdGCLiDQnNGLINC/0L7QvNC+0LbQtdC8INC/0L7Qu9GD0YfQuNGC0Ywg0L/QvtGC0YDQtdCx0LjRgtC10LvRjNGB0LrQuNC5INC60YDQtdC00LjRgiDQsiDQsdCw0L3QutC1LiddLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpY29uOiBpY29uMy5zcmMsXG4gICAgICAgIHRpdGxlOiAn0KDQtdC40L3QsNC90YHQuNGA0L7QstCw0L3QuNC1JyxcbiAgICAgICAgdGV4dDogWyfQldGB0LvQuCDRgyDQstCw0YEg0LXRgdGC0Ywg0LrRgNC10LTQuNGCLCDQvdC+INGD0YHQu9C+0LLQuNGPINC90LUg0YPRgdGC0YDQsNC40LLQsNGO0YIsINGC0L4g0Y3RgtCwINGD0YHQu9GD0LPQsCDQtNC70Y8g0LLQsNGBLiDQnNGLINC30LDQvNC10L3QuNC8INGB0YLQsNGA0YvQuSDQt9Cw0ZHQvCDQvdCwINC90L7QstGL0LksINC10YnRkSDQuCDRgSDQstGL0LPQvtC00L7QuSDQtNC70Y8g0LLQsNGBLiddLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpY29uOiBpY29uNS5zcmMsXG4gICAgICAgIHRpdGxlOiAn0JjQv9C+0YLQtdC60LAnLFxuICAgICAgICB0ZXh0OiBbJ9CT0YDRg9C/0L/QsCDQmtC+0LzQv9Cw0L3QuNC5IMKr0JfQtdC70LXQvdGL0Lkg0YHQstC10YLCuyDRgdC+0LfQtNCw0L3QsCwg0YfRgtC+0LHRiyDQvtC60LDQt9GL0LLQsNGC0Ywg0LrQsNGH0LXRgdGC0LLQtdC90L3Ri9C1INGE0LjQvdCw0L3RgdC+0LLRi9C1INGD0YHQu9GD0LPQuC4nLCAn0JPRgNGD0L/Qv9CwINCa0L7QvNC/0LDQvdC40LkgwqvQl9C10LvQtdC90YvQuSDRgdCy0LXRgsK7INGB0L7Qt9C00LDQvdCwLCDRh9GC0L7QsdGLINC+0LrQsNC30YvQstCw0YLRjCDQutCw0YfQtdGB0YLQstC10L3QvdGL0LUg0YTQuNC90LDQvdGB0L7QstGL0LUg0YPRgdC70YPQs9C4LiddLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpY29uOiBpY29uNy5zcmMsXG4gICAgICAgIHRpdGxlOiAn0JrRgNC10LTQuNGCINC/0L7QtCDQt9Cw0LvQvtCzINC90LXQtNCy0LjQttC40LzQvtGB0YLQuCcsXG4gICAgICAgIHRleHQ6IFsn0JPRgNGD0L/Qv9CwINCa0L7QvNC/0LDQvdC40LkgwqvQl9C10LvQtdC90YvQuSDRgdCy0LXRgsK7INGB0L7Qt9C00LDQvdCwLCDRh9GC0L7QsdGLINC+0LrQsNC30YvQstCw0YLRjCDQutCw0YfQtdGB0YLQstC10L3QvdGL0LUg0YTQuNC90LDQvdGB0L7QstGL0LUg0YPRgdC70YPQs9C4LicsICfQk9GA0YPQv9C/0LAg0JrQvtC80L/QsNC90LjQuSDCq9CX0LXQu9C10L3Ri9C5INGB0LLQtdGCwrsg0YHQvtC30LTQsNC90LAsINGH0YLQvtCx0Ysg0L7QutCw0LfRi9Cy0LDRgtGMINC60LDRh9C10YHRgtCy0LXQvdC90YvQtSDRhNC40L3QsNC90YHQvtCy0YvQtSDRg9GB0LvRg9Cz0LguJ10sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGljb246IGljb24yLnNyYyxcbiAgICAgICAgdGl0bGU6ICfQmtGA0LXQtNC40YIg0L/QvtC0INC30LDQu9C+0LMg0LDQstGC0L7QvNC+0LHQuNC70Y8nLFxuICAgICAgICB0ZXh0OiBbJ9Ch0LvRg9GH0LDRjtGC0YHRjyDRgNCw0LfQvdGL0LUg0YHQuNGC0YPQsNGG0LjQuCwg0LrQvtCz0LTQsCDQstCw0Lwg0YHRgNC+0YfQvdC+INC90YPQttC90LAg0LrRgNGD0L/QvdCw0Y8g0YHRg9C80LzQsC4g0JzRiyDRgSDQv9C+0L3QuNC80LDQvdC40LXQvCDQuiDRjdGC0L7QvNGDINC+0YLQvdC+0YHQuNC80YHRjyDQuCDQv9C+0LzQvtCz0LDQtdC8INC/0L7Qu9GD0YfQuNGC0Ywg0YHQsNC80YvQuSDQstGL0LPQvtC00L3Ri9C5INC60YDQtdC00LjRgiDRgSDRhdC+0YDQvtGI0LjQvNC4INGD0YHQu9C+0LLQuNGP0LzQuC4nXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWNvbjogaWNvbjQuc3JjLFxuICAgICAgICB0aXRsZTogJ9Ca0YDQtdC00LjRgiDQtNC70Y8g0Y7RgCDQu9C40YYnLFxuICAgICAgICB0ZXh0OiBbJ9CT0YDRg9C/0L/QsCDQmtC+0LzQv9Cw0L3QuNC5IMKr0JfQtdC70LXQvdGL0Lkg0YHQstC10YLCuyDRgdC+0LfQtNCw0L3QsCwg0YfRgtC+0LHRiyDQvtC60LDQt9GL0LLQsNGC0Ywg0LrQsNGH0LXRgdGC0LLQtdC90L3Ri9C1INGE0LjQvdCw0L3RgdC+0LLRi9C1INGD0YHQu9GD0LPQuC4nLCAn0JPRgNGD0L/Qv9CwINCa0L7QvNC/0LDQvdC40LkgwqvQl9C10LvQtdC90YvQuSDRgdCy0LXRgsK7INGB0L7Qt9C00LDQvdCwLCDRh9GC0L7QsdGLINC+0LrQsNC30YvQstCw0YLRjCDQutCw0YfQtdGB0YLQstC10L3QvdGL0LUg0YTQuNC90LDQvdGB0L7QstGL0LUg0YPRgdC70YPQs9C4LiddLFxuICAgIH0sXG4gICAge1xuICAgICAgICBpY29uOiBpY29uNi5zcmMsXG4gICAgICAgIHRpdGxlOiAn0JvQuNC30LjQvdCzJyxcbiAgICAgICAgdGV4dDogWyfQk9GA0YPQv9C/0LAg0JrQvtC80L/QsNC90LjQuSDCq9CX0LXQu9C10L3Ri9C5INGB0LLQtdGCwrsg0YHQvtC30LTQsNC90LAsINGH0YLQvtCx0Ysg0L7QutCw0LfRi9Cy0LDRgtGMINC60LDRh9C10YHRgtCy0LXQvdC90YvQtSDRhNC40L3QsNC90YHQvtCy0YvQtSDRg9GB0LvRg9Cz0LguJywgJ9CT0YDRg9C/0L/QsCDQmtC+0LzQv9Cw0L3QuNC5IMKr0JfQtdC70LXQvdGL0Lkg0YHQstC10YLCuyDRgdC+0LfQtNCw0L3QsCwg0YfRgtC+0LHRiyDQvtC60LDQt9GL0LLQsNGC0Ywg0LrQsNGH0LXRgdGC0LLQtdC90L3Ri9C1INGE0LjQvdCw0L3RgdC+0LLRi9C1INGD0YHQu9GD0LPQuC4nXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWNvbjogaWNvbjcuc3JjLFxuICAgICAgICB0aXRsZTogJ9Cc0Ysg0L/QvtC80L7QttC10Lwg0YDQtdGI0LjRgtGMINCy0LDRiNGDINC/0YDQvtCx0LvQtdC80YMnLFxuICAgICAgICB0ZXh0OiBbJ9CT0YDRg9C/0L/QsCDQmtC+0LzQv9Cw0L3QuNC5IMKr0JfQtdC70LXQvdGL0Lkg0YHQstC10YLCuyDRgdC+0LfQtNCw0L3QsCwg0YfRgtC+0LHRiyDQvtC60LDQt9GL0LLQsNGC0Ywg0LrQsNGH0LXRgdGC0LLQtdC90L3Ri9C1INGE0LjQvdCw0L3RgdC+0LLRi9C1INGD0YHQu9GD0LPQuC4nXSxcbiAgICB9LFxuXVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2VXb3JrKCl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3b3JrXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gZGVsYXk9ezB9IHRyaWdnZXJPbmNlPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ3b3JrX190aXRsZSBmb250LTUtbGlnaHRcIj48Yj7QoNCw0LHQvtGC0LDQtdC8PC9iPiDRgSDRhNC40LfQuNGH0LXRgdC60LjQvNC4INC4INGO0YDQuNC00LjRh9C10YHQutC40LzQuCDQu9C40YbQsNC80Lg8L2gyPlxuICAgICAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxuICAgICAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gZGVsYXk9ezB9IHRyaWdnZXJPbmNlPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIndvcmtfX3RleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgINCT0YDRg9C/0L/QsCDQmtC+0LzQv9Cw0L3QuNC5IDxiPsKr0JfQtdC70LXQvdGL0Lkg0YHQstC10YLCuzwvYj4g0YHQvtC30LTQsNC90LAsINGH0YLQvtCx0Ysg0L7QutCw0LfRi9Cy0LDRgtGMINC60LDRh9C10YHRgtCy0LXQvdC90YvQtSDRhNC40L3QsNC90YHQvtCy0YvQtSDRg9GB0LvRg9Cz0LguXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cblxuICAgICAgICAgICAgICAgIDxTY3JvbGxDYXJkc0FuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1wid29ya19fY2FyZHNcIn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHttb2NrLm1hcCgobSwgaSkgPT4gPFdlV29ya0NhcmQga2V5PXtpfSB7Li4ubX0gaXNHcmVlbj17aSA9PT0gN30vPil9XG4gICAgICAgICAgICAgICAgPC9TY3JvbGxDYXJkc0FuaW1hdGlvbj5cbiAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3b3JrX19jYXJkc1wiPlxuICAgICAgICAgICAgICAgICAgICB7bW9jay5tYXAoKG0sIGkpID0+IDxXZVdvcmtDYXJkIGtleT17aX0gey4uLm19IGlzR3JlZW49e2kgPT09IDd9Lz4pfVxuICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJpY29uMSIsImljb24yIiwiaWNvbjMiLCJpY29uNCIsImljb241IiwiaWNvbjYiLCJpY29uNyIsIlNjcm9sbENhcmRzQW5pbWF0aW9uIiwiU2Nyb2xsQW5pbWF0aW9uIiwiV2VXb3JrQ2FyZCIsIm1vY2siLCJpY29uIiwic3JjIiwidGl0bGUiLCJ0ZXh0IiwiV2VXb3JrIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImRlbGF5IiwidHJpZ2dlck9uY2UiLCJoMiIsImIiLCJwIiwibWFwIiwibSIsImkiLCJpc0dyZWVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/WeWork/WeWork.jsx\n"));

/***/ })

});