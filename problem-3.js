// remove duplicate number from an array

// function
/* function duplicateitems(items) {
  let newArr = [];
  for (let i = 0; i < items.length; i++) {
    let element = items[i];
    if (newArr.indexOf(element) == -1) {
      newArr.push(element);
    }
  }

  return newArr;
} */

function duplicateitems(items) {
  let newArr = [];
  for (let element of items) {
    if (newArr.indexOf(element) == -1) {
      newArr.push(element);
    }
  }
  return newArr;
}

// array of string

let names = [
  "munna",
  "mugdho",
  "kuddus",
  "kobir",
  "ikbal",
  "mugdho",
  "oishi",
  "munna",
  "kalam",
  "kuddus",
  "kobir",
];

let newNamesArry = duplicateitems(names);
console.log(newNamesArry);
console.log(names.length);
console.log(newNamesArry.length);
console.log("--------------------");

let numbers = [
  10, 34, 30, 10, 47, 93, 45, 8, 3, 6, 9, 3, 2, 76, 9, 10, 8, 30, 12,
];

let newNumbers = duplicateitems(numbers);
console.log(numbers.length);
console.log(newNumbers);
console.log(newNumbers.length);
