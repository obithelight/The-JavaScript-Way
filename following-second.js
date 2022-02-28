/*
Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

This is not as simple as it seems... Look at the following results to see for yourself:

14h17m59s => 14h18m0s
6h59m59s => 7h0m0s
23h59m59s => 0h0m0s (midnight)
*/

let hours = 0;
let minutes = 0;
let seconds = 0;

do {
  hours = +prompt("Please enter a number between 1 and 23 for hours.");
} while (hours < 1 || hours > 23);

do {
  minutes = +prompt("Please enter a number between 1 and 59 for minutes.");
} while (minutes < 1 || minutes > 59);

do {
  seconds = +prompt("Please enter a number between 1 and 59 for seconds.");
} while (seconds < 1 || seconds > 59);
seconds++;

if (seconds === 60) {
  seconds = 0;
  minutes++;
  if (minutes === 60) {
    minutes = 0;
    hours++;
    if (hours === 24) {
      hours = 0;
    }
  }
}
console.log(`${hours}h${minutes}m${seconds}s`);