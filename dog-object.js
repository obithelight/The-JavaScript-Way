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
    return `Ho-Ho-Ho`;
    //return `${this.name} is a ${this.size} ${this.species} breed`;
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`); //"Sheryl is a Chuwawa dog measuring 6 ft"
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);
console.log(dog.bark());