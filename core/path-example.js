const path = require('path');

console.log(path.dirname(__filename))
console.log(path.basename(__filename))

const pathVariable = path.parse(__filename);

console.log(pathVariable)
console.log(pathVariable.ext)

const osExamplePath = path.join(__dirname, 'os-example.js');

console.log(osExamplePath)