// part 1: heads or tails 
var userChoice = prompt("heads or tails");
var computerChoice;
var randomNumber = Math.floor(Math.random() * 2);
console.log(randomNumber);

if (randomNumber == 0){
    computerChoice = "heads";
}else if (randomNumber == 1){
    computerChoice = "tails";
}

if(computerChoice === userChoice){
    alert("You guessed right! The coin flip landed on " + computerChoice);
}else{
    alert("Sorry, the coin flip landed on " + computerChoice);
}

// part 2: birthyear 

var birthyear = prompt("year were you born");

if((2021 - birthyear) > 21){
    alert("You are old enough to drink in the US.");
}else if ((2021 - birthyear) == 21){
    alert("You are old enough to drink in the US...barely.");
}else{
    alert("Sorry, you are not old enough to drink in the US.");
}
