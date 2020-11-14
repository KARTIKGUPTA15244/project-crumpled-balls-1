
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(150,300,20)

dustbin1 = new Dustbin(950,600,20,100)
dustbin2 = new Dustbin(1150,600,20,100)
dustbin3 = new Dustbin(1050,650,180,20)

ground = new Ground(600,670,1200,20)

	Engine.run(engine);
  
}


function draw() {

  background(0);
  paper.display();
ground.display()
dustbin1.display();
dustbin2.display();
dustbin3.display();

  
 
}
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-85})
	  
	 }
	 
	}


