var path,pathimage
var Jaxon,Jaxonrunning

function preload(){
  //pre-load images
pathimage = loadImage("path.png")
Jaxonrunning = loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200)
  path.addImage(pathimage)
  path.velocityY=3;

  Jaxon = createSprite(200,300)
  Jaxon.addAnimation("running",Jaxonrunning)
  Jaxon.scale=0.1

}

function draw() {
  background(0);
 if(path.y>400){
   path.y = -10
 }

drawSprites()

}
