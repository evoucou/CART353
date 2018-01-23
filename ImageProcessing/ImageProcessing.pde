
Pet pet;

void setup() {
  size(560, 400);

  pet = new Pet("pup.png", "kitty.png", width/2, height/2);
}

void draw() {

  background(0);

  pet.move();
  pet.display();
}

void mousePressed() {
  pet.mousePressed();
  }