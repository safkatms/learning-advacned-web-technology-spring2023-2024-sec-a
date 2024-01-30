//conditional operator

let age = 20;
let status = age >= 18 ? "Adult" : "Minor";

console.log(status);

//coping an array
let arr1 = [1, 2, 3];
let arr2 = [...arr1];

console.log(arr1);
console.log(arr2);

//concateting arrays
let arr3 = [4, 5, 6];
let combinedArray = [...arr1, ...arr3];
console.log(arr3);
console.log(combinedArray);

//adding elements to an array
let newArr = [0, ...arr1, 4];
console.log(newArr);

// speading array elements as function arguments
function sum(a, b, c) {
  return a + b + c;
}

let numbers = [1, 2, 3];
let result = sum(...numbers);

console.log(numbers);
console.log(result);

//coping an object

let obj1 = { name: "John", age: 24 };
let obj2 = { ...obj1 };
let obj3 = { city: "New York", ...obj1 };

console.log(obj1);
console.log(obj2);
console.log(obj3);

//rest parameter
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

let results = sum(1, 2, 3, 4, 5);
console.log(results);

results = sum(10, 20);
console.log(results);
