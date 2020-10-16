class Shape {
  constructor(name,sides,sideLength){
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }
  calcPerimeter() {
    let perimetre = 0;
    for (let i = 0; i < this.sides; ++i) {
      perimetre = perimetre + this.sideLength;
    }
    return 'le périmètre du ' +this.name +' vaut ' + perimetre + 'm';
  }
};

let Square = class extends Shape{
  constructor(sideLength){
    super("square",4);
    this.sideLength = sideLength;
  }
  calcArea(){
    let area = this.sideLength * this.sideLength;
    return "L'air de ce " +Square.name+" est de " + area + "m²";
  }
}

console.log(new Square(5).calcPerimeter());
console.log(new Square(5).calcArea());
