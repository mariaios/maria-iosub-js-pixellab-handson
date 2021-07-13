const person = {
  name: 'Maria',
  surname: 'Iosub',
  age: 32,
  petOwner: false,
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
  'Folosind obiectul person si un for, afiseaza in consola skillurile de pe pozitiile pare ale arrayului.',
);
for (let i = 0; i < person.skills.length; i++) {
  if (i % 2 === 0) {
    console.log(person.skills[i]);
  }
}

const skillsLength = person.skills.length;

console.warn('In mod similar, afiseaza skillurile care NU incep cu j.');
for (let i = 0; i < skillsLength; i++) {
  const skillName = person.skills[i];

  if (skillName[0] !== 'j') {
    console.log(skillName);
  }
}

console.warn(
  ' Folosind un for afiseaza propozitia: "Prietenii mei se numesc xxx yyy, xxx yyy, xxx yyy."',
);
const friendsLength = person.friends.length;
// v1
let message = 'Prietenii mei se numesc ';
for (let i = 0; i < friendsLength; i++) {
  const friend = person.friends[i];
  let punctuation = ', ';
  // friend.name === person.friends[i].name
  message += `${friend.name} ${friend.surname}`;

  if (i === friendsLength - 1) {
    punctuation = '.';
  }

  message += punctuation;
}
console.log(message);
// v2
message = 'Prietenii mei se numesc ';
for (let i = 0; i < friendsLength; i++) {
  const { name, surname } = person.friends[i];
  // friend.name friend.age friend.surname
  // name = friend.name
  // surname = friend.surname
  let punctuation = ', ';

  if (i === friendsLength - 1) {
    punctuation = '.';
  }

  message = `${message}${name} ${surname}${punctuation}`;
}
console.log(message);

console.warn(
  'Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends, doar daca varsta este mai mare sau egala cu 30 de ani.',
);
let totalYears = 0;
// v1
for (let i = 0; i < friendsLength; i++) {
  if (person.friends[i].age >= 30) {
    totalYears += person.friends[i].age;
  }
}
console.log(totalYears);
// v2
totalYears = 0;
for (let i = 0; i < friendsLength; i++) {
  const { age } = person.friends[i];
  // age = person.friends[i].age;
  totalYears += age >= 30 ? age : 0;
}
console.log(totalYears);

console.warn('Folosind un for, afiseaza suma anilor de nastere a persoanelor.');
let sumBirthYears = 0;
for (let i = 0; i < friendsLength; i++) {
  sumBirthYears += 2021 - person.friends[i].age;
}
console.log(sumBirthYears);

sumBirthYears = 0;
for (let i = 0; i < friendsLength; i++) {
  const { age } = person.friends[i];
  sumBirthYears += 2021 - age;
}
console.log(sumBirthYears);

console.warn(
  'Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends doar daca aceasta este mai mare de 2 ani. ',
);
for (let i = 0; i < friendsLength; i++) {
  const friend = person.friends[i];
  const ageDiff = Math.abs(friend.age - person.age);

  if (ageDiff > 2) {
    console.log(ageDiff);
  }
}

console.warn(
  'Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ", doar daca varsta prietenului este impara. ',
);
for (let i = 0; i < friendsLength; i++) {
  const friend = person.friends[i];
  const ageDiff = Math.abs(friend.age - person.age);

  if (friend.age % 2 === 0) {
    continue;
  }

  console.log(
    `Intre ${person.name} si ${friend.name} este o diferenta de ${ageDiff} ani.`,
  );
}

console.warn(
  'Folosind proprietatea length a arrayului skills si o bucla for, afiseaza in ordine inversa elementele arrayului skills. Atentie, va trebui sa numeri invers, de la length la 0.',
);
// for (let i = 0; i < person.skills.length; i++) {
//   console.log(person.skills[i])
// }
for (let i = person.skills.length - 1; i >= 0; i--) {
  console.log(person.skills[i]);
}

console.warn(
  'Folosind obiectul person si un for, afiseaza in consola skillurile pe care le are persoana',
);

for (let i = 0; i < person.skills.length; i++) {
  console.log(person.skills[i]);
}

console.warn(' In mod similar, afiseaza skillurile care incep cu c ');

for (let i = 0; i < person.skills.length; i++) {
  if (person.skills[i][0] === 'c') {
    console.log(person.skills[i]);
  }
}

console.warn(
  ' Folosind un for afiseaza propozitia: "Numele de familie ale prietenilor mei sunt: xxx, xxx , xxx."',
);

let text = 'Numele de familie ale prietenilor mei sunt: ';
for (let i = 0; i < friendsLength; i++) {
  const { surname } = person.friends[i];
  let punctuation = ', ';
  if (i === friendsLength - 1) {
    punctuation = '.';
  }
  text = `${text}${surname}${punctuation}`;
}
console.log(text);

console.warn(
  'Folosind un for, afiseaza numarul total de ani pe care il au persoanele din arrayul friends',
);

let yearsTotal = 0;
for (i = 0; i < friendsLength; i++) {
  const { age } = person.friends[i];
  yearsTotal += age;
}
console.log(yearsTotal);

console.warn('Folosind un for, afiseaza suma anilor  persoanelor.');

console.log(yearsTotal + person.age);
// am folosit for-ul mai sus

console.warn(
  ' Afiseaza diferenta de varsta dintre persoana si prietenii din arrayul friends.',
);

for (let i = 0; i < friendsLength; i++) {
  const { age } = person.friends[i];
  console.log(Math.abs(person.age - age));
}

console.warn(
  'Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani. Intre Dragos si Steven... ". Repeta pentru tot arrayul friends.',
);

let ageDiffMessage = '';
for (let i = 0; i < friendsLength; i++) {
  const { name, age } = person.friends[i];
  const ageDiff = Math.abs(person.age - age);

  ageDiffMessage = `${ageDiffMessage} Intre ${person.name} si ${name} este o diferenta de ${ageDiff} ani.`;

  // console.log(
  //   `Intre ${person.name} si ${name} este o diferenta de ${ageDiff} ani.`,
  // );
}

console.log(ageDiffMessage.trim());

console.warn(
  'Afiseaza fraza “Prietenii mei sunt: xxx yyy, xxx yyy, xxx yyy.” in ordine inversa a arrayului de prieteni. (Numarand de la length la 0).',
);

let myFriendsMessage = 'Prietenii mei sunt: ';
for (let i = friendsLength - 1; i < friendsLength && i >= 0; i--) {
  const { name, surname } = person.friends[i];
  let punctuation = ', ';
  if (i === 0) {
    punctuation = '.';
  }
  myFriendsMessage += `${name} ${surname}${punctuation}`;
}

console.log(myFriendsMessage);
