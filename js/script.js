//Class 1:
// Fork and clone the repo and set up your project workspace and link files
// Write HTML for your project
//Class 2:  
// Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
// Practice using console.log() and debugger to debug your code
// Create your document ready function. 
// Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
// Display the user choice to the output screen
//Class 3:  
// Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
// Display the computer choice to the output screen
// Compare the user choice and the computer choice to determine who won. 
// Display the user winner to the output screen 
// Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
// var myChoice= "";
// var computerChoice= "";
// var winner= "";
// var choices= ["rock", "paper", "scissors"];
// var mychoiceIndex= 0;
// var computerchoiceIndex= Math.random()*choices.length;
// console.log(choices[Math.floor(computerchoiceIndex)]);

//FUNCTIONS

/*global $*/


// DOCUMENT READY FUNCTION
$(document).ready(function() {
                        $("#shoot").click(function() {
                                var choices = ["rock", "paper", "scissors"];
                                var computerchoiceIndex = Math.random() * choices.length;
                                console.log(choices[Math.floor(computerchoiceIndex)]);

                                var computerChoice = choices[Math.floor(computerchoiceIndex)];
                                var userChoice = $('#userInput').val();
                                $(".computer").text(computerChoice);
                                $(".user").text(userChoice);

                                var winner;

                                if (userChoice === "rock" && computerChoice === "rock") {
                                        winner = "tied";
                                }
                                else if (userChoice === "paper" && computerChoice === "rock") {
                                        winner = "user";
                                }
                                else if (userChoice === "scissors" && computerChoice === "rock") {
                                        winner = "computer";
                                }
                                else if (userChoice === "rock" && computerChoice === "paper") {
                                        winner = "computer";
                                }
                                else if (userChoice === "paper" && computerChoice === "paper") {
                                        winner = "tied";
                                }
                                else if (userChoice === "scissors" && computerChoice === "paper") {
                                        winner = "user";
                                }
                                else if (userChoice === "rock" && computerChoice === "scissors") {
                                        winner = "user";
                                }
                                else if (userChoice === "paper" && computerChoice === "scissors") {
                                        winner = "computer";
                                }
                                else if (userChoice === "scissors" && computerChoice === "scissors") {
                                        winner = "tied";
                                }
                                alert(winner);


                        });
});