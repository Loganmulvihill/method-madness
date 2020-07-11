//All methods are tested live at https://repl.it/ using JavaScript.

// Add 2 to array forEach example
const numbers = [1, 8, 9];

numbers.forEach(number => {
  console.log(number + 2);
});

//Add the first letter in string to end of string using forEach

const strings = ['cheese', 'pizza', 'meat'];

strings.forEach(string => {
  console.log(string += string[0]);
})
