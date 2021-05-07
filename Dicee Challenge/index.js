//Assigns random number (1-6) to Player 1
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1 * 6) + 1;


//Attaches the right image to whatever number is randomly picked for Player 1
var randomDiceImage = "images/dice" + randomNumber1 + ".png";
document.querySelector("img.img1").setAttribute("src", randomDiceImage);


//Does the same thing for Player 2
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
document.querySelector("img.img2").setAttribute("src", randomDiceImage2);


//Compares scores and determines winner
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML = "🚩Player 2 Wins!";
}else if (randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "⚔️Draw!";
}
