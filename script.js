let guitarMoving = false;
let music = document.getElementById("music");
let lyricsContainer = document.getElementById("lyrics");

function toggleGuitar() {
    let guitar = document.querySelector(".guitar");
    guitar.classList.toggle("guitar-moving");
    guitarMoving = !guitarMoving;
}

function playMusic() {
    if (music.paused) {
        music.play();
        startLyricsSync();
    } else {
        music.pause();
        stopLyricsSync();
    }
}

function loadMusic(event) {
    let file = event.target.files[0];
    if (file) {
        let objectURL = URL.createObjectURL(file);
        music.src = objectURL;
    }
}

// Lista de letras con el tiempo exacto en segundos
const lyrics = [
    { time: 15.0, text: "Así que ella dijo: ¿Cuál es el problema, cariño?" },
    { time: 19.5, text: "Yo no sé cuál es el problema" },
    { time: 23.2, text: "Bueno, tal vez yo esté enamorado (enamorado)" },
    { time: 26.8, text: "Lo pienso cada vez que lo pienso" },
    { time: 29.0, text: "No puedo dejar de pensar en eso" },
    { time: 32.2, text: "¿Cuánto tiempo más llevará para curarlo?" },
    { time: 36.5, text: "Solo para curarlo porque no puedo ignorarlo si es amor" },
    { time: 42.0, text: "Me hace querer dar la vuelta y enfrentarlo" },
    { time: 46.2, text: "Pero no sé nada sobre el amor" },
    { time: 51.0, text: "Vamos, vamos, acelera un poco más" },
    { time: 55.4, text: "Vamos, vamos, el mundo nos seguirá" },
    { time: 59.1, text: "Vamos, vamos, porque todo el mundo busca el amor" },
    { time: 66.0, text: "Así que dije: Soy una bola de nieve corriendo" },
    { time: 72.3, text: "Corriendo hacia la primavera" },
    { time: 76.8, text: "De donde viene todo este amor" },
    { time: 80.6, text: "Derritiéndose bajo el cielo azul" },
    { time: 84.5, text: "Gritando luz del sol" },
    { time: 89.2, text: "Brillando amor" },
    { time: 94.1, text: "Bueno, cariño, me entrego" },
    { time: 98.7, text: "Al helado de fresa" },
    { time: 102.3, text: "Que este amor nunca se acabe" },
    { time: 107.4, text: "Bueno, no quise hacerlo" },
    { time: 111.5, text: "Pero no hay escapatoria de tu amor" },
    { time: 116.2, text: "Estos rayos de luz significan que" },
    { time: 120.7, text: "Nunca estamos solos, nunca estamos solos" },
    { time: 125.1, text: "¡No!, ¡no!" },
    { time: 130.5, text: "Vamos, vamos, acércate un poco más" },
    { time: 134.8, text: "Vamos, vamos, quiero oírte susurrar" },
    { time: 138.9, text: "Vamos, vamos, acurrúcate en mi amor" },
    { time: 143.5, text: "Vamos, vamos, salta un poco más alto" },
    { time: 148.3, text: "Vamos, vamos, si te sientes un poco más ligero" },
    { time: 152.7, text: "Vamos, vamos, érase una vez, estamos enamorados" },
    { time: 160.2, text: "Estamos accidentalmente enamorados" },
    { time: 170.1, text: "Accidentalmente enamorados" },
    { time: 180.4, text: "Accidentalmente enamorados" },
    { time: 190.7, text: "Accidentalmente enamorados" },
    { time: 200.0, text: "Accidentalmente enamorados" },
    { time: 210.6, text: "Accidentalmente enamorados" },
    { time: 220.2, text: "Accidentalmente enamorados" },
    { time: 230.8, text: "Accidentalmente enamorados" },
    { time: 240.3, text: "Accidentalmente" },
    { time: 250.6, text: "Estoy enamorado, estoy enamorado" },
    { time: 260.5, text: "Estoy enamorado, estoy enamorado" },
    { time: 270.2, text: "Accidentalmente" },
    { time: 280.3, text: "Vamos, vamos, gira un poco más despacio" },
    { time: 290.8, text: "Vamos, vamos, y el mundo será un poco más brillante" },
    { time: 300.2, text: "Vamos, vamos, solo entrégate a su amor" },
    { time: 310.4, text: "Estoy enamorado" }
];

let lyricsIndex = 0;
let lyricsInterval;

function startLyricsSync() {
    lyricsIndex = 0;
    lyricsContainer.innerHTML = "";
    
    lyricsInterval = setInterval(() => {
        if (lyricsIndex < lyrics.length) {
            let currentTime = music.currentTime;
            if (currentTime >= lyrics[lyricsIndex].time) {
                lyricsContainer.innerHTML = lyrics[lyricsIndex].text;
                lyricsIndex++;
            }
        } else {
            clearInterval(lyricsInterval);
        }
    }, 500);
}

function stopLyricsSync() {
    clearInterval(lyricsInterval);
    lyricsContainer.innerHTML = "";
}
