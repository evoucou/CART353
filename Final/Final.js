////// Waterfall
//
// Marie-Eve Cousineau
//

var pMinMass = 2;
var pMaxMass = 8;
var cMinMass = 15;
var cMaxMass = 100;
var interval ;
var waterfallMin;
var waterfallMax;

var lion;
var giraffe;
var e;

var particles = [];
var bottomCollision;

var fps;
var colorDisplay;
var typing = false;
var timer;
var waterMeter;
var typingDelay = 0;

var spawnCount = 15;
var liters = 0;

var elephantImg = [];


function setup() {

  //elephantImg[0] = loadImage("data/elephant-01.png");
  //elephantImg[1] = loadImage("data/elephant-02.png");
  //elephantImg[2] = loadImage("data/elephant-03.png");
  //elephantImg[3] = loadImage("data/elephant-04.png");
  //elephantImg[4] = loadImage("data/elephant-05.png");
  //elephantImg[5] = loadImage("data/elephant-06.png");
  //elephantImg[6] = loadImage("data/elephant-07.png");
  //elephantImg[7] = loadImage("data/elephant-08.png");
  //elephantImg[8] = loadImage("data/elephant-09.png");
  //elephantImg[9] = loadImage("data/elephant-10.png");
  //elephantImg[10] = loadImage("data/elephant-11.png");
  //elephantImg[11] = loadImage("data/elephant-12.png");

  e = new Elephant(0, height/2, "elephant");

  // We create a paragraph to display the timer
  timer = createP('timer');
  waterMeter = createP('water meter');

  createCanvas(windowWidth, windowHeight);

  // Variables which determine width and height of waterfall
  waterfallMin = width/2.6;
  waterfallMax = width-width/2.6;


  //lion = new Lion(100,height);
  //giraffe = new Giraffe(100,height);
  //elephant = new Elephant(100,height);
}


function draw() {

  //for (var i = 0; i < 11; i++) {
  //  elephant = new Elephant(0, height/2, elephantImg[i]);
  //}

  background(0, 150);

  colorMode(HSB, 360);

  // Spawn new particles only if the user is typing
  if (typing || typingDelay != 0) {
    for (var i = 0; i < spawnCount; i++) {
      var x = random(waterfallMin, waterfallMax);
      var mass = random(pMinMass, pMaxMass);
      displayColor = color(random(180, 200), 255, 255);

      // We create our array of particles with the constructor
      var newParticle = new Particle(x, 0, mass, displayColor);
      particles[particles.length] = newParticle;
    }
  }

  colorMode(RGB, 255);

  // Here, the loop looks like this because we are checking the particles in reverse.
  // We have to do this, or else, we will skip a 'number' in our array, since we are deleting one with splice.
  for (var i = particles.length-1; i > -1; i--) {

    // Always display particles
    particles[i].display();

    // If particles almost at bottom of screen, they lose opacity and disappear.
    if (particles[i].pos.y > windowHeight - 50) {
      particles[i].alpha -= 25;
      liters++;
    } else {
      // Else, if not at bottom, they have to move and are at full opacity.
      particles[i].alpha = 255;
      particles[i].move();
    }
    waterMeter.html(liters);

    // This function deletes particles that disappeared at the bottom (no opacity).
    // Else, particles are spawned continuously and accumulate, so the webpage becomes slower and slower as there are too many particles.
    if (particles[i].alpha < 0) {
      particles.splice(i, 1);
    }
  }

  e.display();
  if (liters > 2000) {
    e.move();
    //elephant.display();
  }

  // Avoid updating frame rate every frame (not as readable).
  if (frameCount % 10 == 0) {
    fps = frameRate().toFixed(2);
  }
}

function timeIt() {

  // Timer function. When it's running, it counts down to 0 and then clears.
  timer.html(typingDelay);

  if (typingDelay == 0)
  {
    clearInterval(interval);
  } else {
    typingDelay--;
  }
}


function keyPressed() {
  // When user presses a key, typing becomes true, the previous timer count is cleared and we reset it.
  console.log('pressed');
  typingDelay = 5;
  typing = true;
  clearInterval(interval);
}

function keyReleased() {

  // When user releases a key, typing becomes false and we start the timer with setInterval.
  console.log('released');
  typing = false;
  interval = setInterval(timeIt, 1000);
}


//// Child class constructor
//function Confetti(position) {
//  Particle.call(this,position);
//}

//// Inherit from the parent class
//Confetti.prototype = Object.create(Particle.prototype);
//Confetti.prototype.constructor = Confetti;

//// Override the display method
//Confetti.prototype.display = function(){
//    rectMode(CENTER);
//    fill(127,this.lifespan);
//    stroke(0,this.lifespan);
//    strokeWeight(2);
//    pushMatrix();
//    translate(this.position.x,this.position.y);
//    var theta = map(this.position.x,0,width,0,TWO_PI*2);
//    rotate(theta);
//    rect(0,0,12,12);
//    popMatrix();
//}



/*
Initial waterfall code :
 
 Jason Labbe
 jasonlabbe3d.com
 */
