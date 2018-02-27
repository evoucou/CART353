class Hole {

  float x, y, w, h;
  float c;

  PImage image;

  Hole(float x_, float y_, float w_, float h_, float c_, PImage _image) {
    x = x_;
    y = y_;
    w = w_;
    h = h_;
    c = c_;
    image = _image;
  }


  // We check if the aliens are in the black hole
  boolean contains(Alien a) {
    PVector l = a.position;
    if (l.x > x && l.x < x + w && l.y > y && l.y < y + h) {
      return true;
    } else {
      return false;
    }
  }

  // We calculate the drag force which acts on the aliens
  PVector drag(Alien a) {
    float speed = a.velocity.mag();
    float dragMagnitude = c * speed * speed;

    PVector dragForce = a.velocity.get();
    dragForce.mult(-1);

    dragForce.setMag(dragMagnitude);
    dragForce.normalize();
    dragForce.mult(dragMagnitude);
    return dragForce;
  }

  void display() {
  }
}