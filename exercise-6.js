class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(x) {    
    if (x instanceof Circle) {
      return Math.PI * (x.radius + x.radius)
    }
    else if (x instanceof Square) {
       return x.side * x.side;
    }
    else if (x instanceof Rectangle) {
      return x.width * x.height;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));


