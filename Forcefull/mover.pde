class Mover {
  
  PVector position;
  PVector velocity;
  PVector acceleration;
  float mass;
  float mWidth;
  float mHeight;
  
  Mover(float m, float x, float y) {
  mass = m;
  position = new PVector(x,y);
  velocity = new PVector(0,0);
  acceleration = new PVector(0,0);
  mWidth = m*16;
  mHeight = m*16; 
  }
  
  
  
  
  
  
}