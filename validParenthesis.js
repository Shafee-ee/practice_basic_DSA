function isValid(brackets) {
  const pairs = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);
  const stack = [];

  for (let i = 0; i < brackets.length; i++) {
    const current = brackets[i];

    //opening bracket
    if (current === "(" || current === "[" || current === "{") {
      stack.push(current);
      continue;
    }

    if (stack.length === 0) {
      return false;
    }

    const top = stack[stack.length - 1];

    if (pairs.get(current) !== top) {
      return false;
    }

    stack.pop();
  }

  return stack.length === 0;
}

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("{[]}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("((("));
