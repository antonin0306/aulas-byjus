var marks = [2.05,4.0,3.05,2.07,1.0]

function setup() 
{
  createCanvas(400,400);
  media();
}

function draw() 
{
background(51);

}

function media () {
var soma = marks [0]+marks [1]+marks[2]+marks[3]+marks[4];
var limite = soma/marks.length;
console.log (limite);
}
