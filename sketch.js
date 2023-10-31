var leaves = [];
function setup(){
    createCanvas(800, 800); 
    background(129, 220, 255);  
    angleMode(DEGREES); 

    tree = new Tree(100);
    noLoop(); 

}

function draw(){
  
  push();
  translate(50, 780);
   leaves = tree.branch(200);
  pop(); 

  for(let i = 0; i<leaves.length; i++){
    print(leaves[i].y);
}


}