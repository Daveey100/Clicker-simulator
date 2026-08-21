const fireBtn = document.querySelector('.fire-btn');
const shotCounter = document.querySelector('.shot-counter');
const resetButton = document.querySelector('.reset-btn');
const flipBtn = document.querySelector('.flip-btn');
const sounds = {
  audio1: new Audio('sounds/fire-whoosh.wav'),
  audio2: new Audio('sounds/gun-reloading.mp3'),
  audio3: new Audio('sounds/peproll1.mp3')
}


timer();

function timer() {

  let x = 0

  setInterval(() => {
    
    x++;
    console.log(x);

  }, 1000)
}



fireBtn.addEventListener('click', () => {
  sounds.audio1.play();
});

flipBtn.addEventListener('click', () => {
  sounds.audio3.play();
});



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

  









  