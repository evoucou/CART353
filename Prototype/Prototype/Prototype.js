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
var typingDelay = 0;
//var delay = 0;


function setup() {
  timer = createP('timer');

  createCanvas(windowWidth, windowHeight);

  waterfallMin = width/2.6;
  waterfallMax = width-width/2.6;
}


function draw() {
  background(0, 150);

  var spawnCount = 20;


  colorMode(HSB, 360);

  // Spawn new particles.
  if (typing || typingDelay != 0) {
    for (var i = 0; i < spawnCount; i++) {
      var x = random(waterfallMin, waterfallMax);
      var mass = random(pMinMass, pMaxMass);
      displayColor = color(random(180, 200), 255, 255);

      var newParticle = new Particle(x, 0, mass, displayColor);
      particles[particles.length] = newParticle;
    }
  }

  colorMode(RGB, 255);

  // Here, the loop looks like this because we are checking the particles in reverse.
  // We have to do this, or else, we will skip a 'number' in our array, since we are deleting one.
  for (var i = particles.length-1; i > -1; i--) {

    particles[i].display();


    if (particles[i].pos.y > windowHeight - 50) {
      particles[i].alpha -= 25;
    } else {
      particles[i].alpha = 255;
      particles[i].move();
    }

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
  console.log('pressed');
  typingDelay = 5;
  typing = true;
  clearInterval(interval);
}

function keyReleased() {
  console.log('released');
  typing = false;
  interval = setInterval(timeIt, 1000);
}


function timeIt() {
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
