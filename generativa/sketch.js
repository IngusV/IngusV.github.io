let height1 = 10 
let width1 = ['100', '200', '300', '400', '500', '600', ]
let height2 = ['100', '200', '300', '400', '500', '600', ]
let colors = ['black', 'red', 'blue', 'green', 'yellow', 'pink', ]
// Load the image and create a p5.Image object.

 
function setup() {
    createCanvas(windowWidth, windowHeight);

    frameRate(60)

    
}
 
function draw() {
    background(255, 255, 255);
 


    fill(random(colors))

    rect(10, 10, random(width1), 10)
    fill(random(colors))

    rect(10, 110, random(width1), 10)
    fill(random(colors))
    
    rect(10, 210, random(width1), 10)
    fill(random(colors))

    rect(10, 310, random(width1), 10)
    fill(random(colors))
    
    rect(10, 410, random(width1), 10)
    fill(random(colors))

    rect(10, 510, random(width1), 10)
    fill(random(colors))
    


    rect(10, 10, 10, random(height2))
    fill(random(colors))

    rect(110, 10, 10, random(height2))
    fill(random(colors))
    
    rect(210, 10, 10, random(height2))
    fill(random(colors))

    rect(310, 10, 10, random(height2))
    fill(random(colors))
    
    rect(410, 10, 10, random(height2))
    fill(random(colors))

    rect(510, 10, 10, random(height2))
  



    textSize(20);
    stroke(0);
    strokeWeight(1);
    fill ('black')
    text('Click anywhere to redraw!  Spied jebkur lai izveidotu jaunu zīmējumu!', 50, 650);
    
    

    noLoop()

    
}


    


function mousePressed() {
    redraw();
  }
