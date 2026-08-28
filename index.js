const fireBtn = document.querySelector('.fire-btn');
const shotCounter = document.querySelector('.shot-counter');
const resetButton = document.querySelector('.reset-btn');
const flipBtn = document.querySelector('.flip-btn');
const cursor = document.querySelector('.cursor');
const reloadBtn = document.querySelector('.reload-btn');
const ammoCounter = document.querySelector('.ammo');

const fire = document.querySelector('.fire');

let ammo = 0;

let shotN = JSON.parse(localStorage.getItem('shots')) ?? 0; /*This is for users that will join the site for the first time.*/

ammoCounter.innerHTML = `AMMO: ${ammo}`;
shotCounter.innerHTML = `<p>You shot: ${shotN}</p>`;

const sounds = {
  audio1: new Audio('sounds/fire-whoosh.wav'),
  audio2: new Audio('sounds/gun-reloading.mp3'),
  audio3: new Audio('sounds/peproll1.mp3'),
  audio4: new Audio('sounds/wrong-answer-sound-effect.mp3')
}

cursor.addEventListener('animationend', () => {
  cursor.classList.remove('shoot', 'reload', 'spin');
});


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
/*this fire button is our main problem, here I want to make my cursor use that style to make a shooting effect. */
  fireBtn.addEventListener('click', () => {

    ammo--;
    
    ammoCounter.innerHTML = `AMMO: ${ammo}`;

    

    sounds.audio1.play();

    shotN++;

    localStorage.setItem('shots', JSON.stringify(shotN));

    shotCounter.innerHTML = `<p>You shot: ${shotN}</p>`;

    if (ammo <= 0) {
      sounds.audio4.play();
      ammo = 0;
    }

    cursor.classList.remove('shoot');

    void cursor.offsetWidth

    cursor.classList.add('shoot');

  });

  resetButton.addEventListener('click', () => {
    shotN = 0;

    localStorage.setItem('shots', JSON.stringify(shotN));

    shotCounter.innerHTML = `<p>You shot: ${shotN}</p>`;
  });

  reloadBtn.addEventListener('click', () => {

    if (ammo < 5) {
      ammo ++;
      ammoCounter.innerHTML = `AMMO: ${ammo}`;

    sounds.audio2.play();

    cursor.classList.remove('reload');

    void cursor.offsetWidth

    cursor.classList.add('reload');

    } else {
      sounds.audio4.play();
    }

  })

  flipBtn.addEventListener('click', () => {

    sounds.audio3.play();
    /*if (cursor.classList.contains('spin')) {
      cursor.classList.remove('spin');
    } else {
      cursor.classList.add('spin');
    }*/

    cursor.classList.remove('spin');

    void cursor.offsetWidth; //Makes that element update very fast

    cursor.classList.add('spin');

  })
  









  