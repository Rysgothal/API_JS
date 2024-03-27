const hashMD5 = require("js-md5");

const salting = '#$00110%&*^@!00100';

function getHashMD5(stringValue) {
    return hashMD5.md5(stringValue + salting).toString();
}

module.exports = {
    getHashMD5: getHashMD5
};
