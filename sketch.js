
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouseconstraints = Matter.Mouseconstraints;

var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;

function preload()
{
	
}

function setup() {
	canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);
  engine = Engine.create();
  world = engine.world;
  
  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();
  let options = {
    mouse: canvasmouse
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  pendulum1 = new Bob(180,400,55);
  sling1 = new Sling(pendulum1.body, {x: 180, y: 400});
  pendulum2 = new Bob(290,400,55);
  sling2 = new Sling(pendulum2.body, {x: 290, y:400});
  pendulum3 = new Bob(400,400,55);
  sling3 = new Sling(pendulum3, {x: 400, y: 400});
  pendulum4 = new Bob(510,400,55);
  sling4 = new Sling(pendulum4, {x: 510, y: 400});
  pendulum5 = new Bob(620,400,55);
  sling5 = new Sling(pendulum5, {x: 620, y: 400});
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(225);
  Engine.update(engine);
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  drawSprites();
 
}

function mouseDragged() {
  Matter.Body.setPosition(pendulum1.body, {x: mouseX, y: mouseY});
}



