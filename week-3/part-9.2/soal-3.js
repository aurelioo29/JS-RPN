function cariMedian(arr) {
  let urut = arr.sort();
  for (let i = 0; i < urut.length; i++) {
    if (urut.length % 2 === 1) {
      return urut[Math.floor(urut.length / 2)];
    } else {
      let tengah = urut.length / 2;
      return urut[tengah - 1] + urut[tengah] / 2;
    }
  }
}
// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
