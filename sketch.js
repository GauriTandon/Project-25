const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin, dustbin1, dustbin2, dustbin3;
var ground;
var paper;

function preload() {
	backImg = loadImage("Sprites/street.jpg")
	dustbinImg = loadImage("Sprites/dustbingreen.png");
}

function setup() {
	createCanvas(1000, 750);

	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic : false,
		restitution : 0.3,
		friction : 0.5,
		density : 1.2
	}

	//Create the Bodies Here.
	dustbin = createSprite(750,570,150,30);
	dustbin.addImage(dustbinImg);
	dustbin.scale = 0.8;
	dustbin1 = new Dustbin(750,660,150,30);
	dustbin2 = new Dustbin(670,600,30,170);
	dustbin3 = new Dustbin(830,580,30,170);
	paper = new Paper(100,500,20,20);
	ground = new Ground(0,700,2000,20);
	World.add(world,ground);

	Engine.run(engine);
	keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(backImg);
  
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();

  createEdgeSprites();
  drawSprites();
}


function keyPressed() {

	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-90})		
	}

}
