//set global vars
let images = [];
let frame = 0;

//preload images
function preload(){
  images[0] = loadImage('img/cod0.png');
}

//page setup
function setup() {
	createCanvas(windowWidth, windowHeight);
	frameRate(15);
}

//show content
function draw() {
	frame = frame + 1;
  if (frame > 1) {
  	frame = 0;
  }
  image(images[frame], 0, 0, 384, 272);
}
