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
