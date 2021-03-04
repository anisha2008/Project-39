var road,strips
var bike,mbike
var score
var s1,s2,s3,stone
var stoneGroup
var gameState="play"

function preload(){

mbike=loadImage("anisha.png")
s1=loadImage("rock.png") 
s2=loadImage("rock-1.png")
s3=loadImage("rock-2.png")
backgroundImg=loadImage("background.jpg")
}

function setup() {
 createCanvas(400,400)
  
  road=createSprite(0,200,1000,150)
  road.shapeColor="grey"
  
  bike=createSprite(80,140,20,20)
  bike.addImage(mbike)
  bike.scale=0.3;
  score=0
  
  stoneGroup= new Group();
  stoneGroup.debug=true
}

function draw() {
 background(backgroundImg)
  
   if(gameState==="play"){
   
 
   Stone()
   score=Math.ceil(frameCount/frameRate())
   
   if (keyDown(UP_ARROW) && bike.y>110) {
        bike.y=bike.y-5
}
     
   if (keyDown(DOWN_ARROW) && bike.y<240) {
        bike.y=bike.y+5
}
     
    if(stoneGroup.isTouching(bike)){
   gameState="end"
}
}  camera.position.x=bike.x
camera.position.y=bike.y
  
  if(gameState==='end'){
    
     textSize(50)
     fill("black")
     stroke("black")
    text("Game Over",-50,200)
     stoneGroup.setVelocityXEach(0)
    stoneGroup.setlifetimeEach(-1)
     road.velocityX=0;
     strips.velocityX=0
     score=0
  }
   if(bike.x>2000){
     textSize(50)
    fill("black")
     text("You Win",-50,200)
   }
 
  
  S()
  
  
  drawSprites()
  
  fill("blue")
  textSize(25)
  stroke("yellow")
  stroke(7)
  text("Survival Time : "+ score,000,50)
  
   
    
  
}

function S(){
  if(frameCount%50===0){
    strips=createSprite(400,200,80,7)
    strips.shapeColor="white"
    strips.velocityX=-10-score/20
    strips.lifetime=150
    
  }
}

function Stone(){
  if(frameCount%100===0){
     stone=createSprite(400,400,20,20)
    var rand=Math.round(random(1,3))
    stone.scale=0.1;
    stone.velocityX=-4-score/20
  switch(rand){
      case 1:stone.addImage(s1)
      break;
      case 2:stone.addImage(s2)
      break;
      case 3:stone.addImage(s3)
  }   
    stone.y=Math.round(random(100,250))
    stone.lifetime=150;
    stoneGroup.add( stone);
  } 
}