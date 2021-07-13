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

console.warn(
  'Folosind obiectul person si forEach, afiseaza skillurile din pozitiile impare ale arrayului.',
);

person.skills.forEach(function (skill, i) {
  if (i % 2 !== 0) {
    console.log(skill);
  }
});

console.warn(' In mod similar, afiseaza skillurile care contin litera a. ');

person.skills.forEach(function (skill) {
  if (skill.includes('a')) {
    console.log(skill);
  }
});

console.warn(
  ' Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca au varsta mai mare decat 30 inclusiv.',
);

let totalYears = 0;
person.friends.forEach(function (friend) {
  const friendAge = friend.age;
  if (friendAge >= 30) {
    totalYears += friendAge;
  }
});
console.log(totalYears);

console.warn(
  'Folosind forEach, afiseaza suma anilor de nastere a persoanelor care au varsta impara. ',
);
totalYears = 0;
person.friends.forEach(function (friend) {
  const { age } = friend;
  if (age % 2 !== 0) {
    totalYears += age;
  }
});
console.log(totalYears);

console.warn(
  ' Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends daca aceasta este mai mare sau egala cu 2 ani.',
);

person.friends.forEach((friend) => {
  const friendAge = friend.age;
  const ageDiff = person.age - friendAge;
  if (ageDiff >= 2) {
    console.log(ageDiff);
  }
});

console.warn(
  'Folosind obiectul person si forEach, afiseaza in consola skillurile pe care le are persoana.',
);

person.skills.forEach(function (skill) {
  console.log(skill);
});

console.warn(
  'Folosind forEach afiseaza propozitia: "Numele mari ale prietenilor mei sunt xxx, xxx, xxx."',
);

let bigNamesSentence = `Numele mari ale prietenilor mei sunt `;
person.friends.forEach((friend, i, friends) => {
  const { surname } = friend;
  const friendsLength = friends.length;
  let punctuation = ', ';
  if (i === friendsLength - 1) {
    punctuation = `.`;
  }
  bigNamesSentence += `${surname}${punctuation}`;
});
console.log(bigNamesSentence);

console.warn(
  'Folosind forEach, afiseaza numarul total de ani pe care il au persoanele din arrayul friends ',
);

totalYears = 0;
person.friends.forEach(function (friend) {
  const friendAge = friend.age;
  totalYears += friendAge;
});
console.log(totalYears);

console.warn(
  'Folosind forEach, afiseaza suma anilor de nastere a persoanelor ',
);

let totalBirthYears = 0;
person.friends.forEach((friend) => {
  const { age } = friend;
  let today = new Date();
  let year = today.getFullYear();
  let birthYear = year - age;
  totalBirthYears += birthYear;
});

console.log(totalBirthYears);

console.warn(
  'Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.',
);

person.friends.forEach((friend) => {
  const friendAge = friend.age;
  const ageDiff = person.age - friendAge;
  console.log(ageDiff);
});

console.warn(
  'Folosind metoda reverse si apoi forEach, afiseaza in ordine inversa numele complet al prietenilor din arrayul friends.',
);

person.friends
  .slice()
  .reverse()
  .forEach(function (friend) {
    const { name, surname } = friend;
    console.log(`${surname} ${name}`);
  });
