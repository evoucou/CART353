class Particle {
  PVector location;
  PVector velocity;
  PVector acceleration;
  
  float mass = 10;

  Particle(PVector l) {
    location = l.copy();
    acceleration = new PVector(0, 0);
    velocity = new PVector(0, 0);
  }


  void applyForce(PVector force) {
    PVector f = PVector.div(force,mass);
    acceleration.add(f);
  }

  void update() {
    velocity.add(acceleration);
    location.add(velocity);
    acceleration.mult(0);
  }

  void display() {
    stroke(0);
    fill(175);
    ellipse(location.x, location.y, 10, 10);
  }

  void run() {
    this.update();
    this.display();
  }
}