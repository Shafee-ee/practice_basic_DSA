function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const count = new Map();
  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    count.set(char, (count.get(char) || 0) + 1);
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];

    if (!count.has(char)) {
      return false;
    }
    count.set(char, count.get(char) - 1);
    if (count.get(char) < 0) {
      return false;
    }
  }
  return true;
}

const str1 = "anagram";
const str2 = "nagaram";

const str3 = "rat";
const str4 = "car";

console.log(isAnagram(str1, str2));
console.log(isAnagram(str3, str4));
