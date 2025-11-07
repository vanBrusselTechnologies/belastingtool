const {controlVPB} = require('./data');

/**
 * Retrieves the BSN from a Dutch tax payment reference
 * @param {string} paymentReference
 * @returns {string}
 */
module.exports.getBSN = function (paymentReference) {
    const vpbNum = controlVPB.find(c => c.control === paymentReference.substring(9, 11))?.control;
    const bsnStart = paymentReference.substring(9, 11) === vpbNum ? controlVPB.find(c => c.control === vpbNum).conversion + paymentReference.substring(1, 7) : paymentReference.substring(1, 9);
    let sum = 0;
    for (let i = 0; i < 8; i++) {
        sum += bsnStart.substring(i, i + 1) * (9 - i);
    }
    const checksum = sum % 11;
    const bsn = bsnStart + checksum;
    return (bsn.substring(0, 4) + "." + bsn.substring(4, 6) + "." + bsn.substring(6, 9)).substring(0, 11);
}