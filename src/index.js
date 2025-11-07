const {getBSN} = require("./bsn");
const {isValid} = require("./checksum");
const {getConversion} = require("./conversion");
const data = require("./data");
const {getDescription} = require("./description");
const {getFullYear, getReturnPeriod} = require("./period");
const {getStatus} = require("./status");

module.exports.data = data;
module.exports.getBSN = getBSN;
module.exports.getConversion = getConversion;
module.exports.getDescription = getDescription;
module.exports.getFullYear = getFullYear;
module.exports.getReturnPeriod = getReturnPeriod;
module.exports.getStatus = getStatus;
module.exports.isReferenceValid = isValid;