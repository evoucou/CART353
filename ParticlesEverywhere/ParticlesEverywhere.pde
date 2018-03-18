ParticleSystem ps;

void setup() {
  size(500, 500);
  ps = new ParticleSystem(1);
}

void draw() {
  background(255);
  ps.run();
  ps.addParticle();
  //float m = p.mass;
  //PVector gravity = new PVector(0,0.1*m);
}