// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
let input = 5;
//hasilnya
//*
//**
//***
//****
//*****

for (let i = 1; i <= input; i++) {
  let result = "";
  for (let j = 1; j <= i; j++) {
    result += "*";
  }
  console.log(result);
}
