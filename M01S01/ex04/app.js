var inputRadius = document.getElementById('radius');
var elementResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener(
  'submit',
  function (event) {
    var radius = inputRadius.value || 0;
    var result = 0;

    result = Math.PI * radius ** 2;

    elementResult.innerText = result;

    event.preventDefault();
  },
  false,
);
