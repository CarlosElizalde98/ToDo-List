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
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --navbar-color: #1981e6;\n    --sidebar-color: #479aeb;\n    --hover-color: #1774cf;\n    --hamlet-font: 'Hahmlet', serif;\n    --cancel-btn-color: #ff3333;\n    --submit-btn-color: #1aff8c;\n}\n\nbody {\n    margin: 0;\n    font-family: var(--hamlet-font);\n}\n\n#content {\n    min-height: 100vh;\n    min-width: 100vw;\n    display: grid;\n    grid-template-columns: 0.5fr 2fr;\n    grid-template-rows: 0.5fr 2fr;\n    grid-template-areas: \n        \"navbar navbar\"\n        \"sidebar inbox\";\n}\n\n.navbar {\n    grid-area: navbar;\n    background-color: var(--navbar-color);\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n}\n\n.navbar-text {\n    color: white;\n    justify-self: start;\n    align-self: center;\n    padding-left: 10%;\n}\n\n.sidebar-container {\n    grid-area: sidebar;\n    background-color: var(--sidebar-color);\n    display: grid;\n    padding: 10%;\n    grid-template-rows: 25px 1fr;\n}\n\n.sidebar-content {\n    display: grid;\n    grid-template-rows: repeat(autofit, 1fr);\n\n    grid-row: 2;\n}\n.sidebar-item {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    color: white;\n    padding: 10px;\n    border-radius: 2px;\n    max-height:50px;\n    width:100%;\n}\n\n.sidebar-item > .inbox-item {\n    color: black;\n    border: 2px solid black;\n}\n.sidebar-item:hover {\n    background-color: var(--hover-color);\n}\n\n.inbox-container {\n    grid-area: inbox;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.inbox-header {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    color: white;\n}\n\n.inbox-item {\n    min-width: 70%;\n    display: flex;\n    justify-content: start;\n    padding-left: 10px;\n    border: 2px solid var(--navbar-color);\n    border-radius: 12px;\n}\n\n.inbox-item:hover {\n    background-color: var(--sidebar-color);\n    color: white;\n    border: 2px solid white;\n}\n\n.form-popup, .add-item-form {\n    display: none;\n    padding: 12px;\n  }\n\n.form-container {\n    max-width: 300px;\n    \n}\n\ninput[type=text] {\n    border-style: none;\n    width: 97%;\n    height: 10%;\n    margin-bottom: 12px;\n    border-radius: 12px;\n    padding: 10px;\n}\n\n.form-container .submit-btn, .item-submit-btn {\n    background-color: var(--submit-btn-color);\n    color: white;\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    width: 50%;\n    margin-bottom:10px;\n    opacity: 0.8;\n    border-radius: 12px;\n}\n\n.form-container .cancel-btn, .item-cancel-btn {\n    color: white;\n    background-color: var(--cancel-btn-color);\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    width:50%;\n    margin-bottom: 10px;\n    opacity: 0.8;\n    border-radius: 12px;\n}\n\n.item-form-popup {\n    display: none;\n}\n\n.item-form-popup-active {\n    display: flex;\n    justify-content: center;\n    border: 2px solid white;\n    background-color: var(--sidebar-color);\n    color: white;\n    width: 400px;\n    height: 350px;\n    border-radius: 12px;\n    padding: 2%;\n}\n\n.item-form-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 10px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AACA;IACI,uBAAuB;IACvB,wBAAwB;IACxB,sBAAsB;IACtB,+BAA+B;IAC/B,2BAA2B;IAC3B,2BAA2B;AAC/B;;AAEA;IACI,SAAS;IACT,+BAA+B;AACnC;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,gCAAgC;IAChC,6BAA6B;IAC7B;;uBAEmB;AACvB;;AAEA;IACI,iBAAiB;IACjB,qCAAqC;IACrC,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,sCAAsC;IACtC,aAAa;IACb,YAAY;IACZ,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,wCAAwC;;IAExC,WAAW;AACf;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,eAAe;IACf,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,uBAAuB;AAC3B;AACA;IACI,oCAAoC;AACxC;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,qCAAqC;IACrC,mBAAmB;AACvB;;AAEA;IACI,sCAAsC;IACtC,YAAY;IACZ,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,aAAa;EACf;;AAEF;IACI,gBAAgB;;AAEpB;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,yCAAyC;IACzC,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,UAAU;IACV,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,yCAAyC;IACzC,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,SAAS;IACT,mBAAmB;IACnB,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,sCAAsC;IACtC,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,aAAa;AACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Hahmlet&display=swap');\n:root {\n    --navbar-color: #1981e6;\n    --sidebar-color: #479aeb;\n    --hover-color: #1774cf;\n    --hamlet-font: 'Hahmlet', serif;\n    --cancel-btn-color: #ff3333;\n    --submit-btn-color: #1aff8c;\n}\n\nbody {\n    margin: 0;\n    font-family: var(--hamlet-font);\n}\n\n#content {\n    min-height: 100vh;\n    min-width: 100vw;\n    display: grid;\n    grid-template-columns: 0.5fr 2fr;\n    grid-template-rows: 0.5fr 2fr;\n    grid-template-areas: \n        \"navbar navbar\"\n        \"sidebar inbox\";\n}\n\n.navbar {\n    grid-area: navbar;\n    background-color: var(--navbar-color);\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n}\n\n.navbar-text {\n    color: white;\n    justify-self: start;\n    align-self: center;\n    padding-left: 10%;\n}\n\n.sidebar-container {\n    grid-area: sidebar;\n    background-color: var(--sidebar-color);\n    display: grid;\n    padding: 10%;\n    grid-template-rows: 25px 1fr;\n}\n\n.sidebar-content {\n    display: grid;\n    grid-template-rows: repeat(autofit, 1fr);\n\n    grid-row: 2;\n}\n.sidebar-item {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    color: white;\n    padding: 10px;\n    border-radius: 2px;\n    max-height:50px;\n    width:100%;\n}\n\n.sidebar-item > .inbox-item {\n    color: black;\n    border: 2px solid black;\n}\n.sidebar-item:hover {\n    background-color: var(--hover-color);\n}\n\n.inbox-container {\n    grid-area: inbox;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.inbox-header {\n    display: flex;\n    justify-content: start;\n    align-items: center;\n    color: white;\n}\n\n.inbox-item {\n    min-width: 70%;\n    display: flex;\n    justify-content: start;\n    padding-left: 10px;\n    border: 2px solid var(--navbar-color);\n    border-radius: 12px;\n}\n\n.inbox-item:hover {\n    background-color: var(--sidebar-color);\n    color: white;\n    border: 2px solid white;\n}\n\n.form-popup, .add-item-form {\n    display: none;\n    padding: 12px;\n  }\n\n.form-container {\n    max-width: 300px;\n    \n}\n\ninput[type=text] {\n    border-style: none;\n    width: 97%;\n    height: 10%;\n    margin-bottom: 12px;\n    border-radius: 12px;\n    padding: 10px;\n}\n\n.form-container .submit-btn, .item-submit-btn {\n    background-color: var(--submit-btn-color);\n    color: white;\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    width: 50%;\n    margin-bottom:10px;\n    opacity: 0.8;\n    border-radius: 12px;\n}\n\n.form-container .cancel-btn, .item-cancel-btn {\n    color: white;\n    background-color: var(--cancel-btn-color);\n    padding: 16px 20px;\n    border: none;\n    cursor: pointer;\n    width:50%;\n    margin-bottom: 10px;\n    opacity: 0.8;\n    border-radius: 12px;\n}\n\n.item-form-popup {\n    display: none;\n}\n\n.item-form-popup-active {\n    display: flex;\n    justify-content: center;\n    border: 2px solid white;\n    background-color: var(--sidebar-color);\n    color: white;\n    width: 400px;\n    height: 350px;\n    border-radius: 12px;\n    padding: 2%;\n}\n\n.item-form-container {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 10px;\n}"],"sourceRoot":""}]);
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

        const inbox = addTaskButton("Inbox");
        const today = addTaskButton("Today");
        const thisWeek = addTaskButton("This Week");

        const sidebarHeading = document.createElement('h2');
        sidebarHeading.textContent = "Projects";
        sidebarHeading.classList.add("inbox-header");

        const taskButton = addTaskButton("Add Project");
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
        const newItem = addTaskButton(item);
        const sidebarContent = document.querySelector('.sidebar-content');
        sidebarContent.appendChild(newItem);
    }
     
    const addInboxItem = (inbox, header) => {
        // const newItem = addInboxButton(item);
        // const inboxContent = document.querySelector(".inbox-container");
        // inboxContent.appendChild(newItem);

        const taskButton = addInboxButton("Add Task");
        taskButton.classList.add('add-taskform');
        const form = createForms.createTaskForm();

        inbox.appendChild(header);
        inbox.appendChild(taskButton);
        inbox.appendChild(form);
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
    }

    function addNavBarText() {
        const navbarText = document.createElement('h1');
        navbarText.textContent = "To-Do List";
        return navbarText;
    };

    function addTaskButton(heading) {
        const option = document.createElement('div');
        option.classList.add('sidebar-item');
        option.textContent = heading;

        return option;

    }

    function addInboxButton(heading) {
        const option = document.createElement('div');
        option.classList.add('inbox-item');
        option.textContent = heading;

        return option;
    }


    return { createNavBar, createSideBar, createInbox, addSidebarItem, addInboxItem };
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
        
        
        //Manages Data Area
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

const switchTabs = (()=> {

    const switchTab = (item) => {
        const inbox = document.querySelector('.inbox-container');
            // inbox.innerHTML = "";
            if (item === "Inbox") {
                inbox.innerHTML = "";
                const header = document.createElement('h1');
                header.classList.add('container-header');
                header.textContent = item;
                // inbox.appendChild(header);
                // createPage.addInboxItem(item);
                _DOMconstructor_js__WEBPACK_IMPORTED_MODULE_0__.createPage.addInboxItem(inbox, header);
            }
            inbox.innerHTML = "";
            inbox.textContent = "";
            const header = document.createElement('h1');
            header.classList.add('container-header');
            header.textContent = item;
            inbox.appendChild(header);
            _DOMconstructor_js__WEBPACK_IMPORTED_MODULE_0__.createPage.addInboxItem(inbox, header);
    }

    const assignLinks = () => {
        const items = document.querySelectorAll(".sidebar-item");
        items.forEach((item) => {item.addEventListener("click", () => {
            switchTab(item.textContent);
            addEventListeners();
        })});
    };

    function addEventListeners() {
        const addTask = document.querySelector('.add-taskform');
        const taskBtn = document.querySelector('.add-taskform');
        const taskForm = document.querySelector('.item-form-popup');
        const taskFormContainer = document.querySelector('.item-form-container');

        addTask.addEventListener('click', () => {
            taskBtn.classList.toggle("item-form-popup");
            taskForm.classList.toggle("item-form-popup-active");
        });

        const addProject = document.querySelector('.add-sidebar-form');
        addProject.addEventListener('click', () => {
            document.querySelector('.form-popup').style.display = "block";
        });

        const cancelbtn = document.querySelector(".cancel-btn");
        cancelbtn.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector('.form-popup').style.display = "none";
        });

        const itemCancelBtn = document.querySelector(".item-cancel-btn");
        itemCancelBtn.addEventListener('click',(event) => {
            event.preventDefault();
            taskBtn.classList.remove("item-form-popup");
            taskForm.classList.remove("item-form-popup-active");

        })

        const submitBtn = document.querySelector(".submit-btn");
        submitBtn.addEventListener('click', (event)=> {
            const form = document.querySelector('.form-text')
            event.preventDefault();
            _DOMconstructor_js__WEBPACK_IMPORTED_MODULE_0__.createPage.addSidebarItem(form.value);
            document.querySelector('.form-popup').style.display = "none";
            switchTabs.assignLinks();
        })

        const itemSubmitBtn = document.querySelector(".item-submit-btn");
        itemSubmitBtn.addEventListener('click', (event)=> {
            event.preventDefault();
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const dueDate = document.getElementById("dueDate").value;
            const priority = document.getElementById("priorities").value;
            const newTask = toDo.createTask(title, description, dueDate, priority);
            console.log(newTask);
            taskFormContainer.reset()

        })
    }

    return { switchTab, assignLinks }
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
/* harmony import */ var _DOMconstructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMconstructor.js */ "./src/DOMconstructor.js");


const toDo = (() => {
    
    const toDoItem = (title, description, dueDate, priority) => {
        
        return {title, description, dueDate, priority};
    };

    function createTask (title, description, dueDate, priority) {
        const item = toDoItem(title, description, dueDate, priority);
        return item;

    }

    return {createTask};
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
/* harmony import */ var _toDoConstructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDoConstructor.js */ "./src/toDoConstructor.js");





const constructPage = (() =>{ 
    _DOMconstructor_js__WEBPACK_IMPORTED_MODULE_1__.createPage.createNavBar();
    _DOMconstructor_js__WEBPACK_IMPORTED_MODULE_1__.createPage.createSideBar();
    _DOMconstructor_js__WEBPACK_IMPORTED_MODULE_1__.createPage.createInbox();

    _switchTabs_js__WEBPACK_IMPORTED_MODULE_2__.switchTabs.assignLinks();
    // addEventListeners();

    // function addEventListeners() {
    //     const addTask = document.querySelector('.add-taskform');
    //     const taskBtn = document.querySelector('.add-taskform');
    //     const taskForm = document.querySelector('.item-form-popup');
    //     const taskFormContainer = document.querySelector('.item-form-container');

    //     addTask.addEventListener('click', () => {
    //         taskBtn.classList.toggle("item-form-popup");
    //         taskForm.classList.toggle("item-form-popup-active");
    //     });

    //     const addProject = document.querySelector('.add-sidebar-form');
    //     addProject.addEventListener('click', () => {
    //         document.querySelector('.form-popup').style.display = "block";
    //     });

    //     const cancelbtn = document.querySelector(".cancel-btn");
    //     cancelbtn.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         document.querySelector('.form-popup').style.display = "none";
    //     });

    //     const itemCancelBtn = document.querySelector(".item-cancel-btn");
    //     itemCancelBtn.addEventListener('click',(event) => {
    //         event.preventDefault();
    //         taskBtn.classList.remove("item-form-popup");
    //         taskForm.classList.remove("item-form-popup-active");

    //     })

    //     const submitBtn = document.querySelector(".submit-btn");
    //     submitBtn.addEventListener('click', (event)=> {
    //         const form = document.querySelector('.form-text')
    //         event.preventDefault();
    //         createPage.addSidebarItem(form.value);
    //         document.querySelector('.form-popup').style.display = "none";
    //         switchTabs.assignLinks();
    //     })

    //     const itemSubmitBtn = document.querySelector(".item-submit-btn");
    //     itemSubmitBtn.addEventListener('click', (event)=> {
    //         event.preventDefault();
    //         const title = document.getElementById("title").value;
    //         const description = document.getElementById("description").value;
    //         const dueDate = document.getElementById("dueDate").value;
    //         const priority = document.getElementById("priorities").value;
    //         const newTask = toDo.createTask(title, description, dueDate, priority);
    //         console.log(newTask);
    //         taskFormContainer.reset()

    //     })
    // }

    
})();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZOztBQUVaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTs7QUFFWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7O0FBRVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsWUFBWTtBQUNaOztBQUVBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvRE9NY29uc3RydWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N3aXRjaFRhYnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3RvRG9Db25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGFobWxldCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tbmF2YmFyLWNvbG9yOiAjMTk4MWU2O1xcbiAgICAtLXNpZGViYXItY29sb3I6ICM0NzlhZWI7XFxuICAgIC0taG92ZXItY29sb3I6ICMxNzc0Y2Y7XFxuICAgIC0taGFtbGV0LWZvbnQ6ICdIYWhtbGV0Jywgc2VyaWY7XFxuICAgIC0tY2FuY2VsLWJ0bi1jb2xvcjogI2ZmMzMzMztcXG4gICAgLS1zdWJtaXQtYnRuLWNvbG9yOiAjMWFmZjhjO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0taGFtbGV0LWZvbnQpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgXFxcIm5hdmJhciBuYXZiYXJcXFwiXFxuICAgICAgICBcXFwic2lkZWJhciBpbmJveFxcXCI7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICBncmlkLWFyZWE6IG5hdmJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbn1cXG5cXG4ubmF2YmFyLXRleHQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IDEwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNXB4IDFmcjtcXG59XFxuXFxuLnNpZGViYXItY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG9maXQsIDFmcik7XFxuXFxuICAgIGdyaWQtcm93OiAyO1xcbn1cXG4uc2lkZWJhci1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIG1heC1oZWlnaHQ6NTBweDtcXG4gICAgd2lkdGg6MTAwJTtcXG59XFxuXFxuLnNpZGViYXItaXRlbSA+IC5pbmJveC1pdGVtIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuLnNpZGViYXItaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLmluYm94LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogaW5ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbmJveC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5pbmJveC1pdGVtIHtcXG4gICAgbWluLXdpZHRoOiA3MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbmF2YmFyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuLmluYm94LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmZvcm0tcG9wdXAsIC5hZGQtaXRlbS1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gIH1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgd2lkdGg6IDk3JTtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciAuc3VibWl0LWJ0biwgLml0ZW0tc3VibWl0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Ym1pdC1idG4tY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgLmNhbmNlbC1idG4sIC5pdGVtLWNhbmNlbC1idG4ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbmNlbC1idG4tY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDo1MCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuLml0ZW0tZm9ybS1wb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pdGVtLWZvcm0tcG9wdXAtYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbn1cXG5cXG4uaXRlbS1mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFDQTtJQUNJLHVCQUF1QjtJQUN2Qix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLCtCQUErQjtJQUMvQiwyQkFBMkI7SUFDM0IsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksU0FBUztJQUNULCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0I7O3VCQUVtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixxQ0FBcUM7SUFDckMsYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLFlBQVk7SUFDWiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0NBQXdDOztJQUV4QyxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHFDQUFxQztJQUNyQyxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0VBQ2Y7O0FBRUY7SUFDSSxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SGFobWxldCZkaXNwbGF5PXN3YXAnKTtcXG46cm9vdCB7XFxuICAgIC0tbmF2YmFyLWNvbG9yOiAjMTk4MWU2O1xcbiAgICAtLXNpZGViYXItY29sb3I6ICM0NzlhZWI7XFxuICAgIC0taG92ZXItY29sb3I6ICMxNzc0Y2Y7XFxuICAgIC0taGFtbGV0LWZvbnQ6ICdIYWhtbGV0Jywgc2VyaWY7XFxuICAgIC0tY2FuY2VsLWJ0bi1jb2xvcjogI2ZmMzMzMztcXG4gICAgLS1zdWJtaXQtYnRuLWNvbG9yOiAjMWFmZjhjO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogdmFyKC0taGFtbGV0LWZvbnQpO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtaW4td2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDJmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAyZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICAgICAgXFxcIm5hdmJhciBuYXZiYXJcXFwiXFxuICAgICAgICBcXFwic2lkZWJhciBpbmJveFxcXCI7XFxufVxcblxcbi5uYXZiYXIge1xcbiAgICBncmlkLWFyZWE6IG5hdmJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2YmFyLWNvbG9yKTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbn1cXG5cXG4ubmF2YmFyLXRleHQge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZWJhci1jb2xvcik7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIHBhZGRpbmc6IDEwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNXB4IDFmcjtcXG59XFxuXFxuLnNpZGViYXItY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG9maXQsIDFmcik7XFxuXFxuICAgIGdyaWQtcm93OiAyO1xcbn1cXG4uc2lkZWJhci1pdGVtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIG1heC1oZWlnaHQ6NTBweDtcXG4gICAgd2lkdGg6MTAwJTtcXG59XFxuXFxuLnNpZGViYXItaXRlbSA+IC5pbmJveC1pdGVtIHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG59XFxuLnNpZGViYXItaXRlbTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXG59XFxuXFxuLmluYm94LWNvbnRhaW5lciB7XFxuICAgIGdyaWQtYXJlYTogaW5ib3g7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbmJveC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5pbmJveC1pdGVtIHtcXG4gICAgbWluLXdpZHRoOiA3MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tbmF2YmFyLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuLmluYm94LWl0ZW06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmZvcm0tcG9wdXAsIC5hZGQtaXRlbS1mb3JtIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcGFkZGluZzogMTJweDtcXG4gIH1cXG5cXG4uZm9ybS1jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcbiAgICBcXG59XFxuXFxuaW5wdXRbdHlwZT10ZXh0XSB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgd2lkdGg6IDk3JTtcXG4gICAgaGVpZ2h0OiAxMCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciAuc3VibWl0LWJ0biwgLml0ZW0tc3VibWl0LWJ0biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Ym1pdC1idG4tY29sb3IpO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbi1ib3R0b206MTBweDtcXG4gICAgb3BhY2l0eTogMC44O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbn1cXG5cXG4uZm9ybS1jb250YWluZXIgLmNhbmNlbC1idG4sIC5pdGVtLWNhbmNlbC1idG4ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhbmNlbC1idG4tY29sb3IpO1xcbiAgICBwYWRkaW5nOiAxNnB4IDIwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDo1MCU7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxuICAgIG9wYWNpdHk6IDAuODtcXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcXG59XFxuXFxuLml0ZW0tZm9ybS1wb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pdGVtLWZvcm0tcG9wdXAtYWN0aXZlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWRlYmFyLWNvbG9yKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMzUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICAgIHBhZGRpbmc6IDIlO1xcbn1cXG5cXG4uaXRlbS1mb3JtLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmNvbnN0IGNyZWF0ZVBhZ2UgPSAoKCk9PiB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb25zdCBjcmVhdGVOYXZCYXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2YmFyJyk7XG5cbiAgICAgICAgY29uc3QgbmF2QmFyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBuYXZCYXJUZXh0LmNsYXNzTGlzdC5hZGQoJ25hdmJhci10ZXh0Jyk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBhZGROYXZCYXJUZXh0KCk7XG5cbiAgICAgICAgbmF2QmFyVGV4dC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdkJhclRleHQpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKG5hdkJhcik7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlU2lkZUJhciA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2lkZUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHNpZGViYXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNpZGViYXJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItY29udGVudCcpO1xuXG4gICAgICAgIGNvbnN0IGluYm94ID0gYWRkVGFza0J1dHRvbihcIkluYm94XCIpO1xuICAgICAgICBjb25zdCB0b2RheSA9IGFkZFRhc2tCdXR0b24oXCJUb2RheVwiKTtcbiAgICAgICAgY29uc3QgdGhpc1dlZWsgPSBhZGRUYXNrQnV0dG9uKFwiVGhpcyBXZWVrXCIpO1xuXG4gICAgICAgIGNvbnN0IHNpZGViYXJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgc2lkZWJhckhlYWRpbmcudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgICAgIHNpZGViYXJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJpbmJveC1oZWFkZXJcIik7XG5cbiAgICAgICAgY29uc3QgdGFza0J1dHRvbiA9IGFkZFRhc2tCdXR0b24oXCJBZGQgUHJvamVjdFwiKTtcbiAgICAgICAgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtc2lkZWJhci1mb3JtJyk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBjcmVhdGVGb3Jtcy5jcmVhdGVQcm9qZWN0Rm9ybSgpO1xuXG4gICAgICAgIHNpZGViYXJDb250ZW50LmFwcGVuZENoaWxkKGluYm94KTtcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kYXkpO1xuICAgICAgICBzaWRlYmFyQ29udGVudC5hcHBlbmRDaGlsZCh0aGlzV2Vlayk7XG4gICAgICAgIHNpZGViYXJDb250ZW50LmFwcGVuZENoaWxkKHNpZGViYXJIZWFkaW5nKTtcbiAgICAgICAgc2lkZWJhckNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0J1dHRvbik7XG4gICAgICAgIHNpZGViYXJDb250ZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgICAgIHNpZGVCYXIuYXBwZW5kQ2hpbGQoc2lkZWJhckNvbnRlbnQpO1xuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHNpZGVCYXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZFNpZGViYXJJdGVtID0gKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgbmV3SXRlbSA9IGFkZFRhc2tCdXR0b24oaXRlbSk7XG4gICAgICAgIGNvbnN0IHNpZGViYXJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXItY29udGVudCcpO1xuICAgICAgICBzaWRlYmFyQ29udGVudC5hcHBlbmRDaGlsZChuZXdJdGVtKTtcbiAgICB9XG4gICAgIFxuICAgIGNvbnN0IGFkZEluYm94SXRlbSA9IChpbmJveCwgaGVhZGVyKSA9PiB7XG4gICAgICAgIC8vIGNvbnN0IG5ld0l0ZW0gPSBhZGRJbmJveEJ1dHRvbihpdGVtKTtcbiAgICAgICAgLy8gY29uc3QgaW5ib3hDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmJveC1jb250YWluZXJcIik7XG4gICAgICAgIC8vIGluYm94Q29udGVudC5hcHBlbmRDaGlsZChuZXdJdGVtKTtcblxuICAgICAgICBjb25zdCB0YXNrQnV0dG9uID0gYWRkSW5ib3hCdXR0b24oXCJBZGQgVGFza1wiKTtcbiAgICAgICAgdGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFza2Zvcm0nKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGNyZWF0ZUZvcm1zLmNyZWF0ZVRhc2tGb3JtKCk7XG5cbiAgICAgICAgaW5ib3guYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgaW5ib3guYXBwZW5kQ2hpbGQodGFza0J1dHRvbik7XG4gICAgICAgIGluYm94LmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZUluYm94ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpbmJveC5jbGFzc0xpc3QuYWRkKCdpbmJveC1jb250YWluZXInKTtcbiAgICAgICBcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci1oZWFkZXInKTtcbiAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuXG4gICAgICAgIGNvbnN0IHRhc2tCdXR0b24gPSBhZGRJbmJveEJ1dHRvbihcIkFkZCBUYXNrXCIpO1xuICAgICAgICB0YXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrZm9ybScpO1xuICAgICAgICBjb25zdCBmb3JtID0gY3JlYXRlRm9ybXMuY3JlYXRlVGFza0Zvcm0oKTtcbiAgICAgICAgXG5cbiAgICAgICAgaW5ib3guYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgaW5ib3guYXBwZW5kQ2hpbGQodGFza0J1dHRvbik7XG4gICAgICAgIGluYm94LmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoaW5ib3gpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZE5hdkJhclRleHQoKSB7XG4gICAgICAgIGNvbnN0IG5hdmJhclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBuYXZiYXJUZXh0LnRleHRDb250ZW50ID0gXCJUby1EbyBMaXN0XCI7XG4gICAgICAgIHJldHVybiBuYXZiYXJUZXh0O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBhZGRUYXNrQnV0dG9uKGhlYWRpbmcpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyLWl0ZW0nKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gaGVhZGluZztcblxuICAgICAgICByZXR1cm4gb3B0aW9uO1xuXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkSW5ib3hCdXR0b24oaGVhZGluZykge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2luYm94LWl0ZW0nKTtcbiAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gaGVhZGluZztcblxuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH1cblxuXG4gICAgcmV0dXJuIHsgY3JlYXRlTmF2QmFyLCBjcmVhdGVTaWRlQmFyLCBjcmVhdGVJbmJveCwgYWRkU2lkZWJhckl0ZW0sIGFkZEluYm94SXRlbSB9O1xufSkoKTtcblxuY29uc3QgY3JlYXRlRm9ybXMgPSAoKCkgPT4ge1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm0oKSB7XG4gICAgICAgIC8vIENyZWF0ZSBGb3JtIFBvcHVwIGNvbnRhaW5lclxuICAgICAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGZvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS1wb3B1cCcpO1xuXG4gICAgICAgIC8vIENyZWF0ZXMgRm9ybSBDb250YWluZXJcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgZm9ybS5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIC8vIENyZWF0ZXMgRm9ybSBDb250ZW50c1xuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIFwidGV4dFwiKTtcbiAgICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ2l0ZW0tbmFtZScpO1xuICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdmb3JtLXRleHQnKVxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBzdWJtaXRCdG4uY2xhc3NMaXN0LmFkZCgnc3VibWl0LWJ0bicpO1xuICAgICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgICAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgXCJzdWJtaXRcIik7XG4gICAgICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgXCJTdWJtaXRcIik7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgICAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsIFwiQ2FuY2VsXCIpO1xuICAgICAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnY2FuY2VsLWJ0bicpO1xuXG4gICAgICAgIC8vIEFwcGVuZHMgdG8gRE9NXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdEJ0bik7XG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcbiAgICAgICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgICAgICByZXR1cm4gZm9ybUNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrRm9ybSgpIHtcbiAgICAgICAgLy8gQ3JlYXRlcyBGb3JtIFBvcHVwIENvbnRhaW5lclxuICAgICAgICBjb25zdCB0YXNrRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtLWZvcm0tcG9wdXAnKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICB0YXNrRm9ybS5jbGFzc0xpc3QuYWRkKCdpdGVtLWZvcm0tY29udGFpbmVyJyk7XG5cbiAgICAgICAgLy9NYW5hZ2VzIFRpdGxlIGlucHV0IGFyZWFcbiAgICAgICAgY29uc3QgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIFwidGV4dFwiKTtcbiAgICAgICAgdGFza0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIFwiaXRlbS1uYW1lXCIpO1xuICAgICAgICB0YXNrSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIFwidGl0bGVcIik7XG4gICAgICAgIHRhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgXCJUaXRsZVwiKTtcbiAgICAgICAgdGFza0lucHV0LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZm9ybS10ZXh0Jyk7XG5cbiAgICAgICAgLy9NYW5hZ2VzIERlc2NyaXB0aW9uIElucHV0IEFyZWFcbiAgICAgICAgY29uc3QgdGFza0Rlc2NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRhc2tEZXNjSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgXCJ0ZXh0XCIpO1xuICAgICAgICB0YXNrRGVzY0lucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgIHRhc2tEZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgICAgIHRhc2tEZXNjSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIFwiRGVzY3JpcHRpb24gKE9wdGlvbmFsKVwiKVxuICAgICAgICB0YXNrRGVzY0lucHV0LmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZm9ybS10ZXh0Jyk7XG5cbiAgICAgICAgLy9NYW5hZ2VzIFByaW9yaXR5IERhdGFsaXN0IGFyZWFcbiAgICAgICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdsaXN0JywgXCJwcmlvcml0aWVzXCIpO1xuICAgICAgICBwcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBcIlByaW9yaXR5XCIpXG4gICAgICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIFwicHJpb3JpdGllc1wiKVxuICAgICAgICBjb25zdCBwcmlvcml0eUlucHV0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkYXRhbGlzdFwiKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dExpc3Quc2V0QXR0cmlidXRlKCdpZCcsIFwicHJpb3JpdGllcy1kYXRhbGlzdFwiKVxuICAgICAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTG93XCIpO1xuICAgICAgICBjb25zdCBtZWRQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgIG1lZFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLCBcIk1lZGl1bVwiKTtcbiAgICAgICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndmFsdWUnLFwiSGlnaFwiKTtcbiAgICAgICAgcHJpb3JpdHlJbnB1dExpc3QuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xuICAgICAgICBwcmlvcml0eUlucHV0TGlzdC5hcHBlbmRDaGlsZChtZWRQcmlvcml0eSk7XG4gICAgICAgIHByaW9yaXR5SW5wdXRMaXN0LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgLy9NYW5hZ2VzIERhdGEgQXJlYVxuICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHRhc2tEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsIFwiZGF0ZVwiKTtcbiAgICAgICAgdGFza0RhdGUuc2V0QXR0cmlidXRlKCduYW1lJywgXCJkdWUtZGF0ZVwiKTtcbiAgICAgICAgdGFza0RhdGUuc2V0QXR0cmlidXRlKCdpZCcsIFwiZHVlRGF0ZVwiKTtcblxuICAgICAgICAvLyBNYW5hZ2VzIGJ1dHRvbiBjcmVhdGlvbiBmb3IgRm9ybVxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgc3VibWl0QnRuLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tc3VibWl0LWJ0bicpO1xuICAgICAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuICAgICAgICBzdWJtaXRCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgXCJzdWJtaXRcIik7XG4gICAgICAgIHN1Ym1pdEJ0bi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgXCJTdWJtaXRcIik7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgICAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd2YWx1ZScsIFwiQ2FuY2VsXCIpO1xuICAgICAgICBjYW5jZWxCdG4uY2xhc3NMaXN0LmFkZCgnaXRlbS1jYW5jZWwtYnRuJyk7XG5cbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0lucHV0KTtcbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQodGFza0Rlc2NJbnB1dCk7XG4gICAgICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuICAgICAgICB0YXNrRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eUlucHV0TGlzdCk7XG4gICAgICAgIHRhc2tGb3JtLmFwcGVuZENoaWxkKHRhc2tEYXRlKTtcbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnRuKTtcbiAgICAgICAgdGFza0Zvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnRuKTtcblxuICAgICAgICB0YXNrRm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRm9ybSk7XG4gICAgICAgIHJldHVybiB0YXNrRm9ybUNvbnRhaW5lcjtcbiAgICB9XG4gICAgcmV0dXJuIHtjcmVhdGVQcm9qZWN0Rm9ybSwgY3JlYXRlVGFza0Zvcm19O1xufSkoKTtcblxuZXhwb3J0IHsgY3JlYXRlUGFnZSB9XG4iLCJpbXBvcnQge2NyZWF0ZVBhZ2UgfSBmcm9tICcuL0RPTWNvbnN0cnVjdG9yLmpzJztcbmNvbnN0IHN3aXRjaFRhYnMgPSAoKCk9PiB7XG5cbiAgICBjb25zdCBzd2l0Y2hUYWIgPSAoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC1jb250YWluZXInKTtcbiAgICAgICAgICAgIC8vIGluYm94LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBpZiAoaXRlbSA9PT0gXCJJbmJveFwiKSB7XG4gICAgICAgICAgICAgICAgaW5ib3guaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICAgICAgICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItaGVhZGVyJyk7XG4gICAgICAgICAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgICAgICAgICAvLyBpbmJveC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZVBhZ2UuYWRkSW5ib3hJdGVtKGl0ZW0pO1xuICAgICAgICAgICAgICAgIGNyZWF0ZVBhZ2UuYWRkSW5ib3hJdGVtKGluYm94LCBoZWFkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5ib3guaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgICAgIGluYm94LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgICAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyLWhlYWRlcicpO1xuICAgICAgICAgICAgaGVhZGVyLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgICAgIGluYm94LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgICAgICBjcmVhdGVQYWdlLmFkZEluYm94SXRlbShpbmJveCwgaGVhZGVyKTtcbiAgICB9XG5cbiAgICBjb25zdCBhc3NpZ25MaW5rcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNpZGViYXItaXRlbVwiKTtcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge2l0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIHN3aXRjaFRhYihpdGVtLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICAgIH0pfSk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrZm9ybScpO1xuICAgICAgICBjb25zdCB0YXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrZm9ybScpO1xuICAgICAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWZvcm0tcG9wdXAnKTtcbiAgICAgICAgY29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1mb3JtLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0YXNrQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJpdGVtLWZvcm0tcG9wdXBcIik7XG4gICAgICAgICAgICB0YXNrRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiaXRlbS1mb3JtLXBvcHVwLWFjdGl2ZVwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtc2lkZWJhci1mb3JtJyk7XG4gICAgICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wb3B1cCcpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWJ0blwiKTtcbiAgICAgICAgY2FuY2VsYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IGl0ZW1DYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tY2FuY2VsLWJ0blwiKTtcbiAgICAgICAgaXRlbUNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGFza0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaXRlbS1mb3JtLXBvcHVwXCIpO1xuICAgICAgICAgICAgdGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcIml0ZW0tZm9ybS1wb3B1cC1hY3RpdmVcIik7XG5cbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1idG5cIik7XG4gICAgICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tdGV4dCcpXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY3JlYXRlUGFnZS5hZGRTaWRlYmFySXRlbShmb3JtLnZhbHVlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBvcHVwJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgc3dpdGNoVGFicy5hc3NpZ25MaW5rcygpO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGl0ZW1TdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tc3VibWl0LWJ0blwiKTtcbiAgICAgICAgaXRlbVN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0aWVzXCIpLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IHRvRG8uY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld1Rhc2spO1xuICAgICAgICAgICAgdGFza0Zvcm1Db250YWluZXIucmVzZXQoKVxuXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHsgc3dpdGNoVGFiLCBhc3NpZ25MaW5rcyB9XG59KSgpO1xuXG5leHBvcnQge3N3aXRjaFRhYnN9OyIsImltcG9ydCB7Y3JlYXRlUGFnZSB9IGZyb20gJy4vRE9NY29uc3RydWN0b3IuanMnO1xuXG5jb25zdCB0b0RvID0gKCgpID0+IHtcbiAgICBcbiAgICBjb25zdCB0b0RvSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHl9O1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0b0RvSXRlbSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG5cbiAgICB9XG5cbiAgICByZXR1cm4ge2NyZWF0ZVRhc2t9O1xufSkoKTtcbmV4cG9ydCB7IHRvRG8gfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQge2NyZWF0ZVBhZ2V9IGZyb20gJy4vRE9NY29uc3RydWN0b3IuanMnO1xuaW1wb3J0IHtzd2l0Y2hUYWJzfSBmcm9tICcuL3N3aXRjaFRhYnMuanMnO1xuaW1wb3J0IHsgdG9EbyB9IGZyb20gJy4vdG9Eb0NvbnN0cnVjdG9yLmpzJztcblxuY29uc3QgY29uc3RydWN0UGFnZSA9ICgoKSA9PnsgXG4gICAgY3JlYXRlUGFnZS5jcmVhdGVOYXZCYXIoKTtcbiAgICBjcmVhdGVQYWdlLmNyZWF0ZVNpZGVCYXIoKTtcbiAgICBjcmVhdGVQYWdlLmNyZWF0ZUluYm94KCk7XG5cbiAgICBzd2l0Y2hUYWJzLmFzc2lnbkxpbmtzKCk7XG4gICAgLy8gYWRkRXZlbnRMaXN0ZW5lcnMoKTtcblxuICAgIC8vIGZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIC8vICAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrZm9ybScpO1xuICAgIC8vICAgICBjb25zdCB0YXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC10YXNrZm9ybScpO1xuICAgIC8vICAgICBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtLWZvcm0tcG9wdXAnKTtcbiAgICAvLyAgICAgY29uc3QgdGFza0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbS1mb3JtLWNvbnRhaW5lcicpO1xuXG4gICAgLy8gICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICB0YXNrQnRuLmNsYXNzTGlzdC50b2dnbGUoXCJpdGVtLWZvcm0tcG9wdXBcIik7XG4gICAgLy8gICAgICAgICB0YXNrRm9ybS5jbGFzc0xpc3QudG9nZ2xlKFwiaXRlbS1mb3JtLXBvcHVwLWFjdGl2ZVwiKTtcbiAgICAvLyAgICAgfSk7XG5cbiAgICAvLyAgICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtc2lkZWJhci1mb3JtJyk7XG4gICAgLy8gICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1wb3B1cCcpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgLy8gICAgIH0pO1xuXG4gICAgLy8gICAgIGNvbnN0IGNhbmNlbGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWJ0blwiKTtcbiAgICAvLyAgICAgY2FuY2VsYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgLy8gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tcG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgLy8gICAgIH0pO1xuXG4gICAgLy8gICAgIGNvbnN0IGl0ZW1DYW5jZWxCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tY2FuY2VsLWJ0blwiKTtcbiAgICAvLyAgICAgaXRlbUNhbmNlbEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KSA9PiB7XG4gICAgLy8gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICAgICAgdGFza0J0bi5jbGFzc0xpc3QucmVtb3ZlKFwiaXRlbS1mb3JtLXBvcHVwXCIpO1xuICAgIC8vICAgICAgICAgdGFza0Zvcm0uY2xhc3NMaXN0LnJlbW92ZShcIml0ZW0tZm9ybS1wb3B1cC1hY3RpdmVcIik7XG5cbiAgICAvLyAgICAgfSlcblxuICAgIC8vICAgICBjb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1idG5cIik7XG4gICAgLy8gICAgIHN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgLy8gICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tdGV4dCcpXG4gICAgLy8gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICAgICAgY3JlYXRlUGFnZS5hZGRTaWRlYmFySXRlbShmb3JtLnZhbHVlKTtcbiAgICAvLyAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLXBvcHVwJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIC8vICAgICAgICAgc3dpdGNoVGFicy5hc3NpZ25MaW5rcygpO1xuICAgIC8vICAgICB9KVxuXG4gICAgLy8gICAgIGNvbnN0IGl0ZW1TdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLml0ZW0tc3VibWl0LWJ0blwiKTtcbiAgICAvLyAgICAgaXRlbVN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCk9PiB7XG4gICAgLy8gICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vICAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuICAgIC8vICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgIC8vICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlRGF0ZVwiKS52YWx1ZTtcbiAgICAvLyAgICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0aWVzXCIpLnZhbHVlO1xuICAgIC8vICAgICAgICAgY29uc3QgbmV3VGFzayA9IHRvRG8uY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KTtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKG5ld1Rhc2spO1xuICAgIC8vICAgICAgICAgdGFza0Zvcm1Db250YWluZXIucmVzZXQoKVxuXG4gICAgLy8gICAgIH0pXG4gICAgLy8gfVxuXG4gICAgXG59KSgpO1xuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==