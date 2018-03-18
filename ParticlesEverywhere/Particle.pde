class Particle {
  PVector location;
  PVector velocity;
  PVector acceleration;

  float topspeed = 5;
  float mass = 2;

  int lifespan = 255;

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
    location = new PVector(random(leftOrRight()), random(height));
    velocity = new PVector(0, 0);
    acceleration = new PVector(0, 0);
  }

  void update() {
    velocity.add(acceleration);
    location.add(velocity);

    PVector mousePos = new PVector(mouseX, mouseY);
    PVector dir = PVector.sub(mousePos, this.location);
    dir.normalize();
    dir.mult(0.2);
    this.acceleration = dir.div(mass);

    this.velocity.add(this.acceleration);
    this.velocity.limit(topspeed);
    this.location.add(this.velocity);

    if (dir.x == 0 && dir.y == 0) {
      lifespan -= 15;
      println(lifespan);
    }
  }


  void display() {
    float angle = velocity.heading();

    stroke(0);
    fill(175, lifespan);
    pushMatrix();
    rectMode(CENTER);
    translate(location.x, location.y);
    rotate(angle);
    rect(0, 0, 14, 4);
    popMatrix();
  }

  boolean gone() {
    if (lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }
}