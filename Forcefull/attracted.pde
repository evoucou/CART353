class Attracted {
  PVector position;
  PVector velocity;
  PVector acceleration;
  
  float x;
  float y;
  float mWidth;
  float mHeight;
  float topspeed=7;
  float mass=3;

  Attracted() {
    position = new PVector(x, y);
    velocity = new PVector(0, 0);
    acceleration = new PVector(0, 0);
    mWidth = mass*10;
    mHeight = mass*10;
  }
  
    void applyForce(PVector force) {
    PVector f = PVector.div(force,mass);
    acceleration.add(f);
  }
  
    void update() {
    velocity.add(acceleration);
    position.add(velocity);
    acceleration.mult(0);
  }
  
    void display() {
    stroke(0);
    fill(175,200);
    ellipse(position.x,position.y,mass*2,mass*2);
  }
  
    PVector repel(Attracted a) {
    PVector force = PVector.sub(position,a.position);             
    float distance = force.mag();                                 
    distance = constrain(distance,1.0,10000.0);                            
    force.normalize();                                           

    float strength = (g * mass * m.mass) / (distance * distance); 
    force.mult(-1*strength);                                      
    return force;
  }
  
  //  void update() {
  //  velocity.add(acceleration);
  //  position.add(velocity);
  //  acceleration.mult(0);

  //  PVector mousePos = new PVector(.position, mouseY);
  //  PVector dir = PVector.sub(mousePos, this.position);
  //  dir.normalize();
  //  dir.mult(0.2);
  //  this.acceleration = dir;

  //  this.velocity.add(this.acceleration);
  //  this.velocity.limit(topspeed);
  //  this.position.add(this.velocity);
  //}


//  void display() {
//    stroke(0);
//    fill(50);
//    ellipse(x, y, 20, 20);
//  }
}