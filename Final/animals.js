// Animal class

function Animal(x, y, vx, id) {

  this.vx = vx;
  this.x = x;
  this.y = y;
  this.id = id;

  this.load = function() {

    this.img = loadImage("data/" + this.id + "/" + this.id + "_walk1.png");
    this.walk = loadAnimation("data/" + this.id + "/" + this.id + "_walk1.png", "data/" + this.id + "/" + this.id + "_walk12.png");
    this.bend = loadAnimation("data/" + this.id + "/" + this.id + "_bend1.png", "data/" + this.id + "/" + this.id + "_bend8.png");
    this.reverseBend = loadAnimation("data/" + this.id + "/reverse/" + this.id + "_bend1.png", "data/" + this.id + "/reverse/" + this.id + "_bend8.png");
    this.drink = loadAnimation("data/" + this.id + "/" + this.id + "_drink1.png", "data/" + this.id + "/" + this.id + "_drink8.png");
    this.cry = loadAnimation("data/" + this.id + "/" + this.id + "_cry1.png", "data/" + this.id + "/" + this.id + "_cry10.png");
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
      //console.log("frame: " + frame);
      if (frame == 7) {
        animation(this.drink, this.x, this.y);
        this.bend.visible = false;
        //console.log("drink");
      }
    }
  }

  this.crying = function() {
    this.bend.rewind();

    //var frame;
    animation(this.reverseBend, this.x, this.y);
    this.reverseBend.visible = true;
    frame = this.reverseBend.getFrame();
    //console.log("reverse frame: " + frame);
    if (frame == 7) {
        animation(this.cry, this.x, this.y);
        this.reverseBend.visible = false;
        //console.log("cry");
    }
  }
}