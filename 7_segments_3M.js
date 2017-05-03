
var digits = [];
var separators = [];
var numSep = 20;
var numDig = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colON1 = color(200, 30, 0);      // RED
  colON2 = color(40, 200, 0);      // GREEN
  colON3 = color(0, 150, 255);      // BLUE
  colON4 = color(255);             //WHITE
  colOFF1 = color(25, 0, 0);
  colOFF2 = color(0, 25, 0);
  colOFF3 = color(0, 0, 25);
  colOFF4 = color(20);

    for (var i = 0; i < numDig; i++) {
      digits[i] = new Digit();
    }
    for (var i = 0; i < numSep; i++) {
      separators[i] = new Separator();
    }
}

function draw() {
  background(0);
  noStroke();

  var vM = map(mouseX, 0, windowWidth, 0, 101);
  var gain = str(floor(vM));
  if (gain.length < 2) {
    gain = "**"+str(gain);
  } else if (gain.length < 3) {
    gain = "*"+str(gain);
  } else {
    gain = str(gain);
  }
  console.log(gain);
  for (var i = 0; i < 3; i++) {
    digits[i].x = windowWidth/2-50+(i)*digCan;
    digits[i].y = 280
    digits[i].onCol = colON4;
    digits[i].offCol = colOFF4;
    digits[i].val = gain.slice(i, i+1);
    digits[i].display();
  }
}
