'use strict';

//selecting our variabls
const score0El=document.getElementById('score--0');
const score1El=document.getElementById('score--1');
const diceEl=document.querySelector('.dice');
const btnNew=document.querySelector('.btn--new');
const btnRoll=document.querySelector('.btn--roll');
const btnHold=document.querySelector('.btn--hold');
const current0El=document.getElementById('current--0');
const current1El=document.getElementById('current--1');
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');

const scores=[0,0];
let activePlayer=0;                 //to keep track of current player
let currentScore=0;
let playing=true;

let diceScore=0;
//initial conditions
score0El.textContent=0;
score1El.textContent=0;

//hiding dice initially:create a class named hidden and use display:none in css 
diceEl.classList.add('hidden');             //.classList.add is used to add more class names to elements;hides the dice

function switchPlayer(){
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;
    activePlayer=activePlayer===0?1:0;           //conditional operator
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');  
}

btnRoll.addEventListener('click', function(){
    if(playing){
    const dice=Math.trunc(Math.random()*6)+1;       //math.random generates number from0 to 0.9, math.trunc removes the 0 and gives the value after decimal,multiplying by 6 gives value for 0 to 0.5555 adding 1 here will give value from 1 to 6
    diceEl.classList.remove('hidden');
    diceEl.src=`${dice}.png`;
    if(dice!==1){
        currentScore+=dice;
        document.getElementById(`current--${activePlayer}`).textContent=currentScore;
        //current0El.textContent=currentScore;
    }
    else{
        switchPlayer();  
    }
}
})
btnHold.addEventListener('click', function(){
    if(playing){
    //add current score to active player,check if it is 100 or not,if 100 declare winner, else switch player
    scores[activePlayer]+=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent=scores[activePlayer];
    if(scores[activePlayer]>=100){
        playing=false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player-winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player-active');
    }
    else{
        switchPlayer();
    }
}
})