const dictionary = require(__dirname + '/dictionary.json')

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