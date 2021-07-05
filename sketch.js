const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg;
var snow=[];
var snow1Img,snow2Img;

function preload() {
  backgroundImg = loadImage("snow1.jpg");
  //snow1Img = loadImage("snow4.webp");
  //snow2Img = loadImage("snow5.webp");
}

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  if(frameCount % 50 === 0) {
    for(var i = 0; i < 200; i++) {
      snow.push(new createSnow(random(0,800),random(0,800)));
    }
  }
}

function draw() {
  background(backgroundImg); 
  Engine.update(engine);
  
  for(var i = 0; i < 200; i++) {
    snow[i].showDrop();
    snow[i].updateY();
  }
  drawSprites();
}