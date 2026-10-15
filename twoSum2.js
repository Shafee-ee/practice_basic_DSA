function twoSum2(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [numbers[left], numbers[right]];
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
