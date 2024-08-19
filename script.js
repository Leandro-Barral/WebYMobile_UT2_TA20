const imagen = document.getElementById("imagen");

imagen.addEventListener("mouseover", () => {
    imagen.src = "imagen-alternativa.jpg";
    imagen.alt = "Imagen Alternativa";
});

imagen.addEventListener("mouseout", () => {
    imagen.src = "imagen-original.jpg";
    imagen.alt = "Imagen Original";
});