let input = [
  "0001",
  "Roman Alamsyah",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling2(input) {
  // output ke-1
  input.push("SMA Internasional Metro");
  input.splice(2, 3, "Provinsi Bandar Lampung", "21/05/1989", "Pria");
  console.log(input);

  // output ke 2-3-4
  let split = input[3].split("/");

  if (split[1] === "05") {
    console.log("Mei");
  }

  console.log(split[2], split[0], split[1]);

  console.log(split.join("-"));

  console.log(input[1].slice(0, 14));
}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
