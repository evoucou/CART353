//// Animals parent class

function Animal(x, y, string) {

  // We create its values
  var images = []
    var totalImages = 12;
  var counterImage = 0;
  var loadingImage = false;

  var vx = 3;

  this.x = x;
  this.y = y;
  this.string = string;

  Animal.prototype.move = function() {
    this.x += vx;

    //img[0] = loadImage("data/", string, "-01.png");
    //img[1] = loadImage("data/", string, "-02.png");
    //img[2] = loadImage("data/", string, "-03.png");
    //img[3] = loadImage("data/", string, "-04.png");
    //img[4] = loadImage("data/", string, "-05.png");
    //img[5] = loadImage("data/", string, "-06.png");
    //img[6] = loadImage("data/", string, "-07.png");
    //img[7] = loadImage("data/", string, "-08.png");
    //img[8] = loadImage("data/", string, "-09.png");
    //img[9] = loadImage("data/", string, "-10.png");
    //img[10] = loadImage("data/", string, "-11.png");
    //img[11] = loadImage("data/", string, "-12.png");

    //for (var i = 0; i < 11; i++) {
    //  image(this.img[i], this.x, this.y);
    //}
  }


  Animal.prototype.loadImageElement = function(filename) {

    loadImage(filename, imageLoaded);

    function imageLoaded(image) {
      console.log(filename);
     images.push(image);
      counterImage++;
      if (counterImage == totalImages) {
        loadingImage = true;
      }
    }
  }

  Animal.prototype.setupImages = function() {
    for (var i = 1; i <= totalImages; i++) {
      this.loadImageElement("data/" + this.string + i + ".png");
    }
  }


  Animal.prototype.display = function() { 

    rect(this.x, this.y, 50, 50);
    stroke(255);
  }
}
