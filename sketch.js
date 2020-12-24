var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(windowWidth,400);

  speed=random(223, 321);
  weight=random(30, 52);
  thickness=random(22, 83);

  bullet = createSprite(50, 200, 30, 5);
  bullet.shapeColor="grey";

  wall = createSprite(width-100, 200, thickness, 300);
  wall.shapeColor=color(80, 80, 80);

  bullet.velocityX=speed;
}

function draw() {
  background("blue"); 
  
  if(collided(bullet,wall)){
    bullet.velocityX=0;

    var damage =0.5*weight*speed*speed/(wall.width*wall.width*wall.width);

    if(damage>10){
      wall.shapeColor="green";
    }
    else if(damage<10){
      wall.shapeColor="red";
    }
    
  }
  
  drawSprites();
}

function collided(lbullet, lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  WallLeftEdge=lwall.x;
  if(bulletRightEdge>=WallLeftEdge){
      return true;
  }
  return false;
}