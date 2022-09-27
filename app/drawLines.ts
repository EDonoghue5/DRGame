import { ctx, canvas } from './canvas';
import { makeButton } from './controls';


function drawOnClick(event) {
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
}
let drawingLines = false;
let drawLineButton = makeButton('Draw Lines');
drawLineButton.addEventListener(
  'click',
  function() {
    if (!drawingLines) {
      ctx.beginPath();
      canvas.addEventListener('click', drawOnClick);
      drawingLines = true;
      drawLineButton.textContent = 'Stop drawing lines';
    } else {
      drawingLines = false;
    }
  }
);