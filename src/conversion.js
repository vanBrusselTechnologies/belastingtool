const {letterTypes1} = require("./constants");

/**
 * @param {string} reference
 * @param {string} letter
 * @param {number} fullYear
 * @param {string} period
 * @param {string} statusCode
 * @returns {string}
 */
module.exports.getConversion = function (reference, letter, fullYear, period, statusCode) {
    const letterFirst = letter.substring(0, 1);
    const year = fullYear % 10;
    const sub = getSub(reference, letter);
    const slot = getSlot(reference, letter);
    if (letterTypes1.includes(letter)) return `${letterFirst}.${sub}.${year}${period}${slot}`;
    switch (letterFirst) {
        case "H":
        case "V":
            return `${letterFirst}.${year}${statusCode}.${slot}`;
        case "T":
            return `${letterFirst}.${fullYear % 100}.${statusCode}.${slot}`;
        case "M":
            return `${letterFirst}.${year}.${period}`;
        case "W":
            return `${letterFirst}.${year}${statusCode}.${slot}.${period}`;
    }
    return "";
}

/**
 * @param {string} reference
 * @param {string} letter
 * @returns {string}
 */
function getSub(reference, letter) {
    if (letterTypes1.includes(letter)) return reference.substring(11, 13);
    return "";
}

/**
 * @param {string} reference
 * @param {string} letter
 * @returns {string}
 */
function getSlot(reference, letter) {
    const letterFirst = letter.substring(0, 1);
    switch (letterFirst) {
        case "H":
            return reference.substring(14, 16);
        case "T":
            return reference.substring(13, 16) + letter.substring(letter.length - 1);
        case "V":
            return reference.substring(11, 15);
        case "W":
            return reference.substring(13, 15);
    }
    return "";
}