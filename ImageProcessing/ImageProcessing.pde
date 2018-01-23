
// Marie-Eve Cousineau
// Image Processing
//
// This little game lets you "decorate" your room by changing its color (hover with you mouse)
// and by chosing your own little pet (just click on the screen). Also, if you press
// x, you get more color options.


Pet pet;
PImage room;

void setup() {
  size(760, 500);
  room = loadImage("room.jpg");

  pet = new Pet("pup.png", "kitty.png", width/2, height/2);
}

void draw() {

  background(room);

  // Loading the pixels for our background image
  loadPixels();
  room.loadPixels();


  // The code for the change of blue tones
  for (int y = 0; y < room.height; y++) {
    for (int x = 0; x < room.width; x++) {
      // Calculating the 1D pixel location
      int loc = x + y * width; 
      // Getting the color values
      float r = red (room.pixels[loc]);
      float g = green (room.pixels[loc]);
      float b = blue (room.pixels[loc]);

      // Adjusting color tones with mouseX
      float adjustTones
        = map(mouseY, 0, width, 0, 8);
      b *= adjustTones;

      b = constrain(b, 0, 255);

      //Making the new color
      color mouseColor = color(r, g, b);
      pixels[loc] = mouseColor;
    }
  }

  // Calling our functions
  updatePixels();
  pet.move();
  pet.display();
}

void mousePressed() {
  pet.mousePressed();
}

void keyPressed() {
  if (key == 'x') {
    // The code more choice of colors
    for (int i = 0; i < room.pixels.length; i++) {
      room.pixels[i] += room.pixels[10]/10000;
    }
  }
}