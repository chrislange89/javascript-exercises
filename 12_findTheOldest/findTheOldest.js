const findTheOldest = function (people) {
  let todaysDate = new Date().getFullYear();
  let ages = people.map((person) => {
    let personsAge = person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : todaysDate - person.yearOfBirth;
    let newPerson = {...person, age: personsAge}
    return newPerson;
  }).sort((a, b) => {return b.age - a.age});
  return ages[0];
};

// Do not edit below this line
module.exports = findTheOldest;
