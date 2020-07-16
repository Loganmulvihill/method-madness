//All methods are tested live at https://repl.it/ using JavaScript.

//Basic Testing with the eval method.
//On a quick look several sources stated to not use this method because it is a security risk.
//so it's good to know of but not use unless absolutely needed.
const one = eval("2 * 7");
const two = eval('5+5');
console.log(one, two);
const three = one + two;
console.log(three);
