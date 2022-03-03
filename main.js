/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Hahmlet&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --navbar-color: #1981e6;\n    --sidebar-color: #479aeb;\n    --hover-color: #1774cf;\n    --hamlet-font: 'Hahmlet', serif;\n    --cancel-btn-color: #ff3333;\n    --submit-btn-color: #1aff8c;\n}\n\nbody {\n    margin: 0;\n    font-family: var(--hamlet-font);\n}\n\n#content {\n    min-height: 100vh;\n    min-width: 100vw;\n    display: grid;\n    grid-template-columns: 0.5fr 2fr;\n    grid-template-rows: 0.5fr 2fr;\n    grid-template-areas: \n        \"navbar navbar\"\n        \"sidebar inbox\";\n}\n\n.navbar {\n    grid-area: navbar;\n    background-color: var(--navbar-color);\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n}\n\n.navbar-text {\n    color: white;\n    justify-self: start;\n    align-self: center;\n    padding-left: 10%;\n}\n\n.sidebar-container {\n    grid-area: sidebar;\n    background-color: var(--sidebar-color);\n    display: grid;\n    padding: 10%;\n    grid-template-rows: 25px 1fr;\n}\n\n.sidebar-content {\n    display: grid;\n    grid-template-rows: repeat(autofit, 1fr);\n\n    grid-row: 2;\n}\n.sidebar-item {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    color: white;\n    padding: 10px;\n    border-radius: 2px;\n    max-height:50px;\n    width:100%;\n}\n\n.sidebar-item > .inbox-item {\n    color: black;\n    border: 2px solid black;\n}\n.sidebar-item:hover {\n    background-color: var(--hover-color);\n}\n\n.inbox-container {\n    grid-area: inbox;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.inbox-header {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    color: white;\n}\n\n.inbox-item {\n    min-width: 70%;\n    display: flex;\n    justify-content: start;\n    padding-left: 10px;\n    border: 2px solid var(--navbar-color);\n    border-radius: 12px;\n}\n\n.inbox-item:hover {\n    background-color: var(--sidebar-color);\n    color: white;\n    border: 2px solid white;\n}\n\n.form-popup, .add-item-form, .hide-item {\n    display: none;\n    padding: 12px;\n  }\n\n.form-popup-active {\n    display: block;\n    padding: 12px;\n}\n\n.form-container {\n    max-width: 300px;\n    \n}\n\ninput[type=text] {\n    border-style: none;\n    width: 97%;\n    height: 10%;\n    margin-bottom: 12px;\n    border-radius: 12px;\n    padding: 10px;\n}\n\n.form-container .submit-btn, .item-submit-btn {\n    background-color: var(--submit-btn-color);\n    color: white;\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    width: 50%;\n    margin-bottom:10px;\n    opacity: 0.8;\n    border-radius: 12px;\n}\n\n.form-container .cancel-btn, .item-cancel-btn {\n    color: white;\n    background-color: var(--cancel-btn-color);\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    width:50%;\n    margin-bottom: 10px;\n    opacity: 0.8;\n    border-radius: 12px;\n}\n\n.item-form-popup {\n    display: none;\n}\n\n.item-form-popup-active {\n    display: flex;\n    justify-content: center;\n    border: 2px solid white;\n    background-color: var(--sidebar-color);\n    color: white;\n    width: 400px;\n    height: 350px;\n    border-radius: 12px;\n    padding: 2%;\n}\n\n.item-form-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 10px;\n}\n\n.task-card-container {\n    display: flex;\n    justify-content: space-between;\n    margin: 12px;\n    padding: 12px;\n    align-items: center;\n    width: 50%;\n    height: 50px;\n    border: 2px solid var(--navbar-color);\n    border-radius: 12px;\n}\n\n#completed-check:checked {\n    background-color: green;\n}\n\n.taskcard-title {\n    flex: 1 0 auto;\n    font-size: 1.2rem;\n    font-weight: bold;\n    padding-left: 1%;\n}\n\n.taskcard-description {\n    flex: 1 0 auto;\n}\n\n.taskcard-date {\n    flex: 1 0 auto;\n}\n\n.taskcard-priority {\n    flex: 1 0 auto;\n}\n\n.remove-card-btn, .remove-project-button {\n    color: white;\n    border-style: none;\n    background-color: var(--navbar-color);\n}\n\n.remove-project-button {\n    \n}\n\n.sidebar-item-heading {\n    flex-grow: 2;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,sBAAsB;IACtB,+BAA+B;IAC/B,2BAA2B;IAC3B,2BAA2B;AAC/B;;AAEA;IACI,SAAS;IACT,+BAA+B;AACnC;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,gCAAgC;IAChC,6BAA6B;IAC7B;;uBAEmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,qCAAqC;IACrC,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,sCAAsC;IACtC,aAAa;IACb,YAAY;IACZ,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,wCAAwC;;IAExC,WAAW;AACf;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,uBAAuB;AAC3B;AACA;IACI,oCAAoC;AACxC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,qCAAqC;IACrC,mBAAmB;AACvB;;AAEA;IACI,sCAAsC;IACtC,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,aAAa;EACf;;AAEF;IACI,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,gBAAgB;;AAEpB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,yCAAyC;IACzC,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,UAAU;IACV,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,yCAAyC;IACzC,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,SAAS;IACT,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,sCAAsC;IACtC,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,qCAAqC;IACrC,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,qCAAqC;AACzC;;AAEA;;AAEA;;AAEA;IACI,YAAY;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Hahmlet&display=swap');\n:root {\n    --navbar-color: #1981e6;\n    --sidebar-color: #479aeb;\n    --hover-color: #1774cf;\n    --hamlet-font: 'Hahmlet', serif;\n    --cancel-btn-color: #ff3333;\n    --submit-btn-color: #1aff8c;\n}\n\nbody {\n    margin: 0;\n    font-family: var(--hamlet-font);\n}\n\n#content {\n    min-height: 100vh;\n    min-width: 100vw;\n    display: grid;\n    grid-template-columns: 0.5fr 2fr;\n    grid-template-rows: 0.5fr 2fr;\n    grid-template-areas: \n        \"navbar navbar\"\n        \"sidebar inbox\";\n}\n\n.navbar {\n    grid-area: navbar;\n    background-color: var(--navbar-color);\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n}\n\n.navbar-text {\n    color: white;\n    justify-self: start;\n    align-self: center;\n    padding-left: 10%;\n}\n\n.sidebar-container {\n    grid-area: sidebar;\n    background-color: var(--sidebar-color);\n    display: grid;\n    padding: 10%;\n    grid-template-rows: 25px 1fr;\n}\n\n.sidebar-content {\n    display: grid;\n    grid-template-rows: repeat(autofit, 1fr);\n\n    grid-row: 2;\n}\n.sidebar-item {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    color: white;\n    padding: 10px;\n    border-radius: 2px;\n    max-height:50px;\n    width:100%;\n}\n\n.sidebar-item > .inbox-item {\n    color: black;\n    border: 2px solid black;\n}\n.sidebar-item:hover {\n    background-color: var(--hover-color);\n}\n\n.inbox-container {\n    grid-area: inbox;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.inbox-header {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    color: white;\n}\n\n.inbox-item {\n    min-width: 70%;\n    display: flex;\n    justify-content: start;\n    padding-left: 10px;\n    border: 2px solid var(--navbar-color);\n    border-radius: 12px;\n}\n\n.inbox-item:hover {\n    background-color: var(--sidebar-color);\n    color: white;\n    border: 2px solid white;\n}\n\n.form-popup, .add-item-form, .hide-item {\n    display: none;\n    padding: 12px;\n  }\n\n.form-popup-active {\n    display: block;\n    padding: 12px;\n}\n\n.form-container {\n    max-width: 300px;\n    \n}\n\ninput[type=text] {\n    border-style: none;\n    width: 97%;\n    height: 10%;\n    margin-bottom: 12px;\n    border-radius: 12px;\n    padding: 10px;\n}\n\n.form-container .submit-btn, .item-submit-btn {\n    background-color: var(--submit-btn-color);\n    color: white;\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    width: 50%;\n    margin-bottom:10px;\n    opacity: 0.8;\n    border-radius: 12px;\n}\n\n.form-container .cancel-btn, .item-cancel-btn {\n    color: white;\n    background-color: var(--cancel-btn-color);\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    width:50%;\n    margin-bottom: 10px;\n    opacity: 0.8;\n    border-radius: 12px;\n}\n\n.item-form-popup {\n    display: none;\n}\n\n.item-form-popup-active {\n    display: flex;\n    justify-content: center;\n    border: 2px solid white;\n    background-color: var(--sidebar-color);\n    color: white;\n    width: 400px;\n    height: 350px;\n    border-radius: 12px;\n    padding: 2%;\n}\n\n.item-form-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 10px;\n}\n\n.task-card-container {\n    display: flex;\n    justify-content: space-between;\n    margin: 12px;\n    padding: 12px;\n    align-items: center;\n    width: 50%;\n    height: 50px;\n    border: 2px solid var(--navbar-color);\n    border-radius: 12px;\n}\n\n#completed-check:checked {\n    background-color: green;\n}\n\n.taskcard-title {\n    flex: 1 0 auto;\n    font-size: 1.2rem;\n    font-weight: bold;\n    padding-left: 1%;\n}\n\n.taskcard-description {\n    flex: 1 0 auto;\n}\n\n.taskcard-date {\n    flex: 1 0 auto;\n}\n\n.taskcard-priority {\n    flex: 1 0 auto;\n}\n\n.remove-card-btn, .remove-project-button {\n    color: white;\n    border-style: none;\n    background-color: var(--navbar-color);\n}\n\n.remove-project-button {\n    \n}\n\n.sidebar-item-heading {\n    flex-grow: 2;\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/DOMconstructor.js":
/*!*******************************!*\
  !*** ./src/DOMconstructor.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPage": () => (/* binding */ createPage),
/* harmony export */   "createForms": () => (/* binding */ createForms)
/* harmony export */ });
/* harmony import */ var _switchTabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switchTabs.js */ "./src/switchTabs.js");
/* harmony import */ var _toDoConstructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoConstructor.js */ "./src/toDoConstructor.js");



const createPage = (()=> {
    const body = document.querySelector('#content');

    const createNavBar = () => {
        const navBar = document.createElement('div');
        navBar.classList.add('navbar');

        const navBarText = document.createElement('div');
        navBarText.classList.add('navbar-text');
        const content = addNavBarText();

        navBarText.appendChild(content);
        navBar.appendChild(navBarText);
        body.appendChild(navBar);
    }

    const createSideBar = () => {
        const sideBar = document.createElement('div');
        sideBar.classList.add('sidebar-container');
        const sidebarContent = document.createElement('div');
        sidebarContent.classList.add('sidebar-content');

        const inbox = addProjectButton("Inbox");
        const today = addProjectButton("Today");
        const thisWeek = addProjectButton("This Week");

        const sidebarHeading = document.createElement('h2');
        sidebarHeading.textContent = "Projects";
        sidebarHeading.classList.add("inbox-header");

        const taskButton = addProjectButton("Add Project");
        taskButton.classList.add('add-sidebar-form');
    

        sidebarContent.appendChild(inbox);
        sidebarContent.appendChild(today);
        sidebarContent.appendChild(thisWeek);
        sidebarContent.appendChild(sidebarHeading);
        sidebarContent.appendChild(taskButton);
      
        sideBar.appendChild(sidebarContent);
        body.appendChild(sideBar);

        checkProjectLocalStorage();
    }

    const addSidebarItem = (item) => {
        
        const newItem = addProjectButton(item);
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-project-button');
        removeBtn.setAttribute('id', item);
        removeBtn.textContent = "X";
        const newItemName = newItem.getAttribute('name');
        newItem.appendChild(removeBtn);
        const sidebarContent = document.querySelector('.sidebar-content');
        const addTask = document.querySelector('.add-sidebar-form');
        newItem.addEventListener('click', () => {
            _switchTabs_js__WEBPACK_IMPORTED_MODULE_0__.switchTabs.switchTab(newItemName);
        });
       
        sidebarContent.insertBefore(newItem, addTask);
    }
     
    const addInboxItem = (inbox, header) => {

        const taskButton = addInboxButton("Add Task");
        taskButton.classList.add('add-taskform');

        inbox.appendChild(header);
        inbox.appendChild(taskButton);

        checkCardLocalStorage();
    }

    const addTaskCard = (taskCard) => {
        const inbox = document.querySelector('.inbox-container');
        const taskFormButton = document.querySelector('.add-taskform');
        inbox.insertBefore(taskCard, taskFormButton);
        _switchTabs_js__WEBPACK_IMPORTED_MODULE_0__.switchTabs.removeCardListener();
    }

    const createInbox = () => {
        const inbox = document.createElement('div');
        inbox.classList.add('inbox-container');
       
        const header = document.createElement('h1');
        header.classList.add('container-header');
        header.textContent = "Inbox";

        const taskButton = addInboxButton("Add Task");
        taskButton.classList.add('add-taskform');
      
        inbox.appendChild(header);
        inbox.appendChild(taskButton);

        body.appendChild(inbox);

        checkCardLocalStorage();
    }

    function addNavBarText() {
        const navbarText = document.createElement('h1');
        navbarText.textContent = "To-Do List";
        return navbarText;
    };

    function addProjectButton(heading) {
        const option = document.createElement('div');
        option.classList.add('sidebar-item');
        option.setAttribute('name', heading);
        const optionText = document.createElement('p');
        optionText.classList.add('sidebar-item-heading');
        optionText.textContent = heading;
        option.appendChild(optionText);

        return option;

    }

    function addInboxButton(heading) {
        const option = document.createElement('div');
        option.classList.add('inbox-item');
        option.textContent = heading;

        return option;
    }

    const checkCardLocalStorage = () => {
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++){
                if (!(localStorage.key(i).includes("Project"))) {
                    console.log(localStorage.key(i));
                    let task = _toDoConstructor_js__WEBPACK_IMPORTED_MODULE_1__.toDo.getTaskData(localStorage.key(i));
                    let taskObject = _toDoConstructor_js__WEBPACK_IMPORTED_MODULE_1__.toDo.createTaskCard(task, i);
                    addTaskCard(taskObject); 
                } 
            } 
        }
    }

    const checkProjectLocalStorage = () => {
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if(localStorage.key(i).includes("Project")){
                    addSidebarItem(localStorage.key(i));
                }
            }
        }
    };


    return { createNavBar, createSideBar, createInbox, 
        addSidebarItem, addInboxItem, addTaskCard, checkCardLocalStorage };
})();

const createForms = (() => {

    function createProjectForm() {
        // Create Form Popup container
        const formContainer = document.createElement('div');
        formContainer.classList.add('form-popup');

        // Creates Form Container
        const form = document.createElement('form');
        form.classList.add('form-container');

        // Creates Form Contents
        const input = document.createElement('input');
        input.setAttribute('type', "text");
        input.setAttribute('name', 'item-name');
        input.setAttribute('id', "project-title");
        input.classList.add('form-text')
        const submitBtn = document.createElement('input');
        submitBtn.classList.add('submit-btn');
        submitBtn.textContent = "Submit";
        submitBtn.setAttribute('type', "submit");
        submitBtn.setAttribute('value', "Submit");
        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = "Cancel";
        cancelBtn.setAttribute('value', "Cancel");
        cancelBtn.classList.add('cancel-btn');

        // Appends to DOM
        form.appendChild(input);
        form.appendChild(submitBtn);
        form.appendChild(cancelBtn);
        formContainer.appendChild(form);

        return formContainer;
    }

    function createTaskForm() {
        // Creates Form Popup Container
        const taskFormContainer = document.createElement('div');
        taskFormContainer.classList.add('item-form-popup');
        
        const taskForm = document.createElement('form');
        taskForm.classList.add('item-form-container');

        //Manages Title input area
        const taskInput = document.createElement('input');
        taskInput.setAttribute('type', "text");
        taskInput.setAttribute('name', "item-name");
        taskInput.setAttribute('id', "title");
        taskInput.setAttribute('placeholder', "Title");
        taskInput.classList.add('item-form-text');

        //Manages Description Input Area
        const taskDescInput = document.createElement('input');
        taskDescInput.setAttribute('type', "text");
        taskDescInput.setAttribute('name', "description");
        taskDescInput.setAttribute('id', "description");
        taskDescInput.setAttribute('placeholder', "Description (Optional)")
        taskDescInput.classList.add('item-form-text');

        //Manages Priority Datalist area
        const priorityInput = document.createElement('input');
        priorityInput.setAttribute('list', "priorities");
        priorityInput.setAttribute('placeholder', "Priority")
        priorityInput.setAttribute('id', "priorities")
        const priorityInputList = document.createElement("datalist");
        priorityInputList.setAttribute('id', "priorities-datalist")
        const lowPriority = document.createElement("option");
        lowPriority.setAttribute("value", "Low");
        const medPriority = document.createElement("option");
        medPriority.setAttribute('value', "Medium");
        const highPriority = document.createElement("option");
        highPriority.setAttribute('value',"High");
        priorityInputList.appendChild(lowPriority);
        priorityInputList.appendChild(medPriority);
        priorityInputList.appendChild(highPriority);
        
        
        //Manages Date Area
        const taskDate = document.createElement('input');
        taskDate.setAttribute('type', "date");
        taskDate.setAttribute('name', "due-date");
        taskDate.setAttribute('id', "dueDate");

        // Manages button creation for Form
        const submitBtn = document.createElement('button');
        submitBtn.classList.add('item-submit-btn');
        submitBtn.textContent = "Submit";
        submitBtn.setAttribute('type', "submit");
        submitBtn.setAttribute('value', "Submit");
        const cancelBtn = document.createElement('button');
        cancelBtn.textContent = "Cancel";
        cancelBtn.setAttribute('value', "Cancel");
        cancelBtn.classList.add('item-cancel-btn');

        taskForm.appendChild(taskInput);
        taskForm.appendChild(taskDescInput);
        taskForm.appendChild(priorityInput);
        taskForm.appendChild(priorityInputList);
        taskForm.appendChild(taskDate);
        taskForm.appendChild(submitBtn);
        taskForm.appendChild(cancelBtn);

        taskFormContainer.appendChild(taskForm);
        return taskFormContainer;
    }
    return {createProjectForm, createTaskForm};
})();




/***/ }),

/***/ "./src/switchTabs.js":
/*!***************************!*\
  !*** ./src/switchTabs.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "switchTabs": () => (/* binding */ switchTabs)
/* harmony export */ });
/* harmony import */ var _DOMconstructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMconstructor.js */ "./src/DOMconstructor.js");
/* harmony import */ var _toDoConstructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDoConstructor.js */ "./src/toDoConstructor.js");




const switchTabs = (()=> {

    const switchTab = (item) => {
        const inbox = document.querySelector('.inbox-container');
        
            if (item == "Inbox") {
                inbox.innerHTML = "";
                const inboxHeader = document.createElement('h1');
                inboxHeader.classList.add('container-header');
                inboxHeader.textContent = item;
                _DOMconstructor_js__WEBPACK_IMPORTED_MODULE_0__.createPage.addInboxItem(inbox, inboxHeader);
            
            }

            else {
            inbox.innerHTML = "";
            inbox.textContent = "";
            const header = document.createElement('h1');
            header.classList.add('container-header');
            header.textContent = item;
          
            inbox.appendChild(header);
            }
    }

    const assignLinks = () => {

        const items = document.querySelectorAll(".sidebar-item");
        items.forEach((item) => {item.addEventListener("click", () => {
            switchTab(item.childNodes[0].textContent);
        })});

        addSidebarEventListeners();

    };

    function addSidebarEventListeners() {
        const addTask = document.querySelector('.add-taskform');
        const taskForm = document.querySelector('.item-form-popup');
        const taskFormContainer = document.querySelector('.item-form-container');
        const sidebar = document.querySelector(".sidebar-content");

        // Listens for Add Project Button being pressed.
        const addProject = document.querySelector('.add-sidebar-form');
        const projectFormContainer = document.querySelector('.form-container');
        addProject.addEventListener('click', function() {
    
            const form = _DOMconstructor_js__WEBPACK_IMPORTED_MODULE_0__.createForms.createProjectForm();
            sidebar.appendChild(form);
            const projectForm = document.querySelector('.form-popup');
            projectForm.classList.toggle('form-popup-active');
            addProject.classList.toggle('form-popup');

            const projCancelBtn = document.querySelector('.cancel-btn');
            const projSubmitBtn = document.querySelector('.submit-btn');

            projCancelBtn.addEventListener('click', function(event) {
                event.preventDefault();
                projectForm.remove();
                addProject.classList.toggle('form-popup');
            });

            projSubmitBtn.addEventListener('click', function(event) {
                event.preventDefault();
                const title = document.getElementById('project-title').value;
                const id = "Project " + title;
                const newProject = _toDoConstructor_js__WEBPACK_IMPORTED_MODULE_1__.toDo.createProject(title, id);
                _toDoConstructor_js__WEBPACK_IMPORTED_MODULE_1__.toDo.setTaskData(id, newProject);

            });
        });
    };

    function addTaskEventListener() {
       
        const inbox = document.querySelector('.inbox-container');
        const addTask = document.querySelector('.add-taskform');

        addTask.addEventListener('click', () => {

            const form = _DOMconstructor_js__WEBPACK_IMPORTED_MODULE_0__.createForms.createTaskForm();
            inbox.appendChild(form);
            const taskForm = document.querySelector('.item-form-popup');
            addTask.classList.toggle("item-form-popup");
            taskForm.classList.toggle("item-form-popup-active");
            const itemCancelBtn = document.querySelector(".item-cancel-btn");

            itemCancelBtn.addEventListener('click', function(event) {
                event.preventDefault();
                inbox.removeChild(inbox.lastElementChild);
                addTask.classList.toggle("item-form-popup");
            });
            addCardEventListeners();
        });

    }

    function addCardEventListeners() {
        const addTask = document.querySelector('.add-taskform');
        const taskFormContainer = document.querySelector('.item-form-container');
        const taskForm = document.querySelector('.item-form-popup');
        const inbox = document.querySelector('.inbox-container');
      
        // Listens for Task Submit Button being pressed.
        
        const itemSubmitBtn = document.querySelector(".item-submit-btn");
        itemSubmitBtn.addEventListener('click', (event)=> {
            event.preventDefault();
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const dueDate = document.getElementById("dueDate").value;
            const priority = document.getElementById("priorities").value;
            
            const newTask = _toDoConstructor_js__WEBPACK_IMPORTED_MODULE_1__.toDo.createTask(title, description, dueDate, priority);
           
            inbox.removeChild(inbox.lastElementChild);
            addTask.classList.toggle("item-form-popup");
            
            _toDoConstructor_js__WEBPACK_IMPORTED_MODULE_1__.toDo.setTaskData(title, newTask);
            const taskCard = _toDoConstructor_js__WEBPACK_IMPORTED_MODULE_1__.toDo.createTaskCard(newTask);
            taskFormContainer.reset()
            addTask.classList.remove("item-form-popup");
            taskForm.classList.remove("item-form-popup-active");
            _DOMconstructor_js__WEBPACK_IMPORTED_MODULE_0__.createPage.addTaskCard(taskCard);
        })
    };
        
    function removeCardListener () {
            const removeCardBtn = document.querySelectorAll('.remove-card-btn');
            removeCardBtn.forEach((btn) => {btn.addEventListener('click', (e) => {
                e.preventDefault();
                btn.classList.add('active');
                let btnIndexPlace = btn.getAttribute('value');
                _toDoConstructor_js__WEBPACK_IMPORTED_MODULE_1__.toDo.removeTaskData(btnIndexPlace);
                switchTabs.switchTab('Inbox');
        })});
    };

    function addRemoveProjectListener () {
        const removeBtn = document.querySelectorAll(".remove-project-button");
        removeBtn.forEach((btn) => {btn.addEventListener('click', (event) => {
            event.preventDefault();
            const indexPlace = btn.getAttribute('id');
            _toDoConstructor_js__WEBPACK_IMPORTED_MODULE_1__.toDo.removeTaskData(indexPlace);
        })});
    }
    
        


    return { switchTab, assignLinks, addTaskEventListener, removeCardListener, addRemoveProjectListener };
})();



/***/ }),

/***/ "./src/toDoConstructor.js":
/*!********************************!*\
  !*** ./src/toDoConstructor.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDo": () => (/* binding */ toDo)
/* harmony export */ });

const toDo = (() => {
    
    const toDoItem = (title, description, dueDate, priority) => {
        
        return {title, description, dueDate, priority};
    };

    const project = (title, id) => {
        return {title, id};
    };

    function createTask (title, description, dueDate, priority) {
        const item = toDoItem(title, description, dueDate, priority);
        return item;

    }

    function createProject (title, id) {
        const newProject = project(title, id);
        return newProject;
    }

    function createTaskCard(taskObject) {
        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card-container');

        const checkBox = document.createElement('input');
        checkBox.setAttribute('type',"checkbox");
        checkBox.setAttribute('id',"completed-check");

        const taskCardTitle = document.createElement('h1');
        taskCardTitle.classList.add('taskcard-title');
        taskCardTitle.setAttribute('id', taskObject.title);
        taskCardTitle.textContent = taskObject.title;

        const taskCardDesc = document.createElement('p');
        taskCardDesc.classList.add('taskcard-description');
        // taskCardDesc.setAttribute('id', taskObject.description);
        taskCardDesc.textContent = taskObject.description;

        const taskCardDate = document.createElement('p');
        taskCardDate.classList.add('taskcard-date');
        taskCardDate.textContent = taskObject.dueDate;

        const taskCardPriority = document.createElement('p');
        taskCardPriority.classList.add('taskcard-priority');
        taskCardPriority.textContent = taskObject.priority;

        const removeTaskCardBtn = document.createElement('button');
        removeTaskCardBtn.classList.add('remove-card-btn');
        removeTaskCardBtn.setAttribute('type', "submit");
        removeTaskCardBtn.setAttribute('value', taskObject.title);
        removeTaskCardBtn.textContent = "X";

        taskCard.appendChild(checkBox);
        taskCard.appendChild(taskCardTitle);
        taskCard.appendChild(taskCardDesc);
        taskCard.appendChild(taskCardDate);
        taskCard.appendChild(taskCardPriority);
        taskCard.appendChild(removeTaskCardBtn);

        return taskCard;
    }

    const setTaskData = (title, taskCard) => {
        localStorage.setItem(title, JSON.stringify(taskCard));
    }

    function getTaskData(title) {
        const myTaskCard = JSON.parse(localStorage.getItem(title));
        return myTaskCard;
    }

    function removeTaskData(title) {
        localStorage.removeItem(title);
    }

    return {createTask, createProject, createTaskCard, setTaskData, getTaskData, removeTaskData};
})();


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOMconstructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMconstructor.js */ "./src/DOMconstructor.js");
/* harmony import */ var _switchTabs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switchTabs.js */ "./src/switchTabs.js");



// import { toDo } from './toDoConstructor.js';

const constructPage = (() =>{ 
    _DOMconstructor_js__WEBPACK_IMPORTED_MODULE_1__.createPage.createNavBar();
    _DOMconstructor_js__WEBPACK_IMPORTED_MODULE_1__.createPage.createSideBar();
    _DOMconstructor_js__WEBPACK_IMPORTED_MODULE_1__.createPage.createInbox();

    // switchTabs.switchTab('Inbox');
    _switchTabs_js__WEBPACK_IMPORTED_MODULE_2__.switchTabs.assignLinks();
    
    _switchTabs_js__WEBPACK_IMPORTED_MODULE_2__.switchTabs.addTaskEventListener();
    _switchTabs_js__WEBPACK_IMPORTED_MODULE_2__.switchTabs.addRemoveProjectListener();
})();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N3aXRjaFRhYnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvRG9Db25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGFobWxldCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tbmF2YmFyLWNvbG9yOiAjMTk4MWU2O1xcbiAgICAtLXNpZGViYXItY29sb3I6ICM0NzlhZWI7XFxuICAgIC0taG92ZXItY29sb3I6ICMxNzc0Y2Y7XFxuICAgIC0taGFtbGV0LWZvbnQ6ICdIYWhtbGV0Jywgc2VyaWY7XFxuICAgIC0tY2FuY2VsLWJ0bi1jb2xvcjogI2ZmMzMzMztcXG4gICAgLS1zdWJtaXQtYnRuLWNvbG9yOiAjMWFmZjhjO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0taGFtbGV0LWZvbnQpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgXFxcIm5hdmJhciBuYXZiYXJcXFwiXFxuICAgICAgICBcXFwic2lkZWJhciBpbmJveFxcXCI7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICBncmlkLWFyZWE6IG5hdmJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbn1cXG5cXG4ubmF2YmFyLXRleHQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IDEwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNXB4IDFmcjtcXG59XFxuXFxuLnNpZGViYXItY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG9maXQsIDFmcik7XFxuXFxuICAgIGdyaWQtcm93OiAyO1xcbn1cXG4uc2lkZWJhci1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIG1heC1oZWlnaHQ6NTBweDtcXG4gICAgd2lkdGg6MTAwJTtcXG59XFxuXFxuLnNpZGViYXItaXRlbSA+IC5pbmJveC1pdGVtIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuLnNpZGViYXItaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLmluYm94LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogaW5ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbmJveC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5pbmJveC1pdGVtIHtcXG4gICAgbWluLXdpZHRoOiA3MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbmF2YmFyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuLmluYm94LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmZvcm0tcG9wdXAsIC5hZGQtaXRlbS1mb3JtLCAuaGlkZS1pdGVtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gIH1cXG5cXG4uZm9ybS1wb3B1cC1hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcGFkZGluZzogMTJweDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgXFxufVxcblxcbmlucHV0W3R5cGU9dGV4dF0ge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHdpZHRoOiA5NyU7XFxuICAgIGhlaWdodDogMTAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgLnN1Ym1pdC1idG4sIC5pdGVtLXN1Ym1pdC1idG4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWJtaXQtYnRuLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBtYXJnaW4tYm90dG9tOjEwcHg7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIC5jYW5jZWwtYnRuLCAuaXRlbS1jYW5jZWwtYnRuIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYW5jZWwtYnRuLWNvbG9yKTtcXG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6NTAlO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcbi5pdGVtLWZvcm0tcG9wdXAge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaXRlbS1mb3JtLXBvcHVwLWFjdGl2ZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBoZWlnaHQ6IDM1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAyJTtcXG59XFxuXFxuLml0ZW0tZm9ybS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi50YXNrLWNhcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDEycHg7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbmF2YmFyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuI2NvbXBsZXRlZC1jaGVjazpjaGVja2VkIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi50YXNrY2FyZC10aXRsZSB7XFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIHBhZGRpbmctbGVmdDogMSU7XFxufVxcblxcbi50YXNrY2FyZC1kZXNjcmlwdGlvbiB7XFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbn1cXG5cXG4udGFza2NhcmQtZGF0ZSB7XFxuICAgIGZsZXg6IDEgMCBhdXRvO1xcbn1cXG5cXG4udGFza2NhcmQtcHJpb3JpdHkge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG59XFxuXFxuLnJlbW92ZS1jYXJkLWJ0biwgLnJlbW92ZS1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZiYXItY29sb3IpO1xcbn1cXG5cXG4ucmVtb3ZlLXByb2plY3QtYnV0dG9uIHtcXG4gICAgXFxufVxcblxcbi5zaWRlYmFyLWl0ZW0taGVhZGluZyB7XFxuICAgIGZsZXgtZ3JvdzogMjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksU0FBUztJQUNULCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0I7O3VCQUVtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0NBQXdDOztJQUV4QyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0VBQ2Y7O0FBRUY7SUFDSSxjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5Q0FBeUM7SUFDekMsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWix5Q0FBeUM7SUFDekMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsU0FBUztJQUNULG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLFlBQVk7SUFDWixxQ0FBcUM7SUFDckMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQ0FBcUM7QUFDekM7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUhhaG1sZXQmZGlzcGxheT1zd2FwJyk7XFxuOnJvb3Qge1xcbiAgICAtLW5hdmJhci1jb2xvcjogIzE5ODFlNjtcXG4gICAgLS1zaWRlYmFyLWNvbG9yOiAjNDc5YWViO1xcbiAgICAtLWhvdmVyLWNvbG9yOiAjMTc3NGNmO1xcbiAgICAtLWhhbWxldC1mb250OiAnSGFobWxldCcsIHNlcmlmO1xcbiAgICAtLWNhbmNlbC1idG4tY29sb3I6ICNmZjMzMzM7XFxuICAgIC0tc3VibWl0LWJ0bi1jb2xvcjogIzFhZmY4YztcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWhhbWxldC1mb250KTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC41ZnIgMmZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgIFxcXCJuYXZiYXIgbmF2YmFyXFxcIlxcbiAgICAgICAgXFxcInNpZGViYXIgaW5ib3hcXFwiO1xcbn1cXG5cXG4ubmF2YmFyIHtcXG4gICAgZ3JpZC1hcmVhOiBuYXZiYXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmJhci1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG59XFxuXFxuLm5hdmJhci10ZXh0IHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xcbn1cXG5cXG4uc2lkZWJhci1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBwYWRkaW5nOiAxMCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjVweCAxZnI7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvZml0LCAxZnIpO1xcblxcbiAgICBncmlkLXJvdzogMjtcXG59XFxuLnNpZGViYXItaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICBtYXgtaGVpZ2h0OjUwcHg7XFxuICAgIHdpZHRoOjEwMCU7XFxufVxcblxcbi5zaWRlYmFyLWl0ZW0gPiAuaW5ib3gtaXRlbSB7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxufVxcbi5zaWRlYmFyLWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxufVxcblxcbi5pbmJveC1jb250YWluZXIge1xcbiAgICBncmlkLWFyZWE6IGluYm94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5ib3gtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaW5ib3gtaXRlbSB7XFxuICAgIG1pbi13aWR0aDogNzAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW5hdmJhci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcbi5pbmJveC1pdGVtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5mb3JtLXBvcHVwLCAuYWRkLWl0ZW0tZm9ybSwgLmhpZGUtaXRlbSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxuICB9XFxuXFxuLmZvcm0tcG9wdXAtYWN0aXZlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBhZGRpbmc6IDEycHg7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIFxcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICB3aWR0aDogOTclO1xcbiAgICBoZWlnaHQ6IDEwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIC5zdWJtaXQtYnRuLCAuaXRlbS1zdWJtaXQtYnRuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VibWl0LWJ0bi1jb2xvcik7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMTZweCAyMHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luLWJvdHRvbToxMHB4O1xcbiAgICBvcGFjaXR5OiAwLjg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciAuY2FuY2VsLWJ0biwgLml0ZW0tY2FuY2VsLWJ0biB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FuY2VsLWJ0bi1jb2xvcik7XFxuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOjUwJTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4uaXRlbS1mb3JtLXBvcHVwIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLml0ZW0tZm9ybS1wb3B1cC1hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGViYXItY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG4gICAgcGFkZGluZzogMiU7XFxufVxcblxcbi5pdGVtLWZvcm0tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4udGFzay1jYXJkLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgbWFyZ2luOiAxMnB4O1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLW5hdmJhci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxufVxcblxcbiNjb21wbGV0ZWQtY2hlY2s6Y2hlY2tlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4udGFza2NhcmQtdGl0bGUge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xcbn1cXG5cXG4udGFza2NhcmQtZGVzY3JpcHRpb24ge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG59XFxuXFxuLnRhc2tjYXJkLWRhdGUge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG59XFxuXFxuLnRhc2tjYXJkLXByaW9yaXR5IHtcXG4gICAgZmxleDogMSAwIGF1dG87XFxufVxcblxcbi5yZW1vdmUtY2FyZC1idG4sIC5yZW1vdmUtcHJvamVjdC1idXR0b24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyLWNvbG9yKTtcXG59XFxuXFxuLnJlbW92ZS1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIFxcbn1cXG5cXG4uc2lkZWJhci1pdGVtLWhlYWRpbmcge1xcbiAgICBmbGV4LWdyb3c6IDI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgc3dpdGNoVGFicyB9IGZyb20gJy4vc3dpdGNoVGFicy5qcyc7XG5pbXBvcnQge3RvRG99IGZyb20gJy4vdG9Eb0NvbnN0cnVjdG9yLmpzJztcblxuY29uc3QgY3JlYXRlUGFnZSA9ICgoKT0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGNyZWF0ZU5hdkJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcblxuICAgICAgICBjb25zdCBuYXZCYXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5hdkJhclRleHQuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLXRleHQnKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGFkZE5hdkJhclRleHQoKTtcblxuICAgICAgICBuYXZCYXJUZXh0LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2QmFyVGV4dCk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVTaWRlQmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNpZGVCYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1jb250YWluZXInKTtcbiAgICAgICAgY29uc3Qgc2lkZWJhckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1jb250ZW50Jyk7XG5cbiAgICAgICAgY29uc3QgaW5ib3ggPSBhZGRQcm9qZWN0QnV0dG9uKFwiSW5ib3hcIik7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gYWRkUHJvamVjdEJ1dHRvbihcIlRvZGF5XCIpO1xuICAgICAgICBjb25zdCB0aGlzV2VlayA9IGFkZFByb2plY3RCdXR0b24oXCJUaGlzIFdlZWtcIik7XG5cbiAgICAgICAgY29uc3Qgc2lkZWJhckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBzaWRlYmFySGVhZGluZy50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgICAgICAgc2lkZWJhckhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImluYm94LWhlYWRlclwiKTtcblxuICAgICAgICBjb25zdCB0YXNrQnV0dG9uID0gYWRkUHJvamVjdEJ1dHRvbihcIkFkZCBQcm9qZWN0XCIpO1xuICAgICAgICB0YXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1zaWRlYmFyLWZvcm0nKTtcbiAgICBcblxuICAgICAgICBzaWRlYmFyQ29udGVudC5hcHBlbmRDaGlsZChpbmJveCk7XG4gICAgICAgIHNpZGViYXJDb250ZW50LmFwcGVuZENoaWxkKHRvZGF5KTtcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpc1dlZWspO1xuICAgICAgICBzaWRlYmFyQ29udGVudC5hcHBlbmRDaGlsZChzaWRlYmFySGVhZGluZyk7XG4gICAgICAgIHNpZGViYXJDb250ZW50LmFwcGVuZENoaWxkKHRhc2tCdXR0b24pO1xuICAgICAgXG4gICAgICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQoc2lkZWJhckNvbnRlbnQpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHNpZGVCYXIpO1xuXG4gICAgICAgIGNoZWNrUHJvamVjdExvY2FsU3RvcmFnZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFNpZGViYXJJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG5ld0l0ZW0gPSBhZGRQcm9qZWN0QnV0dG9uKGl0ZW0pO1xuICAgICAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgcmVtb3ZlQnRuLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZS1wcm9qZWN0LWJ1dHRvbicpO1xuICAgICAgICByZW1vdmVCdG4uc2V0QXR0cmlidXRlKCdpZCcsIGl0ZW0pO1xuICAgICAgICByZW1vdmVCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgICAgICAgY29uc3QgbmV3SXRlbU5hbWUgPSBuZXdJdGVtLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICAgICAgICBuZXdJdGVtLmFwcGVuZENoaWxkKHJlbW92ZUJ0bik7XG4gICAgICAgIGNvbnN0IHNpZGViYXJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItY29udGVudCcpO1xuICAgICAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1zaWRlYmFyLWZvcm0nKTtcbiAgICAgICAgbmV3SXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaFRhYnMuc3dpdGNoVGFiKG5ld0l0ZW1OYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgXG4gICAgICAgIHNpZGViYXJDb250ZW50Lmluc2VydEJlZm9yZShuZXdJdGVtLCBhZGRUYXNrKTtcbiAgICB9XG4gICAgIFxuICAgIGNvbnN0IGFkZEluYm94SXRlbSA9IChpbmJveCwgaGVhZGVyKSA9PiB7XG5cbiAgICAgICAgY29uc3QgdGFza0J1dHRvbiA9IGFkZEluYm94QnV0dG9uKFwiQWRkIFRhc2tcIik7XG4gICAgICAgIHRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2tmb3JtJyk7XG5cbiAgICAgICAgaW5ib3guYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgaW5ib3guYXBwZW5kQ2hpbGQodGFza0J1dHRvbik7XG5cbiAgICAgICAgY2hlY2tDYXJkTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFza0NhcmQgPSAodGFza0NhcmQpID0+IHtcbiAgICAgICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHRhc2tGb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrZm9ybScpO1xuICAgICAgICBpbmJveC5pbnNlcnRCZWZvcmUodGFza0NhcmQsIHRhc2tGb3JtQnV0dG9uKTtcbiAgICAgICAgc3dpdGNoVGFicy5yZW1vdmVDYXJkTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVJbmJveCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW5ib3guY2xhc3NMaXN0LmFkZCgnaW5ib3gtY29udGFpbmVyJyk7XG4gICAgICAgXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItaGVhZGVyJyk7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcblxuICAgICAgICBjb25zdCB0YXNrQnV0dG9uID0gYWRkSW5ib3hCdXR0b24oXCJBZGQgVGFza1wiKTtcbiAgICAgICAgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFza2Zvcm0nKTtcbiAgICAgIFxuICAgICAgICBpbmJveC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBpbmJveC5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uKTtcblxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKGluYm94KTtcblxuICAgICAgICBjaGVja0NhcmRMb2NhbFN0b3JhZ2UoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGROYXZCYXJUZXh0KCkge1xuICAgICAgICBjb25zdCBuYXZiYXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgbmF2YmFyVGV4dC50ZXh0Q29udGVudCA9IFwiVG8tRG8gTGlzdFwiO1xuICAgICAgICByZXR1cm4gbmF2YmFyVGV4dDtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gYWRkUHJvamVjdEJ1dHRvbihoZWFkaW5nKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1pdGVtJyk7XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBoZWFkaW5nKTtcbiAgICAgICAgY29uc3Qgb3B0aW9uVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgb3B0aW9uVGV4dC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWl0ZW0taGVhZGluZycpO1xuICAgICAgICBvcHRpb25UZXh0LnRleHRDb250ZW50ID0gaGVhZGluZztcbiAgICAgICAgb3B0aW9uLmFwcGVuZENoaWxkKG9wdGlvblRleHQpO1xuXG4gICAgICAgIHJldHVybiBvcHRpb247XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRJbmJveEJ1dHRvbihoZWFkaW5nKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCgnaW5ib3gtaXRlbScpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBoZWFkaW5nO1xuXG4gICAgICAgIHJldHVybiBvcHRpb247XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tDYXJkTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZiAoIShsb2NhbFN0b3JhZ2Uua2V5KGkpLmluY2x1ZGVzKFwiUHJvamVjdFwiKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmtleShpKSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0YXNrID0gdG9Eby5nZXRUYXNrRGF0YShsb2NhbFN0b3JhZ2Uua2V5KGkpKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhc2tPYmplY3QgPSB0b0RvLmNyZWF0ZVRhc2tDYXJkKHRhc2ssIGkpO1xuICAgICAgICAgICAgICAgICAgICBhZGRUYXNrQ2FyZCh0YXNrT2JqZWN0KTsgXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjaGVja1Byb2plY3RMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihsb2NhbFN0b3JhZ2Uua2V5KGkpLmluY2x1ZGVzKFwiUHJvamVjdFwiKSl7XG4gICAgICAgICAgICAgICAgICAgIGFkZFNpZGViYXJJdGVtKGxvY2FsU3RvcmFnZS5rZXkoaSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cblxuICAgIHJldHVybiB7IGNyZWF0ZU5hdkJhciwgY3JlYXRlU2lkZUJhciwgY3JlYXRlSW5ib3gsIFxuICAgICAgICBhZGRTaWRlYmFySXRlbSwgYWRkSW5ib3hJdGVtLCBhZGRUYXNrQ2FyZCwgY2hlY2tDYXJkTG9jYWxTdG9yYWdlIH07XG59KSgpO1xuXG5jb25zdCBjcmVhdGVGb3JtcyA9ICgoKSA9PiB7XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0Rm9ybSgpIHtcbiAgICAgICAgLy8gQ3JlYXRlIEZvcm0gUG9wdXAgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLXBvcHVwJyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlcyBGb3JtIENvbnRhaW5lclxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBmb3JtLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tY29udGFpbmVyJyk7XG5cbiAgICAgICAgLy8gQ3JlYXRlcyBGb3JtIENvbnRlbnRzXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgXCJ0ZXh0XCIpO1xuICAgICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnaXRlbS1uYW1lJyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBcInByb2plY3QtdGl0bGVcIik7XG4gICAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tdGV4dCcpXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHN1Ym1pdEJ0bi5jbGFzc0xpc3QuYWRkKCdzdWJtaXQtYnRuJyk7XG4gICAgICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBcInN1Ym1pdFwiKTtcbiAgICAgICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBcIlN1Ym1pdFwiKTtcbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgXCJDYW5jZWxcIik7XG4gICAgICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYnRuJyk7XG5cbiAgICAgICAgLy8gQXBwZW5kcyB0byBET01cbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgICAgICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuICAgICAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgICAgIHJldHVybiBmb3JtQ29udGFpbmVyO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tGb3JtKCkge1xuICAgICAgICAvLyBDcmVhdGVzIEZvcm0gUG9wdXAgQ29udGFpbmVyXG4gICAgICAgIGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tGb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZm9ybS1wb3B1cCcpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZm9ybS1jb250YWluZXInKTtcblxuICAgICAgICAvL01hbmFnZXMgVGl0bGUgaW5wdXQgYXJlYVxuICAgICAgICBjb25zdCB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgXCJ0ZXh0XCIpO1xuICAgICAgICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgXCJpdGVtLW5hbWVcIik7XG4gICAgICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJ0aXRsZVwiKTtcbiAgICAgICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBcIlRpdGxlXCIpO1xuICAgICAgICB0YXNrSW5wdXQuY2xhc3NMaXN0LmFkZCgnaXRlbS1mb3JtLXRleHQnKTtcblxuICAgICAgICAvL01hbmFnZXMgRGVzY3JpcHRpb24gSW5wdXQgQXJlYVxuICAgICAgICBjb25zdCB0YXNrRGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGFza0Rlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBcInRleHRcIik7XG4gICAgICAgIHRhc2tEZXNjSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgdGFza0Rlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgICAgdGFza0Rlc2NJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJEZXNjcmlwdGlvbiAoT3B0aW9uYWwpXCIpXG4gICAgICAgIHRhc2tEZXNjSW5wdXQuY2xhc3NMaXN0LmFkZCgnaXRlbS1mb3JtLXRleHQnKTtcblxuICAgICAgICAvL01hbmFnZXMgUHJpb3JpdHkgRGF0YWxpc3QgYXJlYVxuICAgICAgICBjb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2xpc3QnLCBcInByaW9yaXRpZXNcIik7XG4gICAgICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIFwiUHJpb3JpdHlcIilcbiAgICAgICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJwcmlvcml0aWVzXCIpXG4gICAgICAgIGNvbnN0IHByaW9yaXR5SW5wdXRMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRhdGFsaXN0XCIpO1xuICAgICAgICBwcmlvcml0eUlucHV0TGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJwcmlvcml0aWVzLWRhdGFsaXN0XCIpXG4gICAgICAgIGNvbnN0IGxvd1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJMb3dcIik7XG4gICAgICAgIGNvbnN0IG1lZFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgbWVkUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsIFwiTWVkaXVtXCIpO1xuICAgICAgICBjb25zdCBoaWdoUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd2YWx1ZScsXCJIaWdoXCIpO1xuICAgICAgICBwcmlvcml0eUlucHV0TGlzdC5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG4gICAgICAgIHByaW9yaXR5SW5wdXRMaXN0LmFwcGVuZENoaWxkKG1lZFByaW9yaXR5KTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dExpc3QuYXBwZW5kQ2hpbGQoaGlnaFByaW9yaXR5KTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAvL01hbmFnZXMgRGF0ZSBBcmVhXG4gICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGFza0RhdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgXCJkYXRlXCIpO1xuICAgICAgICB0YXNrRGF0ZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBcImR1ZS1kYXRlXCIpO1xuICAgICAgICB0YXNrRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgXCJkdWVEYXRlXCIpO1xuXG4gICAgICAgIC8vIE1hbmFnZXMgYnV0dG9uIGNyZWF0aW9uIGZvciBGb3JtXG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnaXRlbS1zdWJtaXQtYnRuJyk7XG4gICAgICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBcInN1Ym1pdFwiKTtcbiAgICAgICAgc3VibWl0QnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBcIlN1Ym1pdFwiKTtcbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG4gICAgICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgXCJDYW5jZWxcIik7XG4gICAgICAgIGNhbmNlbEJ0bi5jbGFzc0xpc3QuYWRkKCdpdGVtLWNhbmNlbC1idG4nKTtcblxuICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrSW5wdXQpO1xuICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZCh0YXNrRGVzY0lucHV0KTtcbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG4gICAgICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXRMaXN0KTtcbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0RhdGUpO1xuICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChzdWJtaXRCdG4pO1xuICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdG4pO1xuXG4gICAgICAgIHRhc2tGb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tGb3JtKTtcbiAgICAgICAgcmV0dXJuIHRhc2tGb3JtQ29udGFpbmVyO1xuICAgIH1cbiAgICByZXR1cm4ge2NyZWF0ZVByb2plY3RGb3JtLCBjcmVhdGVUYXNrRm9ybX07XG59KSgpO1xuXG5leHBvcnQgeyBjcmVhdGVQYWdlLCBjcmVhdGVGb3JtcyB9XG4iLCJpbXBvcnQgeyBhZGQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQge2NyZWF0ZVBhZ2UsIGNyZWF0ZUZvcm1zIH0gZnJvbSAnLi9ET01jb25zdHJ1Y3Rvci5qcyc7XG5pbXBvcnQge3RvRG99IGZyb20gJy4vdG9Eb0NvbnN0cnVjdG9yLmpzJztcblxuY29uc3Qgc3dpdGNoVGFicyA9ICgoKT0+IHtcblxuICAgIGNvbnN0IHN3aXRjaFRhYiA9IChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LWNvbnRhaW5lcicpO1xuICAgICAgICBcbiAgICAgICAgICAgIGlmIChpdGVtID09IFwiSW5ib3hcIikge1xuICAgICAgICAgICAgICAgIGluYm94LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5ib3hIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAgICAgICAgIGluYm94SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci1oZWFkZXInKTtcbiAgICAgICAgICAgICAgICBpbmJveEhlYWRlci50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgICAgICAgICAgICAgY3JlYXRlUGFnZS5hZGRJbmJveEl0ZW0oaW5ib3gsIGluYm94SGVhZGVyKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGluYm94LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBpbmJveC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci1oZWFkZXInKTtcbiAgICAgICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgICAgICAgXG4gICAgICAgICAgICBpbmJveC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFzc2lnbkxpbmtzID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLWl0ZW1cIik7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2hUYWIoaXRlbS5jaGlsZE5vZGVzWzBdLnRleHRDb250ZW50KTtcbiAgICAgICAgfSl9KTtcblxuICAgICAgICBhZGRTaWRlYmFyRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBhZGRTaWRlYmFyRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2tmb3JtJyk7XG4gICAgICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tZm9ybS1wb3B1cCcpO1xuICAgICAgICBjb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWZvcm0tY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXItY29udGVudFwiKTtcblxuICAgICAgICAvLyBMaXN0ZW5zIGZvciBBZGQgUHJvamVjdCBCdXR0b24gYmVpbmcgcHJlc3NlZC5cbiAgICAgICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtc2lkZWJhci1mb3JtJyk7XG4gICAgICAgIGNvbnN0IHByb2plY3RGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tY29udGFpbmVyJyk7XG4gICAgICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVGb3Jtcy5jcmVhdGVQcm9qZWN0Rm9ybSgpO1xuICAgICAgICAgICAgc2lkZWJhci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcG9wdXAnKTtcbiAgICAgICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2Zvcm0tcG9wdXAtYWN0aXZlJyk7XG4gICAgICAgICAgICBhZGRQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoJ2Zvcm0tcG9wdXAnKTtcblxuICAgICAgICAgICAgY29uc3QgcHJvakNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYW5jZWwtYnRuJyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qU3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1Ym1pdC1idG4nKTtcblxuICAgICAgICAgICAgcHJvakNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Rm9ybS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0LmNsYXNzTGlzdC50b2dnbGUoJ2Zvcm0tcG9wdXAnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwcm9qU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IFwiUHJvamVjdCBcIiArIHRpdGxlO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSB0b0RvLmNyZWF0ZVByb2plY3QodGl0bGUsIGlkKTtcbiAgICAgICAgICAgICAgICB0b0RvLnNldFRhc2tEYXRhKGlkLCBuZXdQcm9qZWN0KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBhZGRUYXNrRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICBcbiAgICAgICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2tmb3JtJyk7XG5cbiAgICAgICAgYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcblxuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGNyZWF0ZUZvcm1zLmNyZWF0ZVRhc2tGb3JtKCk7XG4gICAgICAgICAgICBpbmJveC5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tZm9ybS1wb3B1cCcpO1xuICAgICAgICAgICAgYWRkVGFzay5jbGFzc0xpc3QudG9nZ2xlKFwiaXRlbS1mb3JtLXBvcHVwXCIpO1xuICAgICAgICAgICAgdGFza0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZShcIml0ZW0tZm9ybS1wb3B1cC1hY3RpdmVcIik7XG4gICAgICAgICAgICBjb25zdCBpdGVtQ2FuY2VsQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pdGVtLWNhbmNlbC1idG5cIik7XG5cbiAgICAgICAgICAgIGl0ZW1DYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaW5ib3gucmVtb3ZlQ2hpbGQoaW5ib3gubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgICAgICAgICAgYWRkVGFzay5jbGFzc0xpc3QudG9nZ2xlKFwiaXRlbS1mb3JtLXBvcHVwXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBhZGRDYXJkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRDYXJkRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2tmb3JtJyk7XG4gICAgICAgIGNvbnN0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tZm9ybS1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1mb3JtLXBvcHVwJyk7XG4gICAgICAgIGNvbnN0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LWNvbnRhaW5lcicpO1xuICAgICAgXG4gICAgICAgIC8vIExpc3RlbnMgZm9yIFRhc2sgU3VibWl0IEJ1dHRvbiBiZWluZyBwcmVzc2VkLlxuICAgICAgICBcbiAgICAgICAgY29uc3QgaXRlbVN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS1zdWJtaXQtYnRuXCIpO1xuICAgICAgICBpdGVtU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KT0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXRpZXNcIikudmFsdWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB0b0RvLmNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSk7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgaW5ib3gucmVtb3ZlQ2hpbGQoaW5ib3gubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgICAgICBhZGRUYXNrLmNsYXNzTGlzdC50b2dnbGUoXCJpdGVtLWZvcm0tcG9wdXBcIik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRvRG8uc2V0VGFza0RhdGEodGl0bGUsIG5ld1Rhc2spO1xuICAgICAgICAgICAgY29uc3QgdGFza0NhcmQgPSB0b0RvLmNyZWF0ZVRhc2tDYXJkKG5ld1Rhc2spO1xuICAgICAgICAgICAgdGFza0Zvcm1Db250YWluZXIucmVzZXQoKVxuICAgICAgICAgICAgYWRkVGFzay5jbGFzc0xpc3QucmVtb3ZlKFwiaXRlbS1mb3JtLXBvcHVwXCIpO1xuICAgICAgICAgICAgdGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcIml0ZW0tZm9ybS1wb3B1cC1hY3RpdmVcIik7XG4gICAgICAgICAgICBjcmVhdGVQYWdlLmFkZFRhc2tDYXJkKHRhc2tDYXJkKTtcbiAgICAgICAgfSlcbiAgICB9O1xuICAgICAgICBcbiAgICBmdW5jdGlvbiByZW1vdmVDYXJkTGlzdGVuZXIgKCkge1xuICAgICAgICAgICAgY29uc3QgcmVtb3ZlQ2FyZEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW1vdmUtY2FyZC1idG4nKTtcbiAgICAgICAgICAgIHJlbW92ZUNhcmRCdG4uZm9yRWFjaCgoYnRuKSA9PiB7YnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIGxldCBidG5JbmRleFBsYWNlID0gYnRuLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICAgICAgICAgICAgICB0b0RvLnJlbW92ZVRhc2tEYXRhKGJ0bkluZGV4UGxhY2UpO1xuICAgICAgICAgICAgICAgIHN3aXRjaFRhYnMuc3dpdGNoVGFiKCdJbmJveCcpO1xuICAgICAgICB9KX0pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBhZGRSZW1vdmVQcm9qZWN0TGlzdGVuZXIgKCkge1xuICAgICAgICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnJlbW92ZS1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICAgICAgcmVtb3ZlQnRuLmZvckVhY2goKGJ0bikgPT4ge2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4UGxhY2UgPSBidG4uZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAgICAgdG9Eby5yZW1vdmVUYXNrRGF0YShpbmRleFBsYWNlKTtcbiAgICAgICAgfSl9KTtcbiAgICB9XG4gICAgXG4gICAgICAgIFxuXG5cbiAgICByZXR1cm4geyBzd2l0Y2hUYWIsIGFzc2lnbkxpbmtzLCBhZGRUYXNrRXZlbnRMaXN0ZW5lciwgcmVtb3ZlQ2FyZExpc3RlbmVyLCBhZGRSZW1vdmVQcm9qZWN0TGlzdGVuZXIgfTtcbn0pKCk7XG5cbmV4cG9ydCB7c3dpdGNoVGFic307IiwiXG5jb25zdCB0b0RvID0gKCgpID0+IHtcbiAgICBcbiAgICBjb25zdCB0b0RvSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHl9O1xuICAgIH07XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gKHRpdGxlLCBpZCkgPT4ge1xuICAgICAgICByZXR1cm4ge3RpdGxlLCBpZH07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2sgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHRvRG9JdGVtKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICByZXR1cm4gaXRlbTtcblxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QgKHRpdGxlLCBpZCkge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gcHJvamVjdCh0aXRsZSwgaWQpO1xuICAgICAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrQ2FyZCh0YXNrT2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY2FyZC1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsXCJjaGVja2JveFwiKTtcbiAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCdpZCcsXCJjb21wbGV0ZWQtY2hlY2tcIik7XG5cbiAgICAgICAgY29uc3QgdGFza0NhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIHRhc2tDYXJkVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFza2NhcmQtdGl0bGUnKTtcbiAgICAgICAgdGFza0NhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgdGFza09iamVjdC50aXRsZSk7XG4gICAgICAgIHRhc2tDYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrT2JqZWN0LnRpdGxlO1xuXG4gICAgICAgIGNvbnN0IHRhc2tDYXJkRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0NhcmREZXNjLmNsYXNzTGlzdC5hZGQoJ3Rhc2tjYXJkLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIC8vIHRhc2tDYXJkRGVzYy5zZXRBdHRyaWJ1dGUoJ2lkJywgdGFza09iamVjdC5kZXNjcmlwdGlvbik7XG4gICAgICAgIHRhc2tDYXJkRGVzYy50ZXh0Q29udGVudCA9IHRhc2tPYmplY3QuZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3QgdGFza0NhcmREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrQ2FyZERhdGUuY2xhc3NMaXN0LmFkZCgndGFza2NhcmQtZGF0ZScpO1xuICAgICAgICB0YXNrQ2FyZERhdGUudGV4dENvbnRlbnQgPSB0YXNrT2JqZWN0LmR1ZURhdGU7XG5cbiAgICAgICAgY29uc3QgdGFza0NhcmRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0NhcmRQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrY2FyZC1wcmlvcml0eScpO1xuICAgICAgICB0YXNrQ2FyZFByaW9yaXR5LnRleHRDb250ZW50ID0gdGFza09iamVjdC5wcmlvcml0eTtcblxuICAgICAgICBjb25zdCByZW1vdmVUYXNrQ2FyZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICByZW1vdmVUYXNrQ2FyZEJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtY2FyZC1idG4nKTtcbiAgICAgICAgcmVtb3ZlVGFza0NhcmRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgXCJzdWJtaXRcIik7XG4gICAgICAgIHJlbW92ZVRhc2tDYXJkQnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0YXNrT2JqZWN0LnRpdGxlKTtcbiAgICAgICAgcmVtb3ZlVGFza0NhcmRCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcblxuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tDYXJkVGl0bGUpO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrQ2FyZERlc2MpO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrQ2FyZERhdGUpO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrQ2FyZFByaW9yaXR5KTtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQocmVtb3ZlVGFza0NhcmRCdG4pO1xuXG4gICAgICAgIHJldHVybiB0YXNrQ2FyZDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUYXNrRGF0YSA9ICh0aXRsZSwgdGFza0NhcmQpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGl0bGUsIEpTT04uc3RyaW5naWZ5KHRhc2tDYXJkKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VGFza0RhdGEodGl0bGUpIHtcbiAgICAgICAgY29uc3QgbXlUYXNrQ2FyZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGl0bGUpKTtcbiAgICAgICAgcmV0dXJuIG15VGFza0NhcmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlVGFza0RhdGEodGl0bGUpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGl0bGUpO1xuICAgIH1cblxuICAgIHJldHVybiB7Y3JlYXRlVGFzaywgY3JlYXRlUHJvamVjdCwgY3JlYXRlVGFza0NhcmQsIHNldFRhc2tEYXRhLCBnZXRUYXNrRGF0YSwgcmVtb3ZlVGFza0RhdGF9O1xufSkoKTtcbmV4cG9ydCB7IHRvRG8gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge2NyZWF0ZVBhZ2V9IGZyb20gJy4vRE9NY29uc3RydWN0b3IuanMnO1xuaW1wb3J0IHtzd2l0Y2hUYWJzfSBmcm9tICcuL3N3aXRjaFRhYnMuanMnO1xuLy8gaW1wb3J0IHsgdG9EbyB9IGZyb20gJy4vdG9Eb0NvbnN0cnVjdG9yLmpzJztcblxuY29uc3QgY29uc3RydWN0UGFnZSA9ICgoKSA9PnsgXG4gICAgY3JlYXRlUGFnZS5jcmVhdGVOYXZCYXIoKTtcbiAgICBjcmVhdGVQYWdlLmNyZWF0ZVNpZGVCYXIoKTtcbiAgICBjcmVhdGVQYWdlLmNyZWF0ZUluYm94KCk7XG5cbiAgICAvLyBzd2l0Y2hUYWJzLnN3aXRjaFRhYignSW5ib3gnKTtcbiAgICBzd2l0Y2hUYWJzLmFzc2lnbkxpbmtzKCk7XG4gICAgXG4gICAgc3dpdGNoVGFicy5hZGRUYXNrRXZlbnRMaXN0ZW5lcigpO1xuICAgIHN3aXRjaFRhYnMuYWRkUmVtb3ZlUHJvamVjdExpc3RlbmVyKCk7XG59KSgpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==