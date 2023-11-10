let hora = document.getElementById("hora");
let minutos = document.getElementById("minutos");
let segundos = document.getElementById("segundos");

let set_clock = setInterval(() => {
    let now = new Date();

    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    // console.log(hr, min, sec)

    let grados_hr = hr * 30 + min / 2;
    let grados_min = min * 6 + sec / 10;
    let grados_sec = sec * 6;

    // console.log(grados_hr, grados_min, grados_sec)

    hora.style.transform = `rotate(${grados_hr}deg)`;
    minutos.style.transform = `rotate(${grados_min}deg)`;
    segundos.style.transform = `rotate(${grados_sec}deg)`;
}, 1000);

