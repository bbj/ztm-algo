/*
    Create a function that reverse a string.

    Ex: "I am Bruno" => "onurB ma I"
*/
function reverse(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "invalid input";
  }

  const backwards = [];
  const nbItems = str.length;
  for (let i = nbItems-1; i>=0; i--) {
    backwards.push(str[i]);
  }  
  return backwards.join('');
}

//using built-in function Array.reverse()
function reverse2(str) {
  //check input
  if (!str || str.length < 2 || typeof str !== "string") {
    return "invalid input";
  }

  return str.split('').reverse().join("");
}

//using ES6
const reverse3 = str => str.split('').reverse().join("");

//using [...var], the "spread" operator
const reverse4 = str => [...str].reverse().join("");

console.log(reverse("I am Bruno"));
console.log(reverse2("I am Bruno"));
console.log(reverse3("I am Bruno"));
console.log(reverse4("I am Bruno"));