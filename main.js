/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./planetbe.ttf */ "./src/planetbe.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: 'Planet Benson';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\r\n}\r\n\r\n:root{\r\n    --clr-primary: #2b2d42;\r\n    --clr-secondary: #8d99ae;\r\n    --clr-accent: #ffd166;\r\n    --clr-neutral: #edf2f4;\r\n}\r\n\r\n\r\n*, *::before, *::after{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n/* util classes */\r\n\r\n/* .clr-primary{\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-neutral);\r\n}\r\n.clr-secondary{\r\n    background-color: var(--clr-secondary);\r\n    color: var(--clr-neutral);\r\n}\r\n.clr-accent{\r\n    background-color: var(--clr-accent);\r\n    color: var(--clr-neutral);\r\n}\r\n.clr-neutral{\r\n    background-color: var(--clr-neutral);\r\n    color: var(--clr-primary);\r\n} */\r\n\r\n\r\n\r\nbody{\r\n   font-weight: 400;\r\n    font-size: 1.3125rem;\r\n    line-height: 1.6;\r\n    color: var(--clr-neutral);\r\n    font-family: 'Open Sans', sans-serif;;\r\n}\r\n\r\n#content{\r\n    /* height: 100vh; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\nimg {\r\n    display: block;\r\n    max-width: 100%;\r\n  }\r\n\r\n.centerContainer {\r\n    margin-inline: auto;\r\n    width: min(90%, 50.5rem); \r\n}\r\n\r\n/* Header */\r\n\r\n#header{\r\n    font-family: 'Planet Benson';\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    padding: 2rem;\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-accent);\r\n    \r\n}\r\n\r\n/* nav tabs */\r\n/* #tabs {\r\n  \r\n} */\r\n#tabs ul {\r\n    list-style: none;\r\n    background-color: var(--clr-accent);\r\n    display: flex;\r\n    justify-content: space-around;\r\n    padding: 1rem;\r\n    border-bottom: 3px solid var(--clr-primary);\r\n}\r\n\r\n.tabItem {\r\n    cursor: pointer;\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-neutral);\r\n    padding: 1rem 2rem;\r\n    font-size: 1.3rem;\r\n    border-radius: 4px;\r\n}\r\n#tabs ul li:hover , .active{\r\n    background-color: var(--clr-accent);\r\n    color: var(--clr-primary);\r\n    border: 2px solid var(--clr-primary);\r\n    padding: 14px 30px;\r\n   \r\n}\r\n\r\n/* main content */\r\n\r\n#main{\r\n    background-color: var(--clr-accent);\r\n    color: var(--clr-primary);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* tabContent */\r\n\r\n.tabContent{\r\n    padding: 3rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n   align-items: center;\r\n}\r\n\r\n\r\n.tabContent > * {\r\n    margin-bottom: 2em;\r\n}\r\n\r\n/* about us */\r\n\r\n#aboutChef > *{\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n\r\n\r\n/* menu */\r\n#menuDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 3rem;\r\n    padding: 3rem 0;\r\n}\r\n\r\n.menuCard{\r\n    border: 3px solid var(--clr-primary);\r\n    border-radius: 4px;\r\n    background-color: var(--clr-neutral);\r\n    color: var(--clr-primary);\r\n    max-width: 300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.itemDetails{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 1rem;\r\n    padding: 0.5rem;\r\n    /* border: 1px solid black; */\r\n}\r\n#qty{\r\n    width: 50px;\r\n    font-size: 1.1rem;\r\n    padding: 0.25rem;\r\n    cursor: pointer;\r\n}\r\n\r\n#addToCart{\r\n    padding: 0.75rem;\r\n    margin-top: 0.5rem;\r\n    background-color: var(--clr-accent);\r\n    border: 1px solid var(--clr-primary);\r\n    border-radius: 4px;\r\n}\r\n#addToCart:hover{\r\n    background-color: #fac039;\r\n    cursor: pointer;\r\n}\r\n\r\n/* contact */\r\n#contactDiv{\r\n    /* max-width: 400px; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    padding: 2rem 2rem 4rem 2rem;\r\n}\r\n#cookingImg, #chefImg{\r\n    max-width: 300px;\r\n    margin-bottom: 2rem;\r\n}\r\n#contactInfo{\r\n    margin-top: 0.5rem;\r\n    max-width: 370px;\r\n    padding: 1rem;\r\n    text-align: center;\r\n    border: 3px solid var(--clr-primary);\r\n    border-radius: 4px;\r\n    font-weight: bold;\r\n\r\n}\r\n\r\n\r\n\r\n/* footer */\r\n\r\n#footer {\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-neutral);\r\n    text-align: center;\r\n    font-size: 1.2rem;\r\n    padding: 1.5rem;\r\n}\r\n#footer a{\r\n    text-decoration: none;\r\n    color: var(--clr-accent)\r\n}\r\n\r\n\r\n@media (min-width: 40em) {\r\n    \r\n    .tabContent{\r\n        padding: 3rem 5rem;\r\n    }\r\n    .tabContent > * {\r\n        flex-basis: 100%;\r\n    }\r\n    .tabContent > * + *{\r\n        margin-left: 2em;\r\n    }\r\n\r\n    #menuDiv{\r\n        flex-flow: row wrap;\r\n    }\r\n    #contactDiv{\r\n        padding-bottom: 6rem;\r\n    }\r\n\r\n  }\r\n  @media (min-height: 750px){\r\n    #footer{\r\n        position: fixed;\r\n        bottom: 0;\r\n        left: 0;\r\n        width: 100%;\r\n    }\r\n  }\r\n\r\n  @media(max-width: 500px){\r\n    #tabs ul {\r\n      flex-direction: column;\r\n      gap: 0.5rem;\r\n      text-align: center;\r\n    }\r\n    #tabs ul li {\r\n        width: 10rem;\r\n        margin-inline: auto;\r\n    }\r\n    \r\n   \r\n    #contactDiv{\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        margin: 0 auto;\r\n        padding: 2rem 2rem 4rem 2rem;\r\n    }\r\n    \r\n  }", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\r\n    font-family: 'Planet Benson';\r\n    src: url('./planetbe.ttf') format('truetype');\r\n}\r\n\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');\r\n\r\n:root{\r\n    --clr-primary: #2b2d42;\r\n    --clr-secondary: #8d99ae;\r\n    --clr-accent: #ffd166;\r\n    --clr-neutral: #edf2f4;\r\n}\r\n\r\n\r\n*, *::before, *::after{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n/* util classes */\r\n\r\n/* .clr-primary{\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-neutral);\r\n}\r\n.clr-secondary{\r\n    background-color: var(--clr-secondary);\r\n    color: var(--clr-neutral);\r\n}\r\n.clr-accent{\r\n    background-color: var(--clr-accent);\r\n    color: var(--clr-neutral);\r\n}\r\n.clr-neutral{\r\n    background-color: var(--clr-neutral);\r\n    color: var(--clr-primary);\r\n} */\r\n\r\n\r\n\r\nbody{\r\n   font-weight: 400;\r\n    font-size: 1.3125rem;\r\n    line-height: 1.6;\r\n    color: var(--clr-neutral);\r\n    font-family: 'Open Sans', sans-serif;;\r\n}\r\n\r\n#content{\r\n    /* height: 100vh; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\nimg {\r\n    display: block;\r\n    max-width: 100%;\r\n  }\r\n\r\n.centerContainer {\r\n    margin-inline: auto;\r\n    width: min(90%, 50.5rem); \r\n}\r\n\r\n/* Header */\r\n\r\n#header{\r\n    font-family: 'Planet Benson';\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    padding: 2rem;\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-accent);\r\n    \r\n}\r\n\r\n/* nav tabs */\r\n/* #tabs {\r\n  \r\n} */\r\n#tabs ul {\r\n    list-style: none;\r\n    background-color: var(--clr-accent);\r\n    display: flex;\r\n    justify-content: space-around;\r\n    padding: 1rem;\r\n    border-bottom: 3px solid var(--clr-primary);\r\n}\r\n\r\n.tabItem {\r\n    cursor: pointer;\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-neutral);\r\n    padding: 1rem 2rem;\r\n    font-size: 1.3rem;\r\n    border-radius: 4px;\r\n}\r\n#tabs ul li:hover , .active{\r\n    background-color: var(--clr-accent);\r\n    color: var(--clr-primary);\r\n    border: 2px solid var(--clr-primary);\r\n    padding: 14px 30px;\r\n   \r\n}\r\n\r\n/* main content */\r\n\r\n#main{\r\n    background-color: var(--clr-accent);\r\n    color: var(--clr-primary);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* tabContent */\r\n\r\n.tabContent{\r\n    padding: 3rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n   align-items: center;\r\n}\r\n\r\n\r\n.tabContent > * {\r\n    margin-bottom: 2em;\r\n}\r\n\r\n/* about us */\r\n\r\n#aboutChef > *{\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n\r\n\r\n/* menu */\r\n#menuDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 3rem;\r\n    padding: 3rem 0;\r\n}\r\n\r\n.menuCard{\r\n    border: 3px solid var(--clr-primary);\r\n    border-radius: 4px;\r\n    background-color: var(--clr-neutral);\r\n    color: var(--clr-primary);\r\n    max-width: 300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.itemDetails{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 1rem;\r\n    padding: 0.5rem;\r\n    /* border: 1px solid black; */\r\n}\r\n#qty{\r\n    width: 50px;\r\n    font-size: 1.1rem;\r\n    padding: 0.25rem;\r\n    cursor: pointer;\r\n}\r\n\r\n#addToCart{\r\n    padding: 0.75rem;\r\n    margin-top: 0.5rem;\r\n    background-color: var(--clr-accent);\r\n    border: 1px solid var(--clr-primary);\r\n    border-radius: 4px;\r\n}\r\n#addToCart:hover{\r\n    background-color: #fac039;\r\n    cursor: pointer;\r\n}\r\n\r\n/* contact */\r\n#contactDiv{\r\n    /* max-width: 400px; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    margin: 0 auto;\r\n    padding: 2rem 2rem 4rem 2rem;\r\n}\r\n#cookingImg, #chefImg{\r\n    max-width: 300px;\r\n    margin-bottom: 2rem;\r\n}\r\n#contactInfo{\r\n    margin-top: 0.5rem;\r\n    max-width: 370px;\r\n    padding: 1rem;\r\n    text-align: center;\r\n    border: 3px solid var(--clr-primary);\r\n    border-radius: 4px;\r\n    font-weight: bold;\r\n\r\n}\r\n\r\n\r\n\r\n/* footer */\r\n\r\n#footer {\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-neutral);\r\n    text-align: center;\r\n    font-size: 1.2rem;\r\n    padding: 1.5rem;\r\n}\r\n#footer a{\r\n    text-decoration: none;\r\n    color: var(--clr-accent)\r\n}\r\n\r\n\r\n@media (min-width: 40em) {\r\n    \r\n    .tabContent{\r\n        padding: 3rem 5rem;\r\n    }\r\n    .tabContent > * {\r\n        flex-basis: 100%;\r\n    }\r\n    .tabContent > * + *{\r\n        margin-left: 2em;\r\n    }\r\n\r\n    #menuDiv{\r\n        flex-flow: row wrap;\r\n    }\r\n    #contactDiv{\r\n        padding-bottom: 6rem;\r\n    }\r\n\r\n  }\r\n  @media (min-height: 750px){\r\n    #footer{\r\n        position: fixed;\r\n        bottom: 0;\r\n        left: 0;\r\n        width: 100%;\r\n    }\r\n  }\r\n\r\n  @media(max-width: 500px){\r\n    #tabs ul {\r\n      flex-direction: column;\r\n      gap: 0.5rem;\r\n      text-align: center;\r\n    }\r\n    #tabs ul li {\r\n        width: 10rem;\r\n        margin-inline: auto;\r\n    }\r\n    \r\n   \r\n    #contactDiv{\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        margin: 0 auto;\r\n        padding: 2rem 2rem 4rem 2rem;\r\n    }\r\n    \r\n  }"],"sourceRoot":""}]);
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

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/aboutUs.js":
/*!************************!*\
  !*** ./src/aboutUs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ aboutUs)
/* harmony export */ });
/* harmony import */ var _chef_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chef.svg */ "./src/chef.svg");



function aboutUs(){
    
    //aboutUs div
    
    const aboutUsContent= document.createElement('div');
    aboutUsContent.id ='aboutUsContent';
    aboutUsContent.classList.add('tabContent');


    // chef img
    const imgDiv= document.createElement('div');
    const chefImg = new Image();
    chefImg.src= _chef_svg__WEBPACK_IMPORTED_MODULE_0__;
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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _cooking_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cooking.svg */ "./src/cooking.svg");


function contact(){
    const contactDiv = document.createElement('div');
    contactDiv.id= 'contactDiv';

    const imgDiv= document.createElement('div');
    const cookingImg = new Image();
    cookingImg.src= _cooking_svg__WEBPACK_IMPORTED_MODULE_0__;
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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _chickenBiryani_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chickenBiryani.jpg */ "./src/chickenBiryani.jpg");
/* harmony import */ var _chickenTikka_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chickenTikka.jpeg */ "./src/chickenTikka.jpeg");
/* harmony import */ var _butterChicken_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./butterChicken.jpeg */ "./src/butterChicken.jpeg");
/* harmony import */ var _fishFry_jpeg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fishFry.jpeg */ "./src/fishFry.jpeg");
/* harmony import */ var _fishCurry_jpeg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fishCurry.jpeg */ "./src/fishCurry.jpeg");
/* harmony import */ var _eggCurry_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./eggCurry.jpg */ "./src/eggCurry.jpg");








function menu(){
    const menuDiv= document.createElement('div');
    menuDiv.id='menuDiv';

    const menutItemList = [
        {
            name: 'Chicken Biryani',
            price: '150 Rs.',
            url: _chickenBiryani_jpg__WEBPACK_IMPORTED_MODULE_0__,
        },
        {
            name: 'Chicken Tikka',
            price: '180 Rs.',
            url: _chickenTikka_jpeg__WEBPACK_IMPORTED_MODULE_1__,
        },
        {
            name: 'Butter Chicken',
            price: '250 Rs.',
            url: _butterChicken_jpeg__WEBPACK_IMPORTED_MODULE_2__,
        },
        {
            name: 'Fish Fry',
            price: '180 Rs.',
            url: _fishFry_jpeg__WEBPACK_IMPORTED_MODULE_3__,
        },
        {
            name: 'Fish Curry',
            price: '250 Rs.',
            url: _fishCurry_jpeg__WEBPACK_IMPORTED_MODULE_4__,
        },
        {
            name: 'Egg Curry',
            price: '150 Rs.',
            url: _eggCurry_jpg__WEBPACK_IMPORTED_MODULE_5__,
        },
        
    ]

    // menuDiv.innerHTML=`
    // <h3>Menu Items</h3`

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

   

    

    // let name= 'Chicken Biryani';
    // let price = 250;
   
   
    //const itemDetails = document.createElement('div');

    

    return menuDiv;
}

/***/ }),

/***/ "./src/butterChicken.jpeg":
/*!********************************!*\
  !*** ./src/butterChicken.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dacb28a8d8fa57442c81.jpeg";

/***/ }),

/***/ "./src/chef.svg":
/*!**********************!*\
  !*** ./src/chef.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "786a35eabdab73d826f2.svg";

/***/ }),

/***/ "./src/chickenBiryani.jpg":
/*!********************************!*\
  !*** ./src/chickenBiryani.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0e751f0dad64f296ee5.jpg";

/***/ }),

/***/ "./src/chickenTikka.jpeg":
/*!*******************************!*\
  !*** ./src/chickenTikka.jpeg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "958a67f36cddf1ccc265.jpeg";

/***/ }),

/***/ "./src/cooking.svg":
/*!*************************!*\
  !*** ./src/cooking.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7227e8efcb33196cc2f3.svg";

/***/ }),

/***/ "./src/eggCurry.jpg":
/*!**************************!*\
  !*** ./src/eggCurry.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c9d0bd7c17795ffe66e.jpg";

/***/ }),

/***/ "./src/fishCurry.jpeg":
/*!****************************!*\
  !*** ./src/fishCurry.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9e01797d3dabeaa0364.jpeg";

/***/ }),

/***/ "./src/fishFry.jpeg":
/*!**************************!*\
  !*** ./src/fishFry.jpeg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c38f1793d37de4a0c9bd.jpeg";

/***/ }),

/***/ "./src/planetbe.ttf":
/*!**************************!*\
  !*** ./src/planetbe.ttf ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3bfad7eb2d6869666e0d.ttf";

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
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _aboutUs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutUs */ "./src/aboutUs.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ "./src/contact.js");







const contentDiv= document.createElement('div');
contentDiv.id='content';
document.body.appendChild(contentDiv);

//header
const header= document.createElement('header');
header.id= 'header';
header.textContent = 'Abbu Non-Veg';


//nav tabs 
const nav= document.createElement('nav');
nav.id= 'tabs';
nav.classList.add('centerContainer')

// const ul= document.createElement('ul');
// const li1 = document.createElement('li');
// const li2 = document.createElement('li');
// const li3 = document.createElement('li');
// li1.textContent='About Us';
// li2.textContent='Menu';
// li3.textContent='Contact';

// ul.append(li1,li2,li3);
// nav.appendChild(ul);

nav.innerHTML= `<ul> 
                    <li id='about' class='tabItem'>About Us</li>
                    <li id='menu' class='tabItem'>Menu</li>
                    <li id='contact' class='tabItem'>Contact</li>
                </ul>`

 //header.appendChild(nav)

//main div

const main = document.createElement('main');
main.id='main';
main.classList.add('centerContainer');


//default is about us page
main.append((0,_aboutUs__WEBPACK_IMPORTED_MODULE_1__["default"])());

//tabbing functionality;

nav.addEventListener('click', (e)=>{
    console.log()
    //remove active class from each menu item, later add only that which is clicked
    let tabItemArr= Array.from(e.target.parentElement.children);
    tabItemArr.forEach(menuItem=> menuItem.classList.remove('active'));
    // e.target.parentElement.children.forEach(menuItem=> menuItem.classList.remove('active'));

    

    if(e.target.id==='about')
        {   
            e.target.classList.add('active');
            main.innerHTML='';
            main.append((0,_aboutUs__WEBPACK_IMPORTED_MODULE_1__["default"])())
        }
    else if(e.target.id==='menu')
        {   
            e.target.classList.add('active');
            main.innerHTML='';
            main.append((0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
        }
    else if(e.target.id==='contact')
        {   
            e.target.classList.add('active');
            main.innerHTML='';
            main.append((0,_contact__WEBPACK_IMPORTED_MODULE_3__["default"])());
        }
})


// 


//footer
const footer= document.createElement('footer');
footer.id='footer';
footer.innerHTML= `Made by <a href="https://github.com/nashitshayan" target="_blank">Nashit Shayan Khan</a>. Click <a href="https://github.com/nashitshayan/restaurant-page" target="_blank">here</a> to see the code.`


contentDiv.append(header,nav, main,footer);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxVQUFVLE1BQU0sS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsY0FBYyxPQUFPLGFBQWEsTUFBTSxZQUFZLGFBQWEsWUFBWSxXQUFXLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLFNBQVMsVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGNBQWMsU0FBUyxXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLE1BQU0sT0FBTyxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsS0FBSyxNQUFNLEtBQUssS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFB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Q0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNyQnFCO0FBQ3JCO0FBQ2dDO0FBQ1A7QUFDTztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvREFBTztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvREFBTztBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlEQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0RBQU87QUFDL0I7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXRVcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vcGxhbmV0YmUudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEA0MDA7NjAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQbGFuZXQgQmVuc29uJztcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tY2xyLXByaW1hcnk6ICMyYjJkNDI7XFxyXFxuICAgIC0tY2xyLXNlY29uZGFyeTogIzhkOTlhZTtcXHJcXG4gICAgLS1jbHItYWNjZW50OiAjZmZkMTY2O1xcclxcbiAgICAtLWNsci1uZXV0cmFsOiAjZWRmMmY0O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVye1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIHV0aWwgY2xhc3NlcyAqL1xcclxcblxcclxcbi8qIC5jbHItcHJpbWFyeXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLW5ldXRyYWwpO1xcclxcbn1cXHJcXG4uY2xyLXNlY29uZGFyeXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbmV1dHJhbCk7XFxyXFxufVxcclxcbi5jbHItYWNjZW50e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1uZXV0cmFsKTtcXHJcXG59XFxyXFxuLmNsci1uZXV0cmFse1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbmV1dHJhbCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxufSAqL1xcclxcblxcclxcblxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjMxMjVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbmV1dHJhbCk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjs7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50e1xcclxcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmNlbnRlckNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICAgIHdpZHRoOiBtaW4oOTAlLCA1MC41cmVtKTsgXFxyXFxufVxcclxcblxcclxcbi8qIEhlYWRlciAqL1xcclxcblxcclxcbiNoZWFkZXJ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUGxhbmV0IEJlbnNvbic7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi8qIG5hdiB0YWJzICovXFxyXFxuLyogI3RhYnMge1xcclxcbiAgXFxyXFxufSAqL1xcclxcbiN0YWJzIHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFiSXRlbSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLW5ldXRyYWwpO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcbiN0YWJzIHVsIGxpOmhvdmVyICwgLmFjdGl2ZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgcGFkZGluZzogMTRweCAzMHB4O1xcclxcbiAgIFxcclxcbn1cXHJcXG5cXHJcXG4vKiBtYWluIGNvbnRlbnQgKi9cXHJcXG5cXHJcXG4jbWFpbntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qIHRhYkNvbnRlbnQgKi9cXHJcXG5cXHJcXG4udGFiQ29udGVudHtcXHJcXG4gICAgcGFkZGluZzogM3JlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGFiQ29udGVudCA+ICoge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxufVxcclxcblxcclxcbi8qIGFib3V0IHVzICovXFxyXFxuXFxyXFxuI2Fib3V0Q2hlZiA+ICp7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogbWVudSAqL1xcclxcbiNtZW51RGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgICBwYWRkaW5nOiAzcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5tZW51Q2FyZHtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1uZXV0cmFsKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1EZXRhaWxze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxufVxcclxcbiNxdHl7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC4yNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkVG9DYXJ0e1xcclxcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuI2FkZFRvQ2FydDpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhYzAzOTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb250YWN0ICovXFxyXFxuI2NvbnRhY3REaXZ7XFxyXFxuICAgIC8qIG1heC13aWR0aDogNDAwcHg7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDJyZW0gNHJlbSAycmVtO1xcclxcbn1cXHJcXG4jY29va2luZ0ltZywgI2NoZWZJbWd7XFxyXFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcbiNjb250YWN0SW5mb3tcXHJcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDM3MHB4O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogZm9vdGVyICovXFxyXFxuXFxyXFxuI2Zvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1uZXV0cmFsKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtO1xcclxcbn1cXHJcXG4jZm9vdGVyIGF7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQpXFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XFxyXFxuICAgIFxcclxcbiAgICAudGFiQ29udGVudHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDNyZW0gNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAudGFiQ29udGVudCA+ICoge1xcclxcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgICAudGFiQ29udGVudCA+ICogKyAqe1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbWVudURpdntcXHJcXG4gICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICAgIH1cXHJcXG4gICAgI2NvbnRhY3REaXZ7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtaW4taGVpZ2h0OiA3NTBweCl7XFxyXFxuICAgICNmb290ZXJ7XFxyXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYShtYXgtd2lkdGg6IDUwMHB4KXtcXHJcXG4gICAgI3RhYnMgdWwge1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgICN0YWJzIHVsIGxpIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMHJlbTtcXHJcXG4gICAgICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgXFxyXFxuICAgICNjb250YWN0RGl2e1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbSA0cmVtIDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsK0RBQTZDO0FBQ2pEOztBQUtBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBLGlCQUFpQjs7QUFFakI7Ozs7Ozs7Ozs7Ozs7OztHQWVHOzs7O0FBSUg7R0FDRyxnQkFBZ0I7SUFDZixvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7QUFFRjtJQUNJLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7O0FBRUEsV0FBVzs7QUFFWDtJQUNJLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsd0JBQXdCOztBQUU1Qjs7QUFFQSxhQUFhO0FBQ2I7O0dBRUc7QUFDSDtJQUNJLGdCQUFnQjtJQUNoQixtQ0FBbUM7SUFDbkMsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2IsMkNBQTJDO0FBQy9DOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyx5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLGtCQUFrQjs7QUFFdEI7O0FBRUEsaUJBQWlCOztBQUVqQjtJQUNJLG1DQUFtQztJQUNuQyx5QkFBeUI7QUFDN0I7Ozs7Ozs7QUFPQSxlQUFlOztBQUVmO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7R0FDdkIsbUJBQW1CO0FBQ3RCOzs7QUFHQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQSxhQUFhOztBQUViO0lBQ0kscUJBQXFCO0FBQ3pCOzs7O0FBSUEsU0FBUztBQUNUO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixvQ0FBb0M7SUFDcEMseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7QUFFQSxZQUFZO0FBQ1o7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsNEJBQTRCO0FBQ2hDO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixpQkFBaUI7O0FBRXJCOzs7O0FBSUEsV0FBVzs7QUFFWDtJQUNJLG9DQUFvQztJQUNwQyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckI7QUFDSjs7O0FBR0E7O0lBRUk7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7O0VBRUY7RUFDQTtJQUNFO1FBQ0ksZUFBZTtRQUNmLFNBQVM7UUFDVCxPQUFPO1FBQ1AsV0FBVztJQUNmO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLHNCQUFzQjtNQUN0QixXQUFXO01BQ1gsa0JBQWtCO0lBQ3BCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osbUJBQW1CO0lBQ3ZCOzs7SUFHQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixjQUFjO1FBQ2QsNEJBQTRCO0lBQ2hDOztFQUVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1BsYW5ldCBCZW5zb24nO1xcclxcbiAgICBzcmM6IHVybCgnLi9wbGFuZXRiZS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9wZW4rU2Fuczp3Z2h0QDQwMDs2MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3R7XFxyXFxuICAgIC0tY2xyLXByaW1hcnk6ICMyYjJkNDI7XFxyXFxuICAgIC0tY2xyLXNlY29uZGFyeTogIzhkOTlhZTtcXHJcXG4gICAgLS1jbHItYWNjZW50OiAjZmZkMTY2O1xcclxcbiAgICAtLWNsci1uZXV0cmFsOiAjZWRmMmY0O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4qLCAqOjpiZWZvcmUsICo6OmFmdGVye1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIHV0aWwgY2xhc3NlcyAqL1xcclxcblxcclxcbi8qIC5jbHItcHJpbWFyeXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLW5ldXRyYWwpO1xcclxcbn1cXHJcXG4uY2xyLXNlY29uZGFyeXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXNlY29uZGFyeSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbmV1dHJhbCk7XFxyXFxufVxcclxcbi5jbHItYWNjZW50e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1uZXV0cmFsKTtcXHJcXG59XFxyXFxuLmNsci1uZXV0cmFse1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItbmV1dHJhbCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxufSAqL1xcclxcblxcclxcblxcclxcblxcclxcbmJvZHl7XFxyXFxuICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjMxMjVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbmV1dHJhbCk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjs7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50e1xcclxcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmNlbnRlckNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICAgIHdpZHRoOiBtaW4oOTAlLCA1MC41cmVtKTsgXFxyXFxufVxcclxcblxcclxcbi8qIEhlYWRlciAqL1xcclxcblxcclxcbiNoZWFkZXJ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUGxhbmV0IEJlbnNvbic7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi8qIG5hdiB0YWJzICovXFxyXFxuLyogI3RhYnMge1xcclxcbiAgXFxyXFxufSAqL1xcclxcbiN0YWJzIHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbn1cXHJcXG5cXHJcXG4udGFiSXRlbSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLW5ldXRyYWwpO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcbiN0YWJzIHVsIGxpOmhvdmVyICwgLmFjdGl2ZXtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgcGFkZGluZzogMTRweCAzMHB4O1xcclxcbiAgIFxcclxcbn1cXHJcXG5cXHJcXG4vKiBtYWluIGNvbnRlbnQgKi9cXHJcXG5cXHJcXG4jbWFpbntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qIHRhYkNvbnRlbnQgKi9cXHJcXG5cXHJcXG4udGFiQ29udGVudHtcXHJcXG4gICAgcGFkZGluZzogM3JlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGFiQ29udGVudCA+ICoge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxufVxcclxcblxcclxcbi8qIGFib3V0IHVzICovXFxyXFxuXFxyXFxuI2Fib3V0Q2hlZiA+ICp7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogbWVudSAqL1xcclxcbiNtZW51RGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzcmVtO1xcclxcbiAgICBwYWRkaW5nOiAzcmVtIDA7XFxyXFxufVxcclxcblxcclxcbi5tZW51Q2FyZHtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1uZXV0cmFsKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1EZXRhaWxze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxufVxcclxcbiNxdHl7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC4yNXJlbTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkVG9DYXJ0e1xcclxcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuI2FkZFRvQ2FydDpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhYzAzOTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb250YWN0ICovXFxyXFxuI2NvbnRhY3REaXZ7XFxyXFxuICAgIC8qIG1heC13aWR0aDogNDAwcHg7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDJyZW0gNHJlbSAycmVtO1xcclxcbn1cXHJcXG4jY29va2luZ0ltZywgI2NoZWZJbWd7XFxyXFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcbiNjb250YWN0SW5mb3tcXHJcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDM3MHB4O1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogZm9vdGVyICovXFxyXFxuXFxyXFxuI2Zvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1uZXV0cmFsKTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtO1xcclxcbn1cXHJcXG4jZm9vdGVyIGF7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1hY2NlbnQpXFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XFxyXFxuICAgIFxcclxcbiAgICAudGFiQ29udGVudHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDNyZW0gNXJlbTtcXHJcXG4gICAgfVxcclxcbiAgICAudGFiQ29udGVudCA+ICoge1xcclxcbiAgICAgICAgZmxleC1iYXNpczogMTAwJTtcXHJcXG4gICAgfVxcclxcbiAgICAudGFiQ29udGVudCA+ICogKyAqe1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbWVudURpdntcXHJcXG4gICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XFxyXFxuICAgIH1cXHJcXG4gICAgI2NvbnRhY3REaXZ7XFxyXFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNnJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtaW4taGVpZ2h0OiA3NTBweCl7XFxyXFxuICAgICNmb290ZXJ7XFxyXFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICBib3R0b206IDA7XFxyXFxuICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYShtYXgtd2lkdGg6IDUwMHB4KXtcXHJcXG4gICAgI3RhYnMgdWwge1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuICAgICN0YWJzIHVsIGxpIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMHJlbTtcXHJcXG4gICAgICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgXFxyXFxuICAgICNjb250YWN0RGl2e1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMnJlbSA0cmVtIDJyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNoZWZJbWdVUkwgZnJvbSAnLi9jaGVmLnN2Zyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXRVcygpe1xyXG4gICAgXHJcbiAgICAvL2Fib3V0VXMgZGl2XHJcbiAgICBcclxuICAgIGNvbnN0IGFib3V0VXNDb250ZW50PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFib3V0VXNDb250ZW50LmlkID0nYWJvdXRVc0NvbnRlbnQnO1xyXG4gICAgYWJvdXRVc0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFiQ29udGVudCcpO1xyXG5cclxuXHJcbiAgICAvLyBjaGVmIGltZ1xyXG4gICAgY29uc3QgaW1nRGl2PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGNoZWZJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNoZWZJbWcuc3JjPSBjaGVmSW1nVVJMO1xyXG4gICAgY2hlZkltZy5pZD0gJ2NoZWZJbWcnO1xyXG4gICAgaW1nRGl2LmFwcGVuZENoaWxkKGNoZWZJbWcpO1xyXG4gICAgXHJcbiAgICAvL2Fib3V0IENoZWYgRGl2XHJcbiAgICBjb25zdCBhYm91dENoZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFib3V0Q2hlZi5pZD0nYWJvdXRDaGVmJztcclxuICAgIGFib3V0Q2hlZi5pbm5lckhUTUw9IGBcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDI+T3VyIFN0b3J5PC9oMj5cclxuICAgICAgICAgICAgPHA+QmFzZWQgbG9jYWxseSBpbiBDaXR5LCB3ZSBzZXJ2ZSBmcmVzaCBob21lLWNvb2tlZCBoYWxhbCBmb29kLiAgU3BlY2lhbCBjYXJlIGlzIHRha2VuIHRvIG1ha2Ugc3VyZSBhbGwgaW5ncmVkaWVudHMgYXJlIGZyZXNoLjwvcD5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPk91ciBWaXNpb248L2gyPlxyXG4gICAgICAgICAgICA8cD5XZSBiZWxpZXZlIGluIHNwcmVhZGluZyB3YXJtdGggYW5kIGhhcHBpbmVzcyB0aHJvdWdoIG91ciBzZXJ2aWNlcy4gQ3VycmVudGx5IHdlJ3JlIGEgc21hbGwgYnVzaW5lc3MgcnVuIGJ5IGEgZmFtaWx5LCBidXQgd2Ugd29yayBoYXJkIGFuZCB3aXNoIHRvIGV4cGFuZCBvdXIgYnVzaW5lc3MgdG8gc2VydmUgbW9yZSBwZW9wbGUuPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgYFxyXG5cclxuICAgIC8vYWRkIGltZ0RpdiBhbmQgYWJvdXRDaGVmIGRpdiB0byBhYm91dFVzQ29udGVudCBkaXZcclxuICAgIGFib3V0VXNDb250ZW50LmFwcGVuZChpbWdEaXYsIGFib3V0Q2hlZik7XHJcblxyXG4gICAgcmV0dXJuIGFib3V0VXNDb250ZW50O1xyXG59IiwiaW1wb3J0IGNvb2tpbmdJbWdVUkwgZnJvbSAnLi9jb29raW5nLnN2Zyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0KCl7XHJcbiAgICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0RGl2LmlkPSAnY29udGFjdERpdic7XHJcblxyXG4gICAgY29uc3QgaW1nRGl2PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGNvb2tpbmdJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNvb2tpbmdJbWcuc3JjPSBjb29raW5nSW1nVVJMO1xyXG4gICAgY29va2luZ0ltZy5pZD0gJ2Nvb2tpbmdJbWcnO1xyXG4gICAgaW1nRGl2LmFwcGVuZENoaWxkKGNvb2tpbmdJbWcpO1xyXG5cclxuICAgIGNvbnRhY3REaXYuYXBwZW5kKGltZ0RpdilcclxuICAgIGNvbnRhY3REaXYuaW5uZXJIVE1MKz0gYFxyXG4gICAgPGgzPkZvciBNYXNzIE9yZGVycyAmIE90aGVyIFF1ZXJpZXM8L2gzPlxyXG4gICAgPGRpdiBpZD0nY29udGFjdEluZm8nPlxyXG4gICAgPGRpdj5QaG9uZTogeHh4LXh4eC14eHh4PC9kaXY+XHJcbiAgICA8ZGl2PkVtYWlsOiBvd25lckBhYmJ1bm9udmVnLmNvbTwvZGl2PlxyXG4gICAgPGRpdj5BZGRyZXNzOiBBQkMgQ29sb255LCBYWVogUm9hZCwgQ2l0eSAtICh4eHgteHh4KTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgXHJcblxyXG5cclxuICAgIHJldHVybiBjb250YWN0RGl2O1xyXG59IiwiaW1wb3J0IGJpcnlhbmlJbWdVUkwgZnJvbSAnLi9jaGlja2VuQmlyeWFuaS5qcGcnO1xyXG5pbXBvcnQgY2hpY2tlblRpa2thVVJMIGZyb20gJy4vY2hpY2tlblRpa2thLmpwZWcnO1xyXG5pbXBvcnQgYnV0dGVyQ2hpY2tlblVSTCBmcm9tICcuL2J1dHRlckNoaWNrZW4uanBlZyc7XHJcbmltcG9ydCBmaXNoRnJ5VVJMIGZyb20gJy4vZmlzaEZyeS5qcGVnJztcclxuaW1wb3J0IGZpc2hDdXJyeVVSTCBmcm9tICcuL2Zpc2hDdXJyeS5qcGVnJztcclxuaW1wb3J0IGVnZ0N1cnJ5VVJMIGZyb20gJy4vZWdnQ3VycnkuanBnJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCl7XHJcbiAgICBjb25zdCBtZW51RGl2PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVEaXYuaWQ9J21lbnVEaXYnO1xyXG5cclxuICAgIGNvbnN0IG1lbnV0SXRlbUxpc3QgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnQ2hpY2tlbiBCaXJ5YW5pJyxcclxuICAgICAgICAgICAgcHJpY2U6ICcxNTAgUnMuJyxcclxuICAgICAgICAgICAgdXJsOiBiaXJ5YW5pSW1nVVJMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnQ2hpY2tlbiBUaWtrYScsXHJcbiAgICAgICAgICAgIHByaWNlOiAnMTgwIFJzLicsXHJcbiAgICAgICAgICAgIHVybDogY2hpY2tlblRpa2thVVJMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnQnV0dGVyIENoaWNrZW4nLFxyXG4gICAgICAgICAgICBwcmljZTogJzI1MCBScy4nLFxyXG4gICAgICAgICAgICB1cmw6IGJ1dHRlckNoaWNrZW5VUkwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdGaXNoIEZyeScsXHJcbiAgICAgICAgICAgIHByaWNlOiAnMTgwIFJzLicsXHJcbiAgICAgICAgICAgIHVybDogZmlzaEZyeVVSTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0Zpc2ggQ3VycnknLFxyXG4gICAgICAgICAgICBwcmljZTogJzI1MCBScy4nLFxyXG4gICAgICAgICAgICB1cmw6IGZpc2hDdXJyeVVSTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0VnZyBDdXJyeScsXHJcbiAgICAgICAgICAgIHByaWNlOiAnMTUwIFJzLicsXHJcbiAgICAgICAgICAgIHVybDogZWdnQ3VycnlVUkwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgIF1cclxuXHJcbiAgICAvLyBtZW51RGl2LmlubmVySFRNTD1gXHJcbiAgICAvLyA8aDM+TWVudSBJdGVtczwvaDNgXHJcblxyXG4gICAgbWVudXRJdGVtTGlzdC5mb3JFYWNoKG1lbnVJdGVtPT57XHJcbiAgICAgICAgbGV0IG1lbnVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbWVudUNhcmQuY2xhc3NMaXN0LmFkZCgnbWVudUNhcmQnKTtcclxuICAgICAgICBsZXQgaW1nRGl2PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBsZXQgaXRlbUltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGl0ZW1JbWcuc3JjPSBtZW51SXRlbS51cmw7XHJcbiAgICAgICAgaXRlbUltZy5pZD0gYCR7bWVudUl0ZW0ubmFtZX1gO1xyXG4gICAgICAgIGl0ZW1JbWcuc3R5bGUud2lkdGg9ICcyNTBweCc7XHJcbiAgICAgICAgaXRlbUltZy5zdHlsZS5oZWlnaHQ9ICcyNTBweCc7XHJcbiAgICAgICAgaW1nRGl2LmFwcGVuZENoaWxkKGl0ZW1JbWcpO1xyXG4gICAgICAgIG1lbnVDYXJkLmFwcGVuZChpbWdEaXYpO1xyXG5cclxuICAgICAgICAgbWVudUNhcmQuaW5uZXJIVE1MKz0gYFxyXG4gICAgICAgICA8ZGl2IGNsYXNzPSAnaXRlbURldGFpbHMnPlxyXG4gICAgICAgICAgICA8ZGl2PjxzdHJvbmc+JHttZW51SXRlbS5uYW1lfTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlByaWNlIDogPHN0cm9uZz4ke21lbnVJdGVtLnByaWNlfTwvc3Ryb25nPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlF0eSA6IDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT1cInF0eVwiIGlkPVwicXR5XCIgdmFsdWU9JzAnPjwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPSdhZGRUb0NhcnQnPkFkZCBUbyBDYXJ0PC9idXR0b24+XHJcbiAgICAgICAgIDwvZGl2PiAgICBcclxuICAgICAgICAgYFxyXG4gICAgXHJcblxyXG4gICAgICAgIG1lbnVEaXYuYXBwZW5kKG1lbnVDYXJkKTtcclxuICAgIH0pXHJcblxyXG4gICBcclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyBsZXQgbmFtZT0gJ0NoaWNrZW4gQmlyeWFuaSc7XHJcbiAgICAvLyBsZXQgcHJpY2UgPSAyNTA7XHJcbiAgIFxyXG4gICBcclxuICAgIC8vY29uc3QgaXRlbURldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gbWVudURpdjtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnXHJcblxyXG5pbXBvcnQgYWJvdXRVcyBmcm9tICcuL2Fib3V0VXMnO1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnXHJcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdCc7XHJcblxyXG5cclxuY29uc3QgY29udGVudERpdj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmNvbnRlbnREaXYuaWQ9J2NvbnRlbnQnO1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnREaXYpO1xyXG5cclxuLy9oZWFkZXJcclxuY29uc3QgaGVhZGVyPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuaGVhZGVyLmlkPSAnaGVhZGVyJztcclxuaGVhZGVyLnRleHRDb250ZW50ID0gJ0FiYnUgTm9uLVZlZyc7XHJcblxyXG5cclxuLy9uYXYgdGFicyBcclxuY29uc3QgbmF2PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxubmF2LmlkPSAndGFicyc7XHJcbm5hdi5jbGFzc0xpc3QuYWRkKCdjZW50ZXJDb250YWluZXInKVxyXG5cclxuLy8gY29uc3QgdWw9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbi8vIGNvbnN0IGxpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbi8vIGNvbnN0IGxpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbi8vIGNvbnN0IGxpMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbi8vIGxpMS50ZXh0Q29udGVudD0nQWJvdXQgVXMnO1xyXG4vLyBsaTIudGV4dENvbnRlbnQ9J01lbnUnO1xyXG4vLyBsaTMudGV4dENvbnRlbnQ9J0NvbnRhY3QnO1xyXG5cclxuLy8gdWwuYXBwZW5kKGxpMSxsaTIsbGkzKTtcclxuLy8gbmF2LmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbm5hdi5pbm5lckhUTUw9IGA8dWw+IFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBpZD0nYWJvdXQnIGNsYXNzPSd0YWJJdGVtJz5BYm91dCBVczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPSdtZW51JyBjbGFzcz0ndGFiSXRlbSc+TWVudTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPSdjb250YWN0JyBjbGFzcz0ndGFiSXRlbSc+Q29udGFjdDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L3VsPmBcclxuXHJcbiAvL2hlYWRlci5hcHBlbmRDaGlsZChuYXYpXHJcblxyXG4vL21haW4gZGl2XHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5tYWluLmlkPSdtYWluJztcclxubWFpbi5jbGFzc0xpc3QuYWRkKCdjZW50ZXJDb250YWluZXInKTtcclxuXHJcblxyXG4vL2RlZmF1bHQgaXMgYWJvdXQgdXMgcGFnZVxyXG5tYWluLmFwcGVuZChhYm91dFVzKCkpO1xyXG5cclxuLy90YWJiaW5nIGZ1bmN0aW9uYWxpdHk7XHJcblxyXG5uYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcclxuICAgIGNvbnNvbGUubG9nKClcclxuICAgIC8vcmVtb3ZlIGFjdGl2ZSBjbGFzcyBmcm9tIGVhY2ggbWVudSBpdGVtLCBsYXRlciBhZGQgb25seSB0aGF0IHdoaWNoIGlzIGNsaWNrZWRcclxuICAgIGxldCB0YWJJdGVtQXJyPSBBcnJheS5mcm9tKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuY2hpbGRyZW4pO1xyXG4gICAgdGFiSXRlbUFyci5mb3JFYWNoKG1lbnVJdGVtPT4gbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG4gICAgLy8gZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlbi5mb3JFYWNoKG1lbnVJdGVtPT4gbWVudUl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJykpO1xyXG5cclxuICAgIFxyXG5cclxuICAgIGlmKGUudGFyZ2V0LmlkPT09J2Fib3V0JylcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBtYWluLmlubmVySFRNTD0nJztcclxuICAgICAgICAgICAgbWFpbi5hcHBlbmQoYWJvdXRVcygpKVxyXG4gICAgICAgIH1cclxuICAgIGVsc2UgaWYoZS50YXJnZXQuaWQ9PT0nbWVudScpXHJcbiAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbWFpbi5pbm5lckhUTUw9Jyc7XHJcbiAgICAgICAgICAgIG1haW4uYXBwZW5kKG1lbnUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgZWxzZSBpZihlLnRhcmdldC5pZD09PSdjb250YWN0JylcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBtYWluLmlubmVySFRNTD0nJztcclxuICAgICAgICAgICAgbWFpbi5hcHBlbmQoY29udGFjdCgpKTtcclxuICAgICAgICB9XHJcbn0pXHJcblxyXG5cclxuLy8gXHJcblxyXG5cclxuLy9mb290ZXJcclxuY29uc3QgZm9vdGVyPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuZm9vdGVyLmlkPSdmb290ZXInO1xyXG5mb290ZXIuaW5uZXJIVE1MPSBgTWFkZSBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25hc2hpdHNoYXlhblwiIHRhcmdldD1cIl9ibGFua1wiPk5hc2hpdCBTaGF5YW4gS2hhbjwvYT4uIENsaWNrIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbmFzaGl0c2hheWFuL3Jlc3RhdXJhbnQtcGFnZVwiIHRhcmdldD1cIl9ibGFua1wiPmhlcmU8L2E+IHRvIHNlZSB0aGUgY29kZS5gXHJcblxyXG5cclxuY29udGVudERpdi5hcHBlbmQoaGVhZGVyLG5hdiwgbWFpbixmb290ZXIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=