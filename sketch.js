
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){}

function setup() {
	canvas = createCanvas(windowWidth/2, windowHeight/2);

	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse: canvasmouse
	};
	mConstraint = MouseConstraint.create(engine, options);
	World.add(world, mConstraint);

	//Create the Bodies Here.
	pendulum1 = new Pendulum(300, 400, "#88F50C");
	pendulum2 = new Pendulum(340, 400, "#88F50C");
	pendulum3 = new Pendulum(380, 400, "#88F50C");
	pendulum4 = new Pendulum(420, 400, "#88F50C");
	pendulum5 = new Pendulum(460, 400, "#88F50C");

	sling1 = new Sling(pendulum1.body, {x:300, y:200});
	sling2 = new Sling(pendulum2.body, {x:340, y:200});
	sling3 = new Sling(pendulum3.body, {x:380, y:200});
	sling4 = new Sling(pendulum4.body, {x:420, y:200});
	sling5 = new Sling(pendulum5.body, {x:460, y:200});

	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background(0);
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

function mouseDragged(){
	Matter.Body.setPosition(pendulum1.body, {x:mouseX, y:MouseY});
}