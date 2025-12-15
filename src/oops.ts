class vehicle {
  wheels: number;
  constructor(wheels: number) {
    this.wheels = wheels;
    console.log(this);
  }
}

const car = new vehicle(4);

class Human {
  private _intestines: number; // private field
  readonly eyes: number = 2; // readonly field
  static species: string = "Homo sapiens"; // static field
  constructor(intestines: number) {
    this._intestines = intestines;
  }
  get intestinesCount() {
    // getter
    return this._intestines;
  }
  set intestinesCount(value: number) {
    // setter
    if (value < 1) {
      throw new Error("A human must have at least one intestine.");
    }
    this._intestines = value;
  }
}

abstract class Animal {
  abstract makeSound(): void; // abstract method
  move(): void {
    console.log("The animal moves.");
  }
}

class Dog extends Animal {
  // subclass
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

class man {
  constructor(private x: Human) {} // composition
  printSpecies() {
    console.log(this.x.eyes);
  }
}
