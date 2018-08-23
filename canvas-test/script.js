"use strict";

const canvas = document.getElementById("mainCanvas");
const ctx = canvas.getContext("2d");
const height = 200;
const width = 200;

let boxX = 0;
let boxY = 100;

const gameLoop = setInterval(function() {
    ctx.fillStyle = "#FF00FF";
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(boxX - 5, boxY + 5, boxX + 5, boxY - 5);
    boxX++;
    //boxY--;
}, 200);

document.addEventListener("keypress", function(event) {
    console.log(event.keyCode);
    if (event.keyCode === 69) {
        clearInterval(gameLoop);
    }
})