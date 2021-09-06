var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg
var score
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
}

function setup(){
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
  //apple group
  applegroup= new Group ()
  //display score
}
function creatingApples(){
  if (frameCount%60==0){
    apple=createSprite(random(50,350),40,10,10);
    apple.addImage(appleImg);
    applegroup.add(apple);
    apple.lifetime=150;
    apple.scale=0.05;
    apple.velocityY=4;
    rabbit.depth=apple.depth+1;
  }
}

function draw() {
  background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);
  if (keyDown("LEFT_ARROW")){
    rabbit.x=rabbit.x-4
  }
  if (keyDown("RIGHT_ARROW")){
    rabbit.x=rabbit.x+4
  }
  creatingApples()
  drawSprites();
}