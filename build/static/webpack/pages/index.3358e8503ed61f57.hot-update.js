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

/***/ "./src/components/animationC/ScrollAnimation.jsx":
/*!*******************************************************!*\
  !*** ./src/components/animationC/ScrollAnimation.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ \"./node_modules/react-intersection-observer/react-intersection-observer.modern.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ScrollAnimation = ({ children , delay  })=>{\n    _s();\n    // const ref = useRef(null);\n    // const options = useScroll({\n    //   target: ref,\n    //   offset: [\"-400px\", \"-400px\"]\n    // });\n    // const [scrollYValue, setScrollYValue] = useState(0);\n    // const ref = useRef(null)\n    // const { scrollY, scrollYProgress } = useScroll(ref);\n    // useEffect(() => {\n    //     scrollY.onChange((v) => setScrollYValue(v));\n    //     scrollYProgress.onChange((v) => setScrollYProgressValue(v));\n    // }, [scrollY, scrollYProgress]);\n    const { ref , inView , entry  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView)({\n        threshold: .3,\n        triggerOnce: false\n    });\n    // useEffect(() => {\n    //     console.log(scrollY, scrollYProgress)\n    // }, [scrollY, scrollYProgress])\n    const initial = {\n        opacity: 0,\n        scale: .9\n    };\n    const animate = {\n        opacity: 1,\n        scale: 1\n    };\n    console.log(delay);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n            style: {\n                scrollYProgress\n            },\n            initial: initial,\n            whileInView: animate,\n            // animate={inView ? animate : initial}\n            transition: {\n                duration: .2,\n                ease: \"easeInOut\",\n                delay: delay\n            },\n            children: children\n        }, void 0, false, {\n            fileName: \"/Users/artemsimonov/Desktop/brokerage/src/components/animationC/ScrollAnimation.jsx\",\n            lineNumber: 46,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/artemsimonov/Desktop/brokerage/src/components/animationC/ScrollAnimation.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ScrollAnimation, \"aMQlUcdZ4WoU8Lxc9LOCvLVkklE=\", false, function() {\n    return [\n        react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__.useInView\n    ];\n});\n_c = ScrollAnimation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollAnimation);\nvar _c;\n$RefreshReg$(_c, \"ScrollAnimation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hbmltYXRpb25DL1Njcm9sbEFuaW1hdGlvbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBEO0FBQ0Y7QUFDTjtBQUVsRCxNQUFNTyxrQkFBa0IsQ0FBQyxFQUFDQyxTQUFRLEVBQUVDLE1BQUssRUFBQyxHQUFLOztJQUMzQyw0QkFBNEI7SUFDNUIsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixpQ0FBaUM7SUFDakMsTUFBTTtJQUVOLHVEQUF1RDtJQUV2RCwyQkFBMkI7SUFDM0IsdURBQXVEO0lBRXZELG9CQUFvQjtJQUNwQixtREFBbUQ7SUFDbkQsbUVBQW1FO0lBQ25FLGtDQUFrQztJQUdsQyxNQUFNLEVBQUVDLElBQUcsRUFBRUMsT0FBTSxFQUFFQyxNQUFLLEVBQUUsR0FBR1Isc0VBQVNBLENBQUM7UUFDckNTLFdBQVc7UUFDWEMsYUFBYSxLQUFLO0lBQ3BCO0lBRUYsb0JBQW9CO0lBQ3BCLDRDQUE0QztJQUM1QyxpQ0FBaUM7SUFFakMsTUFBTUMsVUFBVTtRQUNaQyxTQUFTO1FBQ1RDLE9BQU87SUFDWDtJQUNBLE1BQU1DLFVBQVU7UUFDWkYsU0FBUztRQUNUQyxPQUFPO0lBRVg7SUFFQUUsUUFBUUMsR0FBRyxDQUFDWDtJQUVkLHFCQUNFLDhEQUFDWTtRQUFJWCxLQUFLQTtrQkFDTiw0RUFBQ0wscURBQVU7WUFDSGlCLE9BQU87Z0JBQUVDO1lBQWdCO1lBQ3pCUixTQUFTQTtZQUNUUyxhQUFhTjtZQUNiLHVDQUF1QztZQUN2Q08sWUFBWTtnQkFDUkMsVUFBVTtnQkFDVkMsTUFBTTtnQkFDTmxCLE9BQU9BO1lBQ1g7c0JBRUNEOzs7Ozs7Ozs7OztBQU1qQjtHQTFETUQ7O1FBa0I2Qkgsa0VBQVNBOzs7S0FsQnRDRztBQTRETiwrREFBZUEsZUFBZUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hbmltYXRpb25DL1Njcm9sbEFuaW1hdGlvbi5qc3g/OTUxZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VJblZpZXcgfSBmcm9tIFwicmVhY3QtaW50ZXJzZWN0aW9uLW9ic2VydmVyXCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZVNjcm9sbCB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IFNjcm9sbEFuaW1hdGlvbiA9ICh7Y2hpbGRyZW4sIGRlbGF5fSkgPT4ge1xuICAgIC8vIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKTtcbiAgICAvLyBjb25zdCBvcHRpb25zID0gdXNlU2Nyb2xsKHtcbiAgICAvLyAgIHRhcmdldDogcmVmLFxuICAgIC8vICAgb2Zmc2V0OiBbXCItNDAwcHhcIiwgXCItNDAwcHhcIl1cbiAgICAvLyB9KTtcblxuICAgIC8vIGNvbnN0IFtzY3JvbGxZVmFsdWUsIHNldFNjcm9sbFlWYWx1ZV0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIC8vIGNvbnN0IHJlZiA9IHVzZVJlZihudWxsKVxuICAgIC8vIGNvbnN0IHsgc2Nyb2xsWSwgc2Nyb2xsWVByb2dyZXNzIH0gPSB1c2VTY3JvbGwocmVmKTtcblxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gICAgIHNjcm9sbFkub25DaGFuZ2UoKHYpID0+IHNldFNjcm9sbFlWYWx1ZSh2KSk7XG4gICAgLy8gICAgIHNjcm9sbFlQcm9ncmVzcy5vbkNoYW5nZSgodikgPT4gc2V0U2Nyb2xsWVByb2dyZXNzVmFsdWUodikpO1xuICAgIC8vIH0sIFtzY3JvbGxZLCBzY3JvbGxZUHJvZ3Jlc3NdKTtcblxuXG4gICAgY29uc3QgeyByZWYsIGluVmlldywgZW50cnkgfSA9IHVzZUluVmlldyh7XG4gICAgICAgIHRocmVzaG9sZDogLjMsXG4gICAgICAgIHRyaWdnZXJPbmNlOiBmYWxzZSxcbiAgICAgIH0pO1xuXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coc2Nyb2xsWSwgc2Nyb2xsWVByb2dyZXNzKVxuICAgIC8vIH0sIFtzY3JvbGxZLCBzY3JvbGxZUHJvZ3Jlc3NdKVxuICAgIFxuICAgIGNvbnN0IGluaXRpYWwgPSB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIHNjYWxlOiAuOVxuICAgIH1cbiAgICBjb25zdCBhbmltYXRlID0ge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICBzY2FsZTogMVxuXG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coZGVsYXkpXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHJlZj17cmVmfT5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBzY3JvbGxZUHJvZ3Jlc3MgfX1cbiAgICAgICAgICAgICAgICBpbml0aWFsPXtpbml0aWFsfVxuICAgICAgICAgICAgICAgIHdoaWxlSW5WaWV3PXthbmltYXRlfVxuICAgICAgICAgICAgICAgIC8vIGFuaW1hdGU9e2luVmlldyA/IGFuaW1hdGUgOiBpbml0aWFsfVxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IC4yLFxuICAgICAgICAgICAgICAgICAgICBlYXNlOiBcImVhc2VJbk91dFwiLFxuICAgICAgICAgICAgICAgICAgICBkZWxheTogZGVsYXlcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cblxuXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2Nyb2xsQW5pbWF0aW9uXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUluVmlldyIsIm1vdGlvbiIsInVzZVNjcm9sbCIsIlNjcm9sbEFuaW1hdGlvbiIsImNoaWxkcmVuIiwiZGVsYXkiLCJyZWYiLCJpblZpZXciLCJlbnRyeSIsInRocmVzaG9sZCIsInRyaWdnZXJPbmNlIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJzY2FsZSIsImFuaW1hdGUiLCJjb25zb2xlIiwibG9nIiwiZGl2Iiwic3R5bGUiLCJzY3JvbGxZUHJvZ3Jlc3MiLCJ3aGlsZUluVmlldyIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsImVhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/animationC/ScrollAnimation.jsx\n"));

/***/ })

});