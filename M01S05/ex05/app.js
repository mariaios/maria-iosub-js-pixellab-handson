const person = {
  getName: function () {
    return 'Maria Iosub';
  },

  getAge: function () {
    return 32;
  },
};

console.warn('Afiseaza primul nume al persoanei folosind metoda getName()');
// v1
const fullName = person.getName();
let firstName = fullName.split(' ')[0];
console.log(firstName);

// v2
let stringIndex = fullName.indexOf(' ');
firstName = fullName.slice(0, stringIndex);
console.log(firstName);

console.warn(
  'Afiseaza anul de nastere al persoanei folosind metoda getAge() si anul curent.',
);
const currentYear = new Date().getFullYear();
const personAge = person.getAge();
const birthYear = currentYear - personAge;
console.log(currentYear - personAge);

console.log(birthYear.toString().slice(-2));
console.log(89);
