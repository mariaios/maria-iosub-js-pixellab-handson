// let i = 101;
// do {
//   console.log(i);

//   i++;
// } while (i <= 100);

// let i = 1;
// do {
//   console.log(i);

//   i++;
// } while (i <= 100);

let i = 1;
do {
  console.log(i);

  if (i >= 50) {
    break;
  }

  i++;
} while (i < 100);

console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 52 ');

let j = 1;

do {
  console.log(j);

  if (j >= 52) {
    break;
  }
  j++;
} while (j < 100);

console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 51.');

let k = 1;

do {
  console.log(k);

  if (k >= 51) {
    break;
  }
  k++;
} while (k < 100);

console.warn(
  'Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l)',
);

let l = 1;

do {
  console.log(l);

  if (l >= 12) {
    break;
  }
  l++;
} while (l < 100);

console.warn(
  'Folosind keywordul continue afiseaza doar numerele impare intre 8 si 32. ',
);

let m = 0;

do {
  if (m >= 32) {
    break;
  }

  if (m % 2 === 0 || m < 8) {
    m++;
    continue;
  }
  console.log(m);
  m++;
} while (m < 100);

console.warn(
  'Folosind metoda prompt de trei ori cere utilizatorului un numar, o limita inferioara si o limita superioara apoi afiseaza toti multiplii de numar intre limita inferioara si limita superioara introduse.',
);

let number = prompt(`scrie un numar pentru care vrei sa aflii multipli`);
let maxNumber = prompt(`scrie limita maxima`);
let minNumber = prompt(`scrie limita minima`);

do {
  if (minNumber % number === 0) {
    console.log(minNumber);
  }
  minNumber++;
} while (minNumber <= maxNumber);
