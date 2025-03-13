/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// Part 1: Solution

let result = Number("5") - 2; // code updates now convert the string ("5") to an integer before performing the subtraction.
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid === "true") {
  // updates now explicitly check to see if the string ("false") is a boolean value as part of the if statements.
  console.log("This is valid!");
} else {
  console.log("This is NOT valid!");
}

let age = Number("25"); // code updates now convert the string ("25") to an integer before performing the addition operation.
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

// Part 2: Solution

let strNumber = "10";
let convertNumber = Number("10");
console.log(convertNumber);

let invalidNumber = undefined + 10;
console.log(invalidNumber);
