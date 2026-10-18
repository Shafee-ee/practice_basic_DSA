console.log("********************split reverse join ***************");
const str = "hello";
const reverse = str.split("").reverse().join("");

console.log("cleaned string:", reverse);
console.log("********************closure***************");

function outer() {
  let count = 0;
  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter();
counter();
counter();

//closure
// outer() creates count = 0 and defines inner().

// outer() returns inner. We store that function in counter.

// Although outer() has finished executing, inner() still has access to its count variable.

// Each call to counter() increments that same count.

console.log("********************closure***************");

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter1 = outer();
const counter2 = outer();

counter1();
counter1();
counter2();
counter1();
counter2();

console.log("********************Closure3 ***************");

function createUser() {
  let name = "shafee";

  return function () {
    console.log(name);
  };
}

const getName = createUser();
getName();

console.log("********************Closure4 ***************");

function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
    },
    getCount() {
      return count;
    },
  };
}

const counterOne = createCounter();
const counterTwo = createCounter();

counterOne.increment();
counterOne.increment();
counterTwo.increment();

console.log(counterOne.getCount());
console.log(counterTwo.getCount());

console.log("********************Closure 5 Bank ***************");

function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit(amount) {
      balance += amount;
    },
    getBalance() {
      return balance;
    },
  };
}

const account = createBankAccount(1000);

account.deposit(500);

console.log(account.getBalance());
console.log(account.balance);
console.log("********************Closure hello ***************");

function outer(newMessage) {
  let message = newMessage;
  return function (goodbyeMessage) {
    console.log(message);
    console.log(goodbyeMessage);
  };
}

const sayHello = outer("hello");
sayHello("Goobye");

console.log("********************Closure hello ***************");

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const fn = outer();
fn();
fn();

const fn2 = outer();
fn2();
fn();
