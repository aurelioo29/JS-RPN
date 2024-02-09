// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = "wow JavaScript is so cool";

let exampleFirstWord4 = word4.substring(0, 3);
let firstWordLength = exampleFirstWord4.length;

console.log(
  "First Word: " + exampleFirstWord4 + ", with length: " + firstWordLength
);

let secondword4 = word4.substring(4, 14);
let secondwordlength = secondword4.length;

console.log(
  "Second word: " + secondword4 + ", with length " + secondwordlength
);

let thirdword4 = word4.substring(15, 17);
let thirdwordlength = thirdword4.length;

console.log("Third word: " + thirdword4 + ", with length " + thirdwordlength);

let fourthword4 = word4.substring(18, 20);
let fourtwordlength = fourthword4.length;

console.log("Fourth word: " + fourthword4 + ", with length " + fourtwordlength);

let fifthword4 = word4.substring(21, 26);
let fifthwordlength = fifthword4.length;

console.log("Fifth word: " + fifthword4 + ", with length " + fifthwordlength);
