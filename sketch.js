var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleIMG;
var leaf,rLeaf, oLeaf, leafIMG,rIMG,oIMG;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleIMG = loadImage("apple.png");
  leafIMG = loadImage ("leaf.png");
  rIMG = loadImage("redImage.png");
  oIMG = loadImage("orangeLeaf.png");
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
  

 rabbit.x=World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  console.log("hello");
  createApples();
  createLeaves();

  drawSprites();
}

function createApples(){
if (frameCount%60===0){
apple = createSprite(350,4,10,10)
apple.addImage(appleIMG);
apple.scale=0.05;
apple.velocityY=5;

apple.x=Math.round(random(100,300));

apple.lifetime=90;
apple.depth=rabbit.depth
rabbit.depth=rabbit.depth+1
}
}

function createLeaves(){
if (frameCount%60===0){
  leaf=createSprite(350,4,10,10)
  leaf.addImage(leafIMG);
  leaf.scale=0.05;
  leaf.velocityY=5;
  leaf.x=Math.round(random(100,300));
  leaf.lifetime=90;
  leaf.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1;

  rleaf=createSprite(350,4,10,10)
  rleaf.addImage(rIMG);
  rleaf.scale=0.05;
  rleaf.velocityY=5;
  rleaf.x=Math.round(random(100,300));
  rleaf.lifetime=90;
  rleaf.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1;

  oleaf=createSprite(350,4,10,10)
  oleaf.addImage(oIMG);
  oleaf.scale=0.05;
  oleaf.velocityY=5;
  oleaf.x=Math.round(random(100,300));
  oleaf.lifetime=90;
  oleaf.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1;





}
}