 //getComputerChoice randomly generates Rock, Paper, or Scissors
 function getComputerChoice() {
 let choice = Math.floor(Math.random()*3);  //Declare variable 'choice' and assign value of 0-2

 switch(choice)  //Create an switch statement for choice
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
//Compare case-insensitive playerSelection & computerSelection using if/else
//Win Condition: RvS || PvR || SvP
//Return "You win! playerSelection beats computerSelection"
//Lose Condition: RvP || PvS || SvR
//Return "You lose! computerSelection beats playerSelection"
//Tie Condition: computerSelection == playerSelection
//Return "Tie! computerSelection is the same playerSelection"
