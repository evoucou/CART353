class Planet {

  PVector position;
  PVector velocity;
  PVector acceleration;

  float mWidth;
  float mHeight;
  float mass = 10;
  float topspeed = 2;
  PImage image;


  Planet(PImage _image) {
    position = new PVector(random(width), random(height));
    velocity = new PVector(0, 0);
    acceleration = new PVector(0, 0);
    mWidth = mass*5;
    mHeight = mass*5;

    image = _image;
  }


  // We generate the force on the planet. Its movement once it has been attracted
  // is determined
  void applyForce(PVector force) {
    PVector f = PVector.div(force, mass);
    acceleration.add(f);
  }

  // Same as the aliens
  void orbit() {
    PVector mousePos = new PVector(mouseX, mouseY);
    PVector dir = PVector.sub(mousePos, this.position);
    dir.normalize();
    dir.mult(0.2);
    this.acceleration = dir;

    this.velocity.add(this.acceleration);
    this.velocity.limit(5);
    this.position.add(this.velocity);
  }

  void update() {  
    velocity.add(acceleration);
    position.add(velocity);
    acceleration.mult(0);
  }

  void display() {
  }

  void checkEdges() {
    if (position.y > height) {
      velocity.y *= -1;
      position.y = height;
    }
  }
}