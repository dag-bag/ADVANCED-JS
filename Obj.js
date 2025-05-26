// let obj = {
//   name: "virender",
//   address: "RZC2-110   ",
// };
// Object.freeze(obj);

// obj.name = "Rahul Kumar";
// console.log(obj);

const set = new Set([1, 2, 3]);
Object.getPrototypeOf(set);
for (const value in set) {
  console.log(value); // 1, 2, 3
}
let str = "virender";
