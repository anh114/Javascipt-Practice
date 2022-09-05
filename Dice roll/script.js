'use strict';
const score0 = document.getElementById('score--0');
const currentScore0 = document.getElementById('current--0');
const player0 = document.querySelector('.player--0');
const score1 = document.getElementById('score--1');
const currentScore1 = document.getElementById('current--1');
const player1 = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore, scores, active, playing;
const init = function () {
  active = 0;
  score0.textContent = 0;
  score1.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  currentScore = 0;
  scores = [0, 0];
  diceEl.classList.add('hidden');

  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  playing = true;
};
init();
const switchPlayer = function () {
  document.getElementById(`current--${active}`).textContent = 0;
  active = active === 0 ? 1 : 0;
  currentScore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    // Check roll dice
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${active}`).textContent = currentScore;
    } else {
      // switch player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[active] += currentScore;
    document.getElementById(`score--${active}`).textContent = scores[active];
  }
  if (scores[active] >= 20) {
    // winner
    document
      .querySelector(`.player--${active}`)
      .classList.add('player--winner');

    playing = false;
    // pause game
  } else {
    // switch player
    switchPlayer();
  }
});

btnNew.addEventListener('click', function () {
  init();
});
