
let colors = ['white', 30]
 
function setup() {
    createCanvas(windowWidth, windowHeight);

    frameRate(30)
    
    angleMode(DEGREES);

    background(random(0, 50), 0, random(0, 50))

}
 
function draw() {

    

    strokeWeight(0.5)

    fill(200, random (170, 220), 255)
    ellipse(0, 0, random(1, 300))

    fill(200, random (70, 120), 100)
    ellipse(1100, 200, random(1, 120))

    fill(50, 100, random (20, 80))
    ellipse(1550, 450, random(1, 100))

    fill(random (30, 70), 50, 120)
    ellipse(1700, 800, random(1, 70))

    strokeWeight(1)

    fill(random(colors))
    triangle(1300, 600, 1350, 600, 1325, random(300, 600));


    fill(random(180, 250), random(100, 160), 50)
    triangle(1310, 600, 1340, 600, 1325, random(600, 1500));
    
    

    fill(255);
  ellipse(random(1, 2000), random(1, 1000), 2, 2);

  fill(255);
  ellipse(random(1, 2000), random(1, 1000), 3, 3);

  fill(255);
  ellipse(random(1, 2000), random(1, 1000), 2, 2);

  fill(255);
  ellipse(random(1, 2000), random(1, 1000), 1, 1);
  fill(255);
  ellipse(random(1, 2000), random(1, 1000), 1, 1);
  fill(255);
  ellipse(random(1, 2000), random(1, 1000), 1, 1);
  fill(255);
  ellipse(random(1, 2000), random(1, 1000), 1, 1);
  fill(255);
  ellipse(random(1, 2000), random(1, 1000), 1, 1);
  fill(255);
  ellipse(random(1, 2000), random(1, 1000), 1, 1);
  fill(255);
  ellipse(random(1, 2000), random(1, 1000), 1, 1);
  fill(255);
  ellipse(random(1, 2000), random(1, 1000), 1, 1);

  fill(255, 150, 150);
  ellipse(random(1, 2000), random(1, 1000), 3, 3);
  fill(150, 150, 255);
  ellipse(random(1, 2000), random(1, 1000), 3, 3);


    
      fill(100, 120, 255)
      let angle = frameCount * 1;
      shearX(45);
      rotate(angle);
rect(200, 200, random(1, 300), 300)
fill(random(80, 150), 90, random(180, 250))
rect(400, 400, random(1, 100), 100)

}

function mouseClicked(){
    save('myCanvas.png');
  }
