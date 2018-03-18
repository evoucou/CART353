class ParticleSystem { //<>//

  ArrayList<Particle> particles;

  ParticleSystem(int num) {
    particles = new ArrayList<Particle>();
    for (int i = 0; i < num; i++) {
    particles.add(new Particle());
    }
  }

  void addParticle() {
    particles.add(new Particle());
  }

  void run() {
    for (int i = particles.size()-1; i >= 0; i--) {
      Particle p = particles.get(i);
      p.display();
      p.update();
      if (p.lifespan == 0) {
        particles.remove(i);
      }
    }
  }

  //boolean dead() {
  //  if (particles.isEmpty()) {
  //    return true;
  //  } else {
  //    return false;
  //  }
  //}
}