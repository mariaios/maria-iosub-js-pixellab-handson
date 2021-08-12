class Vehicle {
  constructor(
    make,
    color,
    wheels,
    speed,
    topSpeed = 160,
    topReverseSpeed = -15,
  ) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;
    this.topSpeed = topSpeed;
    this.topReverseSpeed = topReverseSpeed;
  }

  displaySpeed() {
    console.log(`Viteza curenta este: ${this.speed}.`);
  }

  accelerate() {
    // eu am viteza speed
    // vreau sa invoc setSpeed cu o valoarea
    // cu o unitate mai mare decat viteza curenta\
    this.setSpeed(this.speed + 1);
  }

  decelerate() {
    this.setSpeed(this.speed - 1);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
      this.displaySpeed();

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
      this.displaySpeed();

      return;
    }

    this.speed = speed;
    this.displaySpeed();
  }
}

class Car extends Vehicle {
  constructor(make, color, speed, topSpeed, topReverseSpeed) {
    // oarecum echivalent cu new Vehicle()
    super(make, color, 4, speed, topSpeed, topReverseSpeed);
  }
}

class Bicycle extends Vehicle {
  constructor(make, color, speed, topSpeed) {
    super(make, color, 2, speed, topSpeed, 0);
  }
}

// - _________ 0 ___________ +

const bike = new Bicycle('Pegas', 'red', 8, 20);
