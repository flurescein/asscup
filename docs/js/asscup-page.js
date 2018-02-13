/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var asscup = __webpack_require__(1);

	var inputArea = document.getElementById('input-area'),
	    outputArea = document.getElementById('output-area');

	inputArea.focus();

	inputArea.addEventListener('input', function () {
	    outputArea.innerHTML = asscup.format(inputArea.value).replace(/\n/g, '<br>');
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	const dictionary = __webpack_require__(2)

	module.exports = class Asscup {
	    /**
	     * Takes the source string and returns it as formatted.
	     * @param {string} source
	     * @returns {string}
	     * @public
	     */    
	    static format(source, language = 'EN') {
	        const cursedSource = this.insertCurses(source, language)
	        return this.formatSource(cursedSource)
	    }

	    /**
	     * Inserts curses in the source string.
	     * @param {string} source 
	     * @param {string} language
	     * @returns {string}
	     * @private
	     */
	    static insertCurses(source, language) {
	        for (const token in this.insertTokens) {
	            let regexp = new RegExp(`${token}`, 'g')
	            source = source.replace(regexp, () => 
	                this.getRandomFromArray(dictionary[language][this.insertTokens[token]]))
	        }

	        return source
	    }

	    /**
	     * Formats characters between format tokens.
	     * @param {string} source
	     * @returns {string}
	     * @private
	     */
	    static formatSource(source) {
	        let currentTokens = {}

	        return source
	            .split('')
	            .map(c => {
	                if (this.formatTokens[c] !== undefined) {
	                    if (currentTokens[c] === undefined) {
	                        currentTokens[c] = this.formatTokens[c]
	                    } else {
	                        delete currentTokens[c]
	                    }

	                    return ''
	                } else {
	                    for (const token in currentTokens) {
	                        c = currentTokens[token](c)
	                    }

	                    return c
	                }
	            })
	            .join('')
	    }

	    /**
	     * Returns random item from array.
	     * @param {Object[]} array 
	     * @returns {Object}
	     * @private
	     */
	    static getRandomFromArray(array) {
	        return array[Math.floor(Math.random() * array.length)]
	    }

	    /**
	     * Constant with insert tokens.
	     * @private
	     */
	    static get insertTokens() {
	        return {
	            '#n': 'noun',
	            '#v': 'verb',
	            '#a': 'adjective',
	            '#s': 'sentence'
	        }
	    }

	    /**
	     * Constant with lettering tokens.
	     * @private
	     */
	    static get formatTokens() {
	        return {
	            '~' : c => c + ' ',
	            '_' : c => ' ' + c + ' ',
	            '^' : c => c.toUpperCase(),
	            '\\': c => c + '.',
	            '*' : c => this.getRandomFromArray(["@", "!", "%", "*", "#", "$"])
	        }
	    }    
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = {"EN":{"noun":["dick","ass","cocksucker","shitass","pee hole","bullshit","whore","virgin","shit","bastard","crap"],"verb":["fucking","pederasty","crocked"],"adjective":["fuck","suck"],"sentence":["Horse pee hole","That’s it, you’re fuckin' dead","Get the fuck away from me","Don’t fuck my brain","Fuck your mother","Prick up your ass","Hard fucking dick"]},"RU":{"noun":["хуй","пизда","говно","вагина","мразь","пидор","залупа"],"verb":["ебаный","блядский","ссаный","объебанный","разъебанный","сраный"],"adjective":["ебать","трахать","сосать","пиздить","срать"],"sentence":["Пошел нахуй, пидор","Соси говно, ублюдок","Я твою мать в рот ебал, мразоебина","Я тебя разъебу так, что ветер в жопе свистеть будет","Хуй тебе в рот","Я тебя обоссу, говноед"]}}

/***/ })
/******/ ]);