/*
Calculator
Complete the following program so that it offers the four basic arithmetical operations: addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.
*/

// TODO: (SWITCH STATEMENT)

function calculate(num1, operator, num2){
  switch(operator){
    case "+":
      return num1 + num2;
      break;
    case "-":
      return num1 - num2;
      break;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
      break;
  }
}