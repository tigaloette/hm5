var x = [];
var y = [];
var xSpeed = [];
var ySpeed = [];

function setup() {
  createCanvas(400, 400);

  for (var i = 0; i < 10; i = i + 1) {
    x[i] = width / 2;
    y[i] = height / 2;
    xSpeed[i] = random(1);
    ySpeed[i] = random(1);
  }
}

function draw() {
  background(0);
  noStroke();
rect(0, 200, width/2, 20)
  for (var i = 0; i < 10; i = i + 1) {
   
    ellipse(x[i], y[i],10);
    x[i] = x[i] + xSpeed[i]+i;
    y[i] = y[i] + ySpeed[i]+i;
    xSpeed[i] = xSpeed[i] + 0.001
    ySpeed[i] = ySpeed[i] + 0.1
    
if (i > 10) {
    y = height / 2;
    }
  }
}
