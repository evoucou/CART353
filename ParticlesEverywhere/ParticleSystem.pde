class ParticleSystem {
  
  ArrayList<Particle> particles;
  
  ParticleSystem() {
    particles = new ArrayList<Particle>();
  }

  void addParticle() {
    particles.add(new Particle());
  }

  void run() {
    for (int i = particles.size()-1; i >= 0; i--) {
      Particle p = particles.get(i);
      p.display();
      p.update(); //<>//
    }
  }
}