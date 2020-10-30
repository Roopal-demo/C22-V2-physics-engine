//step 1= include lib in index.html
//step 2= namespacing
const Engine=Matter.Engine;//creates the physics engine
const World= Matter.World;//create the physics world to add bodies
const Bodies = Matter.Bodies;//create the bodies

var engine,world,object;

function setup() {
  createCanvas(400,400);
  //step 3= create the engine & the world
  engine = Engine.create();
  world = engine.world;

  var object_options={
    isStatic:true
  }

  //step 4= create bodies & add to the world
  object = Bodies.rectangle(200,100,50,50,object_options);
  World.add(world,object);
  console.log(object);
  console.log(object.type);
  console.log(object.position.x);
  console.log(object.position.y);

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0,0,0);  
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);
  Engine.update(engine);
  //drawSprites();
}