// Animal class
//
// This class is extremely practical, because with the id within the constructor, I can call all my animals
// from here simply by changing the string. They all have the same behaviours, so it would be pointless to
// create a class for each.

function Animal(x, y, vx, id) {

  this.vx = vx;
  this.x = x;
  this.y = y;
  this.id = id;

  this.load = function() {

    // Our function to load all the animations with p5.play
    this.walk = loadAnimation("data/" + this.id + "/" + this.id + "_walk1.png", "data/" + this.id + "/" + this.id + "_walk12.png");
    this.bend = loadAnimation("data/" + this.id + "/" + this.id + "_bend1.png", "data/" + this.id + "/" + this.id + "_bend8.png");
    this.reverseBend = loadAnimation("data/" + this.id + "/reverse/" + this.id + "_bend1.png", "data/" + this.id + "/reverse/" + this.id + "_bend8.png");
    this.drink = loadAnimation("data/" + this.id + "/" + this.id + "_drink1.png", "data/" + this.id + "/" + this.id + "_drink8.png");
    this.cry = loadAnimation("data/" + this.id + "/" + this.id + "_cry1.png", "data/" + this.id + "/" + this.id + "_cry10.png");
 
    // The bending animation does not loop
    this.bend.looping = false;
    this.reverseBend.looping = false;
  }


  this.moving = function() {
    this.x += this.vx;
    animation(this.walk, this.x, this.y);
  }

  this.drinking = function(animalX) {
    this.reverseBend.rewind();

    var frame;
    if (this.x == animalX) {

      this.vx = 0;
      this.walk.stop();
      this.walk.visible = false;
      animation(this.bend, this.x, this.y);
      this.bend.visible = true;
      frame = this.bend.getFrame();
      if (frame == 7) {     
        // We want the animal to start drinking only when he is bent.
        animation(this.drink, this.x, this.y);
        this.bend.visible = false;
      }
    }
  }

  this.crying = function() {
    this.bend.rewind();

    animation(this.reverseBend, this.x, this.y);
    this.reverseBend.visible = true;
    frame = this.reverseBend.getFrame();
    if (frame == 7) {
      animation(this.cry, this.x, this.y);
      this.reverseBend.visible = false;
    }
  }
}
