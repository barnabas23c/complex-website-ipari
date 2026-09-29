
const form = document.getElementById("form");
const submit = document.getElementById("submit");

const nev = document.getElementById("nev");
const email = document.getElementById("email");
const telefonszam = document.getElementById("telefonszam");

const hiba = document.getElementById("hiba");

submit.addEventListener("click", () =>
{
    console.log("a");

    hiba.innerHTML = "";
    if (!nev.value.match(/^[A-ZÖÜÓŐÚŰÉÁÍ][a-zöüóőúűéáí]+(-| )([A-ZÖÜÓŐÚŰÉÁÍ][a-zöüóőúűéáí]+(-| ))?[A-ZÖÜÓŐÚŰÉÁÍ][a-zöüóőúűéáí]+$/))
        hiba.innerHTML += "Helytelen név formátum!";
    if (!email.value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/))
        hiba.innerHTML += "<br>Heyltelen email cím formátum!";
    if (!telefonszam.value.match(/^\+?\d{2} ?\d{2} ?\d{3} ?\d{4}$/))
        hiba.innerHTML += "<br>Helytelen telefonszám!";

    if (hiba.innerHTML == "")
        form.requestSubmit();
    else hiba.style.display = "block";
});

