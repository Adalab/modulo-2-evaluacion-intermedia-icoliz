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
  console.log(computerOption);
  if (computerOption < 4) {
    computerOption = "piedra";
  } else if (computerOption >= 4 && computerOption <= 6) {
    computerOption = "papel";
  } else {
    computerOption = "tijera";
  }
  return computerOption;
}

function compareUserOption() {
  const userOption = selectValue.value;
  const computerOption = changeNumIntoValue();
  if (userOption === computerOption()) {
    console.log(`The number is... ${getRandomNumber()}`);
  } else {
    console.log(`try again`);
  }
}

function handleClickBtn() {
  changeNumIntoValue();
  //   compareUserOption();
}

playBtn.addEventListener("click", handleClickBtn);
