
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
    
    // Store the computer's guess
    var compGuess = alphaArray[Math.floor(Math.random() * alphaArray.length)]
    console.log(compGuess);

    // Compare the user and computer's guess
        // If the user guesses correctly, increase the win score by 1.
        // If the user guesses incorrectly, and decrease the guesses remaining by 1.


    // Call the function to dipslay each guess the player has made
    guessList(playerGuess);

    // If the guesses remaining score reaches zero...
        // Increase the loss score by 1
        // Reset the guesses remaing score to 10.
    
}