//
/////// Rando Video
//
// See where the most predominant tones of red, green and blue are in the decor,
// and which colorful pattern it generates.
//
/////// Marie-Eve Cousineau


// Importing libraries
import processing.video.*;
import java.util.Random;

// Creating our elements
Dot redDot;
Dot blueDot;
Dot greenDot;
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
}

void draw() {

  // We read the video without displaying it
  if (video.available()) {
    video.read();
  }

  //loadPixels();

  //// Here we create the 3D Perlin noise  
  //float xoff = 0.0;

  //for (int x = 0; x < width; x++) {
  //  xoff += increment;
  //  float yoff = 0.0;
  //  for (int y = 0; y < height; y++) {
  //    yoff += increment;

  //    float bright = noise(xoff, yoff, zoff)*300;
  //    pixels[x+y*width] = color(bright, bright, bright);
  //  }
  //}
  //updatePixels();

  zoff += zincrement; 

  float record = 2000;
  float redDotX = 0;
  float redDotY = 0;
  float blueDotX = 0;
  float blueDotY = 0;
  float greenDotX = 0;
  float greenDotY = 0;

  // Here we find the reddest pixel in the image
  for ( int x = 1; x < video.width; x++ ) {
    for ( int y = 0; y < video.height; y++ ) {

      int loc = x + y * width;
      color pixelColor = video.pixels[loc];
      float amount = dist(255, 0, 0, red(pixelColor), green(pixelColor), blue(pixelColor));
      if (amount < record) {
        record = amount;
        redDotX = x;
        redDotY = y;
      }
    }
  }
  
  // The bluest pixel
  for ( int x = 1; x < video.width; x++ ) {
    for ( int y = 0; y < video.height; y++ ) {

      int loc = x + y * width;
      color pixelColor = video.pixels[loc];
      float amount = dist(0, 0, 255, red(pixelColor), green(pixelColor), blue(pixelColor));
      if (amount < record) {
        record = amount;
        blueDotX = x;
        blueDotY = y;
      }
    }
  }
  
    // The greenest pixel
  for ( int x = 1; x < video.width; x++ ) {
    for ( int y = 0; y < video.height; y++ ) {

      int loc = x + y * width;
      color pixelColor = video.pixels[loc];
      float amount = dist(0, 255, 0, red(pixelColor), green(pixelColor), blue(pixelColor));
      if (amount < record) {
        record = amount;
        greenDotX = x;
        greenDotY = y;
      }
    }
  }

  // We then create our dots according to their color 
  redDot = new Dot(redDotX, redDotY, (color(255, 0, 0)));
  blueDot = new Dot(blueDotX, blueDotY, (color(0, 0, 255)));
  greenDot = new Dot(greenDotX, greenDotY, (color(0, 255, 0)));

  // Calling Dot's functions
  redDot.step();
  redDot.display();
  blueDot.step();
  blueDot.display();
  greenDot.display();
  greenDot.step();
}