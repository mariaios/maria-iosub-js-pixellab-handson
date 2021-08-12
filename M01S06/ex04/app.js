// SIAF IIFE
(() => {
  const showMessage = (message) => {
    const paragraphElement = document.createElement('p');

    paragraphElement.innerText = message;
    document.body.append(paragraphElement);
  };

  document.addEventListener('DOMContentLoaded', () => {
    const stage = document.querySelector('.stage');
    // let paragraphElement = document.querySelector('.para');

    // if (paragraphElement === null) {
    //   paragraphElement = document.createElement('p');
    //   paragraphElement.classList.add('para');

    //   document.body.append(paragraphElement);
    // }

    stage.addEventListener('mouseover', () => {
      const message = 'Mouseul este pe scena';

      showMessage(message);
    });

    stage.addEventListener('mouseout', () => {
      const message = 'Mouseul nu este pe scena';

      showMessage(message);
    });
  });
})();
