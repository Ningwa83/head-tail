let score = {
		plays: 0,
		wins: 0,
		losses: 0
		};
		
		updateScore();

let isAutoPlaying = false;
let intervalId;
  
    function autoPlay(){
 let inputElement = document.querySelector('.js-auto-play-button');
if(!isAutoPlaying){
inputElement.innerHTML = 'Auto Playing. Stop? ';
inputElement.classList.add('is-playing');
intervalId = setInterval(function(){
const choice = coinToss();
startGame(choice);
},2000);
isAutoPlaying = true;
}
else{
clearInterval(intervalId);
isAutoPlaying = false;
inputElement.innerHTML = 'Auto Play';
inputElement.classList.remove('is-playing');

}
}
document.querySelector('.js-auto-play-button').addEventListener('click', () => {
autoPlay();
}
);

  document.querySelector('.js-heads-button').addEventListener('click', () => {
	document.querySelector('.js-tossed').innerHTML = '';
    display1();
   setTimeout(() => {
	startGame('heads');
	clearInterval(intervalId2);
	selection1.innerHTML = `<img src="heads.png" class="move-icon">`;
	
	}, 2000);
   });
   
     document.querySelector('.js-tails-button').addEventListener('click', () => {
	document.querySelector('.js-tossed').innerHTML = '';
    display2();
   setTimeout(() => {
	startGame('tails');
	clearInterval(intervalId3);
	selection2.innerHTML = `<img src="tails.png" class="move-icon">`;
	
	}, 2000);
   });


// function to generate toss result
	function coinToss(){
const randomNumber = Math.random();
let toss = '';
if(randomNumber < 0.5)
	{
	toss = ('heads');
	}
else if(randomNumber >= 0.5)
	{
	toss = ('tails');
	}
	return toss;
	}
	
	
// main function 
	function startGame(choice){
	const toss = coinToss();
	let result = '';
	if(choice === toss)
	{
	result = 'winner';
	}
	else if(choice != toss)
	{
	result = 'loser';
	}
	
		document.querySelector('.js-tossed').innerHTML = `<img src="${toss}.png" class="move-icon"> is Tossed`;		
	
	document.querySelector('.js-result').innerHTML = result;
	      document.querySelector('.what').innerHTML = toss;
	
	if(result === 'winner')
	{
	score.plays ++; score.wins ++;
	}
	else if(result === 'loser')
	{
	score.plays ++; score.losses ++;
	}
 updateScore();	     			
}
 


function updateScore()
	{
	
	document.querySelector('.js-score').innerHTML = `plays: ${score.plays}, wins: ${score.wins}, losses: ${score.losses}`;
	if(score.plays === 10)
	{
	if(score.wins >= 6)
	{
	alert('congrats baby! you won first prize and became lucky winner of dinner🍲🥘 with ningwa😉 ');
	}
	else if(score.wins >= 4 && score.wins < 6)
	{
	alert('congrats baby! you won second prize and became a winner of coffee☕️☕️ with ningwa😁');
	}
	else if(score.wins < 4)
	{
	alert('not your day, baby!');
	}
	resetScore();
	}
	}
	
	function resetScore(){
	score.plays = 0;
	score.wins = 0;
	score.losses = 0;
	updateScore();
	}
	
	document.querySelector('.js-reset-score-button').addEventListener('click', () => {
	resetScore();
	}
	);
	
	
	let intervalId2;
	let selection1 = document.querySelector('.js-heads-button');
	let intervalId3;
	let selection2 = document.querySelector('.js-tails-button');
	
	function display1(){
	intervalId2 = setInterval(() => {
	
	if(selection1.innerHTML === '' || selection1.innerHTML === `<img src="heads.png" class="move-icon">`){selection1.innerHTML = `<img src="tails.png" class="move-icon">`;
	}
	else if (selection1.innerHTML === '' || selection1.innerHTML === `<img src="tails.png" class="move-icon">`){selection1.innerHTML = `<img src="heads.png" class="move-icon">`;}
	}, 150);
	}
	
	function display2(){
	intervalId3 = setInterval(() => {
	
	if(selection2.innerHTML === '' || selection2.innerHTML === `<img src="tails.png" class="move-icon">`){selection2.innerHTML = `<img src="heads.png" class="move-icon">`;
	}
	else if (selection2.innerHTML === '' || selection2.innerHTML === `<img src="heads.png" class="move-icon">`){selection2.innerHTML = `<img src="tails.png" class="move-icon">`;}
	}, 150);
	}
	