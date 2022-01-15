
var choice1, choice2;
var gameState, AstroImage, backImage;

function preload(){
  AstroImage= loadImage("Astronaut.png");
  backImage= loadImage("Background.png");
}

function setup() {
  createCanvas(1200,550);
  choice1= createSprite(200,300);

  choice2= createSprite(600,300);
  gameState="Start";

  choice1.debug= true
  choice2.debug= true

}

function draw() {
  background(backImage);  

  textSize(30);
  fill("white")
  text("You have been chosen to save the world from a group of androids \n who are here to annihilate all of mankind.\nYou must travel the galaxy to ensure that not a single one survives.", 100, 50 )

  text(mouseX + ","+ mouseY, 1000, 500);
  text("Choose your explorer:", 300,200);

  choice1.addImage(AstroImage);
  


  if(mousePressedOver(choice1)){
    choice2.destroy();
  }
  else if(mousePressedOver(choice2)){
    choice1.destroy();
  }

  choice1.display();
  drawSprites();
}