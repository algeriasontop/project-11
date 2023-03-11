const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
        density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    function keyPressed(){
		if (keyCode=== UP_ARROW){
			Matter.Body.applyForce
		}
	}

	Engine.run(engine);
  
}

function keyPressed(){
	if (keyCode=== UP_ARROW){
		Matter.Body.applyForce
	}
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



