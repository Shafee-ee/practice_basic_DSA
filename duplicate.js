function duplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

function duplicateOptimal(arr) {
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (seen.has(arr[i])) {
      return true;
    }

    seen.add(arr[i]);
  }

  return false;
}

const arr = ["a", 2, 3, 4, 5, "a"];
console.log(duplicate(arr));
console.log(duplicateOptimal(arr));
