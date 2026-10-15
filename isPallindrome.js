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
const str = "Race Car";
console.log(
  "is the given string a pallindrome(optimal solution)?",
  isPallindromeOptimal(str) ? "yes" : "no",
);
