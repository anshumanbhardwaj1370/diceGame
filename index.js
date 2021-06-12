var randomNumber1 = 1 + Math.floor(Math.random() * 6);
var img1 = document.querySelectorAll("img")[0];

var randomNumber2 = 1 + Math.floor(Math.random() * 6);
var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");
img2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").textContent = "Player 2 wins";
} else if (randomNumber2 < randomNumber1) {
  document.querySelector("h1").textContent = "Player 1 wins";
} else document.querySelector("h1").textContent = "Draw";
