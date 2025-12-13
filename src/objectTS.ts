type vehicleSizes = {
  size: string;
};

let maruti: vehicleSizes = {
  size: "small",
};

let bmw: vehicleSizes = {
  size: "medium",
};

bmw = maruti; // Valid: both have the same structure

type Brew = {
  brewTime: number;
};

const coffee = {
  brewTime: 5,
  temperature: 90,
};

const tea: Brew = coffee; // Valid: coffee has all properties of Brew

//Partial<> , Required<> , Pick<> , Omit<>

type Vehicle = {
  size: string;
  color: string;
  model: string;
};
const updateVehicle = (vehicle: Partial<Vehicle>) => {
  // Partial make all properties optional
  // Function implementation
  console.log("Updated vehicle size:", vehicle);
};

type Person = {
  name?: string;
  age?: number;
  address?: string;
};

const completePerson: Required<Person> = {
  // Required makes all properties mandatory
  name: "Alice",
  age: 30,
  address: "123 Main St",
};

const vehicleDetails: Pick<Vehicle, "size" | "model"> = {
  // Pick selects only specified properties
  size: "large",
  model: "X5",
};
const vehicleWithoutColor: Omit<Vehicle, "color"> = {
  // Omit removes specified properties
  size: "small",
  model: "Civic",
};
