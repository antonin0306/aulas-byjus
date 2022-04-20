var weight = [35,38,42,45,43,34,36,41,48,32];
var soma = 0
var media = 0
function setup() {
  createCanvas(400,400);
for (var i = 0; i < weight.length; i++) {
  soma = soma + weight[i];
}
media = soma/weight.length
console.log (media)
}

function draw() 
{
  background(30);
}

 

