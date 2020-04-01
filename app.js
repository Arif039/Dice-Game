

var score, roundScore, activePlayer, gamePlaying;

/*
score = [0,0];
roundScore = 0;
activePlayer = 0;
*/

/*
document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
*/

init();

document.querySelector('.btn-roll').addEventListener('click', function(){

    if(gamePlaying){

        //1. Random Number
        var dice = Math.floor(Math.random() * 6) + 1;

        // 2.Display the result.
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        // 3. Update the round Score IF the rolled was NOT a 1.
        if (dice !== 1) {
            // Add Score.
            roundScore += dice; // roundscore = roundScore + dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        }
        else {
            // Next Player.

            nextPlayer();

        }

    }
    

});


document.querySelector('.btn-hold').addEventListener('click', function(){

    if(gamePlaying){

        // Add current score to the global score.
        score[activePlayer] += roundScore;

        // Update the user UI.
        document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];


        // Check Player won the game.

        if (score[activePlayer] >= 20) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-pannel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-pannel').classList.remove('active');

            gamePlaying = false;
        }
        else {
            // Next Player
            nextPlayer();
        }
        
    }
    
    


});

function nextPlayer (){

    /*
        if(activePlayer === 0){
            activePlayer = 1;
        }
        else {
            activePlayer = 0;
        }
        */

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    /*
    document.querySelector('.player-0-pannel').classList.remove('active');
    document.querySelector('.player-1-pannel').classList.add('active');
    */

    document.querySelector('.player-0-pannel').classList.toggle('active');
    document.querySelector('.player-1-pannel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';


}

/*
document.querySelector('.btn-new').addEventListener('click', function(){

    
    score = [0,0,];
    activePlayer = 0;
    roundScore = 0;
    
    init();
});
*/

document.querySelector('.btn-new').addEventListener('click', init);

function init(){

    score = [0, 0,];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player-1';
    document.getElementById('name-1').textContent = 'Player-2';

    document.querySelector('.player-0-pannel').classList.remove('winner');
    document.querySelector('.player-1-pannel').classList.remove('winner');

    document.querySelector('.player-0-pannel').classList.remove('active');
    document.querySelector('.player-1-pannel').classList.remove('active');

    document.querySelector('.player-0-pannel').classList.add('active');



}

// document.querySelector('#current-' + activePlayer).innerHTML = dice;

// var x = document.querySelector('#score-1').textContent;
// console.log(x);
