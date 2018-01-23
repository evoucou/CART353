PImage sleeping;
PImage awake;
float x, y;
float rot;


void setup() {
  size(560, 300);
  sleeping = loadImage("sleeping.jpg");
  awake = loadImage("awake.jpg");
  x = 0;
  y = width/2;
  rot = 0;
  
}

void draw() {
  
    background(35);
    translate(x,y);
    rotate(rot);
    imageMode(CENTER);
    image(sleeping, 0, 0);
    
    x =+ 2.0;
    rot += 0.05;
    if (x > width)
    x = 0;
    
}