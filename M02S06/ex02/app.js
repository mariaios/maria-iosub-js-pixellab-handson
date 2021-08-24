
// square surface
const processArguments = process.argv;
//                           V rest operator
const [nodePath, modulePath, ...arguments] = processArguments;

if (arguments.length !== 1) {
  console.log('Ne trebuie un singur parametru, latura a patratului');
  process.exit(0);
}

let value = arguments[0];
value = parseFloat(value);

if (isNaN(value)) {
  console.log('Latura trebuie sa fie numerica');
  process.exit(0);
}

console.log(calculateSquareSurface(value));

// hoisting
function calculateSquareSurface(l) {
  return l ** 2;
}







