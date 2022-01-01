'use strict';

const selectValue = document.querySelector('.js_selectValue');
const playBtn = document.querySelector('.js_playBtn');
const textResult = document.querySelector('.js_textResult');
const counterJugador = document.querySelector('.js_counterJugador');
const counterOrdenador = document.querySelector('.js_counterOrdenador');

let scoreJugador = 0;
let scoreOrdenador = 0;
let moves = 0;

// Issue: make a function that replaces '.innerHTML' by using a parameter
// function paintInnerHTML(element, content) {
//   element.innerHTML = content;
// }
// paintInnerHTML(textResult, 'Hello');

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

function changeNumIntoValue() {
  let computerOption = getRandomNumber(9);
  if (computerOption < 4) {
    computerOption = 'piedra';
  } else if (computerOption > 3 && computerOption < 7) {
    computerOption = 'papel';
  } else {
    computerOption = 'tijera';
  }
  return computerOption;
}

function compareUserOption() {
  const myOption = selectValue.value;
  const computerOption = changeNumIntoValue();
  // console.log(`Player chose ${myOption}`);
  // console.log(`Computer chose ${computerOption}`);

  if (scoreJugador < 10 && scoreOrdenador < 10) {
    if (myOption === computerOption) {
      textResult.innerHTML = 'Empate';
    } else if (myOption === 'piedra' && computerOption === 'papel') {
      textResult.innerHTML = '¡Has perdido!';
      scoreOrdenador++;
    } else if (myOption === 'piedra' && computerOption === 'tijera') {
      textResult.innerHTML = '¡Has ganado!';
      scoreJugador++;
    } else if (myOption === 'papel' && computerOption === 'piedra') {
      textResult.innerHTML = '¡Has ganado!';
      scoreJugador++;
    } else if (myOption === 'papel' && computerOption === 'tijera') {
      textResult.innerHTML = '¡Has perdido!';
      scoreOrdenador++;
    } else if (myOption === 'tijera' && computerOption === 'papel') {
      textResult.innerHTML = '¡Has ganado!';
      scoreJugador++;
    } else if (myOption === 'tijera' && computerOption === 'piedra') {
      textResult.innerHTML = '¡Has perdido!';
      scoreOrdenador++;
    } else {
      textResult.innerHTML = `Por favor, selecciona una opción para empezar a jugar`;
    }
    counterJugador.innerHTML = `Jugador: ${scoreJugador}`;
    counterOrdenador.innerHTML = `Ordenador: ${scoreOrdenador}`;
  } else {
    restartGame();
  }
}

function restartGame() {
  if (scoreJugador > scoreOrdenador) {
    textResult.innerHTML = 'Has ganado la partida';
  } else if (scoreOrdenador > scoreJugador) {
    textResult.innerHTML = 'Has perdido la partida';
  } else {
    textResult.innerHTML = 'Habéis empatado';
  }
  counterJugador.innerHTML = `Jugador: 0`;
  counterOrdenador.innerHTML = `Ordenador: 0`;
  selectValue.value = 'option-choose';
  if (selectValue.value === 'option-choose') {
    textResult.innerHTML = `Por favor, selecciona una opción para empezar a jugar`;
  }
}

function handleClickBtn() {
  changeNumIntoValue();
  compareUserOption();
}

playBtn.addEventListener('click', handleClickBtn);
