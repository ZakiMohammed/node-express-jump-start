const foo1 = () => console.log('foo 1')
const foo2 = () => console.log('foo 2')
const foo3 = () => console.log('foo 3')
const foo4 = () => console.log('foo 4')
const foo5 = () => console.log('foo 5')

process.nextTick(() => console.log('Next Tick'))

foo1()

// blocking I/O
setImmediate(() => foo5())
setTimeout(() => foo2(), 0)
Promise.resolve().then(() => foo4())
// new Promise((resolve, reject) => resolve()).then(() => foo4())

foo3()