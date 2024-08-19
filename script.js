const imagen = document.getElementById("imagen");

imagen.addEventListener("mouseover", () => {
    imagen.src = "imagen-alternativa.jpg";
});

imagen.addEventListener("mouseout", () => {
    imagen.src = "imagen-original.jpg";
});