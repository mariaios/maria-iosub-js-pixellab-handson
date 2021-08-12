// var p = document.createElement('p');
// p.innerText = 'Textul care trebuie sa apara in paragraf';
// p.id = 'myParagraph';
// p.classList.add('clase', 'de', 'css');

// document.body.append(p);

const $p = $('<p>', {
  id: 'myParagraph',
  text: 'Textul care trebuie sa apara in paragraf',
  class: 'class de css',
});

const $body = $('body');
$body.append($p);

console.warn(
  '2 Creaza inca un paragraf cu idul message care sa contina textul: “Parola nu trebuie sa fie mai mica de 5 caractere.',
);
// v1
// const $errorMessage = $('<p>', {
//   id: 'message',
//   text: 'Parola nu trebuie sa fie mai mica de 5 caractere.',
// });
// $errorMessage.appendTo($body);

// v2
const $errorMessage = $('<p>', {
  id: 'message',
  text: 'Parola nu trebuie sa fie mai mica de 5 caractere.',
}).appendTo($body);

setTimeout(() => {
  $errorMessage.addClass('error');
}, 5000);

console.warn(
  '5 Selecteaza paragraful anterior (#myParagraph) si schimba textul sau in textul: “Am schimbat dinamic acest paragraf.” Folosind metoda .text() ',
);

$('#myParagraph').text('Am schimbat dinamic acest paragraf.');

// 6 Creeaza un element de tip span cu idul example si cu textul “ParolaMea” si adauga-l la cel de-al doilea paragraf folosind metoda .appendTo()
// v1
// $('<span>', {
//   id: 'example',
//   text: 'Parola mea',
// }).appendTo($errorMessage);

// v2 (mai putin performant ca v1)
$('<span>', {
  id: 'example',
  text: 'Parola mea',
}).appendTo($('#message'));

/*
Creeaza un element de tip h2 cu textul “Mesaje” si adauga-l la inceputul div-ului cu clasa container folosind metoda .prependTo()
*/

const $container = $('.container');
$('<h2>', {
  text: 'Mesaje',
}).prependTo($container);
