
let leafA;
var leaf = []; 
var singleLeaf = []; 
function setup(){
    createCanvas(800, 800); 
    background(129, 220, 255);  
    noStroke(); 
    noLoop(); 
    tree = new Tree(100); 

}

function draw(){

  //background(129, 220, 255); 

  push();
  angleMode(DEGREES); 
  translate(50, 780);
     leaf = tree.branch(200);
     /*
     for(let i = 0; i<leaf.length; i++){
      fill(255); 
      noStroke(); 
      ellipse(leaf[i].x, leaf[i].y, 5, 15); 
      console.log("Displaying ellipse at:", leaf[i].x, leaf[i].y);
      singleLeaf.push(new Leaf(leaf[i].x+50, leaf[i].y+50, 5, 15)); */ 
    }
  pop(); 

  for(let i = 0; i<singleLeaf.length; i++){
    singleLeaf[i].display(); 
  }




