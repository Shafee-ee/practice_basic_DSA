//An anagram is a word or phrase formed by rearranging the letters of a different word or phrase using all the original letters exactly once
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const used = new Array(str2.length).fill(false);

  for (let i = 0; i < str1.length; i++) {
    let found = false;
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j] && !used[j]) {
        used[j] = true;
        found = true;
        break;
      }
    }

    if (!found) {
      return false;
    }
  }
  return true;
}

function isAnagramOptimal(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const count = new Map();

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];

    count.set(char, (count.get(char) || 0) + 1);
  }

  for (let j = 0; j < str2.length; j++) {
    const char = str2[j];

    count.set(char, count.get(char) - 1);
    if (count.get(char) < 0) {
      return false;
    }
  }
  return true;
}
const str1 = "aabcchkkli";
const str2 = "baakklicch";

console.log(isAnagram(str1, str2));
console.log(isAnagramOptimal(str1, str2));
