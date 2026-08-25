const fireBtn = document.querySelector('.fire-btn');
const shotCounter = document.querySelector('.shot-counter');
const resetButton = document.querySelector('.reset-btn');
const flipBtn = document.querySelector('.flip-btn');
const cursor = document.querySelector('.pointer');
const reloadBtn = document.querySelector('.reload-btn');

const sounds = {
  audio1: new Audio('sounds/fire-whoosh.wav'),
  audio2: new Audio('sounds/gun-reloading.mp3'),
  audio3: new Audio('sounds/peproll1.mp3')
}


timer();

function timer() {

  let hour = 0;
  let minute = 0;
  let seconds = 0;

  setInterval(() => {
    
    seconds++

    if (seconds > 59) {
      seconds = 0;
      minute++
    }

    if (minute > 60) {
      hour++
    }

    document.querySelector('.timer').innerHTML = `Time played: ${hour}:${minute}:${seconds}`;

  }, 1000)
}



fireBtn.addEventListener('click', () => {
  sounds.audio1.play();
});

flipBtn.addEventListener('click', () => {
  sounds.audio3.play();
});



let shotN = JSON.parse(localStorage.getItem('shots')) ?? 0; /*This is for users that will join the site for the first time.*/

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

  reloadBtn.addEventListener('click', () => {

    sounds.audio2.play();

    cursor.classList.remove('reload');

    void cursor.offsetWidth

    cursor.classList.add('reload');
  })

  flipBtn.addEventListener('click', () => {

    /*if (cursor.classList.contains('spin')) {
      cursor.classList.remove('spin');
    } else {
      cursor.classList.add('spin');
    }*/

    cursor.classList.remove('spin');

    void cursor.offsetWidth; //Makes that element update very fast

    cursor.classList.add('spin');

  })
  









  