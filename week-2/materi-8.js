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
