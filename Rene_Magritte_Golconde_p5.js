var img;

function preload() {
  img = loadImage("Rene_Magritte_Golconde.jpg");
}

function setup() {
  createCanvas(1200,424);
  background(255);
  stroke(150);
  
  fill(155,176,203);
  rect(0,0,600,424);
  
  fill(158,140,128);
  rect(0,274,50,150);
  rect(50,254,140,170);
  rect(190,294,70,140);
  rect(260,254,240,170);
  
  fill(79,38,42);
  quad(0,234,60,234,50,284,0,284);
  quad(60,224,195,224,190,274,50,274);
  quad(185,294,195,254,264,254,265,294);
  quad(260,284,263,244,500,244,505,284);
  
  fill(187,176,154);
  rect(500,0,101,424);
  
  fill(70,79,86);
  quad(199,251,199,230,195,225,191,270);
  
  fill(180,172,151);
  stroke(100);
  rect(10,310,20,50);
  rect(10,390,20,50);
  
  rect(65,300,20,50);
  rect(110,300,20,50);
  rect(155,300,20,50);
  rect(65,380,20,50);
  rect(110,380,20,50);
  rect(155,380,20,50);
  
  rect(200,320,20,50);
  rect(235,320,20,50);
  rect(200,400,20,50);
  rect(235,400,20,50);
  
  rect(280,310,20,50);
  rect(325,310,20,50);
  rect(370,310,20,50);
  rect(415,310,20,50);
  rect(460,310,20,50);
  rect(280,390,20,50);
  rect(325,390,20,50);
  rect(370,390,20,50);
  rect(415,390,20,50);
  rect(460,390,20,50);
}

function draw() {
  image(img,601,0);
}

function mousePressed() {
  noStroke();
  if(mouseButton == LEFT) {
  fill(250,230,200);
  ellipse(mouseX, mouseY-28, 12, 16);
  fill(0);
  rect(mouseX-6, mouseY-40, 12, 4);
  rect(mouseX-10, mouseY-36, 20, 4);
  rect(mouseX-16,mouseY-20,34,64,5);
  }
  
  if(mouseButton == RIGHT) {
  fill(250,230,200);
  ellipse(mouseX,mouseY-7,3,4);
  fill(0);
  rect(mouseX-1.5,mouseY-10,3,1);
  rect(mouseX-2.5,mouseY-9,5,1);
  rect(mouseX-4,mouseY-5,8.5,16,3);
  }
}