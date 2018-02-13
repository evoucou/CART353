Mover[] movers = new Mover[10];


void setup() {
  size(640, 360);

  for (int i = 0; i < movers.length; i++) {
    movers[i] = new Mover(random(0.1, 4), 2*16, 0);
  }
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



    PVector gravity = new PVector(0, 0.1);
    movers[i].applyForce(gravity);

    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }
}