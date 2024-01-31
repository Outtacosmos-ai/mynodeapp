const fs = require("fs"); //importing fs module
const util = require("util"); // importing util module

const writeFileAsync = util.promisify(fs.writeFile);

module.exports = writeFileAsync;
