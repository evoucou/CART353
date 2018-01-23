PImage puppy;
PImage kitty;
float x, y;
float x_offscreen, y_offscreen;


void setup() {
  size(560, 400);
  puppy = loadImage("pup.png");
  kitty = loadImage("kitty.png");
  x = width/2;
  y = height/2;
  x_offscreen = -100;
  y_offscreen = -100;
  
}

void draw() {
  
    background(102, 204, 255);
    //translate(x,y);
    imageMode(CENTER);
    image(puppy, x, y);
    puppy.resize(0, 120);
    image(kitty, x_offscreen, y_offscreen);
    kitty.resize(0, 110);
   
    
}