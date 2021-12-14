'use strict';

const selectValue = document.querySelector('.js_selectValue');
const playBtn = document.querySelector('.js_playBtn');
const textResult = document.querySelector('.js_textResult');
const counterJugador = document.querySelector('.js_counterJugador');
const counterOrdenador = document.querySelector('.js_counterOrdenador');

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

function handleClickBtn() {
    console.log(getRandomNumber(10));
}

playBtn.addEventListener('click', handleClickBtn);