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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: 'Planet Benson';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\r\n}\r\n\r\n:root{\r\n    --clr-primary: #ffd166;\r\n    --clr-secondary: #2b2d42;\r\n    --clr-neutral: #edf2f4;\r\n}\r\n\r\n\r\n*, *::before, *::after{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n\r\nbody{\r\n    color: var(--clr-neutral);\r\n    font-family: 'Open Sans', sans-serif;;\r\n    font-weight: 400;\r\n    font-size: 1.3125rem;\r\n    line-height: 1.6;\r\n    /* background-color: var(--clr-primary); */\r\n}\r\n\r\n\r\n\r\n#content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n\r\nimg {\r\n    display: block;\r\n    max-width: 100%;\r\n  }\r\n\r\n\r\n\r\n.centerContainer {\r\n    margin-inline: auto;\r\n    width: min(90%, 50.5rem); \r\n}\r\n\r\n\r\n\r\n/* Header */\r\n\r\n#header{\r\n    background-color: var(--clr-secondary);\r\n    color: var(--clr-primary);\r\n    font-family: 'Planet Benson';\r\n    font-size: 2rem;\r\n    padding: 2rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n#tabs ul {\r\n    background-color: var(--clr-primary);\r\n    border-bottom: 3px solid var(--clr-secondary);\r\n    display: flex;\r\n    justify-content: space-around;\r\n    list-style: none;\r\n    padding: 1rem;\r\n}\r\n\r\n\r\n.tabItem {\r\n    \r\n    background-color: var(--clr-secondary);\r\n    border-radius: 4px;\r\n    color: var(--clr-neutral);\r\n    cursor: pointer;\r\n    font-size: 1.3rem;\r\n    padding: 1rem 2rem;\r\n}\r\n\r\n\r\n#tabs ul li:hover , .active {\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-secondary);\r\n    border: 2px solid var(--clr-secondary);\r\n    padding: 14px 30px;\r\n}\r\n\r\n\r\n\r\n\r\n/* main content */\r\n\r\n#main{\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-secondary);\r\n}\r\n\r\n\r\n\r\n/* tabContent */\r\n\r\n.tabContent{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 3rem;\r\n}\r\n\r\n\r\n.tabContent > * {\r\n    margin-bottom: 2em;\r\n}\r\n\r\n\r\n\r\n/* about us */\r\n\r\n#aboutChef > *{\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n\r\n\r\n/* menu */\r\n\r\n#menuDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 3rem;\r\n    padding: 3rem 0;\r\n}\r\n\r\n\r\n\r\n.menuCard{\r\n    background-color: var(--clr-neutral);\r\n    border: 3px solid var(--clr-secondary);\r\n    border-radius: 4px;\r\n    color: var(--clr-secondary);\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 300px;\r\n}\r\n\r\n\r\n\r\n.itemDetails{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 1rem;\r\n    padding: 0.5rem;\r\n}\r\n\r\n\r\n\r\n#qty{\r\n    cursor: pointer;\r\n    font-size: 1.1rem;\r\n    padding: 0.25rem;\r\n    width: 50px;\r\n}\r\n\r\n\r\n\r\n#addToCart{\r\n    background-color: var(--clr-primary);\r\n    border: 1px solid var(--clr-secondary);\r\n    border-radius: 4px;\r\n    margin-top: 0.5rem;\r\n    padding: 0.75rem;\r\n}\r\n\r\n\r\n#addToCart:hover{\r\n    background-color: #fac039;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n/* contact */\r\n\r\n#contactDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0 auto;\r\n    padding: 2rem 2rem 4rem 2rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n#cookingImg, #chefImg{\r\n    max-width: 300px;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n\r\n#contactInfo{\r\n    border: 3px solid var(--clr-secondary);\r\n    border-radius: 4px;\r\n    font-weight: bold;\r\n    margin-top: 0.5rem;\r\n    max-width: 370px;\r\n    padding: 1rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n/* footer */\r\n\r\n#footer {\r\n    background-color: var(--clr-secondary);\r\n    color: var(--clr-neutral);\r\n    font-size: 1.2rem;\r\n    padding: 1.5rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n#footer a{\r\n    color: var(--clr-primary);\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n\r\n@media (min-width: 40em) {\r\n    \r\n    .tabContent{\r\n        padding: 3rem 5rem;\r\n    }\r\n\r\n    .tabContent > * {\r\n        flex-basis: 100%;\r\n    }\r\n\r\n    .tabContent > * + *{\r\n        margin-left: 2em;\r\n    }\r\n\r\n\r\n    #menuDiv{\r\n        flex-flow: row wrap;\r\n    }\r\n\r\n\r\n    #contactDiv{\r\n        padding-bottom: 6rem;\r\n    }\r\n\r\n}\r\n\r\n@media (min-height: 750px){\r\n    \r\n    #footer{\r\n        position: fixed;\r\n        bottom: 0;\r\n        left: 0;\r\n        width: 100%;\r\n    }\r\n  }\r\n\r\n@media(max-width: 500px){\r\n   \r\n    #tabs ul {\r\n      flex-direction: column;\r\n      gap: 0.5rem;\r\n      text-align: center;\r\n    }\r\n\r\n    #tabs ul li {\r\n        width: 10rem;\r\n        margin-inline: auto;\r\n    }\r\n    \r\n   \r\n    #contactDiv{\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        margin: 0 auto;\r\n        padding: 2rem 2rem 4rem 2rem;\r\n    }\r\n    \r\n}", "",{"version":3,"sources":["webpack://./src/css/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: 'Planet Benson';\r\n    src: url('../fonts/planetbe.ttf') format('truetype');\r\n}\r\n\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');\r\n\r\n:root{\r\n    --clr-primary: #ffd166;\r\n    --clr-secondary: #2b2d42;\r\n    --clr-neutral: #edf2f4;\r\n}\r\n\r\n\r\n*, *::before, *::after{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n\r\nbody{\r\n    color: var(--clr-neutral);\r\n    font-family: 'Open Sans', sans-serif;;\r\n    font-weight: 400;\r\n    font-size: 1.3125rem;\r\n    line-height: 1.6;\r\n    /* background-color: var(--clr-primary); */\r\n}\r\n\r\n\r\n\r\n#content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n\r\nimg {\r\n    display: block;\r\n    max-width: 100%;\r\n  }\r\n\r\n\r\n\r\n.centerContainer {\r\n    margin-inline: auto;\r\n    width: min(90%, 50.5rem); \r\n}\r\n\r\n\r\n\r\n/* Header */\r\n\r\n#header{\r\n    background-color: var(--clr-secondary);\r\n    color: var(--clr-primary);\r\n    font-family: 'Planet Benson';\r\n    font-size: 2rem;\r\n    padding: 2rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n#tabs ul {\r\n    background-color: var(--clr-primary);\r\n    border-bottom: 3px solid var(--clr-secondary);\r\n    display: flex;\r\n    justify-content: space-around;\r\n    list-style: none;\r\n    padding: 1rem;\r\n}\r\n\r\n\r\n.tabItem {\r\n    \r\n    background-color: var(--clr-secondary);\r\n    border-radius: 4px;\r\n    color: var(--clr-neutral);\r\n    cursor: pointer;\r\n    font-size: 1.3rem;\r\n    padding: 1rem 2rem;\r\n}\r\n\r\n\r\n#tabs ul li:hover , .active {\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-secondary);\r\n    border: 2px solid var(--clr-secondary);\r\n    padding: 14px 30px;\r\n}\r\n\r\n\r\n\r\n\r\n/* main content */\r\n\r\n#main{\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-secondary);\r\n}\r\n\r\n\r\n\r\n/* tabContent */\r\n\r\n.tabContent{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 3rem;\r\n}\r\n\r\n\r\n.tabContent > * {\r\n    margin-bottom: 2em;\r\n}\r\n\r\n\r\n\r\n/* about us */\r\n\r\n#aboutChef > *{\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n\r\n\r\n/* menu */\r\n\r\n#menuDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 3rem;\r\n    padding: 3rem 0;\r\n}\r\n\r\n\r\n\r\n.menuCard{\r\n    background-color: var(--clr-neutral);\r\n    border: 3px solid var(--clr-secondary);\r\n    border-radius: 4px;\r\n    color: var(--clr-secondary);\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 300px;\r\n}\r\n\r\n\r\n\r\n.itemDetails{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 1rem;\r\n    padding: 0.5rem;\r\n}\r\n\r\n\r\n\r\n#qty{\r\n    cursor: pointer;\r\n    font-size: 1.1rem;\r\n    padding: 0.25rem;\r\n    width: 50px;\r\n}\r\n\r\n\r\n\r\n#addToCart{\r\n    background-color: var(--clr-primary);\r\n    border: 1px solid var(--clr-secondary);\r\n    border-radius: 4px;\r\n    margin-top: 0.5rem;\r\n    padding: 0.75rem;\r\n}\r\n\r\n\r\n#addToCart:hover{\r\n    background-color: #fac039;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n/* contact */\r\n\r\n#contactDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0 auto;\r\n    padding: 2rem 2rem 4rem 2rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n#cookingImg, #chefImg{\r\n    max-width: 300px;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n\r\n#contactInfo{\r\n    border: 3px solid var(--clr-secondary);\r\n    border-radius: 4px;\r\n    font-weight: bold;\r\n    margin-top: 0.5rem;\r\n    max-width: 370px;\r\n    padding: 1rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n/* footer */\r\n\r\n#footer {\r\n    background-color: var(--clr-secondary);\r\n    color: var(--clr-neutral);\r\n    font-size: 1.2rem;\r\n    padding: 1.5rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n#footer a{\r\n    color: var(--clr-primary);\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n\r\n@media (min-width: 40em) {\r\n    \r\n    .tabContent{\r\n        padding: 3rem 5rem;\r\n    }\r\n\r\n    .tabContent > * {\r\n        flex-basis: 100%;\r\n    }\r\n\r\n    .tabContent > * + *{\r\n        margin-left: 2em;\r\n    }\r\n\r\n\r\n    #menuDiv{\r\n        flex-flow: row wrap;\r\n    }\r\n\r\n\r\n    #contactDiv{\r\n        padding-bottom: 6rem;\r\n    }\r\n\r\n}\r\n\r\n@media (min-height: 750px){\r\n    \r\n    #footer{\r\n        position: fixed;\r\n        bottom: 0;\r\n        left: 0;\r\n        width: 100%;\r\n    }\r\n  }\r\n\r\n@media(max-width: 500px){\r\n   \r\n    #tabs ul {\r\n      flex-direction: column;\r\n      gap: 0.5rem;\r\n      text-align: center;\r\n    }\r\n\r\n    #tabs ul li {\r\n        width: 10rem;\r\n        margin-inline: auto;\r\n    }\r\n    \r\n   \r\n    #contactDiv{\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        margin: 0 auto;\r\n        padding: 2rem 2rem 4rem 2rem;\r\n    }\r\n    \r\n}"],"sourceRoot":""}]);
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
/* harmony export */   "default": () => (/* binding */ loadContent)
/* harmony export */ });
/* harmony import */ var _aboutUs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./aboutUs */ "./src/components/aboutUs.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/components/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/components/contact.js");





function loadContent(){
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


    //tab switching functionality
    function switchContent(e){
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
}

nav.addEventListener('click', switchContent)



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7Ozs7Ozs7Ozs7QUNyQnlCO0FBQ3NCO0FBQy9DO0FBQ0EsMEJBQTBCLCtEQUFXLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jc3Mvc3R5bGVzLmNzcz85OWEzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvYWJvdXRVcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29tcG9uZW50cy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb21wb25lbnRzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL3BsYW5ldGJlLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANDAwOzYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUGxhbmV0IEJlbnNvbic7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcbjpyb290e1xcclxcbiAgICAtLWNsci1wcmltYXJ5OiAjZmZkMTY2O1xcclxcbiAgICAtLWNsci1zZWNvbmRhcnk6ICMyYjJkNDI7XFxyXFxuICAgIC0tY2xyLW5ldXRyYWw6ICNlZGYyZjQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXJ7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1uZXV0cmFsKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjMxMjVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI2NvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uY2VudGVyQ29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gICAgd2lkdGg6IG1pbig5MCUsIDUwLjVyZW0pOyBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogSGVhZGVyICovXFxyXFxuXFxyXFxuI2hlYWRlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUGxhbmV0IEJlbnNvbic7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jdGFicyB1bCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWNsci1zZWNvbmRhcnkpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRhYkl0ZW0ge1xcclxcbiAgICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1uZXV0cmFsKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jdGFicyB1bCBsaTpob3ZlciAsIC5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxyXFxuICAgIHBhZGRpbmc6IDE0cHggMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogbWFpbiBjb250ZW50ICovXFxyXFxuXFxyXFxuI21haW57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiB0YWJDb250ZW50ICovXFxyXFxuXFxyXFxuLnRhYkNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDNyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi50YWJDb250ZW50ID4gKiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogYWJvdXQgdXMgKi9cXHJcXG5cXHJcXG4jYWJvdXRDaGVmID4gKntcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBtZW51ICovXFxyXFxuXFxyXFxuI21lbnVEaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDNyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLm1lbnVDYXJke1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbmV1dHJhbCk7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNsci1zZWNvbmRhcnkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLml0ZW1EZXRhaWxze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI3F0eXtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC4yNXJlbTtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNhZGRUb0NhcnR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jYWRkVG9DYXJ0OmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFjMDM5O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIGNvbnRhY3QgKi9cXHJcXG5cXHJcXG4jY29udGFjdERpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDJyZW0gNHJlbSAycmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNjb29raW5nSW1nLCAjY2hlZkltZ3tcXHJcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2NvbnRhY3RJbmZve1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDM3MHB4O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIGZvb3RlciAqL1xcclxcblxcclxcbiNmb290ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1uZXV0cmFsKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jZm9vdGVyIGF7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwZW0pIHtcXHJcXG4gICAgXFxyXFxuICAgIC50YWJDb250ZW50e1xcclxcbiAgICAgICAgcGFkZGluZzogM3JlbSA1cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50YWJDb250ZW50ID4gKiB7XFxyXFxuICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50YWJDb250ZW50ID4gKiArICp7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICNtZW51RGl2e1xcclxcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAjY29udGFjdERpdntcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLWhlaWdodDogNzUwcHgpe1xcclxcbiAgICBcXHJcXG4gICAgI2Zvb3RlcntcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDUwMHB4KXtcXHJcXG4gICBcXHJcXG4gICAgI3RhYnMgdWwge1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICN0YWJzIHVsIGxpIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMHJlbTtcXHJcXG4gICAgICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgXFxyXFxuICAgICNjb250YWN0RGl2e1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbSA0cmVtIDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QiwrREFBb0Q7QUFDeEQ7O0FBS0E7SUFDSSxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxzQkFBc0I7SUFDdEIsU0FBUztJQUNULFVBQVU7QUFDZDs7OztBQUlBO0lBQ0kseUJBQXlCO0lBQ3pCLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQiwwQ0FBMEM7QUFDOUM7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIs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Y2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1BsYW5ldCBCZW5zb24nO1xcclxcbiAgICBzcmM6IHVybCgnLi4vZm9udHMvcGxhbmV0YmUudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEA0MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290e1xcclxcbiAgICAtLWNsci1wcmltYXJ5OiAjZmZkMTY2O1xcclxcbiAgICAtLWNsci1zZWNvbmRhcnk6ICMyYjJkNDI7XFxyXFxuICAgIC0tY2xyLW5ldXRyYWw6ICNlZGYyZjQ7XFxyXFxufVxcclxcblxcclxcblxcclxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXJ7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1uZXV0cmFsKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmOztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjMxMjVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI2NvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uY2VudGVyQ29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gICAgd2lkdGg6IG1pbig5MCUsIDUwLjVyZW0pOyBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogSGVhZGVyICovXFxyXFxuXFxyXFxuI2hlYWRlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUGxhbmV0IEJlbnNvbic7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jdGFicyB1bCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHZhcigtLWNsci1zZWNvbmRhcnkpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRhYkl0ZW0ge1xcclxcbiAgICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1uZXV0cmFsKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jdGFicyB1bCBsaTpob3ZlciAsIC5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxyXFxuICAgIHBhZGRpbmc6IDE0cHggMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogbWFpbiBjb250ZW50ICovXFxyXFxuXFxyXFxuI21haW57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1zZWNvbmRhcnkpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiB0YWJDb250ZW50ICovXFxyXFxuXFxyXFxuLnRhYkNvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHBhZGRpbmc6IDNyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi50YWJDb250ZW50ID4gKiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogYWJvdXQgdXMgKi9cXHJcXG5cXHJcXG4jYWJvdXRDaGVmID4gKntcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBtZW51ICovXFxyXFxuXFxyXFxuI21lbnVEaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDNyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLm1lbnVDYXJke1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbmV1dHJhbCk7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNsci1zZWNvbmRhcnkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLml0ZW1EZXRhaWxze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI3F0eXtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC4yNXJlbTtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNhZGRUb0NhcnR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jYWRkVG9DYXJ0OmhvdmVye1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFjMDM5O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIGNvbnRhY3QgKi9cXHJcXG5cXHJcXG4jY29udGFjdERpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDJyZW0gNHJlbSAycmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcbiNjb29raW5nSW1nLCAjY2hlZkltZ3tcXHJcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2NvbnRhY3RJbmZve1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDM3MHB4O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIGZvb3RlciAqL1xcclxcblxcclxcbiNmb290ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItc2Vjb25kYXJ5KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1uZXV0cmFsKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jZm9vdGVyIGF7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwZW0pIHtcXHJcXG4gICAgXFxyXFxuICAgIC50YWJDb250ZW50e1xcclxcbiAgICAgICAgcGFkZGluZzogM3JlbSA1cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50YWJDb250ZW50ID4gKiB7XFxyXFxuICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50YWJDb250ZW50ID4gKiArICp7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICNtZW51RGl2e1xcclxcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAjY29udGFjdERpdntcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLWhlaWdodDogNzUwcHgpe1xcclxcbiAgICBcXHJcXG4gICAgI2Zvb3RlcntcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbkBtZWRpYShtYXgtd2lkdGg6IDUwMHB4KXtcXHJcXG4gICBcXHJcXG4gICAgI3RhYnMgdWwge1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICN0YWJzIHVsIGxpIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMHJlbTtcXHJcXG4gICAgICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgXFxyXFxuICAgICNjb250YWN0RGl2e1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbSA0cmVtIDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBjaGVmSW1nVVJMIGZyb20gJy4uL2ltYWdlcy9jaGVmLnN2Zyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dFVzKCl7XHJcbiAgICBcclxuICAgIC8vYWJvdXRVcyBkaXZcclxuICAgIGNvbnN0IGFib3V0VXNDb250ZW50PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFib3V0VXNDb250ZW50LmlkID0nYWJvdXRVc0NvbnRlbnQnO1xyXG4gICAgYWJvdXRVc0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFiQ29udGVudCcpO1xyXG5cclxuXHJcbiAgICAvLyBjaGVmIGltZ1xyXG4gICAgY29uc3QgaW1nRGl2PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGNoZWZJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNoZWZJbWcuc3JjPSBjaGVmSW1nVVJMO1xyXG4gICAgY2hlZkltZy5pZD0gJ2NoZWZJbWcnO1xyXG4gICAgaW1nRGl2LmFwcGVuZENoaWxkKGNoZWZJbWcpO1xyXG4gICAgXHJcblxyXG4gICAgLy9hYm91dCBDaGVmIERpdlxyXG4gICAgY29uc3QgYWJvdXRDaGVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dENoZWYuaWQ9J2Fib3V0Q2hlZic7XHJcbiAgICBhYm91dENoZWYuaW5uZXJIVE1MPSBgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPk91ciBTdG9yeTwvaDI+XHJcbiAgICAgICAgICAgIDxwPkJhc2VkIGxvY2FsbHkgaW4gQ2l0eSwgd2Ugc2VydmUgZnJlc2ggaG9tZS1jb29rZWQgaGFsYWwgZm9vZC4gIFNwZWNpYWwgY2FyZSBpcyB0YWtlbiB0byBtYWtlIHN1cmUgYWxsIGluZ3JlZGllbnRzIGFyZSBmcmVzaC48L3A+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5PdXIgVmlzaW9uPC9oMj5cclxuICAgICAgICAgICAgPHA+V2UgYmVsaWV2ZSBpbiBzcHJlYWRpbmcgd2FybXRoIGFuZCBoYXBwaW5lc3MgdGhyb3VnaCBvdXIgc2VydmljZXMuIEN1cnJlbnRseSB3ZSdyZSBhIHNtYWxsIGJ1c2luZXNzIHJ1biBieSBhIGZhbWlseSwgYnV0IHdlIHdvcmsgaGFyZCBhbmQgd2lzaCB0byBleHBhbmQgb3VyIGJ1c2luZXNzIHRvIHNlcnZlIG1vcmUgcGVvcGxlLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxuXHJcbiAgICAvL2FkZCBpbWdEaXYgYW5kIGFib3V0Q2hlZiBkaXYgdG8gYWJvdXRVc0NvbnRlbnQgZGl2XHJcbiAgICBhYm91dFVzQ29udGVudC5hcHBlbmQoaW1nRGl2LCBhYm91dENoZWYpO1xyXG5cclxuICByZXR1cm4gYWJvdXRVc0NvbnRlbnQ7XHJcbn0iLCJpbXBvcnQgY29va2luZ0ltZ1VSTCBmcm9tICcuLi9pbWFnZXMvY29va2luZy5zdmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdCgpe1xyXG4gICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdERpdi5pZD0gJ2NvbnRhY3REaXYnO1xyXG5cclxuICAgIGNvbnN0IGltZ0Rpdj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb25zdCBjb29raW5nSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICBjb29raW5nSW1nLnNyYz0gY29va2luZ0ltZ1VSTDtcclxuICAgIGNvb2tpbmdJbWcuaWQ9ICdjb29raW5nSW1nJztcclxuICAgIGltZ0Rpdi5hcHBlbmRDaGlsZChjb29raW5nSW1nKTtcclxuXHJcbiAgICBjb250YWN0RGl2LmFwcGVuZChpbWdEaXYpXHJcbiAgICBjb250YWN0RGl2LmlubmVySFRNTCs9IGBcclxuICAgIDxoMz5Gb3IgTWFzcyBPcmRlcnMgJiBPdGhlciBRdWVyaWVzPC9oMz5cclxuICAgIDxkaXYgaWQ9J2NvbnRhY3RJbmZvJz5cclxuICAgIDxkaXY+UGhvbmU6IHh4eC14eHgteHh4eDwvZGl2PlxyXG4gICAgPGRpdj5FbWFpbDogb3duZXJAYWJidW5vbnZlZy5jb208L2Rpdj5cclxuICAgIDxkaXY+QWRkcmVzczogQUJDIENvbG9ueSwgWFlaIFJvYWQsIENpdHkgLSAoeHh4LXh4eCk8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG4gICAgXHJcbnJldHVybiBjb250YWN0RGl2O1xyXG59IiwiaW1wb3J0IGFib3V0VXMgZnJvbSAnLi9hYm91dFVzJztcclxuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51J1xyXG5pbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250ZW50KCl7XHJcbiAgICBjb25zdCBjb250ZW50RGl2PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnREaXYuaWQ9J2NvbnRlbnQnO1xyXG4gICAgLy9oZWFkZXJcclxuICAgIGNvbnN0IGhlYWRlcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICBoZWFkZXIuaWQ9ICdoZWFkZXInO1xyXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gJ0FiYnUgTm9uLVZlZyc7XHJcblxyXG5cclxuICAgIC8vbmF2IHRhYnMgXHJcbiAgICBjb25zdCBuYXY9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgbmF2LmlkPSAndGFicyc7XHJcbiAgICBuYXYuY2xhc3NMaXN0LmFkZCgnY2VudGVyQ29udGFpbmVyJylcclxuXHJcblxyXG4gICAgbmF2LmlubmVySFRNTD0gYDx1bD4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBpZD0nYWJvdXQnIGNsYXNzPSd0YWJJdGVtIGFjdGl2ZSc+QWJvdXQgVXM8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9J21lbnUnIGNsYXNzPSd0YWJJdGVtJz5NZW51PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGlkPSdjb250YWN0JyBjbGFzcz0ndGFiSXRlbSc+Q29udGFjdDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5gXHJcblxyXG5cclxuXHJcbiAgICAvL21haW4gZGl2XHJcblxyXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgIG1haW4uaWQ9J21haW4nO1xyXG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdjZW50ZXJDb250YWluZXInKTtcclxuXHJcblxyXG4gICAgLy9kZWZhdWx0IGlzIGFib3V0IHVzIHBhZ2VcclxuICAgIG1haW4uYXBwZW5kKGFib3V0VXMoKSk7XHJcblxyXG5cclxuICAgIC8vdGFiIHN3aXRjaGluZyBmdW5jdGlvbmFsaXR5XHJcbiAgICBmdW5jdGlvbiBzd2l0Y2hDb250ZW50KGUpe1xyXG4gICAgICAgIC8vcmVtb3ZlIGFjdGl2ZSBjbGFzcyBmcm9tIGVhY2ggbWVudSBpdGVtLCBsYXRlciBhZGQgb25seSB0aGF0IHdoaWNoIGlzIGNsaWNrZWRcclxuICAgICAgICBsZXQgdGFiSXRlbUFycj0gQXJyYXkuZnJvbShlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuKTtcclxuICAgICAgICB0YWJJdGVtQXJyLmZvckVhY2gobWVudUl0ZW09PiBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGUudGFyZ2V0LmlkPT09J2Fib3V0JylcclxuICAgICAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICBtYWluLmlubmVySFRNTD0nJztcclxuICAgICAgICAgICAgICAgIG1haW4uYXBwZW5kKGFib3V0VXMoKSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmKGUudGFyZ2V0LmlkPT09J21lbnUnKVxyXG4gICAgICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIG1haW4uaW5uZXJIVE1MPScnO1xyXG4gICAgICAgICAgICAgICAgbWFpbi5hcHBlbmQobWVudSgpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBlbHNlIGlmKGUudGFyZ2V0LmlkPT09J2NvbnRhY3QnKVxyXG4gICAgICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgIG1haW4uaW5uZXJIVE1MPScnO1xyXG4gICAgICAgICAgICAgICAgbWFpbi5hcHBlbmQoY29udGFjdCgpKTtcclxuICAgICAgICAgICAgfVxyXG59XHJcblxyXG5uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzd2l0Y2hDb250ZW50KVxyXG5cclxuXHJcblxyXG4gICAgLy9mb290ZXJcclxuICAgIGNvbnN0IGZvb3Rlcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICBmb290ZXIuaWQ9J2Zvb3Rlcic7XHJcbiAgICBmb290ZXIuaW5uZXJIVE1MPSBgTWFkZSBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25hc2hpdHNoYXlhblwiIHRhcmdldD1cIl9ibGFua1wiPk5hc2hpdCBTaGF5YW4gS2hhbjwvYT4uIENsaWNrIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbmFzaGl0c2hheWFuL3Jlc3RhdXJhbnQtcGFnZVwiIHRhcmdldD1cIl9ibGFua1wiPmhlcmU8L2E+IHRvIHNlZSB0aGUgY29kZS5gXHJcblxyXG5cclxuICAgIGNvbnRlbnREaXYuYXBwZW5kKGhlYWRlcixuYXYsIG1haW4sZm9vdGVyKTtcclxuXHJcbiAgICByZXR1cm4gY29udGVudERpdjtcclxuXHJcbn0iLCJpbXBvcnQgYmlyeWFuaUltZ1VSTCBmcm9tICcuLi9pbWFnZXMvY2hpY2tlbkJpcnlhbmkuanBnJztcclxuaW1wb3J0IGNoaWNrZW5UaWtrYVVSTCBmcm9tICcuLi9pbWFnZXMvY2hpY2tlblRpa2thLmpwZWcnO1xyXG5pbXBvcnQgYnV0dGVyQ2hpY2tlblVSTCBmcm9tICcuLi9pbWFnZXMvYnV0dGVyQ2hpY2tlbi5qcGVnJztcclxuaW1wb3J0IGZpc2hGcnlVUkwgZnJvbSAnLi4vaW1hZ2VzL2Zpc2hGcnkuanBlZyc7XHJcbmltcG9ydCBmaXNoQ3VycnlVUkwgZnJvbSAnLi4vaW1hZ2VzL2Zpc2hDdXJyeS5qcGVnJztcclxuaW1wb3J0IGVnZ0N1cnJ5VVJMIGZyb20gJy4uL2ltYWdlcy9lZ2dDdXJyeS5qcGcnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKXtcclxuICAgIGNvbnN0IG1lbnVEaXY9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudURpdi5pZD0nbWVudURpdic7XHJcblxyXG4gICAgY29uc3QgbWVudXRJdGVtTGlzdCA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDaGlja2VuIEJpcnlhbmknLFxyXG4gICAgICAgICAgICBwcmljZTogJzE1MCBScy4nLFxyXG4gICAgICAgICAgICB1cmw6IGJpcnlhbmlJbWdVUkwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDaGlja2VuIFRpa2thJyxcclxuICAgICAgICAgICAgcHJpY2U6ICcxODAgUnMuJyxcclxuICAgICAgICAgICAgdXJsOiBjaGlja2VuVGlra2FVUkwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdCdXR0ZXIgQ2hpY2tlbicsXHJcbiAgICAgICAgICAgIHByaWNlOiAnMjUwIFJzLicsXHJcbiAgICAgICAgICAgIHVybDogYnV0dGVyQ2hpY2tlblVSTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0Zpc2ggRnJ5JyxcclxuICAgICAgICAgICAgcHJpY2U6ICcxODAgUnMuJyxcclxuICAgICAgICAgICAgdXJsOiBmaXNoRnJ5VVJMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnRmlzaCBDdXJyeScsXHJcbiAgICAgICAgICAgIHByaWNlOiAnMjUwIFJzLicsXHJcbiAgICAgICAgICAgIHVybDogZmlzaEN1cnJ5VVJMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnRWdnIEN1cnJ5JyxcclxuICAgICAgICAgICAgcHJpY2U6ICcxNTAgUnMuJyxcclxuICAgICAgICAgICAgdXJsOiBlZ2dDdXJyeVVSTCxcclxuICAgICAgICB9LFxyXG4gICAgXVxyXG5cclxuICBcclxuICAgIC8vY3JlYXRlIGEgbWVudSBjYXJkIGZvciBlYWNoIGRpc2hcclxuXHJcbiAgICBtZW51dEl0ZW1MaXN0LmZvckVhY2gobWVudUl0ZW09PntcclxuICAgICAgICBsZXQgbWVudUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtZW51Q2FyZC5jbGFzc0xpc3QuYWRkKCdtZW51Q2FyZCcpO1xyXG4gICAgICAgIGxldCBpbWdEaXY9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxldCBpdGVtSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaXRlbUltZy5zcmM9IG1lbnVJdGVtLnVybDtcclxuICAgICAgICBpdGVtSW1nLmlkPSBgJHttZW51SXRlbS5uYW1lfWA7XHJcbiAgICAgICAgaXRlbUltZy5zdHlsZS53aWR0aD0gJzI1MHB4JztcclxuICAgICAgICBpdGVtSW1nLnN0eWxlLmhlaWdodD0gJzI1MHB4JztcclxuICAgICAgICBpbWdEaXYuYXBwZW5kQ2hpbGQoaXRlbUltZyk7XHJcbiAgICAgICAgbWVudUNhcmQuYXBwZW5kKGltZ0Rpdik7XHJcblxyXG4gICAgICAgICBtZW51Q2FyZC5pbm5lckhUTUwrPSBgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9ICdpdGVtRGV0YWlscyc+XHJcbiAgICAgICAgICAgIDxkaXY+PHN0cm9uZz4ke21lbnVJdGVtLm5hbWV9PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+UHJpY2UgOiA8c3Ryb25nPiR7bWVudUl0ZW0ucHJpY2V9PC9zdHJvbmc+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+UXR5IDogPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwicXR5XCIgaWQ9XCJxdHlcIiB2YWx1ZT0nMCc+PC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9J2FkZFRvQ2FydCc+QWRkIFRvIENhcnQ8L2J1dHRvbj5cclxuICAgICAgICAgPC9kaXY+ICAgIFxyXG4gICAgICAgICBgXHJcbiAgICBcclxuXHJcbiAgICAgICAgbWVudURpdi5hcHBlbmQobWVudUNhcmQpO1xyXG4gICAgfSlcclxuXHJcbiByZXR1cm4gbWVudURpdjtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL2Nzcy9zdHlsZXMuY3NzJ1xyXG5pbXBvcnQgbG9hZENvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL2NvbnRlbnQnO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsb2FkQ29udGVudCgpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=