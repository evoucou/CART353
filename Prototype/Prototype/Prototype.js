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


function setup() {

  // We create a paragraph to display the timer
  timer = createP('timer');
  waterMeter = createP('water meter');

  createCanvas(windowWidth, windowHeight);

  // Variables which determine width and height of waterfall
  waterfallMin = width/2.6;
  waterfallMax = width-width/2.6;
}


function draw() {
  background(0, 150);

  colorMode(HSB, 360);

  // Spawn new particles only if the user is typing
  if (typing || typingDelay != 0) {
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

  // Avoid updating frame rate every frame (not as readable).
  if (frameCount % 10 == 0) {
    fps = frameRate().toFixed(2);
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


/*
Initial waterfall code :
 
 Jason Labbe
 jasonlabbe3d.com
 */
