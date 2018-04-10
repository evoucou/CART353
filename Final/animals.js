// Animal class

function Animal(x, y, id) {

  this.vx = 3;

  this.x = x;
  this.y = y;
  this.id = id;


  this.load = function() {

    this.img = loadImage("data/" + this.id + "/" + this.id + "_walk1.png");
    this.walk = loadAnimation("data/" + this.id + "/" + this.id + "_walk1.png", "data/" + this.id + "/" + this.id + "_walk12.png");
    this.bend = loadAnimation("data/" + this.id + "/" + this.id + "_drink1.png", "data/" + this.id + "/" + this.id + "_drink12.png");
    this.reverseBend = loadAnimation("data/" + this.id + "/reverse/" + this.id + "_drink1.png", "data/" + this.id + "/reverse/" + this.id + "_drink12.png");
    this.drink = loadAnimation("data/" + this.id + "/" + this.id + "_water1.png", "data/" + this.id + "/" + this.id + "_water8.png");
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
      frame = this.bend.getFrame();
      console.log("frame: " + frame);
      if (frame == 11) {
        animation(this.drink, this.x, this.y);
        console.log("drink");
      }
    }

  }

  this.standing = function() {
    this.bend.rewind();

    var frame;
    animation(this.reverseBend, this.x, this.y);
    frame = this.reverseBend.getFrame();
    console.log("reverse frame: " + frame);
    //if (frame == 11) {
    //image(this.img, this.x, this.y);
    //console.log("stand");
    //}
  }
}
