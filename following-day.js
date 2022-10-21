/*
Following day
Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.
*/

//Solution 
function findDay() {
  let userDay = prompt("Please enter day of the week?").toLowerCase();
  const weekDays = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday"
  ];
  if (weekDays.includes(userDay) && userDay !== weekDays[weekDays.length - 1]) {
    console.log(weekDays[weekDays.indexOf(userDay) + 1]);
  } else if (
    weekDays.includes(userDay) &&
    userDay == weekDays[weekDays.length - 1]
  ) {
    console.log(weekDays[0]);
  } else {
    alert("Incorrect Input");
    findDay();
  }
}
findDay();
