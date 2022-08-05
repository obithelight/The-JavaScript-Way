/*
Modeling a dog
Complete the following program to add the dog object definition.
*/

// TODO: create the dog object here
let dog = {
  name: "Sheryl",
  species: "Chuwawa",
  size: "6 ft",

   bark() {
    return `Ho-Ho-Ho`; // 1.
    //return `${this.name} is a ${this.size} ${this.species} breed`; // 2.
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`); //"Sheryl is a Chuwawa dog measuring 6 ft"
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`); //"Look, a cat! Sheryl barks: Ho-Ho-Ho"
console.log(dog.bark());// 1. "Ho-Ho-Ho"
//2. "Sheryl is a 6 ft Chuwawa breed"