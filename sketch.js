const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  backgroundImage = loadImage("images/gamingbackground.png");
}

function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 400, 600, 5);
  superhero =new Superhero(400,3,100,100);
  attach = new Throw(superhero.body,{x:100,y:465});
  block1 = new block (280, 350, 30, 40);
  block2 = new block(310, 350, 30, 40);
  block3 = new block(340, 350, 30, 40);
  block4 = new block(370, 350, 30, 40);
  block5 = new block (400,350,30,40);
  block6 = new block(430, 350, 30, 40);
  block7 = new block(460, 350, 30, 40);
  block8 = new block(490, 350, 30, 40);
  block9 = new block (310, 350, 30, 40);
  block10 = new block(340, 350, 30, 40);
  block11 = new block(370, 350, 30, 40);
  bloc12 = new block(400, 350, 30, 40);
  block13 = new block (430, 350, 30, 40);
  block14 = new block(460, 350, 30, 40);
  monster= new Monster(380,200,100,100);
 

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(backgroundImage);


  superhero.display();
  ground.display();
  stroke(15);
  fill("red")
  
  block1.display();
  block2.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  monster.display();

}

function mouseDragged(){
  matter.body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}

function mouseRelesed(){
  attach.fly();
}

