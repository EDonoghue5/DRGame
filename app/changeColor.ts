import { ctx, canvas } from './canvas';
import { makeButton } from './controls';

makeButton("Red")
  .addEventListener(
    "click",
    function() { ctx.strokeStyle = "red" }
  );
// make blue button 
makeButton("Blue")
  .addEventListener(
   "click",
    function() { ctx.strokeStyle = "Blue" }
  );

/*

canvas.style.backgroundColor = "red"
export function makeInput (inputType : string) : HTMLInputElement {
  let input = document.createElement("input");
  // Set type attribute to inputtype 
input.setAttribute(
  "type",inputType 
);
controlBox.appendChild(input);
 return input;
}
*/