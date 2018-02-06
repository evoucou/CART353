class Dot {

  float x;
  float y;
  color dotColor;

  Dot(float _x, float _y, color _dotColor) {
    x = _x;
    y = _y;
    dotColor = _dotColor;
  }

// Generating the dot's path with the montecarlo method
  void step() {
    int multiplier = floor(random(1, 7));
    
    float stepsize = montecarlo() * multiplier;
    float stepx = random(-stepsize, stepsize);
    
    stepsize = montecarlo() * multiplier;
    float stepy = random(-stepsize, stepsize);

    x += stepx;
    y += stepy;
    
    // We make sure the dot doesn't go offscreen
    x = constrain(x, 0, width-1);
    y = constrain(y, 0, height-1);
  }

// Montecarlo method as shown in class
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
    fill(dotColor);
    ellipse(x, y, 6, 6);
  }
}