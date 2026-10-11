function longestConsecutive(nums) {
  const sorted = nums.sort((a, b) => a - b);

  if (nums.length === 0) return 0;
  let longestLength = 1;
  let currentLength = 1;

  for (let i = 1; i < nums.length; i++) {
    if (sorted[i] === sorted[i - 1] + 1) {
      currentLength++;
    } else if (sorted[i] === sorted[i - 1]) {
      continue;
    } else {
      currentLength = 1;
    }

    if (currentLength > longestLength) {
      longestLength = currentLength;
    }
  }
  return longestLength;
}

function longestOptimal(nums) {
  const numSet = new Set(nums);
  let longestLength = 0;

  for (const num of numSet) {
    //start counting only if this number has no predecessors.

    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      //keep counting while the next number exists

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }

      if (currentLength > longestLength) {
        longestLength = currentLength;
      }
    }
  }
  return longestLength;
}

const nums = [15, 3, 1, 2, 4, 808, 5, 6, 100, 7, 8];
console.log("the longest cosecutive number is:", longestConsecutive(nums));
console.log(
  "The longest consecutive number (Optimal) is:",
  longestOptimal(nums),
);
