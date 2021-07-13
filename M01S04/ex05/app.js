var refferenceNumber = prompt('Introdu un numar:');

for (let i = 0; i <= 100; i++) {
  console.log(i);

  if (i % refferenceNumber !== 0) {
    continue;
  }

  console.log(`Acest numar este multiplu de ${refferenceNumber}.`);
}

console.warn(
  'Folosind metoda prompt cere utilizatorului numarul pentru care trebuie sa gasesti multipli si afiseaza mesajul: “Acest numar este multiplu de x.” Afla multiplii pentru acest numar intre 1 si 1000.  (let)',
);

for (let i = 0; i <= 1000; i++) {
  if (i % refferenceNumber !== 0) {
    continue;
  }
  console.log(i);
  console.log(`Acest numar este multiplu de ${refferenceNumber}.`);
}
// m-am gandit sa fac asa ca sa nu dai scroll prin 1000 de numere in caz ca verifici si in consola :D

console.warn(
  'Folosind inca o metoda prompt, cere utilizatorului si limita superioara pana la care sa numere bucla si sa afiseze multipli. ',
);

let maxNumber = prompt(
  'Introdu limita superioara pana la care vrei sa aflii multipli pentru numarul tau',
);

for (let i = 0; i <= maxNumber; i++) {
  if (i % refferenceNumber !== 0) {
    continue;
  }
  console.log(i);
  console.log(`Acest numar este multiplu de ${refferenceNumber}.`);
}
