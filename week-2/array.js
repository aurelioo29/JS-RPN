// contoh data array
let animals = ["lion", "cat", "tiger", "fish"];

console.log(animals);

// MACAM-MACAM ARRAY METHOD
// length
console.log(animals.length);

// push()
// memasukan data pada urutan terakhir / kanan
animals.push("buaya");
console.log(animals);

// pop()
// mengahapus data paling urutan akhir / kanan
animals.pop();
console.log(animals);

// unshift()
// memasukan data pada urutan paling depan / kiri
animals.unshift("jerapah");
console.log(animals);

// shift()
// menghapus data paling urutan depan / kiri
animals.shift();
console.log(animals);

// splice()
// bisa menambahkan data / mengahapus data sekaligus
// parameter pertama sebagai penentuan posisi mau di index ke berapa
// parameter kedua sebagai penentuan mau menghapus berapa data/elemen/item (bisa juga ga ngehapus apa apa kalau di kasih nilai 0)
// parameter sisanya, itu untuk nambahin data ke dalam array, jumlahnya bisa banyak
animals.splice(0, 2); // utk hapus data [INDEX = 0 && DATA MAU DI HAPUS = 2]
console.log(animals);

animals.splice(1, 0, "ikan", "lele", "gajah", "sepat"); // utk nambah data [INDEX = 1 && DATA MAU DI HAPUS = 0 && LIST DATA MAU DI TAMBAH]
console.log(animals);

// slice()
// memotong array sesuai nilai paramater yang di tentukan
// simpelnya ada dua parameter slice(dari-mana, sampe-sebelum-mana)
// parameter pertama dari-mana, itu berfungsi mau motong array dari mana
// parameter kedua sampe-sebelum-mana itu berfungsi buat ujung array yg kita potong
// boleh hanya memasang 1 parameter saja, contoh .slice(1)

// gini caranya, ada 2 cara

// bisa langsung hajar aja taro di output
console.log(animals.slice(0, 5));

// kita tampung di variabel baru
let slicedHewan = animals.slice(1);
console.log(slicedHewan);

// yak biasanya sih ditampung di variabel baru wkwk

// contoh memotong dari index 1 sampai sebelum index ke 3
// dengan kata lain---------
// contoh memotong dari index 1 sampai index 2
// let slicedHewan = hewan.slice(1,3);
// console.log(slicedHewan)

// looping 2 dimensi array
let cekDimensi = [[[1, 2, 3]], [[4, 5, 6]]];

for (let i = 0; i < cekDimensi.length; i++) {
  for (let j = 0; j < cekDimensi[i].length; j++) {
    for (let k = 0; k < cekDimensi[i][j].length; k++) {
      console.log(cekDimensi[i][j][k]);
    }
  }
}

var name = [
  "Andi",
  "Budi",
  "Caca",
  "Dedi",
  // "Euis",
  // "Fafa",
  // "Gaga",
  // "Hani",
  // "Ika",
  // "Joko",
];
for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}

console.log(name.join(" - ")); // gabung menjadi string
name.push("Euis"); // menambahkan data di akhir data array
console.log(name);
name.pop(); // menghapus data di akhir data array
console.log(name);
name.unshift("Euis"); // menambahkan data di awal data array
console.log(name);
name.shift(); // menghapus data di awal data array
console.log(name);

// splice(indexAwal, mauDihapusBerapa, elemen1, el2men2)
// artinya index keberapa yang mau di tambah / di hapus
name.splice(1, 2, "Aurelio");
console.log(name);

// slice(awal, akhir)
// artinya yang mana aja mau di tampilkan
var arr = name.slice(1, 3);
console.log(arr);

// -----------------------------------------
// function expression
var angka = [1, 2, 4, 5, 3, 6, 10, 7];
angka.forEach(function (i) {
  console.log(i);
});

// function map
let ob = angka.map(function (i) {
  return i * 2;
});
console.log(ob);

// sorting
angka.sort(function (a, b) {
  return a - b;
});
console.log(angka);

// filter
let saring = angka.filter(function (x) {
  return x < 5;
});
console.log(saring);

// find
let jumpa = angka.find(function (x) {
  return x < 5;
});
console.log(jumpa);
