//All methods are tested live at https://repl.it/ using JavaScript.

//Utilizing the every method to determine if everyone is above the age of 18
var age = [17, 19, 20, 21];
age.every(function (person) {
  return person >= 18;
})

//Utilizing the every method to determine if the entire fruitBasket is filled with Bananas(this person must like bananas)
var fruitBasket = ["banana", 'banana', "banana"];
fruitBasket.every(function (fruit) {
  return fruit === "banana";
})
