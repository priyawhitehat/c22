const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;


var engine,world;
var box1;

function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;

  var boxoption={isStatic:true};
  box1=Bodies.rectangle(100,200,50,50,boxoption);
  World.add(world,box1);

}

function draw()
{
  background(255,255,255);  
  Engine.update(engine);

  rectMode(CENTER);
  rect(box1.position.x,box1.position.y,50,50);

  drawSprites();
}