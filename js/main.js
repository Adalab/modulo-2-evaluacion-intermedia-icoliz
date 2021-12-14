"use strict";

const selectValue = document.querySelector(".js_selectValue");
const playBtn = document.querySelector(".js_playBtn");
const textResult = document.querySelector(".js_textResult");
const counterJugador = document.querySelector(".js_counterJugador");
const counterOrdenador = document.querySelector(".js_counterOrdenador");

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function changeNumIntoValue() {
  let computerOption = getRandomNumber(9);
  if (computerOption < 4) {
    computerOption = "piedra";
  } else if (computerOption >= 4 && computerOption <= 6) {
    computerOption = "papel";
  } else {
    computerOption = "tijera";
  }
  return computerOption;
}

function updateCounter() {
  //   debugger;
  let counterJugadorNum = parseInt(counterJugador.innerHTML);
  let counterOrdenadorNum = parseInt(counterOrdenador.innerHTML);

  if (textResult.innerHTML === "¡Has ganado!") {
    console.log("has ganadooooo");
    counterJugador.innerHTML = counterJugadorNum + 1;
  } else if (textResult.innerHTML === "¡Has perdido!") {
    console.log("has perdido, try again");
    counterOrdenador.innerHTML = counterOrdenadorNum + 1;
  }
}

function compareUserOption() {
  const myOption = selectValue.value;
  const computerOption = changeNumIntoValue();

  if (myOption === computerOption) {
    textResult.innerHTML = "Empate";
  } else if (myOption === "piedra" && computerOption === "papel") {
    textResult.innerHTML = "¡Has perdido!";
  } else if (myOption === "piedra" && computerOption === "tijera") {
    textResult.innerHTML = "¡Has ganado!";
  } else if (myOption === "papel" && computerOption === "piedra") {
    textResult.innerHTML = "¡Has ganado!";
  } else if (myOption === "papel" && computerOption === "tijera") {
    textResult.innerHTML = "¡Has perdido!";
  } else if (myOption === "tijera" && computerOption === "papel") {
    textResult.innerHTML = "¡Has ganado!";
  } else if (myOption === "tijera" && computerOption === "piedra") {
    textResult.innerHTML = "¡Has perdido!";
  } else {
    textResult.innerHTML = `Por favor, selecciona una opción para empezar a jugar`;
  }
  //   console.log(`My option is ${myOption}`);
  //   console.log(`Computer's option is ${computerOption}`);
  updateCounter();
}

function handleClickBtn() {
  changeNumIntoValue();
  compareUserOption();
}

playBtn.addEventListener("click", handleClickBtn);
