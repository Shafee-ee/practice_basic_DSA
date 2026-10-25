// console.log("A");
// setTimeout(() => {
//   console.log("B");
// }, 2000);

// console.log("C");

//Promise
// console.log("*************Promise Start*********");
// const promise = new Promise((resolve, reject) => {
//   resolve("Data received");
// });

// promise.then((result) => {
//   console.log(result);
// });

// console.log("******************* Promise 2 *************");

// console.log("A");
// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));
// console.log("D");

console.log("******************* Async code *************");

async function test() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

console.log("C");
test();
console.log("D");
