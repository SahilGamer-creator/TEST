var monkey,monkeyimg;
var bg,bgimg;
var banana,foodGroup,bananaimg;
var obstacle,obstacleGroup,obstacleimg;
var invisibleground;
var score=0;

function preload(){
  
  bgimage=loadImage("jungle.jpg");
  
  monkeyimg =loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  bananaimg=loadImage("banana.png");
  obstacleimg=loadImage("stone.png");
  
}

function setup() {
  createCanvas(400, 400);
  
  bg = createSprite(200,200,30,20);
  bg.addImage(bgimage);
  bg.scale=0.7;
  
  monkey=createSprite(60,330,20,20);
  monkey.addAnimation("running",monkeyimg);
  monkey.scale= 0.10;
  
  invisibleground=createSprite(200,335,400,10);
  invisibleground.visible=false;
  
  foodGroup = new Group ();
  obstacleGroup = new Group ();
  
  
  
}

function draw() {
  background(220);
  
  bg.velocityX=-3;
  if (bg.x < 40){
    bg.x = bg.width/4;
  }
  
  if(keyDown("space")) {
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(invisibleground);
  
   if(foodGroup.isTouching(monkey)){
     foodGroup.destroyEach();
     score=score+2; 
   }
  
  switch(score){
    case 10:monkey.scale=0.12;
      break;
    case 20:monkey.scale=0.14;
      break;
    case 30:monkey.scale=0.16;
      break;
    case 40:monkey.scale=0.18;
      break;
      default:break;
  }
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale=0.10;
  }
  
  
  food();
  stones();
  drawSprites();
  stroke("white");
  textSize(20);
  fill("black")
  text("SCORE :"+score,200,50);

  
}


function food (){
  if(frameCount% 100 === 0){
  banana=createSprite(400,200,20,20);
  banana.y=Math.round(random(200,180));  
  banana.addImage(bananaimg);
  banana.scale=0.05;
  banana.velocityX=-2;
  foodGroup.add(banana);
    
  foodGroup.depth=monkey.depth;
  monkey.depth=monkey.depth+1;
  
 
  
  } 
}

function stones(){
  if(frameCount% 100 === 0){
  obstacle=createSprite(350,315,20,20);
  obstacle.addImage(obstacleimg);
  obstacle.scale=0.15;
  obstacle.velocityX=-3;
  obstacleGroup.add(obstacle);
  }
}
