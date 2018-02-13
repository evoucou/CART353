class Attractor {

  float x;
  float y;
  PVector mousePos = new PVector(x, y);

  Attractor(float _x, float _y) {
    x = _x;
    y = _y;
  }

  void attract() {

    for ( int i = 0; i < movers.length; i++) { 
      PVector mousePos = new PVector(x, y);
      PVector dir = PVector.sub(mousePos, movers[i].position);
      dir.normalize();
      dir.mult(0.5);
      movers[i].acceleration = dir;

      movers[i].velocity.add(movers[i].acceleration);
      movers[i].velocity.limit(topspeed);
      movers[i].position.add(movers[i].velocity);
    }
  }

  void display() {
    stroke(0);
    fill(50);
    ellipse(x, y, 20, 20);
  }
}