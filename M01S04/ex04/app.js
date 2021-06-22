var i;

// Varianta corecta (afiseaza pana la 100 dar oprestete la 50  !!!se opreste):
for (i = 1; i < 100; i++) {
  console.log(i);

  if (i >= 50) {
    break;
  }
}

// for (i = 1; i < 100; i++) {
//   if (i <= 50) {
//     console.log(i);
//   }
// }
// numara pana la 100 dar afiseaza pana la 50 !!! NU se opreste din numarat desi nu mai afiseaza
