const moment = require('moment')

const day = moment().format('dddd')
const date = moment().format('MMMM Do YYYY')

console.log(day)
console.log(date)