/*
Waterfall cascades
 
 Jason Labbe
 
 Site:
 jasonlabbe3d.com
 */

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
var timerRunning = false;

var delay = 0;

//var input;

function do_aabb_collision(ax, ay, Ax, Ay, bx, by, Bx, By) {
  return ! ((Ax < bx) || (Bx < ax) || (Ay < by) || (By < ay));
}


//// Set new targets for collision objects to lerp to.
//function setNewLayout() {
//  for (var i = 0; i < collisions.length; i++) {
//    collisions[i].target.x = random(width/2.4, width-width/2.4);
//    collisions[i].target.y = random(height/2, height);
//    collisions[i].targetMass = random(cMinMass, cMaxMass);
//  }
//}


function setup() {
  timer = createP('timer');

  createCanvas(windowWidth, windowHeight);

  waterfallMin = width/2.6;
  waterfallMax = width-width/2.6;

  //interval = setInterval(timeIt, 1000);

  //timer = createP('timer');

  //var timer = select('#timer');
  //timer.html('0');


  //input = createInput('type your name');

  //  // Create collision objects.
  //  for (var i = 0; i < 10; i++) {
  //    var x = random(waterfallMin, waterfallMax);
  //    var y = random(height/2, height);
  //    var mass = random(cMinMass, cMaxMass);
  //  }
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

    //    if (bottomCollision) {

    //  var displayColor = color(255);
    //} else {
    //  var displayColor = color(random(180, 200), 255, 255);
    //}

    if (particles[i].pos.y > windowHeight - 50) {
      particles[i].alpha -= 25;  

      //particles[i].vel.x *= -1;      
      //var gravityBounce = new p5.Vector(0, 0.1);
      //particles[i].acc.add(gravityBounce);
    } else {
      particles[i].alpha = 255;
      particles[i].move();
    }

    if (particles[i].alpha < 0) {
      particles.splice(i, 1);
    }

    //collidedBottom() {
    //particles[i].pos.y > particles[i].bottom;
    //}

    //if (particles[i].collidedBottom()) {
    //System.out.println("collided with bottom");
    //}

    //  if (particles[i].pos.y > particles[i].bottom) {
    //  // Splice allows us to delete position i at just one element.
    //  particles[i].splice(i, 1);
    //}

    // else if (has_collision && particles[i].vel.mag() < 0.1) {
    //  // Delete if it's stuck on top of a collision object.
    //  particles.splice(i, 1);
    //}
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
  //timerRunning = false;
}

function keyReleased() {
  console.log('released');
  typing = false;
  interval = setInterval(timeIt, 1000);
  //timerRunning = true;
}


function timeIt() {
  timer.html(typingDelay);

  if (typingDelay == 0)
  {
    //typingDelay = 10;
    clearInterval(interval);
  } else {
    typingDelay--;
  }
}
