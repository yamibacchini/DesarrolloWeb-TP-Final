let videoHistoria =  document.getElementById("video-historia");

let iniciarVideo = () => {
    videoHistoria.play();
}

let pausarVideo = () => {
    videoHistoria.pause();
}

videoHistoria.addEventListener("loadedmetadata",() => {
    let duracionBloque = document.getElementById('duracion');
    duracionBloque.textContent=`Duración video: ${Math.round(videoHistoria.duration)}`;
});