//All methods are tested live at https://repl.it/ using JavaScript.

//Simple String toLowerCase method Example
const animals = ['CHEETAH', 'BIRD', 'CLAM'];
let newArray = [];
for (let i = 0; i < animals.length; i++) {
  newArray.push(animals[i].toLowerCase());
}

console.log(newArray);
