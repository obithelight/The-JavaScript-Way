//Take a look at the following program.
//1. nb1 = nb2 = nb3 = 4

let nb1 = Number(prompt("Enter nb1:")); //4
let nb2 = Number(prompt("Enter nb2:")); //4
let nb3 = Number(prompt("Enter nb3:")); //4

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++; // nb1 = 5
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0; //nb1 = 0
    nb3 = nb3 * 2 + nb2; //nb3 = 12
  }
}
console.log(nb1, nb2, nb3); //0, 4, 12

