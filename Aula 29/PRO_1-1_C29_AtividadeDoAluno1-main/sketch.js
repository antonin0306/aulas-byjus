const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var rope;
var watermelon;
var fgluer

function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);
  rope = new Rope(7, {x:50,y:200})
  var fruitop = {
    density: 0.001
  }
  watermelon = Bodies.circle(200,200,25,fruitop)
  Matter.Composite.add(rope.body,watermelon)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
  fgluer = new Link (rope,watermelon)
}

function draw() 
{
  background(51);
  ground.show();
  rope.show();
  Engine.update(engine);
  ellipse(watermelon.position.x, watermelon.position.y, 25, 25) 

  
  
}
