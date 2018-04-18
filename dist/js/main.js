/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(5);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

;
(() => {
    'use strict';

    /*
    *Variables****************************************************************
    * */

    /*wave top*/
    const waveTop = document.querySelector('.wave_top');
    /*input*/
    const arrInput = document.querySelectorAll('.input');
    /*timer*/
    const timer = document.querySelector('.timer');
    /*services*/
    const services = document.querySelectorAll('.services .services_elem');

    /*
    * Implementation****************************************************************
    * */

    /*wave top*/
    if (waveTop !== null) {
        // (require('./modules/animeTop'))(waveTop);
    }

    /*input*/
    if (arrInput.length > 0) {
        (__webpack_require__(2))(arrInput);
    }


    /*timer*/
    if (timer !== null) {
        (__webpack_require__(3))(timer);
    }

    /*services*/
    if (services.length > 0) {
        (__webpack_require__(4))(services);
    }


})();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = (arr) => {

    arr.forEach((elem) => {
        const input = elem.querySelector('input');
        const placeholder = elem.querySelector('.placeholder');
        const widthPlaceholder = placeholder.clientWidth + 17;

        input.addEventListener('focus', function () {
            elem.classList.add('focus');
            placeholder.style.left = `calc(100% - ${widthPlaceholder}px)`;
            this.style.paddingRight = `${widthPlaceholder}px`;
        });
        input.addEventListener('blur', function () {
            if (this.value.length === 0) {
                elem.classList.remove('focus');
                placeholder.removeAttribute('style');
                this.removeAttribute('style');
            }
        });

        placeholder.addEventListener('click', function () {
            elem.parentElement.classList.add('focus');
            placeholder.style.left = `calc(100% - ${widthPlaceholder}px)`;
            input.style.paddingRight = `${widthPlaceholder}px`;
            input.focus();
        });

    });
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = (wrap) => {
    let [dateStart, timeStart] = wrap.getAttribute('data-start').split(' ');
    dateStart = dateStart.split('.');
    timeStart = timeStart.split('.');
    const days = wrap.querySelector('.days .timer_numeral span');
    const hour = wrap.querySelector('.hour .timer_numeral span');
    const minutes = wrap.querySelector('.minutes .timer_numeral span');
    const seconds = wrap.querySelector('.seconds .timer_numeral span');
    let date = new Date(+dateStart[2], dateStart[1] - 1, +dateStart[0], +timeStart[0], +timeStart[1]) - new Date();
    let daysPre = '0', hourPre = '0', minutesPre = '0', secondsPre = '0', daysOut = null, hourOut = null,
        minutesOut = null, secondsOut = null;

    function toTime(ms) {
        let d, h, m, s;
        if (isNaN(ms)) {
            return {};
        }
        d = ms / (1000 * 60 * 60 * 24);
        h = (d - ~~d) * 24;
        m = (h - ~~h) * 60;
        s = (m - ~~m) * 60;
        return [setZero(~~d), setZero(~~h), setZero(~~m), setZero(~~s)];
    }

    function setZero(str) {
        return (+str <= 9) ? '0' + str : str;
    }

    function getTime() {
        return toTime(new Date(+dateStart[2], dateStart[1] - 1, +dateStart[0], +timeStart[0], +timeStart[1]) - new Date());
    }

    function setActive(arr) {

        if (arr[0] !== daysPre) {
            days.parentElement.classList.add('active');
            clearTimeout(daysOut);
            daysOut = setTimeout(() => {
                days.parentElement.classList.remove('active');
            }, 300);
            days.innerHTML = daysPre = arr[0];
        }
        if (arr[1] !== hourPre) {
            hour.parentElement.classList.add('active');
            clearTimeout(hourOut);
            hourOut = setTimeout(() => {
                hour.parentElement.classList.remove('active');
            }, 300);
            hour.innerHTML = hourPre = arr[1];
        }
        if (arr[2] !== minutesPre) {
            minutes.parentElement.classList.add('active');
            clearTimeout(minutesOut);
            minutesOut = setTimeout(() => {
                minutes.parentElement.classList.remove('active');
            }, 300);
            minutes.innerHTML = minutesPre = arr[2];
        }
        if (arr[3] !== secondsPre) {
            seconds.parentElement.classList.add('active');
            clearTimeout(secondsOut);
            secondsOut = setTimeout(() => {
                seconds.parentElement.classList.remove('active');
            }, 300);
            seconds.innerHTML = secondsPre = arr[3];
        }
    }

    if (date > 0) {
        setInterval(() => {
            setActive(getTime());
        }, 1000);
    }

};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = (arrElem) => {
    for (let i = 0; i < arrElem.length; i++) {
        let category = arrElem[i].querySelector('.services_elem_category');
        let categoryArr = category.querySelectorAll('.services_elem_category .sec_elem');
        let boll = true;

        arrElem[i].addEventListener('click', function (even) {
            even.preventDefault();
            category.style.left = `${this.getBoundingClientRect().left - this.getBoundingClientRect().width}px`;
            arrElem[i].classList.add('active');
            if (even.target.classList.contains('services_elem')) {
                boll = true;
            }
        });

        arrElem[i].addEventListener('mouseleave', function (even) {
            even.preventDefault();
            if (boll === true) {
                arrElem[i].classList.remove('active');
            }
        });

        for (let e = 0; e < categoryArr.length; e++) {
            let closeMore = categoryArr[e].querySelector('.close_more');

            categoryArr[e].addEventListener('click', function (even) {
                even.preventDefault();
                categoryArr[e].classList.add('active');
                boll = false;
            });

            if (closeMore !== null) {
                closeMore.addEventListener('click', function (even) {
                    even.preventDefault();
                    setTimeout(() => {
                        categoryArr[e].classList.remove('active');
                        arrElem[i].classList.remove('active');
                        boll = true;
                    }, 50)
                })
            }


        }


    }

};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map