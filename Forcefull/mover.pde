class Mover {

  PVector position;
  PVector velocity;
  PVector acceleration;
  float mWidth;
  float mHeight;
  float topspeed = 5;
  float mass = 3;
  

 Mover() {
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
  
  //  PVector attract(Object o) {
  //  PVector force = PVector.sub(position,o.position); 
  //  float d = force.mag();
  //  d = constrain(d, 0.50, 20);
  //  force.normalize();
  //  float strenght = (g * mass * o.mass) / (d * d);
  //  force.mult(strenght);                              
  //  return force;
  //}

  void update() {
    velocity.add(acceleration);
    position.add(velocity);
    acceleration.mult(0);

    PVector mousePos = new PVector(mouseX, mouseY);
    PVector dir = PVector.sub(mousePos, this.position);
    dir.normalize();
    dir.mult(0.3);
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