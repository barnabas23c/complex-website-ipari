const params = new URLSearchParams(window.location.search);

const nev = document.getElementById("nev");
const email = document.getElementById("email");
const telefonszam = document.getElementById("telefonszam");
const opcio = document.getElementById("opcio");
const uzenet = document.getElementById("uzenet");

nev.innerText = params.get("nev");
email.innerText = params.get("email");
telefonszam.innerText = params.get("telefonszam");
opcio.innerText = params.get("opcio");
uzenet.innerText = params.get("uzenet");
