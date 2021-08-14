var bg ;
var sleep ;
var bath;
var brush;
var drink;
var eat1;
var gym;
var move;
var astronaunt;

function preload() {
  bg = loadImage("images/iss.png");
  sleep = loadAnimation("images/sleep.png");
  bath = loadAnimation("images/bath1.png","images/bath2.png");
  brush = loadAnimation('images/brush.png');
  drink = loadAnimation("images/drink1.png","images/drink2.png");
  eat1 = loadAnimation('images/eat1.png','images/eat2.png');
  gym = loadAnimation('images/gym1.png','images/gym2.png','images/gym11.png','images/gym12.png');
  move = loadAnimation('images/move1.png','images/move1.png');
}


function setup() {
  createCanvas(1200, 600);
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleep", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg);
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brush", brush);
    astronaut.changeAnimation("brush");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("bath", bath);
    astronaut.changeAnimation("bath");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("gym", gym);
    astronaut.changeAnimation("gym");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("move", move);
    astronaut.changeAnimation("move");
    astronaut.y = 350;
    astronaut.velocityX = 2;
    astronaut.velocityY = 3;
  }
 


  drawSprites();
}
