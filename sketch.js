
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3;
var ground;
var paper;

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
	dustbin1 = new Dustbin(750,660,270,30);
	dustbin2 = new Dustbin(600,600,30,100);
	dustbin3 = new Dustbin(900,600,30,100);
	ground = new Ground(0,690,2000,20);
	World.add(world,ground);
	paper = new Paper(100,500,20,20);

	Engine.run(engine);
	keyPressed();
}


function draw() {
  rectMode(CENTER);
  background(0);

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display();
  ground.display();

  createEdgeSprites();
  drawSprites();
}


function keyPressed() {

	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-60})		
	}

}
