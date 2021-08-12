const paragraphLog = (message) => {
  let logContainer = document.querySelector('.logs');
  const messageParagraph = document.createElement('p');

  if (logContainer === null) {
    logContainer = document.createElement('div');
    logContainer.classList.add('logs');

    document.body.appendChild(logContainer);
  }

  messageParagraph.innerText = message;
  logContainer.append(messageParagraph);
};

console.domLog = paragraphLog;
