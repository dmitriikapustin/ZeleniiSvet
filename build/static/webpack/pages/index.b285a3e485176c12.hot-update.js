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

/***/ "./src/components/animationC/ScrollCardsAnimation.jsx":
/*!************************************************************!*\
  !*** ./src/components/animationC/ScrollCardsAnimation.jsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ScrollCardsAnimation = ({ children , className  })=>{\n    _s();\n    const initial = {\n        opacity: 0,\n        scale: .9\n    };\n    const animate = {\n        opacity: 1,\n        scale: 1\n    };\n    const { ref , inView , entry  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView)({\n        threshold: .25,\n        triggerOnce: false\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        className: className,\n        children: children.map((child, index)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                initial: initial,\n                whileInView: animate,\n                transition: {\n                    duration: .3,\n                    delay: .1 * index,\n                    ease: \"easeInOut\"\n                },\n                children: child\n            }, void 0, false, {\n                fileName: \"/Users/artemsimonov/Desktop/brokerage/src/components/animationC/ScrollCardsAnimation.jsx\",\n                lineNumber: 28,\n                columnNumber: 20\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/artemsimonov/Desktop/brokerage/src/components/animationC/ScrollCardsAnimation.jsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ScrollCardsAnimation, \"aMQlUcdZ4WoU8Lxc9LOCvLVkklE=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView\n    ];\n});\n_c = ScrollCardsAnimation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollCardsAnimation);\nvar _c;\n$RefreshReg$(_c, \"ScrollCardsAnimation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hbmltYXRpb25DL1Njcm9sbENhcmRzQW5pbWF0aW9uLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDYztBQUNpQjtBQUV4RCxNQUFNRyx1QkFBdUIsQ0FBQyxFQUFDQyxTQUFRLEVBQUVDLFVBQVMsRUFBQyxHQUFLOztJQUdwRCxNQUFNQyxVQUFVO1FBQ1pDLFNBQVM7UUFDVEMsT0FBTztJQUNYO0lBQ0EsTUFBTUMsVUFBVTtRQUNaRixTQUFTO1FBQ1RDLE9BQU87SUFFWDtJQUVBLE1BQU0sRUFBRUUsSUFBRyxFQUFFQyxPQUFNLEVBQUVDLE1BQUssRUFBRSxHQUFHVixzRUFBU0EsQ0FBQztRQUNyQ1csV0FBVztRQUNYQyxhQUFhLEtBQUs7SUFDcEI7SUFJSixxQkFDRSw4REFBQ0M7UUFBSUwsS0FBS0E7UUFBS0wsV0FBV0E7a0JBQ3JCRCxTQUFTWSxHQUFHLENBQUMsQ0FBQ0MsT0FBT0MsUUFBVTtZQUM1QixxQkFBTyw4REFBQ2pCLHFEQUFVO2dCQUNkSyxTQUFTQTtnQkFDVGEsYUFBYVY7Z0JBQ2JXLFlBQVk7b0JBQ1JDLFVBQVU7b0JBQ1ZDLE9BQU8sS0FBS0o7b0JBQ1pLLE1BQU07Z0JBQ1Y7MEJBRUNOOzs7Ozs7UUFFVDs7Ozs7O0FBSVI7R0F0Q01kOztRQWE2QkQsa0VBQVNBOzs7S0FidENDO0FBd0NOLCtEQUFlQSxvQkFBb0JBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYW5pbWF0aW9uQy9TY3JvbGxDYXJkc0FuaW1hdGlvbi5qc3g/MjA5MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlSW5WaWV3IH0gZnJvbSBcInJlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlclwiO1xuXG5jb25zdCBTY3JvbGxDYXJkc0FuaW1hdGlvbiA9ICh7Y2hpbGRyZW4sIGNsYXNzTmFtZX0pID0+IHtcblxuICAgIFxuICAgIGNvbnN0IGluaXRpYWwgPSB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHNjYWxlOiAuOVxuICAgIH1cbiAgICBjb25zdCBhbmltYXRlID0ge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBzY2FsZTogMVxuXG4gICAgfVxuXG4gICAgY29uc3QgeyByZWYsIGluVmlldywgZW50cnkgfSA9IHVzZUluVmlldyh7XG4gICAgICAgIHRocmVzaG9sZDogLjI1LFxuICAgICAgICB0cmlnZ2VyT25jZTogZmFsc2UsXG4gICAgICB9KTtcblxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIHtjaGlsZHJlbi5tYXAoKGNoaWxkLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgaW5pdGlhbD17aW5pdGlhbH1cbiAgICAgICAgICAgICAgICB3aGlsZUluVmlldz17YW5pbWF0ZX1cbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAuMyxcbiAgICAgICAgICAgICAgICAgICAgZGVsYXk6IC4xICogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGVhc2U6IFwiZWFzZUluT3V0XCJcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjaGlsZH1cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgfSl9XG5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTY3JvbGxDYXJkc0FuaW1hdGlvblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwibW90aW9uIiwidXNlSW5WaWV3IiwiU2Nyb2xsQ2FyZHNBbmltYXRpb24iLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJvcGFjaXR5Iiwic2NhbGUiLCJhbmltYXRlIiwicmVmIiwiaW5WaWV3IiwiZW50cnkiLCJ0aHJlc2hvbGQiLCJ0cmlnZ2VyT25jZSIsImRpdiIsIm1hcCIsImNoaWxkIiwiaW5kZXgiLCJ3aGlsZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImRlbGF5IiwiZWFzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/animationC/ScrollCardsAnimation.jsx\n"));

/***/ })

});