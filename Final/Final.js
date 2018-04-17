////// Waterfall
//
// Marie-Eve Cousineau
//
// *NOTE
// I DO NOT KNOW HOW TO MAKE THE WEBSITE RESPONSIVE WITH P5.JS
// And frankly it would've been a complicated task.
// If you look in the folder, I put an image of what I see on my screen. Hopefully, everything
// won't be too messed up on yours (I doubt it but I'm crossing my fingers!)

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
var unicorn;

var particles = [];
var spawnCount = 13;
var particlesCount = 0;
var colorDisplay;

var typing = false;
var typingDelay = 0;
var keyIsReleased = true;

var liters = 0;
var waterIcon;
var waterPuddle;

var ground;
var animalInset = 60;

var textfield;
var copyButton;

var canvas;
var bg;
var logo;
var unlocked;

function preload() {
  // We preload our animations  
  this.bg = loadImage("data/bg.png");
  this.logo = loadImage("data/logo.png");
  this.unlocked = loadImage("data/congratulations.png");

  this.unicorn = loadAnimation("data/mystical/unicorn1.png", "data/mystical/unicorn12.png");
  this.waterPuddle = loadAnimation("data/water/watersource1.png", "data/water/watersource8.png");
}

function setup() {

  canvas = createCanvas(windowWidth, windowHeight);
  centerCanvas();

  waterIcon = loadImage("data/waterdrop.png");

  // Creating the copy button
  copyButton = createButton('Copy');
  copyButton.position(300, windowHeight - 190);
  copyButton.size(150, 50);
  copyButton.mousePressed(userCopy);

  // Variables which determine width and height of waterfall
  waterfallMin = width-780;
  waterfallMax = width-400;

  // We load our animals
  loadAnimals();
}

function draw() {

  //Determining the y of the "floor"
  this.ground = windowHeight - 295;

  //Too many particles are spawned therefore the count would go up too fast. So we divide by 500.
  liters = floor(particlesCount/500);

  imageMode(CENTER);
  image(this.bg, windowWidth/2, windowHeight/2);
  image(this.logo, -1400, 20);
  image(this.waterIcon, width-157, 47);

  textSize(28);
  fill(255);
  text(liters, width-135, 55);

  textSize(80);

  // Spawn our elements
  spawnParticles();
  spawnMythicals();
  spawnAnimals();
}

function centerCanvas() {

  //Centers the canvas in the page. Hopefully this helps with responsive issues
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  canvas.position(x, y);
} 

function loadAnimals() {

  // Here, we simply load our arrays fro animals and we load the animations.
  for (var i = 0; i < 3; i++) {
    this.elephantsRight[i] = new Animal(-windowWidth, windowHeight - 200, 3, "elephant");
    this.elephantsRight[i].load();
  }

  for (var i = 0; i < 3; i++) {
    this.elephantsLeft[i] = new Animal(-100, windowHeight - 255, 3, "elephant");
    this.elephantsLeft[i].load();
  }
  for (var i = 0; i < 3; i++) {
    this.lionsLeft[i] = new Animal(0, windowHeight - 187, -3, "lion");
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

function userCopy() {

  // This function is called when the user clicks on the copy button. The page selects the whole content
  // within the textarea and then copies it to the clipboard. When the user is done typing, he can easily copy
  // paste it into another software that will allow him to format his text and count his words.
  var copyTextarea = document.getElementById("userInput");
  copyTextarea.select();
  document.execCommand('copy');
}


function userTypingInput() {

  //This function is the one which allows the program to recognize when there is user input. It controls
  // the typing delay and of course, the waterfall.
  typing = true;
  typingDelay = 10;
  clearInterval(interval);

  if (keyIsReleased) {
    // When user releases a key, typing becomes false and we restart the time delay with setInterval.
    typing = false;
    interval = setInterval(timeIt, 1000);
  }
}

function timeIt() {

  // Timer function. When it's running, it counts down to 0 and then clears.
  if (typingDelay == 0)
  {
    clearInterval(interval);
  } else {
    typingDelay--;
  }
}

function spawnMythicals() {

  // We spawn our mythical creature at a high lever of liters. We could have more than one.
  // (Because this is a bit of a prototype, the waiting times are quite short.
  if (liters > 800) {
    animation(this.unicorn, 1500, windowHeight/2);
    if (liters < 860) {
      image(this.unlocked, windowWidth/2, 120);
    }
  }
}

function spawnAnimals() {

  // We spawn ours animals gradually. Even if I am only using one of each animal, I have created arrays
  // so that, if I wish to develop this project further, the arrays are already there.
  // I have tried to find a way to generate them infinively, however I have been unsuccessful.
  if (liters > 300) {
    if (giraffes[1].x < waterfallMin - animalInset) {
      this.giraffes[1].moving();
    } else if (typingDelay > 0) {
      this.giraffes[1].drinking(this.giraffes[1].x);
    } else {
      this.giraffes[1].crying();
    }
  }

  if (liters > 50) {
    if (this.elephantsLeft[1].x < (waterfallMin - (animalInset+10))) {
      this.elephantsLeft[1].moving();
    } else if (typingDelay > 0) {
      this.elephantsLeft[1].drinking(this.elephantsLeft[1].x);
    } else {
      this.elephantsLeft[1].crying();
    }
  }

  if (liters > 100) {
    if (lionsRight[1].x > (waterfallMax - animalInset)) {
      this.lionsRight[1].moving();
    } else if (typingDelay > 0) {
      this.lionsRight[1].drinking(this.lionsRight[1].x);
    } else {
      this.lionsRight[1].crying();
    }
  }
  // I am using scale to rotate the animals so they can come from both sides.
  scale(-1, 1);
  if (liters > 200) {
    if (this.elephantsRight[1].x < ((waterfallMax - animalInset)*-1)) {
      this.elephantsRight[1].moving();
    } else if (typingDelay > 0) {
      this.elephantsRight[1].drinking(this.elephantsRight[1].x);
    } else {
      this.elephantsRight[1].crying();
    }
  }    

  if (liters > 400) {
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

function spawnParticles() {

  // We spawn our particles when the user is typing and when the typing delay is not at 0.
  colorMode(HSB, 360);

  // Spawn new particles only if the user is typing
  if (typing || typingDelay != 0) {
    for (var i = 0; i < spawnCount; i++) {
      var x = random(waterfallMin, waterfallMax);
      var mass = random(pMinMass, pMaxMass);

      // When a mythical creature appears, the waterfall changes color to a more eerie-like tone.
      if (liters >= 760 && liters <= 780) {
        displayColor = color(255, 170, random(120, 200));
      } else if (liters >= 780 && liters <= 800) {
        displayColor = color(255, random(120, 200), 255);
      } else {
        displayColor = color(random(180, 200), 255, 255);
      }

      // We create our array of particles with the constructor
      var newParticle = new Particle(x, 0, mass, displayColor);
      particles[particles.length] = newParticle;
    }
    
    if (typingDelay > 0) {

      // If the water is running, so is the water puddle.
      animation(this.waterPuddle, waterfallMax - 300, ground + 200);

      if (typingDelay < 6) {  
        text(typingDelay, width/2, height/2 + 10);

        if (typingDelay < 4) {
          textSize(30);
          text("Keep typing!", width/2 - 45, height/2 - 80);
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

  // This function is necessary so the program knows a key is released.
  keyIsReleased = true;
}


/*
Initial waterfall code :
 (I do not own it)
 
 Jason Labbe
 jasonlabbe3d.com
 */