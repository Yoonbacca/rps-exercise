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
        //OLD: return `You win! ${a} beats ${b}`;
        return 0;

    //Lose Condition: RvP || PvS || SvR
    } else if ((a == "ROCK" && b == "PAPER") || (a == "PAPER" && b == "SCISSORS") || (a == "SCISSORS" && b == "ROCK")) {
        //Return "You lose! computerSelection beats playerSelection"
        return 1;
    //Tie Condition: computerSelection == playerSelection
    } else if (a == b) {
        //Return "Tie! computerSelection is the same playerSelection"
        //OLD: return `Tie Game! You both chose ${a}`;
        return 2;

    //Invalid Condition: Anything else that could occur would be invalid
    } else {
        //OLD: return "Invalid entry! Try again!";
        return 3;

    }
}

//Helper Function to Determine a winner
function determineWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return `You win! Final Score: ${playerScore} - ${computerScore}`;

    } else if (playerScore < computerScore) {
        return `You lose! Final Score: ${playerScore} - ${computerScore}`;

    } else if (playerScore == computerScore) {
        return `Tie Game! Final Score: ${playerScore} - ${computerScore}`;
    }
}

//Declare function game()
function game() {
    //Create playerCount and computerCount variables
    let playerCount = 0;
    let computerCount = 0;

    //Create for loop that increments up to 5
    for (let i = 0; i < 5; i++) {

        //Print Round Count
        console.log(`Round ${i+1}`);

        //Prompt user to enter their option
        let playerChoice = prompt("Type 'Rock', 'Paper', or 'Scissors'").toUpperCase();  
        //Have computer create their option
        let computerChoice = getComputerChoice().toUpperCase();

        //Call playRound with both choices
        let currentRound = playRound(playerChoice, computerChoice);
        switch(currentRound)
        {
            case 0:
            //If player wins, add 1 to playerCount
            playerCount += 1;
            console.log(`You win! ${playerChoice} beats ${computerChoice}. The score is ${playerCount} - ${computerCount}`);
            break;

            case 1:
            //If computer wins, add 1 to computerCount
            computerCount += 1;
            console.log(`You lose! ${computerChoice} beats ${playerChoice}. The score is ${playerCount} - ${computerCount}`);
            break;

            case 2:
            //If tie game, add nothing to either
            console.log(`Tie Game! You both picked ${playerChoice}. The score is ${playerCount} - ${computerCount}`);
            break;

            case 3:
            //If invalid game, add nothing to round counter
            i -= 1;
            console.log(`Invalid Entry. Play again!`);
            break;

            default:
            break;
        }

    }
    //
    console.log(determineWinner(playerCount, computerCount));
}