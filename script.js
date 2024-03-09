// ! variables

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const body = document.querySelector("body");
const randomBtn = document.querySelector(".random");
const cssMessage = document.querySelector("#message");
const hexcodes = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

input1.addEventListener("input", function () {
  let firstColor = input1.value;
  body.style.background = `linear-gradient(90deg, ${firstColor}, ${input2.value})`;
  updateMesage();
});
input2.addEventListener("input", function () {
  let secondColor = input2.value;
  body.style.background = `linear-gradient(90deg, ${input1.value}, ${secondColor})`;
  updateMesage();
});

randomBtn.addEventListener("click", applyColor);

applyColor();
updateMesage();
// ! Custom function

function updateMesage() {
  cssMessage.textContent = `background: linear-gradient(90deg, ${input1.value}, ${input2.value})`;
}

// ! random color function

function getRandomColor() {
  let randomColor = "#";

  while (randomColor.length < 7) {
    randomColor =
      randomColor + hexcodes[Math.floor(Math.random() * hexcodes.length)];
  }
  return randomColor;
}

function applyColor() {
  let firstRandom = getRandomColor();
  let secondRandom = getRandomColor();
  body.style.background = `linear-gradient(90deg, ${firstRandom}, ${secondRandom})`;
  input1.value = firstRandom;
  input2.value = secondRandom;
  updateMesage();
}
