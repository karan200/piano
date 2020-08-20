var blue,green,orange,pink;
var purple,red,white,yellow;
var pianoBg,BgIm;

function preload() {

  blueIm = loadImage("blue.png");
  greenIm = loadImage("green.png");
  orangeIm = loadImage("orange.png");
  pinkIm = loadImage("pink.png");
  purpleIm = loadImage("purple.png");
  redIm = loadImage("red.png");
  whiteIm = loadImage("white.png");
  yellowIm = loadImage("yellow.png");
  BgIm = loadImage("background.png");

}

function setup() {

  createCanvas(900,500);

  pianoBg=createSprite(450,160,800,200);
  pianoBg.addImage(BgIm);
  pianoBg.scale=8.2;

  blue=createSprite(100,350,10,100);
  blue.addImage(blueIm);
  blue.scale=0.5;

  green=createSprite(200,350,50,50);
  green.addImage(greenIm);
  green.scale=0.5;

  orange=createSprite(300,350,50,50);
  orange.addImage(orangeIm);
  orange.scale=0.5;
  
  pink=createSprite(400,350,50,50);
  pink.addImage(pinkIm);
  pink.scale=0.5;
  
  purple=createSprite(500,350,50,50);
  purple.addImage(purpleIm);
  purple.scale=0.5;

  red=createSprite(600,350,50,50);
  red.addImage(redIm);
  red.scale=0.5;

  white=createSprite(700,350,50,50);
  white.addImage(whiteIm);
  white.scale=0.5;

  yellow=createSprite(800,350,50,50);
  yellow.addImage(yellowIm);
  yellow.scale=0.5;

}

function draw() {
  background("skyBlue");
 
  if(mousePressedOver(blue)){
    blue.scale=1;
  }else{
    blue.scale=1.5;
  }

  if(mousePressedOver(green)){
    green.scale=1;
  }else{
    green.scale=1.5;
  }

  if(mousePressedOver(orange)){
    orange.scale=1;
  }else{
    orange.scale=1.5;
  }

  if(mousePressedOver(pink)){
    pink.scale=1;
  }else{
    pink.scale=1.5;
  }

  if(mousePressedOver(purple)){
    purple.scale=1;
  }else{
    purple.scale=1.5;
  }

  if(mousePressedOver(red)){
    red.scale=1;
  }else{
    red.scale=1.5;
  }

  if(mousePressedOver(white)){
    white.scale=1;
  }else{
    white.scale=1.5;
  }

  if(mousePressedOver(yellow)){
    yellow.scale=1;
  }else{
    yellow.scale=1.5;
  }

  drawSprites();
}