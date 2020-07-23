//All methods are tested live at https://repl.it/ using JavaScript.

//parseFloat() simple string test
const a = '10';
console.log(parseFloat(a));

//parseFloat multiple numbers in string
const b = '20, 25, 30';
console.log(parseFloat(b));

//parseFloat spaces before and after in string
const c = '          25          '
console.log(parseFloat(c));

//parseFloat can't convert letter to number so returns NaN
const d = 'I like the number 22';
console.log(parseFloat(d));


//Note: Only the first number in the string is returned!

//Note: Leading and trailing spaces are allowed.

//Note: If the first character cannot be converted to a number, parseFloat() returns NaN.
