// getElementByID() = element
const title = document.getElementById("judul");
title.style.color = "blue";
title.style.backgroundColor = "red";
title.style.textAlign = "Center";

// getElementsByTagName() = htmlcollection
const para = document.getElementsByTagName("p");
for (let i = 0; i < para.length; i++) {
  para[i].style.backgroundColor = "green";
}

const head = document.getElementsByTagName("h1")[0]; //ambil H1 yang index 0
head.style.textAlign = "right";

// getElementsByClassName() = htmlcollection
const phi = document.getElementsByClassName("p1");
phi[0].innerHTML = "Mengubah text nya";

// querySelector() = element
const p4 = document.querySelector("#b p");
p4.style.color = "red";
p4.style.fontSize = "40px";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "orange";

// querySelectorAll() = nodelist
const pg = document.querySelectorAll("p");
for (let i = 0; i < pg.length; i++) {
  pg[i].style.backgroundColor = "yellow";
}

// yg getElementByID && getElementsByTagName method paling cepat dr yg lain
// yg querySelector && querySelectorAll method yg di pakai ketika tidak blh nambahkan id / class
