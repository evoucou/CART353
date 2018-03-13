Particle p;

void setup() {
size(500,500);
p = new Particle();
}

void draw() {
background(255);
p.display();
p.update();
//float m = p.mass;
//PVector gravity = new PVector(0,0.1*m);
//p.applyForce(gravity);
}