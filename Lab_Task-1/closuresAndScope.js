const globalvariable = "I am global!";

function exampleFunction1() {
  console.log(globalvariable);
}

exampleFunction1();

function exampleFunction2() {
  const localvariable = "I am local!";
  console.log(localvariable);
}

exampleFunction2();

function createCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter();
counter();
counter();
