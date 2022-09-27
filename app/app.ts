import { ctx, canvas } from './canvas';
import { makeButton } from './controls';
import './drawCircle';
import './clearScreen';
import './drawLines';
import './drawOnDrag';
import './changeColor';
import './nextthing';
/* 
      */
/*
let sampleButton = makeButton("Draw Semicircle");

sampleButton.addEventListener(
  "click",
  function() {
    ctx.beginPath();
    ctx.arc(100, 100, 100, 0, Math.PI);
    ctx.stroke();
  }
);

let clearButton = makeButton('Clear');
clearButton.addEventListener(
  "click",
  function() {
    ctx.clearRect(
      0, 0, canvas.width, canvas.height
    )
  }
);
*/
// make red button 
/*
let drawingLines = false;
let drawlLineButton = makeButton("Draw Lines");
drawLineButton.addEventListener(
  "click",
  function () {
    if (!drawingLines) {
      ctx.beginPath();
      canvas.addEventListener("click",drawOnClick);
      drawingLines = true;
      drawLineButton.textContent = "Stop drawing Lines";
    } else {
      drawingLines = false;
      canvas.removeEventListener("click",drawOnClick);
      drawLineButton.textContent = "Draw Lines";
    }
  }

*/