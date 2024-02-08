// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
// yaitu nama dan peran. Variabel peran harus memiliki isi data,
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".

// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel
// peran serta mengeluarkan respon sesuai isi variabel tersebut.

//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada

//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)

// step :
// mengecek terlebih dahulu variabel nya, yang dimana tidak boleh kosong
// jika sudah melewati kondisi pengecekan variabel tidak boleh koosong, maka mengecek kembali peran yang di input
// jika peran Ksatria, maka muncul ${nama} , kamu dapat menyerang dengan senjatamu!
// jika peran Tabib, maka muncul ${nama} , kamu akan membantu temanmu yang terluka
// jika peran Penyihir, maka muncul ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
// jika peran yang di input tidak termasuk 3 diatas, kondisi ini akan muncul dengan tulisan ${nama} , tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada

let nama = "testa",
  peran = "tester";

//code disini gunakan console.log untuk outputnya
if (nama == "" || peran == "") {
  console.log("nama dan peran wajib di isi ");
} else if (peran == "Ksatria") {
  console.log(`${nama} , kamu dapat menyerang dengan senjatamu!`);
} else if (peran == "Tabib") {
  console.log(`${nama} , kamu akan membantu temanmu yang terluka`);
} else if (peran == "Penyihir") {
  console.log(`${nama} , ciptakan keajaiban yang membantu kemenanganmu!`);
} else {
  console.log(
    `${nama} , tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`
  );
}
