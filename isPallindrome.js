function isPallindromeOptimal(str) {
  const stringCleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const cleanedReversed = stringCleaned
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  if (stringCleaned === cleanedReversed) {
    return true;
  }
  return false;
}

function isPallindromeTwoPointer(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = cleaned.length - 1;

  while (left < right) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

const str = "Race Car";
console.log(
  "is the given string a pallindrome(optimal solution)?",
  isPallindromeTwoPointer(str) ? "yes" : "no",
);
console.log(
  "is the given string a pallindrome(optimal solution)?",
  isPallindromeOptimal(str) ? "yes" : "no",
);
