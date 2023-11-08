function setup(){
  angleMode(RADIANS); //changes every angle used after this point to radians mode
    createCanvas(800, 800); //creates a canvas 800x800 pixels
    background(129, 220, 255);  //sets background to a light blue color
    noStroke(); //disables drawing stroke
    
    tree = new Tree(100); //creates a new Tree object named Tree


}

let snow = []; //creates an array named snow that will hold all the individual snow particles

function snowing() {
  this.posX = 0; // initialize x coordinate
  this.posY = random(-50, 0); //initialize y coordinate with random value
  this.initialangle = random(10, 0 * PI); //initialize angle
  this.size = random(5, 10); //initialize size with random 

  //below portion (all the hard angles and math) was referenced from here:https://editor.p5js.org/abrock/sketches/SyyaEusom
  this.radius = sqrt(random(pow(width / 1, 2))); //initialize radius with random value
  this.update = function(time) { // x position follows a circle
    let w = 0.1; // angular speed
    let angle = w * time + this.initialangle; //calculates new angle
    this.posX = width / 1 + this.radius * tan(angle); //calculates tangent of the angle the snow fall
    this.posY += pow(this.size, 0.5); //updates posY

    if (this.posY > height) { // deletes snowing if past end of screen
      let index = snow.indexOf(this);
      snow.splice(index, 1);
    }
  };
  this.display = function() { //display function will display the falling snow
    ellipse(this.posX, this.posY, this.size);
  };
}

function draw() {
  background(153, 235, 255);  //updates background blue color
  let t = frameCount / 100; //updates time

  for (var i = 0; i < 10; i++) {
    snow.push(new snowing()); //fills the snow array with snowing objects
  } //random number of snow each frame

  //loop through snow
  for (let snowA of snow) {
    snowA.update(t); //update snowing position
    snowA.display(); //draw snowing
  }

  push(); //I use matrices so that translate() wouldn't affect the snow
  translate(0, 780);
     tree.branch(200); // call to the tree branch() function draws the tree
  pop();
}


  




