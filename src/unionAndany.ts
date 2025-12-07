let subs: number | string | boolean; // union type
subs = 10;

console.log(`Subscribed to ${subs} channels`);
subs = "ten";
console.log(`Subscribed to ${subs} channels`);

let apiRequestStatus: "pending" | "sucess" | "error" = "pending"; // literal type
apiRequestStatus = "sucess";
console.log(`API request status: ${apiRequestStatus}`);

const order: number[] | string[] = ["12", `34`, "56"];
