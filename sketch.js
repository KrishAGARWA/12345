
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine
var world
var ball,ball1,ball2;
var ground1
var box1
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball= new Box(600,350,200,20)
ball1=new Box(510,310,20,100)
ball2=new Box(690,310,20,100)
ground1=Bodies.rectangle(400,370,800,20,{isStatic:true})
	World.add(world,ground1)

box1=new Pp(20,340)
console.log(box1)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.display()
    ball1.display()
	ball2.display()
	box1.display()
	fill("white")
rect(ground1.position.x,ground1.position.y,800,20)
//keyPressed()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
	Body.applyForce(box1.body,box1.body.position,{x:85, y: -150})

}}
