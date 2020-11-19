var canvas, backgroundImage;

var theChosenOne;
var hero;
var villian;
var simple1,simple2,simple3,simple4;



function preload(){
    backgroundImage=loadImage('images/background.jpg');
    hero=loadImage('images/Hero.jpg');
    villian=loadImage('images/notThehero.png');
    simple1=loadImage('images/miniGame.gif');
    simple2=loadImage('images/game.png');
    simple3=loadImage('images/shooting.png');
    simple4=loadImage('images/fast.gif');

}

function setup(){
    
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    theChosenOne = createSprite(displayWidth/2,displayHeight/2,50,50);
    m1= new Minions(random(100,2000),random(-100,900),random(8,15),random(-15,15),0,0,simple4)
    m2= new Minions(random(100,2000),random(-100,900),random(-15,15),0,0,simple4)
    m3= new Minions(random(100,2000),random(-100,900),random(-15,15),0,0,simple4)
    m4= new Minions(random(100,2000),random(-100,900),0,0,0,0,simple1)
    m5= new Minions(random(100,2000),random(-100,900),0,0,0,0,simple1)
    m6= new Minions(random(100,2000),random(-100,900),0,0,0,0,simple1)
    m7= new Minions(random(100,2000),random(-100,900),0,0,50,0,simple3)
    m8= new Minions(random(100,2000),random(-100,900),0,0,50,0,simple3)
    m9= new Minions(random(100,2000),random(-100,900),0,0,50,0,simple3)
    m10= new Minions(random(100,2000),random(-100,900),0,0,0,3,simple2)
    m11= new Minions(random(100,2000),random(-100,900),0,0,0,3,simple2)
    m12= new Minions(random(100,2000),random(-100,900),0,0,0,3,simple2)

}

function draw(){
    theChosenOne.shapeColor = "blue"
    background(backgroundImage)
    if(keyDown("Up"))
    {
        theChosenOne.y= theChosenOne.y - 5;
        
    }
    if(keyDown("down")){
        theChosenOne.y= theChosenOne.y + 5;

    }
    if(keyDown("left")){
        theChosenOne.x = theChosenOne.x -5;


    }
    if(keyDown("right")){
        theChosenOne.x = theChosenOne.x + 5;
        }

        m1.display()
        m2.display()
        m3.display()
        drawSprites()
}
