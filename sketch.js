
var man,manImage
var wall,wallImage
var zombie,zombieImage

function preload(){
  manImage = loadImage("./assets/man.png")
  wallImage = loadImage("./assets/wall.jpeg")
  zombieImage = loadImage("./assets/zombie.png")
}


function setup(){
  createCanvas(windowWidth,windowHeight)
  man = createSprite(250,400)
  man.addImage(manImage)
  man.scale = 2
  


  

}

function draw(){
  background("black")

  spawnZombies()
  drawSprites()
}

function spawnZombies(){
  if(frameCount % 100===0){
    zombie = createSprite(1100,400)
    zombie.addImage(zombieImage)
    zombie.scale = 0.8
    zombie.velocityX = -0.8
  }
}