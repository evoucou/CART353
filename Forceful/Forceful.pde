// FORCEFUL
// You are a troop of aliens who want to capture planets.
//
// Move them around with the mouse and collect planets.
// Avoid black holes, as it increases the gravitational force.
// Also, if you move too fast, you might lose some planets, be careful!
//
// Unfortunately, this assignment did not turn the way it was supposed to. I
// had a very hard time with it. This is as closest as I could get to the katamari damacy game...


Alien[] aliens = new Alien[4];
Planet[] planets = new Planet[4];
Hole hole1;
Hole hole2;

boolean attraction;

PImage planetsImg[] = new PImage[4];
PImage star;
PImage background;

void setup() {
  size(1000, 563);

  for (int i = 0; i < planets.length; i++) {
    int n = floor(random(1, 4));

    // We load our array of images (3 planets)
    planetsImg[1] = loadImage("data/planet1.png");
    planetsImg[2] = loadImage("data/planet2.png");
    planetsImg[3] = loadImage("data/planet3.png");

    // We create our elements
    aliens[i] = new Alien(loadImage("data/alien.png"));
    planets[i] = new Planet(planetsImg[n]);
  }


  hole1 = new Hole(random(40, width-40), random(40, height-40), 100, 100, 0.1, loadImage("data/blackhole.png"));
  hole2 = new Hole(random(40, width-40), random(40, height-40), 100, 100, 0.3, loadImage("data/blackhole.png"));
}

void draw() {

  background = loadImage("data/space.jpg");
  background(background);

  imageMode(CENTER);
  image(hole1.image, hole1.x, hole1.y);
  image(hole2.image, hole2.x, hole2.y);

  hole1.display();
  hole2.display();

  for ( int i = 0; i < aliens.length; i++) {
    image(planets[i].image, planets[i].position.x, planets[i].position.y);
    image(aliens[i].image, aliens[i].position.x, aliens[i].position.y);

    // The attraction only exists when the aliens are close to a planet
    attraction = false;

    // So if the aliens come close within reach of one, then the planet is attracted (a radius of around 200)
    if (aliens[i].position.y < planets[i].position.y+150 && aliens[i].position.y > planets[i].position.y-150) {
      if (aliens[i].position.x < planets[i].position.x+150 && aliens[i].position.x > planets[i].position.x-150 ) {
        attraction = true;
      }
    }

    //If the aliens are inside a black hole, a second force is applied.
    if (hole1.contains(aliens[i])) {
      PVector dragForce = hole1.drag(aliens[i]);
      aliens[i].applyForce(dragForce);
    }

    // Same for second black hole
    if (hole2.contains(aliens[i])) {
      PVector dragForce = hole2.drag(aliens[i]);
      aliens[i].applyForce(dragForce);
    }

    //Technically, the aliens themlseves attract the planets, because the boolean becomes true
    //according to the alien's and planets' position. However, once the planet is attracted, it gravitates
    // around the mouse, just like the aliens.
    if (attraction) {
      planets[i].orbit();
    }

    // Call our functions
    aliens[i].update();
    aliens[i].display();
    aliens[i].checkEdges();

    planets[i].update();
    planets[i].display();
    planets[i].checkEdges();
  }
}