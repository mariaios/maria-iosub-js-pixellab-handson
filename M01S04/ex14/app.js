var person = {
  firstName: 'Maria',
  lastName: 'Iosub',
  birthYear: 1989,
  pets: [
    {
      name: 'Twix',
      species: 'papagal',
      age: 4,
    },
    {
      name: 'Mars',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Bounty',
      species: 'hamster',
      age: 4,
    },
    {
      name: 'Lion',
      species: 'pisica',
      age: 10,
    },
  ],
};

console.warn(
  'Afiseaza in consola folosind metoda forEach() numele fiecarui animal.',
);

person.pets.forEach(function (pet) {
  const { name } = pet;
  console.log(name);
});

console.warn('Folosind o bucla for afiseaza suma anilor animalelor.');

let petTotalAge = 0;
for (let i = 0; i < person.pets.length; i++) {
  const { age } = person.pets[i];
  petTotalAge += age;
}
console.log(petTotalAge);

console.warn(
  'Folosind forEach() afiseaza cate una pe linie propozitiile: “Twix este papagal si are 4 ani. Mars este caine si are… etc”.',
);

person.pets.forEach(function (pet) {
  const { name, species, age } = pet;
  console.log(`${name} este ${species} si are ${age} ani.`);
});

console.warn(
  'Folosind o bucla for afiseaza cate una pe linie propozitiile: “Intre Dragos si Twix este o diferenta de xx ani. Intre Dragos si Mars… ” (repeta pentru toate intrarile din array).',
);

for (let i = 0; i < person.pets.length; i++) {
  let today = new Date();
  let year = today.getFullYear();
  const personAge = year - person.birthYear;
  const { name, age } = person.pets[i];
  const ageDiff = personAge - age;
  console.log(
    `Intre ${person.firstName} si ${name} este o diferenta de ${ageDiff} ani.`,
  );
}

console.warn(
  'Folosind o bucla for afiseaza in ordine inversa numele animalelor din array sub forma de propozitii: “Animalul meu se numeste xxxx.”.',
);

for (let i = person.pets.length - 1; i >= 0; i--) {
  console.log(`Animalul meu se numeste ${person.pets[i].name}`);
}

console.warn(
  'Folosind o bucla for afla care este cel mai in varsta animal si afiseaza propozitia: “xxx este cel mai batran animal pe care il am, dar intre noi este o diferenta de xx ani.” ',
);

const petAges = [];
for (let i = 0; i < person.pets.length; i++) {
  petAges.push(person.pets[i].age);
}

const today = new Date();
const year = today.getFullYear();
const maxPetAge = Math.max(...petAges);
const indexMaxPetAge = person.pets.findIndex((x) => x.age === maxPetAge);
console.log(
  `${
    person.pets[indexMaxPetAge].name
  } este cel mai batran animal pe care il am, dar intre noi este o diferenta de ${
    year - person.birthYear - person.pets[indexMaxPetAge].age
  } ani.`,
);

//cu siguranta era si alta varianta, probabil mai simpla, dar mie logica asta mi-a venit din start, doar ca mi-a luat ceva sa descopar cum sa scot acel index :D
// Poti sa imi lasi, te rog, un mesaj cu solutia mai simpla dace este si o ai pe undeva, sau un hint :) eu o vad doar pe a mea

console.warn(
  'Folosind o bucla forEach afiseaza propozitia: “Am papagal, caine, hamster si pisica.”.',
);

let myPets = 'Am ';
person.pets.forEach((pet, i, pets) => {
  const { species } = pet;
  punctuation = ', ';
  if (i === pets.length - 2) {
    punctuation = ' si ';
  }
  if (i === pets.length - 1) {
    punctuation = '.';
  }
  myPets += `${species}${punctuation}`;
});

console.log(myPets);
