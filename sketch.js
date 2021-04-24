var canvas;
var music;
var box;
var block1,block2,block3,block4;
var edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     block1=createSprite(0,580,360,30);
     block1.shapeColor="green";


     block2=createSprite(295,580,200,30);
     block2.shapeColor="red";

     block3=createSprite(515,580,200,30);
     block3.shapeColor="blue";


     block4=createSprite(740,580,200,30);
     block4.shapeColor="orange";

    



    //create box sprite and give velocity
     box=createSprite(random(20,750),100,40,40);
     box.shapeColor = rgb(255,255,255);
     box.velocityX= 5;
     box.velocityY=8;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges=createEdgeSprites();
    box.bounceOff(edges);
    box.bounceOff(block1);
    box.bounceOff(block2);
    box.bounceOff(block3);
    box.bounceOff(block4);


    //add condition to check if box touching surface and make it box
    if (box.isTouching(block1)){
        box.shapeColor="green";
        music.play();
    }

    if (box.isTouching(block2)){
        box.shapeColor="red";
        music.play();
    }

    if (box.isTouching(block3)){
        box.shapeColor="blue";
        music.stop();
        box.velocityX=0;
        box.velocityY=0;
    }

    if (box.isTouching(block4)){
        box.shapeColor="orange";
        music.play();
    }

    drawSprites();

}
