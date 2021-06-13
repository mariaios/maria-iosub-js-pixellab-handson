console.log('Imi fac tema la JavaScript.');

/* dupa asta Pixelltabul s-a facut verde
asa ca am zis sa mai incerc cate ceva */

document.getElementById('hello').onclick = function nume() {
  alert('Maria');
};

document.getElementById('btn1').onclick = function apasa() {
  console.log('Am fost apasat. Mai apasa!');
};

document.getElementById('btn2').onclick = function totApasa() {
  alert('Butonul a fost apasat.');
};

document.getElementById('btn3').onmouseover = function hover() {
  console.log('Ai vrea sa apesi acest buton?');
};

document.getElementById('btn3').onclick = function cumTeCheama() {
  var nume = prompt('Cum te cheama? (am uitat)');
  console.log(nume);
};

document.getElementById('body').onload = function incarcare() {
  alert('Bine ai venit!');
  var nume2 = prompt('Cum te cheama?');
  console.log(nume2);
};
