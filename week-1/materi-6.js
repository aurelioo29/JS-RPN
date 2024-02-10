// materi looping
// pada looping ada namanya arah, kalau kiri = pengurangan, sedangkan kanan = penambahan

// contoh looping while()
// let i = 5;
// while (i >= 0) {
//   console.log(i);
//   i--;
// }

// contoh looping for
// let name = "tester";
// for (let i = 0; i < name.length; i++) {
//   console.log(name[i]);
// }

// nested loop
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     console.log("*");
//   }
//   console.log("");
// }

// bentuk bintang
for (let i = 1; i <= 5; i++) {
  let result = "";
  for (let j = 1; j <= i; j++) {
    result += "*";
  }
  console.log(result);
}

// 1
