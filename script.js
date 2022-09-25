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

    case 2:
    return "Scissors";

    default:
 //Return 'Scissors' for case 2
 }
}