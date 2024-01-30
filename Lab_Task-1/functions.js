function greet(name) {
  console.log(`Hello,${name}!`);
}

greet("Alice");

//function return
function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);

console.log(result);

//arrow function
let greeting = (name) => console.log(`Hello,${name}!`);
greeting("Bob");

//annoymus function
const greetings = function (name) {
  console.log(`Hello,${name}!`);
};

greetings("Alice");

//passing function as parameter

function operationOnNumbers(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

let resultAddition = operationOnNumbers(5, 3, add);
let resultMultiplication = operationOnNumbers(5, 3, multiply);

console.log(resultAddition);
console.log(resultMultiplication);
