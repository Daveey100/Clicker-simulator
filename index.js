const fireBtn = document.querySelector('.fire-btn');
const shotCounter = document.querySelector('.shot-counter');

let shotN = JSON.parse(localStorage.getItem('shots')) ?? 0;

  fireBtn.addEventListener('click', () => {

    shotN++;

    localStorage.setItem('shots', JSON.stringify(shotN));

    shotCounter.innerHTML = `<p>You shot: ${shotN}</p>`;

  })




  