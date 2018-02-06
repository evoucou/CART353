//
/////// Rando Video
//
//
//
/////// Marie-Eve Cousineau

import processing.video.*;
import java.util.Random;

Walker w;

//int wPosX;
//int wPosY;

//Capture video;


void setup() {
  size(640, 480);
  background(255);
  //video = new Capture(this, 640, 480, 30);
  //video.start();

  w = new Walker(width/2, height/2);
}

void draw() {

  fill(255, 3);
  rect(0,0,width,height);
  
  w.step();
  w.display();

  //if (video.available()) {
    //video.read();
  //}

  //float redX = 0;
  //float redY = 0;
  //float record = 1000;

  //for ( int x = 1; x < video.width; x++ ) {
  //  for ( int y = 0; y < video.height; y++ ) {

  //    int loc = x + y * width;
  //    color pixelColor = video.pixels[loc];
  //    float amount = dist(255, 0, 0, red(pixelColor), green(pixelColor), blue(pixelColor));
  //    if (amount < record) {
  //      record = amount;
  //      redX = x;
  //      redY = y;
  //    }
  //  }
  //}

  //fill(255, 10);
  //image(video, 0, 0);
  //ellipse(redX, redY, 16, 16);

  //w = new Walker(redX, redY);
}