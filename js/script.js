// ex-1
// function cubeCoun(sideLenght) {
//   let volume = Math.pow(sideLenght, 3);
//   return volume;
// }
// let sideLenght = 7;
// let volume = cubeCoun(sideLenght);
// console.log(volume);

// ex-3
// function number(N = [0, 1, 2, 3, 4, 5]) {
//   return N[0];
// }
// console.log(number());

// ex-4

// ex-5
// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return year + " Kabisa yili";
//   } else {
//     return year + " Kabisa yili emas";
//   }
// }
// console.log(isLeapYear(2024));

// ex-6
// function randomCouple(number1, number2) {
//   let radnomCoupleNumber = 0;
//   for (let i = number1; i <= number2; i++) {
//     radnomCoupleNumber = Math.floor(Math.random(i) * number2);
//     return radnomCoupleNumber;
//   }
// }
// console.log(randomCouple(1, 17));

// ex-8
// function celsius(farengeyt) {
//   let result = Math.trunc(farengeyt - 32) / 1.8;
//   return result;
// }
// console.log(celsius(11));

// ex-15
// function randomLetter() {
//   var alphabet = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];
//   let randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
//   return randomLetter;
// }
// let random_l = randomLetter();
// console.log(random_l);
