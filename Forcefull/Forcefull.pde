Mover[] movers = new Mover[3];
Object object;
Liquid liquid;
float g = 1;
int attractionDistance = 30;

void setup() {
  size(1000, 670);

  for (int i = 0; i < movers.length; i++) {
    movers[i] = new Mover();
  }
  object = new Object();
  liquid = new Liquid(width/2, height/2, 100, 100, 0.1);
}

void draw() {
  background(225);

  liquid.display();


  for ( int i = 0; i < movers.length; i++) {
    
       println("mover+", movers[i].position.y);
         println("objet+", object.position.y);
    
   if (movers[i].position.y == object.position.y){
   }


    if (liquid.contains(movers[i])) {
      PVector dragForce = liquid.drag(movers[i]);
      movers[i].applyForce(dragForce);

      //PVector d = PVector.add(movers[i].position, object.position);
    }
    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();

    //PVector force = movers[i].attract(object);
    //object.applyForce(force);

    object.update();
    object.display();
    object.checkEdges();
  }
}