const ubahWarna = document.getElementById("ubah");
ubahWarna.onclick = function () {
  //   document.body.style.backgroundColor = "green";
  //   document.body.setAttribute("class", "biru-muda");
  document.body.classList.toggle("biru-muda");
};

// add button use JS
const button = document.createElement("button");
const buttonText = document.createTextNode("Ini dari JS");
button.appendChild(buttonText);
button.setAttribute("type", "button");

ubahWarna.after(button);

button.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

//
const sMerah = document.querySelector("input[name=sMerah]");
const shijau = document.querySelector("input[name=shijau]");
const sBiru = document.querySelector("input[name=sBiru]");

sMerah.addEventListener("input", function () {
  const r = sMerah.value;
  const g = shijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
shijau.addEventListener("input", function () {
  const r = sMerah.value;
  const g = shijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});
sBiru.addEventListener("input", function () {
  const r = sMerah.value;
  const g = shijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

//
document.body.addEventListener("mousemove", function (e) {
  const xPos = Math.round((e.clientX / window.innerWidth) * 255);
  const yPos = Math.round((e.clientY / window.innerWidth) * 255);
  document.body.style.backgroundColor = "rgb(" + xPos + "," + yPos + ", 100)";
});
