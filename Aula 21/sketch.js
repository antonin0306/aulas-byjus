const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var buttom1,buttom2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var options = {
    restitution : 0.95
  }
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
  ball = Bodies.circle(60,50,20,options);
  World.add (world,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  buttom1 = createImg("right.png")
  buttom1.position(220,30)
  buttom1.size(50,50)
  buttom1.mouseClicked(clickr)
  buttom2 = createImg("up.png")
  buttom2.position(40,30)
  buttom2.size(50,50)
  buttom2.mouseClicked(clicku)
}
function clickr() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function clicku() {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20);
}

