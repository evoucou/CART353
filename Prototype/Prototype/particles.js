function Particle(x, y, mass, displayColor) {

  this.pos = new p5.Vector(x, y);
  this.vel = new p5.Vector(0, 0);
  this.acc = new p5.Vector(0, 0);
  this.mass = mass;
  this.displayColor = displayColor;
  this.fallRate = map(this.mass, pMinMass, pMaxMass, 0.1, 0.05);
  this.alpha = 255;

  this.move = function() {

    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);

    var gravity = new p5.Vector(0, this.fallRate);
    this.acc.add(gravity);
  }

  this.display = function() { 
    stroke(displayColor, this.alpha);
    strokeWeight(this.mass);
    point(this.pos.x, this.pos.y);
  }
}