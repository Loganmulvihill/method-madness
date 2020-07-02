// Number Array plus ten example.
var numbersArray = [55, 25, 75, 85];
var mapArray = numbersArray.map(plusTen);

function plusTen(num) {
  return num + 10;
}

console.log(mapArray);


//String Array adding greeting example
var stringArray = ["Jim", "Bob", "Jackie", "Jimmy"];
var greetingArray = stringArray.map(addGreeting);

function addGreeting(string) {
  return "Hello " + string;
}

console.log(greetingArray);


//Square Root Method Example
var numberArray = [16, 9, 25];
var squareRootArray = numberArray.map(Math.sqrt);

console.log(squareRootArray);
