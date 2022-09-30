// Select elements
const btnOff = document.querySelector(".btn-off");
const btnOn = document.querySelector(".btn-on");

// Swith ON + Add sentence once light is switched on
function bulbOn() {
  const lightOn = document.querySelector(".bulb-off");
  lightOn.setAttribute("src", "BulbOn.png");
}

btnOn.addEventListener("click", function () {
  bulbOn();
});

// Switch OFF
function bulbOff() {
  const lightOff = document.querySelector(".bulb-off");
  lightOff.setAttribute("src", "BulbOff.png");
}

btnOff.addEventListener("click", function () {
  bulbOff();
});
