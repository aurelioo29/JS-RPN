// manipulation element

// element.innerHTML
const judul = document.getElementById("judul");
judul.innerHTML = "Aurelio";

// Element.style.<propertyCSS>
judul.style.color = "blue";

// Element.setAttribute() getAttribute() removeAttribute()
// const a = document.querySelector(".p2");
// a.setAttribute("id", "baganA");
// const bagan = document.getElementById("baganA");
// bagan.style.backgroundColor = "green";

// element.classList.add() remove() toggle() item() contains() replace()
// item cek class yg no urut ke berapa, mulai dr index 0
// contains nanya apakah ada yg misal class 2
// replace('nama_lama', 'nama_baru')

// -----------------------------------------------------------------------
// manipulation node

// document.createElement
// document.createTextNode
// node.appendChild
// ---- buat elemen baru nya
const baru = document.createElement("p");
const textBaru = document.createTextNode("paragrap new");
// --- simpan tulisan ke dlam paragrap
baru.appendChild(textBaru);
// --- simpan di akhir section A
const sec = document.getElementById("a");
sec.appendChild(baru);

// node.insertBefore
// --- create new element
const liBaru = document.createElement("li");
const textLi = document.createTextNode("Insert dr JS");
// --- savte text
liBaru.appendChild(textLi);
// --- element parent
const ul = document.querySelector("section#b ul");
// --- element child
const li2 = ul.querySelector("li:nth-child(2)");
// --- eksekusi (new_item, before_item)
ul.insertBefore(liBaru, li2);

// parentNode.removeChild
const link = sec.querySelector("a");
sec.removeChild(link);

// parentNode.replaceChild
const b = document.getElementById("b");
const para = b.querySelector("p");
const h2 = document.createElement("h2");
const h2Text = document.createTextNode("NEW NEW");
h2.appendChild(h2Text);
// --- eksekusi (new, replace)
b.replaceChild(h2, para);
