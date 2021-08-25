
var score,roundScore, previousDice, activePlayer, gamePlaying, previousPlayer;

 

init();

// QuerySelector selects only the first item it finds.To change the text in that class or id we selected we use textContent method
									
//  document.querySelector('#current-'+activePlayer).textContent = dice;          

// textContent can only set plain text but if we want to put some html in the selected element we have to use innerHTML

// we should include html elements in single quotes otherwise javascript considers it as javascript code and sometimes we can get 
// error like in this case <em>-emphasis text(text in italic) because there is no such element in javascript 

// document.querySelector('#current-'+activePlayer).innerHTML = '<em>' + dice + '</em>';


// textContent is not only for setting values but also used to get value from an id or class and log the value to the console 

// var x = document.querySelector('#num1').textContent;
// console.log(x);

// we can also change the style of a html element using querySelector in this case we set the dice dislayed in the centre to disappear 

 

// getElementById is used to select only ids and not classes there is no need to specify # before the id name and it is faster than querySelector
 
// Event listener is used to listen to an event such as in this case click event and perform some function this function is called
// anonymous function can be used only within EventListener function and has no name
 document.querySelector('.roll').addEventListener('click', function(){

 		if(gamePlaying)
 		{
 			var dice = Math.floor(Math.random() * 6) + 1;
 			previousPlayer = activePlayer;
 			
 			if(dice === 6 && dice === previousDice && previousPlayer === activePlayer)
 			{
 				document.querySelector('.dice').style.display = 'none';
 				active();
 			}

	 		roundScore += dice;

	 		var diceDOM = document.querySelector('.dice');
	 		

	 		if(dice != 1)
	 		{
	 			document.querySelector('#current-' + activePlayer).textContent = roundScore;
	 			diceDOM.style.display = 'block';
	 			diceDOM.src = '../images/dice' + dice + '.png';
	 			diceDOM.classList.add('dice-style');
	 		}
	 		else
	 		{	
	 			diceDOM.style.display = 'none';
	 			active();
	 		}

	 		previousDice = dice;

 		}
 		
 });

 // classList.add adds a specific class to the current element especially styles
 // classList remove removes a class from the current element especially styles
 // classList toggle adds a class if the element does not have that class and removes the class if that element already has that class

 document.querySelector('.pause').addEventListener('click', function()
 {
 		if(gamePlaying)
 		{
 			score[activePlayer] += roundScore;

	 		document.getElementById('num' + activePlayer).textContent = score[activePlayer];

	 		
	 		if(score[activePlayer] >= 100)
	 		{
	 			document.getElementById('player-' + activePlayer).textContent = 'Winner!'
	 			document.getElementById('player-' + activePlayer).classList.add('winner');
	 			gamePlaying = false;
	 			document.getElementById('player-' + 0).classList.remove('player-shift');
	 		    document.getElementById('player-' + 1).classList.remove('player-shift');
	 		    document.querySelector('#current-' + activePlayer).textContent = 0;
	 		}

	 		else
	 		{
	 			document.querySelector('.dice').style.display = 'none';
	 			active();
	 		}

 		
 		}
 		
 });

function active()
{
	document.getElementById('player-' + activePlayer).classList.toggle('player-shift')
	document.querySelector('#current-' + activePlayer).textContent = 0;
 	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
 	roundScore = 0;
 	document.getElementById('player-' + activePlayer).classList.toggle('player-shift');
}


// here instead of putting a anonymous function and calling another function init in that function we can directly specify the
// name of the function without paranthesis because with paranthesis that will get called but here we are passing the init 
//function as a parameter to the event listener function so we dont specify paranthesis

document.querySelector('.new').addEventListener('click', init);


function init()
{
	score = [0,0];
    roundScore = 0;
    previousDice = 0;
    previousPlayer = 0;
    activePlayer = 0;
    gamePlaying = true;

	document.getElementById('num0').textContent = 0;
	document.getElementById('num1').textContent = 0;
	document.getElementById('current-0').textContent = 0;
	document.getElementById('current-0').textContent = 0;
	document.getElementById('player-' + 0).classList.add('player-shift');
	document.getElementById('player-' + 0).textContent = 'player 1'
	document.getElementById('player-' + 1).textContent = 'player 2'
	document.getElementById('player-' + 0).classList.remove('winner');
	document.getElementById('player-' + 1).classList.remove('winner');

	document.querySelector('.dice').style.display = 'none';



}