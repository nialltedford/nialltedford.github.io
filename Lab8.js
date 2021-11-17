function game(){
var machine = "rock";
var result = document.getElementById("result");
var userChoice = prompt("Type rock, paper or scissors: ");
userChoice = userChoice.toLowerCase();

if (userChoice === machine){
result.innerHTML = "Its a Draw!";

}
else if (userChoice === "scissors"){
result.innerHTML = "You Lost!";

}
else if (userChoice === "paper"){
result.innerHTML = "You Won!";

}
else {
result.innerHTML = "Invalid input, try again!";
}
}