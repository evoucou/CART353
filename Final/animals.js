//// Animals parent class

function Animal(x, y, string) {

  // We create its values
  //var images = []
  //  var totalImages = 12;
  //var counterImage = 0;
  //var loadingImage = true

  var a;

  var vx = 3;

  this.x = x;
  this.y = y;
  this.string = string;

  Animal.prototype.loadImageElement = function(filename) {
  }

  Animal.prototype.preload = function() {
    a = loadAnimation("data/" + this. string + "1.png", "data/" + this.string + "12.png");
  }

  Animal.prototype.move = function() {
    this.x += vx;

    animation(a, this.x, this.y);
  }


  Animal.prototype.display = function() { 

    //rect(this.x, this.y, 50, 50);
    //stroke(255);
  }
}
