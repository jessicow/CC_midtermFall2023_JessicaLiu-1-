let c = 50;
let d=50;
let click=1;  
let e=0;
let arr;

let r, b, g; 

function setup()
{
  createCanvas(800, 800);
  background(255); 
}

function mouseDragged()
{
    if(mouseX<400 && mouseY<400)
    {
      stroke(0, 50);
      fill(255, 0); 
      
      c=1;
      d=1;
      
      for(let x=mouseX; x<mouseX+1; x++)
        {
          for(let y=mouseY-30; y<mouseY; y++)
            {
              myCluster(x, y, c, d); 
            }
        }
      
    }
  if(mouseX>400 && mouseY<400)
    {
      stroke(0, 50);
      fill(255, 0); 
      
      c=20;
      d=20;
      
       for(let x=mouseX; x<mouseX+3; x++)
        {
          for(let y=mouseY-10; y<mouseY; y++)
            {
              myCluster(x, y, c, d); 
            }
        }
    }
  
  if(mouseX<400 && mouseY>400)
    {
      c=50;
      d=50; 
      
      stroke(0, 50);
      fill(255);
      
      for(let x=mouseX; x<mouseX+30; x++)
        {
          for(let y = mouseY; y<mouseY+30; y++)
            {
              myCluster(x, y, c, d); 
            }
        }
    }
  
  if(mouseX>400 && mouseY>400)
    {
         for(c=0; c<5; c++)
           {
             for(d=0; d<5; d++)
               {
                 myCluster(mouseX, mouseY, c, d); 
               }
           }
    }
}

function myCluster(a, b, c, d)
{
  ellipse(a, b, c, d);
  ellipse(a, b+20, c, d);
  ellipse(a-10, b+10, c, d);
  ellipse(a+10, b+10, c, d); 

} 
