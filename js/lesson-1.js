// console.log('hello world!');

// const newAlert = alert('Welcome to start!!!'); //return UNDEFINED
// console.log(newAlert);

// const newLogin = prompt('login'); // return STRING or NULL

// const isSure = confirm('Are you sure? '); // return TRUE or FALSE

console.log(`========= EXERCISE #1  [ prompt(''); ] ==========`);

// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().
// ==============================================================================
// const number = Number(prompt('Exercise #1 \nEnter number: '));

// if (number === 10) {
//   alert('Вірно');
// } else {
//   alert('Невірно');
// }

console.log("========= EXERCISE #2  [ Math.random() ] =========");

// У змінній minNum лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"
// ========================================================================

const minNum = Math.floor(Math.random() * (59 - 0) + 0);

if (minNum <= 15) {
  console.log(`${minNum} входить в першу чверть\n `);
} else if (minNum <= 30) {
  console.log(`${minNum} входить в II чверть\n `);
} else if (minNum <= 45) {
  console.log(`${minNum}  входить в III чверть\n `);
} else {
  console.log(`${minNum}  входить в IV чверть\n `);
}

console.log("========= EXERCISE #3  switch{} =========");

// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.
// ==============================================================================

// const num = Number(prompt('Exercise #3 \nEnter number from 1 to 4:'));

// let result;

// switch (num) {
//   case 1:
//     result = 'winter';
//     break;
//   case 2:
//     result = 'spring';
//     break;
//   case 3:
//     result = 'summer';
//     break;
//   case 4:
//     result = 'autumn';
//     break;

//   default:
//     result = 'Вибачте, але ви маєте ввести значення від 1 до 4 включно';
// }
// console.log(result);

console.log("========= EXERCISE #4  [ method .padStart(2, 0) ] =========");

// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples
// ===============================================================================================

// let someNumber = Number(prompt('Exercise #4 \nEnter minutes:'));
// let hour = String(Math.floor(someNumber / 60));
// const minutes = String(someNumber % 60);

// const calculateHours = `${hour.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
// console.log(calculateHours);
// =========

const fullNumber = "2034399002125581";
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, "*");

console.log(maskedNumber);

console.log("========= EXERCISE #5  [login : Admin] =========");

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"
// ================================================================================

// const login = prompt('Exercise #5 \nEnter login:');
// console.log(login);
// if (login === 'Адмін') {
//   const pass = prompt('Enter passsword:');
//   // pass === 'Я головний' ? alert('Добрий день!') : alert('Невірний пароль!');
//   alert(pass === 'Я головний' ? 'Добрий день!' : 'Невірний пароль!');
// } else if (login === null) {
//   alert('Скасовано');
// } else {
//   alert('Я вас не знаю');
// }

console.log("========= EXERCISE #6  while{} =========");

// Використайте цикл while, щоб вивести в console всі числа від 0 до 20 включно.
// =================================================================

let num = 0;
while (num <= 20) {
  // console.log(num);
  num++;
}

console.log("========= EXERCISE #7  [sum of even numbers] =========");

// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.
// ============================================================================

function getNumbers(min, max) {
  let evenSum = 0,
    newMax = Math.max(min, max),
    newMin = Math.min(min, max);
  // console.log(`min = ${min}  max = ${max}  `);
  // console.log(`newMin = ${newMin}  newMax = ${newMax}  `);

  for (let i = newMax; i >= newMin; i--) {
    console.log(`i = ${i}`);
    if (i % 2 == 0) {
      evenSum += i;
      // console.log(`evenSum = ${evenSum}`);
    }
  }
  return evenSum;
}

console.log(`sum of even numbers = ${getNumbers(15, 10)} `);

console.log("========= EXERCISE #8  min(a, b) =========");

// Напишіть функцію min(a, b), яка приймає 2 числа і повертає меньше з них.
// Потрібно додати перевірку, що функція отримує саме числа, в іншому випадку
// повертати з функції рядок - 'Not a number!'.
// ===============================================================================

function min(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return Math.min(a, b);
  } else {
    return "Not a number!";
  }
}
console.log(min(10, 908));

console.log("========= EXERCISE #9  isAdult() =========");
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true,
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm
// і повертає його результат (true/false).

// =========================================================

function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("Ask someone who is older than you.");
  }
}
console.log(isAdult(22));

console.log("========= EXERCISE #10  fizzBuzz() =========");
// Напишіть функцію fizzBuzz(num), яка приймає число і перевіряє кожне число від 1 до num:
// Якщо число ділитися  без остачі на 3 - виводить в консоль 'fizz',
// якщо ділиться  без остачі на 5 - виводить в консоль 'buzz',
// якщо ділиться  без остачі і на 3, і на 5 - виводить в консоль 'fizzbuzz'.
// ================================================================
function fizzBuzz(num) {
  let arrOfFizzBuzz = {};

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`${i} ==> fizzbuzz`);
      arrOfFizzBuzz[i] = "fizzbuzz";
    } else if (i % 5 === 0) {
      console.log(`${i} ==> buzz`);
      arrOfFizzBuzz[i] = "buzz";
    } else if (i % 3 === 0) {
      console.log(`${i} ==> fizz`);
      arrOfFizzBuzz[i] = "fizz";
    }
  }
  console.log(arrOfFizzBuzz);

  return;
}

// fizzBuzz(prompt('Exercise #10 \nEnter number bigger than 1:'));

console.log("========= EXERCISE #11  enterNumber() =========");

// 1. Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити
// ввести ще раз.
// Цикл повинен питати число, доки користувач не
// введе число більше 100, чи не натисне кнопку
// Cancel в prompt

function enterNumber(num) {
  console.log(`type of "${num}" ==>  ${typeof num}\n`);
  if (num <= 100) {
    console.log("TRY AGAIN!!!");
  } else if (num > 100) {
    console.log("Great!");
  } else {
    console.log(`"${num}" is ${typeof num}, NOT a number!`);
  }
}

// enterNumber(prompt('Exercise #11 \nВведіть число більше 100:'));

console.log("========= EXERCISE #12 fixUrl() =========");

// 2. Напишіть функцію, яка приймає адресу сайта url та перевіряє чи закінчується значення
// параметра символом /. Якщо ні, додайте до кінця
// значення url цей символ і поверніть оновлене значення з функції, але тільки в тому випадку,
// якщо в url є підрядок "my-site".
// В іншому випадку поверніть з функції адресу в незмінному вигляді

const url = "   https://my-site.com/about   ";

function fixUrl(link) {
  link = link.trim();

  link.includes("my-site") && !link.endsWith("/")
    ? (link = link.split("").concat(["/"]).join(""))
    : link;
  
  // if (link.includes('my-site') && !link.endsWith('/')) {
  //   link = link.split('').concat(['/']).join('');
  // }

  return link;
}

console.log(fixUrl(url));


