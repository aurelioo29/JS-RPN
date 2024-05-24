// object literal
var mhs = {
  nama: "aurelio",
  nim: 223303030427,
};

console.log(mhs.nama);
console.log(mhs["nama"]);

// function declaration
function dataDiri(nama, nim, kelas) {
  let data = {};
  data.nama = nama;
  data.nim = nim;
  data.kelas = kelas;
  return data;
}
console.log(dataDiri("Aurelio", 12344556, "4 Malam A"));

// constructor
function mahasiswa(nama, nim) {
  this.nama = nama;
  this.nim = nim;
}
// let maha = new mahasiswa("aurelii", 2038494);
console.log(new mahasiswa("aurelio", 2929920));
