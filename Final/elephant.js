// Elephant child class

function Elephant(x, y, string) {
  Animal.call(x, y, string);
  this.x = x;
  this.y = y;
  this.string = string;

  // Inherit from the parent class
  Elephant.prototype = Object.create(Animal.prototype);
  Elephant.prototype.constructor = Elephant;


  //// Override the display method
  //Elephant.prototype.display = function() {
  //  ellipse(this.x, this.y, 20, 20);
  //  stroke(255);
  }

