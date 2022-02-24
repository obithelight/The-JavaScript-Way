/*Take a look at the following program.*/

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

//2. nb1=4, nb2=3, nb3=2
let nb1 = Number(prompt("Enter nb1:")); //4
let nb2 = Number(prompt("Enter nb2:")); //3
let nb3 = Number(prompt("Enter nb3:")); //2

if (nb1 > nb2) {
  nb1 = nb3 * 2; //nb1 = 4
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3); //4, 3, 2

//3. nb1=2, nb2=4, nb3=0
let nb1 = Number(prompt("Enter nb1:")); //2
let nb2 = Number(prompt("Enter nb2:")); //4
let nb3 = Number(prompt("Enter nb3:")); //0

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++; //nb1 = 3
  if (nb2 > nb3) {
    nb1 += nb3 * 3; //nb1 = 3
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3); //3, 4, 0