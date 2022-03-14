const { EventEmitter } = require('events')

const fooEvent = new EventEmitter()

fooEvent.on('bar', function () {
    console.log('Foo bar')
})

fooEvent.emit('bar')

let balance = 1000

const accountEvent = new EventEmitter()

accountEvent.on('deposit', amount => balance += amount)
accountEvent.on('withdraw', amount => balance -= amount)
accountEvent.on('check-balance', () => console.log(`Balance: ${balance}`))

accountEvent.emit('deposit', 500)
accountEvent.emit('check-balance')

accountEvent.emit('withdraw', 400)
accountEvent.emit('check-balance')

accountEvent.emit('withdraw', 200)
accountEvent.emit('check-balance')