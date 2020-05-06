const hbs = require('hbs')


hbs.registerHelper( 'getAnio', () => new Date())

// capitaliza any phrase 
/**
@param {string} text - in text any phase to capitalize 
 */
hbs.registerHelper( 'capitalize', text => {

    const textNew = text.split(' ') 
        .map( bytes => `${bytes[0]
                    .toUpperCase()}${bytes.substring(1).toLowerCase()}`
        )
        .join(' ')
        return textNew

})