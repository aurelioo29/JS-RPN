// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut.
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
  let jam = menit / 60;
  let result = Math.trunc(jam);

  let detik = Math.round((jam - result) * 60);
  
  if (menit >= 60) {

    if (detik < 10) {
      return `${result}:0${detik}`;
    } else {
      return `${result}:${detik}`;
    }
  } else {
    if (detik < 10) {
      return `0:0${menit}`;
    } else {
      return `0:${menit}`;
    }
  }
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
console.log(konversiMenit(1)); // 2:00
