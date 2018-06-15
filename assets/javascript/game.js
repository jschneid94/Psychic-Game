
// Set the amount of wins and losses to zero and start player with 10 guesses.
var wins = 0;
var losses = 0;
var remainingGuess = 10;


// Create an array of all the letters the computer can choose from.
var str = "abcdefghijklmnopqrstuvwxyz";
var alphaArray = str.split("");

// Create a function that concatenates the guesses to display all the previous guesses.
function guessList(sample) {
    document.getElementById("guessCount").innerHTML = sample;
    sample += " ";
}

// When the player presses a button...
document.onkeyup = function (event) {

    // Remove the prompt to start the game.
    document.getElementById("startGame").style.display = "none";

    // Store the player's guess
    var playerGuess = event.key;
    console.log(playerGuess);
    
    // Store the computer's guess
    var compGuess = alphaArray[Math.floor(Math.random() * alphaArray.length)]
    console.log(compGuess);

    // Compare the user and computer's guess
    // If the user guesses correctly, increase the win score by 1.
    if (playerGuess === compGuess) {
        wins++;
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
    }    

    // Display the scores to refresh every time the user presses a key.
    document.getElementById("winCount").innerHTML = "Wins: " + wins;
    document.getElementById("lossCount").innerHTML = "Losses: " + losses;
    document.getElementById("guessRemaining").innerHTML = "Guesses left: " + remainingGuess;
    document.getElementById("guessCount").innerHTML = "Your guesses so far: " + playerGuess;
    
}