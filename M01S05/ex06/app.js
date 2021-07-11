const person = {
  getName: function () {
    return 'Maria Iosub';
  },
  getAge: function () {
    return 32;
  },
};

function accessor(methodSuffix) {
  const methodName = `get${methodSuffix}`;

  // person[methodName]() = person.getAge()|person.getName()
  return person[methodName]();
}

console.warn(
  'Folosind accesorul salveaza numele mic al persoanei intr-o variabila si foloseste-l in propozitia: “Eu sunt xxx.”',
);
const personName = accessor('Name');
// const personFirstName = personName.split(' ')[0];
console.log(`Eu sunt ${personName}.`);

console.log(accessor('Age'));
