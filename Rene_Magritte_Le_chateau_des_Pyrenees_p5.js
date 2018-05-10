var img, img1, img2;
var y=0;

function preload() {
  img = loadImage("Le_chateau_des_Pyrenees.jpg");
  img1 = loadImage("Le_chateau_des_Pyrenees_background.jpg");
  img2 = loadImage("Le_chateau_des_Pyrenees_rock.png");
}

function setup() {
  createCanvas(896,707);
  background(255);
}

function draw() {
  image(img1,0,0);
  image(img2,-120,y);
  image(img,449,0);
}

function keyPressed() {
  if (key == ' ') y+=5;
}