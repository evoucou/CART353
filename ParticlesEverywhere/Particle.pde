class Particle {
  PVector location;
  PVector velocity;
  PVector acceleration;
  
  float topspeed = 5;

  float xoff, yoff;
  
  float r = 15;

  Particle() {
    location = new PVector(width/2,height/2);
    //acceleration = new PVector(0, 0);
    velocity = new PVector(0, 0);
    xoff = 1000;
    yoff = 0;
  }

  void update() {
    PVector mouse = new PVector(mouseX, mouseY);
    PVector dir = PVector.sub(mouse, location);
    dir.normalize();
    dir.mult(0.5);
    acceleration = dir;

    velocity.add(acceleration);
    velocity.limit(topspeed);
    location.add(velocity);
  }

  void display() {
    float angle = velocity.heading();

    stroke(0);
    fill(175);
    pushMatrix();
    rectMode(CENTER);
    translate(location.x, location.y);
    rotate(angle);
    rect(0, 0, 14, 4);
    popMatrix();
  }

}