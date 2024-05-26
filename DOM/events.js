// event handler
// kalau double event akan terupdate paling baru
const p3 = document.querySelector(".p3");
function ubahWarna() {
  p3.style.backgroundColor = "red";
}

const p2 = document.querySelector(".p2");
// --- cara 1
// function ubahWarnap2() {
//   p2.style.backgroundColor = "green";
// }
// p2.onclick = ubahWarnap2;
// --- cara 2
p2.onclick = function () {
  p2.style.backgroundColor = "green";
};

// addEventListener
// kalau double ke 2 event nya bs di terapkan
const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
  const ul = document.querySelector("section#b ul");
  const li = document.createElement("li");
  const textLi = document.createTextNode("Ini dari Event Add");
  li.appendChild(textLi);
  ul.appendChild(li);
});
