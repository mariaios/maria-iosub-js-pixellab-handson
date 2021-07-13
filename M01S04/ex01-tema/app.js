console.warn(
  'Foloseste aceeasi metoda pentru a captura numele utilizatorului si pentru a afisa in document mesajul: “Numele meu este: xxx yyy.”',
);
console.warn(
  'Folosind aceeasi metoda afiseaza in document propozitia: “Numele introdus are xxx caractere.” Inlocuieste spatiile cu stringul gol pentru a nu le numara. ',
);
console.warn(
  'Folosind prompt() si String.includes() afiseaza mesajul: “Numele introdus contine|nu contine litera a.”',
);

let value = prompt('Introdu numele si prenumele tau:');
let paragraphElement = document.getElementById('message');
let paragraphElementLetter = document.getElementById('letterInclude');
let message = '';
const letter = 'a';

let characterNumber = value.replace(' ', '').length;

message = `Numele meu este: ${value}. Numele introdus are ${characterNumber} caractere.`;

paragraphElement.innerText = message;

if (value.toLowerCase().includes(letter)) {
  paragraphElementLetter.innerText = `Numele introdus contine litera ${letter}.`;
} else {
  paragraphElementLetter.innerText = `Numele introdus nu contine litera ${letter}.`;
}
