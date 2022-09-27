import { ctx, canvas } from './canvas';
import { makeButton } from './controls';

let drawCircleButton = makeButton("Draw Semicircle");

drawCircleButton.addEventListener(
  "click",
  function() {
    ctx.beginPath();
    ctx.arc(350, 350, 150, 550, Math.PI); // drawhalfcircle

    ctx.stroke();
  }
)