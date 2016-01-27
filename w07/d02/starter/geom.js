function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype =  {
  isSquare: function() {
    console.log((2*this.length + 2*this.width));
    if ((2*this.length + 2*this.width) === (4*this.length)) {
      return true;
    }
  },
  area: function() {
    return this.length * this.width;
  },
  perimeter: function() {
    return this.length + this.width + this.length + this.width;
  }
};

function Triangle(sideA, sideB, sideC) {
  this.sideA = sideA;
  this.sideB = sideB;
  this.sideC = sideC;
}
Triangle.prototype = {
  isEquilateral: function() {
    if ((this.sideA === this.sideB) && (this.sideB === this.sideC)) {
      return true;
    }
  },
  isIscoceles: function() {
    if ((this.sideA === this.sideB) && (this.sideB !== this.sideC)) {
      return true;
    } else if ((this.sideA !== this.sideB) && (this.sideB === this.sideC)) {
      return true;
    }
  },
  area: function() { //1/2 * h*b

  },
  isObtuse: function() { //one angle > 90

  }
};

function LineSegment(x1, y1, x2, y2) {
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
}
LineSegment.prototype = {
  length: function() { //(x1+x2)**2 + (y1+y2)**2
    return Math.sqrt( Math.pow(Math.abs(this.x1+this.x2), 2) + Math.pow(Math.abs(this.y1+this.y2), 2) );
  }
};

var rect = new Rectangle(4, 6);
console.log(rect.isSquare());
console.log(rect.area());
console.log(rect.perimeter());

var tri = new Triangle(3, 3, 3);
console.log(tri.isEquilateral());
console.log(tri.isIscoceles());
console.log(tri.area());
console.log(tri.isObtuse());

var line = new LineSegment(1, 1, 4, 4);
console.log(line.length());



