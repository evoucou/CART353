Mover[] movers = new Mover[3];
Object object;
Liquid liquid;
float g = 1;

void setup() {
  size(1000, 670);

  for (int i = 0; i < movers.length; i++) {
    movers[i] = new Mover();
  }
  object = new Object();
  liquid = new Liquid(0, 100, 100, 100, 0.1);
}

void draw() {
  background(225);

  liquid.display();

  for ( int i = 0; i < movers.length; i++) {

    if (liquid.contains(movers[i])) {
      PVector dragForce = liquid.drag(movers[i]);
      movers[i].applyForce(dragForce);

      //  PVector gravity = new PVector(0, 0.1*movers[i].mass);
      //  movers[i].applyForce(gravit// y);
    }
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();

    PVector force = movers[i].attract(object);
    object.applyForce(force);
  }
  object.update();
  object.display();
}