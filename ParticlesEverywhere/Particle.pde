class Particle {
  PVector location;
  PVector velocity;
  PVector acceleration;

  float mWidth;
  float mHeight;
  float topspeed = 2;
  float mass = 2;

  float xoff, yoff;

  float r = 15;

  Particle() {
    location = new PVector(random(width), random(height));
    velocity = new PVector(0, 0);
    acceleration = new PVector(0, 0);
    mWidth = mass*10;
    mHeight = mass*10;
  }

  void update() {
    velocity.add(acceleration);
    location.add(velocity);
    acceleration.mult(0);

    PVector mousePos = new PVector(mouseX, mouseY);
    PVector dir = PVector.sub(mousePos, this.location);
    dir.normalize();
    dir.mult(0.3);
    this.acceleration = dir;

    this.velocity.add(this.acceleration);
    this.velocity.limit(topspeed);
    this.location.add(this.velocity);
  }

  void applyForce(PVector force) {
    PVector f = PVector.div(force, mass);
    acceleration.add(f);
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