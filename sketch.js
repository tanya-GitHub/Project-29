
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine, world;
var stand;
var b1, b2, b3, b4, b5, b6, b7, b8, b9; 
var b10, b11, b12, b13, b14, b15, b16;
var b17, b18, b19, b20, b21;
var b22, b23, b24;
var b25;
var polygon;
var slingshot;

function preload(){

	polygonIm = loadImage("polygon.png");

  }

function setup() {
	var canvas = createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;

	var options = {
		isStatic: false,
		density: 3,
		friction: 0
	}

	polygon = Bodies.circle(250, 300, 40);
	World.add(world, polygon);

	stand = new Ground(900, 400, 500, 20);
	World.add(world, stand);

	slingshot = new Slingshot(polygon, {x:250, y:300});
	World.add(world, slingshot);

	//first row:
	b1 = new Block(900, 325, 50, 50);
	World.add(world, b1);
	b2 = new Block(950, 325, 50, 50);
	World.add(world, b2);
	b3 = new Block(1000, 325, 50, 50);
	World.add(world, b3);
	b4 = new Block(1050, 325, 50, 50);
	World.add(world, b4);
	b5 = new Block(1100, 325, 50, 50);
	World.add(world, b5);
	b6 = new Block(850, 325, 50, 50);
	World.add(world, b6);
	b7 = new Block(800, 325, 50, 50);
	World.add(world, b7);
	b8 = new Block(750, 325, 50, 50);
	World.add(world, b8);
	b9 = new Block(700, 325, 50, 50);
	World.add(world, b9);

	//second row:
	b10 = new Block(900, 275, 50, 50);
	World.add(world, b1);
	b11 = new Block(950, 275, 50, 50);
	World.add(world, b2);
	b12 = new Block(1000, 275, 50, 50);
	World.add(world, b3);
	b13 = new Block(1050, 275, 50, 50);
	World.add(world, b4);
	b14 = new Block(850, 275, 50, 50);
	World.add(world, b5);
	b15 = new Block(800, 275, 50, 50);
	World.add(world, b15);
	b16 = new Block(750, 275, 50, 50);
	World.add(world, b16);

	//third row:
	b17 = new Block(900, 225, 50, 50);
	World.add(world, b17);
	b18 = new Block(950, 225, 50, 50);
	World.add(world, b18);
	b19 = new Block(1000, 225, 50, 50);
	World.add(world, b19);
	b20 = new Block(850, 225, 50, 50);
	World.add(world, b20);
	b21 = new Block(800, 225, 50, 50);
	World.add(world, b21);

	//fourth row:
	b22 = new Block(900, 175, 50, 50);
	World.add(world, b22);
	b23 = new Block(850, 175, 50, 50);
	World.add(world, b21);
	b24 = new Block(950, 175, 50, 50);
	World.add(world, b22);

	//fifth row:
	b25 = new Block(900, 125, 50, 50);
	World.add(world, b25);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!

  imageMode(CENTER);
  image(polygonIm, polygon.position.x, polygon.position.y, 80, 80);

  textSize(35);
  text("Drag the Hexagon and Release to Launch it towards the blocks!", 60, 50);

  stand.display();
  slingshot.display();

  //first row:
  fill(255);
  b1.display();
  fill(0);
  b2.display();
  fill(30, 40, 50);
  b3.display();
  fill(200, 40, 250);
  b4.display();
  fill(10, 40, 175);
  b5.display();
  fill(255, 200, 100);
  b6.display();
  fill(255);
  b7.display();
  fill(0);
  b8.display();
  fill(90, 50, 255)
  b9.display();

  //second row:
  fill(30, 40, 50);
  b10.display();
  fill(40, 255, 255);
  b11.display();
  fill(255, 60, 80);
  b12.display();
  fill(39, 42, 10);
  b13.display();
  fill(255, 60, 30);
  b14.display();
  fill(45, 255, 60);
  b15.display();
  fill(255);
  b16.display();

  //third row:
  fill(0);
  b17.display();
  fill(200, 200, 200);
  b18.display();
  fill(30, 30, 30);
  b19.display();
  fill(220, 30, 100);
  b20.display();
  fill(255);
  b21.display();

  //fourth row:
  fill(200, 100, 190);
  b22.display();
  fill(0);
  b23.display();
  fill(100, 230, 255);
  b24.display();

  //fifth row:
  fill(220, 30, 100);
  b25.display();

}


function mouseDragged(){
	Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
