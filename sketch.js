
var monkey , monkey_running
var banana ,bananaImage, stone, obstacleImage
var foodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  
  
}



function setup() {
 createCanvas(600,400) 
score = 0
  survivalTime = 0
  
  ground = createSprite(300,380,1200,10)
  monkey = createSprite(50,370,10,10)
monkey.addAnimation("monkey_running",monkey_running)  
  monkey.scale = 0.1
  
   foodGroup = new Group()
   obstacleGroup = new Group()
  
}


function draw() {
  background("green")
  

 if( keyDown("space") && monkey.y >=150 ){
   
   monkey.velocityY = -10;
   
 } 
 
  monkey.velocityY = monkey.velocityY +0.8
  
  
  ground.velocityX = -6
  if(ground.x<0){
    ground.x = ground.width/2
  }
  
  
 if(frameCount%200===0){
   fruits()
 } 
  
 if(frameCount%300===0){
   stones()
 } 
  
if(monkey.isTouching(foodGroup)){
 foodGroup.destroyEach() 
   score = score + 1
} 
  monkey.collide(ground)
  drawSprites();
 
fill("white")
 text("score: "+score,500,50)
  
  
}

function fruits(){
  var banana = createSprite(600, 250, 20,20);
  banana.velocityX = -6;
  banana.addImage(bananaImage)
  banana.scale = 0.2
  banana.lifetime = 150;
  foodGroup.add(banana);
}


function stones(){
  var stone = createSprite(600, 350, 20,20);
  stone.velocityX = -6;
  
  stone.addImage(obstacleImage)
  stone.scale = 0.2
  stone.lifetime = 150;
  obstacleGroup.add(stone);
}