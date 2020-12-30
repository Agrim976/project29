const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;
var chain;
var polygon, polygonImage;
var mainGround, ground1;

function preload(){
    polygonImage = loadImage("polygon.png");

}

function setup(){
    var canvas = createCanvas(1350,600);
    engine = Engine.create();
    world = engine.world;

    //level1
    box1 = new Box(650,200,rgb(128,128,128));
    //level2
    box2 = new Box(650,270,rgb(63,224,208));
    box3 = new Box(700,270,rgb(63,224,208));
    box4 = new Box(600,270,rgb(63,224,208));
    //level3
    box5 = new Box(650,340,rgb(255,192,203));
    box6 = new Box(700,340,rgb(255,192,203));
    box7 = new Box(600,340,rgb(255,192,203));
    box8 = new Box(750,340,rgb(255,192,203));
    box9 = new Box(550,340,rgb(255,192,203));
    //level4
    box10 = new Box(650,410,rgb(136,205,234));
    box11 = new Box(700,410,rgb(136,205,234));
    box12 = new Box(750,410,rgb(136,205,234));
    box13 = new Box(600,410,rgb(136,205,234));
    box14 = new Box(550,410,rgb(136,205,234));
    box15 = new Box(500,410,rgb(136,205,234));
    box16 = new Box(800,410,rgb(136,205,234));

    mainGround = new Ground(width/2,height,width,20);
    
    ground1 = new Ground(650,455,390,20);

    polygon = Bodies.circle(150,300,40);
    World.add(world,polygon);

    chain = new Chain(this.polygon,{x : 150, y : 300});
    
}

function draw(){
    background("lightblue");
    
    rectMode(CENTER);
    imageMode(CENTER);

    chain.display();

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
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    mainGround.display();

    ground1.display();
  
    image(polygonImage,polygon.position.x,polygon.position.y,60,60);

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain.fly();
}