var blue,green,orange,pink;
var purple,red,white,yellow;
var pianoBg,BgIm;
var icon,icon2;
var iconIm;
var audio;

function preload() {
  //soundFormats('mp3', 'ogg');
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
  audio1 = loadSound("A.wav");
  audio2 = loadSound("B.wav");
  audio3 = loadSound("C.wav");
  audio4 = loadSound("C2.wav");
  audio5 = loadSound("D.wav");
  audio6 = loadSound("E.wav");
  audio7 = loadSound("F.wav");
  audio8 = loadSound("Grand_Piano.wav");

}

function setup() {

  createCanvas(displayWidth,displayHeight);

  pianoBg=createSprite(650,160,800,200);
  pianoBg.addImage(BgIm);
  pianoBg.scale=0.9;

  blue=createSprite(300,350,10,100);
  blue.addImage(blueIm);
  blue.scale=0.5;

  green=createSprite(400,350,50,50);
  green.addImage(greenIm);
  green.scale=0.5;

  orange=createSprite(500,350,50,50);
  orange.addImage(orangeIm);
  orange.scale=0.5;
  
  pink=createSprite(600,350,50,50);
  pink.addImage(pinkIm);
  pink.scale=0.5;
  
  purple=createSprite(700,350,50,50);
  purple.addImage(purpleIm);
  purple.scale=0.5;

  red=createSprite(800,350,50,50);
  red.addImage(redIm);
  red.scale=0.5;

  white=createSprite(900,350,50,50);
  white.addImage(whiteIm);
  white.scale=0.5;

  yellow=createSprite(1000,350,50,50);
  yellow.addImage(yellowIm);
  yellow.scale=0.5;

}

function draw() {
  background("skyBlue");

  if(mousePressedOver(blue)){
    blue.scale=1;
    icon=createSprite(350,150,10,10);
    icon.addImage(iconIm);
    icon.scale=0.3;
    icon.velocityY=-5;
    icon2=createSprite(950,150,10,10);
    icon2.addImage(iconIm);
    icon2.scale=0.3;
    icon2.velocityY=-5;
    audio1.play();

    
  }else{
    blue.scale=1.5;
  }

  if(mousePressedOver(green)){
    green.scale=1;
    icon=createSprite(350,150,10,10);
    icon.addImage(iconIm);
    icon.scale=0.3;
    icon.velocityY=-5;
    icon2=createSprite(950,150,10,10);
    icon2.addImage(iconIm);
    icon2.scale=0.3;
    icon2.velocityY=-5;
    audio2.play();
  }else{
    green.scale=1.5;
  }

  if(mousePressedOver(orange)){
    orange.scale=1;
    icon=createSprite(350,150,10,10);
    icon.addImage(iconIm);
    icon.scale=0.3;
    icon.velocityY=-5;
    icon2=createSprite(950,150,10,10);
    icon2.addImage(iconIm);
    icon2.scale=0.3;
    icon2.velocityY=-5;
    audio3.play();
  }else{
    orange.scale=1.5;
  }

  if(mousePressedOver(pink)){
    pink.scale=1;
    icon=createSprite(350,150,10,10);
    icon.addImage(iconIm);
    icon.scale=0.3;
    icon.velocityY=-5;
    icon2=createSprite(950,150,10,10);
    icon2.addImage(iconIm);
    icon2.scale=0.3;
    icon2.velocityY=-5;
    audio4.play();
  }else{
    pink.scale=1.5;
  }

  if(mousePressedOver(purple)){
    purple.scale=1;
    icon=createSprite(350,150,10,10);
    icon.addImage(iconIm);
    icon.scale=0.3;
    icon.velocityY=-5;
    icon2=createSprite(950,150,10,10);
    icon2.addImage(iconIm);
    icon2.scale=0.3;
    icon2.velocityY=-5;
    audio5.play();
  }else{
    purple.scale=1.5;
  }

  if(mousePressedOver(red)){
    red.scale=1;
    icon=createSprite(350,150,10,10);
    icon.addImage(iconIm);
    icon.scale=0.3;
    icon.velocityY=-5;
    icon2=createSprite(950,150,10,10);
    icon2.addImage(iconIm);
    icon2.scale=0.3;
    icon2.velocityY=-5;
    audio6.play();
  }else{
    red.scale=1.5;
  }

  if(mousePressedOver(white)){
    white.scale=1;
    icon=createSprite(350,150,10,10);
    icon.addImage(iconIm);
    icon.scale=0.3;
    icon.velocityY=-5;
    icon2=createSprite(950,150,10,10);
    icon2.addImage(iconIm);
    icon2.scale=0.3;
    icon2.velocityY=-5;
    audio7.play();
  }else{
    white.scale=1.5;
  }

  if(mousePressedOver(yellow)){
    yellow.scale=1;
    icon=createSprite(350,150,10,10);
    icon.addImage(iconIm);
    icon.scale=0.3;
    icon.velocityY=-5;
    icon2=createSprite(950,150,10,10);
    icon2.addImage(iconIm);
    icon2.scale=0.3;
    icon2.velocityY=-5;
    audio8.play();
  }else{
    yellow.scale=1.5;
  }
  drawSprites();
}
