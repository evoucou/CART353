class Particle {
  PVector location;
  PVector velocity;
  PVector acceleration;
 
  Particle(PVector l) {
    location = l.get();
    acceleration = new PVector();
    velocity = new PVector();
  }
 
 void run() {
 this.update();
 this.display();
 }
 
  void update() {
    velocity.add(acceleration);
    location.add(velocity);
  }
 
  void display() {
    stroke(0);
    fill(175);
    ellipse(location.x,location.y,8,8);
  }
}