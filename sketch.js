var soundtrack1;
var analyzer;
var img;
var star;
var vol = 0;
var marioFont;

function preload() {
  soundtrack1 = loadSound("./assets/Mario64Theme.mp3");
  img = loadImage("./assets/Mario.png");
  star = loadImage("./assets/Star.png");
  marioFont = loadFont('./assets/SuperMario256.ttf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  analyzer = new p5.Amplitude();
  analyzer.setInput(soundtrack1);

}

function draw() {
  var xCheck;
  var yCheck;
  background("#2967d8");
  fill('#dcdcdc');
  //Inserimento testi
  textFont("Oswald");
  textSize(30);
  text('Tap on the screen and on the star!', windowWidth / 2 + 100, windowHeight / 2);
  textFont(marioFont);
  textSize(150);
  text('Super', windowWidth / 2 + 100, windowHeight / 2 - 200);
  textSize(180);
  text('Mario', windowWidth / 2 + 100, windowHeight / 2 - 50);
  imageMode(CENTER);
  image(star, windowWidth / 2 + 400, windowHeight / 2 + 200, 90, 90);
  //Avvio musica
  if(mouseIsPressed) {
    if (soundtrack1.isPlaying() == false) {
      soundtrack1.play();
    }
  }
  //Controllo puntatore che passa sulla stella
    if (mouseX >= (windowWidth / 2 + 400) - 45 &&
      mouseX <= (windowWidth / 2 + 400) + 45 && mouseY >= (windowHeight / 2 + 200) - 45 &&
      mouseY <= (windowHeight / 2 + 200) + 45) {
      image(star, windowWidth / 2 + 400, windowHeight / 2 + 200, 400, 400);
      soundtrack1.rate(4);
    }
    else {
      soundtrack1.rate(1);
    }
  vol = analyzer.getLevel();
  vol = map(vol, 0, 100, 0, 100);
  image(img, windowWidth / 4, windowHeight / 2, (img.width / 1.5) * vol * 5, (img.height / 1.5) * vol * 5);

}
