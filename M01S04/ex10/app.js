//  facute 3, 7, 8

const person = {
  name: 'Maria',
  surname: 'Iosub',
  age: 32,
  petOwner: true,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  // larry - 0, steven - 1, carol - 2
  // length 3
  // steven -> 3 - 2
  // carol -> 3 - 1
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

console.warn(
  ' Folosind forEach afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy si xxx yyy."',
);
let sentence = 'Prietenii mei se numesc ';
person.friends.forEach(function (friend, i, friends) {
  let punctuation = ', ';
  const { name, surname } = friend;
  const friendsLength = friends.length;
  // const name = friend.name

  if (i === friendsLength - 2) {
    punctuation = ' si ';
  }

  if (i === friendsLength - 1) {
    punctuation = '.';
  }

  sentence += `${name} ${surname}${punctuation}`;
});
console.log(sentence);

console.warn(
  'Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... "',
);

sentence = '';
person.friends.forEach(function ({ name, age }) {
  // v2 const name = friend.name
  const ageDiff = Math.abs(person.age - age);
  sentence += `Intre ${person.name} si ${name} este o diferenta de ${ageDiff} ani. `;
});

console.log(sentence.trim());

console.warn(
  'Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa elementele arrayului skills.',
);

person.skills
  .slice()
  .reverse()
  .forEach(function (skill) {
    console.log(skill);
  });
// .reverse () nu creaza un array nou => referinta este aceeasi si este modificat arrayul existent (muteaza / en: mutates) deci setul de date e "distrus"
// asta inseamna ca avem nevoie de o copie a arrayului cu .slice()

console.warn('In mod similar, afiseaza skillurile care nu incep cu j.');
// v1
person.skills.forEach(function (skill) {
  if (!skill.startsWith('j')) {
    // daca skill nu incepe cu j
    console.log(skill);
  }
});

// v2 new javascript
person.skills.forEach((skill) => {
  if (skill[0] === 'j') {
    return;
  }
  console.log(skill);
});
// return opreste desfasurarea functiei de la return in jos
// skill[0] se refera la prima litera a skillului  ex h din html
