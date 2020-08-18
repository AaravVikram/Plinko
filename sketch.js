const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground;
var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240,780,500,10);

  for(var k = 0; k <= width; k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }

  for(var j = 40; j <= width; j = j + 40){
    plinkos.push(new Plinkos(j,75));
  }

  for(var j = 15; j <= width - 10; j = j + 40){
    plinkos.push(new Plinkos(j,175));
  }

  for(var j = 15; j <= width - 10; j = j + 40){
    plinkos.push(new Plinkos(j,275));
  }

  for(var j = 15; j <= width - 10; j = j + 40){
    plinkos.push(new Plinkos(j,375));
  }

}

function draw() {
  background("blue");
  Engine.update(engine);  
  ground.display();
  drawSprites();
  
  if(frameCount%60===0){
    particles.push(new Particles(random(1,480),10,10))  
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for(var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }


  
}