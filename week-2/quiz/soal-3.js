/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  let sorting = animals.sort();
  let hasil = [];
  let penampung = [];
  for (let i = 0; i < sorting.length; i++) {
    if (i === 0) {
      penampung.push(sorting[i]);
    } else if (penampung[0][0] === sorting[i][0]) {
      penampung.push(sorting[i]);
    } else {
      hasil.push(penampung);
      penampung = [];
      penampung.push(sorting[i]);
    }
  }
  hasil.push(penampung);
  return hasil;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"])); // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
); // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
