let userHasClicked = false;

let t1Sound;
let t2Sound;



function preload() {
  soundFormats('mp3', 'ogg');
  t1Sound = loadSound('assets/BDKMV2.wav');
  t2Sound = loadSound('assets/BDKMV1.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
 textAlign(CENTER)

t1Sound.setVolume(1)

}

function draw() {
  let riverColor = color('blue');
  let metalColor = color('red');

  background('hotpink');

  if(userHasClicked == false){
      text('Hi, click to continue this super cool interactive soundscape with sound effects',
      width/2,
      height/2
      )
  } else { 
    
    if(t1Sound.isPlaying() == false){
      t1Sound.play();
    }

    if(t2Sound.isPlaying() == false){
      t2Sound.play();
    }


    let targetVolume1 = map(
      mouseX,
      0,
      width,
      0,
      1
    )
    t1Sound.setVolume(targetVolume1)

    let targetVolume2 = map(
      mouseX,
      0,
      width,
      1,
      0
    )
    t2Sound.setVolume(targetVolume2)

    

  }


}

function mouseClicked(){
  userHasClicked = true;
}
