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
//var timer;
//var waterMeter;
var typingDelay = 0;

var spawnCount = 11;
var liters = 0;

var waterIcon;

var textfield;

var value = 20;
var pulse = 1;

var pulseBoolean;

// <textarea id="textfield"></textarea>

function setup() {

    e = new Elephant(0, height/2, "elephant");

  waterIcon = loadImage("data/waterdrop.png");

  // We create a paragraph to display the timer
  //waterMeter = liters;
  //timer = typingDelay;

  textfield = createInput('');
  textfield.size(500, 620);
  textfield.position((windowWidth - (650 + 400 + 500)), height);

  textfield.input(myInputEvent);

  createCanvas(windowWidth, windowHeight);

  // Variables which determine width and height of waterfall
  waterfallMin = width-780;
  waterfallMax = width-400;


  //lion = new Lion(100,height);
  //giraffe = new Giraffe(100,height);
  //elephant = new Elephant(100,height);
}

function myInputEvent() {
  console.log("you are typing", this.value());
}


function draw() {

  background(0, 150);


  //e.preload();

  imageMode(CENTER);
  image(waterIcon, width-157, 47);

  spawnParticles();

  if (liters > 400) {
    //e.preload();
    //e.move();
  }

  // Avoid updating frame rate every frame (not as readable).
  if (frameCount % 10 == 0) {
    fps = frameRate().toFixed(2);
  }
}

function timeIt() {

  // Timer function. When it's running, it counts down to 0 and then clears.
  //console.log("typingdelay " + typingDelay);

  if (typingDelay == 0)
  {
    clearInterval(interval);
  } else {
    typingDelay--;
  }
}

function spawnParticles() {

  textSize(24);
  fill(255);
  text(liters, width-135, 55);

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

    textSize(50);
    if (typingDelay < 6) {    
      text(typingDelay, width/2, height/2 + 10);

      if (typingDelay < 4) {

        //if (value > 29) {
        //  pulse = 0;
        //  console.log("size: " + value + " pulse " + pulse);
        //} else if (value < 21) {
        //  pulse = 1;
        //  console.log("size: " + value + " pulse " + pulse);
        //}

        //if (pulse = 1) {
        //  value += 2;
        //   console.log("+2 called");
        //} else if (pulse = 0) {
        //  value -= 2;
        //  console.log("-2 called");
        //}

        pulseBoolean = true;

        if (pulseBoolean) {
          value += 2;
          console.log("pusleBoolean true");
          if (value = 30) {
            console.log("value = 30");
            pulseBoolean = false;
          }
        } else {
          pulseBoolean = false;
        }

        if (!pulseBoolean) {
          value -= 2;
          console.log("pusleBoolean false");
          if (value = 20) {
            console.log("value = 20");
            pulseBoolean = true;
          }
        }

        console.log(value);
        //console.log(pulse);
        textSize(value);
        text("Keep typing!", width/2 - 45, height/2 - 50);
      }
    }
  }

  colorMode(RGB, 255);

  // Here, the loop looks like this because we are checking the particles in reverse.
  // We have to do this, or else, we will skip a 'number' in our array, since we are deleting one with splice.
  for (var i = particles.length-1; i > -1; i--) {

    // Always display particles
    particles[i].display();

    // If particles almost at bottom of screen, they lose opacity and disappear.
    if (particles[i].pos.y > windowHeight - 70) {
      particles[i].alpha -= 25;
      liters++;
    } else {
      // Else, if not at bottom, they have to move and are at full opacity.
      particles[i].alpha = 255;
      particles[i].move();
    }

    //console.log("liters " + liters);

    // This function deletes particles that disappeared at the bottom (no opacity).
    // Else, particles are spawned continuously and accumulate, so the webpage becomes slower and slower as there are too many particles.
    if (particles[i].alpha < 0) {
      particles.splice(i, 1);
    }
  }
}

//function pulse() {

//  var index;
//  var textSize = 100;
//  var pulse = 1;

//  if (textSize > 199) {
//    pulse = 0;
//  } else if (textSize < 101) {
//    pulse = 1;
//  }

//  if (pulse == 1) {
//    textSize += 2;
//    console.log("textSize + 2: " +  textSize);
//  } else if (pulse == 0) {
//    textSize -= 2;
//    console.log("textSize - 2: "+ textSize);
//  }
//}
//return textSize;
//}

function keyPressed() {
  // When user presses a key, typing becomes true, the previous timer count is cleared and we reset it.
  console.log('pressed');
  typingDelay = 8;
  typing = true;
  clearInterval(interval);
}

function keyReleased() {

  // When user releases a key, typing becomes false and we start the timer with setInterval.
  console.log('released');
  typing = false;
  interval = setInterval(timeIt, 1000);
}


/*
Initial waterfall code :
 
 Jason Labbe
 jasonlabbe3d.com
 */
