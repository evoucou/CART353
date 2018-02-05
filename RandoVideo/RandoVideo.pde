import processing.video.*;
Random generator;

float t = 0;

Capture video;

void setup() {
  size(640, 480); 
  video = new Capture(this, 640, 480, 30);
  video.start();

  generator = new Random();
}

void draw() {

  if (video.available()) {
    video.read();
  }
  image(video, 0, 0);

  loadPixels();
  for ( int x = 1; x < video.width; x++ ) {
    for ( int y = 0; y < video.height; y++ ) {
      float threshold = 10;
      int loc = x + y*video.width;
      color pix = video.pixels[loc];
      int leftLoc = (x-1) + y*video.width;
      color leftPix = video.pixels[leftLoc];
      float diff = abs(brightness(pix) -  brightness(leftPix));
      if ( diff > threshold ) {
        pixels[loc] = color(255);
      } else {
        pixels[loc] = color(0);
      }
    }
  }
  updatePixels();

  float num = (float) generator.nextGaussian();
  float sd = 60;
  float mean = 320;

  float x = sd * num + mean;

  noStroke();
  fill(255, 10);
  ellipse(x, 180, 16, 16);

  float n = noise(t);
  t += 0.01;
}