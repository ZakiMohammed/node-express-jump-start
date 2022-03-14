// JS is not a type safe language

function greet(name) {
    return 'Hello ' + name;
}

const message = greet('John Doe');

console.log(message);

const add = function (num1, num2) {
    return num1 + num2;
}

const addition = add(10, 20);

console.log(addition);

// arrow function

const sub = (num1, num2) => {
    return num1 - num2;
}

const subtraction = sub(30, 10);

console.log(subtraction)

const mul = (num1, num2) => num1 * num2;

const multiplication = mul(2, 3);

console.log(multiplication)