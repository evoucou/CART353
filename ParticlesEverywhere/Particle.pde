class Particle {
  PVector location;
  PVector velocity;
  PVector acceleration;

  int lifespan = 255;

  float topspeed = 3;

  float angle = 0;
  float aVelocity = 0;
  float aAcceleration = 0;

  // Decides wether fish appear from left side or right side of screen
  float leftOrRight() { 
    float value = random(0, 1);
    float Xpos;

    if (value < 0.5) {
      Xpos = 0;
    } else {
      Xpos = width;
    }
    return Xpos;
  }


  Particle() {
    location = new PVector(leftOrRight(), random(0, height));
    velocity = PVector.random2D();
    acceleration = new PVector(random(0, 0.05), random(0, 0.05));
  }

  void update() {

    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);

    this.acceleration.mult(0);

    lifespan -= 0.5;
  }

  boolean gone() {
    if (lifespan == 0) {
      return true;
    } else {
      return false;
    }
  }

  void display() {
    float angle = velocity.heading();

    noStroke();
    fill(175, lifespan);
    pushMatrix();
    rectMode(CENTER);
    translate(location.x, location.y);
    rotate(angle);
    rect(0, 0, 14, 4);
    popMatrix();
  }
}