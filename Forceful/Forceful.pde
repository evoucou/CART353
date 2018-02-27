Mover[] movers = new Mover[4];
Object[] objects= new Object[4];
Liquid liquid1;
Liquid liquid2;
boolean attraction;

PImage comet;
PImage star;
PImage background;

void setup() {
  size(500, 500);

  for (int i = 0; i < objects.length; i++) {
    movers[i] = new Mover();
    objects[i] = new Object();
  }


  liquid1 = new Liquid(65, 45, 100, 100, 0.1);
  liquid2 = new Liquid(300, 340, 100, 100, 0.3);
}

void draw() {
  background = loadImage("data/space.gif");
  background(background);

  liquid1.display();
   liquid2.display();

  for ( int i = 0; i < objects.length; i++) {
    attraction = false;

    if (movers[i].position.y < objects[i].position.y+200 && movers[i].position.y > objects[i].position.y-200) {
      if (movers[i].position.x < objects[i].position.x+200 && movers[i].position.x > objects[i].position.x-200 ) {
        attraction = true;
        
      }
    }

    if (liquid1.contains(movers[i])) {
      PVector dragForce = liquid1.drag(movers[i]);
      movers[i].applyForce(dragForce);
    }
    
        if (liquid2.contains(movers[i])) {
      PVector dragForce = liquid2.drag(movers[i]);
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