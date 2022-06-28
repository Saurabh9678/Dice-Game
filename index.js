/*
Long method
var p1Class = ".img1";
var p2Class = ".img2";
function showingDice(player,pClass){
    if(player === 1){
        document.querySelector(pClass).setAttribute("src", "images/dice1.png");
    }else if(player === 2){
        document.querySelector(pClass).setAttribute("src", "images/dice2.png");
    }else if(player === 3){
        document.querySelector(pClass).setAttribute("src", "images/dice3.png");
    }else if(player === 4){
        document.querySelector(pClass).setAttribute("src", "images/dice4.png");
    }else if(player === 5){
        document.querySelector(pClass).setAttribute("src", "images/dice5.png");
    }else if(player === 6){
        document.querySelector(pClass).setAttribute("src", "images/dice6.png");
    }
}
showingDice(player1Dice,p1Class);
showingDice(player2Dice,p2Class);
*/
// Shorter Method
var clicked = 0;
document.querySelector(".btn").addEventListener("click", function () {
  
  if (clicked === 0) {
    var player1Dice = Math.floor(Math.random() * 6) + 1;
    var player2Dice = Math.floor(Math.random() * 6) + 1;
    var player1Img = "images/dice" + player1Dice + ".png";
    var player2Img = "images/dice" + player2Dice + ".png";

    document.querySelector(".img1").setAttribute("src", player1Img);
    document.querySelector(".img2").setAttribute("src", player2Img);

    if (player1Dice === player2Dice) {
      document.querySelector("h1").textContent = "Draw!";
    } else if (player1Dice > player2Dice) {
      document.querySelector("h1").textContent = "🚩Player 1 win";
    } else if (player1Dice < player2Dice) {
      document.querySelector("h1").textContent = "Player 2 win🚩";
    }
    document.querySelector(".btn").textContent = "RESET"
    clicked++;
  } else {
    document.querySelector("h1").textContent = "Click The Button";
    document.querySelector(".img1").setAttribute("src", "images/dice6.png");
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    document.querySelector(".btn").textContent = "PLAY"
    clicked = 0;
  }
});
