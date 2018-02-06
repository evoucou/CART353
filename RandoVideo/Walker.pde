class Walker {

  float x;
  float y;

  Walker(float _x, float _y) {
    x = _x;
    y = _y;
  }

  void step() {
    int multiplier = floor(random(1, 10));
    
    float stepsize = montecarlo() * multiplier;
    float stepx = random(-stepsize, stepsize);
    
    stepsize = montecarlo() * multiplier;
    float stepy = random(-stepsize, stepsize);

    x += stepx;
    y += stepy;
    
    x = constrain(x, 0, width-1);
    y = constrain(y, 0, height-1);
  }

  float montecarlo() {
    while (true) {
      float r1 = random(1);
      float probability = r1;
      float r2 = random(1);

      if (r2 < probability) {
        return r1;
      }
    }
  }

  void display() {
    noStroke();
    fill(255,0,0);
    ellipse(x, y, 10, 10);
  }
}