//All methods are tested live at https://repl.it/ using JavaScript.

//Using the some method to determine if we have people over 21

var ageArray = [12, 17, 95, 21];
ageArray.some(function (person) {
  return person >= 21;
})

//Using the some method to determine if we have an odd integer in our array
var numberArray = [2, 4, 6, 1];
numberArray.some(function (value) {
  return value % 2 === 1;
})
