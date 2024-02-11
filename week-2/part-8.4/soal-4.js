// algoritma nya
// mengubah tipe jenis data menjadi String
// melakukan split terhadap data dari isi variabel convert
// membuat variabel big dengan nilai 0
//

function pasanganTerbesar(num) {
  let convert = num.toString();
  let split = convert.split("");
  let big = 0;

  for (let i = 0; i < split.length - 1; i++) {
    let parse = parseInt(split[i] + split[i + 1]);
    if (parse > big) {
      big = parse;
    }
  }
  return big;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
