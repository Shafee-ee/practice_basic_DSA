function maxArea(nums) {
  let left = 0;
  let right = nums.length - 1;
  let maxArea = 0;

  while (left < right) {
    let leftHeight = nums[left];
    let rightHeight = nums[right];
    let width = right - left;

    let currentArea = Math.min(leftHeight, rightHeight) * width;
    if (currentArea > maxArea) {
      maxArea = currentArea;
    }
    if (leftHeight < rightHeight) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
