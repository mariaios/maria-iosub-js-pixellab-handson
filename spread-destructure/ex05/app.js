let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: true,
  skills: ['html', 'javascript', 'css'],
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

const [skill1, , skill3] = person.skills;
/**
 * skill1 = person.skils[0];
 * skill3 = person.skills[2];
 */
console.log(`Cunosc ${skill1} si ${skill3}.`);

const [, friend2] = person.friends;
// friend2 = person.friends[1];
const { name: friend2Name, surname: friend2Surname, age: friend2Age } = friend2;

let message = `Ma numesc ${friend2Name} ${friend2Surname} si am ${friend2Age} ani.`;
console.log(message);

const [, , { name: friend3Name, surname: friend3Surname }] = person.friends;
console.log(`Prietena mea este ${friend3Name} ${friend3Surname}.`);

const { petOwner: hasPet } = person;
console.log(`Persoana ${hasPet === true ? `are` : 'nu are'} animale.`);

const [f0, , { name: f2Name, surname: f2Surname }] = person.friends;
const { name: f0Name, surname: f0Surname } = f0;
console.log(`Prietenul meu este ${f0Name} ${f0Surname}.`);
console.log(`${f2Name} ${f2Surname} este prietena mea.`);
