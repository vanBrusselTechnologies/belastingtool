const {letterTypes1, letterTypes2, letterTypes3} = require("./constants");
const {period: returnPeriods} = require("./data");

/**
 * Extracts the year from a Dutch tax payment reference.
 * @param {string} reference
 * @param {string} letter
 * @param {number} year
 * @returns {number}
 */
module.exports.getFullYear = function (reference, letter, year = new Date(Date.now()).getFullYear()) {
    const yString = getYear(reference, letter);
    if (yString === '') return 0;
    const y = parseInt(yString);
    const decade = Math.floor(year / 10) * 10;
    if (decade + y > year + 1) return decade - 10 + y;
    return decade + y;
}

/**
 * @param {string} reference
 * @param {string} letter
 * @returns {string}
 */
function getYear(reference, letter) {
    const letterFirst = letter.substring(0, 1);
    if (letterTypes1.includes(letter)) return reference.substring(10, 11);
    if (letterTypes2.includes(letterFirst)) return reference.substring(11, 12);
    if (letterFirst === "V") return reference.substring(7, 8);
    return "";
}

/**
 * Extracts the period from a Dutch tax payment reference.
 * @param {string} reference
 * @param {string} letter
 * @returns {{period: string, description: string, short: string}}
 */
module.exports.getReturnPeriod = function (reference, letter) {
    if (letter === "H" || letter === "V") return {period: '', description: '', short: ''};
    const period = getPeriod(reference, letter);
    return returnPeriods.find(p => p.period === period);
}

/**
 * @param {string} reference
 * @param {string} letter
 * @returns {string}
 */
function getPeriod(reference, letter) {
    const letterFirst = letter.substring(0, 1);
    if (letterTypes1.includes(letter)) return reference.substring(13, 16);
    if (letterTypes3.includes(letterFirst)) return reference.substring(reference.length - 1);
    return '';
}