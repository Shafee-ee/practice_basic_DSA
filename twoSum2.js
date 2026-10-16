function twoSum2(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [nums[left], nums[right]];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
}
const numbers = [2, 7, 11, 15];
const target = 26;
console.log("two sum II:", twoSum2(numbers, target));
