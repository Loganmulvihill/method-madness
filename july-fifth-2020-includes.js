//All methods are tested live at https://repl.it/ using JavaScript.

//Garage Array includes Example
var garageArray = ["Mercedes", "Civic", "McLaren"];
var findCar = garageArray.includes("McLaren");
console.log(findCar);

//Array with very similar strings (The Includes Methods recognizes case sensitivity)
var similarArray = ["school", "School", "schol", "SCHOOL"];
var findSchool = similarArray.includes("School");
console.log(findSchool);
