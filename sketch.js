var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,60,height/2);

  speed=random (55,90);
  weight=random (400,1500);
   
}

function draw() {
  
  background("purple");  
 wall.shapeColor="black";

 car.velocityX=speed;

 if(car.x - wall.x < wall.width/2+car.width/2 && wall.x - car.x < wall.width/2 + car.width/2){
car.velocityX=0 ;
 }
 else{
   car.shapeColor="green";
   wall.shapeColor="black";
 }

 if(wall.x-car.x<car.width/2+ wall.width/2){
   car.velocityX=0 ;
   var deformation=0.5 * weight* speed* speed/22509;
   if(defornation>180){
     car.shapeColor="red";
        }
        if(deformation< 180 && deformation>100){
          car.shapeColor="yellow";
        }
        if(deformation<100){
          car.shapeColor="green";
        }
 }


  drawSprites();
}