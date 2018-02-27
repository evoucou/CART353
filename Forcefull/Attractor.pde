class Attractor {

  PVector position;
  PVector velocity;
  PVector acceleration;
  float mWidth;
  float mHeight;
  float topspeed = 5;
  float mass = 3;
  

  Attractor() {
    position = new PVector(random(width), random(height));
    velocity = new PVector(0, 0);
    acceleration = new PVector(0, 0);
    mWidth = mass*10;
    mHeight = mass*10;
  }

  void applyForce(PVector force) {
    PVector f = PVector.div(force, mass);
    acceleration.add(f);
  }

  void checkEdges() {
    if (position.y > height) {
      velocity.y *= -1;
      position.y = height;
    }
  }

  void update() {
    velocity.add(acceleration);
    position.add(velocity);
    acceleration.mult(0);

    PVector mousePos = new PVector(mouseX, mouseY);
    PVector dir = PVector.sub(mousePos, this.position);
    dir.normalize();
    dir.mult(0.2);
    this.acceleration = dir;

    this.velocity.add(this.acceleration);
    this.velocity.limit(topspeed);
    this.position.add(this.velocity);
  }

  void display() {
    fill(0, 127);
    ellipse(position.x, position.y, mWidth, mHeight);
  }
}