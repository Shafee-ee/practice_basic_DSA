console.log("**************** Print from both ends *****************");
const nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let left = 0;
let right = nums.length - 1;

while (left < right) {
  console.log(nums[left], nums[right]);
  left++;
  right--;
}

console.log("**************** check if pallindrome *****************");

function isValidPallindrome(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] !== nums[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
console.log(isValidPallindrome([1, 2, 3, 2, 1]));
console.log(isValidPallindrome([1, 2, 2, 1]));

console.log(isValidPallindrome([1, 2, 3, 2, 1, 8]));

console.log(isValidPallindrome(["a", "b", "c", "d", "e", "d", "c", "b", "a"]));

console.log("**************** Reverse and array in place *****************");

const numsReverse = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function reverseArray(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    //save the left value in temp
    let temp = nums[left];

    //move right value to left
    nums[left] = nums[right];

    nums[right] = temp;
    left++;
    right--;
  }

  return nums;
}

console.log(reverseArray(numsReverse));

console.log("**************** Two sum on a sorted Array *****************");

const num2Sum = [1, 2, 3, 4, 8, 10, 12];
const target = 12;

function twoSum(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return true;
    }
  }
}

console.log(twoSum(num2Sum, target));

console.log("**************** Two sum on a sorted Array *****************");
function twoSum2p(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];

    if (sum > target) {
      right--;
    } else if (sum < target) {
      left++;
    } else {
      return true;
    }
  }
  return false;
}
console.log(twoSum2p([1, 2, 3, 4, 5, 7, 3, 6, 7, 88], 93));
console.log(twoSum2p([1, 2, 3, 4], 20));

console.log("**************** Remove Duplicates *****************");
function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let write = 1;
  for (let read = 1; read < nums.length; read++) {
    if (nums[read] !== nums[read - 1]) {
      nums[write] = nums[read];
      write++;
    }
  }

  return write;
}

const numsDuplicate = [1, 1, 2, 2, 3, 4, 4, 5];
let write = 1;

const uniqueCount = removeDuplicates(numsDuplicate);
console.log(uniqueCount);
console.log(numsDuplicate.slice(0, uniqueCount));

console.log("****************Move Zeroes to end *****************");
function moveZeroes(nums) {
  let write = 0;

  for (let read = 0; read < nums.length; read++) {
    if (nums[read] !== 0) {
      [nums[write], nums[read]] = [nums[read], nums[write]];
      write++;
    }
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));

console.log("**************** Merge Two Sorted Arrays *****************");

function mergeSortedArrays(arr1, arr2) {
  let left = 0;
  let right = 0;
  const result = [];

  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] < arr2[right]) {
      result.push(arr1[left]);
      left++;
    } else {
      result.push(arr2[right]);
      right++;
    }
  }

  // Add any remaining elements from arr1
  while (left < arr1.length) {
    result.push(arr1[left]);
    left++;
  }

  // Add any remaining elements from arr2
  while (right < arr2.length) {
    result.push(arr2[right]);
    right++;
  }

  return result;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
// [1, 2, 3, 4, 5, 6]

console.log(mergeSortedArrays([1, 4, 8], [2, 3]));
// [1, 2, 3, 4, 8]

console.log("**************** Merge Two Sorted Arrays *****************");

function closestSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  let closestDiff = Infinity;
  let result = [];

  while (left < right) {
    const sum = arr[left] + arr[right];

    const difference = Math.abs(target - sum);

    if (difference < closestDiff) {
      closestDiff = difference;
      result = [arr[left], arr[right]];
    }

    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      return result;
    }
  }

  return {
    numbers: result,
    sum: result[0] + result[1],
  };
}
console.log(closestSum([1, 3, 4, 7, 10, 12], 25));

console.log("**************** Pair with a difference *****************");

function hasPairWithDifference(nums, target) {
  let left = 0;
  let right = 1;

  while (right < nums.length) {
    if (left === right) {
      right++;
      continue;
    }

    const diff = nums[right] - nums[left];
    if (diff === target) {
      return true;
    } else if (diff < target) {
      right++;
    } else {
      left++;
    }
  }
  return false;
}

console.log(hasPairWithDifference([1, 4, 7, 9], 2));
