var fixedRect, movingRect;
var car , wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  car = createSprite(300,200,80,20);
  car.shapeColor = "yellow";
  car.velocityX = 3

 wall = createSprite(1000,20,20,1000);
 wall.shapeColor = "purple";

  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;



  if(isTouching(movingRect,wall)){
    movingRect.shapeColor="red"
    wall.shapeColor="red"
    //car.velocityX = 0
  }
else {
   //car.shapeColor="yellow"
   wall.shapeColor="purple"
   movingRect.shapeColor="green"
}
  drawSprites();
}



