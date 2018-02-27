Attractor[] movers = new Attractor[3];

void setup() {
  size(1000, 670);

  for (int i = 0; i < movers.length; i++) {
    movers[i] = new Attractor();
  }
  //mouse = new Attractor(mouseX, mouseY);
}

void draw() {
  background(225);
  for ( int i = 0; i < movers.length; i++) {


    //float ldist = movers[i].position.x - movers[i].mWidth/2;

    //if (ldist <= 70) {

    //  ldist = constrain(ldist, 0, 70);
    //  float lForce = map(ldist, 0, 70, 1, 0.2);
    //  PVector l_edgeForce = new PVector(lForce, 0);
    //  movers[i].applyForce(l_edgeForce);
    //}

    //float rdist = width - (movers[i].position.x + movers[i].mWidth/2);

    //if (rdist <= 70) {
    //  rdist = constrain(rdist, 0, 70);
    //  float rForce = map(rdist, 0, 70, 1, 0.2);
    //  PVector r_edgeForce = new PVector(-rForce, 0);
    //  movers[i].applyForce(r_edgeForce);
    //}


    PVector gravity = new PVector(0, 0.4);
    movers[i].applyForce(gravity);

    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }
 //mouse.attract();
 //mouse.display();
}