//All methods are tested live at https://repl.it/ using JavaScript.

//Simple Reduce Example
const initialValue = 0;

const numbers = [1, 1, 11];

const reducer = (accumulator, item) => {
  return accumulator + item
}

const total = numbers.reduce(reducer, initialValue);

console.log(total);
