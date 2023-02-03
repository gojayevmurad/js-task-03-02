// N - 5

// X
// XXX
// XXXXX
// XXX
// X

// let num = 31,
//   a = "";
// var countX = 1;

// function createRomb(num) {
//   if (num % 2 == 0) return false;
//   for (let row = 1; row <= num; row++) {
//     if (row <= Math.floor(num / 2)) {
//       for (var space = 0; space < (num - countX) / 2; space++) {
//         a += " ";
//       }
//       for (let x = 0; x < countX; x++) {
//         a += "x";
//       }
//       countX += 2;
//       a += "\n";
//     } else {
//       for (var space = 0; space < (num - countX) / 2; space++) {
//         a += " ";
//       }
//       for (let x = 0; x < countX; x++) {
//         a += "x";
//       }
//       countX -= 2;
//       a += "\n";
//     }
//   }
// }
// createRomb(num);
// console.log(a);

// 2 eded olsun (a, b). 3cu ededi istifade etmeden ededlerin yerini deyisin.

// var a = 10,
//   b = 20;

// [a, b] = [b, a];

// console.log(`a: ${a}, b:${b}`);

// 2 array olsun 1 dovr, 1 sert ile arraylerdeki diff elementleri tapin

// let arr1 = [1, 2, 3, 4],
//   arr2 = [1, 2, 3, 4, 5,6,7],
//   diffArr = [];

// for (let i = 0; i < arr2.length; i++) {
//   arr2[i] == arr1[i] ? true : diffArr.push(arr2[i]);
// }
// console.log(diffArr);
