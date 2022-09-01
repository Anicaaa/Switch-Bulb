// Select elements
const btnOff = document.querySelector(".btn-off");
const btnOn = document.querySelector(".btn-on");
const container = document.querySelector(".img-container");

// Swith ON + Add sentence once light is switched on
function bulbOn() {
  const textAdd = document.createElement("h1");
  textAdd.innerText = "I have an idea!";
  textAdd.setAttribute("class", "centered");
  container.prepend(textAdd);

  const lightOn = document.querySelector(".bulb-off");
  lightOn.setAttribute("src", "BulbOn.png");
}

btnOn.addEventListener("click", function () {
  bulbOn();
});

// Switch OFF
function bulbOff() {
  const textRemove = document.querySelector("h1");
  textRemove.remove();

  const lightOff = document.querySelector(".bulb-off");
  lightOff.setAttribute("src", "BulbOff.png");
}

btnOff.addEventListener("click", function () {
  bulbOff();
});
