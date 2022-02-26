/*
Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.
*/

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

//Solution 1: Function Method
function monthNos() {
  let input = Number(prompt("Please enter a number between 1 and 12"));

  if (input < 1 || input > 12) {
    alert("Wrong entry. Please try again.");
    monthNos();
  } else if (input == 2) {
    console.log(
      months[input - 1] +
        " has 28 days in a non-leap year & 29 days in a leap year."
    );
  } else if (input == 4 || input == 6 || input == 9 || input == 11) {
    console.log(months[input - 1] + " has 30 days in a year.");
  } else {
    console.log(months[input - 1] + " has 31 days in a year.");
  }
}
monthNos();

//Solution 2: Switch Method
let monthNos = 0;
do {
  monthNos = Number(prompt("Please enter a number between 1 and 12"));
} while (monthNos < 1 || monthNos > 12);

switch (monthNos) {
  case 2:
    console.log(
      months[monthNos - 1] +
        " has 28 days in a non-leap year & 29 days in a leap year."
    );
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    console.log(months[monthNos - 1] + " has 30 days in a year.");
    break;
  default:
    console.log(months[monthNos - 1] + " has 31 days in a year.");
    break;
}