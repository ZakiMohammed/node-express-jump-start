const os = require('os');

// Operating System

console.log('Total:', os.totalmem());
console.log('Free:', os.freemem());
console.log('Utilized:', os.totalmem() - os.freemem());

console.log('Platform:', os.platform())
console.log('Version', os.version())

const requiredSpace = 85281382999999;

if (os.freemem() < requiredSpace) {
    console.log('Insufficient Storage');
} else {
    console.log('Space available');
}