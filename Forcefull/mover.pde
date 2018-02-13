class Mover {

  PVector position;
  PVector velocity;
  PVector acceleration;
  float mass;
  float mWidth;
  float mHeight;
  int topspeed = 10;

  Mover(float m, float x, float y) {
    mass = m;
    position = new PVector(x, y);
    velocity = new PVector(0, 0);
    acceleration = new PVector(0, 0);
    mWidth = m*16;
    mHeight = m*16;
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
    
    checkMouse();
  }
  
    void checkMouse() {
    
    PVector mouse = new PVector(mouseX, mouseY);
    PVector dir = PVector.sub(mouse, position);

    dir.normalize();
    dir.mult(0.5);
    acceleration = dir;

    velocity.add(acceleration);
    velocity.limit(topspeed);
    position.add(velocity);
  }

  void display() {
    fill(0, 127);
    ellipse(position.x, position.y, mWidth, mHeight);
  }
}