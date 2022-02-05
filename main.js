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
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: 'Planet Benson';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\r\n}\r\n\r\n\r\n\r\n*, *::before, *::after{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n\r\nbody{\r\n   \r\n    font-weight: 400;\r\n    font-size: 1.3125rem;\r\n    line-height: 1.6;\r\n}\r\n\r\n#content{\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\nimg {\r\n    display: block;\r\n    max-width: 100%;\r\n  }\r\n\r\n.centerContainer {\r\n    margin-inline: auto;\r\n    width: min(90%, 50.5rem); \r\n}\r\n\r\n/* Header */\r\n\r\n#header{\r\n    font-family: 'Planet Benson';\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    background-color: beige;\r\n    padding: 2rem;\r\n}\r\n\r\n/* nav tabs */\r\n/* #tabs {\r\n  \r\n} */\r\n#tabs ul {\r\n    list-style: none;\r\n    background-color: salmon;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    padding: 1rem;\r\n}\r\n\r\n#tabs ul li {\r\n    cursor: pointer;\r\n    background-color: goldenrod;\r\n    padding: 0.25em 0.5rem;\r\n    border-radius: 4px;\r\n}\r\n#tabs ul li:hover {\r\n    background-color: rgb(247, 193, 57);\r\n   \r\n    /* padding: 0.15em 0.4rem; */\r\n}\r\n\r\n/* main content */\r\n\r\n#main{\r\n    background-color: aquamarine;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* tabContent */\r\n\r\n.tabContent{\r\n    background-color: darkgoldenrod;\r\n    padding: 3rem 5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n\r\n.tabContent > * {\r\n    margin-bottom: 2em;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* menu */\r\n#menuDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 3rem;\r\n    padding: 3rem 0;\r\n}\r\n\r\n.menuCard{\r\n    border: 5px solid darkgoldenrod;\r\n    background-color: lightgoldenrodyellow;\r\n    max-width: 300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.itemDetails{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 1rem;\r\n    padding: 0.5rem;\r\n    /* border: 1px solid black; */\r\n}\r\n#qty{\r\n    width: 50px;\r\n    font-size: 1.1rem;\r\n    padding: 0.25rem;\r\n}\r\n\r\n#addToCart{\r\n    padding: 0.75rem;\r\n    margin-top: 0.5rem;\r\n    background-color: goldenrod;\r\n    border: 1px solid black;\r\n}\r\n\r\n/* contact */\r\n#contactDiv{\r\n    /* max-width: 400px; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n    padding: 2rem 2rem 4rem 2rem;\r\n}\r\n#cookingImg{\r\n    max-width: 300px;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n\r\n\r\n/* footer */\r\n\r\n#footer {\r\n    background-color: beige;\r\n    text-align: center;\r\n    font-size: 1.2rem;\r\n    padding: 1.5rem;\r\n}\r\n\r\n\r\n\r\n@media (min-width: 40em) {\r\n   \r\n    .tabContent {\r\n        flex-direction: row;\r\n    }\r\n    .tabContent > * {\r\n        flex-basis: 100%;\r\n    }\r\n    .tabContent > * + *{\r\n        margin-left: 2em;\r\n    }\r\n\r\n    #menuDiv{\r\n        flex-flow: row wrap;\r\n    }\r\n    #contactDiv{\r\n        padding-bottom: 6rem;\r\n    }\r\n\r\n  }", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;IAC5B,+DAA6C;AACjD;;;;AAIA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;;;AAIA;;IAEI,gBAAgB;IAChB,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,cAAc;IACd,eAAe;EACjB;;AAEF;IACI,mBAAmB;IACnB,wBAAwB;AAC5B;;AAEA,WAAW;;AAEX;IACI,4BAA4B;IAC5B,eAAe;IACf,kBAAkB;IAClB,uBAAuB;IACvB,aAAa;AACjB;;AAEA,aAAa;AACb;;GAEG;AACH;IACI,gBAAgB;IAChB,wBAAwB;IACxB,aAAa;IACb,6BAA6B;IAC7B,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,2BAA2B;IAC3B,sBAAsB;IACtB,kBAAkB;AACtB;AACA;IACI,mCAAmC;;IAEnC,4BAA4B;AAChC;;AAEA,iBAAiB;;AAEjB;IACI,4BAA4B;AAChC;;;;;;;AAOA,eAAe;;AAEf;IACI,+BAA+B;IAC/B,kBAAkB;IAClB,aAAa;IACb,sBAAsB;AAC1B;;;AAGA;IACI,kBAAkB;AACtB;;;;;;AAMA,SAAS;AACT;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,+BAA+B;IAC/B,sCAAsC;IACtC,gBAAgB;IAChB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,eAAe;IACf,6BAA6B;AACjC;AACA;IACI,WAAW;IACX,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,kBAAkB;IAClB,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA,YAAY;AACZ;IACI,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,cAAc;IACd,4BAA4B;AAChC;AACA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;;;;AAIA,WAAW;;AAEX;IACI,uBAAuB;IACvB,kBAAkB;IAClB,iBAAiB;IACjB,eAAe;AACnB;;;;AAIA;;IAEI;QACI,mBAAmB;IACvB;IACA;QACI,gBAAgB;IACpB;IACA;QACI,gBAAgB;IACpB;;IAEA;QACI,mBAAmB;IACvB;IACA;QACI,oBAAoB;IACxB;;EAEF","sourcesContent":["@font-face {\r\n    font-family: 'Planet Benson';\r\n    src: url('./planetbe.ttf') format('truetype');\r\n}\r\n\r\n\r\n\r\n*, *::before, *::after{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n\r\nbody{\r\n   \r\n    font-weight: 400;\r\n    font-size: 1.3125rem;\r\n    line-height: 1.6;\r\n}\r\n\r\n#content{\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\nimg {\r\n    display: block;\r\n    max-width: 100%;\r\n  }\r\n\r\n.centerContainer {\r\n    margin-inline: auto;\r\n    width: min(90%, 50.5rem); \r\n}\r\n\r\n/* Header */\r\n\r\n#header{\r\n    font-family: 'Planet Benson';\r\n    font-size: 2rem;\r\n    text-align: center;\r\n    background-color: beige;\r\n    padding: 2rem;\r\n}\r\n\r\n/* nav tabs */\r\n/* #tabs {\r\n  \r\n} */\r\n#tabs ul {\r\n    list-style: none;\r\n    background-color: salmon;\r\n    display: flex;\r\n    justify-content: space-around;\r\n    padding: 1rem;\r\n}\r\n\r\n#tabs ul li {\r\n    cursor: pointer;\r\n    background-color: goldenrod;\r\n    padding: 0.25em 0.5rem;\r\n    border-radius: 4px;\r\n}\r\n#tabs ul li:hover {\r\n    background-color: rgb(247, 193, 57);\r\n   \r\n    /* padding: 0.15em 0.4rem; */\r\n}\r\n\r\n/* main content */\r\n\r\n#main{\r\n    background-color: aquamarine;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* tabContent */\r\n\r\n.tabContent{\r\n    background-color: darkgoldenrod;\r\n    padding: 3rem 5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n\r\n.tabContent > * {\r\n    margin-bottom: 2em;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* menu */\r\n#menuDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 3rem;\r\n    padding: 3rem 0;\r\n}\r\n\r\n.menuCard{\r\n    border: 5px solid darkgoldenrod;\r\n    background-color: lightgoldenrodyellow;\r\n    max-width: 300px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.itemDetails{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 1rem;\r\n    padding: 0.5rem;\r\n    /* border: 1px solid black; */\r\n}\r\n#qty{\r\n    width: 50px;\r\n    font-size: 1.1rem;\r\n    padding: 0.25rem;\r\n}\r\n\r\n#addToCart{\r\n    padding: 0.75rem;\r\n    margin-top: 0.5rem;\r\n    background-color: goldenrod;\r\n    border: 1px solid black;\r\n}\r\n\r\n/* contact */\r\n#contactDiv{\r\n    /* max-width: 400px; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    margin: 0 auto;\r\n    padding: 2rem 2rem 4rem 2rem;\r\n}\r\n#cookingImg{\r\n    max-width: 300px;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n\r\n\r\n/* footer */\r\n\r\n#footer {\r\n    background-color: beige;\r\n    text-align: center;\r\n    font-size: 1.2rem;\r\n    padding: 1.5rem;\r\n}\r\n\r\n\r\n\r\n@media (min-width: 40em) {\r\n   \r\n    .tabContent {\r\n        flex-direction: row;\r\n    }\r\n    .tabContent > * {\r\n        flex-basis: 100%;\r\n    }\r\n    .tabContent > * + *{\r\n        margin-left: 2em;\r\n    }\r\n\r\n    #menuDiv{\r\n        flex-flow: row wrap;\r\n    }\r\n    #contactDiv{\r\n        padding-bottom: 6rem;\r\n    }\r\n\r\n  }"],"sourceRoot":""}]);
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
    aboutChef.textContent= 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste cumque veritatis maiores repellendus quod saepe nulla alias eius, inventore ullam. Quae, temporibus deleniti. Temporibus totam autem placeat perspiciatis! Fugit inventore numquam voluptatibus quos molestiae perferendis quis rerum accusantium totam consequuntur!';

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
    <div>Phone: xxx-xxx-xxxx</div>
    <div>Email: owner@abbunonveg.com</div>
    <div>Address: ABC Colony, XYZ Road, City - (xxx-xxx)</div>
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
            <div>${menuItem.name}</div>
            <div>Price : ${menuItem.price}Rs.</div>
            <div>Qty : <input type="number" name="qty" id="qty" value='1'></div>
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

module.exports = __webpack_require__.p + "86d3b865fd0ce47265b8.svg";

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

module.exports = __webpack_require__.p + "40533b6163c6d4a181d0.jpeg";

/***/ }),

/***/ "./src/cooking.svg":
/*!*************************!*\
  !*** ./src/cooking.svg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3369571ca1407cb9b1b0.svg";

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
                    <li id='about'>About Us</li>
                    <li id='menu'>Menu</li>
                    <li id='contact'>Contact</li>
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
    console.log(e.target.id)
    if(e.target.id==='about')
        {
            main.innerHTML='';
            main.append((0,_aboutUs__WEBPACK_IMPORTED_MODULE_1__["default"])())
        }
    else if(e.target.id==='menu')
        {
            main.innerHTML='';
            main.append((0,_menu__WEBPACK_IMPORTED_MODULE_2__["default"])());
        }
    else if(e.target.id==='contact')
        {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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IjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9hYm91dFVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9wbGFuZXRiZS50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQbGFuZXQgQmVuc29uJztcXHJcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlcntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgIFxcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDEuMzEyNXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnR7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uY2VudGVyQ29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gICAgd2lkdGg6IG1pbig5MCUsIDUwLjVyZW0pOyBcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyICovXFxyXFxuXFxyXFxuI2hlYWRlcntcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQbGFuZXQgQmVuc29uJztcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBuYXYgdGFicyAqL1xcclxcbi8qICN0YWJzIHtcXHJcXG4gIFxcclxcbn0gKi9cXHJcXG4jdGFicyB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNhbG1vbjtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcbiN0YWJzIHVsIGxpIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XFxyXFxuICAgIHBhZGRpbmc6IDAuMjVlbSAwLjVyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG59XFxyXFxuI3RhYnMgdWwgbGk6aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ3LCAxOTMsIDU3KTtcXHJcXG4gICBcXHJcXG4gICAgLyogcGFkZGluZzogMC4xNWVtIDAuNHJlbTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyogbWFpbiBjb250ZW50ICovXFxyXFxuXFxyXFxuI21haW57XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qIHRhYkNvbnRlbnQgKi9cXHJcXG5cXHJcXG4udGFiQ29udGVudHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dvbGRlbnJvZDtcXHJcXG4gICAgcGFkZGluZzogM3JlbSA1cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4udGFiQ29udGVudCA+ICoge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbi8qIG1lbnUgKi9cXHJcXG4jbWVudURpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gICAgcGFkZGluZzogM3JlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudUNhcmR7XFxyXFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGRhcmtnb2xkZW5yb2Q7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z29sZGVucm9keWVsbG93O1xcclxcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbURldGFpbHN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCBibGFjazsgKi9cXHJcXG59XFxyXFxuI3F0eXtcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jYWRkVG9DYXJ0e1xcclxcbiAgICBwYWRkaW5nOiAwLjc1cmVtO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdvbGRlbnJvZDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi8qIGNvbnRhY3QgKi9cXHJcXG4jY29udGFjdERpdntcXHJcXG4gICAgLyogbWF4LXdpZHRoOiA0MDBweDsgKi9cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDJyZW0gNHJlbSAycmVtO1xcclxcbn1cXHJcXG4jY29va2luZ0ltZ3tcXHJcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogZm9vdGVyICovXFxyXFxuXFxyXFxuI2Zvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJlaWdlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XFxyXFxuICAgXFxyXFxuICAgIC50YWJDb250ZW50IHtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICAgIH1cXHJcXG4gICAgLnRhYkNvbnRlbnQgPiAqIHtcXHJcXG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG4gICAgLnRhYkNvbnRlbnQgPiAqICsgKntcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI21lbnVEaXZ7XFxyXFxuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICB9XFxyXFxuICAgICNjb250YWN0RGl2e1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDZyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDRCQUE0QjtJQUM1QiwrREFBNkM7QUFDakQ7Ozs7QUFJQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOzs7O0FBSUE7O0lBRUksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7QUFFRjtJQUNJLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7O0FBRUEsV0FBVzs7QUFFWDtJQUNJLDRCQUE0QjtJQUM1QixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCOztBQUVBLGFBQWE7QUFDYjs7R0FFRztBQUNIO0lBQ0ksZ0JBQWdCO0lBQ2hCLHdCQUF3QjtJQUN4QixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLG1DQUFtQzs7SUFFbkMsNEJBQTRCO0FBQ2hDOztBQUVBLGlCQUFpQjs7QUFFakI7SUFDSSw0QkFBNEI7QUFDaEM7Ozs7Ozs7QUFPQSxlQUFlOztBQUVmO0lBQ0ksK0JBQStCO0lBQy9CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLGtCQUFrQjtBQUN0Qjs7Ozs7O0FBTUEsU0FBUztBQUNUO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxlQUFlO0FBQ25COztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLHNDQUFzQztJQUN0QyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLHVCQUF1QjtBQUMzQjs7QUFFQSxZQUFZO0FBQ1o7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7Ozs7QUFJQSxXQUFXOztBQUVYO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7OztBQUlBOztJQUVJO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksb0JBQW9CO0lBQ3hCOztFQUVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1BsYW5ldCBCZW5zb24nO1xcclxcbiAgICBzcmM6IHVybCgnLi9wbGFuZXRiZS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXJ7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuYm9keXtcXHJcXG4gICBcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgZm9udC1zaXplOiAxLjMxMjVyZW07XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50e1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuLmNlbnRlckNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxyXFxuICAgIHdpZHRoOiBtaW4oOTAlLCA1MC41cmVtKTsgXFxyXFxufVxcclxcblxcclxcbi8qIEhlYWRlciAqL1xcclxcblxcclxcbiNoZWFkZXJ7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUGxhbmV0IEJlbnNvbic7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogbmF2IHRhYnMgKi9cXHJcXG4vKiAjdGFicyB7XFxyXFxuICBcXHJcXG59ICovXFxyXFxuI3RhYnMgdWwge1xcclxcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzYWxtb247XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4jdGFicyB1bCBsaSB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ29sZGVucm9kO1xcclxcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMC41cmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxufVxcclxcbiN0YWJzIHVsIGxpOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMTkzLCA1Nyk7XFxyXFxuICAgXFxyXFxuICAgIC8qIHBhZGRpbmc6IDAuMTVlbSAwLjRyZW07ICovXFxyXFxufVxcclxcblxcclxcbi8qIG1haW4gY29udGVudCAqL1xcclxcblxcclxcbiNtYWlue1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiB0YWJDb250ZW50ICovXFxyXFxuXFxyXFxuLnRhYkNvbnRlbnR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtnb2xkZW5yb2Q7XFxyXFxuICAgIHBhZGRpbmc6IDNyZW0gNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRhYkNvbnRlbnQgPiAqIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBtZW51ICovXFxyXFxuI21lbnVEaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDNyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnVDYXJke1xcclxcbiAgICBib3JkZXI6IDVweCBzb2xpZCBkYXJrZ29sZGVucm9kO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdvbGRlbnJvZHllbGxvdztcXHJcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW1EZXRhaWxze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgYmxhY2s7ICovXFxyXFxufVxcclxcbiNxdHl7XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC4yNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2FkZFRvQ2FydHtcXHJcXG4gICAgcGFkZGluZzogMC43NXJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkZW5yb2Q7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjb250YWN0ICovXFxyXFxuI2NvbnRhY3REaXZ7XFxyXFxuICAgIC8qIG1heC13aWR0aDogNDAwcHg7ICovXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMnJlbSAycmVtIDRyZW0gMnJlbTtcXHJcXG59XFxyXFxuI2Nvb2tpbmdJbWd7XFxyXFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIGZvb3RlciAqL1xcclxcblxcclxcbiNmb290ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBiZWlnZTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xcclxcbiAgIFxcclxcbiAgICAudGFiQ29udGVudCB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICB9XFxyXFxuICAgIC50YWJDb250ZW50ID4gKiB7XFxyXFxuICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICAgIC50YWJDb250ZW50ID4gKiArICp7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNtZW51RGl2e1xcclxcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcXHJcXG4gICAgfVxcclxcbiAgICAjY29udGFjdERpdntcXHJcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA2cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNoZWZJbWdVUkwgZnJvbSAnLi9jaGVmLnN2Zyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXRVcygpe1xyXG4gICAgXHJcbiAgICAvL2Fib3V0VXMgZGl2XHJcbiAgICBcclxuICAgIGNvbnN0IGFib3V0VXNDb250ZW50PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFib3V0VXNDb250ZW50LmlkID0nYWJvdXRVc0NvbnRlbnQnO1xyXG4gICAgYWJvdXRVc0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFiQ29udGVudCcpO1xyXG5cclxuXHJcbiAgICAvLyBjaGVmIGltZ1xyXG4gICAgY29uc3QgaW1nRGl2PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGNoZWZJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNoZWZJbWcuc3JjPSBjaGVmSW1nVVJMO1xyXG4gICAgY2hlZkltZy5pZD0gJ2NoZWZJbWcnO1xyXG4gICAgaW1nRGl2LmFwcGVuZENoaWxkKGNoZWZJbWcpO1xyXG4gICAgXHJcbiAgICAvL2Fib3V0IENoZWYgRGl2XHJcbiAgICBjb25zdCBhYm91dENoZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFib3V0Q2hlZi5pZD0nYWJvdXRDaGVmJztcclxuICAgIGFib3V0Q2hlZi50ZXh0Q29udGVudD0gJ0xvcmVtLCBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBJc3RlIGN1bXF1ZSB2ZXJpdGF0aXMgbWFpb3JlcyByZXBlbGxlbmR1cyBxdW9kIHNhZXBlIG51bGxhIGFsaWFzIGVpdXMsIGludmVudG9yZSB1bGxhbS4gUXVhZSwgdGVtcG9yaWJ1cyBkZWxlbml0aS4gVGVtcG9yaWJ1cyB0b3RhbSBhdXRlbSBwbGFjZWF0IHBlcnNwaWNpYXRpcyEgRnVnaXQgaW52ZW50b3JlIG51bXF1YW0gdm9sdXB0YXRpYnVzIHF1b3MgbW9sZXN0aWFlIHBlcmZlcmVuZGlzIHF1aXMgcmVydW0gYWNjdXNhbnRpdW0gdG90YW0gY29uc2VxdXVudHVyISc7XHJcblxyXG4gICAgLy9hZGQgaW1nRGl2IGFuZCBhYm91dENoZWYgZGl2IHRvIGFib3V0VXNDb250ZW50IGRpdlxyXG4gICAgYWJvdXRVc0NvbnRlbnQuYXBwZW5kKGltZ0RpdiwgYWJvdXRDaGVmKTtcclxuXHJcbiAgICByZXR1cm4gYWJvdXRVc0NvbnRlbnQ7XHJcbn0iLCJpbXBvcnQgY29va2luZ0ltZ1VSTCBmcm9tICcuL2Nvb2tpbmcuc3ZnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3QoKXtcclxuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3REaXYuaWQ9ICdjb250YWN0RGl2JztcclxuXHJcbiAgICBjb25zdCBpbWdEaXY9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgY29va2luZ0ltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY29va2luZ0ltZy5zcmM9IGNvb2tpbmdJbWdVUkw7XHJcbiAgICBjb29raW5nSW1nLmlkPSAnY29va2luZ0ltZyc7XHJcbiAgICBpbWdEaXYuYXBwZW5kQ2hpbGQoY29va2luZ0ltZyk7XHJcblxyXG4gICAgY29udGFjdERpdi5hcHBlbmQoaW1nRGl2KVxyXG4gICAgY29udGFjdERpdi5pbm5lckhUTUwrPSBgXHJcbiAgICA8aDM+Rm9yIE1hc3MgT3JkZXJzICYgT3RoZXIgUXVlcmllczwvaDM+XHJcbiAgICA8ZGl2PlBob25lOiB4eHgteHh4LXh4eHg8L2Rpdj5cclxuICAgIDxkaXY+RW1haWw6IG93bmVyQGFiYnVub252ZWcuY29tPC9kaXY+XHJcbiAgICA8ZGl2PkFkZHJlc3M6IEFCQyBDb2xvbnksIFhZWiBSb2FkLCBDaXR5IC0gKHh4eC14eHgpPC9kaXY+XHJcbiAgICBgXHJcblxyXG5cclxuICAgIHJldHVybiBjb250YWN0RGl2O1xyXG59IiwiaW1wb3J0IGJpcnlhbmlJbWdVUkwgZnJvbSAnLi9jaGlja2VuQmlyeWFuaS5qcGcnO1xyXG5pbXBvcnQgY2hpY2tlblRpa2thVVJMIGZyb20gJy4vY2hpY2tlblRpa2thLmpwZWcnO1xyXG5pbXBvcnQgYnV0dGVyQ2hpY2tlblVSTCBmcm9tICcuL2J1dHRlckNoaWNrZW4uanBlZyc7XHJcbmltcG9ydCBmaXNoRnJ5VVJMIGZyb20gJy4vZmlzaEZyeS5qcGVnJztcclxuaW1wb3J0IGZpc2hDdXJyeVVSTCBmcm9tICcuL2Zpc2hDdXJyeS5qcGVnJztcclxuaW1wb3J0IGVnZ0N1cnJ5VVJMIGZyb20gJy4vZWdnQ3VycnkuanBnJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51KCl7XHJcbiAgICBjb25zdCBtZW51RGl2PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVEaXYuaWQ9J21lbnVEaXYnO1xyXG5cclxuICAgIGNvbnN0IG1lbnV0SXRlbUxpc3QgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnQ2hpY2tlbiBCaXJ5YW5pJyxcclxuICAgICAgICAgICAgcHJpY2U6ICcxNTAgUnMuJyxcclxuICAgICAgICAgICAgdXJsOiBiaXJ5YW5pSW1nVVJMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnQ2hpY2tlbiBUaWtrYScsXHJcbiAgICAgICAgICAgIHByaWNlOiAnMTgwIFJzLicsXHJcbiAgICAgICAgICAgIHVybDogY2hpY2tlblRpa2thVVJMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnQnV0dGVyIENoaWNrZW4nLFxyXG4gICAgICAgICAgICBwcmljZTogJzI1MCBScy4nLFxyXG4gICAgICAgICAgICB1cmw6IGJ1dHRlckNoaWNrZW5VUkwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdGaXNoIEZyeScsXHJcbiAgICAgICAgICAgIHByaWNlOiAnMTgwIFJzLicsXHJcbiAgICAgICAgICAgIHVybDogZmlzaEZyeVVSTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0Zpc2ggQ3VycnknLFxyXG4gICAgICAgICAgICBwcmljZTogJzI1MCBScy4nLFxyXG4gICAgICAgICAgICB1cmw6IGZpc2hDdXJyeVVSTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0VnZyBDdXJyeScsXHJcbiAgICAgICAgICAgIHByaWNlOiAnMTUwIFJzLicsXHJcbiAgICAgICAgICAgIHVybDogZWdnQ3VycnlVUkwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcclxuICAgIF1cclxuXHJcbiAgICBtZW51dEl0ZW1MaXN0LmZvckVhY2gobWVudUl0ZW09PntcclxuICAgICAgICBsZXQgbWVudUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBtZW51Q2FyZC5jbGFzc0xpc3QuYWRkKCdtZW51Q2FyZCcpO1xyXG4gICAgICAgIGxldCBpbWdEaXY9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxldCBpdGVtSW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaXRlbUltZy5zcmM9IG1lbnVJdGVtLnVybDtcclxuICAgICAgICBpdGVtSW1nLmlkPSBgJHttZW51SXRlbS5uYW1lfWA7XHJcbiAgICAgICAgaXRlbUltZy5zdHlsZS53aWR0aD0gJzI1MHB4JztcclxuICAgICAgICBpdGVtSW1nLnN0eWxlLmhlaWdodD0gJzI1MHB4JztcclxuICAgICAgICBpbWdEaXYuYXBwZW5kQ2hpbGQoaXRlbUltZyk7XHJcbiAgICAgICAgbWVudUNhcmQuYXBwZW5kKGltZ0Rpdik7XHJcblxyXG4gICAgICAgICBtZW51Q2FyZC5pbm5lckhUTUwrPSBgXHJcbiAgICAgICAgIDxkaXYgY2xhc3M9ICdpdGVtRGV0YWlscyc+XHJcbiAgICAgICAgICAgIDxkaXY+JHttZW51SXRlbS5uYW1lfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlByaWNlIDogJHttZW51SXRlbS5wcmljZX1Scy48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5RdHkgOiA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJxdHlcIiBpZD1cInF0eVwiIHZhbHVlPScxJz48L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD0nYWRkVG9DYXJ0Jz5BZGQgVG8gQ2FydDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgIGBcclxuICAgIFxyXG5cclxuICAgICAgICBtZW51RGl2LmFwcGVuZChtZW51Q2FyZCk7XHJcbiAgICB9KVxyXG5cclxuICAgXHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gbGV0IG5hbWU9ICdDaGlja2VuIEJpcnlhbmknO1xyXG4gICAgLy8gbGV0IHByaWNlID0gMjUwO1xyXG4gICBcclxuICAgXHJcbiAgICAvL2NvbnN0IGl0ZW1EZXRhaWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIG1lbnVEaXY7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCAnLi9zdHlsZXMuY3NzJ1xyXG5cclxuaW1wb3J0IGFib3V0VXMgZnJvbSAnLi9hYm91dFVzJztcclxuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51J1xyXG5pbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xyXG5cclxuXHJcbmNvbnN0IGNvbnRlbnREaXY9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb250ZW50RGl2LmlkPSdjb250ZW50JztcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcclxuXHJcbi8vaGVhZGVyXHJcbmNvbnN0IGhlYWRlcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbmhlYWRlci5pZD0gJ2hlYWRlcic7XHJcbmhlYWRlci50ZXh0Q29udGVudCA9ICdBYmJ1IE5vbi1WZWcnO1xyXG5cclxuXHJcbi8vbmF2IHRhYnMgXHJcbmNvbnN0IG5hdj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbm5hdi5pZD0gJ3RhYnMnO1xyXG5uYXYuY2xhc3NMaXN0LmFkZCgnY2VudGVyQ29udGFpbmVyJylcclxuXHJcbi8vIGNvbnN0IHVsPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG4vLyBjb25zdCBsaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4vLyBjb25zdCBsaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4vLyBjb25zdCBsaTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4vLyBsaTEudGV4dENvbnRlbnQ9J0Fib3V0IFVzJztcclxuLy8gbGkyLnRleHRDb250ZW50PSdNZW51JztcclxuLy8gbGkzLnRleHRDb250ZW50PSdDb250YWN0JztcclxuXHJcbi8vIHVsLmFwcGVuZChsaTEsbGkyLGxpMyk7XHJcbi8vIG5hdi5hcHBlbmRDaGlsZCh1bCk7XHJcblxyXG5uYXYuaW5uZXJIVE1MPSBgPHVsPiBcclxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9J2Fib3V0Jz5BYm91dCBVczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGlkPSdtZW51Jz5NZW51PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9J2NvbnRhY3QnPkNvbnRhY3Q8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC91bD5gXHJcblxyXG4gLy9oZWFkZXIuYXBwZW5kQ2hpbGQobmF2KVxyXG5cclxuLy9tYWluIGRpdlxyXG5cclxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxubWFpbi5pZD0nbWFpbic7XHJcbm1haW4uY2xhc3NMaXN0LmFkZCgnY2VudGVyQ29udGFpbmVyJyk7XHJcblxyXG5cclxuLy9kZWZhdWx0IGlzIGFib3V0IHVzIHBhZ2VcclxubWFpbi5hcHBlbmQoYWJvdXRVcygpKTtcclxuXHJcbi8vdGFiYmluZyBmdW5jdGlvbmFsaXR5O1xyXG5cclxubmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZClcclxuICAgIGlmKGUudGFyZ2V0LmlkPT09J2Fib3V0JylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1haW4uaW5uZXJIVE1MPScnO1xyXG4gICAgICAgICAgICBtYWluLmFwcGVuZChhYm91dFVzKCkpXHJcbiAgICAgICAgfVxyXG4gICAgZWxzZSBpZihlLnRhcmdldC5pZD09PSdtZW51JylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG1haW4uaW5uZXJIVE1MPScnO1xyXG4gICAgICAgICAgICBtYWluLmFwcGVuZChtZW51KCkpO1xyXG4gICAgICAgIH1cclxuICAgIGVsc2UgaWYoZS50YXJnZXQuaWQ9PT0nY29udGFjdCcpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBtYWluLmlubmVySFRNTD0nJztcclxuICAgICAgICAgICAgbWFpbi5hcHBlbmQoY29udGFjdCgpKTtcclxuICAgICAgICB9XHJcbn0pXHJcblxyXG5cclxuLy8gXHJcblxyXG5cclxuLy9mb290ZXJcclxuY29uc3QgZm9vdGVyPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuZm9vdGVyLmlkPSdmb290ZXInO1xyXG5mb290ZXIuaW5uZXJIVE1MPSBgTWFkZSBieSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25hc2hpdHNoYXlhblwiIHRhcmdldD1cIl9ibGFua1wiPk5hc2hpdCBTaGF5YW4gS2hhbjwvYT4uIENsaWNrIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbmFzaGl0c2hheWFuL3Jlc3RhdXJhbnQtcGFnZVwiIHRhcmdldD1cIl9ibGFua1wiPmhlcmU8L2E+IHRvIHNlZSB0aGUgY29kZS5gXHJcblxyXG5cclxuY29udGVudERpdi5hcHBlbmQoaGVhZGVyLG5hdiwgbWFpbixmb290ZXIpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=