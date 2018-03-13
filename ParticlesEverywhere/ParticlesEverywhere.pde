Particle p;

void setup() {
size(500,500);
p = new Particle(new PVector(width/2,height/2));
}

void draw() {
background(255);
p.run();
float m = p.mass;
PVector gravity = new PVector(0,0.1*m);
p.applyForce(gravity);
}