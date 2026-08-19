const fireBtn = document.querySelector('.fire-btn');
const shotCounter = document.querySelector('.shot-counter');
const resetButton = document.querySelector('.reset-btn');

let shotN = JSON.parse(localStorage.getItem('shots')) ?? 0;

  fireBtn.addEventListener('click', () => {

    shotN++;

    localStorage.setItem('shots', JSON.stringify(shotN));

    shotCounter.innerHTML = `<p>You shot: ${shotN}</p>`;

  });

  resetButton.addEventListener('click', () => {
    shotN = 0;
    localStorage.setItem('shots', JSON.stringify(shotN));

    shotCounter.innerHTML = `<p>You shot: ${shotN}</p>`;
  });

  







  