// Multiply the number

function multiply(number) {
  let absolute = Math.abs(number);
  let panjang = absolute.toString().length;

  let hasil = number * 5 ** panjang;
  return hasil;
}

console.log(multiply(3));
console.log(multiply(10));
console.log(multiply(200));
console.log(multiply(0));
console.log(multiply(-3));

// multiply(3) == 15 // 3 * 5¹
// multiply(10) == 250 // 10 * 5²
// multiply(200) == 25000 // 200 * 5³
// multiply(0) == 0 // 0 * 5¹
// multiply(-3) == -15 // -3 * 5¹
