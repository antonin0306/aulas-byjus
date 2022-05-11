var box
function setup() 
{
  createCanvas(400, 400);
  box = new Box (190,350,50,50,-4)
}

function draw() 
{
  background(220);
  box.show();
  box.move();
}

