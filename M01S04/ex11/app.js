const person = {
  name: 'Maria',
  surname: 'Iosub',
  age: 32,
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

console.warn(
  'Afiseaza propozitia: “Prietenii mei sunt Larry, Steven si Carol.” folosind Object.keys()',
);

let myFriends = 'Prietenii mei sunt ';
friendsKeys.forEach(function (friendKey, i, friendsKeys) {
  const { name } = person.friends[friendKey];
  punctuation = ', ';
  if (i === friendsKeys.length - 1) {
    punctuation = '.';
  }
  myFriends += `${name}${punctuation}`;
});

console.log(myFriends);

console.warn(
  'Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze: “Diferenta de varsta intre Larry si Dragos este de xxx ani.” etc…',
);

friendsKeys.forEach(function (friendKey) {
  const { name, age } = person.friends[friendKey];
  const ageDiff = person.age - age;
  console.log(
    `Diferenta de varsta intre ${name} si ${person.name} este de ${ageDiff} ani.`,
  );
});

console.warn(
  'Folosind Object.keys() pe proprietatea skills, afiseaza toate abilitatile din obiectul skills.',
);

skillsKeys.forEach(function (skillKey) {
  console.log(skillKey);
});

console.warn(
  'Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor. ',
);

friendsKeys.forEach(function (friendKey) {
  const { name, surname } = person.friends[friendKey];
  console.log(`${name} ${surname}`);
});

console.warn(
  'Afiseaza propozitia: “Prietenii mei sunt Larry Larryson, Steven Stevenson si Carol Carolson.” folosind Object.keys()',
);

let friensText = 'Prietenii mei sunt ';
friendsKeys.forEach(function (friendKey, i, friendsKeys) {
  const { name, surname } = person.friends[friendKey];
  punctuation = ', ';
  if (i === friendsKeys.length - 1) {
    punctuation = '.';
  }
  friensText += `${name} ${surname}${punctuation}`;
});

console.log(friensText);

console.warn(
  'Folosind bucla, afiseaza mai multe propozitii (cate una per console.log()) care sa afiseze: “Larry are xx ani. Steven are …”',
);

friendsKeys.forEach(function (frirndKey) {
  const { name, age } = person.friends[frirndKey];
  console.log(`${name} are ${age} ani.`);
});

// chestiile astea cu Object.keys nu mi-au placut de loc :))
