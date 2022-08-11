/*
Adding character experience
Improve our example RPG program to add an experience property named xp to the character. Its initial value is 0. Experience must appear in character description.
*/

// TODO: create the character object here

const aurora = {
  name: "Aurora",
  health: 150,
  strength: 100,

  describe() {
    return `${aurora.name} acquired ${aurora.health} points using ${aurora.xp} margin of experience`;
  }
};

//Create and add a new experience property named xp to the chararcter
aurora.xp = 0;

//console.log(aurora)

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;