/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. 
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. 
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
  let indexO = -1; // Menyimpan indeks 'o'
  let indexX = -1; // Menyimpan indeks 'x'
  let distance = arr.length; // Menyimpan jarak terdekat

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "o") {
      indexO = i;
    } else if (arr[i] === "x") {
      indexX = i;
    }

    if (indexO !== -1 && indexX !== -1) {
      // Jika keduanya sudah ditemukan, hitung jarak dan simpan nilai terkecil
      let currentDistance = Math.abs(indexO - indexX);
      if (currentDistance < distance) {
        distance = currentDistance;
      }
    }
  }

  if (indexO !== -1 && indexX !== -1) {
    return distance;
  } else {kal
    return 0; // Jika tidak ada 'o' atau 'x' ditemukan
  }
}

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
