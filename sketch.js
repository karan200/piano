var blue,green,orange,pink;
var purple,red,white,yellow;
var pianoBg,BgIm;
var icon,icon2;

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
  iconIm = loadImage("icon.png");

}

function setup() {

  createCanvas(displayWidth,displayHeight);

  pianoBg=createSprite(450,160,800,200);
  pianoBg.addImage(BgIm);
  pianoBg.scale=0.9;

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
  
  drawSprites();
  if(mousePressedOver(blue)){
    blue.scale=1;
    icon=createSprite(150,200,10,10);
    icon.addImage(iconIm);
    icon.scale=0.3;
    icon.velocityY=-5;
    icon2=createSprite(750,200,10,10);
    icon2.addImage(iconIm);
    icon2.scale=0.3;
    icon2.velocityY=-5;
  }else{
    blue.scale=1.5;
  }

  if(mousePressedOver(green)){
    green.scale=1;
    icon=createSprite(150,200,10,10);
    icon.addImage(iconIm);
    icon.scale=0.3;
    icon.velocityY=-5;
    icon2=createSprite(750,200,10,10);
    icon2.addImage(iconIm);
    icon2.scale=0.3;
    icon2.velocityY=-5;
  }else{
    green.scale=1.5;
  }

  if(mousePressedOver(orange)){
    orange.scale=1;
    icon=createSprite(150,200,10,10);
    icon.addImage(iconIm);
    icon.scale=0.3;
    icon.velocityY=-5;
    icon2=createSprite(750,200,10,10);
    icon2.addImage(iconIm);
    icon2.scale=0.3;
    icon2.velocityY=-5;
  }else{
    orange.scale=1.5;
  }

  if(mousePressedOver(pink)){
    pink.scale=1;
    icon=createSprite(150,200,10,10);
    icon.addImage(iconIm);
    icon.scale=0.3;
    icon.velocityY=-5;
    icon2=createSprite(750,200,10,10);
    icon2.addImage(iconIm);
    icon2.scale=0.3;
    icon2.velocityY=-5;
  }else{
    pink.scale=1.5;
  }

  if(mousePressedOver(purple)){
    purple.scale=1;
    icon=createSprite(150,200,10,10);
    icon.addImage(iconIm);
    icon.scale=0.3;
    icon.velocityY=-5;
    icon2=createSprite(750,200,10,10);
    icon2.addImage(iconIm);
    icon2.scale=0.3;
    icon2.velocityY=-5;
  }else{
    purple.scale=1.5;
  }

  if(mousePressedOver(red)){
    red.scale=1;
    icon=createSprite(150,200,10,10);
    icon.addImage(iconIm);
    icon.scale=0.3;
    icon.velocityY=-5;
    icon2=createSprite(750,200,10,10);
    icon2.addImage(iconIm);
    icon2.scale=0.3;
    icon2.velocityY=-5;
  }else{
    red.scale=1.5;
  }

  if(mousePressedOver(white)){
    white.scale=1;
    icon=createSprite(150,200,10,10);
    icon.addImage(iconIm);
    icon.scale=0.3;
    icon.velocityY=-5;
    icon2=createSprite(750,200,10,10);
    icon2.addImage(iconIm);
    icon2.scale=0.3;
    icon2.velocityY=-5;
  }else{
    white.scale=1.5;
  }

  if(mousePressedOver(yellow)){
    yellow.scale=1;
    icon=createSprite(150,200,10,10);
    icon.addImage(iconIm);
    icon.scale=0.3;
    icon.velocityY=-5;
    icon2=createSprite(750,200,10,10);
    icon2.addImage(iconIm);
    icon2.scale=0.3;
    icon2.velocityY=-5;
  }else{
    yellow.scale=1.5;
  }
}