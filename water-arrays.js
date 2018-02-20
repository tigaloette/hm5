var x = [];
var y = [];
var xSpeed = [];
var ySpeed = [];

function setup() {
  createCanvas(400, 400);

  for (var i = 0; i < 10; i = i + 1) {
    x[i] = width / 2;
    y[i] = height / 2;
    xSpeed[i] = random(0.5,1);
    ySpeed[i] = random(1,3);
  }
}

function draw() {
  background(0);
  noStroke();
rect(0, 200, width/2, 20)
  for (var i = 0; i < 10; i = i + 1) {
   
    ellipse(x[i], y[i],10);
    x[i] = x[i] + xSpeed[i] + i;
    y[i] = y[i] + ySpeed[i] + i;
    
if (i > 10) {
    y = height / 2;
    }
  }
}
