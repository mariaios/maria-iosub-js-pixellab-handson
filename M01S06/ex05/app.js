(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const showButton = document.querySelector('#showButton');
    const toggleEventButton = document.querySelector('#toggleEventButton');
    const removeButtonsButton = document.querySelector('.remove_buttons');
    let eventBound = true;

    const showAlert = () => {
      alert('Butonul a fost apasat');
    };

    const showDomMessage = (message) => {
      let paragraphElement = document.querySelector('.para');

      if (paragraphElement === null) {
        paragraphElement = document.createElement('p');
        paragraphElement.classList.add('para');

        paragraphElement.innerText = message;

        document.body.append(paragraphElement);

        return;
      }

      paragraphElement.innerText = message;
    };

    showButton.addEventListener('click', showAlert);
    showDomMessage('Alerta va fi afisata');

    toggleEventButton.addEventListener('click', (event) => {
      if (eventBound === true) {
        showButton.removeEventListener('click', showAlert);
        event.target.innerText = 'Porneste afisarea';
        showDomMessage('Alerta nu va fi afisata');
        eventBound = false;
      } else {
        showButton.addEventListener('click', showAlert);
        event.target.innerText = 'Opreste afisarea';
        showDomMessage('Alerta va fi afisata');
        eventBound = true;
      }
    });

    removeButtonsButton.addEventListener('click', () => {
      if (confirm('Esti sigur ca vrei sa stergi') === true) {
        showButton.remove();
        toggleEventButton.remove();
      }
    });
  });
})();
