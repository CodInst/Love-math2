// Wait for the DOM to finish loading before runnign the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function() {
        let buttons = document.getElementsByTagName("button"); // add the event handler for the all buttons
        for (let button of buttons) {
            button.addEventListener("click", function() {
                if (this.getAttribute("data-type") === "submit") {
                    alert("You clicked Submit!");
                } else {
                    let gametype = this.getAttribute("data-type");
                    alert(`You clicked ${gametype}`);
                }
            })
        }



});

/**
 * The main game "loop", called whent the script is first loaded
 * and after the user's answer has been processed  
 */
function runGame() {
    let num1 = Math.floor(Math.random() * 25) + 1; // Generate a random number between 1 and 25 for operator 1
    let num2 = Math.floor(Math.random() * 25) + 1; // Generate a random number between 1 and 25 for operator 2


}

function checkAnswer() {
    
}

function calculateCorrectAnswer() {
    
}

function incrementScore() {
    
}

function incementWrongAnswer() {
    
}

function displayAdditionQuestion() {
    
}

function displaySubstractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}

function displayDivideQuestion() {
    
}