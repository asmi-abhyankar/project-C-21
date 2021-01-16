var canvas;
var music;
var greenBox,redBox,blueBox,yellowBox

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(900,600);

    greenBox = createSprite(780,580,200,20)
    greenBox.shapeColor="green";

    redBox = createSprite(560,580,200,20)
    redBox.shapeColor="red";

    yellowBox = createSprite(340,580,200,20)
    yellowBox.shapeColor="yellow";

    blueBox = createSprite(100,580,200,20)
    blueBox.shapeColor="blue";
 
    random = createSprite(20,20,50,50)
    random.shapeColor="white";
    random.velocityY=3;
    random.velocityX=3;



}

function draw() {
    background(rgb(169,169,169));

    edges=createEdgeSprites()

    random.bounceOff(edges)

    if(random.isTouching(redBox)){
        random.shapeColor="red";
        music.play();
    }
    
    else if(random.isTouching(greenBox)){
        random.shapeColor="green";
        music.play();
    }

    else if(random.isTouching(yellowBox)){
        random.shapeColor="yellow";
        music.play();
    }
    
     else if(random.isTouching(blueBox)){
        random.shapeColor="blue";
        music.play();
    }
    else{random.shapeColor="white"
         music.stop();}
    


 drawSprites()
    //add condition to check if box touching surface and make it box
}
