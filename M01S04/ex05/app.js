
var refferenceNumber = prompt('Introdu un numar:')

for (let i = 0; i <= 100; i++) {
  console.log(i);

  if (i % refferenceNumber !== 0) {
    continue;
  }

  console.log(`Acest numar este multiplu de ${refferenceNumber}.`)
};
