var fixrect,movingrect;
gameState="start";
function setup() {

  createCanvas(displayWidth,displayHeight);
  boy=createSprite (displayWidth/3,displayHeight/3);
  girl=createSprite(displayWidth/2,displayHeight/3);

  player=createSprite(displayWidth/7,displayHeight/2);
invisibleGround=createSprite(displayWidth/2,displayHeight-100,displayWidth,20);
invisibleGround.visible=false;


 }

function draw() {

  background(0);
 upbutton=createButton('↑')
 upbutton.position(displayWidth/15,displayHeight-200);
 upbutton.mousePressed(()=>{
   player.velocityY=-20;
    })
 downbutton=createButton('↓')
 downbutton.position(displayWidth/15,displayHeight-150);
 downbutton.mousePressed(()=>{
  player.velocityY=20;
   }) 
if(gameState==="start"){
  
  if(mousePressedOver(boy)){
    boy.destroy();
    girl.destroy();


  }
  if(mousePressedOver(girl)){
    boy.destroy();
    girl.destroy();


  } 
}
   player.velocityY+=1;

   player.collide(invisibleGround);
spawnObstacles();
  drawSprites();
}
function spawnObstacles(){
  if(World.frameCount%120===0){
    obstacle=createSprite(displayWidth,displayHeight-150);
  obstacle.velocityX=-6;
  obstacle.lifetime=displayWidth/-6+50
  }
}