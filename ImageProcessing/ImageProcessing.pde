
Pet pet;

void setup() {
  size(560, 400);

  pet = new Pet("kitty.png", "pup.png", width/2, height/2);
}

void draw() {

  background(102, 204, 255);
  pet.move();
  pet.display();

}

void mousePressed() {

}