/*
Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

Barang-barang SALE yang akan dihitung penjualannya:

Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
Function akan menerima array yang berisikan object pembeli (nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya). Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang, siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut
*/

function countProfit(shoppers) {
  var listBarang = [
    ["Sepatu Stacattu", 1500000, 10],
    ["Baju Zoro", 500000, 2],
    ["Sweater Uniklooh", 175000, 1],
  ];

  // you can only write your code here!
  if (shoppers.length === 0) return console.log('""');

  let items = [];
  let price = [];
  let leftOver = [];
  for (let i = 0; i < listBarang.length; i++) {
    items.push(listBarang[i][0]);
    price.push(listBarang[i][1]);
    leftOver.push(listBarang[i][2]);
  }

  const variabel = [
    {
      product: items[0],
      shoppers: [],
      leftOver: leftOver[0],
      totalProfit: 0,
    },
    {
      product: items[1],
      shoppers: [],
      leftOver: leftOver[1],
      totalProfit: 0,
    },
    {
      product: items[2],
      shoppers: [],
      leftOver: leftOver[2],
      totalProfit: 0,
    },
  ];

  for (let i = 0; i < shoppers.length; i++) {
    const shopping = shoppers[i];
    if (
      shopping.product === "Sepatu Stacattu" &&
      shopping.amount <= variabel[0].leftOver
    ) {
      variabel[0].shoppers.push(shopping.name);
      variabel[0].leftOver -= shopping.amount;
      variabel[0].totalProfit += shopping.amount * price[0];
    } else if (
      shopping.product === "Baju Zoro" &&
      shopping.amount <= variabel[1].leftOver
    ) {
      variabel[1].shoppers.push(shopping.name);
      variabel[1].leftOver -= shopping.amount;
      variabel[1].totalProfit += shopping.amount * price[1];
    } else if (
      shopping.product === "Sweater Uniklooh" &&
      shopping.amount <= variabel[2].leftOver
    ) {
      variabel[2].shoppers.push(shopping.name);
      variabel[2].leftOver -= shopping.amount;
      variabel[2].totalProfit += shopping.amount * price[2];
    }
  }

  return variabel;
}

// TEST CASES
console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 2 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 3 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 2 },
  ])
);
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 8 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 10 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 1 },
    { name: "Devi", product: "Baju Zoro", amount: 1 },
    { name: "Lisa", product: "Baju Zoro", amount: 1 },
  ])
);
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(
  countProfit([{ name: "Windi", product: "Sepatu Naiki", amount: 5 }])
);
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
