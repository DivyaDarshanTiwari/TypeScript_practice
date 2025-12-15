function wrapInArray<T>(value: T): T[] {
  return [value];
}
//<T> is a generic type parameter that allows the function to accept any type of argument and return an array of that same type.

// Example usages:

wrapInArray(5); // Returns: [5]
wrapInArray("hello"); // Returns: ["hello"]
wrapInArray({ key: "value" }); // Returns: [{ key: "value" }]
wrapInArray([1, 2, 3]); // Returns: [[1, 2, 3]]

function pair<A, B>(first: A, second: B): [A, B] {
  return [first, second];
}

interface User<T> {
  id: T;
}

const user1: User<number> = { id: 1 };
const user2: User<string> = { id: "abc" };

interface APiPromise<T> {
  status: number;
  data: T;
}

const apiResponse: APiPromise<{ name: string; age: number }> = {
  status: 200,
  data: { name: "John", age: 30 },
};
