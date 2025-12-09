// forcefull annotation
let repsonse: any = "42";

let len = (repsonse as string).length; // forceful type assertion

type book = {
  title: string;
};

let myBook = '{"title": "TypeScript Handbook"}';

let bookObj = JSON.parse(myBook) as book; // type assertion after parsing JSON
console.log(bookObj.title);

// const input = document.getElementById("age") as HTMLInputElement; // type assertion for DOM element

try {
} catch (error) {
  if (error instanceof Error) console.log(error.message);
  console.log("Unknown error" + error);
}
// type narrowing with instanceof

type Role = "admin" | "user";

function getUserRole(role: Role): void {
  // use of type never , hover over role at the end to see never type
  if (role === "admin") {
    console.log("User is an admin");
    return;
  } else if (role === "user") {
    console.log("User is a regular user");
    return;
  }
  role;
}
