/*
Circumference and area of a circle
Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

Here are some tips for solving this exercise:

Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
The value of number π (Pi) is obtained with Math.PI in JavaScript.
*/ 

//You might want to use the exponentiation operator ** to perform computations.

/********Solution********/

//circumference of a circle = 2 * PI * radius
//area of a circle = PI * radius * radius

const circumference = radius => 2 * Math.PI * radius;
const area = radius => Math.PI * radius ** 2;

let radius = +prompt("What is the radius?");
console.log(circumference(radius));
console.log(area(radius));

//console.log(2 ** 3); // 8: 2 * 2 * 2
//console.log(3 ** 2); 
