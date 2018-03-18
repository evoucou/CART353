class Particle {
  PVector location;
  PVector velocity;
  PVector acceleration;

  float topspeed = 5;

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
    location = new PVector(leftOrRight(), random(height));
    velocity = new PVector(0, 0);
    acceleration = new PVector(0, 0);
   
  }

  void applyForce(PVector f) {
    acceleration.add(f);
  }


  void update() {


    //PVector mousePos = new PVector(mouseX, mouseY);
    //PVector dir = PVector.sub(mousePos, this.location);
    //dir.normalize();
    //dir.mult(0.3);
    //this.acceleration = dir;

    this.velocity.add(this.acceleration);
    this.velocity.limit(topspeed);
    this.location.add(this.velocity);

    //if (this.location.x == mousePos.x) {
    //  lifespan = 0;
    //  println(lifespan);
    //}
  }

  //boolean gone() {
  //  if (lifespan < 0) {
  //    return true;
  //  } else {
  //    return false;
  //  }
  //}

  void display() {
    float angle = velocity.heading();

    noStroke();
    fill(175);
    pushMatrix();
    rectMode(CENTER);
    translate(location.x, location.y);
    rotate(angle);
    rect(0, 0, 14, 4);
    popMatrix();
  }
}