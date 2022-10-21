"use strict";
const guessbtn = document.querySelector(".guess");
const valuenumber = document.querySelector(".valuenumber");
const point = document.querySelector(".point");
const userName = "ZURI";
const playGame = document.querySelector("#game");
const stage = document.querySelector(".stage");
let stageNum = 1;
let addNumber = 2;
let txt = 0;
let level;
let add = 2;

const showGame = function() {
  if (userName === prompt(`Enter your username:${userName}`)) {
    playGame.style.opacity = 1;
  }
  return null;
};

showGame();

const range = function(one, numRnge) {
  one = 1;

  numRnge = addNumber;
  // const guessValue = document.querySelector("input").value;
  let random = Math.trunc(Math.random() * addNumber) + 1;

  valuenumber.textContent = random;
  const promtGues = Number(
    prompt(`Predic a number between ${one} and ${numRnge++} `)
  );

  if (random === promtGues) {
    txt++;
    level = "correct";
    console.log(level);
    addNumber++;
    stageNum++;
  }
  if (promtGues === stage) {
    numRnge++;
  }
  point.textContent = txt;
  stage.textContent = stageNum;
};

guessbtn.addEventListener("click", function(e) {
  e.preventDefault();
  range();

  // }
});
