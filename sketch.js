var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  leavesImg = loadImage("leaf.png");
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


}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX 

  createleaves();
  createApple();

  drawSprites();
}
function createleaves(){
  if(frameCount % 80 === 0 ){
    leaves = createSprite(0,0,20,20)
    leaves.addImage(leavesImg);
    leaves.scale=0.1;
    leaves.velocityY= 5;
    leaves.x=Math.round(random(0,400));
    leaves.lifetime=100;
  }
}
function createApple(){
  if(frameCount % 80 === 0 ){
    apple = createSprite(0,0,20,20)
    apple.addImage(appleImg);
    apple.scale=0.1;
    apple.velocityY= 5;
    apple.x=Math.round(random(16,400));
    apple.lifetime=100;
  }
}