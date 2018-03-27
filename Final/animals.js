//// Animals parent class

function Animal(x, y) {

  // We create its values
  var vx

  this.x = x;
  this.y = y;

  this.move = function() {

    x += vx;
  }

  this.display = function() { 

    // Display the particles
    ellipse(this.x, this.y, 10, 10);
  }
}
