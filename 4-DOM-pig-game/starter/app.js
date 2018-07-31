/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var playerScore = [0,0]
var activePlayer = 0;
var score = 0;
var diceRoll =0;
// int
document.querySelector('.dice').style.display = 'none';
document.getElementById('score-1').textContent = 0;
document.getElementById('score-0').textContent = 0;
document.getElementById('current-1').textContent = 0;
document.getElementById('current-0').textContent = 0;



//logic

document.querySelector('.btn-roll').addEventListener('click', function() {

  //1 tap button roll dice
  //2 active player gets a currentscore
diceRoll = Math.floor(Math.random()*6+1);
document.querySelector('.dice').style.display = 'block';
document.querySelector('.dice').src = 'dice-' + diceRoll + '.png';
  if (diceRoll !== 1) {
    score += diceRoll;
    document.getElementById('current-'+ activePlayer).textContent = score;

  }  else {
    nextPlayer();

  }
 if ( playerScore[activePlayer] >=100 ) {
   document.querySelector('.dice').style.display = 'none';
   document.getElementById('score-' + activePlayer).textContent = 'Winner!';
 }

})

//3 if player press HOLD
document.querySelector('.btn-hold').addEventListener('click', function() {
document.getElementById('score-0').textContent = score;
nextPlayer();

})

//3.1 getHisScore to GLOBAL
//3.1 NextPlayer Plays


var nextPlayer = function () {
document.getElementById('current-'+ activePlayer).textContent = 0;
activePlayer === 0? activePlayer = 1: activePlayer =0;
score = 0;

document.getElementById('current-1').textContent = 0;
document.getElementById('current-0').textContent = 0;

document.querySelector('.player-0-panel').classList.toggle('active');
document.querySelector('.player-1-panel').classList.toggle('active');
document.querySelector('.dice').style.display = 'none';
}
