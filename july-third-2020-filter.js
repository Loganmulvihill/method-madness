//All methods are tested live at https://repl.it/ using JavaScript.

//Filtered String Array Example
var greetings = ["hi", "hello", "hey", "whats up"];
var filteredArray = greetings.filter(greeting => greeting.length > 3);
console.log(filteredArray);

//Filtered example implementing lower than five function
var numbersArray = [1, 2, 3, 4, 5, 8, 72, 54, 5.5, 4.95];
var filteredNumbersArray = numbersArray.filter(lowerThanFive);

function lowerThanFive(value) {
  return value <= 5;
}

console.log(filteredNumbersArray);
