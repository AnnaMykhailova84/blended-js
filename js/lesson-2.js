console.log("     ***   ");
console.log("lesson-2.js");

console.log("========= EXERCISE #1  array['jazz', 'blues'] =========");

const styles = ["jazz", "blues"];
styles.push("rock-n-roll");
const idx = styles.indexOf("blues");
// styles[idx] = 'classic';

styles.splice(
  idx,
  2,
  "classic",
  "bass",
  "pop",
  "opera",
  "drum",
  "buzz",
  "electro"
);

function logItems(array) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    console.log(`${i + 1} - ${element}`);
  }
}

logItems(styles);

console.log("========= EXERCISE #2  checkLogin(array) =========");

const logins = ["Peter", "John", "Igor", "Sasha"];

function checkLogin(array) {
  const userName = "userName";
  // const userName = prompt('What is your name?');
  array.includes(userName)
    ? console.log(`Welcome, ${userName}!`)
    : console.log(`User ${userName} not found.`);
}
checkLogin(logins);

console.log("========= EXERCISE #3  caclculateAverage() =========");

function caclculateAverage(...arg) {
  console.log(arg);
  const newArrNumbers = [];
  let sumOfNewArr = 0;
  for (const el of arg) {
    if (typeof el === "number" && !isNaN(el)) {
      console.log(el);
      console.log("typeof el => ", typeof el);
      newArrNumbers.push(el);
      sumOfNewArr += el;
    }
  }
  console.log(newArrNumbers.length);

  return newArrNumbers.length === 0 ? 0 : sumOfNewArr / newArrNumbers.length;
}

console.log(caclculateAverage(1, 2, 4.7, "jo", true, "false"));
console.log(caclculateAverage("jo", true, "false"));

console.log("========= EXERCISE #4  Функція сумує сусідні числа =========");

const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

function sumOfNumbers(arr) {
  let newArrOfSums = [];
  for (let i = 0; i < arr.length - 1; i++) {
    newArrOfSums.push(arr[i] + arr[i + 1]);
  }
  return newArrOfSums;
}
console.log(sumOfNumbers(someArr)); //[33, 45, 39, 17, 25, 27, 29]

console.log("========= EXERCISE #5  findSmallestNumber(numbers) =========");

const numbers = [
  0.2,
  5,
  "hello",
  35,
  { name: "Marta", age: 40 },
  56,
  12,
  "test",
  24,
  0.7,
  80,
  3,
  true,
];

function findSmallestNumber(arr) {
  const arrNumbersOnly = [];
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      arrNumbersOnly.push(arr[i]);
    }
  }
  return Array.isArray(arrNumbersOnly)
    ? console.log(Math.min(...arrNumbersOnly))
    : console.log("Sory, it is not an array!");
}
findSmallestNumber(numbers); //0.2

console.log("========= EXERCISE #6  findLongestWord() =========");

function findLongestWord(str) {
  const arr = str.split(" ");
  console.log(arr);
  let longestWord = arr[0];
  console.log(longestWord);

  for (const word of arr) {
    console.log(word.length);
    if (word.length >= longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}

console.log(findLongestWord("London is the capital of Great Britain")); // 'capital'

console.log("========= EXERCISE #7  Object.keys(user) =========");

const user = {
  name: "John",
  age: 20,
  hobby: "tenis",
  premium: true,
};

user.mood = "happy";
user.hobby = "skydiving";
user.premium = false;

for (const key of Object.keys(user)) {
  console.log(`${key} : ${user[key]}`);
}

console.log("========= EXERCISE #8  Object.values(user) =========");

const salaries = {
  Mango: 100,
  Poly: 160,
  Megan: "none",
  Ajax: 1470,
};
let sum = 0;
// for (const salary in salaries) {
//   console.log(salary +' : '+salaries[salary]);
//   if (!salaries[salary].isNaN && typeof salaries[salary] === 'number') {
//     sum += salaries[salary];
//   }
//  }
for (const salary of Object.values(salaries)) {
  // console.log(salary);
  if (!salary.isNaN && typeof salary === "number") {
    sum += salary;
  }
}
console.log("sum = " + sum);

console.log("========= EXERCISE #9  Object with Methods(){} =========");

const calculator = {
  read(a, b) {
    this.valueA = a;
    this.valueB = b;
    return `a = ${this.valueA} , b = ${this.valueB}`;
  },
  exist() {
    if (this.valueA && this.valueB) {
      return true;
    } else {
      return false;
    }
  },
  sum() {
    if (this.exist()) {
      return this.valueA + this.valueB;
    } else {
      return "No such propeties";
    }
  },
  mult() {
    if (this.exist()) {
      return this.valueA * this.valueB;
    } else {
      return "No such propeties";
    }
  },
};
console.log(calculator.read(2, 3));
console.log(calculator.sum()); //5
console.log(calculator.mult()); //6
console.log(calculator.exist()); //true
console.log(calculator);

console.log("========= EXERCISE #10  calcTotalPrice(fruits, fruitName) =========");

const fruits = [
  { name: "Яблуко", price: 45, quantity: 7 },
  { name: "Апельсин", price: 60, quantity: 4 },
  { name: "Банан", price: 125, quantity: 8 },
  { name: "Груша", price: 350, quantity: 2 },
  { name: "Виноград", price: 440, quantity: 3 },
  { name: "Банан", price: 125, quantity: 3 },
];

function calcTotalPrice(fruits, fruitName) {
  let totalCostFruit = 0;
  for (const fruit of fruits) {
    // console.log(fruit.name);
    if (fruit.name === fruitName) {
      totalCostFruit += fruit.price * fruit.quantity;
    }
  }
  return `${fruitName} : ${totalCostFruit}`;
}

// calcTotalPrice(fruits, "Яблуко");
console.log(calcTotalPrice(fruits, "Апельсин")); //Апельсин // 240
console.log(calcTotalPrice(fruits, "Банан")); //Банан // 1375
console.log(calcTotalPrice(fruits, "Виноград")); //Виноград // 1320

