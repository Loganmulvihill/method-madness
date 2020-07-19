//All methods are tested live at https://repl.it/ using JavaScript.

//Testing a string with isNaN
console.log(isNaN('pizza'))
//Testing a number with isNaN
console.log(isNaN(6));

//Creating a conditional with isNaN
const mixedArray = ['awesome', 7, "cheese", 9, 9];
function testNumbers() {
  for (let i = 0; i < mixedArray.length; i++) {
    if (isNaN(mixedArray[i]) === true) {
      console.log('numbers are bad for your health')
    } else {
      console.log('I love numbers')
    }
  }
}
testNumbers();
