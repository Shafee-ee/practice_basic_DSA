// const nums = [1, 2, 3, 4];

// for (let i = 0; i < nums.length; i++) {
//   for (let j = i + 1; j < nums.length; j++) {
//     const sum = nums[i] + nums[j];
//     if (sum % 2 === 0) {
//       console.log("Even sum", sum, "is made up of", nums[i], "and ", nums[j]);
//     }
//   }
// }

// let i = 0;

// while (i < 10) {
//   i += 2;

//   if (i === 6) continue;

//   console.log(i);
// }

// for (let i = 0; i <= 8; i++) {
//   if (i % 2 === 0) continue;
//   if (i === 7) break;
//   console.log(i);
// }

// const nums = [3, 6, 9, 12];

// for (const num of nums) {
//   console.log("first for of :", num * 2);
// }

// for(const num of nums){
//   if(num % 2){
//     console.log(nums)
//   }
// }

// const nums = [10, 20, 30, 40];
// const numsExperiment = [1, 2, 3, 4, 5];
// const numsEvenFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// const numsGreaterThanTen = [5, 12, 8, 20, 3, 15];
// const doubled = nums.map((num) => {
//   return num * 2;
// });

// const doubledShortened = nums.map((num) => num * 3);
// const addition = numsExperiment.map((num) => num + 5);

// const evens = numsEvenFilter.filter((num) => num % 2 === 0);
// const GT10 = numsGreaterThanTen.filter((num) => num > 10);

// const result = numsGreaterThanTen.findIndex((num) => num > 10);

// const totalReduce = nums.reduce((sum, num) => {
//   return sum + num;
// }, 0);

// const productReduce = nums.reduce((product, num) => {
//   return product * num;
// }, 0);

// console.log("Product nums:", totalReduce);

// console.log("Total nums:", totalReduce);
// console.log(nums.some((num) => num > 41));
// console.log("findIndex result:", result);
// console.log("Greater Than 10:", GT10);
// console.log("Addition:", addition);
// console.log("Doubled:", doubled);
// console.log("Doubled shortened:", doubledShortened);
// console.log("Number even Filter:", evens);

console.log("************* MAPS ************");
const nums = [20, 35, 57, 60];

const cubed = nums.map((num) => num * 3);

console.log("Cubed nums", cubed);

console.log("************* addition ************");

const added = nums.map((nums) => nums + 3);

console.log("Added 2 to each num:", added);

console.log("************* Filter ************");
const check5s = nums.filter((num) => num % 5 === 0);
console.log("check if number divisible by 5", check5s);

console.log("************* Reduce ************");

const productReduce = nums.reduce((product, num) => {
  return product * num;
}, 0);

console.log("Product reduce:", productReduce);

console.log("************* Reduce complex ************");
const cart = [
  { name: "Apples", price: 100 },
  { name: "oranges", price: 150 },
  { name: "Kiwi", price: 220 },
  { name: "Avacado", price: 100 },
];

const cartTotal = cart.reduce((sum, item) => {
  return sum + item.price;
}, 0);

console.log(cartTotal);

console.log("************* Reduce complex 2 ************");
const trips = [
  { transporter: "ABC", amount: 6000 },
  { transporter: "HIJ", amount: 9000 },
  { transporter: "ABC", amount: 8000 },
  { transporter: "HIJ", amount: 16000 },
];

const tripTotals = trips.reduce((acc, trip) => {
  acc[trip.transporter] = (acc[trip.transporter] || 0) + trip.amount;

  return acc;
}, {});

console.log(tripTotals);

console.log("************* Reduce complex 3 ************");

const products = [
  { id: 101, name: "apples" },
  { id: 202, name: "Orange" },
];

const productsById = products.reduce((acc, product) => {
  acc[product.id] = product;
  return acc;
}, {});

console.log(productsById[202]);

const tripsTest = [
  { transporter: "ABC", amount: 1000 },
  { transporter: "XYZ", amount: 2000 },
  { transporter: "ABC", amount: 3000 },
];

const tripsTestResult = tripsTest.reduce((acc, trip) => {
  acc[trip.transporter] = (acc[trip.transporter] || 0) + trip.amount;
  return acc;
}, {});

console.log("Trip test result:", tripsTestResult);

const numbers = [1, 2, 3, 4, 5, 6];

console.log("********************fandmNumbersResult***************");
const fandmNumbersResult = numbers.filter((num) => num % 2 === 0);
const resultExcercise = fandmNumbersResult.map((num) => num * 2);
console.log("Excercise 2:", resultExcercise);

console.log("********************Find Excercise***************");
const numbers2 = [10, 20, 30, 40, 50, 69];

const findExcercise = numbers2.find((num) => num > 30);
const findOdd = numbers2.some((num) => num % 2 != 0);
const findEvenAll = numbers2.every((num) => num % 2 === 0);
const findIndexOfResult = numbers2.findIndex((num) => num > 25);
console.log("First number greater than 30:", findExcercise);
console.log(
  "Find odd:",
  findOdd,
  "is every digit even:",
  findEvenAll,
  "find the index of first number greater than 25:",
  findIndexOfResult,
);

console.log("********************reduce exercise***************");

const numbersReduce = [10, 20, 30, 40, 50];

const reduceExercise = numbersReduce.reduce((acc, num) => acc + num, 0);
console.log("reduce sum exercise:", reduceExercise);
