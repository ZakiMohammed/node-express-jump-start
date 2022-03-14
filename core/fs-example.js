const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'files', 'file.txt');

// avoid using sync functions
// fs.writeFileSync(filePath, 'Hello World')

// callback: a function passed as parameter to another function
fs.writeFile(filePath, 'Hello World', (err) => {
    if (err) {
        console.log('Error occurred')
    } else {
        console.log('File Created');
    }
})

fs.readFile(filePath, (err, data) => {
    if (err) {
        console.log('Error occurred', err)
    } else {
        console.log('File Read:' + data);
    }
})