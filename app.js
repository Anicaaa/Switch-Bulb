// Select elements
const btnOff = document.querySelector(".btn-off");
const btnOn = document.querySelector(".btn-on");

// Swith ON + Add sentence once light is switched on
function bulbOn() {
  const lightOn = document.querySelector(".bulb-off");
  lightOn.setAttribute("src", "BulbOn.png");
}

function whiteBackground() {
  document.body.style.backgroundColor = "white";
}

btnOn.addEventListener("click", function () {
  bulbOn();
  whiteBackground();
});

// Switch OFF
function bulbOff() {
  const lightOff = document.querySelector(".bulb-off");
  lightOff.setAttribute("src", "BulbOff.png");
}

function darkBackground() {
  document.body.style.backgroundColor = "black";
}

btnOff.addEventListener("click", function () {
  bulbOff();
  darkBackground();
});
