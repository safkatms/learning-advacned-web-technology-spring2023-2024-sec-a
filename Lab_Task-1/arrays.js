//Arrays
let number = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];
let mixedArray = [1, "two", { name: "Alice" }, [7, 8, 9]];

console.log(number);
console.log(fruits);
console.log(mixedArray);

//Accessing array elements
let firstNumber = number[0];
let secondFruit = fruits[1];
let thirdElement = mixedArray[2];

console.log(firstNumber);
console.log(secondFruit);
console.log(thirdElement);

//Array Methods

number.push(6);
fruits.pop();
fruits.unshift("pear");
number.shift();

console.log(number);
console.log(fruits);

//Array Iteration

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (number) {
  console.log(number);
});

//Array Iteration Map

let doubleNumbers = numbers.map(function (number) {
  return number * 2;
});

console.log(doubleNumbers);

const num = [1, 2, 3, 4, 5, 6];
const evenNumbers = num.filter(function (n) {
  return n % 2 === 0;
});
console.log(evenNumbers);
