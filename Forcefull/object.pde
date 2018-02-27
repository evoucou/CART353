class Object {
  PVector position;
  PVector velocity;
  PVector acceleration;
  
  float x;
  float y;
  float mWidth;
  float mHeight;
  float topspeed=7;
  float mass=10;

  Object() {
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
  
  //  PVector repel(Attractor a) {
  //  PVector force = PVector.sub(position,a.position);             
  //  float distance = force.mag();                                 
  //  distance = constrain(distance,1.0,10000.0);                            
  //  force.normalize();                                           

  //  float strength = (g * mass * a.mass) / (distance * distance); 
  //  force.mult(-1*strength);                                      
  //  return force;
  //}
}