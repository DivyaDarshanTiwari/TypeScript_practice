type animal = {
  name: string;
  age: number;
  breed: string;
};

class animalKingdom implements animal {
  // Implementing the animal interface
  name: string = "Lion";
  age: number = 5;
  breed: string = "Panthera leo";
}

type vehicale = "small" | "medium" | "large"; // union type

// class car implements vehicale { //A class can only implement an object type or intersection of object types with statically known members
//     size: vehicale;

// }

interface person {
  firstName: string;
  lastName: string;
  age: number;
  size: "small" | "medium" | "large";
}

class employee implements person {
  // Implementing the person interface
  firstName: string = "John";
  lastName: string = "Doe";
  age: number = 30;
  size: "small" | "medium" | "large" = "large"; // Correctly implementing the size property
}

type response =
  | {
      ok: true;
    }
  | {
      ok: false;
    };

// class apiResponse implements response {
//   // error: A class can only implement an object type or intersection of object types with statically known members, meaining we cannot implement a union type directly
//   ok: boolean = true;
// }

type eyes = {
  color: string;
  size: number;
};

type mouth = {
  shape: string;
};

type nose = {
  length?: number; // optional property , value may or may not be present
};

type face = eyes & mouth & nose; // intersection type

const personFace: face = {
  // did not include optional property 'length' from nose type
  color: "blue",
  size: 5,
  shape: "round",
};

type config = {
  host: string;
  readonly port: number;
  protocol: "http" | "https";
};

const serverConfig: config = {
  host: "localhost",
  port: 8080,
  protocol: "http",
};
console.log(serverConfig);

serverConfig.host = "192.168.0.1"; // valid

// serverConfig.port = 9090; // error: Cannot assign to 'port' because it is a read-only property

console.log(serverConfig);
