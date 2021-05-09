var bg;
var cat,catI,catW;
var mouse,mouseI,mouseW;
var catL,mouseL;


function preload() {
    bg = loadImage("images/garden.png")
    catI = loadAnimation("images/cat1.png")
    mouseI = loadAnimation("images/mouse1.png")
    mouseW = loadAnimation("images/mouse2.png","images/mouse3.png")
    catW = loadAnimation("images/cat2.png","images/cat3.png")
    catL = loadAnimation("images/cat4.png")
    mouseL = loadAnimation("images/mouse4.png")
    //load the images here
}

function setup(){
    createCanvas(1000,800);

    cat =  createSprite(870,600);
    cat.addAnimation("catSleeping",catI)
    cat.scale = 0.2 
    //create tom and jerry sprites here

    mouse =  createSprite(200,600);
    mouse.addAnimation("mousesStanding",mouseI)
    mouse.scale = 0.15;

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < cat.width/2 + mouse.width/2){
        cat.velocityX = 0;
        mouse.velocityX = 0;
        cat.addAnimation("catLast",catL)
        cat.changeAnimation("catLast")
        mouse.addAnimation("mouseLast",mouseL)
        mouse.changeAnimation("mouseLast")
        cat.scale =  0.2;
        mouse.scale = 0.15;



    }

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){ 
        cat.addAnimation("catRunning",catW)
        cat.changeAnimation("catRunning")
        cat.frameDelay = 25
        cat.velocityX = -5
     
        mouse.addAnimation("mouseTeasing",mouseW)
        mouse.changeAnimation("mouseTeasing")
        mouse.frameDelay = 25
    }


  //For moving and changing animation write code here


}
