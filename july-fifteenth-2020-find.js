//All methods are tested live at https://repl.it/ using JavaScript.

//Numbers Array Example
const numbers = [8, 9, 10, 22];
console.log(numbers.find(element => element > 9));

//String Array Example
const strings = ['cheese', "pizza", 'pepperoni'];
const stringToBe = strings.find(string => string.length > 6);
console.log(stringToBe);
