// materi function
function cekPanjang(kata) {
  let panjang = kata.length;
  return panjang;
}

console.log(cekPanjang("dendi almahi"));

// huruf kapital
function buatKapital(word) {
  let result = "";
  for (let i = 0; i <= word.length; i++) {
    if (i === 0 || word[i - 1] === " ") {
      result += word[i].toUpperCase();
    } else {
      result += word[i];
    }
  }
  return result;
}

console.log(buatKapital("dendi almahi"));
