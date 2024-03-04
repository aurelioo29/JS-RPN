// materi object

const object = { a: 1, b: 2, c: 3 };

// looping khusus OBJECT
// kata key bisa juga di ganti jadi property
// object itu variabel yang udh di buat
for (const key in object) {
  console.log(`${key}: ${object[key]}`);
}

for (const prop in object) {
  console.log(`object.${prop} = ${object[prop]}`);
  delete object.c; // untuk delete
}
