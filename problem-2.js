// Multiplication Table

function multiplicationTable(number) {
  for (var i = 1; i <= 10; i++) {
    var result = i * number;
    var displayResult = i + " " + "X " + number + " = " + result;
    console.log(displayResult);
  }
}

multiplicationTable(13);

console.log("---------------------");

// test to lowercase

function toLowerCase(text) {
  return text.toLowerCase();
}

var myName = "Munna AZIZ";

console.log(myName);

var myLowercaseName = toLowerCase(myName);

console.log(myLowercaseName);

console.log("---------------------");

// fullname

function fullName(firstName, lastName) {
  var fullName = firstName + " " + lastName + ".";
  return fullName;
}

var firstName = "Munna";
var lastName = "Aziz";
var name = fullName(firstName, lastName);

console.log(name);

console.log("---------------------");

// square

function square(num) {
  var squareNumber = num * num;
  return squareNumber;
}

var squareNumber = square(11);
console.log(squareNumber);

console.log("---------------------");

// pizza object

const pizza = {
  toppings: ["cheese", "sauce", "pepperoni"],
  crust: "deep dish",
  serves: 2,
};

var index = pizza.toppings.indexOf("pepperoni");

var pappeRoni = pizza.toppings[index];

console.log(pappeRoni);
