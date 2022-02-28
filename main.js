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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --navbar-color: #1981e6;\n    --sidebar-color: #479aeb;\n    --hover-color: #1774cf;\n    --hamlet-font: 'Hahmlet', serif;\n    --cancel-btn-color: #ff3333;\n    --submit-btn-color: #1aff8c;\n}\n\nbody {\n    margin: 0;\n    font-family: var(--hamlet-font);\n}\n\n#content {\n    min-height: 100vh;\n    min-width: 100vw;\n    display: grid;\n    grid-template-columns: 0.5fr 2fr;\n    grid-template-rows: 0.5fr 2fr;\n    grid-template-areas: \n        \"navbar navbar\"\n        \"sidebar inbox\";\n}\n\n.navbar {\n    grid-area: navbar;\n    background-color: var(--navbar-color);\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n}\n\n.navbar-text {\n    color: white;\n    justify-self: start;\n    align-self: center;\n    padding-left: 10%;\n}\n\n.sidebar-container {\n    grid-area: sidebar;\n    background-color: var(--sidebar-color);\n    display: grid;\n    padding: 10%;\n    grid-template-rows: 25px 1fr;\n}\n\n.sidebar-content {\n    display: grid;\n    grid-template-rows: repeat(autofit, 1fr);\n\n    grid-row: 2;\n}\n.sidebar-item {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    color: white;\n    padding: 10px;\n    border-radius: 2px;\n    max-height:50px;\n    width:100%;\n}\n\n.sidebar-item > .inbox-item {\n    color: black;\n    border: 2px solid black;\n}\n.sidebar-item:hover {\n    background-color: var(--hover-color);\n}\n\n.inbox-container {\n    grid-area: inbox;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.inbox-header {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    color: white;\n}\n\n.inbox-item {\n    min-width: 70%;\n    display: flex;\n    justify-content: start;\n    padding-left: 10px;\n    border: 2px solid var(--navbar-color);\n    border-radius: 12px;\n}\n\n.inbox-item:hover {\n    background-color: var(--sidebar-color);\n    color: white;\n    border: 2px solid white;\n}\n\n.form-popup, .add-item-form {\n    display: none;\n    padding: 12px;\n  }\n\n.form-container {\n    max-width: 300px;\n    \n}\n\ninput[type=text] {\n    border-style: none;\n    width: 97%;\n    height: 10%;\n    margin-bottom: 12px;\n    border-radius: 12px;\n    padding: 10px;\n}\n\n.form-container .submit-btn, .item-submit-btn {\n    background-color: var(--submit-btn-color);\n    color: white;\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    width: 50%;\n    margin-bottom:10px;\n    opacity: 0.8;\n    border-radius: 12px;\n}\n\n.form-container .cancel-btn, .item-cancel-btn {\n    color: white;\n    background-color: var(--cancel-btn-color);\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    width:50%;\n    margin-bottom: 10px;\n    opacity: 0.8;\n    border-radius: 12px;\n}\n\n.item-form-popup {\n    display: none;\n}\n\n.item-form-popup-active {\n    display: flex;\n    justify-content: center;\n    border: 2px solid white;\n    background-color: var(--sidebar-color);\n    color: white;\n    width: 400px;\n    height: 350px;\n    border-radius: 12px;\n    padding: 2%;\n}\n\n.item-form-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 10px;\n}\n\n.task-card-container {\n    display: flex;\n    justify-content: space-between;\n    margin: 12px;\n    padding: 12px;\n    align-items: center;\n    width: 50%;\n    height: 50px;\n    border: 2px solid var(--navbar-color);\n    border-radius: 12px;\n}\n\n.taskcard-title {\n    flex: 1 0 auto;\n    font-size: 1.2rem;\n    font-weight: bold;\n    padding-left: 1%;\n}\n\n.taskcard-description {\n    flex: 1 0 auto;\n}\n\n.taskcard-date {\n    flex: 1 0 auto;\n}\n\n.taskcard-priority {\n    flex: 1 0 auto;\n}\n\n.remove-card-btn, .remove-project-button {\n    color: white;\n    border-style: none;\n    background-color: var(--navbar-color);\n}\n\n.remove-project-button {\n    \n}\n\n.sidebar-item-heading {\n    flex-grow: 2;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,sBAAsB;IACtB,+BAA+B;IAC/B,2BAA2B;IAC3B,2BAA2B;AAC/B;;AAEA;IACI,SAAS;IACT,+BAA+B;AACnC;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,gCAAgC;IAChC,6BAA6B;IAC7B;;uBAEmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,qCAAqC;IACrC,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,sCAAsC;IACtC,aAAa;IACb,YAAY;IACZ,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,wCAAwC;;IAExC,WAAW;AACf;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,uBAAuB;AAC3B;AACA;IACI,oCAAoC;AACxC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,qCAAqC;IACrC,mBAAmB;AACvB;;AAEA;IACI,sCAAsC;IACtC,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,aAAa;EACf;;AAEF;IACI,gBAAgB;;AAEpB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,yCAAyC;IACzC,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,UAAU;IACV,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,yCAAyC;IACzC,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,SAAS;IACT,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,sCAAsC;IACtC,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,UAAU;IACV,YAAY;IACZ,qCAAqC;IACrC,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,iBAAiB;IACjB,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,qCAAqC;AACzC;;AAEA;;AAEA;;AAEA;IACI,YAAY;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Hahmlet&display=swap');\n:root {\n    --navbar-color: #1981e6;\n    --sidebar-color: #479aeb;\n    --hover-color: #1774cf;\n    --hamlet-font: 'Hahmlet', serif;\n    --cancel-btn-color: #ff3333;\n    --submit-btn-color: #1aff8c;\n}\n\nbody {\n    margin: 0;\n    font-family: var(--hamlet-font);\n}\n\n#content {\n    min-height: 100vh;\n    min-width: 100vw;\n    display: grid;\n    grid-template-columns: 0.5fr 2fr;\n    grid-template-rows: 0.5fr 2fr;\n    grid-template-areas: \n        \"navbar navbar\"\n        \"sidebar inbox\";\n}\n\n.navbar {\n    grid-area: navbar;\n    background-color: var(--navbar-color);\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n}\n\n.navbar-text {\n    color: white;\n    justify-self: start;\n    align-self: center;\n    padding-left: 10%;\n}\n\n.sidebar-container {\n    grid-area: sidebar;\n    background-color: var(--sidebar-color);\n    display: grid;\n    padding: 10%;\n    grid-template-rows: 25px 1fr;\n}\n\n.sidebar-content {\n    display: grid;\n    grid-template-rows: repeat(autofit, 1fr);\n\n    grid-row: 2;\n}\n.sidebar-item {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    color: white;\n    padding: 10px;\n    border-radius: 2px;\n    max-height:50px;\n    width:100%;\n}\n\n.sidebar-item > .inbox-item {\n    color: black;\n    border: 2px solid black;\n}\n.sidebar-item:hover {\n    background-color: var(--hover-color);\n}\n\n.inbox-container {\n    grid-area: inbox;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.inbox-header {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    color: white;\n}\n\n.inbox-item {\n    min-width: 70%;\n    display: flex;\n    justify-content: start;\n    padding-left: 10px;\n    border: 2px solid var(--navbar-color);\n    border-radius: 12px;\n}\n\n.inbox-item:hover {\n    background-color: var(--sidebar-color);\n    color: white;\n    border: 2px solid white;\n}\n\n.form-popup, .add-item-form {\n    display: none;\n    padding: 12px;\n  }\n\n.form-container {\n    max-width: 300px;\n    \n}\n\ninput[type=text] {\n    border-style: none;\n    width: 97%;\n    height: 10%;\n    margin-bottom: 12px;\n    border-radius: 12px;\n    padding: 10px;\n}\n\n.form-container .submit-btn, .item-submit-btn {\n    background-color: var(--submit-btn-color);\n    color: white;\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    width: 50%;\n    margin-bottom:10px;\n    opacity: 0.8;\n    border-radius: 12px;\n}\n\n.form-container .cancel-btn, .item-cancel-btn {\n    color: white;\n    background-color: var(--cancel-btn-color);\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    width:50%;\n    margin-bottom: 10px;\n    opacity: 0.8;\n    border-radius: 12px;\n}\n\n.item-form-popup {\n    display: none;\n}\n\n.item-form-popup-active {\n    display: flex;\n    justify-content: center;\n    border: 2px solid white;\n    background-color: var(--sidebar-color);\n    color: white;\n    width: 400px;\n    height: 350px;\n    border-radius: 12px;\n    padding: 2%;\n}\n\n.item-form-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 10px;\n}\n\n.task-card-container {\n    display: flex;\n    justify-content: space-between;\n    margin: 12px;\n    padding: 12px;\n    align-items: center;\n    width: 50%;\n    height: 50px;\n    border: 2px solid var(--navbar-color);\n    border-radius: 12px;\n}\n\n.taskcard-title {\n    flex: 1 0 auto;\n    font-size: 1.2rem;\n    font-weight: bold;\n    padding-left: 1%;\n}\n\n.taskcard-description {\n    flex: 1 0 auto;\n}\n\n.taskcard-date {\n    flex: 1 0 auto;\n}\n\n.taskcard-priority {\n    flex: 1 0 auto;\n}\n\n.remove-card-btn, .remove-project-button {\n    color: white;\n    border-style: none;\n    background-color: var(--navbar-color);\n}\n\n.remove-project-button {\n    \n}\n\n.sidebar-item-heading {\n    flex-grow: 2;\n}"],"sourceRoot":""}]);
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
/* harmony export */   "createPage": () => (/* binding */ createPage)
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
        const form = createForms.createProjectForm();

        sidebarContent.appendChild(inbox);
        sidebarContent.appendChild(today);
        sidebarContent.appendChild(thisWeek);
        sidebarContent.appendChild(sidebarHeading);
        sidebarContent.appendChild(taskButton);
        sidebarContent.appendChild(form);

        sideBar.appendChild(sidebarContent);
        body.appendChild(sideBar);
    }

    const addSidebarItem = (item) => {
        const newItem = addProjectButton(item);
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-project-button');
        removeBtn.textContent = "X";
        const newItemName = newItem.getAttribute('name');
        newItem.appendChild(removeBtn);

        const sidebarContent = document.querySelector('.sidebar-content');
        newItem.addEventListener('click', () => {
            _switchTabs_js__WEBPACK_IMPORTED_MODULE_0__.switchTabs.switchTab(newItemName);
        });
        sidebarContent.appendChild(newItem);
    }
     
    const addInboxItem = (inbox, header) => {

        const taskButton = addInboxButton("Add Task");
        taskButton.classList.add('add-taskform');
        const form = createForms.createTaskForm();

        inbox.appendChild(header);
        inbox.appendChild(taskButton);
        inbox.appendChild(form);

        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++){
                let task = _toDoConstructor_js__WEBPACK_IMPORTED_MODULE_1__.toDo.getTaskData(localStorage.key(i));
                let taskObject = _toDoConstructor_js__WEBPACK_IMPORTED_MODULE_1__.toDo.createTaskCard(task, i);
                addTaskCard(taskObject);  
            }
        }
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
        const form = createForms.createTaskForm();
      
        inbox.appendChild(header);
        inbox.appendChild(taskButton);
        inbox.appendChild(form);

        body.appendChild(inbox);

        checkLocalStorage();
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

    const checkLocalStorage = () => {
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++){
                let task = _toDoConstructor_js__WEBPACK_IMPORTED_MODULE_1__.toDo.getTaskData(localStorage.key(i));
                let taskObject = _toDoConstructor_js__WEBPACK_IMPORTED_MODULE_1__.toDo.createTaskCard(task, i);
                addTaskCard(taskObject);
                
            }
            _switchTabs_js__WEBPACK_IMPORTED_MODULE_0__.switchTabs.addCardEventListeners();
        }
    }


    return { createNavBar, createSideBar, createInbox, 
        addSidebarItem, addInboxItem, addTaskCard, checkLocalStorage };
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
                addSidebarEventListeners();
                addCardEventListeners();
                addTaskEventListener();
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
            switchTab(item.textContent);
        })});

        addSidebarEventListeners();
        addCardEventListeners();
        addTaskEventListener();
    };

    function addSidebarEventListeners() {
        const addTask = document.querySelector('.add-taskform');
        const taskForm = document.querySelector('.item-form-popup');
        const taskFormContainer = document.querySelector('.item-form-container');

        // Listens for Add Project Button being pressed.
        const addProject = document.querySelector('.add-sidebar-form');
        addProject.addEventListener('click', () => {
            document.querySelector('.form-popup').style.display = "block";
        });

        // Listens for Cancel Button being pressed
        const cancelbtn = document.querySelector(".cancel-btn");
        cancelbtn.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('.form-popup').style.display = "none";
        });

        // Listens for Project Form Submit button being pressed
        const submitBtn = document.querySelector(".submit-btn");
        submitBtn.addEventListener('click', (event)=> {
            const form = document.querySelector('.form-text')
            event.preventDefault();
            _DOMconstructor_js__WEBPACK_IMPORTED_MODULE_0__.createPage.addSidebarItem(form.value);
            document.querySelector('.form-popup').style.display = "none";
        })
    };

    function addTaskEventListener() {
        const itemCancelBtn = document.querySelector(".item-cancel-btn");
        const taskForm = document.querySelector('.item-form-popup');
        const addTask = document.querySelector('.add-taskform');

        addTask.addEventListener('click', () => {
            addTask.classList.toggle("item-form-popup");
            taskForm.classList.toggle("item-form-popup-active");
        });

        itemCancelBtn.addEventListener('click',(event) => {
            event.preventDefault();
            addTask.classList.remove("item-form-popup");
            taskForm.classList.remove("item-form-popup-active");

        })
    }
    function addCardEventListeners() {
        const addTask = document.querySelector('.add-taskform');
        const taskFormContainer = document.querySelector('.item-form-container');
        const taskForm = document.querySelector('.item-form-popup');

    
        // Listens for Task Submit Button being pressed.
        
        const itemSubmitBtn = document.querySelector(".item-submit-btn");
        itemSubmitBtn.addEventListener('click', (event)=> {
            event.preventDefault();

            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const dueDate = document.getElementById("dueDate").value;
            const priority = document.getElementById("priorities").value;
            const newTask = _toDoConstructor_js__WEBPACK_IMPORTED_MODULE_1__.toDo.createTask(title, description, dueDate, priority);
            
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
    
        


    return { switchTab, assignLinks, addCardEventListeners, removeCardListener };
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

    function createTask (title, description, dueDate, priority) {
        const item = toDoItem(title, description, dueDate, priority);
        return item;

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
        console.log(myTaskCard);
        return myTaskCard;
    }

    function removeTaskData(title) {
        localStorage.removeItem(title);
    }

    return {createTask, createTaskCard, setTaskData, getTaskData, removeTaskData};
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
    if (localStorage.length > 0) {
        _switchTabs_js__WEBPACK_IMPORTED_MODULE_2__.switchTabs.addCardEventListeners();
    }
})();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFlBQVk7QUFDWixDQUFDOzs7Ozs7O1VDdEVEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQjtBQUMwQjtBQUNKO0FBQzNDLFlBQVksT0FBTzs7QUFFbkI7QUFDQSxJQUFJLHVFQUF1QjtBQUMzQixJQUFJLHdFQUF3QjtBQUM1QixJQUFJLHNFQUFzQjs7QUFFMUI7QUFDQSxJQUFJLGtFQUFzQjtBQUMxQjtBQUNBLFFBQVEsNEVBQWdDO0FBQ3hDO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N3aXRjaFRhYnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvRG9Db25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGFobWxldCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tbmF2YmFyLWNvbG9yOiAjMTk4MWU2O1xcbiAgICAtLXNpZGViYXItY29sb3I6ICM0NzlhZWI7XFxuICAgIC0taG92ZXItY29sb3I6ICMxNzc0Y2Y7XFxuICAgIC0taGFtbGV0LWZvbnQ6ICdIYWhtbGV0Jywgc2VyaWY7XFxuICAgIC0tY2FuY2VsLWJ0bi1jb2xvcjogI2ZmMzMzMztcXG4gICAgLS1zdWJtaXQtYnRuLWNvbG9yOiAjMWFmZjhjO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0taGFtbGV0LWZvbnQpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgXFxcIm5hdmJhciBuYXZiYXJcXFwiXFxuICAgICAgICBcXFwic2lkZWJhciBpbmJveFxcXCI7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICBncmlkLWFyZWE6IG5hdmJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbn1cXG5cXG4ubmF2YmFyLXRleHQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IDEwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNXB4IDFmcjtcXG59XFxuXFxuLnNpZGViYXItY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG9maXQsIDFmcik7XFxuXFxuICAgIGdyaWQtcm93OiAyO1xcbn1cXG4uc2lkZWJhci1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIG1heC1oZWlnaHQ6NTBweDtcXG4gICAgd2lkdGg6MTAwJTtcXG59XFxuXFxuLnNpZGViYXItaXRlbSA+IC5pbmJveC1pdGVtIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuLnNpZGViYXItaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLmluYm94LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogaW5ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbmJveC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5pbmJveC1pdGVtIHtcXG4gICAgbWluLXdpZHRoOiA3MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbmF2YmFyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuLmluYm94LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmZvcm0tcG9wdXAsIC5hZGQtaXRlbS1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gIH1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgd2lkdGg6IDk3JTtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciAuc3VibWl0LWJ0biwgLml0ZW0tc3VibWl0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Ym1pdC1idG4tY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgLmNhbmNlbC1idG4sIC5pdGVtLWNhbmNlbC1idG4ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbmNlbC1idG4tY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDo1MCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuLml0ZW0tZm9ybS1wb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pdGVtLWZvcm0tcG9wdXAtYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbn1cXG5cXG4uaXRlbS1mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRhc2stY2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMTJweDtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1uYXZiYXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4udGFza2NhcmQtdGl0bGUge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xcbn1cXG5cXG4udGFza2NhcmQtZGVzY3JpcHRpb24ge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG59XFxuXFxuLnRhc2tjYXJkLWRhdGUge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG59XFxuXFxuLnRhc2tjYXJkLXByaW9yaXR5IHtcXG4gICAgZmxleDogMSAwIGF1dG87XFxufVxcblxcbi5yZW1vdmUtY2FyZC1idG4sIC5yZW1vdmUtcHJvamVjdC1idXR0b24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyLWNvbG9yKTtcXG59XFxuXFxuLnJlbW92ZS1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIFxcbn1cXG5cXG4uc2lkZWJhci1pdGVtLWhlYWRpbmcge1xcbiAgICBmbGV4LWdyb3c6IDI7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QiwrQkFBK0I7SUFDL0IsMkJBQTJCO0lBQzNCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCOzt1QkFFbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYixZQUFZO0lBQ1osNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHdDQUF3Qzs7SUFFeEMsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixxQ0FBcUM7SUFDckMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtFQUNmOztBQUVGO0lBQ0ksZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHlDQUF5QztJQUN6QyxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsc0NBQXNDO0lBQ3RDLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFDQUFxQztBQUN6Qzs7QUFFQTs7QUFFQTs7QUFFQTtJQUNJLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGFobWxldCZkaXNwbGF5PXN3YXAnKTtcXG46cm9vdCB7XFxuICAgIC0tbmF2YmFyLWNvbG9yOiAjMTk4MWU2O1xcbiAgICAtLXNpZGViYXItY29sb3I6ICM0NzlhZWI7XFxuICAgIC0taG92ZXItY29sb3I6ICMxNzc0Y2Y7XFxuICAgIC0taGFtbGV0LWZvbnQ6ICdIYWhtbGV0Jywgc2VyaWY7XFxuICAgIC0tY2FuY2VsLWJ0bi1jb2xvcjogI2ZmMzMzMztcXG4gICAgLS1zdWJtaXQtYnRuLWNvbG9yOiAjMWFmZjhjO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0taGFtbGV0LWZvbnQpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgXFxcIm5hdmJhciBuYXZiYXJcXFwiXFxuICAgICAgICBcXFwic2lkZWJhciBpbmJveFxcXCI7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICBncmlkLWFyZWE6IG5hdmJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbn1cXG5cXG4ubmF2YmFyLXRleHQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IDEwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNXB4IDFmcjtcXG59XFxuXFxuLnNpZGViYXItY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG9maXQsIDFmcik7XFxuXFxuICAgIGdyaWQtcm93OiAyO1xcbn1cXG4uc2lkZWJhci1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIG1heC1oZWlnaHQ6NTBweDtcXG4gICAgd2lkdGg6MTAwJTtcXG59XFxuXFxuLnNpZGViYXItaXRlbSA+IC5pbmJveC1pdGVtIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuLnNpZGViYXItaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLmluYm94LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogaW5ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbmJveC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5pbmJveC1pdGVtIHtcXG4gICAgbWluLXdpZHRoOiA3MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbmF2YmFyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuLmluYm94LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmZvcm0tcG9wdXAsIC5hZGQtaXRlbS1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gIH1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgd2lkdGg6IDk3JTtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciAuc3VibWl0LWJ0biwgLml0ZW0tc3VibWl0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Ym1pdC1idG4tY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgLmNhbmNlbC1idG4sIC5pdGVtLWNhbmNlbC1idG4ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbmNlbC1idG4tY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDo1MCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuLml0ZW0tZm9ybS1wb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pdGVtLWZvcm0tcG9wdXAtYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbn1cXG5cXG4uaXRlbS1mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLnRhc2stY2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMTJweDtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1uYXZiYXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4udGFza2NhcmQtdGl0bGUge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xcbn1cXG5cXG4udGFza2NhcmQtZGVzY3JpcHRpb24ge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG59XFxuXFxuLnRhc2tjYXJkLWRhdGUge1xcbiAgICBmbGV4OiAxIDAgYXV0bztcXG59XFxuXFxuLnRhc2tjYXJkLXByaW9yaXR5IHtcXG4gICAgZmxleDogMSAwIGF1dG87XFxufVxcblxcbi5yZW1vdmUtY2FyZC1idG4sIC5yZW1vdmUtcHJvamVjdC1idXR0b24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyLWNvbG9yKTtcXG59XFxuXFxuLnJlbW92ZS1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIFxcbn1cXG5cXG4uc2lkZWJhci1pdGVtLWhlYWRpbmcge1xcbiAgICBmbGV4LWdyb3c6IDI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgc3dpdGNoVGFicyB9IGZyb20gJy4vc3dpdGNoVGFicy5qcyc7XG5pbXBvcnQge3RvRG99IGZyb20gJy4vdG9Eb0NvbnN0cnVjdG9yLmpzJztcblxuY29uc3QgY3JlYXRlUGFnZSA9ICgoKT0+IHtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGNyZWF0ZU5hdkJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXZiYXInKTtcblxuICAgICAgICBjb25zdCBuYXZCYXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG5hdkJhclRleHQuY2xhc3NMaXN0LmFkZCgnbmF2YmFyLXRleHQnKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGFkZE5hdkJhclRleHQoKTtcblxuICAgICAgICBuYXZCYXJUZXh0LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmF2QmFyVGV4dCk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQobmF2QmFyKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVTaWRlQmFyID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNpZGVCYXIuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1jb250YWluZXInKTtcbiAgICAgICAgY29uc3Qgc2lkZWJhckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1jb250ZW50Jyk7XG5cbiAgICAgICAgY29uc3QgaW5ib3ggPSBhZGRQcm9qZWN0QnV0dG9uKFwiSW5ib3hcIik7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gYWRkUHJvamVjdEJ1dHRvbihcIlRvZGF5XCIpO1xuICAgICAgICBjb25zdCB0aGlzV2VlayA9IGFkZFByb2plY3RCdXR0b24oXCJUaGlzIFdlZWtcIik7XG5cbiAgICAgICAgY29uc3Qgc2lkZWJhckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBzaWRlYmFySGVhZGluZy50ZXh0Q29udGVudCA9IFwiUHJvamVjdHNcIjtcbiAgICAgICAgc2lkZWJhckhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImluYm94LWhlYWRlclwiKTtcblxuICAgICAgICBjb25zdCB0YXNrQnV0dG9uID0gYWRkUHJvamVjdEJ1dHRvbihcIkFkZCBQcm9qZWN0XCIpO1xuICAgICAgICB0YXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC1zaWRlYmFyLWZvcm0nKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGNyZWF0ZUZvcm1zLmNyZWF0ZVByb2plY3RGb3JtKCk7XG5cbiAgICAgICAgc2lkZWJhckNvbnRlbnQuYXBwZW5kQ2hpbGQoaW5ib3gpO1xuICAgICAgICBzaWRlYmFyQ29udGVudC5hcHBlbmRDaGlsZCh0b2RheSk7XG4gICAgICAgIHNpZGViYXJDb250ZW50LmFwcGVuZENoaWxkKHRoaXNXZWVrKTtcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuYXBwZW5kQ2hpbGQoc2lkZWJhckhlYWRpbmcpO1xuICAgICAgICBzaWRlYmFyQ29udGVudC5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uKTtcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAgICAgc2lkZUJhci5hcHBlbmRDaGlsZChzaWRlYmFyQ29udGVudCk7XG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoc2lkZUJhcik7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkU2lkZWJhckl0ZW0gPSAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBuZXdJdGVtID0gYWRkUHJvamVjdEJ1dHRvbihpdGVtKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHJlbW92ZUJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtcHJvamVjdC1idXR0b24nKTtcbiAgICAgICAgcmVtb3ZlQnRuLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgIGNvbnN0IG5ld0l0ZW1OYW1lID0gbmV3SXRlbS5nZXRBdHRyaWJ1dGUoJ25hbWUnKTtcbiAgICAgICAgbmV3SXRlbS5hcHBlbmRDaGlsZChyZW1vdmVCdG4pO1xuXG4gICAgICAgIGNvbnN0IHNpZGViYXJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItY29udGVudCcpO1xuICAgICAgICBuZXdJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoVGFicy5zd2l0Y2hUYWIobmV3SXRlbU5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuYXBwZW5kQ2hpbGQobmV3SXRlbSk7XG4gICAgfVxuICAgICBcbiAgICBjb25zdCBhZGRJbmJveEl0ZW0gPSAoaW5ib3gsIGhlYWRlcikgPT4ge1xuXG4gICAgICAgIGNvbnN0IHRhc2tCdXR0b24gPSBhZGRJbmJveEJ1dHRvbihcIkFkZCBUYXNrXCIpO1xuICAgICAgICB0YXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrZm9ybScpO1xuICAgICAgICBjb25zdCBmb3JtID0gY3JlYXRlRm9ybXMuY3JlYXRlVGFza0Zvcm0oKTtcblxuICAgICAgICBpbmJveC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBpbmJveC5hcHBlbmRDaGlsZCh0YXNrQnV0dG9uKTtcbiAgICAgICAgaW5ib3guYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2sgPSB0b0RvLmdldFRhc2tEYXRhKGxvY2FsU3RvcmFnZS5rZXkoaSkpO1xuICAgICAgICAgICAgICAgIGxldCB0YXNrT2JqZWN0ID0gdG9Eby5jcmVhdGVUYXNrQ2FyZCh0YXNrLCBpKTtcbiAgICAgICAgICAgICAgICBhZGRUYXNrQ2FyZCh0YXNrT2JqZWN0KTsgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFza0NhcmQgPSAodGFza0NhcmQpID0+IHtcbiAgICAgICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHRhc2tGb3JtQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrZm9ybScpO1xuICAgICAgICBpbmJveC5pbnNlcnRCZWZvcmUodGFza0NhcmQsIHRhc2tGb3JtQnV0dG9uKTtcbiAgICAgICAgc3dpdGNoVGFicy5yZW1vdmVDYXJkTGlzdGVuZXIoKTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVJbmJveCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW5ib3guY2xhc3NMaXN0LmFkZCgnaW5ib3gtY29udGFpbmVyJyk7XG4gICAgICAgXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItaGVhZGVyJyk7XG4gICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcblxuICAgICAgICBjb25zdCB0YXNrQnV0dG9uID0gYWRkSW5ib3hCdXR0b24oXCJBZGQgVGFza1wiKTtcbiAgICAgICAgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFza2Zvcm0nKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGNyZWF0ZUZvcm1zLmNyZWF0ZVRhc2tGb3JtKCk7XG4gICAgICBcbiAgICAgICAgaW5ib3guYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgaW5ib3guYXBwZW5kQ2hpbGQodGFza0J1dHRvbik7XG4gICAgICAgIGluYm94LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW5ib3gpO1xuXG4gICAgICAgIGNoZWNrTG9jYWxTdG9yYWdlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkTmF2QmFyVGV4dCgpIHtcbiAgICAgICAgY29uc3QgbmF2YmFyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIG5hdmJhclRleHQudGV4dENvbnRlbnQgPSBcIlRvLURvIExpc3RcIjtcbiAgICAgICAgcmV0dXJuIG5hdmJhclRleHQ7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGFkZFByb2plY3RCdXR0b24oaGVhZGluZykge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItaXRlbScpO1xuICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCduYW1lJywgaGVhZGluZyk7XG4gICAgICAgIGNvbnN0IG9wdGlvblRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIG9wdGlvblRleHQuY2xhc3NMaXN0LmFkZCgnc2lkZWJhci1pdGVtLWhlYWRpbmcnKTtcbiAgICAgICAgb3B0aW9uVGV4dC50ZXh0Q29udGVudCA9IGhlYWRpbmc7XG4gICAgICAgIG9wdGlvbi5hcHBlbmRDaGlsZChvcHRpb25UZXh0KTtcblxuICAgICAgICByZXR1cm4gb3B0aW9uO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkSW5ib3hCdXR0b24oaGVhZGluZykge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2luYm94LWl0ZW0nKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gaGVhZGluZztcblxuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBsZXQgdGFzayA9IHRvRG8uZ2V0VGFza0RhdGEobG9jYWxTdG9yYWdlLmtleShpKSk7XG4gICAgICAgICAgICAgICAgbGV0IHRhc2tPYmplY3QgPSB0b0RvLmNyZWF0ZVRhc2tDYXJkKHRhc2ssIGkpO1xuICAgICAgICAgICAgICAgIGFkZFRhc2tDYXJkKHRhc2tPYmplY3QpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoVGFicy5hZGRDYXJkRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgcmV0dXJuIHsgY3JlYXRlTmF2QmFyLCBjcmVhdGVTaWRlQmFyLCBjcmVhdGVJbmJveCwgXG4gICAgICAgIGFkZFNpZGViYXJJdGVtLCBhZGRJbmJveEl0ZW0sIGFkZFRhc2tDYXJkLCBjaGVja0xvY2FsU3RvcmFnZSB9O1xufSkoKTtcblxuY29uc3QgY3JlYXRlRm9ybXMgPSAoKCkgPT4ge1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm0oKSB7XG4gICAgICAgIC8vIENyZWF0ZSBGb3JtIFBvcHVwIGNvbnRhaW5lclxuICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1wb3B1cCcpO1xuXG4gICAgICAgIC8vIENyZWF0ZXMgRm9ybSBDb250YWluZXJcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIC8vIENyZWF0ZXMgRm9ybSBDb250ZW50c1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIFwidGV4dFwiKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2l0ZW0tbmFtZScpO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWJ0bicpO1xuICAgICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgICAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgXCJzdWJtaXRcIik7XG4gICAgICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgXCJTdWJtaXRcIik7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgICAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsIFwiQ2FuY2VsXCIpO1xuICAgICAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ0bicpO1xuXG4gICAgICAgIC8vIEFwcGVuZHMgdG8gRE9NXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgICAgICByZXR1cm4gZm9ybUNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrRm9ybSgpIHtcbiAgICAgICAgLy8gQ3JlYXRlcyBGb3JtIFBvcHVwIENvbnRhaW5lclxuICAgICAgICBjb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtLWZvcm0tcG9wdXAnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdpdGVtLWZvcm0tY29udGFpbmVyJyk7XG5cbiAgICAgICAgLy9NYW5hZ2VzIFRpdGxlIGlucHV0IGFyZWFcbiAgICAgICAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIFwidGV4dFwiKTtcbiAgICAgICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIFwiaXRlbS1uYW1lXCIpO1xuICAgICAgICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIFwidGl0bGVcIik7XG4gICAgICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJUaXRsZVwiKTtcbiAgICAgICAgdGFza0lucHV0LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZm9ybS10ZXh0Jyk7XG5cbiAgICAgICAgLy9NYW5hZ2VzIERlc2NyaXB0aW9uIElucHV0IEFyZWFcbiAgICAgICAgY29uc3QgdGFza0Rlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRhc2tEZXNjSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgXCJ0ZXh0XCIpO1xuICAgICAgICB0YXNrRGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgIHRhc2tEZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgIHRhc2tEZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIFwiRGVzY3JpcHRpb24gKE9wdGlvbmFsKVwiKVxuICAgICAgICB0YXNrRGVzY0lucHV0LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZm9ybS10ZXh0Jyk7XG5cbiAgICAgICAgLy9NYW5hZ2VzIFByaW9yaXR5IERhdGFsaXN0IGFyZWFcbiAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdsaXN0JywgXCJwcmlvcml0aWVzXCIpO1xuICAgICAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBcIlByaW9yaXR5XCIpXG4gICAgICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIFwicHJpb3JpdGllc1wiKVxuICAgICAgICBjb25zdCBwcmlvcml0eUlucHV0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkYXRhbGlzdFwiKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dExpc3Quc2V0QXR0cmlidXRlKCdpZCcsIFwicHJpb3JpdGllcy1kYXRhbGlzdFwiKVxuICAgICAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTG93XCIpO1xuICAgICAgICBjb25zdCBtZWRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG1lZFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBcIk1lZGl1bVwiKTtcbiAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLFwiSGlnaFwiKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dExpc3QuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xuICAgICAgICBwcmlvcml0eUlucHV0TGlzdC5hcHBlbmRDaGlsZChtZWRQcmlvcml0eSk7XG4gICAgICAgIHByaW9yaXR5SW5wdXRMaXN0LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy9NYW5hZ2VzIERhdGUgQXJlYVxuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRhc2tEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsIFwiZGF0ZVwiKTtcbiAgICAgICAgdGFza0RhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgXCJkdWUtZGF0ZVwiKTtcbiAgICAgICAgdGFza0RhdGUuc2V0QXR0cmlidXRlKCdpZCcsIFwiZHVlRGF0ZVwiKTtcblxuICAgICAgICAvLyBNYW5hZ2VzIGJ1dHRvbiBjcmVhdGlvbiBmb3IgRm9ybVxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tc3VibWl0LWJ0bicpO1xuICAgICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgICAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgXCJzdWJtaXRcIik7XG4gICAgICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgXCJTdWJtaXRcIik7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgICAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsIFwiQ2FuY2VsXCIpO1xuICAgICAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnaXRlbS1jYW5jZWwtYnRuJyk7XG5cbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0lucHV0KTtcbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0Rlc2NJbnB1dCk7XG4gICAgICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0TGlzdCk7XG4gICAgICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICAgICAgICB0YXNrRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG4gICAgICAgIHJldHVybiB0YXNrRm9ybUNvbnRhaW5lcjtcbiAgICB9XG4gICAgcmV0dXJuIHtjcmVhdGVQcm9qZWN0Rm9ybSwgY3JlYXRlVGFza0Zvcm19O1xufSkoKTtcblxuZXhwb3J0IHsgY3JlYXRlUGFnZSB9XG4iLCJpbXBvcnQgeyBhZGQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQge2NyZWF0ZVBhZ2UgfSBmcm9tICcuL0RPTWNvbnN0cnVjdG9yLmpzJztcbmltcG9ydCB7dG9Eb30gZnJvbSAnLi90b0RvQ29uc3RydWN0b3IuanMnO1xuXG5jb25zdCBzd2l0Y2hUYWJzID0gKCgpPT4ge1xuXG4gICAgY29uc3Qgc3dpdGNoVGFiID0gKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtY29udGFpbmVyJyk7XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKGl0ZW0gPT0gXCJJbmJveFwiKSB7XG4gICAgICAgICAgICAgICAgaW5ib3guaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmJveEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgICAgICAgICAgaW5ib3hIZWFkZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLWhlYWRlcicpO1xuICAgICAgICAgICAgICAgIGluYm94SGVhZGVyLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgICAgICAgICBjcmVhdGVQYWdlLmFkZEluYm94SXRlbShpbmJveCwgaW5ib3hIZWFkZXIpO1xuICAgICAgICAgICAgICAgIGFkZFNpZGViYXJFdmVudExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgIGFkZENhcmRFdmVudExpc3RlbmVycygpO1xuICAgICAgICAgICAgICAgIGFkZFRhc2tFdmVudExpc3RlbmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGluYm94LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBpbmJveC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci1oZWFkZXInKTtcbiAgICAgICAgICAgIGhlYWRlci50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgICAgICAgICBpbmJveC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIFxuICAgICAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGFzc2lnbkxpbmtzID0gKCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaWRlYmFyLWl0ZW1cIik7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2hUYWIoaXRlbS50ZXh0Q29udGVudCk7XG4gICAgICAgIH0pfSk7XG5cbiAgICAgICAgYWRkU2lkZWJhckV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIGFkZENhcmRFdmVudExpc3RlbmVycygpO1xuICAgICAgICBhZGRUYXNrRXZlbnRMaXN0ZW5lcigpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBhZGRTaWRlYmFyRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2tmb3JtJyk7XG4gICAgICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW0tZm9ybS1wb3B1cCcpO1xuICAgICAgICBjb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWZvcm0tY29udGFpbmVyJyk7XG5cbiAgICAgICAgLy8gTGlzdGVucyBmb3IgQWRkIFByb2plY3QgQnV0dG9uIGJlaW5nIHByZXNzZWQuXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXNpZGViYXItZm9ybScpO1xuICAgICAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBMaXN0ZW5zIGZvciBDYW5jZWwgQnV0dG9uIGJlaW5nIHByZXNzZWRcbiAgICAgICAgY29uc3QgY2FuY2VsYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtYnRuXCIpO1xuICAgICAgICBjYW5jZWxidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wb3B1cCcpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gTGlzdGVucyBmb3IgUHJvamVjdCBGb3JtIFN1Ym1pdCBidXR0b24gYmVpbmcgcHJlc3NlZFxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1idG5cIik7XG4gICAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tdGV4dCcpXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY3JlYXRlUGFnZS5hZGRTaWRlYmFySXRlbShmb3JtLnZhbHVlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBvcHVwJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBhZGRUYXNrRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgY29uc3QgaXRlbUNhbmNlbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS1jYW5jZWwtYnRuXCIpO1xuICAgICAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWZvcm0tcG9wdXAnKTtcbiAgICAgICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFza2Zvcm0nKTtcblxuICAgICAgICBhZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYWRkVGFzay5jbGFzc0xpc3QudG9nZ2xlKFwiaXRlbS1mb3JtLXBvcHVwXCIpO1xuICAgICAgICAgICAgdGFza0Zvcm0uY2xhc3NMaXN0LnRvZ2dsZShcIml0ZW0tZm9ybS1wb3B1cC1hY3RpdmVcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGl0ZW1DYW5jZWxCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGFkZFRhc2suY2xhc3NMaXN0LnJlbW92ZShcIml0ZW0tZm9ybS1wb3B1cFwiKTtcbiAgICAgICAgICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJpdGVtLWZvcm0tcG9wdXAtYWN0aXZlXCIpO1xuXG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZENhcmRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFza2Zvcm0nKTtcbiAgICAgICAgY29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1mb3JtLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWZvcm0tcG9wdXAnKTtcblxuICAgIFxuICAgICAgICAvLyBMaXN0ZW5zIGZvciBUYXNrIFN1Ym1pdCBCdXR0b24gYmVpbmcgcHJlc3NlZC5cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGl0ZW1TdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tc3VibWl0LWJ0blwiKTtcbiAgICAgICAgaXRlbVN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGl0bGVcIikudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVEYXRlXCIpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXRpZXNcIikudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gdG9Eby5jcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0b0RvLnNldFRhc2tEYXRhKHRpdGxlLCBuZXdUYXNrKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tDYXJkID0gdG9Eby5jcmVhdGVUYXNrQ2FyZChuZXdUYXNrKTtcbiAgICAgICAgICAgIHRhc2tGb3JtQ29udGFpbmVyLnJlc2V0KClcbiAgICAgICAgICAgIGFkZFRhc2suY2xhc3NMaXN0LnJlbW92ZShcIml0ZW0tZm9ybS1wb3B1cFwiKTtcbiAgICAgICAgICAgIHRhc2tGb3JtLmNsYXNzTGlzdC5yZW1vdmUoXCJpdGVtLWZvcm0tcG9wdXAtYWN0aXZlXCIpO1xuICAgICAgICAgICAgY3JlYXRlUGFnZS5hZGRUYXNrQ2FyZCh0YXNrQ2FyZCk7XG4gICAgICAgIH0pXG4gICAgfTtcbiAgICAgICAgXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2FyZExpc3RlbmVyICgpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZUNhcmRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVtb3ZlLWNhcmQtYnRuJyk7XG4gICAgICAgICAgICByZW1vdmVDYXJkQnRuLmZvckVhY2goKGJ0bikgPT4ge2J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBsZXQgYnRuSW5kZXhQbGFjZSA9IGJ0bi5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyk7XG4gICAgICAgICAgICAgICAgdG9Eby5yZW1vdmVUYXNrRGF0YShidG5JbmRleFBsYWNlKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2hUYWJzLnN3aXRjaFRhYignSW5ib3gnKTtcbiAgICAgICAgfSl9KTtcbiAgICB9O1xuICAgIFxuICAgICAgICBcblxuXG4gICAgcmV0dXJuIHsgc3dpdGNoVGFiLCBhc3NpZ25MaW5rcywgYWRkQ2FyZEV2ZW50TGlzdGVuZXJzLCByZW1vdmVDYXJkTGlzdGVuZXIgfTtcbn0pKCk7XG5cbmV4cG9ydCB7c3dpdGNoVGFic307IiwiXG5jb25zdCB0b0RvID0gKCgpID0+IHtcbiAgICBcbiAgICBjb25zdCB0b0RvSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHl9O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0b0RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG5cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrQ2FyZCh0YXNrT2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IHRhc2tDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tDYXJkLmNsYXNzTGlzdC5hZGQoJ3Rhc2stY2FyZC1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrQm94LnNldEF0dHJpYnV0ZSgndHlwZScsXCJjaGVja2JveFwiKTtcbiAgICAgICAgY2hlY2tCb3guc2V0QXR0cmlidXRlKCdpZCcsXCJjb21wbGV0ZWQtY2hlY2tcIik7XG5cbiAgICAgICAgY29uc3QgdGFza0NhcmRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIHRhc2tDYXJkVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFza2NhcmQtdGl0bGUnKTtcbiAgICAgICAgdGFza0NhcmRUaXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywgdGFza09iamVjdC50aXRsZSk7XG4gICAgICAgIHRhc2tDYXJkVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrT2JqZWN0LnRpdGxlO1xuXG4gICAgICAgIGNvbnN0IHRhc2tDYXJkRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0NhcmREZXNjLmNsYXNzTGlzdC5hZGQoJ3Rhc2tjYXJkLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIHRhc2tDYXJkRGVzYy50ZXh0Q29udGVudCA9IHRhc2tPYmplY3QuZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3QgdGFza0NhcmREYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrQ2FyZERhdGUuY2xhc3NMaXN0LmFkZCgndGFza2NhcmQtZGF0ZScpO1xuICAgICAgICB0YXNrQ2FyZERhdGUudGV4dENvbnRlbnQgPSB0YXNrT2JqZWN0LmR1ZURhdGU7XG5cbiAgICAgICAgY29uc3QgdGFza0NhcmRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0NhcmRQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrY2FyZC1wcmlvcml0eScpO1xuICAgICAgICB0YXNrQ2FyZFByaW9yaXR5LnRleHRDb250ZW50ID0gdGFza09iamVjdC5wcmlvcml0eTtcblxuICAgICAgICBjb25zdCByZW1vdmVUYXNrQ2FyZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICByZW1vdmVUYXNrQ2FyZEJ0bi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtY2FyZC1idG4nKTtcbiAgICAgICAgcmVtb3ZlVGFza0NhcmRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgXCJzdWJtaXRcIik7XG4gICAgICAgIHJlbW92ZVRhc2tDYXJkQnRuLnNldEF0dHJpYnV0ZSgndmFsdWUnLCB0YXNrT2JqZWN0LnRpdGxlKTtcbiAgICAgICAgcmVtb3ZlVGFza0NhcmRCdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcblxuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gICAgICAgIHRhc2tDYXJkLmFwcGVuZENoaWxkKHRhc2tDYXJkVGl0bGUpO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrQ2FyZERlc2MpO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrQ2FyZERhdGUpO1xuICAgICAgICB0YXNrQ2FyZC5hcHBlbmRDaGlsZCh0YXNrQ2FyZFByaW9yaXR5KTtcbiAgICAgICAgdGFza0NhcmQuYXBwZW5kQ2hpbGQocmVtb3ZlVGFza0NhcmRCdG4pO1xuXG4gICAgICAgIHJldHVybiB0YXNrQ2FyZDtcbiAgICB9XG5cbiAgICBjb25zdCBzZXRUYXNrRGF0YSA9ICh0aXRsZSwgdGFza0NhcmQpID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGl0bGUsIEpTT04uc3RyaW5naWZ5KHRhc2tDYXJkKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VGFza0RhdGEodGl0bGUpIHtcbiAgICAgICAgY29uc3QgbXlUYXNrQ2FyZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGl0bGUpKTtcbiAgICAgICAgY29uc29sZS5sb2cobXlUYXNrQ2FyZCk7XG4gICAgICAgIHJldHVybiBteVRhc2tDYXJkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZVRhc2tEYXRhKHRpdGxlKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRpdGxlKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge2NyZWF0ZVRhc2ssIGNyZWF0ZVRhc2tDYXJkLCBzZXRUYXNrRGF0YSwgZ2V0VGFza0RhdGEsIHJlbW92ZVRhc2tEYXRhfTtcbn0pKCk7XG5leHBvcnQgeyB0b0RvIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHtjcmVhdGVQYWdlfSBmcm9tICcuL0RPTWNvbnN0cnVjdG9yLmpzJztcbmltcG9ydCB7c3dpdGNoVGFic30gZnJvbSAnLi9zd2l0Y2hUYWJzLmpzJztcbi8vIGltcG9ydCB7IHRvRG8gfSBmcm9tICcuL3RvRG9Db25zdHJ1Y3Rvci5qcyc7XG5cbmNvbnN0IGNvbnN0cnVjdFBhZ2UgPSAoKCkgPT57IFxuICAgIGNyZWF0ZVBhZ2UuY3JlYXRlTmF2QmFyKCk7XG4gICAgY3JlYXRlUGFnZS5jcmVhdGVTaWRlQmFyKCk7XG4gICAgY3JlYXRlUGFnZS5jcmVhdGVJbmJveCgpO1xuXG4gICAgLy8gc3dpdGNoVGFicy5zd2l0Y2hUYWIoJ0luYm94Jyk7XG4gICAgc3dpdGNoVGFicy5hc3NpZ25MaW5rcygpO1xuICAgIGlmIChsb2NhbFN0b3JhZ2UubGVuZ3RoID4gMCkge1xuICAgICAgICBzd2l0Y2hUYWJzLmFkZENhcmRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbn0pKCk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9