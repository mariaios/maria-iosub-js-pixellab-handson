const processArguments = process.argv;
const [, , ...arguments] = processArguments;


if (arguments.length !== 2) {
  console.log('Ne trebuie doua numere');
  process.exit(0);
}

console.log(arguments);



// hoisting
function calculateRectangleSurface(L, l) {
  return L * l;
}

function validateInputNumber(number) {
  number = parseFloat(number);

  if (isNaN(number)) {
    return false;
  }

  return true;
}
