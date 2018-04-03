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
var elephant;

var particles = [];
var bottomCollision;

var fps;
var colorDisplay;
var typing = false;
//var timer;
//var waterMeter;
var typingDelay = 0;

var spawnCount = 11;
var mL = 0;
var liters;

var waterIcon;

var textfield;

var value = 20;
var pulse = 1;

var inside = false;
var distance;

// <textarea id="textfield"></textarea>


function setup() {

  createCanvas(windowWidth, windowHeight);

  elephant = new Animal(45, height/2, "elephant");

  waterIcon = loadImage("data/waterdrop.png");
  
  elephant.load();

  //this.elephant.preload();

  // We create a paragraph to display the timer
  //waterMeter = liters;
  //timer = typingDelay;

  textfield = createInput('');
  textfield.size(500, 620);
  textfield.position((width - (650 + 400 + 500)), 100);

  textfield.input(myInputEvent);

  // Variables which determine width and height of waterfall
  waterfallMin = width-780;
  waterfallMax = width-400;

  //lion = new Lion(100,height);
  //giraffe = new Giraffe(100,height);
  //elephant = new Elephant(100,height);
}

function myInputEvent() {
  //console.log("you are typing", this.value());
  console.log('pressed');
  typing = true;
  typingDelay = 8;
  clearInterval(interval);
}


function draw() {

  background(0, 150);

  //distance = dist(mouseX, mouseY, textfield.x, textfield.y);
  ////console.log(distance);

  //insideLeft = (textfield.x < mouseX);
  //insideRight = (textfield.x + textfield.width > mouseX);
  //insideTop = (textfield.y < mouseY);
  //insideBottom = (textfield.y + textfield.height > mouseY);
  //console.log("mouseX " + mouseX + " textfield.x " + textfield.x);
  // console.log("mouseY " + mouseY + " textfield.y " + textfield.y);

  imageMode(CENTER);
  image(waterIcon, width-157, 47);

  spawnParticles();

 // animation(this.walk, 200, 200);

  //elephant.display();
  if (mL > 10) {
    elephant.move();
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

  //liters = mL % 1000;

  textSize(24);
  fill(255);
  text(mL, width-135, 55);

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

        if (value > 25) {
          pulse = 0;
          console.log("pulse: " + pulse + "value " + value);
        } else if (value < 21) {
          if (value > 19) { 
            pulse = 1;
            console.log("pulse: " + pulse + "value " + value);
          }
        }

        if (pulse == 1) {
          value += 2;
        } else if (pulse == 0) {
          value = 20;
        }

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
    if (particles[i].pos.y > height - 100) {
      particles[i].alpha -= 25;
      mL++;
    } else {
      // Else, if not at bottom, they have to move and are at full opacity.
      particles[i].alpha = 255;
      particles[i].move();
    }

    // This function deletes particles that disappeared at the bottom (no opacity).
    // Else, particles are spawned continuously and accumulate, so the webpage becomes slower and slower as there are too many particles.
    if (particles[i].alpha < 0) {
      particles.splice(i, 1);
    }
  }
}

//function insideBox() {
//  console.log('inside')

//    if (insideLeft && insideRight && insideTop && insideBottom) {
//    inside = true;
//  } else {
//    inside = false;
//  }
//}

//function keyPressed() {
//  if (insideLeft && insideRight && insideTop && insideBottom) {
//    // When user presses a key, typing becomes true, the previous timer count is cleared and we reset it. 
//    //console.log('pressed');
//    //typingDelay = 8;
//    //typing = true;
//    //clearInterval(interval);
//  }
//}

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
