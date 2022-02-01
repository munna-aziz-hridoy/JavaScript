// array is a variable that contains more than one data.
var arr = ["Munna", "Mugdho", "Oishi"];
// here we can contain 3 string in one variable.
// array can contain string, number
// to define an array we have to use third bracket and put a comma after every array elemnt
// each array element can access with the index number. index number always start with 0
// if an element of array is at the position 1, then index number is 0
// indexOf method use to get the index number of an array.

var indexOfMunna = arr.indexOf("Munna");

// array element can access by index number
var munnaName = arr[0];

// array element can be changed
arr[0] = "Munna Aziz";

// length
// array.length
// length method use to get the length of an array
arr.length;

// push method
// array.push(element)
// push method insert an elemnt at the last of an array
arr.push("Najmul");

// pop method
// array.pop()
// pop method remove the last element of an array
arr.pop();

// shift method
// array.shift()
// shift method remove the first element of an array
arr.shift();

// unshift method
// array.unshift(element)
// unshift method add an element to the array at the first position
arr.unshift("Najmul");
