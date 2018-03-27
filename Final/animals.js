//// Animals parent class

function Animal(x, y) {

  // We create its values
  var vx = 10;

  this.x = x;
  this.y = y;

  Animal.prototype.move = function() {
    this.x += vx;
    console.log("moving");
  }

  Animal.prototype.display = function() { 

    // Display the particles
    ellipse(this.x, this.y, 10, 10);
  }
}
