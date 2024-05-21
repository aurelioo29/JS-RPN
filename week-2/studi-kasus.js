let penumpang = ["Rel", undefined, "Jambre"];

var tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong, penumpang naik ke-1
  // penumpang berikut duduk di kursi berikut
  // jika ada kursi kosong, penumpang isi di tempat yang baru kosong
  // angkot tidak pernah penuh
  // nama penumpang tidak boleh sama

  if (penumpang.length == 0) {
    penumpang.push(namaPenumpang);
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == undefined) {
        // return (penumpang[i] = namaPenumpang);
        penumpang[i] = namaPenumpang;
        return penumpang;
      } else if (penumpang[i] == namaPenumpang) {
        return `${penumpang[i]} sudah ada di dalam angkot BROKK`;
      } else if (i == penumpang.length - 1) {
        penumpang.push(namaPenumpang);
        return penumpang;
      }
    }
  }
};

// console.log(tambahPenumpang("Aurelio", penumpang));
// // console.log(tambahPenumpang("Dody", penumpang));
// console.log(tambahPenumpang("Aurelio", penumpang));
// console.log(penumpang);

var hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong tampilkan pesan bahwa angkot ksoong
  // jika nama sesuai dengan array penumpang, hapus nama penumpang pada array dan undefined
  // jika tidak ada penumpang yg nama sesuai, tampilkan pesan kesalahan
  if (penumpang.length === 0) console.log("Angkot masih kosong");
  else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = undefined;
      } else if (i == penumpang.length - 1) {
        console.log(`${namaPenumpang} tidak ada di dalam angkot`);
        // return penumpang;
      }
    }
  }
  return penumpang;
};

hapusPenumpang("Aurelio", penumpang);
hapusPenumpang("Rel", penumpang);
hapusPenumpang("Abang", penumpang);
