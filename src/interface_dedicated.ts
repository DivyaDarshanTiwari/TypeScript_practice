interface vehicle {
  make: string;
  model: string;
  year: number;
}

const myCar: vehicle = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

interface calculator {
  (a: number): number;
}

const square: calculator = (a: number): number => {
  return a * a;
};

interface user {
  id: number;
}
//interface merging
interface user {
  name: string;
}

const user1: user = {
  id: 1,
  name: "Alice",
};

interface userpass extends user {
  password: string;
}
