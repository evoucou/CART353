////// Waterfall
//
// Marie-Eve Cousineau
//

var NBKeyPressed;

var pMinMass = 2;
var pMaxMass = 8;
var cMinMass = 15;
var cMaxMass = 100;
var interval ;
var waterfallMin;
var waterfallMax;

var lionsRight = [];
var lionsLeft = [];
var giraffes = [];
var elephantsLeft = [];
var elephantsRight = [];

var particles = [];
var bottomCollision;

var fps;
var colorDisplay;
var typing = false;
//var timer;
//var waterMeter;
var typingDelay = 0;
var objectDelay;

var spawnCount = 15;
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

var keyIsReleased = true;

var userEssay;

var canvas;
var waterAnim;
var unicorn;

var bg;
var logo;


function setup() {

  this.bg = loadImage("data/bg.png");
  this.logo = loadImage("data/logo.png");

  this.unicorn = loadAnimation("data/mystical/unicorn1.png", "data/mystical/unicorn12.png");
  this.waterAnim = loadAnimation("data/water/watersource1.png", "data/water/watersource8.png");
  this.reverseWater = loadAnimation("data/water/reverse/watersource1.png", "data/water/reverse/watersource8.png");
  //this.waterAnim.looping = false;
  this.reverseWater.looping = false;

  canvas = createCanvas(windowWidth, windowHeight);
  centerCanvas();
  //canvas.parent('sketch-holder');

  waterIcon = loadImage("data/waterdrop.png");

  // We create a paragraph to display the timer
  //waterMeter = liters;
  //timer = typingDelay;


  copyButton = createButton('Copy');
  copyButton.position(300, windowHeight - 190);
  copyButton.size(100, 30);
  copyButton.mousePressed(userSelect);

  function userSelect() {

    var copyTextarea = document.getElementById("userInput");
    copyTextarea.select();
    document.execCommand('copy');
    //copyText.select();
    //document.execCommand("Copy");
  }

  // Variables which determine width and height of waterfall
  waterfallMin = width-780;
  waterfallMax = width-400;


  for (var i = 0; i < 3; i++) {
    this.elephantsRight[i] = new Animal(-windowWidth, windowHeight - 200, 3, "elephant");
    this.elephantsRight[i].load();
  }


  for (var i = 0; i < 3; i++) {
    this.elephantsLeft[i] = new Animal(-100, windowHeight - 255, 3, "elephant");
    this.elephantsLeft[i].load();
  }

  for (var i = 0; i < 3; i++) {
    this.lionsLeft[i] = new Animal(-700, windowHeight - 187, -3, "lion");
    this.lionsLeft[i].load();
  }

  for (var i = 0; i < 3; i++) {
    this.lionsRight[i] = new Animal(width + 100, windowHeight - 298, -3, "lion");
    this.lionsRight[i].load();
  }

  for (var i = 0; i < 3; i++) {
    this.giraffes[i] = new Animal(-100, windowHeight - 360, 3, "giraffe");
    this.giraffes[i].load();
  }
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);
} 

//console.log('pressed');
//typing = true;
//typingDelay = 10;
//clearInterval(interval);

//if (keyIsReleased) {
//  // When user releases a key, typing becomes false and we start the timer with setInterval.
//  console.log('released');
//  typing = false;
//  interval = setInterval(timeIt, 1000);
//}


function userTypingInput() {
  //console.log("you are typing", this.value());
  console.log('pressed');
  typing = true;
  typingDelay = 10;
  clearInterval(interval);

  if (keyIsReleased) {
    // When user releases a key, typing becomes false and we start the timer with setInterval.
    console.log('released');
    typing = false;
    interval = setInterval(timeIt, 1000);
  }
}


function draw() {

  ground = windowHeight - 295;

  liters = floor(particlesCount/500);


  imageMode(CENTER);
  image(this.bg, windowWidth/2, windowHeight/2);
  image(this.logo, -1400, 20);
  image(this.waterIcon, width-157, 47);

  textSize(28);
  fill(255);
  text(liters, width-135, 55);

  textSize(80);

  spawnParticles();
  spawnMythicals();
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

function spawnMythicals() {
  if (liters > 150) {
    //console.log(this.elephantsRight[1].x);
    animation(this.unicorn, 1500, windowHeight/2);
  }
}

function spawnAnimals() {


  if (liters > 30) {
    if (giraffes[1].x < waterfallMin - animalInset) {
      this.giraffes[1].moving();
    } else if (typingDelay > 0) {
      this.giraffes[1].drinking(this.giraffes[1].x);
    } else {
      this.giraffes[1].crying();
    }
  }

  if (liters > 10) {
    if (this.elephantsLeft[1].x < (waterfallMin - (animalInset+10))) {
      this.elephantsLeft[1].moving();
    } else if (typingDelay > 0) {
      this.elephantsLeft[1].drinking(this.elephantsLeft[1].x);
    } else {
      this.elephantsLeft[1].crying();
    }
  }

  if (liters > 20) {
    //console.log("elephant x : " + this.elephant.x);
    if (lionsRight[1].x > (waterfallMax - animalInset)) {
      this.lionsRight[1].moving();
    } else if (typingDelay > 0) {
      this.lionsRight[1].drinking(this.lionsRight[1].x);
    } else {
      this.lionsRight[1].crying();
    }
  }
  scale(-1, 1);
  if (liters > 0) {

    console.log(this.elephantsRight[1].x);
    if (this.elephantsRight[1].x < ((waterfallMax - animalInset)*-1)) {
      this.elephantsRight[1].moving();
    } else if (typingDelay > 0) {
      this.elephantsRight[1].drinking(this.elephantsRight[1].x);
    } else {
      this.elephantsRight[1].crying();
    }
  }    

  if (liters > 50) {
    //console.log("lion x " + this.lionsLeft[1].x);
    if (this.lionsLeft[1].x > (waterfallMin*-1)+150) {
      this.lionsLeft[1].moving();
    } else if (typingDelay > 0) {
      this.lionsLeft[1].drinking(this.lionsLeft[1].x);
    } else {
      this.lionsLeft[1].crying();
    }
  }
  scale(1, 1);
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
      if (liters >= 100 && liters <= 120) {
        displayColor = color(255, 170, random(120, 200));
      } else if (liters >= 120 && liters <= 140) {
        displayColor = color(255, random(120, 200), 255);
      } else {
        displayColor = color(random(180, 200), 255, 255);
      }


      // We create our array of particles with the constructor
      var newParticle = new Particle(x, 0, mass, displayColor);
      particles[particles.length] = newParticle;
    }


    if (typingDelay > 0) {
      animation(this.waterAnim, waterfallMax - 300, ground + 200);

      if (typingDelay < 6) {  
        text(typingDelay, width/2, height/2 + 10);

        if (typingDelay < 4) {

          text("Keep typing!", width/2 - 45, height/2 - 50);
        }
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

function keyReleased() {
  keyIsReleased = true;
}


/*
Initial waterfall code :
 
 Jason Labbe
 jasonlabbe3d.com
 */