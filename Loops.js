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

const nums = [10, 20, 30, 40];
const numsExperiment = [1, 2, 3, 4, 5];
const numsEvenFilter = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const numsGreaterThanTen = [5, 12, 8, 20, 3, 15];
const doubled = nums.map((num) => {
  return num * 2;
});

const doubledShortened = nums.map((num) => num * 3);
const addition = numsExperiment.map((num) => num + 5);

const evens = numsEvenFilter.filter((num) => num % 2 === 0);
const GT10 = numsGreaterThanTen.filter((num) => num > 10);

const result = numsGreaterThanTen.findIndex((num) => num > 10);

const totalReduce = nums.reduce((sum, num) => {
  return sum + num;
}, 0);

console.log("Total nums:", totalReduce);
console.log(nums.some((num) => num > 41));
console.log("findIndex result:", result);
console.log("Greater Than 10:", GT10);
console.log("Addition:", addition);
console.log("Doubled:", doubled);
console.log("Doubled shortened:", doubledShortened);
console.log("Number even Filter:", evens);
