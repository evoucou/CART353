//
/////// Rando Video
//
// See where the most predominant tones of red are in the decor,
// and which pattern it generates. (You can move a red object around the screen to
// diversify the emplacement of the dots)
//
/////// Marie-Eve Cousineau

import processing.video.*;
import java.util.Random;

Walker w;

Capture video;


void setup() {
  size(640, 480);
  background(255);
  video = new Capture(this, 640, 480, 30);
  video.start();

  w = new Walker(width/2, height/2);
}

void draw() {
  if (video.available()) {
    video.read();
  }

  float record = 1000;
  float walkerX = 0;
  float walkerY = 0;

  for ( int x = 1; x < video.width; x++ ) {
    for ( int y = 0; y < video.height; y++ ) {

      int loc = x + y * width;
      color pixelColor = video.pixels[loc];
      float amount = dist(255, 0, 0, red(pixelColor), green(pixelColor), blue(pixelColor));
      if (amount < record) {
        record = amount;
        walkerX = x;
        walkerY = y;
      }
    }
  }

  w = new Walker(walkerX, walkerY);

  w.step();
  w.display();
}