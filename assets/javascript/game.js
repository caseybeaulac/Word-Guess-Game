var words = [
  "pteranodon",
  "spinosaurus",
  "triceratops",
  "stegosaurus",
  "mosasaurus",
  "brontosaurus",
  "ankylosaurus",
  "velociraptor"
];

var wins = 0;
var goodGuesses = 0;
var maxTries = 6;
var currentWord = "";
var counter = 0;
var blankWord = [];

function startGame(wordDiv) {
  blankWord = [];
  goodGuesses = 0;
  var randomNum = Math.floor(Math.random() * words.length);
  currentWord = words[randomNum];
  console.log(currentWord);
  wordDiv.innerHTML = "";
  for (var i = 0; i < currentWord.length; i++) {
    blankWord[i] = "_ ";
    wordDiv.append(blankWord[i]);
  }

  maxTries = 6;
}

document.onkeyup = function(event) {
  var keyPressed = event.key;
  var wordDiv = document.getElementById("currentWordDiv");
  var scoreDiv = document.getElementById("winsDiv");
  var wrongsDiv = document.getElementById("triesDiv");
  scoreDiv.innerHTML = wins;
 

  // IS this a new game?
  if (currentWord.length == 0) {
    startGame(wordDiv);
  } else {
    // this is a game in progress

    var lettersFound = [];
    for (var j = 0; j < currentWord.length; j++) {
      if (currentWord[j] == keyPressed) {
        lettersFound.push(j);
        goodGuesses++;
      }
    }
    //counting tries
    if (lettersFound.length == 0) {
      maxTries--;
      wrongsDiv.innerHTML = maxTries;
      console.log(maxTries);
    }
    //wordDiv.innerHTML = "";
    //replace underscore by keypressed
    for (var k = 0; k < lettersFound.length; k++) {
      blankWord[lettersFound[k]] = keyPressed.toUpperCase();
      console.log(blankWord);
    }
    wordDiv.innerHTML = "";
    for (var q = 0; q < currentWord.length; q++) {
      wordDiv.append(blankWord[q]);
    }
    if (maxTries == 0 || goodGuesses == currentWord.length) {
      // is this the end of the game

      // did he win?
      if (goodGuesses == currentWord.length) {
        // confirm win, and does he want to play again?
        wins++;
        var newGame = confirm("You win, play again?");
        if (newGame) {
          // user wants to play again
          // reinitialize variables
          startGame(wordDiv);
        }
      } else {
        // confirm LOSS, Play again?
        var newGame = confirm("You lose, play again?");
        if (newGame) {
          // user wants to play again
          // reinitialize variables
          startGame(wordDiv);
        }

        // initialize variables?? not sure but keep in mind here.
      }
    }
  }
};
