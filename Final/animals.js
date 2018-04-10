// Animal class

function Animal(x, y, id) {

  this.vx = 3;

  this.x = x;
  this.y = y;
  this.id = id;

  this.load = function() {

    this.walk = loadAnimation("data/" + this.id + "/" + this.id + "_walk1.png", "data/" + this.id + "/" + this.id + "_walk12.png");
    this.neck = loadAnimation("data/" + this.id + "/" + this.id + "_drink1.png", "data/" + this.id + "/" + this.id + "_drink2.png");
    this.drink = loadAnimation("data/" + this.id + "/" + this.id + "_water1.png", "data/" + this.id + "/" + this.id + "_water8.png");
    this.neck.looping = false;
  }


  //this.getAnim = function() {
  //  animation(this.walk, this.x, this.y);
  //  animation(this.neck, this.x, this.y);
  //  animation(this.drink, this.x, this.y);
  //}

  this.move = function() {
    this.x += this.vx;
    animation(this.walk, this.x, this.y);
    //this.walk.visible = true;

    this.walk.play();
  }

  this.standing = function() {
    //this.walk.stop();
    //this.walk.visible = false;

    animation(this.walk, this.x, this.y);
   this.walk.stop(); 
   this.walk.getFrameImage(0);

    //this.walk.stop();
    //this.neck.visible = true;
    //this.neck.play();
  }


  this.drinking = function() {
    //animation(this.drink, this.x, this.y);
    animation(this.drink, this.x, this.y);
    //this.drink.visible = true;
    //this.drink.play();
    //this.drink.stop();
  }
}

////// Animals parent class

//function Animal(x, y, identifier) {

//  var a;

//  var vx = 3;

//  this.x = x;
//  this.y = y;
//  this.identifier = identifier;

//  //console.log("constructor: x" + x+" y "+y);

//}
//  //Animal.prototype.preload = function() {
//  //  a = loadAnimation("data/" + this. string + "1.png", "data/" + this.string + "12.png");
//  //}

//  Animal.prototype.move = function() {
//    this.x += this.vx;
//    //console.log("moving "+this.x);

//    //animation(a, this.x, this.y);
//  }


//  Animal.prototype.display = function() { 

//    rect(this.x, this.y, 50, 50);
//    //console.log("from display " + this.x + " "+this.y);
//    stroke(255);
//  }
