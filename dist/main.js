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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\r\n    font-family: 'Planet Benson';\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\r\n}\r\n\r\n:root{\r\n    --clr-primary: #2b2d42;\r\n    --clr-secondary: #8d99ae;\r\n    --clr-accent: #ffd166;\r\n    --clr-neutral: #edf2f4;\r\n}\r\n\r\n\r\n*, *::before, *::after{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n\r\nbody{\r\n    color: var(--clr-neutral);\r\n    font-family: 'Open Sans', sans-serif;;\r\n    font-weight: 400;\r\n    font-size: 1.3125rem;\r\n    line-height: 1.6;\r\n}\r\n\r\n\r\n\r\n#content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n\r\nimg {\r\n    display: block;\r\n    max-width: 100%;\r\n  }\r\n\r\n\r\n\r\n.centerContainer {\r\n    margin-inline: auto;\r\n    width: min(90%, 50.5rem); \r\n}\r\n\r\n\r\n\r\n/* Header */\r\n\r\n#header{\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-accent);\r\n    font-family: 'Planet Benson';\r\n    font-size: 2rem;\r\n    padding: 2rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n#tabs ul {\r\n    background-color: var(--clr-accent);\r\n    border-bottom: 3px solid var(--clr-primary);\r\n    display: flex;\r\n    justify-content: space-around;\r\n    list-style: none;\r\n    padding: 1rem;\r\n}\r\n\r\n\r\n.tabItem {\r\n    \r\n    background-color: var(--clr-primary);\r\n    border-radius: 4px;\r\n    color: var(--clr-neutral);\r\n    cursor: pointer;\r\n    font-size: 1.3rem;\r\n    padding: 1rem 2rem;\r\n}\r\n\r\n\r\n#tabs ul li:hover , .active {\r\n    background-color: var(--clr-accent);\r\n    color: var(--clr-primary);\r\n    border: 2px solid var(--clr-primary);\r\n    padding: 14px 30px;\r\n}\r\n\r\n\r\n\r\n\r\n/* main content */\r\n\r\n#main{\r\n    background-color: var(--clr-accent);\r\n    color: var(--clr-primary);\r\n}\r\n\r\n\r\n\r\n/* tabContent */\r\n\r\n.tabContent{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 3rem;\r\n}\r\n\r\n\r\n.tabContent > * {\r\n    margin-bottom: 2em;\r\n}\r\n\r\n\r\n\r\n/* about us */\r\n\r\n#aboutChef > *{\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n\r\n\r\n/* menu */\r\n\r\n#menuDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 3rem;\r\n    padding: 3rem 0;\r\n}\r\n\r\n\r\n\r\n.menuCard{\r\n    background-color: var(--clr-neutral);\r\n    border: 3px solid var(--clr-primary);\r\n    border-radius: 4px;\r\n    color: var(--clr-primary);\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 300px;\r\n}\r\n\r\n\r\n\r\n.itemDetails{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 1rem;\r\n    padding: 0.5rem;\r\n}\r\n\r\n\r\n\r\n#qty{\r\n    cursor: pointer;\r\n    font-size: 1.1rem;\r\n    padding: 0.25rem;\r\n    width: 50px;\r\n}\r\n\r\n\r\n\r\n#addToCart{\r\n    background-color: var(--clr-accent);\r\n    border: 1px solid var(--clr-primary);\r\n    border-radius: 4px;\r\n    margin-top: 0.5rem;\r\n    padding: 0.75rem;\r\n}\r\n\r\n\r\n#addToCart:hover{\r\n    background-color: #fac039;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n/* contact */\r\n\r\n#contactDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0 auto;\r\n    padding: 2rem 2rem 4rem 2rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n#cookingImg, #chefImg{\r\n    max-width: 300px;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n\r\n#contactInfo{\r\n    border: 3px solid var(--clr-primary);\r\n    border-radius: 4px;\r\n    font-weight: bold;\r\n    margin-top: 0.5rem;\r\n    max-width: 370px;\r\n    padding: 1rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n/* footer */\r\n\r\n#footer {\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-neutral);\r\n    font-size: 1.2rem;\r\n    padding: 1.5rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n#footer a{\r\n    color: var(--clr-accent);\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n\r\n@media (min-width: 40em) {\r\n    \r\n    .tabContent{\r\n        padding: 3rem 5rem;\r\n    }\r\n\r\n    .tabContent > * {\r\n        flex-basis: 100%;\r\n    }\r\n\r\n    .tabContent > * + *{\r\n        margin-left: 2em;\r\n    }\r\n\r\n\r\n    #menuDiv{\r\n        flex-flow: row wrap;\r\n    }\r\n\r\n\r\n    #contactDiv{\r\n        padding-bottom: 6rem;\r\n    }\r\n\r\n}\r\n\r\n@media (min-height: 750px){\r\n    \r\n    #footer{\r\n        position: fixed;\r\n        bottom: 0;\r\n        left: 0;\r\n        width: 100%;\r\n    }\r\n  }\r\n\r\n@media(max-width: 500px){\r\n   \r\n    #tabs ul {\r\n      flex-direction: column;\r\n      gap: 0.5rem;\r\n      text-align: center;\r\n    }\r\n\r\n    #tabs ul li {\r\n        width: 10rem;\r\n        margin-inline: auto;\r\n    }\r\n    \r\n   \r\n    #contactDiv{\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        margin: 0 auto;\r\n        padding: 2rem 2rem 4rem 2rem;\r\n    }\r\n    \r\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,4BAA4B;IAC5B,+DAA6C;AACjD;;AAKA;IACI,sBAAsB;IACtB,wBAAwB;IACxB,qBAAqB;IACrB,sBAAsB;AAC1B;;;AAGA;IACI,sBAAsB;IACtB,SAAS;IACT,UAAU;AACd;;;;AAIA;IACI,yBAAyB;IACzB,oCAAoC;IACpC,gBAAgB;IAChB,oBAAoB;IACpB,gBAAgB;AACpB;;;;AAIA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;AAClC;;;;AAIA;IACI,cAAc;IACd,eAAe;EACjB;;;;AAIF;IACI,mBAAmB;IACnB,wBAAwB;AAC5B;;;;AAIA,WAAW;;AAEX;IACI,oCAAoC;IACpC,wBAAwB;IACxB,4BAA4B;IAC5B,eAAe;IACf,aAAa;IACb,kBAAkB;AACtB;;;;AAIA;IACI,mCAAmC;IACnC,2CAA2C;IAC3C,aAAa;IACb,6BAA6B;IAC7B,gBAAgB;IAChB,aAAa;AACjB;;;AAGA;;IAEI,oCAAoC;IACpC,kBAAkB;IAClB,yBAAyB;IACzB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;;;AAGA;IACI,mCAAmC;IACnC,yBAAyB;IACzB,oCAAoC;IACpC,kBAAkB;AACtB;;;;;AAKA,iBAAiB;;AAEjB;IACI,mCAAmC;IACnC,yBAAyB;AAC7B;;;;AAIA,eAAe;;AAEf;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;AACjB;;;AAGA;IACI,kBAAkB;AACtB;;;;AAIA,aAAa;;AAEb;IACI,qBAAqB;AACzB;;;;AAIA,SAAS;;AAET;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,eAAe;AACnB;;;;AAIA;IACI,oCAAoC;IACpC,oCAAoC;IACpC,kBAAkB;IAClB,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,gBAAgB;AACpB;;;;AAIA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,eAAe;AACnB;;;;AAIA;IACI,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,WAAW;AACf;;;;AAIA;IACI,mCAAmC;IACnC,oCAAoC;IACpC,kBAAkB;IAClB,kBAAkB;IAClB,gBAAgB;AACpB;;;AAGA;IACI,yBAAyB;IACzB,eAAe;AACnB;;;;AAIA,YAAY;;AAEZ;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,cAAc;IACd,4BAA4B;IAC5B,kBAAkB;AACtB;;;AAGA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;;;AAGA;IACI,oCAAoC;IACpC,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,aAAa;IACb,kBAAkB;AACtB;;;;AAIA,WAAW;;AAEX;IACI,oCAAoC;IACpC,yBAAyB;IACzB,iBAAiB;IACjB,eAAe;IACf,kBAAkB;AACtB;;;AAGA;IACI,wBAAwB;IACxB,qBAAqB;AACzB;;;;;AAKA;;IAEI;QACI,kBAAkB;IACtB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;IACpB;;;IAGA;QACI,mBAAmB;IACvB;;;IAGA;QACI,oBAAoB;IACxB;;AAEJ;;AAEA;;IAEI;QACI,eAAe;QACf,SAAS;QACT,OAAO;QACP,WAAW;IACf;EACF;;AAEF;;IAEI;MACE,sBAAsB;MACtB,WAAW;MACX,kBAAkB;IACpB;;IAEA;QACI,YAAY;QACZ,mBAAmB;IACvB;;;IAGA;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,uBAAuB;QACvB,cAAc;QACd,4BAA4B;IAChC;;AAEJ","sourcesContent":["@font-face {\r\n    font-family: 'Planet Benson';\r\n    src: url('./planetbe.ttf') format('truetype');\r\n}\r\n\r\n\r\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');\r\n\r\n:root{\r\n    --clr-primary: #2b2d42;\r\n    --clr-secondary: #8d99ae;\r\n    --clr-accent: #ffd166;\r\n    --clr-neutral: #edf2f4;\r\n}\r\n\r\n\r\n*, *::before, *::after{\r\n    box-sizing: border-box;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n\r\n\r\nbody{\r\n    color: var(--clr-neutral);\r\n    font-family: 'Open Sans', sans-serif;;\r\n    font-weight: 400;\r\n    font-size: 1.3125rem;\r\n    line-height: 1.6;\r\n}\r\n\r\n\r\n\r\n#content{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n\r\n\r\nimg {\r\n    display: block;\r\n    max-width: 100%;\r\n  }\r\n\r\n\r\n\r\n.centerContainer {\r\n    margin-inline: auto;\r\n    width: min(90%, 50.5rem); \r\n}\r\n\r\n\r\n\r\n/* Header */\r\n\r\n#header{\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-accent);\r\n    font-family: 'Planet Benson';\r\n    font-size: 2rem;\r\n    padding: 2rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n#tabs ul {\r\n    background-color: var(--clr-accent);\r\n    border-bottom: 3px solid var(--clr-primary);\r\n    display: flex;\r\n    justify-content: space-around;\r\n    list-style: none;\r\n    padding: 1rem;\r\n}\r\n\r\n\r\n.tabItem {\r\n    \r\n    background-color: var(--clr-primary);\r\n    border-radius: 4px;\r\n    color: var(--clr-neutral);\r\n    cursor: pointer;\r\n    font-size: 1.3rem;\r\n    padding: 1rem 2rem;\r\n}\r\n\r\n\r\n#tabs ul li:hover , .active {\r\n    background-color: var(--clr-accent);\r\n    color: var(--clr-primary);\r\n    border: 2px solid var(--clr-primary);\r\n    padding: 14px 30px;\r\n}\r\n\r\n\r\n\r\n\r\n/* main content */\r\n\r\n#main{\r\n    background-color: var(--clr-accent);\r\n    color: var(--clr-primary);\r\n}\r\n\r\n\r\n\r\n/* tabContent */\r\n\r\n.tabContent{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 3rem;\r\n}\r\n\r\n\r\n.tabContent > * {\r\n    margin-bottom: 2em;\r\n}\r\n\r\n\r\n\r\n/* about us */\r\n\r\n#aboutChef > *{\r\n    margin-bottom: 1.5rem;\r\n}\r\n\r\n\r\n\r\n/* menu */\r\n\r\n#menuDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 3rem;\r\n    padding: 3rem 0;\r\n}\r\n\r\n\r\n\r\n.menuCard{\r\n    background-color: var(--clr-neutral);\r\n    border: 3px solid var(--clr-primary);\r\n    border-radius: 4px;\r\n    color: var(--clr-primary);\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-width: 300px;\r\n}\r\n\r\n\r\n\r\n.itemDetails{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin: 1rem;\r\n    padding: 0.5rem;\r\n}\r\n\r\n\r\n\r\n#qty{\r\n    cursor: pointer;\r\n    font-size: 1.1rem;\r\n    padding: 0.25rem;\r\n    width: 50px;\r\n}\r\n\r\n\r\n\r\n#addToCart{\r\n    background-color: var(--clr-accent);\r\n    border: 1px solid var(--clr-primary);\r\n    border-radius: 4px;\r\n    margin-top: 0.5rem;\r\n    padding: 0.75rem;\r\n}\r\n\r\n\r\n#addToCart:hover{\r\n    background-color: #fac039;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n/* contact */\r\n\r\n#contactDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0 auto;\r\n    padding: 2rem 2rem 4rem 2rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n#cookingImg, #chefImg{\r\n    max-width: 300px;\r\n    margin-bottom: 2rem;\r\n}\r\n\r\n\r\n#contactInfo{\r\n    border: 3px solid var(--clr-primary);\r\n    border-radius: 4px;\r\n    font-weight: bold;\r\n    margin-top: 0.5rem;\r\n    max-width: 370px;\r\n    padding: 1rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n\r\n/* footer */\r\n\r\n#footer {\r\n    background-color: var(--clr-primary);\r\n    color: var(--clr-neutral);\r\n    font-size: 1.2rem;\r\n    padding: 1.5rem;\r\n    text-align: center;\r\n}\r\n\r\n\r\n#footer a{\r\n    color: var(--clr-accent);\r\n    text-decoration: none;\r\n}\r\n\r\n\r\n\r\n\r\n@media (min-width: 40em) {\r\n    \r\n    .tabContent{\r\n        padding: 3rem 5rem;\r\n    }\r\n\r\n    .tabContent > * {\r\n        flex-basis: 100%;\r\n    }\r\n\r\n    .tabContent > * + *{\r\n        margin-left: 2em;\r\n    }\r\n\r\n\r\n    #menuDiv{\r\n        flex-flow: row wrap;\r\n    }\r\n\r\n\r\n    #contactDiv{\r\n        padding-bottom: 6rem;\r\n    }\r\n\r\n}\r\n\r\n@media (min-height: 750px){\r\n    \r\n    #footer{\r\n        position: fixed;\r\n        bottom: 0;\r\n        left: 0;\r\n        width: 100%;\r\n    }\r\n  }\r\n\r\n@media(max-width: 500px){\r\n   \r\n    #tabs ul {\r\n      flex-direction: column;\r\n      gap: 0.5rem;\r\n      text-align: center;\r\n    }\r\n\r\n    #tabs ul li {\r\n        width: 10rem;\r\n        margin-inline: auto;\r\n    }\r\n    \r\n   \r\n    #contactDiv{\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        margin: 0 auto;\r\n        padding: 2rem 2rem 4rem 2rem;\r\n    }\r\n    \r\n}"],"sourceRoot":""}]);
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
main.append((0,_aboutUs__WEBPACK_IMPORTED_MODULE_1__["default"])());



//tabbing functionality

nav.addEventListener('click', (e)=>{

    //remove active class from each menu item, later add only that which is clicked
    let tabItemArr= Array.from(e.target.parentElement.children);
    tabItemArr.forEach(menuItem=> menuItem.classList.remove('active'));

    
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



//footer
const footer= document.createElement('footer');
footer.id='footer';
footer.innerHTML= `Made by <a href="https://github.com/nashitshayan" target="_blank">Nashit Shayan Khan</a>. Click <a href="https://github.com/nashitshayan/restaurant-page" target="_blank">here</a> to see the code.`


contentDiv.append(header,nav, main,footer);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLFlBQVksb0RBQU87QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0RBQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlEQUFJO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvREFBTztBQUMvQjtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0VXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3BsYW5ldGJlLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOndnaHRANDAwOzYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUGxhbmV0IEJlbnNvbic7XFxyXFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcbjpyb290e1xcclxcbiAgICAtLWNsci1wcmltYXJ5OiAjMmIyZDQyO1xcclxcbiAgICAtLWNsci1zZWNvbmRhcnk6ICM4ZDk5YWU7XFxyXFxuICAgIC0tY2xyLWFjY2VudDogI2ZmZDE2NjtcXHJcXG4gICAgLS1jbHItbmV1dHJhbDogI2VkZjJmNDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlcntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLW5ldXRyYWwpO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDEuMzEyNXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI2NvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uY2VudGVyQ29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gICAgd2lkdGg6IG1pbig5MCUsIDUwLjVyZW0pOyBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogSGVhZGVyICovXFxyXFxuXFxyXFxuI2hlYWRlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUGxhbmV0IEJlbnNvbic7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jdGFicyB1bCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRhYkl0ZW0ge1xcclxcbiAgICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbmV1dHJhbCk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3RhYnMgdWwgbGk6aG92ZXIgLCAuYWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgcGFkZGluZzogMTRweCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBtYWluIGNvbnRlbnQgKi9cXHJcXG5cXHJcXG4jbWFpbntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIHRhYkNvbnRlbnQgKi9cXHJcXG5cXHJcXG4udGFiQ29udGVudHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRhYkNvbnRlbnQgPiAqIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBhYm91dCB1cyAqL1xcclxcblxcclxcbiNhYm91dENoZWYgPiAqe1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIG1lbnUgKi9cXHJcXG5cXHJcXG4jbWVudURpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gICAgcGFkZGluZzogM3JlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubWVudUNhcmR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1uZXV0cmFsKTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5pdGVtRGV0YWlsc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNxdHl7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuMjVyZW07XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jYWRkVG9DYXJ0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2FkZFRvQ2FydDpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhYzAzOTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBjb250YWN0ICovXFxyXFxuXFxyXFxuI2NvbnRhY3REaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMnJlbSAycmVtIDRyZW0gMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jY29va2luZ0ltZywgI2NoZWZJbWd7XFxyXFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbiNjb250YWN0SW5mb3tcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICAgIG1heC13aWR0aDogMzcwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogZm9vdGVyICovXFxyXFxuXFxyXFxuI2Zvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1uZXV0cmFsKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jZm9vdGVyIGF7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xcclxcbiAgICBcXHJcXG4gICAgLnRhYkNvbnRlbnR7XFxyXFxuICAgICAgICBwYWRkaW5nOiAzcmVtIDVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRhYkNvbnRlbnQgPiAqIHtcXHJcXG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRhYkNvbnRlbnQgPiAqICsgKntcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgI21lbnVEaXZ7XFxyXFxuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICNjb250YWN0RGl2e1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDZyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4taGVpZ2h0OiA3NTBweCl7XFxyXFxuICAgIFxcclxcbiAgICAjZm9vdGVye1xcclxcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogNTAwcHgpe1xcclxcbiAgIFxcclxcbiAgICAjdGFicyB1bCB7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3RhYnMgdWwgbGkge1xcclxcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgICAgICAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICBcXHJcXG4gICAgI2NvbnRhY3REaXZ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgICAgcGFkZGluZzogMnJlbSAycmVtIDRyZW0gMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsK0RBQTZDO0FBQ2pEOztBQUtBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsVUFBVTtBQUNkOzs7O0FBSUE7SUFDSSx5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOzs7O0FBSUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7OztBQUlBO0lBQ0ksY0FBYztJQUNkLGVBQWU7RUFDakI7Ozs7QUFJRjtJQUNJLG1CQUFtQjtJQUNuQix3QkFBd0I7QUFDNUI7Ozs7QUFJQSxXQUFXOztBQUVYO0lBQ0ksb0NBQW9DO0lBQ3BDLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7Ozs7QUFJQTtJQUNJLG1DQUFtQztJQUNuQywyQ0FBMkM7SUFDM0MsYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7O0FBR0E7O0lBRUksb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksbUNBQW1DO0lBQ25DLHlCQUF5QjtJQUN6QixvQ0FBb0M7SUFDcEMsa0JBQWtCO0FBQ3RCOzs7OztBQUtBLGlCQUFpQjs7QUFFakI7SUFDSSxtQ0FBbUM7SUFDbkMseUJBQXlCO0FBQzdCOzs7O0FBSUEsZUFBZTs7QUFFZjtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7OztBQUdBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7O0FBSUEsYUFBYTs7QUFFYjtJQUNJLHFCQUFxQjtBQUN6Qjs7OztBQUlBLFNBQVM7O0FBRVQ7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGVBQWU7QUFDbkI7Ozs7QUFJQTtJQUNJLG9DQUFvQztJQUNwQyxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtBQUNwQjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7Ozs7QUFJQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7OztBQUlBO0lBQ0ksbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7O0FBR0E7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtBQUNuQjs7OztBQUlBLFlBQVk7O0FBRVo7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLDRCQUE0QjtJQUM1QixrQkFBa0I7QUFDdEI7OztBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxvQ0FBb0M7SUFDcEMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7Ozs7QUFJQSxXQUFXOztBQUVYO0lBQ0ksb0NBQW9DO0lBQ3BDLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSx3QkFBd0I7SUFDeEIscUJBQXFCO0FBQ3pCOzs7OztBQUtBOztJQUVJO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOzs7SUFHQTtRQUNJLG1CQUFtQjtJQUN2Qjs7O0lBR0E7UUFDSSxvQkFBb0I7SUFDeEI7O0FBRUo7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO1FBQ2YsU0FBUztRQUNULE9BQU87UUFDUCxXQUFXO0lBQ2Y7RUFDRjs7QUFFRjs7SUFFSTtNQUNFLHNCQUFzQjtNQUN0QixXQUFXO01BQ1gsa0JBQWtCO0lBQ3BCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtJQUN2Qjs7O0lBR0E7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsY0FBYztRQUNkLDRCQUE0QjtJQUNoQzs7QUFFSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQbGFuZXQgQmVuc29uJztcXHJcXG4gICAgc3JjOiB1cmwoJy4vcGxhbmV0YmUudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6d2dodEA0MDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290e1xcclxcbiAgICAtLWNsci1wcmltYXJ5OiAjMmIyZDQyO1xcclxcbiAgICAtLWNsci1zZWNvbmRhcnk6ICM4ZDk5YWU7XFxyXFxuICAgIC0tY2xyLWFjY2VudDogI2ZmZDE2NjtcXHJcXG4gICAgLS1jbHItbmV1dHJhbDogI2VkZjJmNDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlcntcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLW5ldXRyYWwpO1xcclxcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7O1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBmb250LXNpemU6IDEuMzEyNXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuI2NvbnRlbnR7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuaW1nIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4uY2VudGVyQ29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gICAgd2lkdGg6IG1pbig5MCUsIDUwLjVyZW0pOyBcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogSGVhZGVyICovXFxyXFxuXFxyXFxuI2hlYWRlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUGxhbmV0IEJlbnNvbic7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jdGFicyB1bCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1hY2NlbnQpO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRhYkl0ZW0ge1xcclxcbiAgICBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItbmV1dHJhbCk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI3RhYnMgdWwgbGk6aG92ZXIgLCAuYWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgcGFkZGluZzogMTRweCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBtYWluIGNvbnRlbnQgKi9cXHJcXG5cXHJcXG4jbWFpbntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xyLWFjY2VudCk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIHRhYkNvbnRlbnQgKi9cXHJcXG5cXHJcXG4udGFiQ29udGVudHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZzogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRhYkNvbnRlbnQgPiAqIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBhYm91dCB1cyAqL1xcclxcblxcclxcbiNhYm91dENoZWYgPiAqe1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi8qIG1lbnUgKi9cXHJcXG5cXHJcXG4jbWVudURpdntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogM3JlbTtcXHJcXG4gICAgcGFkZGluZzogM3JlbSAwO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4ubWVudUNhcmR7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1uZXV0cmFsKTtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItcHJpbWFyeSk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5pdGVtRGV0YWlsc3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbiNxdHl7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuMjVyZW07XFxyXFxuICAgIHdpZHRoOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4jYWRkVG9DYXJ0e1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC43NXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuI2FkZFRvQ2FydDpob3ZlcntcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhYzAzOTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBjb250YWN0ICovXFxyXFxuXFxyXFxuI2NvbnRhY3REaXZ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMnJlbSAycmVtIDRyZW0gMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jY29va2luZ0ltZywgI2NoZWZJbWd7XFxyXFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbiNjb250YWN0SW5mb3tcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY2xyLXByaW1hcnkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICAgIG1heC13aWR0aDogMzcwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyogZm9vdGVyICovXFxyXFxuXFxyXFxuI2Zvb3RlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsci1wcmltYXJ5KTtcXHJcXG4gICAgY29sb3I6IHZhcigtLWNsci1uZXV0cmFsKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4jZm9vdGVyIGF7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1jbHItYWNjZW50KTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNDBlbSkge1xcclxcbiAgICBcXHJcXG4gICAgLnRhYkNvbnRlbnR7XFxyXFxuICAgICAgICBwYWRkaW5nOiAzcmVtIDVyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRhYkNvbnRlbnQgPiAqIHtcXHJcXG4gICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRhYkNvbnRlbnQgPiAqICsgKntcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgI21lbnVEaXZ7XFxyXFxuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICNjb250YWN0RGl2e1xcclxcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDZyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4taGVpZ2h0OiA3NTBweCl7XFxyXFxuICAgIFxcclxcbiAgICAjZm9vdGVye1xcclxcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuQG1lZGlhKG1heC13aWR0aDogNTAwcHgpe1xcclxcbiAgIFxcclxcbiAgICAjdGFicyB1bCB7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBnYXA6IDAuNXJlbTtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3RhYnMgdWwgbGkge1xcclxcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xcclxcbiAgICAgICAgbWFyZ2luLWlubGluZTogYXV0bztcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG4gICBcXHJcXG4gICAgI2NvbnRhY3REaXZ7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICAgICAgcGFkZGluZzogMnJlbSAycmVtIDRyZW0gMnJlbTtcXHJcXG4gICAgfVxcclxcbiAgICBcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTsgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGNoZWZJbWdVUkwgZnJvbSAnLi9jaGVmLnN2Zyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhYm91dFVzKCl7XHJcbiAgICBcclxuICAgIC8vYWJvdXRVcyBkaXZcclxuICAgIGNvbnN0IGFib3V0VXNDb250ZW50PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFib3V0VXNDb250ZW50LmlkID0nYWJvdXRVc0NvbnRlbnQnO1xyXG4gICAgYWJvdXRVc0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgndGFiQ29udGVudCcpO1xyXG5cclxuXHJcbiAgICAvLyBjaGVmIGltZ1xyXG4gICAgY29uc3QgaW1nRGl2PSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGNoZWZJbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgIGNoZWZJbWcuc3JjPSBjaGVmSW1nVVJMO1xyXG4gICAgY2hlZkltZy5pZD0gJ2NoZWZJbWcnO1xyXG4gICAgaW1nRGl2LmFwcGVuZENoaWxkKGNoZWZJbWcpO1xyXG4gICAgXHJcblxyXG4gICAgLy9hYm91dCBDaGVmIERpdlxyXG4gICAgY29uc3QgYWJvdXRDaGVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dENoZWYuaWQ9J2Fib3V0Q2hlZic7XHJcbiAgICBhYm91dENoZWYuaW5uZXJIVE1MPSBgXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgyPk91ciBTdG9yeTwvaDI+XHJcbiAgICAgICAgICAgIDxwPkJhc2VkIGxvY2FsbHkgaW4gQ2l0eSwgd2Ugc2VydmUgZnJlc2ggaG9tZS1jb29rZWQgaGFsYWwgZm9vZC4gIFNwZWNpYWwgY2FyZSBpcyB0YWtlbiB0byBtYWtlIHN1cmUgYWxsIGluZ3JlZGllbnRzIGFyZSBmcmVzaC48L3A+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMj5PdXIgVmlzaW9uPC9oMj5cclxuICAgICAgICAgICAgPHA+V2UgYmVsaWV2ZSBpbiBzcHJlYWRpbmcgd2FybXRoIGFuZCBoYXBwaW5lc3MgdGhyb3VnaCBvdXIgc2VydmljZXMuIEN1cnJlbnRseSB3ZSdyZSBhIHNtYWxsIGJ1c2luZXNzIHJ1biBieSBhIGZhbWlseSwgYnV0IHdlIHdvcmsgaGFyZCBhbmQgd2lzaCB0byBleHBhbmQgb3VyIGJ1c2luZXNzIHRvIHNlcnZlIG1vcmUgcGVvcGxlLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIGBcclxuXHJcbiAgICAvL2FkZCBpbWdEaXYgYW5kIGFib3V0Q2hlZiBkaXYgdG8gYWJvdXRVc0NvbnRlbnQgZGl2XHJcbiAgICBhYm91dFVzQ29udGVudC5hcHBlbmQoaW1nRGl2LCBhYm91dENoZWYpO1xyXG5cclxuICByZXR1cm4gYWJvdXRVc0NvbnRlbnQ7XHJcbn0iLCJpbXBvcnQgY29va2luZ0ltZ1VSTCBmcm9tICcuL2Nvb2tpbmcuc3ZnJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3QoKXtcclxuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3REaXYuaWQ9ICdjb250YWN0RGl2JztcclxuXHJcbiAgICBjb25zdCBpbWdEaXY9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgY29va2luZ0ltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgY29va2luZ0ltZy5zcmM9IGNvb2tpbmdJbWdVUkw7XHJcbiAgICBjb29raW5nSW1nLmlkPSAnY29va2luZ0ltZyc7XHJcbiAgICBpbWdEaXYuYXBwZW5kQ2hpbGQoY29va2luZ0ltZyk7XHJcblxyXG4gICAgY29udGFjdERpdi5hcHBlbmQoaW1nRGl2KVxyXG4gICAgY29udGFjdERpdi5pbm5lckhUTUwrPSBgXHJcbiAgICA8aDM+Rm9yIE1hc3MgT3JkZXJzICYgT3RoZXIgUXVlcmllczwvaDM+XHJcbiAgICA8ZGl2IGlkPSdjb250YWN0SW5mbyc+XHJcbiAgICA8ZGl2PlBob25lOiB4eHgteHh4LXh4eHg8L2Rpdj5cclxuICAgIDxkaXY+RW1haWw6IG93bmVyQGFiYnVub252ZWcuY29tPC9kaXY+XHJcbiAgICA8ZGl2PkFkZHJlc3M6IEFCQyBDb2xvbnksIFhZWiBSb2FkLCBDaXR5IC0gKHh4eC14eHgpPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxuICAgIFxyXG5yZXR1cm4gY29udGFjdERpdjtcclxufSIsImltcG9ydCBiaXJ5YW5pSW1nVVJMIGZyb20gJy4vY2hpY2tlbkJpcnlhbmkuanBnJztcclxuaW1wb3J0IGNoaWNrZW5UaWtrYVVSTCBmcm9tICcuL2NoaWNrZW5UaWtrYS5qcGVnJztcclxuaW1wb3J0IGJ1dHRlckNoaWNrZW5VUkwgZnJvbSAnLi9idXR0ZXJDaGlja2VuLmpwZWcnO1xyXG5pbXBvcnQgZmlzaEZyeVVSTCBmcm9tICcuL2Zpc2hGcnkuanBlZyc7XHJcbmltcG9ydCBmaXNoQ3VycnlVUkwgZnJvbSAnLi9maXNoQ3VycnkuanBlZyc7XHJcbmltcG9ydCBlZ2dDdXJyeVVSTCBmcm9tICcuL2VnZ0N1cnJ5LmpwZyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpe1xyXG4gICAgY29uc3QgbWVudURpdj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtZW51RGl2LmlkPSdtZW51RGl2JztcclxuXHJcbiAgICBjb25zdCBtZW51dEl0ZW1MaXN0ID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0NoaWNrZW4gQmlyeWFuaScsXHJcbiAgICAgICAgICAgIHByaWNlOiAnMTUwIFJzLicsXHJcbiAgICAgICAgICAgIHVybDogYmlyeWFuaUltZ1VSTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0NoaWNrZW4gVGlra2EnLFxyXG4gICAgICAgICAgICBwcmljZTogJzE4MCBScy4nLFxyXG4gICAgICAgICAgICB1cmw6IGNoaWNrZW5UaWtrYVVSTCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0J1dHRlciBDaGlja2VuJyxcclxuICAgICAgICAgICAgcHJpY2U6ICcyNTAgUnMuJyxcclxuICAgICAgICAgICAgdXJsOiBidXR0ZXJDaGlja2VuVVJMLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnRmlzaCBGcnknLFxyXG4gICAgICAgICAgICBwcmljZTogJzE4MCBScy4nLFxyXG4gICAgICAgICAgICB1cmw6IGZpc2hGcnlVUkwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdGaXNoIEN1cnJ5JyxcclxuICAgICAgICAgICAgcHJpY2U6ICcyNTAgUnMuJyxcclxuICAgICAgICAgICAgdXJsOiBmaXNoQ3VycnlVUkwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdFZ2cgQ3VycnknLFxyXG4gICAgICAgICAgICBwcmljZTogJzE1MCBScy4nLFxyXG4gICAgICAgICAgICB1cmw6IGVnZ0N1cnJ5VVJMLFxyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcblxyXG4gIFxyXG4gICAgLy9jcmVhdGUgYSBtZW51IGNhcmQgZm9yIGVhY2ggZGlzaFxyXG5cclxuICAgIG1lbnV0SXRlbUxpc3QuZm9yRWFjaChtZW51SXRlbT0+e1xyXG4gICAgICAgIGxldCBtZW51Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIG1lbnVDYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnVDYXJkJyk7XHJcbiAgICAgICAgbGV0IGltZ0Rpdj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbGV0IGl0ZW1JbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpdGVtSW1nLnNyYz0gbWVudUl0ZW0udXJsO1xyXG4gICAgICAgIGl0ZW1JbWcuaWQ9IGAke21lbnVJdGVtLm5hbWV9YDtcclxuICAgICAgICBpdGVtSW1nLnN0eWxlLndpZHRoPSAnMjUwcHgnO1xyXG4gICAgICAgIGl0ZW1JbWcuc3R5bGUuaGVpZ2h0PSAnMjUwcHgnO1xyXG4gICAgICAgIGltZ0Rpdi5hcHBlbmRDaGlsZChpdGVtSW1nKTtcclxuICAgICAgICBtZW51Q2FyZC5hcHBlbmQoaW1nRGl2KTtcclxuXHJcbiAgICAgICAgIG1lbnVDYXJkLmlubmVySFRNTCs9IGBcclxuICAgICAgICAgPGRpdiBjbGFzcz0gJ2l0ZW1EZXRhaWxzJz5cclxuICAgICAgICAgICAgPGRpdj48c3Ryb25nPiR7bWVudUl0ZW0ubmFtZX08L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5QcmljZSA6IDxzdHJvbmc+JHttZW51SXRlbS5wcmljZX08L3N0cm9uZz48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5RdHkgOiA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJxdHlcIiBpZD1cInF0eVwiIHZhbHVlPScwJz48L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBpZD0nYWRkVG9DYXJ0Jz5BZGQgVG8gQ2FydDwvYnV0dG9uPlxyXG4gICAgICAgICA8L2Rpdj4gICAgXHJcbiAgICAgICAgIGBcclxuICAgIFxyXG5cclxuICAgICAgICBtZW51RGl2LmFwcGVuZChtZW51Q2FyZCk7XHJcbiAgICB9KVxyXG5cclxuIHJldHVybiBtZW51RGl2O1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcydcclxuaW1wb3J0IGFib3V0VXMgZnJvbSAnLi9hYm91dFVzJztcclxuaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51J1xyXG5pbXBvcnQgY29udGFjdCBmcm9tICcuL2NvbnRhY3QnO1xyXG5cclxuXHJcbmNvbnN0IGNvbnRlbnREaXY9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5jb250ZW50RGl2LmlkPSdjb250ZW50JztcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50RGl2KTtcclxuXHJcbi8vaGVhZGVyXHJcbmNvbnN0IGhlYWRlcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbmhlYWRlci5pZD0gJ2hlYWRlcic7XHJcbmhlYWRlci50ZXh0Q29udGVudCA9ICdBYmJ1IE5vbi1WZWcnO1xyXG5cclxuXHJcbi8vbmF2IHRhYnMgXHJcbmNvbnN0IG5hdj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbm5hdi5pZD0gJ3RhYnMnO1xyXG5uYXYuY2xhc3NMaXN0LmFkZCgnY2VudGVyQ29udGFpbmVyJylcclxuXHJcblxyXG5uYXYuaW5uZXJIVE1MPSBgPHVsPiBcclxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9J2Fib3V0JyBjbGFzcz0ndGFiSXRlbSBhY3RpdmUnPkFib3V0IFVzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9J21lbnUnIGNsYXNzPSd0YWJJdGVtJz5NZW51PC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgaWQ9J2NvbnRhY3QnIGNsYXNzPSd0YWJJdGVtJz5Db250YWN0PC9saT5cclxuICAgICAgICAgICAgICAgIDwvdWw+YFxyXG5cclxuXHJcblxyXG4vL21haW4gZGl2XHJcblxyXG5jb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG5tYWluLmlkPSdtYWluJztcclxubWFpbi5jbGFzc0xpc3QuYWRkKCdjZW50ZXJDb250YWluZXInKTtcclxuXHJcblxyXG4vL2RlZmF1bHQgaXMgYWJvdXQgdXMgcGFnZVxyXG5tYWluLmFwcGVuZChhYm91dFVzKCkpO1xyXG5cclxuXHJcblxyXG4vL3RhYmJpbmcgZnVuY3Rpb25hbGl0eVxyXG5cclxubmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XHJcblxyXG4gICAgLy9yZW1vdmUgYWN0aXZlIGNsYXNzIGZyb20gZWFjaCBtZW51IGl0ZW0sIGxhdGVyIGFkZCBvbmx5IHRoYXQgd2hpY2ggaXMgY2xpY2tlZFxyXG4gICAgbGV0IHRhYkl0ZW1BcnI9IEFycmF5LmZyb20oZS50YXJnZXQucGFyZW50RWxlbWVudC5jaGlsZHJlbik7XHJcbiAgICB0YWJJdGVtQXJyLmZvckVhY2gobWVudUl0ZW09PiBtZW51SXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKSk7XHJcblxyXG4gICAgXHJcbiAgICBpZihlLnRhcmdldC5pZD09PSdhYm91dCcpXHJcbiAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgbWFpbi5pbm5lckhUTUw9Jyc7XHJcbiAgICAgICAgICAgIG1haW4uYXBwZW5kKGFib3V0VXMoKSlcclxuICAgICAgICB9XHJcblxyXG4gICAgZWxzZSBpZihlLnRhcmdldC5pZD09PSdtZW51JylcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBtYWluLmlubmVySFRNTD0nJztcclxuICAgICAgICAgICAgbWFpbi5hcHBlbmQobWVudSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgZWxzZSBpZihlLnRhcmdldC5pZD09PSdjb250YWN0JylcclxuICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBtYWluLmlubmVySFRNTD0nJztcclxuICAgICAgICAgICAgbWFpbi5hcHBlbmQoY29udGFjdCgpKTtcclxuICAgICAgICB9XHJcbn0pXHJcblxyXG5cclxuXHJcbi8vZm9vdGVyXHJcbmNvbnN0IGZvb3Rlcj0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbmZvb3Rlci5pZD0nZm9vdGVyJztcclxuZm9vdGVyLmlubmVySFRNTD0gYE1hZGUgYnkgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9uYXNoaXRzaGF5YW5cIiB0YXJnZXQ9XCJfYmxhbmtcIj5OYXNoaXQgU2hheWFuIEtoYW48L2E+LiBDbGljayA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL25hc2hpdHNoYXlhbi9yZXN0YXVyYW50LXBhZ2VcIiB0YXJnZXQ9XCJfYmxhbmtcIj5oZXJlPC9hPiB0byBzZWUgdGhlIGNvZGUuYFxyXG5cclxuXHJcbmNvbnRlbnREaXYuYXBwZW5kKGhlYWRlcixuYXYsIG1haW4sZm9vdGVyKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9