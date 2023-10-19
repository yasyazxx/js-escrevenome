function setup() {
  createCanvas(1000, 1000);
      background("black");
}

function draw() {
  
  stroke("purple");
  fill("cyan");
  
  if(mouseIsPressed) {
 rect(mouseX, mouseY, 20, 20);
  }
}  