var value = window.prompt();
var paragraphElement = document.getElementById('message');
var message = '';
// console.log(`Valoarea este: ${value}`);
// var message = `Valoarea este: ${value}`;

value = Number(value);

if (value % 2 === 0) {
  message = 'NUmarul este par';
} else {
  message = 'Numarul e impar';
}

if (isNaN(value)) {
  message = 'Nu ai introdus un numar';
}

paragraphElement.innerText = message;
