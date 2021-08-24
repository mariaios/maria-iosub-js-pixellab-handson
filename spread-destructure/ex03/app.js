let person1 = {
  name: 'Steven',
  surname: 'Stevenson',
};

let person2 = {
  name: 'Rolf',
  surname: 'Rolfson',
};

let person3 = {
  name: 'Andra',
  surname: 'Andrason',
};

let age1 = {
  age: 20,
};

let age2 = {
  age: 25,
};

const fullPerson1 = {
  ...person1,
  ...age1,
};

const fullPerson2 = {
  ...person2,
  age: 40,
};

const fullPerson3 = {
  ...person3,
  ...age2,
};

console.log(fullPerson1, fullPerson2, fullPerson3);

const fullPerson4 = {
  ...fullPerson3,
  name: 'Anita',
  age: 36,
};
console.log(fullPerson3, fullPerson4);

const calculateSurface = (...args) => {
  const length = args.length;

  if (length === 2) {
    return args[0] * args[1];
  }

  if (length === 1) {
    return args[0] ** 2;
  }
};

const square = calculateSurface(2);
const rectangle = calculateSurface(2, 6);

console.log(square, rectangle);
