console.warn(
  'Creeaza un obiect numit person Obiectul sa contina urmatoarele proprietati: firstName, lastName, email, birthYear, pets, zipCode. Proprietatea pets sa contina un array de obiecte cu trei pozitii. Obiectele din pets sa contina urmatoarele proprietati: name, species, age.',
);

const person = {
  firstName: 'Xulica',
  lastName: 'Popescu',
  email: 'xulica.popescu@yahooo.com',
  birthYear: 1967,
  pets: [
    {
      name: 'Scrofi',
      species: 'porc',
      age: 7,
    },
    {
      name: 'Pipo',
      species: 'caine',
      age: 2,
    },
    {
      name: 'Horsey',
      species: 'vaca',
      age: 12,
    },
  ],
  zipCode: '3546',
};

console.warn(
  'Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale.”. Nu uita de proprietatea length a arrayului pets. ',
);

console.log(
  `Numele meu este: ${person.firstName} si ${person.lastName} si am ${person.pets.length} animale.`,
);

console.warn('Afiseaza propozitia: “Am acelasi email din copilarie: xxx.”.');

console.log(`Am acelasi email din copilarie: ${person.email}.`);

console.warn(
  'Afiseaza propozitia: “Unul din cele x animale ale mele este species si are age ani.”',
);

console.log(
  `Unul din cele ${person.pets.length} animale ale mele este ${person.pets[0].species} si are ${person.pets[0].age} ani.`,
);

console.warn(
  'Calculeaza si afiseaza (folosind anul curent) anul de nastere al animalului de pe pozitia 2.',
);
const date = new Date();
const year = date.getFullYear();
console.log(year - person.pets[2].age);

console.warn(
  'Calculeaza si salveaza in variabila difference diferenta de ani dintre persoana si animalul de pe pozitia 0 si afiseaza aceasta diferenta. Foloseste anul curent. ',
);

const difference = year - person.birthYear - person.pets[0].age;
console.log(difference);

console.warn(
  'Salveaza numele animalului de pe pozitia 0 intr-o variabila numita petName. ',
);

const petName = person.pets[0].name;

console.warn(
  'Afiseaza propozitia: “Intre firstName si petName este o diferenta de difference ani.”.',
);

console.log(
  `Intre ${person.firstName} si ${petName} este o diferenta de ${difference} ani.`,
);

console.warn(
  'In documentul HTML creeaza o lista neordonata <ul> cu 5 elemente goale <li>.',
);
console.warn('Fiecare li sa aiba un id: prop01, prop02… etc');
console.warn(
  'Folosind metoda document.getElementById() afiseaza urmatoarele 5 afirmatii despre obiectul person. (innerText)',
);

const sentence01 = document.getElementById('prop01');
const sentence02 = document.getElementById('prop02');
const sentence03 = document.getElementById('prop03');
const sentence04 = document.getElementById('prop04');
const sentence05 = document.getElementById('prop05');

console.warn(
  'Afiseaza propozitia “ firstName, pet1, pet2, pet3 locuiesc toti in aceeasi casa” (folosind bracket notation pe arrayul pets)',
);

sentence01.innerText = `${person.firstName}, ${person.pets[0].name}, ${person.pets[1].name}, ${person.pets[2].name} locuiesc toti in aceeasi casa.`;

console.warn(
  'Calculeaza si afiseaza diferenta de varsta dintre animalul de pe pozitia 0 si cel de pe pozitia 2',
);

sentence02.innerText = Math.abs(person.pets[0].age - person.pets[2].age);

console.warn(
  'Afiseaza propozitia: “Ma numesc xxx yyy, m-am nascut in birthYear si codul meu postal este: zipCode”',
);

sentence03.innerText = `Ma numesc ${person.firstName} ${person.lastName}, m-am nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode}.`;

console.warn(
  'Afiseaza propozitia: “Animalele mele s-au nascut in xxxx, xxx, respectiv xxx.” Foloseste anul curent pentru a efectua scaderea. ',
);

sentence04.innerText = `Animalele mele s-au nascut in ${
  year - person.pets[0].age
}, ${year - person.pets[1].age}, respectiv ${year - person.pets[2].age}.`;

console.warn('Folosirea variabilelor este optionala dar incurajata. ');

sentence05.innerText = 'Folosirea variabilelor este optionala dar incurajata.';
