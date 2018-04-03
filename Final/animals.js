// Animal class
var walk;

function Animal(x, y, id) {

  this.vx = 3;

  this.x = x;
  this.y = y;
  this.id = id;

  this.load = function() {
    this.walk = loadAnimation("data/" + this.id + "1.png", "data/" + this.id + "12.png");
  }

  this.move = function() {
    this.x += this.vx;

    animation(this.walk, this.x, this.y);
  }

  this.display = function() { 

    rect(this.x, this.y, 50, 50);
    stroke(255);
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
