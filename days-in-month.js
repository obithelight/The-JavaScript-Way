/*
Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.
*/

function monthNos() {
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
  ];

  let input = Number(prompt("Enter a Number for a month between 1 and 12"));

  if (input == 4 || input == 6 || input == 9 || input == 11) {
    console.log(months[input - 1] + " has 30 days");
  } else if (
    input == 1 ||
    input == 3 ||
    input == 5 ||
    input == 7 ||
    input == 8 ||
    input == 10 ||
    input == 12
  ) {
    console.log(months[input - 1] + " has 31 days");
  } else if (input == 2) {
    console.log(months[input - 1] + " has 28 days");
  } else {
    alert("Wrong entry. Try again.");
    monthNos();
  }
}
monthNos();