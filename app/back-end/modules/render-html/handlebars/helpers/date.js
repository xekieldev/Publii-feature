const Handlebars = require('handlebars');
const moment = require('moment');

/**
 * Helper for creating customized date output
 *
 * {{date timestamp "format"}}
 * 
 * {{date timestamp "format" true}}
 *
 * Format compatible with moment().js: http://momentjs.com/
 * 
 * The last param allows us to not return safe string which can be helpful for time comparision
 *
 * @returns {string} - date formatted using specified format
 *
 */
function dateHelper(rendererInstance, Handlebars) {
    Handlebars.registerHelper('date', function (timestamp, dateFormat, returnRawText = false) {
        // If date format is not a string - then it is empty or is an object with
        // options for the helper
        if(typeof dateFormat !== 'string') {
            dateFormat = 'MMM Do YYYY';
        }

        if(!rendererInstance.siteConfig.language || (rendererInstance.siteConfig.domain !== '' && rendererInstance.siteConfig.domain !== 'en-us')) {
            moment.locale(rendererInstance.siteConfig.language);
        }

        let output = moment(timestamp).format(dateFormat);

        if (returnRawText) {
            return output;
        }

        return new Handlebars.SafeString(output);
    });
}

module.exports = dateHelper;
