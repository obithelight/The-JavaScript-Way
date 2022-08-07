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
};

console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);