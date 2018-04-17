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
var elephants = [1];

var particles = [];
var bottomCollision;

var fps;
var colorDisplay;
var typing = false;
//var timer;
//var waterMeter;
var typingDelay = 0;

var spawnCount = 12;
var particlesCount = 0;
var liters = 0;
var modu;

var waterIcon;

var ground;
var animalInset = 60;

var textfield;
var saveButton;
var copyButton;

var value = 20;
var pulse = 1;

var inside = false;
var distance;

var keyIsReleased;

var lastDrop;

function setup() {

  ground = 700;

  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('display', 'block');

  waterIcon = loadImage("data/waterdrop.png");

  // We create a paragraph to display the timer
  //waterMeter = liters;
  //timer = typingDelay;

  textfield = createInput('');
  textfield.size(500, 620);
  textfield.position((width - (650 + 400 + 500)), ground - textfield.height);
  textfield.input(myInputEvent);

  saveButton = createButton('save');
  saveButton.position((textfield.x + textfield.width/3) - saveButton.width/2, (textfield.y + textfield.height) + 20);
  saveButton.size(100, 30);
  saveButton.mousePressed(userCopy);

  copyButton = createButton('copy');
  copyButton.position((textfield.x + textfield.width/2) + copyButton.width/2, (textfield.y + textfield.height) + 20);
  copyButton.size(100, 30);
  copyButton.mousePressed(userSave);

  // Variables which determine width and height of waterfall
  waterfallMin = width-780;
  waterfallMax = width-400;

  for (var i = 0; i < this.elephants.length; i++) {
    this.elephants[i] = new Animal(-100, ground - 110, 3, "elephant");
    this.elephants[i].load();
  }
  lion = new Animal(width + 100, ground - 70, -3, "lion");
  giraffe = new Animal(-100, ground - 60, 3, "giraffe");
  //elephants.load();

  lion.load();
  giraffe.load();

  //for (var i = 0; i < this.elephants.length - 1; i++) {
  //  if (this.elephants[i].x < (waterfallMin - animalInset)) {
  //    this.elephants[i].moving();
  //  } else if (typingDelay > 0) {
  //    this.elephants[i].drinking(this.elephants[i].x);
  //  } else {
  //    this.elephants[i].crying();
  //  }
  //}
}

function userSave() {
  console.log("save");
}
function userCopy() {
  console.log("copy");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function myInputEvent() {
  //console.log("you are typing", this.value());
  console.log('pressed');
  typing = true;
  typingDelay = 8;
  clearInterval(interval);

  if (keyIsReleased) {
    // When user releases a key, typing becomes false and we start the timer with setInterval.
    console.log('released');
    typing = false;
    interval = setInterval(timeIt, 1000);
  }
}

function constrained() {
  this.value.position(textfield.x, (textfield.x + textfield.width))
}

function draw() {

  liters = floor(particlesCount/500);

  ground = 700;

  background(0, 150);

  imageMode(CENTER);
  image(waterIcon, width-157, 47);

  textSize(24);
  fill(255);
  text(liters, width-135, 55);

  var litersFrame = floor(particlesCount/100);
  var e = litersFrame % 200;
  console.log(e);

  if (e == 1) { 
    //this.elephants.push(new Animal(-100, random((ground - 400), (ground-10)), 3, "elephant"));
    //console.log("NEW");
  }

  for (var i = 0; i < this.elephants.length; i++) {
    if (this.elephants[i].x < (waterfallMin - animalInset)) {
      this.elephants[i].moving();
    } else if (typingDelay > 0) {
      this.elephants[i].drinking(this.elephants[i].x);
    } else {
      this.elephants[i].crying();
    }
    console.log("length " + this.elephants.length);
  }





    spawnParticles();
    spawnAnimals();

    // Avoid updating frame rate every frame (not as readable).
    //if (frameCount % 10 == 0) {
    //  fps = frameRate().toFixed(2);
    //}
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


  function spawnAnimals() {

    //if (this.elephants.x < (waterfallMin - animalInset)) {
    //  this.elephants.moving();
    //} else if (typingDelay > 0) {
    //  this.elephants.drinking(this.elephants.x);
    //} else {
    //  this.elephants.crying();
    //}



    if (liters > 50) {
      //console.log("elephant x : " + this.elephant.x);
      if (lion.x > (waterfallMax + animalInset)) {
        this.lion.moving();
      } else if (typingDelay > 0) {
        this.lion.drinking(this.lion.x);
      } else {
        this.lion.crying();
      }
    }

    if (liters > 100) {
      //console.log("elephant x : " + this.elephant.x);
      if (giraffe.x < (waterfallMin - animalInset)) {
        this.giraffe.moving();
      } else if (typingDelay > 0) {
        this.giraffe.drinking(this.giraffe.x);
      } else {
        this.giraffe.crying();
      }
    }
  }

  //function spawnLoopAnimals() {
  //  var e = liters % 50;
  //  var l;
  //  var g;
  //  //console.log("modu " + e);
  //  if (e == 1) {
  //    console.log("modu ======= 1");

  //    if (this.elephants.x < (waterfallMin - animalInset)) {
  //      this.elephants.moving();
  //    } else if (typingDelay > 0) {
  //      this.elephants.drinking(this.elephants.x);
  //    } else {
  //      this.elephants.crying();
  //    }
  //  }
  //}

  function spawnParticles() {

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

          //    if (value > 25) {
          //      pulse = 0;
          //      console.log("pulse: " + pulse + "value " + value);
          //    } else if (value < 21) {
          //      if (value > 19) { 
          //        pulse = 1;
          //        console.log("pulse: " + pulse + "value " + value);
          //      }
          //    }

          //    if (pulse == 1) {
          //      value += 2;
          //    } else if (pulse == 0) {
          //      value = 20;
          //    }

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
      if (particles[i].pos.y > ground) {
        particles[i].alpha -= 25;
        particlesCount++;
        //lastDrop = true;
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
    keyIsReleased = true;
  }


  /*
Initial waterfall code :
   
   Jason Labbe
   jasonlabbe3d.com
   */