let x: string[];
x = ["a", "b", "c"];

type vehicle = {
  make: string;
};

const y: vehicle[] = [{ make: "Toyota" }, { make: "Honda" }, { make: "Ford" }];

let z: [name: string, age: number] = ["Alice", 30];

z = ["Bob", 25]; // cannot assign [25, "Bob"]

enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

function getColorName(color: Color): string {
  return Color[color];
  //Your enum is numeric. TypeScript compiles it into a two-way mapping object:
  /**
   * {
  0: "Red",
  1: "Green",
  2: "Blue",
  Red: 0,
  Green: 1,
  Blue: 2
}
   */
}

enum Status { //but not for string enums.
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING",
}

let favoriteColor: Color = Color.Blue;
let colorName: string = getColorName(favoriteColor);

let t: [number, string, boolean];
t = [42, "Hello", true];
// t = [42, "Hello"]; // Error: Tuple type '[number, string, boolean]' of length '3' has no element at index '2'.

//warning: Tuples have a fixed length, but you can still use methods like push to add elements beyond the defined length.
t.push(false); // Allowed, but not recommended as it breaks the tuple's fixed length concept
