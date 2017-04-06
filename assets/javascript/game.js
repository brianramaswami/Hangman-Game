//array of potential words
var potentialWordsArray = ["madonna", "blue", "purple", "california"];

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

//letter 
var letter;

//controls the game status
var game = "on";

//
var guessedRight = 0;

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
	var letter = prompt("guess a letter!");
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

//resets all values
function resetValues() {
	initialWordArray = [];
	guessedLetters = [];
	positionCount  = 0;
	positionCount1 = 0;
	guesses_Remaining = 15;
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
		alert("YOU LOSE");
		alert("Press 0 to start over");
	}
}
//reset wins
function resetWins() {
	win_Count = 0;
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
		alert("YOU WON")
		win_Count++
		winCount();
		alert("Press 1 to generate new word or 0 to start over");
	}
}
	

			
//the entire game
// function HangMan_Game() {
// 	while(game == "on"){
// 		winCount();
// 		guessesRemaining();
// 		console.log(initialWord);
// 		console.log(wordLength);
// 		console.log(initialWordArray);
// 		displayWords();
// 		setGuessedArray();
// 	}
// }

//be more specific on keys
 document.onkeyup = function(event) {
 	var key = event.key;
 	if (key == "2") {
		setGuessedArray();
		ResultLoss();
		ResultWin();
	}else if (key == "1") {
		resetValues();
		winCount();
		pickWord(potentialWordsArray);
		console.log(initialWord);
		displayWords();
		guessesRemaining();
		alert("press 2 to enter a letter");
	}else if (key == "0") {
		resetWins();
		alert("press 1 to generate random word");
	}
}