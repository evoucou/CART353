class Pet {

  PImage puppy;
  PImage kitty;

  PImage currentPet;

  float x;
  float y;
  float vx;

// The first boolean tracks which pet is displayed, 
// and the second tracks if the pet is being changed
  boolean kittyDisplay;
  boolean moving;

  Pet(String puppyImg, String kittyImg, float x, float y) {

    puppy = loadImage(puppyImg);
    kitty = loadImage(kittyImg);

    // The images need to be resized
    puppy.resize(0, 195);
    kitty.resize(0, 180);

    this.x = x;
    this.y = y;

    // We set this boolean to true because we start with the kitten
    kittyDisplay = true;
    currentPet = kitty;
  }

  void display() {
    translate(x, y);
    imageMode(CENTER);
    image(currentPet, 0, 0);
  }

  void move() {

    // This is what makes the pet move
    if (moving) {
      vx = 5;
      x += vx;
    }

    // The pet stops moving once it's centered 
    // (because it is now the other pet displayed)
    if (x == width/2 ) {
      moving = false;
    }

    // If the pet has gone off the screen
    if (x > width + currentPet.width) {

      // We flip our boolean
      kittyDisplay =! kittyDisplay;

      // If kittyDisplay, it means our current pet has to be the image of the kitten
      if (kittyDisplay) {
        currentPet = kitty;
      } 
      // Else, we have to display the puppy image
      else {
        currentPet = puppy;
      }

      // We move the x coordinate just off the left side of the screen
      x = -currentPet.width;
    }
  }

  void mousePressed() {
    
    // When the player wants to switch pets, he simply clicks
    moving = true;
  }
}