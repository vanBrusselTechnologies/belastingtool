const {letterTypes1, letterTypes2} = require("./constants");
const {status: dataStatus} = require("./data");

/**
 * @param {string} reference
 * @param {string} letter
 * @returns {{description: string, status: string}}
 */
module.exports.getStatus = function (reference, letter) {
    if (letterTypes1.includes(letter)) return {status: "", description: ""};
    const statusCode = getStatusCode(reference, letter);
    return dataStatus.find(s => s.status === statusCode);
}

/**
 * @param {string} reference
 * @param {string} letter
 * @returns {string}
 */
function getStatusCode(reference, letter) {
    const letterFirst = letter.substring(0, 1);
    if (letterTypes1.includes(letter)) return "";
    if (letterTypes2.includes(letterFirst)) return reference.substring(12, 13);
    if (letterFirst === "V") return reference.substring(8, 9);
    return "";
}