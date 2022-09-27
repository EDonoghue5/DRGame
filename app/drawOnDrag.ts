import { ctx, canvas } from './canvas';
import { makeButton } from './controls';



function drawOnDrag(event :  MouseEvent) {
  if (event.buttons) {
    //Draw when mouse is down 
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  } else {
    // Start new path once mouse is lifted 
    ctx.beginPath();
  }
}
canvas.addEventListener('mousemove', drawOnDrag);