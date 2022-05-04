var ball = {
  x: 200,
  y: 200,
  r: 30,
  color: ["red", "blue", "green", "brown"],
  speedX: 0,
  speedY: 0
};

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle (ball.x , ball.y , ball.r)
  fill (ball.color [1])
  ball.speedX = 1
  ball.x = ball.x + ball.speedX
}