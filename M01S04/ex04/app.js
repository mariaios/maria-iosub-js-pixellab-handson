var i;

// Varianta corecta (afiseaza pana la 100 dar oprestete la 50  !!!se opreste):
// for (i = 1; i < 100; i++) {
//   console.log(i);

//   if (i >= 50) {
//     break;
//   }
// }

// for (i = 1; i < 100; i++) {
//   if (i <= 50) {
//     console.log(i);
//   }
// }
// numara pana la 100 dar afiseaza pana la 50 !!! NU se opreste din numarat desi nu mai afiseaza

// for (i = 1; i <= 100; i++) {
// if (i % 2 !== 0) {
// continue;
// }
//   console.log(i);
// }

// for (i = 0; i <= 100; i = i + 2) {
//   console.log(i);
// }

// for (i = 0; i <= 100; i++) {
//   if (i % 5 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 89.');

for (let i = 1; i <= 89; i++) {
  console.log(i);
}

console.warn('Modifica exemplul astfel incat bucla sa numere de la 1 la 88 .');

for (let i = 1; i < 89; i++) {
  console.log(i);
}

console.warn(
  'Folosind keywordul break opreste bucla atunci cand numarul este egal cu 42.',
);

for (let i = 1; i < 89; i++) {
  console.log(i);

  if (i >= 42) {
    break;
  }
}
// interesant ca daca am facut cu else console.log(i) nu mai apuca sa scrie 42 pt ca facea break inainte

console.warn(
  'Folosind keywordul continue, afiseaza doar numele impare intre 1 si 89.',
);

for (let i = 1; i <= 89; i++) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
}

console.warn(
  'In mod similar, afiseaza doar numerele care sunt divizibile cu 3.',
);

for (let i = 1; i <= 89; i++) {
  if (i % 3 !== 0) {
    continue;
  }
  console.log(i);
}
