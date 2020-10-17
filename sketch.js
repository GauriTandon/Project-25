const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3;
var ground;
var paper;

function preload() {
	dustbinImg = loadImage("Sprites/dustbingreen.png");
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic : false,
		restitution : 0.3,
		friction : 0.5,
		density : 1.2
	}

	//Create the Bodies Here.
	dustbin = createSprite(750,590);
	dustbin.addImage(dustbinImg);
	dustbin.scale = 0.5;

	dustbin1 = new Dustbin(750,660,130,30);
	dustbin2 = new Dustbin(700,600,30,140);
	dustbin3 = new Dustbin(800,600,30,140);
	ground = new Ground(0,690,2000,20);
	World.add(world,ground);
	paper = new Paper(100,500,20,20);

	Engine.run(engine);
	keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(250);
  
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
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-60})		
	}

}
