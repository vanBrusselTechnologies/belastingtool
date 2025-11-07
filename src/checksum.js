const checksumWeights = [0, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];

/**
 * Checks if the payment reference is a valid Dutch tax payment reference
 * @param {string} paymentReference
 * @returns {boolean}
 */
module.exports.isValid = function (paymentReference) {
    if (paymentReference.length !== 16) return false;
    const checksum = parseInt(paymentReference.substring(0, 1));
    let sum = 0;
    for (let l = 1; l < 16; l++) {
        const num = parseInt(paymentReference.substring(l, l + 1));
        sum += num * checksumWeights[l];
    }
    const rest = sum % 11;
    switch (rest) {
        case 0:
        case 11:
            return checksum === 0;
        case 1:
        case 10:
            return checksum === 1;
        default:
            return checksum === 11 - rest;
    }
}