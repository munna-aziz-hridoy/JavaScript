// variable is like a container. It can store data and this data can be use anywhere.
// 5 rules to declear a variable
// 1. Keyword (var, let, const).
// 2. Variable name(meaning full name).
// 3. Equal sign('=').
// 4. Value (data that you want to store).
// 5. Semicolon (';').

var name = "Munna";
var age = 23;
var isGood = false;

// Using 'var' keyword. 'var' is using from 1995 - 2015
// Variable that define with 'var' can be access from any where in JavaScript.
// It has no scope.
// It can be change.

name = "Munna Aziz"; // here we change the variable from 'Munna' to 'Munna Aziz'.

var a = 10;
var b = 15;
function addition() {
  a = 14;
  var result = a + b; // Here we access the variable from outside of the function and change a variable from inside the function.
  console.log(result);
}

addition();

// Using 'let' keyword. 'let' is using from 2015.
// Variable that define with 'let' can be access from any where JavaScript but you have to stay is same scope.
// It can be change leter.

let number1 = 12;
let number2 = 15;

function subsTraction() {
  number1 = 15;
  var result = number1 + number2; // Here we access the variable from outside of the function and change a variable from inside the function.
  console.log(result);
}

subsTraction();

// Using 'const' Keyword
// variable declear with 'const' can't be change

const myNumber = 123456789;

// myNumber = 987654321; it is an error.
