
// Set the amount of wins and losses to zero and start player with 10 guesses.
var wins = 0;
var losses = 0;
var remainingGuess = 10;
var yourGuess = "";


// Create an array of all the letters the computer can choose from.
var str = "abcdefghijklmnopqrstuvwxyz";
var alphaArray = str.split("");

// Create a function that concatenates the guesses to display all the previous guesses.
function guessList(sample) {
    sample += " ";
    yourGuess += sample;
}

// Computer chooses its first letter
var compGuess = alphaArray[Math.floor(Math.random() * alphaArray.length)]

// When the player presses a button...
document.onkeyup = function (event) {

    // Remove the prompt to start the game.
    document.getElementById("startGame").style.display = "none";

    // Store the player's guess
    var playerGuess = event.key;
    console.log(playerGuess);
    

    // Compare the user and computer's guess
    // If the user guesses correctly...
    if (playerGuess === compGuess) {
        // Increase the win score by 1.
        wins++;
        // Reset the number of guesses
        remainingGuess = 10;
        // Reset the list of previous guesses
        yourGuess = ""
        // Computer chooses a new letter
        compGuess = alphaArray[Math.floor(Math.random() * alphaArray.length)]
    }
     // If the user guesses incorrectly, and decrease the guesses remaining by 1.
    else {
        remainingGuess--;
    }

    // Call the function to dipslay each guess the player has made
    guessList(playerGuess);

    // If the guesses remaining score reaches zero...
    if (remainingGuess === 0) {
        // Increase the loss score by 1
        losses++;
        // Reset the guesses remaing score to 10.
        remainingGuess = 10;
        // Reset the previous guesses
        yourGuess = "";
        // Computer chooses a new letter
        compGuess = alphaArray[Math.floor(Math.random() * alphaArray.length)]
    }    

    // Display the scores to refresh every time the user presses a key.
    document.getElementById("winCount").innerHTML = "Wins: " + wins;
    document.getElementById("lossCount").innerHTML = "Losses: " + losses;
    document.getElementById("guessRemaining").innerHTML = "Guesses left: " + remainingGuess;
    document.getElementById("guessCount").innerHTML = "Your guesses so far: " + yourGuess;
    console.log(yourGuess);
    
}