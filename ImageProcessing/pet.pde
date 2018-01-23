class Pet {

  PImage puppy;
  PImage kitty;

  PImage currentPet;

  float x;
  float y;

  boolean kittyDisplay;

  Pet(String puppyImg, String kittyImg, float x, float y) {

    puppy = loadImage(puppyImg);
    kitty = loadImage(kittyImg);

    puppy.resize(0, 120);
    kitty.resize(0, 110);

    this.x = x;
    this.y = y;

    kittyDisplay = true;
    currentPet = kitty;
  }

  void display() {
    translate(x, y);
    imageMode(CENTER);
    image(currentPet, 0, 0);
  }

  void move() {
    x += 1.0;

    if (x > width + currentPet.width) {

      kittyDisplay =! kittyDisplay;

      if (kittyDisplay) {
        currentPet = kitty;
      } else {
        currentPet = puppy;
      }

      x = -currentPet.width;
    }
  }
}