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

for (let i = 0; i <= 8; i++) {
  if (i % 2 === 0) continue;
  if (i === 7) break;
  console.log(i);
}
