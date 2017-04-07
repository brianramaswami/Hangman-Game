//array of potential words
// add as many words as you would like
var potentialWordsArray = ["madonna", "blue", "purple", "california", "computer"];

// array of spaces of word.
var initialWord;
//array of spaces for word
var initialWordArray = [];
// array of word.
var finalWord = [];

//array of letters guessed
var  guessedLetters = [];

//length of the word
var wordLength;

//checks to see if word matches array
var positionCount = 0;

//check to see if letter in word doesnt match
var positionCount1 = 0;

// win count
var win_Count = 0;

//Guesses remaining
var guesses_Remaining = 15;

var key;

//letter 
var letter;

//controls the game status
var game = "on";

//controls if guessed right
var guessedRight = 0;

//controls for if won game
var didWin = "";

//controls for if lost game
var didLose = "";

//function that randomly takes a word from potentialWordsArray and makes spaces for that number of characters
function pickWord(array) {
	initialWord = potentialWordsArray[Math.floor(Math.random() * potentialWordsArray.length)];
	wordLength = initialWord.length;
	for (var i = 0; i < wordLength ; i++) {
		initialWordArray.push(" _ ");
	}
}

//function that sets array of guessed letters and the array of the word.
function setGuessedArray() {
	var letter = prompt("Guess A Letter!");
	// letter = event.key;
	if (letter != 1 && letter != 2) {
		guessedRight = 0;
		guessedLetters.push(letter);
		console.log(guessedLetters);
		for (var i = 0; i < wordLength; i++) {
			if (letter == initialWord.charAt(i)) {
				initialWordArray[i] = letter;
				displayWords();
				guessedRight = 1; //guessed right
				console.log(initialWordArray); //testing
			} else{
				document.getElementById("array of guessed letters").innerHTML = guessedLetters.join(' ');
			}
		}
		if (guessedRight != 1) {
			guesses_Remaining--;
			guessesRemaining();	
		}
	}
}

//resets all values
function resetValues() {
	initialWordArray = [];
	guessedLetters = [];
	positionCount  = 0;
	positionCount1 = 0;
	guesses_Remaining = 15;
	didWin = "False";
	didLose = "False";
}

//display the spaces for word
function displayWords() {
	document.getElementById("array of letters").innerHTML = initialWordArray.join(' ');
}

//display win count
function winCount(){
	document.getElementById("win_count_position").innerHTML =  "Wins : "  + win_Count;	
}

//changes the guesses
function guessesRemaining() {
	document.getElementById("guesses count").innerHTML =  guesses_Remaining;	
}

function ResultLoss() {
	if(guesses_Remaining == 0){
		// alert("YOU LOSE");
		// alert("Press 0 to start over");
		didLose = "True";
		document.getElementById("instructions").innerHTML =  "YOU LOSE! Press 0 to start over!";
	}
}

//check if won
function ResultWin() {
	positionCount1 = 0;
	for (var i = 0; i < wordLength; i++) {
		if(initialWord.charAt(i) == initialWordArray[i]){
			positionCount = 1;
		} else {
			positionCount1 = 1; 
		} 
	}	 
	if(positionCount == 1 && positionCount1 == 0){
		// alert("YOU WON")
		win_Count++
		winCount();
		// alert("Press 1 to generate new word or 0 to start over");
		didWin = "True";
		document.getElementById("instructions").innerHTML =  "YOU WON!! Press 1 To Generate New Word Or 0 To Start Over";
	}
}

//reset wins
function resetWins() {
	win_Count = 0;
}

//ResultTie
function ResultTie() {
		if (didLose == "False" && didWin == "False") {
			setGuessedArray();
		}
	}	

//check Result
function checkResult() {
	
}

//new word
function newWord() {
	resetValues();
	winCount();
	pickWord(potentialWordsArray);
	console.log(initialWord);
	displayWords();
	guessesRemaining();
	document.getElementById("array of guessed letters").innerHTML = guessedLetters.join(' ');
	document.getElementById("instructions").innerHTML =  "Press 2 Enter A Letter, Press 1 to pick a different word, Or Press 0 To Start Over";	
	// 	alert("Press 2 to enter a letter");
}

//new Game
function newGame() {
	resetWins();
	resetValues();
	document.getElementById("instructions").innerHTML =  "Press The 1 Key To Generate A Random Word!";
	document.getElementById("array of guessed letters").innerHTML = guessedLetters.join(' ');
}

			
// the entire game
function HangMan_Game() {
		
		document.onkeyup = function(event) {
	 	var key = event.key;
	 	if (key == "1") {
	 		newWord();
	 		console.log(guessedLetters);
	 	}else if (key == "2") {
			setGuessedArray();	
			ResultLoss();
			ResultWin();
			//ResultTie();			
		}else if (key == "0") {
			newGame();
		}
	}
}


HangMan_Game();
