/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/styles.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/planetbe.ttf */ "./src/fonts/planetbe.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: 'Planet Benson';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\r\n}\r\n\r\n:root{\r\n    --clr-primary: #2b2d42;\r\n    --clr-secondary: #8d99ae;\r\n    --clr-accent: #ffd166;\r\n    --clr-neutral: #edf2f4;\r\n}\r\n\r\n\r\n*, *::before, *::after{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n\r\nbody{\r\n    color: var(--clr-neutral);\r\n    font-family: 'Open Sans', sans-serif;;\r\n    font-weight: 400;\r\n    font-size: 1.3125rem;\r\n    line-height: 1.6;\r\n}\r\n\r\n\r\n\r\n#content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n\r\nimg {\r\n    display: block;\r\n    max-width: 100%;\r\n  }\r\n\r\n\r\n\r\n.centerContainer {\r\n    margin-inline: auto;\r\n    width: min(90%, 50.5rem); \r\n}\r\n\r\n\r\n\r\n/* Header */\r\n\r\n#header{\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-accent);\r\n    font-family: 'Planet Benson';\r\n    font-size: 2rem;\r\n    padding: 2rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n#tabs ul {\r\n    background-color: var(--clr-accent);\r\n    border-bottom: 3px solid var(--clr-primary);\r\n    display: flex;\r\n    justify-content: space-around;\r\n    list-style: none;\r\n    padding: 1rem;\r\n}\r\n\r\n\r\n.tabItem {\r\n    \r\n    background-color: var(--clr-primary);\r\n    border-radius: 4px;\r\n    color: var(--clr-neutral);\r\n    cursor: pointer;\r\n    font-size: 1.3rem;\r\n    padding: 1rem 2rem;\r\n}\r\n\r\n\r\n#tabs ul li:hover , .active {\r\n    background-color: var(--clr-accent);\r\n    color: var(--clr-primary);\r\n    border: 2px solid var(--clr-primary);\r\n    padding: 14px 30px;\r\n}\r\n\r\n\r\n\r\n\r\n/* main content */\r\n\r\n#main{\r\n    background-color: var(--clr-accent);\r\n    color: var(--clr-primary);\r\n}\r\n\r\n\r\n\r\n/* tabContent */\r\n\r\n.tabContent{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 3rem;\r\n}\r\n\r\n\r\n.tabContent > * {\r\n    margin-bottom: 2em;\r\n}\r\n\r\n\r\n\r\n/* about us */\r\n\r\n#aboutChef > *{\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n\r\n\r\n/* menu */\r\n\r\n#menuDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 3rem;\r\n    padding: 3rem 0;\r\n}\r\n\r\n\r\n\r\n.menuCard{\r\n    background-color: var(--clr-neutral);\r\n    border: 3px solid var(--clr-primary);\r\n    border-radius: 4px;\r\n    color: var(--clr-primary);\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 300px;\r\n}\r\n\r\n\r\n\r\n.itemDetails{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 1rem;\r\n    padding: 0.5rem;\r\n}\r\n\r\n\r\n\r\n#qty{\r\n    cursor: pointer;\r\n    font-size: 1.1rem;\r\n    padding: 0.25rem;\r\n    width: 50px;\r\n}\r\n\r\n\r\n\r\n#addToCart{\r\n    background-color: var(--clr-accent);\r\n    border: 1px solid var(--clr-primary);\r\n    border-radius: 4px;\r\n    margin-top: 0.5rem;\r\n    padding: 0.75rem;\r\n}\r\n\r\n\r\n#addToCart:hover{\r\n    background-color: #fac039;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n/* contact */\r\n\r\n#contactDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0 auto;\r\n    padding: 2rem 2rem 4rem 2rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n#cookingImg, #chefImg{\r\n    max-width: 300px;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n\r\n#contactInfo{\r\n    border: 3px solid var(--clr-primary);\r\n    border-radius: 4px;\r\n    font-weight: bold;\r\n    margin-top: 0.5rem;\r\n    max-width: 370px;\r\n    padding: 1rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n/* footer */\r\n\r\n#footer {\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-neutral);\r\n    font-size: 1.2rem;\r\n    padding: 1.5rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n#footer a{\r\n    color: var(--clr-accent);\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n\r\n@media (min-width: 40em) {\r\n    \r\n    .tabContent{\r\n        padding: 3rem 5rem;\r\n    }\r\n\r\n    .tabContent > * {\r\n        flex-basis: 100%;\r\n    }\r\n\r\n    .tabContent > * + *{\r\n        margin-left: 2em;\r\n    }\r\n\r\n\r\n    #menuDiv{\r\n        flex-flow: row wrap;\r\n    }\r\n\r\n\r\n    #contactDiv{\r\n        padding-bottom: 6rem;\r\n    }\r\n\r\n}\r\n\r\n@media (min-height: 750px){\r\n    \r\n    #footer{\r\n        position: fixed;\r\n        bottom: 0;\r\n        left: 0;\r\n        width: 100%;\r\n    }\r\n  }\r\n\r\n@media(max-width: 500px){\r\n   \r\n    #tabs ul {\r\n      flex-direction: column;\r\n      gap: 0.5rem;\r\n      text-align: center;\r\n    }\r\n\r\n    #tabs ul li {\r\n        width: 10rem;\r\n        margin-inline: auto;\r\n    }\r\n    \r\n   \r\n    #contactDiv{\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        margin: 0 auto;\r\n        padding: 2rem 2rem 4rem 2rem;\r\n    }\r\n    \r\n}", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: 'Planet Benson';\r\n    src: url('../fonts/planetbe.ttf') format('truetype');\r\n}\r\n\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');\r\n\r\n:root{\r\n    --clr-primary: #2b2d42;\r\n    --clr-secondary: #8d99ae;\r\n    --clr-accent: #ffd166;\r\n    --clr-neutral: #edf2f4;\r\n}\r\n\r\n\r\n*, *::before, *::after{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n\r\nbody{\r\n    color: var(--clr-neutral);\r\n    font-family: 'Open Sans', sans-serif;;\r\n    font-weight: 400;\r\n    font-size: 1.3125rem;\r\n    line-height: 1.6;\r\n}\r\n\r\n\r\n\r\n#content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n\r\nimg {\r\n    display: block;\r\n    max-width: 100%;\r\n  }\r\n\r\n\r\n\r\n.centerContainer {\r\n    margin-inline: auto;\r\n    width: min(90%, 50.5rem); \r\n}\r\n\r\n\r\n\r\n/* Header */\r\n\r\n#header{\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-accent);\r\n    font-family: 'Planet Benson';\r\n    font-size: 2rem;\r\n    padding: 2rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n#tabs ul {\r\n    background-color: var(--clr-accent);\r\n    border-bottom: 3px solid var(--clr-primary);\r\n    display: flex;\r\n    justify-content: space-around;\r\n    list-style: none;\r\n    padding: 1rem;\r\n}\r\n\r\n\r\n.tabItem {\r\n    \r\n    background-color: var(--clr-primary);\r\n    border-radius: 4px;\r\n    color: var(--clr-neutral);\r\n    cursor: pointer;\r\n    font-size: 1.3rem;\r\n    padding: 1rem 2rem;\r\n}\r\n\r\n\r\n#tabs ul li:hover , .active {\r\n    background-color: var(--clr-accent);\r\n    color: var(--clr-primary);\r\n    border: 2px solid var(--clr-primary);\r\n    padding: 14px 30px;\r\n}\r\n\r\n\r\n\r\n\r\n/* main content */\r\n\r\n#main{\r\n    background-color: var(--clr-accent);\r\n    color: var(--clr-primary);\r\n}\r\n\r\n\r\n\r\n/* tabContent */\r\n\r\n.tabContent{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 3rem;\r\n}\r\n\r\n\r\n.tabContent > * {\r\n    margin-bottom: 2em;\r\n}\r\n\r\n\r\n\r\n/* about us */\r\n\r\n#aboutChef > *{\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n\r\n\r\n/* menu */\r\n\r\n#menuDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 3rem;\r\n    padding: 3rem 0;\r\n}\r\n\r\n\r\n\r\n.menuCard{\r\n    background-color: var(--clr-neutral);\r\n    border: 3px solid var(--clr-primary);\r\n    border-radius: 4px;\r\n    color: var(--clr-primary);\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 300px;\r\n}\r\n\r\n\r\n\r\n.itemDetails{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 1rem;\r\n    padding: 0.5rem;\r\n}\r\n\r\n\r\n\r\n#qty{\r\n    cursor: pointer;\r\n    font-size: 1.1rem;\r\n    padding: 0.25rem;\r\n    width: 50px;\r\n}\r\n\r\n\r\n\r\n#addToCart{\r\n    background-color: var(--clr-accent);\r\n    border: 1px solid var(--clr-primary);\r\n    border-radius: 4px;\r\n    margin-top: 0.5rem;\r\n    padding: 0.75rem;\r\n}\r\n\r\n\r\n#addToCart:hover{\r\n    background-color: #fac039;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n/* contact */\r\n\r\n#contactDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0 auto;\r\n    padding: 2rem 2rem 4rem 2rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n#cookingImg, #chefImg{\r\n    max-width: 300px;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n\r\n#contactInfo{\r\n    border: 3px solid var(--clr-primary);\r\n    border-radius: 4px;\r\n    font-weight: bold;\r\n    margin-top: 0.5rem;\r\n    max-width: 370px;\r\n    padding: 1rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n/* footer */\r\n\r\n#footer {\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-neutral);\r\n    font-size: 1.2rem;\r\n    padding: 1.5rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n#footer a{\r\n    color: var(--clr-accent);\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n\r\n@media (min-width: 40em) {\r\n    \r\n    .tabContent{\r\n        padding: 3rem 5rem;\r\n    }\r\n\r\n    .tabContent > * {\r\n        flex-basis: 100%;\r\n    }\r\n\r\n    .tabContent > * + *{\r\n        margin-left: 2em;\r\n    }\r\n\r\n\r\n    #menuDiv{\r\n        flex-flow: row wrap;\r\n    }\r\n\r\n\r\n    #contactDiv{\r\n        padding-bottom: 6rem;\r\n    }\r\n\r\n}\r\n\r\n@media (min-height: 750px){\r\n    \r\n    #footer{\r\n        position: fixed;\r\n        bottom: 0;\r\n        left: 0;\r\n        width: 100%;\r\n    }\r\n  }\r\n\r\n@media(max-width: 500px){\r\n   \r\n    #tabs ul {\r\n      flex-direction: column;\r\n      gap: 0.5rem;\r\n      text-align: center;\r\n    }\r\n\r\n    #tabs ul li {\r\n        width: 10rem;\r\n        margin-inline: auto;\r\n    }\r\n    \r\n   \r\n    #contactDiv{\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        margin: 0 auto;\r\n        padding: 2rem 2rem 4rem 2rem;\r\n    }\r\n    \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/aboutUs.js":
/*!***********************************!*\
  !*** ./src/components/aboutUs.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutUs)
/* harmony export */ });
/* harmony import */ var _images_chef_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/chef.svg */ "./src/images/chef.svg");


function aboutUs(){
    
    //aboutUs div
    const aboutUsContent= document.createElement('div');
    aboutUsContent.id ='aboutUsContent';
    aboutUsContent.classList.add('tabContent');


    // chef img
    const imgDiv= document.createElement('div');
    const chefImg = new Image();
    chefImg.src= _images_chef_svg__WEBPACK_IMPORTED_MODULE_0__;
    chefImg.id= 'chefImg';
    imgDiv.appendChild(chefImg);
    

    //about Chef Div
    const aboutChef = document.createElement('div');
    aboutChef.id='aboutChef';
    aboutChef.innerHTML= `
        <div>
            <h2>Our Story</h2>
            <p>Based locally in City, we serve fresh home-cooked halal food.  Special care is taken to make sure all ingredients are fresh.</p>

        </div>
        
        <div>
            <h2>Our Vision</h2>
            <p>We believe in spreading warmth and happiness through our services. Currently we're a small business run by a family, but we work hard and wish to expand our business to serve more people.</p>
        </div>
    `

    //add imgDiv and aboutChef div to aboutUsContent div
    aboutUsContent.append(imgDiv, aboutChef);

  return aboutUsContent;
}

/***/ }),

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _images_cooking_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/cooking.svg */ "./src/images/cooking.svg");


function contact(){
    const contactDiv = document.createElement('div');
    contactDiv.id= 'contactDiv';

    const imgDiv= document.createElement('div');
    const cookingImg = new Image();
    cookingImg.src= _images_cooking_svg__WEBPACK_IMPORTED_MODULE_0__;
    cookingImg.id= 'cookingImg';
    imgDiv.appendChild(cookingImg);

    contactDiv.append(imgDiv)
    contactDiv.innerHTML+= `
    <h3>For Mass Orders & Other Queries</h3>
    <div id='contactInfo'>
    <div>Phone: xxx-xxx-xxxx</div>
    <div>Email: owner@abbunonveg.com</div>
    <div>Address: ABC Colony, XYZ Road, City - (xxx-xxx)</div>
    </div>
    `
    
return contactDiv;
}

/***/ }),

/***/ "./src/components/content.js":
/*!***********************************!*\
  !*** ./src/components/content.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _aboutUs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutUs */ "./src/components/aboutUs.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/components/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/components/contact.js");





function content(){
    const contentDiv= document.createElement('div');
contentDiv.id='content';


//header
const header= document.createElement('header');
header.id= 'header';
header.textContent = 'Abbu Non-Veg';


//nav tabs 
const nav= document.createElement('nav');
nav.id= 'tabs';
nav.classList.add('centerContainer')


nav.innerHTML= `<ul> 
                    <li id='about' class='tabItem active'>About Us</li>
                    <li id='menu' class='tabItem'>Menu</li>
                    <li id='contact' class='tabItem'>Contact</li>
                </ul>`



//main div

const main = document.createElement('main');
main.id='main';
main.classList.add('centerContainer');


//default is about us page
main.append((0,_aboutUs__WEBPACK_IMPORTED_MODULE_0__["default"])());



//tabbing functionality

nav.addEventListener('click', (e)=>{

    //remove active class from each menu item, later add only that which is clicked
    let tabItemArr= Array.from(e.target.parentElement.children);
    tabItemArr.forEach(menuItem=> menuItem.classList.remove('active'));

    
    if(e.target.id==='about')
        {   
            e.target.classList.add('active');
            main.innerHTML='';
            main.append((0,_aboutUs__WEBPACK_IMPORTED_MODULE_0__["default"])())
        }

    else if(e.target.id==='menu')
        {   
            e.target.classList.add('active');
            main.innerHTML='';
            main.append((0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])());
        }

    else if(e.target.id==='contact')
        {   
            e.target.classList.add('active');
            main.innerHTML='';
            main.append((0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])());
        }
})



//footer
const footer= document.createElement('footer');
footer.id='footer';
footer.innerHTML= `Made by <a href="https://github.com/nashitshayan" target="_blank">Nashit Shayan Khan</a>. Click <a href="https://github.com/nashitshayan/restaurant-page" target="_blank">here</a> to see the code.`


contentDiv.append(header,nav, main,footer);

return contentDiv;

}

/***/ }),

/***/ "./src/components/menu.js":
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _images_chickenBiryani_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/chickenBiryani.jpg */ "./src/images/chickenBiryani.jpg");
/* harmony import */ var _images_chickenTikka_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/chickenTikka.jpeg */ "./src/images/chickenTikka.jpeg");
/* harmony import */ var _images_butterChicken_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/butterChicken.jpeg */ "./src/images/butterChicken.jpeg");
/* harmony import */ var _images_fishFry_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/fishFry.jpeg */ "./src/images/fishFry.jpeg");
/* harmony import */ var _images_fishCurry_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/fishCurry.jpeg */ "./src/images/fishCurry.jpeg");
/* harmony import */ var _images_eggCurry_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/eggCurry.jpg */ "./src/images/eggCurry.jpg");








function menu(){
    const menuDiv= document.createElement('div');
    menuDiv.id='menuDiv';

    const menutItemList = [
        {
            name: 'Chicken Biryani',
            price: '150 Rs.',
            url: _images_chickenBiryani_jpg__WEBPACK_IMPORTED_MODULE_0__,
        },
        {
            name: 'Chicken Tikka',
            price: '180 Rs.',
            url: _images_chickenTikka_jpeg__WEBPACK_IMPORTED_MODULE_1__,
        },
        {
            name: 'Butter Chicken',
            price: '250 Rs.',
            url: _images_butterChicken_jpeg__WEBPACK_IMPORTED_MODULE_2__,
        },
        {
            name: 'Fish Fry',
            price: '180 Rs.',
            url: _images_fishFry_jpeg__WEBPACK_IMPORTED_MODULE_3__,
        },
        {
            name: 'Fish Curry',
            price: '250 Rs.',
            url: _images_fishCurry_jpeg__WEBPACK_IMPORTED_MODULE_4__,
        },
        {
            name: 'Egg Curry',
            price: '150 Rs.',
            url: _images_eggCurry_jpg__WEBPACK_IMPORTED_MODULE_5__,
        },
    ]

  
    //create a menu card for each dish

    menutItemList.forEach(menuItem=>{
        let menuCard = document.createElement('div');
        menuCard.classList.add('menuCard');
        let imgDiv= document.createElement('div');
        let itemImg = new Image();
        itemImg.src= menuItem.url;
        itemImg.id= `${menuItem.name}`;
        itemImg.style.width= '250px';
        itemImg.style.height= '250px';
        imgDiv.appendChild(itemImg);
        menuCard.append(imgDiv);

         menuCard.innerHTML+= `
         <div class= 'itemDetails'>
            <div><strong>${menuItem.name}</strong></div>
            <div>Price : <strong>${menuItem.price}</strong></div>
            <div>Qty : <input type="number" name="qty" id="qty" value='0'></div>
            <button id='addToCart'>Add To Cart</button>
         </div>    
         `
    

        menuDiv.append(menuCard);
    })

 return menuDiv;
}

/***/ }),

/***/ "./src/fonts/planetbe.ttf":
/*!********************************!*\
  !*** ./src/fonts/planetbe.ttf ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3bfad7eb2d6869666e0d.ttf";

/***/ }),

/***/ "./src/images/butterChicken.jpeg":
/*!***************************************!*\
  !*** ./src/images/butterChicken.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dacb28a8d8fa57442c81.jpeg";

/***/ }),

/***/ "./src/images/chef.svg":
/*!*****************************!*\
  !*** ./src/images/chef.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "786a35eabdab73d826f2.svg";

/***/ }),

/***/ "./src/images/chickenBiryani.jpg":
/*!***************************************!*\
  !*** ./src/images/chickenBiryani.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0e751f0dad64f296ee5.jpg";

/***/ }),

/***/ "./src/images/chickenTikka.jpeg":
/*!**************************************!*\
  !*** ./src/images/chickenTikka.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "958a67f36cddf1ccc265.jpeg";

/***/ }),

/***/ "./src/images/cooking.svg":
/*!********************************!*\
  !*** ./src/images/cooking.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7227e8efcb33196cc2f3.svg";

/***/ }),

/***/ "./src/images/eggCurry.jpg":
/*!*********************************!*\
  !*** ./src/images/eggCurry.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c9d0bd7c17795ffe66e.jpg";

/***/ }),

/***/ "./src/images/fishCurry.jpeg":
/*!***********************************!*\
  !*** ./src/images/fishCurry.jpeg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9e01797d3dabeaa0364.jpeg";

/***/ }),

/***/ "./src/images/fishFry.jpeg":
/*!*********************************!*\
  !*** ./src/images/fishFry.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c38f1793d37de4a0c9bd.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/styles.css */ "./src/css/styles.css");
/* harmony import */ var _components_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/content */ "./src/components/content.js");



document.body.appendChild((0,_components_content__WEBPACK_IMPORTED_MODULE_1__["default"])());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7QUNyQnlCO0FBQ2tCO0FBQzNDO0FBQ0EsMEJBQTBCLCtEQUFPLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3Mvc3R5bGVzLmNzcz85OWEzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvYWJvdXRVcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3BsYW5ldGJlLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANDAwOzYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUGxhbmV0IEJlbnNvbic7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcbjpyb290e1xcclxcbiAgICAtLWNsci1wcmltYXJ5OiAjMmIyZDQyO1xcclxcbiAgICAtLWNsci1zZWNvbmRhcnk6ICM4ZDk5YWU7XFxyXFxuICAgIC0tY2xyLWFjY2VudDogI2ZmZDE2NjtcXHJcXG4gICAgLS1jbHItbmV1dHJhbDogI2VkZjJmNDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlcntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLW5ldXRyYWwpO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDEuMzEyNXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI2NvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uY2VudGVyQ29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gICAgd2lkdGg6IG1pbig5MCUsIDUwLjVyZW0pOyBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogSGVhZGVyICovXFxyXFxuXFxyXFxuI2hlYWRlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUGxhbmV0IEJlbnNvbic7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jdGFicyB1bCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRhYkl0ZW0ge1xcclxcbiAgICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbmV1dHJhbCk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3RhYnMgdWwgbGk6aG92ZXIgLCAuYWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgcGFkZGluZzogMTRweCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBtYWluIGNvbnRlbnQgKi9cXHJcXG5cXHJcXG4jbWFpbntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIHRhYkNvbnRlbnQgKi9cXHJcXG5cXHJcXG4udGFiQ29udGVudHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRhYkNvbnRlbnQgPiAqIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBhYm91dCB1cyAqL1xcclxcblxcclxcbiNhYm91dENoZWYgPiAqe1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIG1lbnUgKi9cXHJcXG5cXHJcXG4jbWVudURpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gICAgcGFkZGluZzogM3JlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubWVudUNhcmR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1uZXV0cmFsKTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5pdGVtRGV0YWlsc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNxdHl7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuMjVyZW07XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jYWRkVG9DYXJ0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2FkZFRvQ2FydDpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhYzAzOTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBjb250YWN0ICovXFxyXFxuXFxyXFxuI2NvbnRhY3REaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMnJlbSAycmVtIDRyZW0gMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jY29va2luZ0ltZywgI2NoZWZJbWd7XFxyXFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbiNjb250YWN0SW5mb3tcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICAgIG1heC13aWR0aDogMzcwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogZm9vdGVyICovXFxyXFxuXFxyXFxuI2Zvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1uZXV0cmFsKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jZm9vdGVyIGF7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xcclxcbiAgICBcXHJcXG4gICAgLnRhYkNvbnRlbnR7XFxyXFxuICAgICAgICBwYWRkaW5nOiAzcmVtIDVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRhYkNvbnRlbnQgPiAqIHtcXHJcXG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRhYkNvbnRlbnQgPiAqICsgKntcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgI21lbnVEaXZ7XFxyXFxuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICNjb250YWN0RGl2e1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDZyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4taGVpZ2h0OiA3NTBweCl7XFxyXFxuICAgIFxcclxcbiAgICAjZm9vdGVye1xcclxcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogNTAwcHgpe1xcclxcbiAgIFxcclxcbiAgICAjdGFicyB1bCB7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3RhYnMgdWwgbGkge1xcclxcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgICAgICAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICBcXHJcXG4gICAgI2NvbnRhY3REaXZ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgICAgcGFkZGluZzogMnJlbSAycmVtIDRyZW0gMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksNEJBQTRCO0lBQzVCLCtEQUFvRDtBQUN4RDs7QUFLQTtJQUNJLHNCQUFzQjtJQUN0Qix3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7OztBQUlBO0lBQ0kseUJBQXlCO0lBQ3pCLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7Ozs7QUFJQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0VBQ2pCOzs7O0FBSUY7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0FBQzVCOzs7O0FBSUEsV0FBVzs7QUFFWDtJQUNJLG9DQUFvQztJQUNwQyx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLGVBQWU7SUFDZixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOzs7O0FBSUE7SUFDSSxtQ0FBbUM7SUFDbkMsMkNBQTJDO0lBQzNDLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7OztBQUdBOztJQUVJLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLG1DQUFtQztJQUNuQyx5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtBQUN0Qjs7Ozs7QUFLQSxpQkFBaUI7O0FBRWpCO0lBQ0ksbUNBQW1DO0lBQ25DLHlCQUF5QjtBQUM3Qjs7OztBQUlBLGVBQWU7O0FBRWY7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLGtCQUFrQjtBQUN0Qjs7OztBQUlBLGFBQWE7O0FBRWI7SUFDSSxxQkFBcUI7QUFDekI7Ozs7QUFJQSxTQUFTOztBQUVUO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxlQUFlO0FBQ25COzs7O0FBSUE7SUFDSSxvQ0FBb0M7SUFDcEMsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0FBQ25COzs7O0FBSUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7Ozs7QUFJQTtJQUNJLG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7Ozs7QUFJQSxZQUFZOztBQUVaO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCw0QkFBNEI7SUFDNUIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOzs7O0FBSUEsV0FBVzs7QUFFWDtJQUNJLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksd0JBQXdCO0lBQ3hCLHFCQUFxQjtBQUN6Qjs7Ozs7QUFLQTs7SUFFSTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7O0lBR0E7UUFDSSxtQkFBbUI7SUFDdkI7OztJQUdBO1FBQ0ksb0JBQW9CO0lBQ3hCOztBQUVKOztBQUVBOztJQUVJO1FBQ0ksZUFBZTtRQUNmLFNBQVM7UUFDVCxPQUFPO1FBQ1AsV0FBVztJQUNmO0VBQ0Y7O0FBRUY7O0lBRUk7TUFDRSxzQkFBc0I7TUFDdEIsV0FBVztNQUNYLGtCQUFrQjtJQUNwQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixtQkFBbUI7SUFDdkI7OztJQUdBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGNBQWM7UUFDZCw0QkFBNEI7SUFDaEM7O0FBRUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUGxhbmV0IEJlbnNvbic7XFxyXFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9wbGFuZXRiZS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDQwMDs2MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tY2xyLXByaW1hcnk6ICMyYjJkNDI7XFxyXFxuICAgIC0tY2xyLXNlY29uZGFyeTogIzhkOTlhZTtcXHJcXG4gICAgLS1jbHItYWNjZW50OiAjZmZkMTY2O1xcclxcbiAgICAtLWNsci1uZXV0cmFsOiAjZWRmMmY0O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVye1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbmV1dHJhbCk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjs7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zMTI1cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS42O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jY29udGVudHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcbi5jZW50ZXJDb250YWluZXIge1xcclxcbiAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgICB3aWR0aDogbWluKDkwJSwgNTAuNXJlbSk7IFxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBIZWFkZXIgKi9cXHJcXG5cXHJcXG4jaGVhZGVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQbGFuZXQgQmVuc29uJztcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiN0YWJzIHVsIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGFiSXRlbSB7XFxyXFxuICAgIFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1uZXV0cmFsKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jdGFicyB1bCBsaTpob3ZlciAsIC5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBwYWRkaW5nOiAxNHB4IDMwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qIG1haW4gY29udGVudCAqL1xcclxcblxcclxcbiNtYWlue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogdGFiQ29udGVudCAqL1xcclxcblxcclxcbi50YWJDb250ZW50e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGFiQ29udGVudCA+ICoge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIGFib3V0IHVzICovXFxyXFxuXFxyXFxuI2Fib3V0Q2hlZiA+ICp7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogbWVudSAqL1xcclxcblxcclxcbiNtZW51RGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgICBwYWRkaW5nOiAzcmVtIDA7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5tZW51Q2FyZHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLW5ldXRyYWwpO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLml0ZW1EZXRhaWxze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI3F0eXtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC4yNXJlbTtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNhZGRUb0NhcnR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jYWRkVG9DYXJ0OmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFjMDM5O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIGNvbnRhY3QgKi9cXHJcXG5cXHJcXG4jY29udGFjdERpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDJyZW0gNHJlbSAycmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNjb29raW5nSW1nLCAjY2hlZkltZ3tcXHJcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2NvbnRhY3RJbmZve1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gICAgbWF4LXdpZHRoOiAzNzBweDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBmb290ZXIgKi9cXHJcXG5cXHJcXG4jZm9vdGVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLW5ldXRyYWwpO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNmb290ZXIgYXtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XFxyXFxuICAgIFxcclxcbiAgICAudGFiQ29udGVudHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDNyZW0gNXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGFiQ29udGVudCA+ICoge1xcclxcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGFiQ29udGVudCA+ICogKyAqe1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAjbWVudURpdntcXHJcXG4gICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgI2NvbnRhY3REaXZ7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi1oZWlnaHQ6IDc1MHB4KXtcXHJcXG4gICAgXFxyXFxuICAgICNmb290ZXJ7XFxyXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG5AbWVkaWEobWF4LXdpZHRoOiA1MDBweCl7XFxyXFxuICAgXFxyXFxuICAgICN0YWJzIHVsIHtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGdhcDogMC41cmVtO1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjdGFicyB1bCBsaSB7XFxyXFxuICAgICAgICB3aWR0aDogMTByZW07XFxyXFxuICAgICAgICBtYXJnaW4taW5saW5lOiBhdXRvO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbiAgIFxcclxcbiAgICAjY29udGFjdERpdntcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgICAgICBwYWRkaW5nOiAycmVtIDJyZW0gNHJlbSAycmVtO1xcclxcbiAgICB9XFxyXFxuICAgIFxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgY2hlZkltZ1VSTCBmcm9tICcuLi9pbWFnZXMvY2hlZi5zdmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXRVcygpe1xyXG4gICAgXHJcbiAgICAvL2Fib3V0VXMgZGl2XHJcbiAgICBjb25zdCBhYm91dFVzQ29udGVudD0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dFVzQ29udGVudC5pZCA9J2Fib3V0VXNDb250ZW50JztcclxuICAgIGFib3V0VXNDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RhYkNvbnRlbnQnKTtcclxuXHJcblxyXG4gICAgLy8gY2hlZiBpbWdcclxuICAgIGNvbnN0IGltZ0Rpdj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjaGVmSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBjaGVmSW1nLnNyYz0gY2hlZkltZ1VSTDtcclxuICAgIGNoZWZJbWcuaWQ9ICdjaGVmSW1nJztcclxuICAgIGltZ0Rpdi5hcHBlbmRDaGlsZChjaGVmSW1nKTtcclxuICAgIFxyXG5cclxuICAgIC8vYWJvdXQgQ2hlZiBEaXZcclxuICAgIGNvbnN0IGFib3V0Q2hlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWJvdXRDaGVmLmlkPSdhYm91dENoZWYnO1xyXG4gICAgYWJvdXRDaGVmLmlubmVySFRNTD0gYFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5PdXIgU3Rvcnk8L2gyPlxyXG4gICAgICAgICAgICA8cD5CYXNlZCBsb2NhbGx5IGluIENpdHksIHdlIHNlcnZlIGZyZXNoIGhvbWUtY29va2VkIGhhbGFsIGZvb2QuICBTcGVjaWFsIGNhcmUgaXMgdGFrZW4gdG8gbWFrZSBzdXJlIGFsbCBpbmdyZWRpZW50cyBhcmUgZnJlc2guPC9wPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+T3VyIFZpc2lvbjwvaDI+XHJcbiAgICAgICAgICAgIDxwPldlIGJlbGlldmUgaW4gc3ByZWFkaW5nIHdhcm10aCBhbmQgaGFwcGluZXNzIHRocm91Z2ggb3VyIHNlcnZpY2VzLiBDdXJyZW50bHkgd2UncmUgYSBzbWFsbCBidXNpbmVzcyBydW4gYnkgYSBmYW1pbHksIGJ1dCB3ZSB3b3JrIGhhcmQgYW5kIHdpc2ggdG8gZXhwYW5kIG91ciBidXNpbmVzcyB0byBzZXJ2ZSBtb3JlIHBlb3BsZS48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBgXHJcblxyXG4gICAgLy9hZGQgaW1nRGl2IGFuZCBhYm91dENoZWYgZGl2IHRvIGFib3V0VXNDb250ZW50IGRpdlxyXG4gICAgYWJvdXRVc0NvbnRlbnQuYXBwZW5kKGltZ0RpdiwgYWJvdXRDaGVmKTtcclxuXHJcbiAgcmV0dXJuIGFib3V0VXNDb250ZW50O1xyXG59IiwiaW1wb3J0IGNvb2tpbmdJbWdVUkwgZnJvbSAnLi4vaW1hZ2VzL2Nvb2tpbmcuc3ZnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3QoKXtcclxuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3REaXYuaWQ9ICdjb250YWN0RGl2JztcclxuXHJcbiAgICBjb25zdCBpbWdEaXY9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgY29va2luZ0ltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY29va2luZ0ltZy5zcmM9IGNvb2tpbmdJbWdVUkw7XHJcbiAgICBjb29raW5nSW1nLmlkPSAnY29va2luZ0ltZyc7XHJcbiAgICBpbWdEaXYuYXBwZW5kQ2hpbGQoY29va2luZ0ltZyk7XHJcblxyXG4gICAgY29udGFjdERpdi5hcHBlbmQoaW1nRGl2KVxyXG4gICAgY29udGFjdERpdi5pbm5lckhUTUwrPSBgXHJcbiAgICA8aDM+Rm9yIE1hc3MgT3JkZXJzICYgT3RoZXIgUXVlcmllczwvaDM+XHJcbiAgICA8ZGl2IGlkPSdjb250YWN0SW5mbyc+XHJcbiAgICA8ZGl2PlBob25lOiB4eHgteHh4LXh4eHg8L2Rpdj5cclxuICAgIDxkaXY+RW1haWw6IG93bmVyQGFiYnVub252ZWcuY29tPC9kaXY+XHJcbiAgICA8ZGl2PkFkZHJlc3M6IEFCQyBDb2xvbnksIFhZWiBSb2FkLCBDaXR5IC0gKHh4eC14eHgpPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxuICAgIFxyXG5yZXR1cm4gY29udGFjdERpdjtcclxufSIsImltcG9ydCBhYm91dFVzIGZyb20gJy4vYWJvdXRVcyc7XHJcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSdcclxuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0JztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250ZW50KCl7XHJcbiAgICBjb25zdCBjb250ZW50RGl2PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuY29udGVudERpdi5pZD0nY29udGVudCc7XHJcblxyXG5cclxuLy9oZWFkZXJcclxuY29uc3QgaGVhZGVyPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuaGVhZGVyLmlkPSAnaGVhZGVyJztcclxuaGVhZGVyLnRleHRDb250ZW50ID0gJ0FiYnUgTm9uLVZlZyc7XHJcblxyXG5cclxuLy9uYXYgdGFicyBcclxuY29uc3QgbmF2PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxubmF2LmlkPSAndGFicyc7XHJcbm5hdi5jbGFzc0xpc3QuYWRkKCdjZW50ZXJDb250YWluZXInKVxyXG5cclxuXHJcbm5hdi5pbm5lckhUTUw9IGA8dWw+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD0nYWJvdXQnIGNsYXNzPSd0YWJJdGVtIGFjdGl2ZSc+QWJvdXQgVXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD0nbWVudScgY2xhc3M9J3RhYkl0ZW0nPk1lbnU8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD0nY29udGFjdCcgY2xhc3M9J3RhYkl0ZW0nPkNvbnRhY3Q8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5gXHJcblxyXG5cclxuXHJcbi8vbWFpbiBkaXZcclxuXHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbm1haW4uaWQ9J21haW4nO1xyXG5tYWluLmNsYXNzTGlzdC5hZGQoJ2NlbnRlckNvbnRhaW5lcicpO1xyXG5cclxuXHJcbi8vZGVmYXVsdCBpcyBhYm91dCB1cyBwYWdlXHJcbm1haW4uYXBwZW5kKGFib3V0VXMoKSk7XHJcblxyXG5cclxuXHJcbi8vdGFiYmluZyBmdW5jdGlvbmFsaXR5XHJcblxyXG5uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuXHJcbiAgICAvL3JlbW92ZSBhY3RpdmUgY2xhc3MgZnJvbSBlYWNoIG1lbnUgaXRlbSwgbGF0ZXIgYWRkIG9ubHkgdGhhdCB3aGljaCBpcyBjbGlja2VkXHJcbiAgICBsZXQgdGFiSXRlbUFycj0gQXJyYXkuZnJvbShlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKTtcclxuICAgIHRhYkl0ZW1BcnIuZm9yRWFjaChtZW51SXRlbT0+IG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuXHJcbiAgICBcclxuICAgIGlmKGUudGFyZ2V0LmlkPT09J2Fib3V0JylcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBtYWluLmlubmVySFRNTD0nJztcclxuICAgICAgICAgICAgbWFpbi5hcHBlbmQoYWJvdXRVcygpKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICBlbHNlIGlmKGUudGFyZ2V0LmlkPT09J21lbnUnKVxyXG4gICAgICAgIHsgICBcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG1haW4uaW5uZXJIVE1MPScnO1xyXG4gICAgICAgICAgICBtYWluLmFwcGVuZChtZW51KCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICBlbHNlIGlmKGUudGFyZ2V0LmlkPT09J2NvbnRhY3QnKVxyXG4gICAgICAgIHsgICBcclxuICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIG1haW4uaW5uZXJIVE1MPScnO1xyXG4gICAgICAgICAgICBtYWluLmFwcGVuZChjb250YWN0KCkpO1xyXG4gICAgICAgIH1cclxufSlcclxuXHJcblxyXG5cclxuLy9mb290ZXJcclxuY29uc3QgZm9vdGVyPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuZm9vdGVyLmlkPSdmb290ZXInO1xyXG5mb290ZXIuaW5uZXJIVE1MPSBgTWFkZSBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25hc2hpdHNoYXlhblwiIHRhcmdldD1cIl9ibGFua1wiPk5hc2hpdCBTaGF5YW4gS2hhbjwvYT4uIENsaWNrIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbmFzaGl0c2hheWFuL3Jlc3RhdXJhbnQtcGFnZVwiIHRhcmdldD1cIl9ibGFua1wiPmhlcmU8L2E+IHRvIHNlZSB0aGUgY29kZS5gXHJcblxyXG5cclxuY29udGVudERpdi5hcHBlbmQoaGVhZGVyLG5hdiwgbWFpbixmb290ZXIpO1xyXG5cclxucmV0dXJuIGNvbnRlbnREaXY7XHJcblxyXG59IiwiaW1wb3J0IGJpcnlhbmlJbWdVUkwgZnJvbSAnLi4vaW1hZ2VzL2NoaWNrZW5CaXJ5YW5pLmpwZyc7XHJcbmltcG9ydCBjaGlja2VuVGlra2FVUkwgZnJvbSAnLi4vaW1hZ2VzL2NoaWNrZW5UaWtrYS5qcGVnJztcclxuaW1wb3J0IGJ1dHRlckNoaWNrZW5VUkwgZnJvbSAnLi4vaW1hZ2VzL2J1dHRlckNoaWNrZW4uanBlZyc7XHJcbmltcG9ydCBmaXNoRnJ5VVJMIGZyb20gJy4uL2ltYWdlcy9maXNoRnJ5LmpwZWcnO1xyXG5pbXBvcnQgZmlzaEN1cnJ5VVJMIGZyb20gJy4uL2ltYWdlcy9maXNoQ3VycnkuanBlZyc7XHJcbmltcG9ydCBlZ2dDdXJyeVVSTCBmcm9tICcuLi9pbWFnZXMvZWdnQ3VycnkuanBnJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCl7XHJcbiAgICBjb25zdCBtZW51RGl2PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVEaXYuaWQ9J21lbnVEaXYnO1xyXG5cclxuICAgIGNvbnN0IG1lbnV0SXRlbUxpc3QgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnQ2hpY2tlbiBCaXJ5YW5pJyxcclxuICAgICAgICAgICAgcHJpY2U6ICcxNTAgUnMuJyxcclxuICAgICAgICAgICAgdXJsOiBiaXJ5YW5pSW1nVVJMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnQ2hpY2tlbiBUaWtrYScsXHJcbiAgICAgICAgICAgIHByaWNlOiAnMTgwIFJzLicsXHJcbiAgICAgICAgICAgIHVybDogY2hpY2tlblRpa2thVVJMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnQnV0dGVyIENoaWNrZW4nLFxyXG4gICAgICAgICAgICBwcmljZTogJzI1MCBScy4nLFxyXG4gICAgICAgICAgICB1cmw6IGJ1dHRlckNoaWNrZW5VUkwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdGaXNoIEZyeScsXHJcbiAgICAgICAgICAgIHByaWNlOiAnMTgwIFJzLicsXHJcbiAgICAgICAgICAgIHVybDogZmlzaEZyeVVSTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0Zpc2ggQ3VycnknLFxyXG4gICAgICAgICAgICBwcmljZTogJzI1MCBScy4nLFxyXG4gICAgICAgICAgICB1cmw6IGZpc2hDdXJyeVVSTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0VnZyBDdXJyeScsXHJcbiAgICAgICAgICAgIHByaWNlOiAnMTUwIFJzLicsXHJcbiAgICAgICAgICAgIHVybDogZWdnQ3VycnlVUkwsXHJcbiAgICAgICAgfSxcclxuICAgIF1cclxuXHJcbiAgXHJcbiAgICAvL2NyZWF0ZSBhIG1lbnUgY2FyZCBmb3IgZWFjaCBkaXNoXHJcblxyXG4gICAgbWVudXRJdGVtTGlzdC5mb3JFYWNoKG1lbnVJdGVtPT57XHJcbiAgICAgICAgbGV0IG1lbnVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbWVudUNhcmQuY2xhc3NMaXN0LmFkZCgnbWVudUNhcmQnKTtcclxuICAgICAgICBsZXQgaW1nRGl2PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgaXRlbUltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGl0ZW1JbWcuc3JjPSBtZW51SXRlbS51cmw7XHJcbiAgICAgICAgaXRlbUltZy5pZD0gYCR7bWVudUl0ZW0ubmFtZX1gO1xyXG4gICAgICAgIGl0ZW1JbWcuc3R5bGUud2lkdGg9ICcyNTBweCc7XHJcbiAgICAgICAgaXRlbUltZy5zdHlsZS5oZWlnaHQ9ICcyNTBweCc7XHJcbiAgICAgICAgaW1nRGl2LmFwcGVuZENoaWxkKGl0ZW1JbWcpO1xyXG4gICAgICAgIG1lbnVDYXJkLmFwcGVuZChpbWdEaXYpO1xyXG5cclxuICAgICAgICAgbWVudUNhcmQuaW5uZXJIVE1MKz0gYFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPSAnaXRlbURldGFpbHMnPlxyXG4gICAgICAgICAgICA8ZGl2PjxzdHJvbmc+JHttZW51SXRlbS5uYW1lfTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlByaWNlIDogPHN0cm9uZz4ke21lbnVJdGVtLnByaWNlfTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlF0eSA6IDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInF0eVwiIGlkPVwicXR5XCIgdmFsdWU9JzAnPjwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPSdhZGRUb0NhcnQnPkFkZCBUbyBDYXJ0PC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICAgYFxyXG4gICAgXHJcblxyXG4gICAgICAgIG1lbnVEaXYuYXBwZW5kKG1lbnVDYXJkKTtcclxuICAgIH0pXHJcblxyXG4gcmV0dXJuIG1lbnVEaXY7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9jc3Mvc3R5bGVzLmNzcydcclxuaW1wb3J0IGNvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQnO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KCkpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==