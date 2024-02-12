function hitungJumlahKata(kalimat) {
  let jumlahKata = 0;

  for (let i = 0; i < kalimat.length; i++) {
    // Jika karakter saat ini adalah spasi dan karakter sebelumnya bukan spasi (untuk menghindari menghitung spasi berulang)
    if (kalimat[i] === " " && kalimat[i - 1] !== " ") {
      jumlahKata++;
    }
  }

  // ketika kalimat tidak diakhiri dengan spasi
  // kalimat tidak kosong dan karakter terakhirnya bukan spasi
  if (kalimat.length > 0 && kalimat[kalimat.length - 1] !== " ") {
    jumlahKata++;
  }

  return jumlahKata;
}

// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5
