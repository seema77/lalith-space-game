var bkImg,space;

function preload(){
bkImg=loadImage("assets/bg.jpg");
spaceImg=loadAnimation("assets/i1.png","assets/i2.png","assets/i3.png","assets/i4.png","assets/i5.png","assets/i6.png","assets/i7.png")
}

function setup(){
createCanvas(1360,600);
space=createSprite(660,530,20,20);
space.addAnimation("space",spaceImg)
space.scale=0.3
}

function draw(){
background(bkImg);

drawSprites()
}