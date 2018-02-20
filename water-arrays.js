var x = [];
var y = [];
var xSpeed = [];
var ySpeed = [];

function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(0);
  noStroke();

  rect(0, 20, 230, 20);
  for (var i = 0; i < 10; i = i + 1){
  ellipse(x[i], y[i], 10);
  
  y[i] = y[i] + ySpeed[i];
}  
  if (y > height) {
    y = 30;
  }
}
