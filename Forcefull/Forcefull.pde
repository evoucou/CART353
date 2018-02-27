Mover[] movers = new Mover[5];
Object[] objects= new Object[5];
Liquid liquid;
boolean attraction;

void setup() {
  size(1000, 670);

  for (int i = 0; i < movers.length; i++) {
    movers[i] = new Mover();;
    objects[i] = new Object();
  }


  liquid = new Liquid(width/2, height/2, 100, 100, 0.1);
}

void draw() {
  background(225);

  liquid.display();

  for ( int i = 0; i < movers.length; i++) {
    attraction = false;

    if (movers[i].position.y < objects[i].position.y+200 && movers[i].position.y > objects[i].position.y-200) {
      if (movers[i].position.x < objects[i].position.x+200 && movers[i].position.x > objects[i].position.x-200 ) {
        attraction = true;
        
      }
    }

    if (liquid.contains(movers[i])) {
      PVector dragForce = liquid.drag(movers[i]);
      movers[i].applyForce(dragForce);
    }

    if (attraction) {
      PVector mousePos = new PVector(mouseX, mouseY);
      PVector dir = PVector.sub(mousePos, objects[i].position);
      dir.normalize();
      dir.mult(0.2);
      objects[i].acceleration = dir;

      objects[i].velocity.add(objects[i].acceleration);
      objects[i].velocity.limit(5);
      objects[i].position.add(objects[i].velocity);
    }

    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();

    objects[i].update();
    objects[i].display();
    objects[i].checkEdges();
  }
}