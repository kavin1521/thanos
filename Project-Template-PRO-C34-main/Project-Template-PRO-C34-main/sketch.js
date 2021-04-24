const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,stone,stone1;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground1.jpg");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 100, 70, 70);
  box5 = new Box(600, 100, 70, 70);
  box6 = new Box(600, 100, 70, 70);
  box7 = new Box(600, 100, 70, 70);
  box8 = new Box(600, 100, 70, 70);
  box9 = new Box(600, 100, 70, 70);

  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box10 = new Box(900, 100, 70, 70);
  box11 = new Box(900, 100, 70, 70);
  box12 = new Box(900, 100, 70, 70);

  stone = new Stone(800,100,70,70);
  stone1 = new Stone(700,100,70,70);
  stone2 = new Stone(800,100,70,70);
  stone3 = new Stone(700,100,70,70);
  stone4 = new Stone(800,100,70,70);
  stone5 = new Stone(700,100,70,70);
  stone6 = new Stone(800,100,70,70);
  stone7 = new Stone(700,100,70,70);
  stone8 = new Stone(800,100,70,70);
  stone9 = new Stone(700,100,70,70);
  stone10 = new Stone(800,100,70,70);
  stone11 = new Stone(700,100,70,70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  stone.display();
  stone1.display();
  stone2.display();
  stone3.display();
  stone4.display();
  stone5.display();
  stone6.display();
  stone7.display();
  stone8.display();
  stone9.display();
  stone10.display();
  stone11.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged() {

  Matter.Body.setPosition (hero.body,{x: mouseX , y: mouseY});
}

