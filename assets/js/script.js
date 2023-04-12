/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/es6/blocks/catalog.js":
/*!**************************************!*\
  !*** ./assets/es6/blocks/catalog.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getParams__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getParams */ "./assets/es6/blocks/getParams.js");

const catalog = () => {
  let params = (0,_getParams__WEBPACK_IMPORTED_MODULE_0__["default"])();
  function getChilds() {
    let category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : params['category'];
    let out = {};
    cats.forEach((key, item) => {
      if (Array.isArray(item['parent']) && item['parent'].indexOf(category) != -1 || item['parent'] == category) {
        out[key] = item;
      }
    });
    return out;
  }
  function getProducts() {
    let category = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : params['category'];
    let newer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let out = {};
    if (newer) {
      prods.forEach((key, item) => {
        if (item['new']) {
          let currDop = Array.isArray(item['category']) ? cats[item['category'][0]]['dop'] : cats[item['category']]['dop'];
          if (!out[currDop]) out[currDop] = {};
          out[currDop][key] = item;
        }
      });
    } else {
      prods.forEach((key, item) => {
        if (Array.isArray(item['category']) && item['category'].indexOf(category) != -1 || item['category'] == category) {
          out[key] = item;
        }
      });
    }
    return out;
  }
  try {
    //Вывод категорий и продуктов
    const catsOutput = document.querySelectorAll('[data-out-cats]');
    catsOutput && catsOutput.forEach(output => {
      let iter = 0,
        walks = output.getAttribute('data-out-cats');
      for (let i = 0; i < catsKeys.length; i++) {
        let id = catsKeys[i];
        if (walks > 0 && iter >= walks) break;
        if (cats[id]['parent']) continue;
        if (cats[id]['descr'].indexOf("\n") != -1) cats[id]['descr'] = cats[id]['descr'].replace("\n", "<br>");
        output.innerHTML += output.getAttribute('data-temp') || output.getAttribute('data-temp') == 'production' ? `
                <article class="production__item">
                    <a href="./catalog.html?category=${id}" class="production__item-link">
                        <img src="${cats[id]['image']}" alt="${cats[id]['title']}" class="production__item-image">
                    </a>
                    <div class="production__item-text">
                        <h3 class="production__item-title text_fz22 text_fw700 text_blue">
                            <a href="./catalog.html?category=${id}">${cats[id]['title']}</a>
                        </h3>
                        <div class="production__item-descr text_fz20 text_gray">${cats[id]['descr']}</div>
                    </div>
                </article>
                ` : `
                <a href="./catalog.html?category=${id}" class="main__promo-links-item">
                    <div class="box">
                        <h4>${cats[id]['title']}</h4>
                        <img src="${cats[id]['image']}" alt="${cats[id]['title']}">
                    </div>
                </a>
                `;
        iter++;
      }
    });
  } catch (e) {
    console.log(e.stack);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (catalog);

/***/ }),

/***/ "./assets/es6/blocks/getParams.js":
/*!****************************************!*\
  !*** ./assets/es6/blocks/getParams.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const getAllUrlParams = url => {
  let queryString = url ? url.split('?')[1] : window.location.search.slice(1);
  let obj = {};
  if (queryString) {
    queryString = queryString.split('#')[0];
    let arr = queryString.split('&');
    for (let i = 0; i < arr.length; i++) {
      let a = arr[i].split('=');
      let paramNum = undefined;
      let paramName = a[0].replace(/\[\d*\]/, function (v) {
        paramNum = v.slice(1, -1);
        return '';
      });
      let paramValue = typeof a[1] === 'undefined' ? true : a[1];
      paramName = paramName.toLowerCase();
      paramValue = paramValue.toLowerCase();
      if (obj[paramName]) {
        if (typeof obj[paramName] === 'string') {
          obj[paramName] = [obj[paramName]];
        }
        if (typeof paramNum === 'undefined') {
          obj[paramName].push(paramValue);
        } else {
          obj[paramName][paramNum] = paramValue;
        }
      } else {
        obj[paramName] = paramValue;
      }
    }
  }
  return obj;
};
/* harmony default export */ __webpack_exports__["default"] = (getAllUrlParams);

/***/ }),

/***/ "./assets/es6/blocks/other.js":
/*!************************************!*\
  !*** ./assets/es6/blocks/other.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const other = () => {
  try {
    const bodyClickContent = document.querySelectorAll('.body-click-content'),
      bodyClickTarget = document.querySelectorAll('.body-click-target');
    document.body.addEventListener('click', e => {
      if (e.target.classList.contains('body-click-target') || e.target.classList.contains('body-click-close')) {
        if (e.target.getAttribute('data-content')) document.querySelector('.body-click-content[data-content="' + e.target.getAttribute('data-content') + '"]').classList.toggle('active');else e.target.parentElement.classList.remove('active');
        e.target.classList.toggle('active');
      } else if (!e.target.closest('.body-click-content') || e.target.closest('.body-click-content').classList.contains('close-click')) {
        bodyClickContent.forEach(item => item.classList.remove('active'));
        bodyClickTarget.forEach(item => item.classList.remove('active'));
      }
    });
  } catch (e) {
    console.log(e.stack);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (other);

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!****************************!*\
  !*** ./assets/es6/main.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_other__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/other */ "./assets/es6/blocks/other.js");
/* harmony import */ var _blocks_catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/catalog */ "./assets/es6/blocks/catalog.js");


'use strict';
window.addEventListener('DOMContentLoaded', () => {
  (0,_blocks_catalog__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_blocks_other__WEBPACK_IMPORTED_MODULE_0__["default"])();
});
}();
/******/ })()
;
//# sourceMappingURL=script.js.map