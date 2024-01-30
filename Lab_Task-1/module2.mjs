import { greeting } from "./module1.mjs";
import farewell from "./module1.mjs";

function greet(timeOfDay) {
  console.log(greeting[timeOfDay]);
}
console.log(farewell);

export function sayGoodbye() {
  console.log(farewell);
}
