const fs = require('fs');
const util = require('util');
const writeFileAsync = require('./writeFileAsync');
const readFileAsync = require('./readFileAsync');



async function processFiles(filePaths) {
  for (let filePath of filePaths) {
    try {
      let data = await readFileAsync(filePath, 'utf8');
      data = data.toUpperCase(); 
      const newFilePath = `new_${filePath}`;
      await writeFileAsync(newFilePath, data);
    } catch (error) {
      console.error(`Error processing file ${filePath}:`, error);
    }
  }
}

module.exports = processFiles;
