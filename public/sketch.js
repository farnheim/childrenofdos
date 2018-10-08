//set global vars
let images = [];
let frame = 0;

//preload images
function preload(){
  images[0] = loadImage("img/cod0.png");
	images[1] = loadImage("img/cod1.png");
	images[2] = loadImage("img/cod2.png");
	images[3] = loadImage("img/cod3.png");
	images[4] = loadImage("img/cod4.png");
	images[5] = loadImage("img/cod5.png");
	images[6] = loadImage("img/cod6.png");
	images[7] = loadImage("img/cod7.png");
	images[8] = loadImage("img/cod8.png");
	images[9] = loadImage("img/cod9.png");
	images[10] = loadImage("img/cod10.png");
	images[11] = loadImage("img/cod11.png");
	images[12] = loadImage("img/cod12.png");
}

//page setup
function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(5);
	noSmooth();
	imageMode(CENTER);
}

//show content
function draw() {
	frame = frame + 1;
  if (frame > 12) {
  	frame = 0;
  }
  image(images[frame], windowWidth/2, windowHeight/2);
}
