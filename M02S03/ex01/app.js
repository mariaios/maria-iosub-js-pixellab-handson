class Car {
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
  }

  accelerate() {
    this.speed++;

    return this;
  }

  decelerate() {
    this.speed--;

    return this;
  }
}

const audi = new Car('Audi', 'black', 4, 50);

audi
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .accelerate()
  .decelerate()
  .decelerate()
  .decelerate();

const paragraphElement = document.createElement('p');
paragraphElement.innerText = `Viteza masini ${audi.make} este ${audi.speed}.`;

document.body.append(paragraphElement);
