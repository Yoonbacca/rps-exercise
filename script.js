 //getComputerChoice randomly generates Rock, Paper, or Scissors
 function getComputerChoice() {
    //Declare variable 'choice' and assign value of 0-2
    let choice = Math.floor(Math.random()*3);

    //Create an switch statement for choice
    switch(choice)  
    {
        //Return 'Rock' for case 0
        case 0:
        return "Rock";

        //Return 'Paper' for case 1
        case 1:
        return "Paper";

        //Return 'Scissors' for case 2
        case 2:
        return "Scissors";

        default:

    }
}

//Declare function playRound with parameters playerSelection & computerSelection
function playRound(playerSelection, computerSelection) {
    //Compare case-insensitive playerSelection & computerSelection using if/else
    const a = playerSelection.toUpperCase();
    const b = computerSelection.toUpperCase();

    //Win Condition: RvS || PvR || SvP
    if ((a == "ROCK" && b == "SCISSORS") || (a == "PAPER" && b == "ROCK") || (a == "SCISSORS" && b == "PAPER")) {
        //Return "You win! playerSelection beats computerSelection"
        return `You win! ${a} beats ${b}`;

    //Lose Condition: RvP || PvS || SvR
    } else if ((a == "ROCK" && b == "PAPER") || (a == "PAPER" && b == "SCISSORS") || (a == "SCISSORS" && b == "ROCK")) {
        //Return "You lose! computerSelection beats playerSelection"
        return `You lose! ${b} beats ${a}`;

    //Tie Condition: computerSelection == playerSelection
    } else if (a == b) {
        //Return "Tie! computerSelection is the same playerSelection"
        return `Tie Game! You both chose ${a}`;

    //Invalid Condition: Anything else that could occur would be invalid
    } else {
        return "Invalid entry! Try again!";
    }


}

const playerSelection = getComputerChoice();
const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));