//1. Написати функцію, яка приймає в якості аргументів висоту і ширину  прямокутника, повертає площу прямокутника.

// /**
//  *
//  * @param {number} side1 integer positive
//  * @param {number} side2 integer positive
//  * @returns {number} integer positive
//  */
// const getRecArea = function(side1,side2){
// if(side1 >0 && side2 >0){
//   return side1*side2;
// }
// };
// console.log(getRecArea(2,2));

//2. Написати функцію, яка приймає три числа - значення мір кутів трикутника, повертає класифікацію трикутника за кутами: прямокутний, гострокутний - якщо усі кути гострі, тупокутний, якщо хоча б один з кутів тупий, або повертає інформацію про неможливість існування трикутника з такими значеннями мір кутів трикутника.

// /**
//  *
//  * @param {number} side1 integer positive
//  * @param {number} side2 integer positive
//  * @returns {string}
//  */
// const getClassTriangle = function(ang1, ang2, ang3){
//   if (ang1+ang2+ang3 === 180 && ang1 >0 && ang2 >0 && ang3 >0 ){
//     if(ang1 === 90 || ang2 === 90 || ang3 === 90){
//     return 'right triangle';
//   }
//   if((ang1 < 90 && ang2 < 90 && ang3 < 90)){
//     return 'acute triangle';
//   }
//   if((ang1 > 90 || ang2 > 90 || ang3 > 90)){
//     return 'obtuse triangle';
//   }
//   }
//   return 'it\'s not triangle';
// }
// console.log(getClassTriangle(90,90,0));

//3. Написати функцію, яка приймає в якості аргумента діаметр кола і повертає довжину кола

// const PI = 3.14
// /**
//  *
//  * @param {number} num1
//  * @param {number} num2
//  * @returns {number}
//  */
// const getCircleLenght = function(num1, num2 = PI){
// if(num1 >0){
//   return num2 * num1;
// }
// return null;
// }
// console.log(getCircleLenght(1));

//solution 2, better
// const getCircleLenght = function(num1, num2 = PI){
//   return num1 >0 ? num2 * num1 : null;
// }
// console.log(getCircleLenght(1));

//4. Написати функцію, яка приймає в якості аргумента висоту циліндра та діаметр основи і повертає об'єм циліндра.
// V=PI * r(2) * h; diam/2 = radius (3,14*4*10 = 125,6)

// const hight = 10;
// const diam = 4;
// const PI = 3.14;
// /**
//  *
//  * @param {number} hig
//  * @param {number} diam
//  * @param {number} val3
//  * @returns {number}
//  */
// const getCylinderVolume = function(hig, diam, val3 = PI){
// if (hig > 0 && diam > 0){
// return val3 * ((diam / 2) * (diam / 2)) * hig;
// }
// return null;
// }
// console.log(getCylinderVolume(hight, diam));

//5. Написати функцію, яка приймає три аргументи: два числа (діапазон включно) і виводити на консоль всі числа з цього діапазону, які діляться на передане число -  третій аргумент.
// let start = 2;
// const end = 10;
// const mult = 3;
// /**
//  *
//  * @param {number} start
//  * @param {number} end
//  * @param {number} mult
//  */
// const getMultipleNumbers = function (start, end, mult) {
//   for (let i = 2; i < 10; i++) {
//     if (i >= start && i <= end && i % mult === 0) {
//       console.log(i);
//     }
//   }
// };
// console.log(getMultipleNumbers(start, end, mult));

//6.Написати функцію, яка приймає число и повертає суму непарних чисел від 1 до прийнятого числа.
/**
 *
 * @param {number} num
 * @returns {number}
 */
const getSumOddNumbers = function (num = 10) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (i >= 1 && i <= num && i % 2 === 1) {
      sum += i;
    }
  }
  return sum;
};
console.log(getSumOddNumbers());

//7. Написати функцію, яка повертає факторіал переданого числа. Використовувати BigInt.
/**
 *
 * @param {bigint} num
 * @returns {bigint}
 */
const getFactorial = function (num = 8n) {
  if (num < 0) {
    return null;
  }
  if (num === 0) {
    return 1n;
  }
  let fact = 1n;
  for (let i = 1n; i <= num; i++) {
    if (i >= 0 && i <= num) {
      fact *= i;
    }
  }
  return fact;
};
console.log(getFactorial());

//8. Написати код, який пропонує користувачу вгадати "таємне число".Таємне число зберігається в константі. Користувач намагається вгадати, ви, в залежності від відповіді користувача, дієте підказки: більше або менше таємне число. Після того, як користувач вгадає таємне число, ви виводите йому кількість спроб, які були використанні для вгадування.


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min +1) + min)}; // The maximum is exclusive and the minimum is inclusive
const MIN = 1;
const MAX = 5;
const secretNumber = getRandomInt(MIN, MAX)
// const secretNumber = 8;
let userInput = prompt("try gess number");
let tryCounter = 0;

const isUserInputNumber = function(val){
    return Number(val);
  }

while (true) {
  tryCounter++;
  if(userInput === null || Number.isNaN(isUserInputNumber(userInput)) || userInput ==='' || userInput ===' '){
    userInput = prompt("uncorrect input, try again" + tryCounter);
    continue;
  }
  
  if (isUserInputNumber(userInput) > secretNumber || isUserInputNumber(userInput) < secretNumber) {
    if (isUserInputNumber(userInput) > secretNumber) {
      userInput = prompt("try less" + tryCounter);
    }
    if (isUserInputNumber(userInput) < secretNumber)
      userInput = prompt("try bigger" + tryCounter);
  }
  if (isUserInputNumber(userInput) === secretNumber) {
    alert("correct " + tryCounter);
    break;
  }
}



