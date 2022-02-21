/*
Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
*/ 

function numberCall() {
  let num1 = Number(prompt("Enter number 1"));
  let num2 = Number(prompt("Enter number 2"));

  if (num1 == "" || num2 == "") {
    alert("Please Enter a number");
    numberCall();
  } else if (num1 == num2) {
    console.log("The numbers are equal");
  } else if (num1 > num2) {
    console.log("The first number is greater than the second");
  } else {
    console.log("The second number is greater than the first");
  }
}
numberCall();