class Object {

  PVector position;
  PVector velocity;
  PVector acceleration;
  float mWidth;
  float mHeight;
  float mass = 10;
  float topspeed = 7;
  
  boolean attraction = false;

  Object() {
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

  void update() {  
    velocity.add(acceleration);
    position.add(velocity);
    acceleration.mult(0);

  }
  
  //void orbit() {
  //if (attraction == true) {
  //  PVector mousePos = new PVector(mouseX, mouseY);
  //  PVector dir = PVector.sub(mousePos, this.position);
  //  dir.normalize();
  //  dir.mult(0.2);
  //  this.acceleration = dir;

  //  this.velocity.add(this.acceleration);
  //  this.velocity.limit(topspeed);
  //  this.position.add(this.velocity);
  //}
  //}

  void display() {
    stroke(0);
    fill(175, 200);
    ellipse(position.x, position.y, mass*2, mass*2);
  }

  void checkEdges() {
    if (position.y > height) {
      velocity.y *= -1;
      position.y = height;
    }
  }
}