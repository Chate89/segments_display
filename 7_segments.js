
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

  // ---------- 1 ---------- //
  // hour
  var hou = str(hour());
  if (hou.length < 2) {
    hou = "0"+str(hour());
  } else {
    hou = str(hour());
  }
  for (var i = 0; i < 2; i++) {
    digits[i].x = 100+(i)*digCan;
    digits[i].y = 70
    digits[i].onCol = colON1;
    digits[i].offCol = colOFF1;
    digits[i].display();
    digits[i].val = hou.slice(i, i+1);
  }
  // minutero
  var min = str(minute());
  if (min.length < 2) {
    min = "0"+str(minute());
  } else {
    min = str(minute());
  }
  for (var i = 2; i < 4; i++) {
    digits[i].x = 104+(i)*digCan;
    digits[i].y = 70
    digits[i].onCol = colON1;
    digits[i].offCol = colOFF1;
    digits[i].display();
    digits[i].val = min.slice(i-2, i-1);
  }
  // segundero
  var sec = str(second());
  if (sec.length < 2) {
    sec = "0"+str(second());
  } else {
    sec = str(second());
  }
  for (var i = 4; i < 6; i++) {
    digits[i].x = 108+(i)*digCan;
    digits[i].y = 70
    digits[i].onCol = colON1;
    digits[i].offCol = colOFF1;
    digits[i].display();
    digits[i].val = sec.slice(i-4, i-3);
  }
  // seperator
  for (var i = 0; i < 2; i++) {
    separators[i].x = 142+i*55;
    separators[i].y = 70;
    separators[i].onCol = colON1;
    separators[i].display();
  }

  // ---------- 2 ---------- //
  // hour
  var hou = str(hour());
  if (hou.length < 2) {
    hou = "0"+str(hour());
  } else {
    hou = str(hour());
  }
  for (var i = 0; i < 2; i++) {
    digits[i].x = 100+(i)*digCan;
    digits[i].y = 140
    digits[i].onCol = colON2;
    digits[i].offCol = colOFF2;
    digits[i].val = hou.slice(i, i+1);
    digits[i].display();
  }
  // minutero
  var min = str(minute());
  if (min.length < 2) {
    min = "0"+str(minute());
  } else {
    min = str(minute());
  }
  for (var i = 2; i < 4; i++) {
    digits[i].x = 104+(i)*digCan;
    digits[i].y = 140
    digits[i].onCol = colON2;
    digits[i].offCol = colOFF2;
    digits[i].display();
    digits[i].val = min.slice(i-2, i-1);
  }
  // segundero
  var sec = str(second());
  if (sec.length < 2) {
    sec = "0"+str(second());
  } else {
    sec = str(second());
  }
  for (var i = 4; i < 6; i++) {
    digits[i].x = 108+(i)*digCan;
    digits[i].y = 140
    digits[i].onCol = colON2;
    digits[i].offCol = colOFF2;
    digits[i].display();
    digits[i].val = sec.slice(i-4, i-3);
  }
  // seperator
  for (var i = 0; i < 2; i++) {
    separators[i].x = 142+i*55;
    separators[i].y = 140;
    separators[i].onCol = colON2;
    separators[i].display();
  }

  // ---------- 3 ---------- //
  // hour
  var hou = str(hour());
  if (hou.length < 2) {
    hou = "0"+str(hour());
  } else {
    hou = str(hour());
  }
  for (var i = 0; i < 2; i++) {
    digits[i].x = 100+(i)*digCan;
    digits[i].y = 210
    digits[i].onCol = colON3;
    digits[i].offCol = colOFF3;
    digits[i].display();
    digits[i].val = hou.slice(i, i+1);
  }
  // minutero
  var min = str(minute());
  if (min.length < 2) {
    min = "0"+str(minute());
  } else {
    min = str(minute());
  }
  for (var i = 2; i < 4; i++) {
    digits[i].x = 104+(i)*digCan;
    digits[i].y = 210
    digits[i].onCol = colON3;
    digits[i].offCol = colOFF3;
    digits[i].display();
    digits[i].val = min.slice(i-2, i-1);
  }
  // segundero
  var sec = str(second());
  if (sec.length < 2) {
    sec = "0"+str(second());
  } else {
    sec = str(second());
  }
  for (var i = 4; i < 6; i++) {
    digits[i].x = 108+(i)*digCan;
    digits[i].y = 210
    digits[i].onCol = colON3;
    digits[i].offCol = colOFF3;
    digits[i].display();
    digits[i].val = sec.slice(i-4, i-3);
  }
  // seperator
  for (var i = 0; i < 2; i++) {
    separators[i].x = 142+i*55;
    separators[i].y = 210;
    separators[i].onCol = colON3;
    separators[i].display();
  }

  // ---------- 4 ---------- //
  // hour
  var hou = str(hour());
  if (hou.length < 2) {
    hou = "0"+str(hour());
  } else {
    hou = str(hour());
  }
  for (var i = 0; i < 2; i++) {
    digits[i].x = 100+(i)*digCan;
    digits[i].y = 280
    digits[i].onCol = colON4;
    digits[i].offCol = colOFF4;
    digits[i].val = hou.slice(i, i+1);
    digits[i].display();
  }
  // minutero
  var min = str(minute());
  if (min.length < 2) {
    min = "0"+str(minute());
  } else {
    min = str(minute());
  }
  for (var i = 2; i < 4; i++) {
    digits[i].x = 104+(i)*digCan;
    digits[i].y = 280
    digits[i].onCol = colON4;
    digits[i].offCol = colOFF4;
    digits[i].display();
    digits[i].val = min.slice(i-2, i-1);
  }
  // segundero
  var sec = str(second());
  if (sec.length < 2) {
    sec = "0"+str(second());
  } else {
    sec = str(second());
  }
  for (var i = 4; i < 6; i++) {
    digits[i].x = 108+(i)*digCan;
    digits[i].y = 280
    digits[i].onCol = colON4;
    digits[i].offCol = colOFF4;
    digits[i].display();
    digits[i].val = sec.slice(i-4, i-3);
  }
  // seperator
  for (var i = 0; i < 2; i++) {
    separators[i].x = 142+i*55;
    separators[i].y = 280;
    separators[i].onCol = colON4;
    separators[i].display();
  }

}
