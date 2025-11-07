const {getBSN} = require("./bsn");
const {getConversion} = require("./conversion");
const {types} = require("./data");
const {getFullYear, getReturnPeriod} = require("./period");
const {getStatus} = require("./status");

/**
 * Converts a Dutch tax payment reference into a structured description with relevant data.
 * @param {string} paymentReference
 * @param {number} paymentYear
 * @return {Promise<string | undefined>}
 */
module.exports.getDescription = async function (paymentReference, paymentYear = new Date(Date.now()).getFullYear()) {
    const bsn = getBSN(paymentReference);
    /** @type {{letter: string, description: string, short: string, type: string, sortCode: string}} */
    const type = types.find(t => t.sortCode === paymentReference.substring(9, 11) || t.sortCode === paymentReference.substring(9, 10));
    if (!type) return undefined;
    const letter = type.letter;
    const fullYear = getFullYear(paymentReference, letter, paymentYear);
    /** @type {{period: string, description: string, short: string}}*/
    const returnPeriod = getReturnPeriod(paymentReference, letter);
    /** @type {{description: string, status: string}} */
    const status = getStatus(paymentReference, letter);
    if (returnPeriod == null || status == null) return undefined;
    const conversion = getConversion(paymentReference, letter, fullYear, returnPeriod.period, status.status);
    const assessmentNumber = `${bsn}.${conversion}`;
    const description = `${status.description} ${type.description} ${returnPeriod.description} ${fullYear}`.trim();

    return `${assessmentNumber}\n${description}`;
}