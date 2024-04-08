let userHasClicked = false;

let riverSound;
let metalSound;



function preload() {
  soundFormats('mp3', 'ogg');
  riverSound = loadSound('assets/river.wav');
  metalSound = loadSound('assets/metal.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
 textAlign(CENTER)

riverSound.setVolume(1)

}

function draw() {
  let riverColor = color('blue');
  let metalColor = color('red');

  background('hotpink');

  if(userHasClicked == false){
      text('Hi, click to continue ayyyyy',
      width/2,
      height/2
      )
  } else { 
    
    if(riverSound.isPlaying() == false){
      riverSound.play();
    }

    if(metalSound.isPlaying() == false){
      metalSound.play();
    }


    let targetVolumeRiver = map(
      mouseX,
      0,
      width,
      0,
      1
    )
    riverSound.setVolume(targetVolumeRiver)

    let targetVolumeMetal = map(
      mouseX,
      0,
      width,
      1,
      0
    )
    metalSound.setVolume(targetVolumeMetal)

    let targetColor = lerpColor(metalColor, riverColor, targetVolumeRiver)
    background(targetColor)

    let distanceToMouse = dist(mouseX, mouseY, circleX, circleY);
    let newVolume = map(distanceToMouse, 0, 300, 1, 0)
    newVolume = constrain(newVolume, 0, 1);

    // circle(circleX, circleY, 50)

    riverSound.setVolume(newVolume)

  }


}

function mouseClicked(){
  userHasClicked = true;
}
