//All methods are tested live at https://repl.it/ using JavaScript.

//Spread Operator Array Example
var spreadArray = [1, 2, 3];
var spreadArray2 = [7, 8, 9];

var combinedSpreadArray = [...spreadArray, ...spreadArray2];
console.log(...spreadArray);
console.log(combinedSpreadArray);

//Spread Operator Object Example

var spreadObject = { a: "one", b: "two" };
var spreadObject2 = { c: "three", d: "four" };

var combinedSpreadObject = { ...spreadObject, ...spreadObject2 };
console.log(combinedSpreadObject);
