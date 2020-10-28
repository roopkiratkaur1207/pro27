const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	bob1 = new bob(400,250);
	bob2 = new bob(451,250);
	bob3 = new bob(502,250);
	bob4 = new bob(349,250);
	bob5 = new bob(298,250)
    
	roof = new ROOF(400,200);

	rope1 = new Rope(bob1.body,{x:400,y:200});
	rope2 = new Rope(bob2.body,{x:451,y:200});
	rope3 = new Rope(bob3.body,{x:502,y:200});
	rope4 = new Rope(bob4.body,{x:349,y:200});
	rope5 = new Rope(bob5.body,{x:298,y:200});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("purple");
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY});
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob5.body,bob5.position,{x:-85,y:185});
	}
}