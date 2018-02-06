//
/////// Rando Video
//
// See where the most predominant tones of red are in the decor,
// and which pattern it generates. (You can move a red object around the screen to
// diversify the emplacement of the dots)
//
/////// Marie-Eve Cousineau


// Importing libraries
import processing.video.*;
import java.util.Random;

// Creating our elements
Dot dot;
Capture video;

// Variables
float increment = 0.01;
float zoff = 0.0;  
float zincrement = 0.02; 


void setup() {
  size(640, 480);
  background(255);
  frameRate(30);

  video = new Capture(this, 640, 480, 30);
  video.start();

  dot = new Dot(width/2, height/2);
}

void draw() {

  // We read the video without displaying it
  if (video.available()) {
    video.read();
  }

  loadPixels();

  // Here we create the 3D Perlin noise  
  float xoff = 0.0;

  for (int x = 0; x < width; x++) {
    xoff += increment;
    float yoff = 0.0;
    for (int y = 0; y < height; y++) {
      yoff += increment;

      float bright = noise(xoff, yoff, zoff)*300;
      pixels[x+y*width] = color(bright, bright, bright);
    }
  }
  updatePixels();

  zoff += zincrement; 

  float record = 1000;
  float dotX = 0;
  float dotY = 0;

  // Here we find the reddest pixel in the image
  for ( int x = 1; x < video.width; x++ ) {
    for ( int y = 0; y < video.height; y++ ) {

      int loc = x + y * width;
      color pixelColor = video.pixels[loc];
      float amount = dist(255, 0, 0, red(pixelColor), green(pixelColor), blue(pixelColor));
      if (amount < record) {
        record = amount;
        dotX = x;
        dotY = y;
      }
    }
  }

  // We then create a dot at this emplacement  
  dot = new Dot(dotX, dotY);

  // Calling Dot's functions
  dot.step();
  dot.display();
}