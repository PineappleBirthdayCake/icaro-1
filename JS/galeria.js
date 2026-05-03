const items = [["gatito", "media/galeria/gatito.jpg"], ["perritos", "media/galeria/perritos.jpg"], ["potro", "media/galeria/potro.jpg"], ["icaro", "media/galeria/icaro-logo.png"]];

const body = document.querySelector("body")
const popup = document.getElementById("galeria-popup");
const botoncerrar = document.getElementById("galeria-cerrar");
const imagencompleta = document.getElementById("galeria-imagen-completa");
const row = document.getElementById("galeria-row")
const titulo = document.getElementById("galeria-titulo")

for (const item of items) {
    const div = document.createElement("div")
    const img = document.createElement("img")
    row.append(div);
    div.classList.add("col", "bg-secondary", "p-2", "m-1", "rounded", "galeria-item");
    div.appendChild(img);
    img.classList.add("rounded");
    img.src = item[1];
    img.alt = item[0];
    img.title = item[0];
    div.addEventListener("click", function () {
        imagencompleta.src = item[1];
        imagencompleta.alt = item[0];
        titulo.textContent = "\"" + item[0] + "\"";
        popup.style.visibility = "visible";
        body.classList.add("no-overflow");
    });
}

botoncerrar.addEventListener("click", function () {
    popup.style.visibility = "hidden";
    body.className = "";
});


