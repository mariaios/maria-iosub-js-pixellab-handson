let i = 0;
let j = 1;
let k = 1;
let l = 1;
let m = 1;
let n = 1;

// while (i <= 100) {
//   console.log(i);

//   i++;
// }

// i = 101;
// while (i <= 100) {
//   console.log(i);

//   i++;
// }

// while (i < 100) {
//   console.log(i);

//   i++;
// }

while (i < 100) {
  console.log(i);

  if (i >= 50) {
    break;
  }

  i++;
}

console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 67.');

while (j < 100) {
  console.log(j);

  if (j >= 67) {
    break;
  }

  j++;
}

console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 66.');

while (k < 100) {
  console.log(k);

  if (k > 65) {
    break;
  }

  k++;
}

console.warn(
  'Folosind keywordul break opreste bucla atunci cand numarul este egal cu 12 (dar afiseaza-l).',
);

while (l < 100) {
  if (l <= 12) {
    console.log(l);
  } else {
    break;
  }

  l++;
}

console.warn(
  'Folosind keywordul continue afiseaza doar numerele pare intre 1 si 32 (inclusiv). ',
);

while (m < 100) {
  if (m >= 33) {
    break;
  }

  if (m % 2 !== 0) {
    m++;
    continue;
  }
  console.log(m);
  m++;
}

console.warn(
  'Folosind metoda prompt de doua ori cere utilizatorului un numar si o limita superioara apoi afiseaza toti multiplii de numar intre 5 si limita superioara introduse.',
);

let number = prompt('Scrie un numar');
let maxNumber = prompt('scrie limita maxima');
let x = 5;

while (x <= maxNumber) {
  if (x % number === 0) {
    console.log(x);
  }
  x++;
}
