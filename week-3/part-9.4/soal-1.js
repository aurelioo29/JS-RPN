/*
Diberikan sebuah function digitPerkalianMinimum(angka) yang menerima satu parameter angka. 
Function akan mengembalikan jumlah digit minimal dari angka yang merupakan faktor angka parameter tersebut, 
Contoh, jika angka adalah 24, maka faktornya adalah 1 * 24, 2 * 12, 3 * 8, dan 4 * 6. 
Dari antara faktor tersebut, yang digit nya paling sedikit adalah 3 * 8 atau 4 * 6, sehingga function akan me-return 2.

1 * 24 = 3 digit (124)
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

karena dibawah ini 2 digit dan terkecil
3 * 8 = 2 digit (38)
4 * 6 = 2 digit (46)

ya jadikan dia minimum

misal faktronya angka 1 hanyalah
1*1 = 2 digit (11)

Return 2
*/
function digitPerkalianMinimum(angka) {
  let minDigit = 0;
  let tempDigit = 0;
  let tempArr = [];

  for (let i = 1; i <= angka; i++) {
    if (angka % i === 0) {
      tempArr.push(i);
    }
  }

  for (let i = 0; i < tempArr.length / 2; i++) {
    tempDigit = tempArr[i].toString().length + tempArr[tempArr.length - 1 - i].toString().length;
    if (minDigit === 0 || tempDigit < minDigit) {
      minDigit = tempDigit;
    }
  }

  return minDigit;

  // 1 <= 2
  // 2 / 1 = 
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2