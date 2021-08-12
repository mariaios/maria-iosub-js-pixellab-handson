const person = {
  name: 'Dragos',
  surname: 'Iordache',
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
      age: 15,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 48,
    },
  ],
};

const friendsLength = person.friends.length;

// pluralization
const pluralize = (count, words = {}) => {
  if (count === 1) {
    return words.singular;
  }

  if (count > 1) {
    return words.plural;
  }

  return words.plural;
};

for (let i = 0; i < friendsLength; i++) {
  const outerFriend = person.friends[i];

  for (let j = 0; j < friendsLength; j++) {
    const innerFriend = person.friends[j];
    const ageDiff = Math.abs(outerFriend.age - innerFriend.age);

    if (i === j) {
      continue;
    }

    console.log(
      `Intre ${outerFriend.name} si ${
        innerFriend.name
      } este o diferenta de ${ageDiff} ${pluralize(ageDiff, {
        singular: 'an',
        plural: 'ani',
      })}.`,
    );
  }
}
