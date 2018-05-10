var img, img1, img2, img3, img4, img5, img6, img7, img8, img9;
var x = 0;
var y = 0;
var s=0;

function preload() {
  img = loadImage("Vincent_van_Gogh_The_Cafe_Terrace_at_Night.jpg");
  img1 = loadImage("foot1.jpg");
  img2 = loadImage("foot2.jpg");
  img3 = loadImage("foot3.jpg");
  img4 = loadImage("foot4.jpg");
  img5 = loadImage("foot5.jpg");
  img6 = loadImage("foot6.jpg");
  img7 = loadImage("foot7.jpg");
  img8 = loadImage("foot8.jpg");
  img9 = loadImage("foot9.jpg");
}

function setup() {
  createCanvas(1362,864);
  background(0);
}

function draw() {
  if(s==0) image(img,0,0);
  else if(s==1) image(img1,0,0,681,863);
  else if(s==2) image(img2,0,0,681,863);
  else if(s==3) image(img3,0,0,681,863);
  else if(s==4) image(img4,0,0,681,863);
  else if(s==5) image(img5,0,0,681,863);
  else if(s==6) image(img6,0,0,681,863);
  else if(s==7) image(img7,0,0,681,863);
  else if(s==8) image(img8,0,0,681,863);
  else if(s==9) image(img9,0,0,681,863);
  
  image(img,681,0);
}



function mouseClicked() {
  s+=1;
  if(s==10) s=0;
}