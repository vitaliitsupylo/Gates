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
        (require('./modules/input'))(arrInput);
    }


    /*timer*/
    if (timer !== null) {
        (require('./modules/timer'))(timer);
    }

    /*services*/
    if (services.length > 0) {
        (require('./modules/services'))(services);
    }


})();
