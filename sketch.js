const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball, side1, side2, bottom, mask1, mask2, maskBin, maskPaper;

function setup() {
	createCanvas(1600, 700);
	
	engine = Engine.create();	
	world = engine.world;

	ground = new Ground(800, 650);

	bottom = new Box(1150, 630, 120, 20);

	side1 = new Side(1095, 560, 10, 135);

	side2 = new Side(1205, 560, 10, 135);

	ball = new Ball(200, 450, 40);

	Engine.run(engine);
}

function draw() {	
  Engine.update(engine);
  background(211,211,211);
  
  ball.display();
  ground.display();
  side1.display();
  side2.display();
  bottom.display();

  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body, ball.body.position, {x:84, y:-84});

	}
}