const person = {
  name: 'Maria',
  surname: 'Iosub',
  age: 31,
  petOwner: true,
  skills: {
    html: true,
    css: true,
    javaScript: false,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      age: 29,
      surname: 'Carolson',
    },
  },
};
// nu conteaza ordinea cheilor din obecte

const skillsKeys = Object.keys(person.skills);
const friendsKeys = Object.keys(person.friends);

// ex 11. 1
console.warn(
  'Folosind Object.keys() pe proprietatea skills, afiseaza abilitatile persoanei daca acestea sunt true. Folosind propozitii de forma: “person.name cunoaste: html.” “person.name cunoaste: javaScript.”',
);

skillsKeys.forEach(function (skillKey) {
  const personKnows = person.skills[skillKey];

  if (personKnows === true) {
    console.log(`${person.name} cunoaste: ${skillKey}.`);
  }
});

// ex 2
console.warn(
  'Prin aceeasi metoda, afiseaza o lista inversata cu numele complet inversat al prietenilor. ',
);

friendsKeys
  .slice() // copy
  .reverse() // reverse the copy + loop through the copy
  .forEach(function (friendKey) {
    const { surname, name } = person.friends[friendKey];

    console.log(`${surname} ${name}`);
  });
