var digCan = 26;

function Digit() {

  this.x;
  this.y;
  this.val;

  this.an = 2;
  this.al = 10;
  this.sep = 1;
  this.anT = -2;
  this.alT = -2;
  this.onCol = color(255, 0, 0);
  this.offCol = 20;
  this.sepDigCan = 1;
  this.digCan = this.an*2+this.al*2+this.anT+this.sep*2+this.sepDigCan;

  this.display = function() {
    this.xM = this.x;
    this.yM = this.y;
    this.xUL = this.x-this.al-this.sep-this.anT;
    this.yUL = this.y-this.al-this.sep-this.alT;
    this.xU = this.x;
    this.yU = this.y-this.al*2-this.sep*2-this.alT*2;
    this.xUR = this.x+this.al+this.sep+this.anT;
    this.yUR = this.y-this.al-this.sep-this.alT;
    this.xDR = this.x+this.al+this.sep+this.anT;
    this.yDR = this.y+this.al+this.sep+this.alT;
    this.xD = this.x;
    this.yD = this.y+this.al*2+this.sep*2+this.alT*2;
    this.xDL = this.x-this.al-this.sep-this.anT;
    this.yDL = this.y+this.al+this.sep+this.alT;

    // middle (horizontal) M
    if (this.val == 0 || this.val == 1 || this.val == 7 || this.val == null) {
      fill(this.offCol);
    } else {
      fill(this.onCol);
    }
    beginShape();
      vertex(this.xM-this.al-this.anT, this.yM);
      vertex(this.xM-this.al-this.anT+this.an, this.yM-this.an);
      vertex(this.xM+this.al+this.anT-this.an, this.yM-this.an);
      vertex(this.xM+this.al+this.anT, this.yM);
      vertex(this.xM+this.al+this.anT-this.an, this.yM+this.an);
      vertex(this.xM-this.al-this.anT+this.an, this.yM+this.an);
    endShape(CLOSE);

    // up left segment (vertical) UL
    if (this.val == 1 || this.val == 2 || this.val == 3 || this.val == 7 ||
       this.val == null || this.val == "-") {
      fill(this.offCol);
    } else {
      fill(this.onCol);
    }
    beginShape();
      vertex(this.xUL, this.yUL-this.al-this.alT);
      vertex(this.xUL+this.an, this.yUL-this.al+this.an-this.alT);
      vertex(this.xUL+this.an, this.yUL+this.al-this.an+this.alT);
      vertex(this.xUL, this.yUL+this.al+this.alT);
      vertex(this.xUL-this.an, this.yUL+this.al-this.an+this.alT);
      vertex(this.xUL-this.an, this.yUL-this.al+this.an-this.alT);
    endShape(CLOSE);

    // up segment (horizontal) U
    if (this.val == 1 || this.val == 4 || this.val == null || this.val == "-") {
      fill(this.offCol);
    } else {
      fill(this.onCol);
    }
    beginShape();
      vertex(this.xU-this.al-this.anT, this.yU);
      vertex(this.xU-this.al-this.anT+this.an, this.yU-this.an);
      vertex(this.xU+this.al+this.anT-this.an, this.yU-this.an);
      vertex(this.xU+this.al+this.anT, this.yU);
      vertex(this.xU+this.al+this.anT-this.an, this.yU+this.an);
      vertex(this.xU-this.al-this.anT+this.an, this.yU+this.an);
    endShape(CLOSE);

    // up right segment (vertical) UD
    if (this.val == 5 || this.val == 6 || this.val == null || this.val == "-") {
      fill(this.offCol);
    } else {
      fill(this.onCol);
    }
    beginShape();
      vertex(this.xUR, this.yUR-this.al-this.alT);
      vertex(this.xUR+this.an, this.yUR-this.al+this.an-this.alT);
      vertex(this.xUR+this.an, this.yUR+this.al-this.an+this.alT);
      vertex(this.xUR, this.yUR+this.al+this.alT);
      vertex(this.xUR-this.an, this.yUR+this.al-this.an+this.alT);
      vertex(this.xUR-this.an, this.yUR-this.al+this.an-this.alT);
    endShape(CLOSE);

    // down right segment (vertical) DR
    if (this.val == 2 || this.val == null || this.val == "-") {
      fill(this.offCol);
    } else {
      fill(this.onCol);
    }
    beginShape();
      vertex(this.xDR, this.yDR-this.al-this.alT);
      vertex(this.xDR+this.an, this.yDR-this.al+this.an-this.alT);
      vertex(this.xDR+this.an, this.yDR+this.al-this.an+this.alT);
      vertex(this.xDR, this.yDR+this.al+this.alT);
      vertex(this.xDR-this.an, this.yDR+this.al-this.an+this.alT);
      vertex(this.xDR-this.an, this.yDR-this.al+this.an-this.alT);
    endShape(CLOSE);

    // down segment (horizontal) D
    if (this.val == 1 || this.val == 4 || this.val == 7 || this.val == null || this.val == "-") {
      fill(this.offCol);
    } else {
      fill(this.onCol);
    }
    beginShape();
      vertex(this.xD-this.al-this.anT, this.yD);
      vertex(this.xD-this.al-this.anT+this.an, this.yD-this.an);
      vertex(this.xD+this.al+this.anT-this.an, this.yD-this.an);
      vertex(this.xD+this.al+this.anT, this.yD);
      vertex(this.xD+this.al+this.anT-this.an, this.yD+this.an);
      vertex(this.xD-this.al-this.anT+this.an, this.yD+this.an);
    endShape(CLOSE);

    // down left segment (vertical) DL
    if (this.val == 1 || this.val == 3 || this.val == 4 || this.val == 5 ||
      this.val == 7 || this.val == 9 || this.val == null || this.val == "-") {
      fill(this.offCol);
    } else {
      fill(this.onCol);
    }
    beginShape();
      vertex(this.xDL, this.yDL-this.al-this.alT);
      vertex(this.xDL+this.an, this.yDL-this.al+this.an-this.alT);
      vertex(this.xDL+this.an, this.yDL+this.al-this.an+this.alT);
      vertex(this.xDL, this.yDL+this.al+this.alT);
      vertex(this.xDL-this.an, this.yDL+this.al-this.an+this.alT);
      vertex(this.xDL-this.an, this.yDL-this.al+this.an-this.alT);
    endShape(CLOSE);

  }
}
function Separator() {
  this.x=200;
  this.y=10;
  this.onCol = 255;
  this.display = function() {
    this.al = 8;
    this.up = this.y-this.al;
    this.down = this.y+this.al;
    fill(this.onCol);
    ellipse(this.x, this.up, this.al/2)
    ellipse(this.x, this.down, this.al/2)
  };
}
