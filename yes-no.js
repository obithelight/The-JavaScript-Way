/*
Neither Yes nor No
Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.
*/

//Solution 1
function yesOrNo() {
  let userInput = prompt("Enter Yes or No").toLowerCase();
  if (userInput == "yes" || userInput == "no") {
    console.log("Congratulations. You Won!");
  } else {
    alert("Error. Try Again");
    yesOrNo();
  }
}
yesOrNo();

//Solution 2
let userInput = ""
  while(userInput !== "yes" && userInput !== "no"){
  	userInput = prompt("Please enter yes or no")
 // console.log(`${userInput}`)
  }