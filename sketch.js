var fixedRect, movingRect,fixedBox,movingBox;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedBox = createSprite(600,500,50,50);
  fixedBox.shapeColor = "blue";
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingBox = createSprite(600,400,30,30);
  movingBox.shapeColor = "blue";

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0); 
  movingBox.x = mouseX;
  movingBox.y = mouseY;

  //Bounce Off
  bounceOff(movingRect,fixedRect);
  if(isTouching(movingBox,fixedBox)){
    movingBox.shapeColor = color(random(0,255),random(0,255),random(0,255));
    fixedBox.shapeColor = color(random(0,255),random(0,255),random(0,255));
  }
  else{
    movingBox.shapeColor = "blue";
    fixedBox.shapeColor = "blue";
  }

  drawSprites();
}

