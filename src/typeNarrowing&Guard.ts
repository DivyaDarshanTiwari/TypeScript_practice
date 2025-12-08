function numberORString(value: number | string) {
  /* This narrowing of the types helps in development .
   *  eg. if we enter a dot after value. we will get the methods of string only if we check for string type
   *  else we will get methods of number only.
   */
  // Type Narrowing with typeof
  if (typeof value === "string") {
    return `${value} is a string`;
  }
  return `${value} is a number`;
}

function truthyValue(value?: string) {
  // Type Guard with truthy check
  // "?" tells that the value can be undefined, "?" mark is optional chaining operator, make the value optional
  if (value) {
    return `Value is present: ${value}`;
  }
  return "No value provided";
}

//Exhaustive Check with types
function getShape(shape: "circle" | "square" | "rectangle" | number) {
  if (shape === "circle") {
    return "You selected circle";
  } else if (shape === "square") {
    return "You selected square";
  } else if (shape === "rectangle") {
    return "You selected rectangle";
  }

  return `the shape has ${shape} sides`;
}

class Dog {
  // User-defined Type using classes
  language() {
    return "Woof Woof";
  }
}
class Cat {
  language() {
    return "Meow Meow";
  }
}

function getAnimalSound(animal: Dog | Cat) {
  // Type Guard with instanceof
  if (animal instanceof Dog) {
    return animal.language();
  }
  return animal.language();
}

type guitar = {
  //user-defined Type using type alias
  brand: string;
  strings: number;
};

function isGuitar(obj: any): obj is guitar {
  // User-defined Type Guard
  return (
    typeof obj === "object" &&
    obj !== null &&
    typeof obj.brand === "string" &&
    typeof obj.strings === "number"
  );
}

function checkIfGuitar(obj: any) {
  // User-defined Type Guard
  if (isGuitar(obj)) {
    return `This is a guitar of brand ${obj.brand} with ${obj.strings} strings.`;
  }
  return "This is not a guitar.";
}

type samosa = {
  type: "salty";
  price: number;
};
type gulabJammun = {
  type: "sweet";
  price: string;
};
type food = samosa | gulabJammun;

function getFoodPrice(item: food) {
  // Exhaustive Check with  union types

  switch (item.type) {
    case "salty":
      return `The price of samosa is ${item.price} rupees.`;
    case "sweet":
      return `The price of gulab jammun is ${item.price}.`;
    default:
      const _exhaustiveCheck: never = item;
      return _exhaustiveCheck;
  }
}

function knowTheUnknown(value: unknown) {
  // Type Guard with unknown type
  if (typeof value === "string") {
    return `The string is: ${value}`;
  } else if (typeof value === "number") {
    return `The number is: ${value}`;
  } else {
    return "Unknown type";
  }
}
