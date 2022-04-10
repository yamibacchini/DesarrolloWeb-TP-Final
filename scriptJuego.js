const imagenes=document.querySelectorAll('.imagenes img');

imagenes.forEach(x => x.addEventListener('dragstart', (evento) => evento.dataTransfer.setData("Text", x.id)));

const destinos=document.querySelectorAll('.destinos div');

let cargarImagenEnDestino = (evento) => {
    let imagen = document.getElementById(evento.dataTransfer.getData("Text"));
    evento.target.innerHTML = `<img width='${imagen.width}' height='${imagen.height}' src="${imagen.src}"></img>`;
    imagen.style.visibility = "hidden";
}

destinos.forEach(x => {
    x.addEventListener('drop', cargarImagenEnDestino);
    x.addEventListener('dragover', (evento) => evento.preventDefault());
});

const reiniciar = () => {
    imagenes.forEach(x => x.style.visibility="visible");
    destinos.forEach(x => x.innerHTML="<p>Arrastre y suelte la imagen aquí</p>");
};